/*
  Every project on the site lives in this file.

  To add photos or videos to a project:
    1. Put the files in media/<project id>/ (for example media/drone/).
    2. Run `python tools/optimize_images.py` so photos get web-sized copies.
    3. Add the file names to that project's `media` list below, in the order
       they should appear. Use the original name (photo.png, clip.mp4).
       Add a caption with { file: 'photo.png', caption: 'What it shows' }.

  To add a project, copy one block, give it a new id, and make a matching
  folder in media/. `featured: true` puts it in the large row at the top.
  `cover` is the image shown on the project grid. `fit: 'contain'` keeps a
  CAD render or drawing from being cropped.
*/
window.PROJECTS = [
  {
    id: 'drone',
    title: 'Ultralight drone',
    summary: 'Drone arms shaped with Fusion 360 generative design, then checked against stress studies.',
    featured: true,
    block: {
      Role: 'Solo build',
      Tools: 'Fusion 360 generative design, FEA',
      Status: 'In progress, updated Feb 2026',
    },
    cover: 'hook-render.png',
    media: [
      { file: 'real-drone.png', caption: 'Printed frame' },
      { file: 'hook-render.png', caption: 'Render with grabber hook' },
      { file: 'flush-render.png', caption: 'Render, flush configuration' },
      { file: 'generative-setup.png', caption: 'Obstacle, preserve, and starting geometries for the generative study' },
      { file: 'topology-optimization.png', caption: 'Topology optimization result' },
      { file: 'study-comparison.png', caption: 'Comparing generated arm designs' },
      { file: 'stress-analysis.png', caption: 'Stress analysis' },
      { file: 'assembly.png', caption: 'Assembly' },
      { file: 'arm.png', caption: 'Generated arm' },
      { file: 'wiring.png', caption: 'Wiring' },
      { file: 'stryfe-drawing.png', caption: 'Drawing' },
    ],
    sections: [
      { h: 'Overview', p: "I'm using Fusion's generative design tools to optimize topology, and used them to make the arms of this drone. I run multiple stress studies and compare them to understand where each design is strong and where it isn't." },
    ],
    links: [
      { label: 'Video: 3D printed grabber', url: 'https://drive.google.com/file/d/1vxcKaUo88aQQ7Kzf-58znjH3LZNbvcAy/view?usp=sharing' },
      { label: 'Video: CAD grabber', url: 'https://drive.google.com/file/d/1lUCOVfm7Q1u4oQNq61dfDUat938u98jP/view?usp=sharing' },
      { label: 'Video: assembly instructions', url: 'https://drive.google.com/file/d/1MNhp6VxVKHo0xSadOMz7RimyR1EPa50m/view?usp=sharing' },
    ],
  },
  {
    id: 'airship',
    title: 'NASA SEES high-altitude airship',
    summary: 'CAD lead on a sensor-carrying prototype airship built to study Titan’s atmosphere.',
    featured: true,
    block: {
      Role: 'CAD lead',
      Tools: 'Fusion 360, CFD',
      Program: 'NASA SEES, 2025',
    },
    cover: 'team.png',
    media: [
      { file: 'flight.mp4', caption: 'Flight test' },
      { file: 'swift-turn.mp4', caption: 'Turning maneuver' },
      { file: 'motor-test.mp4', caption: 'Rear vectoring propeller test' },
      { file: 'team.png', caption: 'The airship team' },
      { file: 'gondola-drawing.png', caption: 'Gondola assembly drawing' },
      { file: 'research-poster.png', caption: 'Research poster' },
    ],
    sections: [
      { h: 'What I did', list: [
        'Designed the main gondola, rear vectoring propeller, and skis in Fusion 360',
        'Made sure the electronics fit, and made the animations for our presentation',
        'Ran CFD simulations of Earth and Titan conditions with a teammate',
      ] },
      { h: 'Testing and results', p: 'We tested the rear vectoring propeller motor system and flew multiple flight tests, including turns. Onboard sensors collected air pressure, gas concentration, magnetic field strength, and altitude.' },
    ],
    links: [
      { label: 'Watch the full presentation', url: 'https://youtu.be/NFG9HDeTTIg?si=Bp6K-PbthUrTKI15' },
    ],
  },
  {
    id: 'claw',
    title: 'Nitinol-driven compliant claw',
    summary: 'A robot arm with a compliant claw, testing how efficient and strong nitinol actuation can be.',
    featured: true,
    block: {
      Role: 'Collaborative research',
      Tools: 'Onshape, ESP32, servos, stepper',
    },
    cover: 'arm-photo.png',
    media: [
      { file: 'arm-photo.png', caption: 'The arm' },
      { file: 'proto-claw.mp4', caption: 'Prototype claw' },
      { file: 'claw-test.mp4', caption: 'Claw test' },
      { file: 'nitinol-claw-render.png', caption: 'Render' },
      { file: 'exploded-claw.png', caption: 'Exploded view' },
      { file: 'gears.png', caption: 'Shoulder gear system on the underside of the arm' },
      { file: 'evo-13.png', caption: 'Claw iteration 13' },
      { file: 'evo-14.png', caption: 'Claw iteration 14' },
      { file: 'evo-15.png', caption: 'Claw iteration 15' },
      { file: 'evo-16.png', caption: 'Claw iteration 16' },
    ],
    sections: [
      { h: 'Overview', p: 'A collaboration on a nitinol-driven compliant claw, researching its efficiency and strength. The project bridges mechanical and electrical engineering.' },
      { h: 'Mechanical design', p: "A gear system on the underside of the arm drives the shoulder axis, giving precise control and mechanical advantage for the nitinol actuators." },
      { h: 'Key features', list: ['Compliant claw', 'Gear-driven stepper motor for direction control', 'ESP32 and servos'] },
    ],
    links: [
      { label: 'Open the Onshape CAD', url: 'https://cad.onshape.com/documents/e8d27c91940cf73a51db02f1/w/dc132d4c80c148c2bfdc9d62/e/7f1896d8a926cbb8048dab3b' },
    ],
  },
  {
    id: 'dragster',
    title: 'CO₂ dragster',
    summary: 'An aerodynamic dragster tuned in CFD, with all four wheels cut to the weight of the original one.',
    block: {
      Tools: 'Onshape, Autodesk CFD',
      Material: 'Glass-fiber PETG, steel axles',
    },
    cover: 'side.png',
    fit: 'contain',
    model: 'model.stl',
    media: [
      { file: 'side.png', caption: 'Finished body' },
      { file: 'underside.png', caption: 'Underside' },
      { file: 'views.png', caption: 'Drawing views' },
      { file: 'cfd.png', caption: 'CFD flow study' },
      { file: 'body-weight.png', caption: 'Body weight' },
      { file: 'wheel-weight.png', caption: 'Weight of all four optimized wheels' },
      { file: 'single-wheel-weight.png', caption: 'Weight of one original wheel' },
    ],
    sections: [
      { h: 'Materials', list: ['Steel axles with graphite lubricant', 'Glass-fiber-filled PETG body and wheels', 'Clear spray paint finish'] },
      { h: 'Design', p: 'I minimized drag: the front wheels are recessed, the rear is tapered, and the wheels are fully enclosed. Internal ribs and changes to the axle holes added stiffness and cut friction.' },
      { h: 'Weight', p: 'Currently 70 g, with a target of 50 g. I lowered infill and wall width in the slicer, and made the wheels smaller and thinner without losing strength. All four wheels now weigh as much as one of the original wheels did.' },
    ],
    links: [
      { label: 'Open the Onshape CAD', url: 'https://cad.onshape.com/documents/6e3e76040f1aba262571c647/w/0225a9de05ecfe290eec82e6/e/948efcbc3e1bf7e9b1a49d6f?renderMode=0&uiState=690578fd2d91d89ebd4ffd2c' },
    ],
  },
  {
    id: 'robot-dog',
    title: 'Robot dog',
    summary: 'A quadruped robot combining mechanical design, electronics, and code for walking on its own.',
    block: {
      Tools: 'Onshape, servos',
      Status: 'In progress',
    },
    cover: 'robot-dog.png',
    fit: 'contain',
    model: 'model.stl',
    media: [
      { file: 'robot-dog.png', caption: 'The robot dog' },
      { file: 'leg-jump.mp4', caption: 'Leg jump test' },
      { file: 'front-test.mp4', caption: 'Front legs test' },
      { file: 'leg-test.mp4', caption: 'Single leg test' },
    ],
    sections: [
      { h: 'Overview', p: "I'm developing a quadruped robot that brings together mechanical design, electrical systems, and programming for autonomous movement." },
    ],
    links: [
      { label: 'Open the Onshape CAD', url: 'https://cad.onshape.com/documents/01445f028ef126d7a850e4fd/w/a7c096875dc126659fe4673b/e/7d0db1c893811f7578f3510d?renderMode=0&uiState=69057933d3a77ba7bcac98ad' },
    ],
  },
  {
    id: 'solar-sprint',
    title: 'Senior Solar Sprint',
    summary: 'A solar-powered RC car. I reverse-engineered a missing SPDT switch and printed a replacement.',
    block: {
      Result: '1st place, TSA 2026',
      Tools: 'CAD, 3D printing',
    },
    cover: 'spdt-switch.png',
    fit: 'contain',
    media: [
      { file: 'drawing.png', caption: 'Car drawing' },
      { file: 'spdt-switch.png', caption: 'Printed SPDT switch: a screw head makes contact with aluminum foil tape' },
    ],
    sections: [
      { h: 'Overview', p: 'I engineered a solar-powered RC car. When the SPDT switch was missing, I reverse-engineered it, then designed and 3D printed a replacement.' },
    ],
  },
  {
    id: 'air-filter',
    title: 'Two-stage carbon air filter',
    summary: 'A printed housing for activated charcoal pellets that traps VOCs.',
    block: {
      Tools: 'CAD, 3D printing',
      Status: 'Version 2 in progress',
    },
    cover: 'exploded.png',
    fit: 'contain',
    media: [
      { file: 'exploded.png', caption: 'V1 carbon pellet attachment and V2 full housing' },
    ],
    sections: [
      { h: 'Overview', p: "I designed and 3D printed a housing for activated charcoal pellets to trap VOCs and improve air quality. I'm now designing a separate filtration system with carbon and HEPA filters." },
    ],
  },
  {
    id: 'printer',
    title: 'Custom 3D printer',
    summary: 'A 3D printer I’m building from scratch, with upgraded mechanical parts.',
    block: {
      Status: 'In progress',
    },
    cover: 'thumbnail.png',
    fit: 'contain',
    model: 'model.stl',
    media: [
      { file: 'thumbnail.png', caption: 'Black parts are printed; blue parts still need to be printed' },
    ],
    sections: [
      { h: 'Overview', p: "I'm building and modifying a 3D printer from scratch with upgraded mechanical components." },
    ],
  },
  {
    id: 'cell',
    title: 'Specialized cell model',
    summary: 'A remote-controlled sperm cell with a gearbox that spins the flagellum.',
    block: {
      Class: 'Biology',
    },
    cover: 'model-photo.jpg',
    media: [
      { file: 'model-photo.jpg', caption: 'The model' },
      { file: 'signs-of-life.mp4', caption: 'Driving' },
      { file: 'spin.mp4', caption: 'Spinning' },
    ],
    sections: [
      { h: 'Overview', p: 'A remote-controlled sperm cell model. A gearbox rotates the flagellum realistically, and hidden wheels and motors steer it.' },
      { h: 'Features', list: ['Custom gearbox for flagellum rotation', 'Hidden wheel and motor system for steering', 'Remote control', 'Spins and drives in any direction'] },
    ],
  },
  {
    id: 'packaging',
    title: 'Chicken Cannedwich',
    summary: 'A chicken sandwich in a can for truckers, with modular printed packaging.',
    block: {
      Class: 'Biology',
      Tools: 'CAD, 3D printing',
    },
    cover: 'porta-grill.png',
    media: [
      { file: 'porta-grill.png', caption: 'Porta-Grill mock ad' },
      { file: 'cannedwich.png', caption: 'The Cannedwich' },
      { file: 'instagram-post.png', caption: 'Mock Instagram post' },
    ],
    sections: [
      { h: 'Overview', p: 'The Chicken Cannedwich is a chicken sandwich in a can, made for truckers. The chicken is preserved in pickle juice, and the modular packaging has a print-in-place drying mechanism that keeps the buns and chicken fresh.' },
      { h: 'What I made', list: ['Mock Instagram promotional posts', '3D printed packaging prototypes', 'Several flavors, including a grilled version'] },
    ],
  },
  {
    id: 'side-projects',
    title: 'Side projects',
    summary: 'Things I made for fun and to learn new skills.',
    cover: 'gear-phone-stand.png',
    fit: 'contain',
    media: [
      { file: 'thumbnail.png', caption: 'A few of them together' },
      { file: 'vise-phone-stand.png', caption: 'Vise-inspired phone stand' },
      { file: 'gear-phone-stand.png', caption: 'Gear-driven phone stand' },
    ],
    sections: [
      { h: 'The list', list: [
        'Gear-driven phone stand',
        'Vise-inspired phone stand',
        'CFD flight tests',
        'Sheet metal stamp holder',
        'Marble maze',
        'Galactide Keychain, a 3D printing business I cofounded',
        'Passive speaker, freshman year engineering',
        'CNC machine, in progress (tolerances were off)',
        'Bi-stable point absorber, in progress',
      ] },
    ],
  },
];
