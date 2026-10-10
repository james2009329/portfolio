(function () {
  'use strict';

  const projects = window.PROJECTS || [];
  const byId = Object.fromEntries(projects.map(p => [p.id, p]));
  const $ = sel => document.querySelector(sel);
  const VIDEO = /\.(mp4|webm|mov)$/i;
  const PHOTO = /\.(png|jpe?g)$/i;

  // media/<project>/<file> plus its web-sized copies
  const path = (p, file) => `media/${p.id}/${file}`;
  const web = (p, file, small) => PHOTO.test(file) ? path(p, file.replace(PHOTO, small ? '.sm.webp' : '.webp')) : path(p, file);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const item = m => typeof m === 'string' ? { file: m } : m;

  function blockTable(block) {
    if (!block) return '';
    const rows = Object.entries(block).map(([k, v]) => `<tr><th scope="row">${esc(k)}</th><td>${esc(v)}</td></tr>`).join('');
    return `<table class="block">${rows}</table>`;
  }

  /* ---------- Grid ---------- */
  function tile(p) {
    const fit = p.fit === 'contain' ? ' contain' : '';
    return `<button class="tile" type="button" data-open="${p.id}" aria-label="Open ${esc(p.title)}">
      <div class="tile-img${fit}"><img src="${web(p, p.cover, true)}" alt="" loading="lazy" decoding="async"></div>
      <div class="tile-text"><h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p></div>
      ${p.featured ? blockTable(p.block) : ''}
    </button>`;
  }
  $('#featured').innerHTML = projects.filter(p => p.featured).map(tile).join('');
  $('#grid').innerHTML = projects.filter(p => !p.featured).map(tile).join('');
  document.addEventListener('click', e => {
    const t = e.target.closest('[data-open]');
    if (t) location.hash = 'project/' + t.dataset.open;
  });

  /* ---------- Project sheet ---------- */
  const sheet = $('#sheet');
  let current = null, index = 0, returnFocus = null;

  function renderStage() {
    const m = item(current.media[index]);
    const stage = $('#stage');
    if (VIDEO.test(m.file)) {
      stage.innerHTML = `<video controls playsinline preload="metadata" src="${path(current, m.file)}#t=0.1"></video>`;
    } else {
      stage.innerHTML = `<img src="${web(current, m.file)}" alt="${esc(m.caption || current.title)}">`;
    }
    $('#stage-cap').textContent = m.caption || '';
    document.querySelectorAll('#thumbs button').forEach((b, i) => b.setAttribute('aria-current', i === index));
  }

  function openProject(id) {
    const p = byId[id];
    if (!p) return;
    current = p; index = 0;
    $('#sheet-title').textContent = p.title;

    const media = (p.media || []).map(item);
    $('#thumbs').innerHTML = media.length > 1 ? media.map((m, i) => {
      const isVid = VIDEO.test(m.file);
      const inner = isVid
        ? `<video muted preload="metadata" src="${path(p, m.file)}#t=0.1" tabindex="-1"></video><span class="play"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7 5l8 5-8 5z" fill="currentColor"/></svg></span>`
        : `<img src="${web(p, m.file, true)}" alt="" loading="lazy">`;
      return `<button type="button" role="listitem" data-i="${i}" aria-label="${esc((isVid ? 'Video: ' : 'Photo: ') + (m.caption || i + 1))}">${inner}</button>`;
    }).join('') : '';
    $('#thumbs').querySelectorAll('video').forEach(v => { v.style.cssText = 'width:100%;height:100%;object-fit:cover;pointer-events:none'; });

    const sections = (p.sections || []).map(s => `<div><h3>${esc(s.h)}</h3>${s.p ? `<p>${esc(s.p)}</p>` : ''}${s.list ? `<ul>${s.list.map(li => `<li>${esc(li)}</li>`).join('')}</ul>` : ''}</div>`).join('');
    const links = (p.links || []).map(l => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join('');
    $('#notes').innerHTML = `
      <p class="lead">${esc(p.summary)}</p>
      ${blockTable(p.block)}
      ${sections}
      ${links ? `<div class="links">${links}</div>` : ''}
      ${p.model ? `<button class="btn" type="button" data-model="${p.id}">View the 3D model</button>` : ''}`;

    $('.viewer').hidden = media.length === 0;
    if (media.length) renderStage();
    if (!sheet.open) { returnFocus = document.activeElement; sheet.showModal(); }
    sheet.scrollTop = 0;
  }

  function closeProject() {
    if (sheet.open) sheet.close();
  }
  sheet.addEventListener('close', () => {
    $('#stage').innerHTML = '';
    if (location.hash.startsWith('#project/')) history.replaceState(null, '', location.pathname + location.search + '#projects');
    if (returnFocus && returnFocus.focus) returnFocus.focus();
  });

  $('#thumbs').addEventListener('click', e => {
    const b = e.target.closest('button[data-i]');
    if (b) { index = +b.dataset.i; renderStage(); }
  });
  function step(d) {
    if (!current || !current.media.length) return;
    index = (index + d + current.media.length) % current.media.length;
    renderStage();
  }
  sheet.addEventListener('keydown', e => {
    if (e.target.closest('video, a, input')) return;
    if (e.key === 'ArrowRight') { e.preventDefault(); step(1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); }
  });
  sheet.addEventListener('click', e => {
    if (e.target === sheet) closeProject();          // click on the backdrop
    if (e.target.closest('[data-close]')) closeProject();
    const mb = e.target.closest('[data-model]');
    if (mb) openModel(byId[mb.dataset.model]);
  });

  /* ---------- Full-size photo ---------- */
  const zoom = $('#zoom');
  $('#stage').addEventListener('click', e => {
    if (e.target.tagName !== 'IMG') return;
    const m = item(current.media[index]);
    $('#zoom-img').src = path(current, m.file);          // the original file
    $('#zoom-img').alt = m.caption || current.title;
    zoom.showModal();
  });
  zoom.addEventListener('click', () => zoom.close());

  /* ---------- Routing: #project/<id> opens a project, so each one has a shareable link ---------- */
  function route() {
    const m = location.hash.match(/^#project\/([\w-]+)/);
    if (m && byId[m[1]]) openProject(m[1]);
    else if (sheet.open) sheet.close();
  }
  window.addEventListener('hashchange', route);
  route();

  /* ---------- Theme ---------- */
  $('.theme').addEventListener('click', () => {
    const root = document.documentElement;
    const dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = dark ? 'light' : 'dark';
    try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
  });

  /* ---------- 3D model viewer (three.js loads only when needed) ---------- */
  const modelDlg = $('#model');
  let three = null, stop = null;

  function loadThree() {
    if (three) return three;
    three = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
      s.onload = () => resolve(window.THREE);
      s.onerror = () => { three = null; reject(new Error('three.js failed to load')); };
      document.head.appendChild(s);
    });
    return three;
  }

  function parseSTL(THREE, buf) {
    const dv = new DataView(buf);
    const faces = dv.getUint32(80, true);
    const geo = new THREE.BufferGeometry();
    if (84 + faces * 50 === buf.byteLength) {
      const pos = new Float32Array(faces * 9), nor = new Float32Array(faces * 9);
      for (let f = 0; f < faces; f++) {
        const o = 84 + f * 50;
        const nx = dv.getFloat32(o, true), ny = dv.getFloat32(o + 4, true), nz = dv.getFloat32(o + 8, true);
        for (let v = 0; v < 3; v++) {
          const vo = o + 12 + v * 12, i = f * 9 + v * 3;
          pos[i] = dv.getFloat32(vo, true); pos[i + 1] = dv.getFloat32(vo + 4, true); pos[i + 2] = dv.getFloat32(vo + 8, true);
          nor[i] = nx; nor[i + 1] = ny; nor[i + 2] = nz;
        }
      }
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      geo.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
    } else {
      const text = new TextDecoder().decode(buf);
      const pts = [...text.matchAll(/vertex\s+([-\d.eE+]+)\s+([-\d.eE+]+)\s+([-\d.eE+]+)/g)].flatMap(m => [+m[1], +m[2], +m[3]]);
      geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pts), 3));
      geo.computeVertexNormals();
    }
    return geo;
  }

  async function openModel(p) {
    const status = $('#model-status');
    status.textContent = 'Loading model…';
    status.hidden = false;
    modelDlg.showModal();
    try {
      const [THREE, buf] = await Promise.all([loadThree(), fetch(path(p, p.model)).then(r => { if (!r.ok) throw new Error(r.status); return r.arrayBuffer(); })]);
      if (!modelDlg.open) return;
      const canvas = $('#model-canvas');
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
      renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x15181c);
      const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100000);
      scene.add(new THREE.HemisphereLight(0xffffff, 0x334055, 0.8));
      const sun = new THREE.DirectionalLight(0xffffff, 0.7); sun.position.set(1, 2, 3); scene.add(sun);

      const geo = parseSTL(THREE, buf);
      geo.computeBoundingBox(); geo.center();
      const size = geo.boundingBox.getSize(new THREE.Vector3()).length();
      const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0x9fb0d8, metalness: 0.15, roughness: 0.55 }));
      mesh.rotation.x = -Math.PI / 2;
      const pivot = new THREE.Group(); pivot.add(mesh); scene.add(pivot);
      let dist = size * 1.4;
      status.hidden = true;

      const resize = () => {
        const w = canvas.clientWidth, h = canvas.clientHeight;
        renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
      };
      resize();

      let rx = 0.45, ry = 0.6, drag = null, auto = true, raf;
      const pointers = new Map(); let pinch = 0;
      canvas.onpointerdown = e => { canvas.setPointerCapture(e.pointerId); pointers.set(e.pointerId, e); drag = { x: e.clientX, y: e.clientY }; auto = false; };
      canvas.onpointermove = e => {
        if (!pointers.has(e.pointerId)) return;
        pointers.set(e.pointerId, e);
        if (pointers.size === 2) {
          const [a, b] = [...pointers.values()];
          const d = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
          if (pinch) dist = Math.max(size * 0.3, Math.min(size * 5, dist * pinch / d));
          pinch = d; return;
        }
        ry += (e.clientX - drag.x) * 0.01; rx += (e.clientY - drag.y) * 0.01;
        rx = Math.max(-1.5, Math.min(1.5, rx));
        drag = { x: e.clientX, y: e.clientY };
      };
      canvas.onpointerup = canvas.onpointercancel = e => { pointers.delete(e.pointerId); pinch = 0; };
      canvas.onwheel = e => { e.preventDefault(); dist = Math.max(size * 0.3, Math.min(size * 5, dist * (1 + e.deltaY * 0.001))); };
      window.addEventListener('resize', resize);

      const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
      (function frame() {
        raf = requestAnimationFrame(frame);
        if (auto && !reduce) ry += 0.004;
        pivot.rotation.set(rx, ry, 0);
        camera.position.set(0, 0, dist);
        renderer.render(scene, camera);
      })();
      stop = () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); geo.dispose(); renderer.dispose(); };
    } catch (err) {
      status.textContent = "The 3D model didn't load. Check your connection and try again.";
    }
  }
  modelDlg.addEventListener('click', e => { if (e.target.closest('[data-close]') || e.target === modelDlg) modelDlg.close(); });
  modelDlg.addEventListener('close', () => { if (stop) stop(); stop = null; });
  zoom.addEventListener('cancel', e => { e.stopPropagation(); });
})();
