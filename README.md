# James Lin, engineering portfolio

Mechanical engineering projects by James Lin, Downingtown STEM Academy class of 2027.

## How the site is put together

- `index.html` holds the page itself: the intro, awards, skills, about, and contact.
- `projects.js` holds every project: titles, write-ups, photos, videos, links, and 3D models.
- `app.js` builds the project grid and the project pages from `projects.js`.
- `style.css` holds the styles.
- `media/<project>/` holds each project's photos, videos, and `.stl` models.
- `docs/` holds certificates. The resume stays at `James-Lin-Resume.pdf` so old links keep working.

Each project has its own link, for example `#project/airship`.

## Adding photos to a project

1. Put the files in that project's folder, for example `media/drone/`.
2. Run `python tools/optimize_images.py` to make web-sized copies (needs `pip install pillow`).
3. In `projects.js`, add `{ file: 'new-photo.png', caption: 'What it shows' }` to that project's `media` list.

## Skills

- **CAD:** Fusion 360, Onshape, SolidWorks, Tinkercad
- **3D printing:** prototyping, troubleshooting, and design optimization

## Connect

- [LinkedIn](https://www.linkedin.com/in/james-lin-72927a278/)
