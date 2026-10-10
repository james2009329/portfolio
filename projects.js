/*
  Every project on the site lives in this file.
  Photos and videos go in media/<project id>/ and are listed in `media`.
  Run `python tools/optimize_images.py` after adding photos.
*/
window.PROJECTS = [
  {
    id: 'drone',
    title: 'Ultralight Drone Prototype',
    summary: 'Generative design & stress analysis using Fusion 360 — Updated 2/24/2026',
    featured: true,
    block: {
      Tools: 'Fusion 360',
      Updated: '2/24/2026',
    },
    cover: 'hook-render.png',
    media: [
      'real-drone.png', 'hook-render.png', 'flush-render.png', 'study-comparison.png', 'wiring.png',
      'generative-setup.png', 'assembly.png', 'topology-optimization.png', 'stress-analysis.png',
      'stryfe-drawing.png', 'arm.png',
    ],
    sections: [
      { h: 'Overview', p: "Currently, I am working on optimizing topology using Fusion's generative design tools. I used this tool to make the arms of this drone! I compare and try to make sense of stress analysis through multiple studies." },
    ],
    links: [
      { label: 'Video of 3D Printed Grabber', url: 'https://drive.google.com/file/d/1vxcKaUo88aQQ7Kzf-58znjH3LZNbvcAy/view?usp=sharing' },
      { label: 'Video of CAD Grabber', url: 'https://drive.google.com/file/d/1lUCOVfm7Q1u4oQNq61dfDUat938u98jP/view?usp=sharing' },
      { label: 'Video of Assembly Instructions', url: 'https://drive.google.com/file/d/1MNhp6VxVKHo0xSadOMz7RimyR1EPa50m/view?usp=sharing' },
    ],
  },
  {
    id: 'airship',
    title: 'NASA SEES - High-Altitude Airship',
    summary: 'CAD lead for prototype airship with sensors for Titan atmospheric investigation',
    featured: true,
    block: {
      Role: 'CAD lead',
      Program: 'NASA SEES 2025',
    },
    cover: 'team.png',
    media: ['flight.mp4', 'motor-test.mp4', 'research-poster.png', 'gondola-drawing.png', 'swift-turn.mp4', 'team.png'],
    sections: [
      { h: 'Project Role', p: 'CAD lead for prototype airship with sensors for Titan atmospheric investigation.' },
      { h: 'Responsibilities', list: [
        'Designed main gondola, rear vectoring propeller, and skis in Fusion360',
        'Ensured electronics fit and created presentation animations',
        'Conducted CFD modeling simulating Earth and Titan conditions with teammate',
      ] },
      { h: 'Testing & Results', p: 'Successfully tested the rear vectoring propeller motor system and conducted multiple flight tests, including turning maneuvers. Sensors were also integrated to collect data, including: airpressure, gas concentration, magnetosphere field strength, and altitude.' },
    ],
    links: [
      { label: 'Watch Full Presentation', url: 'https://youtu.be/NFG9HDeTTIg?si=Bp6K-PbthUrTKI15' },
    ],
  },
  {
    id: 'claw',
    title: 'Nitinol-Driven Compliant Claw',
    summary: 'Nitinol-driven compliant claw mechanism researching efficiency and strength',
    featured: true,
    block: {
      Electronics: 'ESP 32 + Servos',
      CAD: 'Onshape',
    },
    cover: 'arm-photo.png',
    media: ['arm-photo.png', 'exploded-claw.png', 'evo-13.png', 'evo-14.png', 'evo-15.png', 'evo-16.png', 'gears.png', 'proto-claw.mp4', 'claw-test.mp4', 'nitinol-claw-render.png'],
    sections: [
      { h: 'Overview', p: 'Collaborating on a nitinol-driven compliant claw mechanism, researching efficiency and strength, bridging mechanical and electrical engineering.' },
      { h: 'Mechanical Design', p: "The underside of the arm features a gear system that drives the claw's shoulder axis. The gears provide precise control and mechanical advantage for the nitinol actuators." },
      { h: 'Key Features', list: ['Compliant claw', 'Gear-driven stepper motor directional control system', 'ESP 32 + Servos'] },
    ],
    links: [
      { label: 'View Onshape CAD', url: 'https://cad.onshape.com/documents/e8d27c91940cf73a51db02f1/w/dc132d4c80c148c2bfdc9d62/e/7f1896d8a926cbb8048dab3b' },
    ],
  },
  {
    id: 'diffy-swerve',
    title: 'Differential Swerve Drive',
    summary: 'Diffy swerve drivetrain with 8 NEMA17 stepper motors',
    cover: 'cad.jpg',
    media: ['driving.mp4', 'phone-control.mp4', 'module-test.mp4', 'module-close-up.mp4', 'cad.jpg'],
    sections: [
      { h: 'Overview', p: 'A differential swerve drivetrain driven by 8 NEMA17 stepper motors, sponsored by LDO Motors.' },
      { p: 'Worked with gao.lab.' },
      { h: 'Key Features', list: ['ESP32 + DRV stepper drivers', 'Controlled from a phone over WiFi', '290 mm wheelbase'] },
    ],
    links: [
      { label: 'gao.lab on Instagram', url: 'https://www.instagram.com/gao.lab/' },
    ],
  },
  {
    id: 'eye-switch',
    title: 'Eye-Operated Switch',
    summary: 'Cause-and-effect switch for students with multiple disabilities',
    cover: 'eye-switch.jpg',
    media: ['eye-switch.jpg', 'eye-switch-demo.mp4'],
    sections: [
      { h: 'Overview', p: 'An eye-operated cause-and-effect switch for students with multiple disabilities who have limited hand and foot function. It sits on a wheelchair tabletop and lets students use their eyes to turn on a toy.' },
      { h: 'Key Features', list: ['Repurposed Android phone for the camera, screen, speaker, and battery', 'ESP32 + relay powered from the phone over USB', 'Drives one toy'] },
    ],
  },
  {
    id: 'integrator',
    title: 'Mechanical Integrator',
    summary: 'Disk-and-wheel mechanical integrator — Summer 2026',
    cover: 'build.jpg',
    media: ['build.jpg', 'belt-path.jpg'],
    sections: [
      { h: 'Overview', p: 'A disk-and-wheel mechanical integrator I built over summer 2026. A belt-driven differential keeps both stepper motors stationary while the disk rotates and translates, which cuts carriage weight.' },
      { h: 'Materials', list: ['Almost fully 3D printed, including TPU belts, the disk, and the wheel', '2020 aluminum extrusion reused from my old Ender 3'] },
    ],
  },
  {
    id: 'printer',
    title: 'Custom 3D Printers',
    summary: 'Building from scratch with custom upgrades',
    cover: 'folding-printer-iso.jpg',
    fit: 'contain',
    model: 'model.stl',
    media: [
      'folding-printer-iso.jpg', 'folding-printer-top.jpg', 'folding-printer-bottom.jpg',
      'folding-printer-z-axis.jpg', 'folding-printer-belts.jpg',
      'frame-build.jpg', 'frame-motion-test.mp4', 'thumbnail.png',
    ],
    sections: [
      { h: 'Overview', p: 'Building and modifying 3D printers from scratch with upgraded mechanical components.' },
      { h: 'Folding 3D Printer', p: 'Working with gao.lab.' },
    ],
    links: [
      { label: 'gao.lab on Instagram', url: 'https://www.instagram.com/gao.lab/' },
    ],
  },
  {
    id: 'dragster',
    title: 'Dragster',
    summary: 'Aerodynamic dragster with optimized weight and wheel design',
    cover: 'side.png',
    fit: 'contain',
    model: 'model.stl',
    media: ['wheel-weight.png', 'single-wheel-weight.png', 'views.png', 'cfd.png', 'body-weight.png', 'side.png', 'underside.png'],
    sections: [
      { h: 'Materials', list: ['Steel axles with graphite lubricant', 'Glass fiber impregnated PETG body and wheels', 'Clear spray paint finish'] },
      { h: 'Design', p: 'Maximized aerodynamic efficiency by minimizing drag. Front wheels recessed, rear tapered, fully enclosed wheels. Internal ribs and hole modifications increased stiffness and minimized friction.' },
      { h: 'Weight Optimization', p: 'Current: 70 grams | Target: 50 grams' },
      { p: 'Optimized slicing by decreasing infill and wall width. Made wheels smaller and thinner while maintaining structural integrity. Currently reprinting to meet target weight. The weight of all four wheels were optimized to weigh as much as the starting weight of one wheel.' },
    ],
    links: [
      { label: 'View Onshape CAD', url: 'https://cad.onshape.com/documents/6e3e76040f1aba262571c647/w/0225a9de05ecfe290eec82e6/e/948efcbc3e1bf7e9b1a49d6f?renderMode=0&uiState=690578fd2d91d89ebd4ffd2c' },
    ],
  },
  {
    id: 'robot-dog',
    title: 'Robot Dog',
    summary: 'Quadrupedal robot with autonomous movement capabilities',
    cover: 'robot-dog.png',
    fit: 'contain',
    model: 'model.stl',
    media: ['robot-dog.png', 'leg-jump.mp4', 'front-test.mp4', 'leg-test.mp4'],
    sections: [
      { h: 'Overview', p: 'Developing a quadrupedal robot integrating mechanical design, electrical systems, and programming for autonomous movement.' },
    ],
    links: [
      { label: 'View Onshape CAD', url: 'https://cad.onshape.com/documents/01445f028ef126d7a850e4fd/w/a7c096875dc126659fe4673b/e/7d0db1c893811f7578f3510d?renderMode=0&uiState=69057933d3a77ba7bcac98ad' },
    ],
  },
  {
    id: 'cell',
    title: 'Specialized Cell Project',
    summary: 'Remote-controlled model with gearbox-driven motion',
    cover: 'model-photo.jpg',
    media: ['model-photo.jpg', 'signs-of-life.mp4', 'spin.mp4'],
    sections: [
      { h: 'Overview', p: 'Created a remote-controlled sperm model with a gearbox for realistic flagellum rotation, using hidden wheels and motors for directional movement.' },
      { h: 'Technical Features', list: ['Custom gearbox for flagellum rotation mechanism', 'Hidden wheel and motor system for navigation', 'Remote control integration', 'Spinning and directional movement capabilities'] },
    ],
  },
  {
    id: 'packaging',
    title: 'Chicken Cannedwich',
    summary: 'Mock product packaging for biology class project',
    cover: 'porta-grill.png',
    media: ['porta-grill.png', 'cannedwich.png', 'instagram-post.png'],
    sections: [
      { h: 'Overview', p: 'Created the "Chicken Cannedwich" - a chicken sandwich in a can designed for truckers. Designed custom modular packaging using CAD and 3D printing for a biology class project. Chicken is preserved in pickle juice, with a print-in-place drying mechanism. Modular packaging to keep buns and chicken fresh and tasty!' },
      { h: 'Product Design', list: ['Mock Instagram promotional posts', '3D printed packaging prototypes', 'Multiple flavor variants including grilled version'] },
    ],
  },
  {
    id: 'solar-sprint',
    title: 'Senior Solar Sprint',
    summary: 'Solar-powered RC car with custom 3D-printed components',
    cover: 'spdt-switch.png',
    fit: 'contain',
    media: ['spdt-switch.png', 'drawing.png'],
    sections: [
      { h: 'Overview', p: 'Engineered a solar-powered RC car and reverse-engineered a missing SPDT switch by designing and 3D-printing a replacement.' },
    ],
  },
  {
    id: 'air-filter',
    title: '2-Stage Carbon Air Filter',
    summary: '3D printed air filter housing for VOC removal',
    cover: 'exploded.png',
    fit: 'contain',
    media: ['exploded.png'],
    sections: [
      { h: 'Overview', p: 'Designed and 3D printed housing for activated charcoal pellets to trap VOCs and improve air quality. Currently designing a separate air filtration system with carbon and HEPA filters.' },
    ],
  },
  {
    id: 'side-projects',
    title: 'Side Projects',
    summary: 'Projects I made for fun and to learn new skills!',
    cover: 'gear-phone-stand.png',
    fit: 'contain',
    media: ['vise-phone-stand.png', 'gear-phone-stand.png', 'thumbnail.png'],
    sections: [
      { h: 'Overview', p: 'Here are some projects I made for fun and to learn new skills!', list: [
        'Gear driven phone stand',
        'Vise inspired phone stand',
        'CFD flight tests',
        'Sheet metal design - stamp holder',
        'Marble Maze',
        'Galactide Keychain, a 3D printing business I cofounded',
        'Passive speaker project - Freshman year engineering',
        'CNC machine - In progress, tolerances were off',
        'Bi-Stable Point Absorber - Also in progress',
      ] },
    ],
  },
];
