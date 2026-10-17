/*
  Every project on the site lives in this file.
  Photos and videos go in media/<project id>/ and are listed in `media`.
  Run `python tools/optimize_images.py` after adding photos.
*/
window.PROJECTS = [
  {
    id: 'drone',
    title: 'Ultralight Drone Prototype',
    summary: 'Generative design & stress analysis using Fusion 360',
    featured: true,
    block: {
      Tools: 'Fusion 360',
    },
    cover: 'hook-render.png',
    media: [
      'real-drone.png', 'hook-render.png', 'flush-render.png', 'study-comparison.png', 'wiring.png',
      'generative-setup.png', 'assembly.png', 'topology-optimization.png', 'stress-analysis.png',
      'stryfe-drawing.png', 'arm.png',
    ],
    sections: [
      { h: 'Overview', p: ["Currently, I am working on optimizing topology using Fusion's generative design tools. I used this tool to make the arms of this drone! I compare and try to make sense of stress analysis through multiple studies.", 'It runs on a SoloGood flight controller with 2207.5 motors, and I tuned it in Betaflight using DShot.'] },
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
      Program: 'NASA SEES',
    },
    cover: 'flight-loop.mp4',
    coverClip: true,
    media: ['flight.mp4', 'motor-test.mp4', 'research-poster.png', 'gondola-drawing.png', 'swift-turn.mp4', 'team.png'],
    sections: [
      { h: 'Project Role', p: ['CAD lead for prototype airship with sensors for Titan atmospheric investigation.', 'I was selected for NASA SEES as one of about 80 students out of more than 3,000 applicants, and did the program on site with the UT Austin Center for Space Research. Our team built a proof-of-concept airship from a high-altitude balloon to test a mission profile for studying Titan\'s atmosphere.'] },
      { h: 'Responsibilities', list: [
        'Designed main gondola, rear vectoring propeller, and skis in Fusion360',
        'Ensured electronics fit and created presentation animations',
        'Conducted CFD modeling simulating Earth and Titan conditions with teammate',
      ] },
      { h: 'Testing & Results', p: ['Successfully tested the rear vectoring propeller motor system and conducted multiple flight tests, including turning maneuvers. Sensors were also integrated to collect data, including: air pressure, gas concentration, magnetosphere field strength, and altitude.', 'Our research was presented at the AGU Fall Meeting in New Orleans.'] },
      { h: 'Microgravity Filtration Proposal', p: 'I also co-wrote a research proposal with my SEES roommate on filtering 0.3 μm particles in microgravity using graphene-modified HEPA and laser-induced graphene filters. It placed 3rd out of about 100 proposals, which made me the alternate for the zero-g research team.' },
    ],
    links: [
      { label: 'Watch Full Presentation', url: 'https://youtu.be/NFG9HDeTTIg?si=Bp6K-PbthUrTKI15' },
    ],
  },
  {
    id: 'claw',
    title: 'Robot Arm & Nitinol Claw',
    summary: 'Nitinol-driven compliant claw mechanism researching efficiency and strength',
    featured: true,
    block: {
      Electronics: 'ESP 32 + Servos',
      CAD: 'Onshape',
    },
    cover: 'arm-photo.png',
    media: ['arm-photo.png', 'exploded-claw.png', 'evo-13.png', 'evo-14.png', 'evo-15.png', 'evo-16.png', 'gears.png', 'proto-claw.mp4', 'claw-test.mp4', 'nitinol-claw-render.png'],
    sections: [
      { h: 'Overview', p: ['Collaborating on a nitinol-driven compliant claw mechanism, researching efficiency and strength, bridging mechanical and electrical engineering.', 'The claw was my DVSF science fair project with a partner. We ran FEA on the claw and tested 3D-printed prototypes. It placed 3rd out of about 50 team projects and won the West Pharmaceuticals Best Team Award ($700).'] },
      { h: 'Mechanical Design', p: "The underside of the arm features a gear system that drives the claw's shoulder axis. The gears provide precise control and mechanical advantage for the nitinol actuators." },
      { h: 'Key Features', list: ['Compliant claw', 'Gear-driven stepper motor directional control system', 'ESP 32 + Servos'] },
      { h: 'Design Changes', list: ['Cut a channel in the mount to make installation easier, then reinforced it', 'Resized the arm holes to fit a circular servo horn', 'Added a lip for the electronics tray and screw holes for a bottom lid', 'Added another degree of freedom to the claw'] },
    ],
    links: [
      { label: 'View Onshape CAD', url: 'https://cad.onshape.com/documents/e8d27c91940cf73a51db02f1/w/dc132d4c80c148c2bfdc9d62/e/7f1896d8a926cbb8048dab3b' },
    ],
  },
  {
    id: 'diffy-swerve',
    title: 'Differential Swerve Drive',
    summary: 'Diffy swerve drivetrain with 8 NEMA17 stepper motors',
    cover: 'driving-loop.mp4',
    coverClip: true,
    media: ['driving.mp4', 'phone-control.mp4', 'module-test.mp4', 'module-close-up.mp4', 'cad.jpg'],
    sections: [
      { h: 'Overview', p: ['A differential swerve drivetrain driven by 8 NEMA17 stepper motors, sponsored by LDO Motors.', 'Each of the four modules uses two motors as a differential. Turning both motors the same way drives the wheel, and turning them against each other steers it, so every wheel can drive and point in any direction.', 'It drives and steers fully. The ESP32 hosts a web page with a joystick, so I drive it from my phone over WiFi.'] },
      { p: 'Worked with gao.lab.' },
      { h: 'Key Features', list: ['ESP32 + DRV stepper drivers', 'Drive gear ratio 1.969:1, steering ratio 15:128', '327.4 mm wheel circumference, so one motor turn moves the wheel about 166 mm', '290 mm wheelbase'] },
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
      { h: 'Overview', p: ['An eye-operated cause-and-effect switch for students with multiple disabilities who have limited hand and foot function. It sits on a wheelchair tabletop and lets students use their eyes to turn on a toy.', 'This is my IB Design Technology IA. I\'m designing it with a teacher at a local school, along with the classroom teacher and the students\' occupational and physical therapists. A speech teacher suggested having students look left or right to trigger it instead of blinking, so that\'s how it works.', 'I picked a budget Android phone over a Raspberry Pi to keep the cost down, since the phone already has a camera, screen, speaker, and battery built in. I tested powering the ESP32 and relay straight from the phone over USB, so the box doesn\'t need a separate battery.', 'It\'s still being built.'] },
      { h: 'Key Features', list: ['Repurposed Android phone for the camera, screen, speaker, and battery', 'ESP32 + relay powered from the phone over USB', 'Drives one toy'] },
    ],
  },
  {
    id: 'integrator',
    title: 'Mechanical Integrator',
    summary: 'Disk-and-wheel mechanical integrator',
    cover: 'build.jpg',
    media: ['build.jpg', 'belt-path.jpg'],
    sections: [
      { h: 'Overview', p: ['A disk-and-wheel mechanical integrator I built. A belt-driven differential keeps both stepper motors stationary while the disk rotates and translates, which cuts carriage weight.', 'It was inspired by a Jack Monaco video, but all the CAD and kinematics are my own. I\'m also writing a math investigation on how the wheel\'s rotation relates to the integral of a function. My Instagram post about it got about 24.6K views.'] },
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
    id: 'side-projects',
    title: 'Side Projects',
    summary: 'Projects I made for fun and to learn new skills!',
    aliases: ['dragster', 'robot-dog', 'cell', 'packaging', 'solar-sprint', 'air-filter'],
    cover: 'collage.jpg',
    media: [
      { file: 'dragster/side.png', caption: 'Dragster' },
      { file: 'dragster/underside.png', caption: 'Dragster' },
      { file: 'dragster/views.png', caption: 'Dragster' },
      { file: 'dragster/cfd.png', caption: 'Dragster: CFD' },
      { file: 'dragster/body-weight.png', caption: 'Dragster: body weight' },
      { file: 'dragster/wheel-weight.png', caption: 'Dragster: all four optimized wheels' },
      { file: 'dragster/single-wheel-weight.png', caption: 'Dragster: one original wheel' },
      { file: 'robot-dog/robot-dog.png', caption: 'Robot Dog' },
      { file: 'robot-dog/leg-jump.mp4', caption: 'Robot Dog: leg jump' },
      { file: 'robot-dog/front-test.mp4', caption: 'Robot Dog: front legs' },
      { file: 'robot-dog/leg-test.mp4', caption: 'Robot Dog: leg test' },
      { file: 'cell/model-photo.jpg', caption: 'Specialized Cell Project' },
      { file: 'cell/signs-of-life.mp4', caption: 'Specialized Cell Project' },
      { file: 'cell/spin.mp4', caption: 'Specialized Cell Project' },
      { file: 'packaging/porta-grill.png', caption: 'Chicken Cannedwich' },
      { file: 'packaging/cannedwich.png', caption: 'Chicken Cannedwich' },
      { file: 'packaging/instagram-post.png', caption: 'Chicken Cannedwich' },
      { file: 'solar-sprint/spdt-switch.png', caption: 'Senior Solar Sprint' },
      { file: 'solar-sprint/drawing.png', caption: 'Senior Solar Sprint' },
      { file: 'air-filter/exploded.png', caption: '2-Stage Carbon Air Filter' },
      { file: 'side-projects/gear-phone-stand.png', caption: 'Gear driven phone stand' },
      { file: 'side-projects/vise-phone-stand.png', caption: 'Vise inspired phone stand' },
      { file: 'side-projects/thumbnail.png', caption: 'Side projects' },
    ],
    sections: [
      { h: 'Dragster', p: [
          'Aerodynamic dragster with optimized weight and wheel design. Maximized aerodynamic efficiency by minimizing drag. Front wheels recessed, rear tapered, fully enclosed wheels. Internal ribs and hole modifications increased stiffness and minimized friction.',
          'Current: 70 grams | Target: 50 grams. Optimized slicing by decreasing infill and wall width. Made wheels smaller and thinner while maintaining structural integrity. The weight of all four wheels were optimized to weigh as much as the starting weight of one wheel.',
        ],
        list: ['Steel axles with graphite lubricant', 'Glass fiber impregnated PETG body and wheels', 'Clear spray paint finish'],
        links: [{ label: 'View Onshape CAD', url: 'https://cad.onshape.com/documents/6e3e76040f1aba262571c647/w/0225a9de05ecfe290eec82e6/e/948efcbc3e1bf7e9b1a49d6f?renderMode=0&uiState=690578fd2d91d89ebd4ffd2c' }],
        model: 'dragster/model.stl' },
      { h: 'Robot Dog', p: 'Developing a quadrupedal robot integrating mechanical design, electrical systems, and programming for autonomous movement.',
        links: [{ label: 'View Onshape CAD', url: 'https://cad.onshape.com/documents/01445f028ef126d7a850e4fd/w/a7c096875dc126659fe4673b/e/7d0db1c893811f7578f3510d?renderMode=0&uiState=69057933d3a77ba7bcac98ad' }],
        model: 'robot-dog/model.stl' },
      { h: 'Specialized Cell Project', p: 'Created a remote-controlled sperm model with a gearbox for realistic flagellum rotation, using hidden wheels and motors for directional movement.',
        list: ['Custom gearbox for flagellum rotation mechanism', 'Hidden wheel and motor system for navigation', 'Remote control integration', 'Spinning and directional movement capabilities'] },
      { h: 'Chicken Cannedwich', p: 'Created the "Chicken Cannedwich" - a chicken sandwich in a can designed for truckers. Designed custom modular packaging using CAD and 3D printing for a biology class project. Chicken is preserved in pickle juice, with a print-in-place drying mechanism. Modular packaging to keep buns and chicken fresh and tasty!',
        list: ['Mock Instagram promotional posts', '3D printed packaging prototypes', 'Multiple flavor variants including grilled version'] },
      { h: 'Senior Solar Sprint', p: 'Engineered a solar-powered RC car and reverse-engineered a missing SPDT switch by designing and 3D-printing a replacement.' },
      { h: '2-Stage Carbon Air Filter', p: 'Designed and 3D printed housing for activated charcoal pellets to trap VOCs and improve air quality. Currently designing a separate air filtration system with carbon and HEPA filters.' },
      { h: 'More', p: 'Here are some projects I made for fun and to learn new skills!', list: [
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
