import { formatterIntl, appendList1 } from "/Script/manaData.js";
import {getImgName} from "/Script/switchChoose.js";
export {
  equipment,
  vehicles,
  rigs,
  populateRigs,
  populateVehicles,
  handleFrame,
  createFrame,
  guns, addGunDataToSection,
};

// This array contains all equipment objects with their attributes.
// Blank attributes are set to '0'.
// Costs are converted to numerical values (k = thousand, m = million).
const equipment = [ 
];

const guns = [
  {
    name: ".362 Snub Lawmaker",
    type1: "Kinetic", // Changed from 'type'
    type2: "handgun", // New attribute
    cost: 50000,
    equipmentLevel: 1,
    stoppingPower: 5,
    piercingPower: 2,
    rateOfFire: 3,
    range: 3,
    accuracy: 2,
    handling: 10,
    roundCapacity: 7,
    action: "Revolver",
    calibre: ".362 LCat",
    image: "Images/Guns/ben-bolton-360pd-013.webp",
    description:
      "A snub-nosed revolver, perfect for concealment while still being able to pack a punch.",
  },
  {
    name: "KML Compact",
    type1: "Kinetic", // Changed from 'type'
    type2: "handgun", // New attribute
    cost: 50000,
    equipmentLevel: 1,
    stoppingPower: 3,
    piercingPower: 2,
    rateOfFire: 5,
    range: 3,
    accuracy: 3,
    handling: 10,
    roundCapacity: 12,
    action: "Semi-auto",
    calibre: "8.8mm PIL",
    image: "Images/Guns/lucas-soler-screenshot007.webp",
    description:
      "Extremely popular for concealed carry. Perfect for those who don't want to attract attention.",
  },
  {
    name: "Forcify MK VII",
    type1: "Plasma", // Changed from 'type'
    type2: "handgun", // New attribute
    cost: 100000,
    equipmentLevel: 1,
    stoppingPower: 5,
    piercingPower: 1,
    rateOfFire: 5,
    range: 3,
    accuracy: 2,
    handling: 10,
    roundCapacity: 0,
    action: "Semi-auto",
    calibre: "980nm",
    image: "Images/Guns/antar-1.webp",
    description:
      "A compact plasma gun. Energy guns need no reload, but overheat, and need regular battery changes.",
  },
  {
    name: "Bandit-12",
    type1: "Kinetic", // Changed from 'type'
    type2: "handgun", // New attribute
    cost: 400000,
    equipmentLevel: 2,
    stoppingPower: 8,
    piercingPower: 6,
    rateOfFire: 2,
    range: 5,
    accuracy: 4,
    handling: 6,
    roundCapacity: 6,
    action: "Revolver",
    calibre: ".48 RE",
    image: "Images/Guns/evan-cwiertny-screenshot010.webp",
    description:
      "A favourite of bandits, this revolver can take off arms. Hold it well, as the recoil could take off your own.",
  },
  {
    name: ".362 Deputy",
    type1: "Kinetic", // Changed from 'type'
    type2: "handgun", // New attribute
    cost: 500000,
    equipmentLevel: 2,
    stoppingPower: 6,
    piercingPower: 7,
    rateOfFire: 2,
    range: 6,
    accuracy: 7,
    handling: 7,
    roundCapacity: 6,
    action: "Revolver",
    calibre: ".362 LCat",
    image: "Images/Guns/revolver-jinyi-zhu-artstation.webp",
    description:
      "These handguns bolster accuracy with a hard hitting calibre. Usually owned by badasses.",
  },
  {
    name: "C 2911",
    type1: "Kinetic", // Changed from 'type'
    type2: "handgun", // New attribute
    cost: 100000,
    equipmentLevel: 1,
    stoppingPower: 6,
    piercingPower: 4,
    rateOfFire: 5,
    range: 4,
    accuracy: 4,
    handling: 8,
    roundCapacity: 9,
    action: "Semi-auto",
    calibre: "11mm FR",
    image: "Images/Guns/vitaliy-ishkov-mezzan-4-34.webp",
    description:
      "Been in use for a long time, but never discarded for its iconic rep. Still shoots bullets, so it kills.",
  },
  {
    name: "FD17 Daybreak",
    type1: "Kinetic", // Changed from 'type'
    type2: "handgun", // New attribute
    cost: 100000,
    equipmentLevel: 1,
    stoppingPower: 4,
    piercingPower: 5,
    rateOfFire: 5,
    range: 4,
    accuracy: 5,
    handling: 9,
    roundCapacity: 15,
    action: "Semi-auto",
    calibre: "8.8mm Pil",
    image: "Images/Guns/linus-scheffel-stopper-pistol-01.webp",
    description:
      "A lightweight calibre in a double-stacked magazine is perfect for a well balanced handgun.",
  },
  {
    name: "Sabre 6",
    type1: "Plasma", // Changed from 'type'
    type2: "handgun", // New attribute
    cost: 150000,
    equipmentLevel: 1,
    stoppingPower: 7,
    piercingPower: 2,
    rateOfFire: 5,
    range: 3,
    accuracy: 2,
    handling: 9,
    roundCapacity: 0,
    action: "Semi-auto",
    calibre: "1025nm",
    image: "Images/Guns/filippo-ubertino-numa-pistol-immaginefinale3low.webp",
    description:
      "A popular plasma gun that hits hard. This model is known to have good heat sinks.",
  },
  {
    name: "Pallach Or2",
    type1: "Laser", // Changed from 'type'
    type2: "handgun", // New attribute
    cost: 200000,
    equipmentLevel: 2,
    stoppingPower: 1,
    piercingPower: 7,
    rateOfFire: 2,
    range: 6,
    accuracy: 10,
    handling: 8,
    roundCapacity: 0,
    action: "Full-auto",
    calibre: "405nm",
    image: "Images/Guns/garuda-alex-senechal-artstation.webp",
    description:
      "Shoots brief, high-powered pulses of laser, reaching temperatures hotter than the surface of a star.",
  },
  {
    name: "H56",
    type1: "Kinetic", // Changed from 'type'
    type2: "handgun", // New attribute
    cost: 200000,
    equipmentLevel: 2,
    stoppingPower: 3,
    piercingPower: 4,
    rateOfFire: 8,
    range: 3,
    accuracy: 3,
    handling: 9,
    roundCapacity: 24,
    action: "Full-auto",
    calibre: "8.8mm PIL",
    image: "Images/Guns/des-zhu-3.webp",
    description:
      "A simple machine pistol with a high rate of fire. Its low calibre has low recoil.",
  },
  {
    name: "FD9 Judge",
    type1: "Kinetic", // Changed from 'type'
    type2: "handgun", // New attribute
    cost: 500000,
    equipmentLevel: 3,
    stoppingPower: 4,
    piercingPower: 5,
    rateOfFire: 7,
    range: 4,
    accuracy: 5,
    handling: 7,
    roundCapacity: 18,
    action: "Select-fire",
    calibre: "10mm INF",
    image: "Images/Guns/josip-mihic-handgun-model-19-image-02-mihic-josip.webp",
    description:
      "Perfect in the hands of those who love versatility. Can select to be semi, full, or burst. Silenced.",
  },
  {
    name: "Gretel MK III",
    type1: "Rail", // Changed from 'type'
    type2: "handgun", // New attribute
    cost: 800000,
    equipmentLevel: 3,
    stoppingPower: 7,
    piercingPower: 9,
    rateOfFire: 1,
    range: 6,
    accuracy: 9,
    handling: 5,
    roundCapacity: 4,
    action: "Semi-auto",
    calibre: "22mm",
    image: "Images/Guns/marcelo-m-prado-open-pistol-1080.webp",
    description:
      "Essentially a portable rail-gun. Known to pierce through tank armour.",
  },

  {
    name: "Kayta F5",
    type1: "Kinetic",
    type2: "smg",
    cost: 200000,
    equipmentLevel: 2,
    stoppingPower: 4,
    piercingPower: 4,
    rateOfFire: 8,
    range: 3,
    accuracy: 3,
    handling: 7,
    roundCapacity: 30,
    action: "Full-auto",
    calibre: "8.8mm PIL",
    image: "Images/Guns/des-zhu-4.webp",
    description:
      "Mass produced and found virtually everywhere, this balanced SMG is universally loved for its simplicity.",
  },
  {
    name: "Rinn-J",
    type1: "Plasma",
    type2: "smg",
    cost: 200000,
    equipmentLevel: 2,
    stoppingPower: 4,
    piercingPower: 1,
    rateOfFire: 9,
    range: 3,
    accuracy: 2,
    handling: 8,
    roundCapacity: 0,
    action: "Full-auto",
    calibre: "980nm",
    image: "Images/Guns/till-freitag-orangesmg.jpg",
    description:
      "If you want to rain hundreds of burning-hot plasma on your enemies, look no further.",
  },
  {
    name: "Hellfang",
    type1: "Laser",
    type2: "smg",
    cost: 500000,
    equipmentLevel: 3,
    stoppingPower: 1,
    piercingPower: 7,
    rateOfFire: 6,
    range: 6,
    accuracy: 9,
    handling: 5,
    roundCapacity: 16,
    action: "Full-auto",
    calibre: "320nm",
    image: "Images/Guns/zhu-george-1.webp",
    description:
      "Nothing is scarier than the rapid fire of deadly red laser pulses. Has the highest PTSD-inducing rate. Loved by spec-ops.",
  },
  {
    name: "FD39 Echo",
    type1: "Kinetic",
    type2: "smg",
    cost: 550000,
    equipmentLevel: 3,
    stoppingPower: 5,
    piercingPower: 4,
    rateOfFire: 7,
    range: 4,
    accuracy: 4,
    handling: 6,
    roundCapacity: 28,
    action: "Full-auto",
    calibre: "10mm INF",
    image: "Images/Guns/youngkwon-yi-ml-001.webp",
    description:
      "Very wieldly with all of the aspects of an SMG perfected to a tee.",
  },
  {
    name: "LK Banshee",
    type1: "Plasma",
    type2: "smg",
    cost: 700000,
    equipmentLevel: 3,
    stoppingPower: 6,
    piercingPower: 2,
    rateOfFire: 6,
    range: 4,
    accuracy: 3,
    handling: 5,
    roundCapacity: 16,
    action: "Full-auto/chg",
    calibre: "1025nm",
    image: "Images/Guns/filippo-ubertino-mauser-m2-138-finale1low.webp",
    description:
      "You can either go full-auto with torrents of hot plasma, or charged burst shots for more destruction.",
  },
  {
    name: 'H "Frill"',
    type1: "Special",
    type2: "smg",
    cost: 800000,
    equipmentLevel: 3,
    stoppingPower: 5,
    piercingPower: 3,
    rateOfFire: 8,
    range: 4,
    accuracy: 3,
    handling: 5,
    roundCapacity: 0,
    action: "Full-auto",
    calibre: "Unknown",
    image: "Images/Guns/andrew-bradbury-needler-hi-02.webp",
    description:
      "Experimental reverse-engineered tech from the Heralds. Rapidly shoots volatile mana bolts.",
  },

  {
    name: "Spatha 2100FP",
    type1: "Kinetic",
    type2: "shotgun",
    cost: 100000,
    equipmentLevel: 3,
    stoppingPower: 9,
    piercingPower: 5,
    rateOfFire: 2,
    range: 4,
    accuracy: 3,
    handling: 6,
    roundCapacity: 9,
    action: "Pump",
    calibre: "10ga",
    image: "Images/Guns/felix-leyendecker-17-ssg-01.webp",
    description:
      "A reliable pump-action that's used in virtually every security and military doctrine.",
  },
  {
    name: "Espingarda Model 80",
    type1: "Kinetic",
    type2: "shotgun",
    cost: 150000,
    equipmentLevel: 3,
    stoppingPower: 7,
    piercingPower: 5,
    rateOfFire: 4,
    range: 4,
    accuracy: 3,
    handling: 7,
    roundCapacity: 8,
    action: "Semi-auto",
    calibre: "12ga",
    image: "Images/Guns/csaba-szilagyi-csaba-portfolio-rostovic-db-2-satara-1.webp",
    description:
      "One of the best weapons for storming and taking out hostiles in tight spaces, like ship interiors.",
  },
  {
    name: "Starburst MK VI",
    type1: "Laser",
    type2: "shotgun",
    cost: 200000,
    equipmentLevel: 3,
    stoppingPower: 1,
    piercingPower: 8,
    rateOfFire: 4,
    range: 5,
    accuracy: 9,
    handling: 5,
    roundCapacity: 0,
    action: "Semi-auto",
    calibre: "80nm x6",
    image: "Images/Guns/boy-sichterman-front.webp",
    description:
      "A more experimental weapon that utilizes multiple diodes to burst out a 'fan' of high-powered lasers.",
  },
  {
    name: "Ogoun M31",
    type1: "Plasma",
    type2: "shotgun",
    cost: 400000,
    equipmentLevel: 3,
    stoppingPower: 9,
    piercingPower: 3,
    rateOfFire: 5,
    range: 3,
    accuracy: 3,
    handling: 7,
    roundCapacity: 0,
    action: "Semi-auto",
    calibre: "4x675nm",
    image: "Images/Guns/serge-samsonov-01-end-revolver.webp",
    description:
      "Delivers a face-full of piping hot plasma. One of the more cruel weapons out there.",
  },
  {
    name: "AS-12/45",
    type1: "Kinetic",
    type2: "shotgun",
    cost: 400000,
    equipmentLevel: 3,
    stoppingPower: 7,
    piercingPower: 5,
    rateOfFire: 6,
    range: 3,
    accuracy: 2,
    handling: 5,
    roundCapacity: 8,
    action: "Full-auto",
    calibre: "12ga",
    image: "Images/Guns/kris-thaler-shotgunhr-v2.webp",
    description:
      "Not often used despite its full-auto capabilities, but a favourite for outer-rim bandits.",
  },
  {
    name: "Wraithsong A4",
    type1: "Rail",
    type2: "shotgun",
    cost: 800000,
    equipmentLevel: 4,
    stoppingPower: 7,
    piercingPower: 8,
    rateOfFire: 2,
    range: 6,
    accuracy: 6,
    handling: 4,
    roundCapacity: 4,
    action: "Burst",
    calibre: "4mm x3",
    image: "Images/Guns/weiyi-qin-shotgun.webp",
    description:
      "Shoots an insanely fast burst of 3 high-velocity darts, which is known to make a ghostly whistling sound.",
  },

  {
    name: "UN200-42",
    type1: "Plasma", // Changed from 'type'
    type2: "rifle", // New attribute
    cost: 400000,
    equipmentLevel: 3,
    stoppingPower: 5,
    piercingPower: 1,
    rateOfFire: 7,
    range: 4,
    accuracy: 3,
    handling: 6,
    roundCapacity: 0,
    action: "Full-auto",
    calibre: "980nm",
    image: "Images/Guns/alex-senechal-biggun.webp",
    description:
      "A standard full-auto plasma gun... until you mark a target with the tag that the plasma orbs follow.",
  },
  {
    name: "FD49 Reverb",
    type1: "Kinetic", // Changed from 'type'
    type2: "rifle", // New attribute
    cost: 500000,
    equipmentLevel: 3,
    stoppingPower: 5,
    piercingPower: 4,
    rateOfFire: 7,
    range: 5,
    accuracy: 5,
    handling: 6,
    roundCapacity: 30,
    action: "Semi-auto",
    calibre: "5.91mm IN",
    image: "Images/Guns/ranulf-busby-doku-as-03.webp",
    description:
      "A very niche gun usually only found with bodyguards.",
  },
  {
    name: "Angel",
    type1: "Kinetic", // Changed from 'type'
    type2: "rifle", // New attribute
    cost: 700000,
    equipmentLevel: 4,
    stoppingPower: 5,
    piercingPower: 5,
    rateOfFire: 6,
    range: 5,
    accuracy: 6,
    handling: 5,
    roundCapacity: 28,
    action: "Select-fire",
    calibre: "6.4mm Ws",
    image: "Images/Guns/filippo-ubertino-rifle-ifcc-2019-finale2low.webp",
    description:
      "The PDW improvement over the FD39 with a harder hitting and longer-ranged cartridge.",
  },
  {
    name: "Puck's Kiss",
    type1: "Plasma", // Changed from 'type'
    type2: "rifle", // New attribute
    cost: 1000000,
    equipmentLevel: 4,
    stoppingPower: 6,
    piercingPower: 3,
    rateOfFire: 6,
    range: 6,
    accuracy: 5,
    handling: 5,
    roundCapacity: 0,
    action: "Full-auto/alt",
    calibre: "995nm",
    image: "Images/Guns/anton-khondoker-5.webp",
    description:
      "Unknown origin. Has a secondary firing mode that overheats more but shoots explosive plasma shots.",
  },
  {
    name: "Bastard-21",
    type1: "Kinetic", // Changed from 'type'
    type2: "rifle", // New attribute
    cost: 200000,
    equipmentLevel: 3,
    stoppingPower: 5,
    piercingPower: 5,
    rateOfFire: 7,
    range: 6,
    accuracy: 6,
    handling: 6,
    roundCapacity: 30,
    action: "Select-fire",
    calibre: "6.16mm UNI",
    image: "Images/Guns/fan-zhang-aag-present.webp",
    description:
      "Extremely cheap and shoddy, but that's its charm. Usually only found in the outer rim systems.",
  },
  {
    name: "The Ivan",
    type1: "Kinetic", // Changed from 'type'
    type2: "rifle", // New attribute
    cost: 250000,
    equipmentLevel: 4,
    stoppingPower: 6,
    piercingPower: 5,
    rateOfFire: 6,
    range: 6,
    accuracy: 4,
    handling: 5,
    roundCapacity: 30,
    action: "Full-auto",
    calibre: "7.75mm SV",
    image: "Images/Guns/molina-jinyi-zhu-artstation.webp",
    description:
      "A popular, cheap, and highly customizable assault rifle made in surplus for a war, long ago.",
  },
  {
    name: "Sharktooth-T751",
    type1: "Plasma", // Changed from 'type'
    type2: "rifle", // New attribute
    cost: 400000,
    equipmentLevel: 4,
    stoppingPower: 7,
    piercingPower: 3,
    rateOfFire: 6,
    range: 5,
    accuracy: 4,
    handling: 5,
    roundCapacity: 0,
    action: "Full-auto",
    calibre: "1155nm",
    image: "Images/Guns/liam-o-hagan-guns-02.webp",
    description:
      "Looks bulky, but is known to be one of the most well balanced plasma guns made.",
  },
  {
    name: "FD22 Sprint",
    type1: "Kinetic", // Changed from 'type'
    type2: "rifle", // New attribute
    cost: 450000,
    equipmentLevel: 4,
    stoppingPower: 6,
    piercingPower: 7,
    rateOfFire: 5,
    range: 7,
    accuracy: 8,
    handling: 5,
    roundCapacity: 22,
    action: "Semi-auto",
    calibre: "6.16mm UNI",
    image: "Images/Guns/sean-drake-3.webp",
    description:
      "A lightweight scout rifle, perfect for precision shooting and general recon.",
  },
  {
    name: "LK Scarlet",
    type1: "Laser", // Changed from 'type'
    type2: "rifle", // New attribute
    cost: 650000,
    equipmentLevel: 4,
    stoppingPower: 2,
    piercingPower: 9,
    rateOfFire: 6,
    range: 7,
    accuracy: 10,
    handling: 4,
    roundCapacity: 0,
    action: "Semi-auto",
    calibre: "405nm",
    image: "Images/Guns/lin-hongy-paiban-1-edited.webp",
    description:
      "A versatile and effective laser rifle for scouting and recon. Perfect against armoured personnel.",
  },
  {
    name: "The EVI Platform",
    type1: "Kinetic", // Changed from 'type'
    type2: "rifle", // New attribute
    cost: 700000,
    equipmentLevel: 4,
    stoppingPower: 5,
    piercingPower: 7,
    rateOfFire: 6,
    range: 6,
    accuracy: 7,
    handling: 5,
    roundCapacity: 32,
    action: "Select-fire",
    calibre: "6.16mm UNI",
    image: "Images/Guns/paul-dave-malla-carbon-4x-keyshot-render-05.webp",
    description:
      "A favourite for gun nuts, mainly due to the high availability of after market parts for customization.",
  },
  {
    name: "H23",
    type1: "Kinetic", // Changed from 'type'
    type2: "rifle", // New attribute
    cost: 800000,
    equipmentLevel: 4,
    stoppingPower: 6,
    piercingPower: 6,
    rateOfFire: 5,
    range: 7,
    accuracy: 7,
    handling: 4,
    roundCapacity: 28,
    action: "Select-fire",
    calibre: "6.8mm BH",
    image: "Images/Guns/ranulf-busby-doku-final-02.webp",
    description:
      "An elite bullpup with a unique, hard-hitting calibre. Some say it's the perfect assault rifle.",
  },
  {
    name: "Gloom MK III",
    type1: "Plasma/Laser", // Changed from 'type'
    type2: "rifle", // New attribute
    cost: 1000000,
    equipmentLevel: 4,
    stoppingPower: 5,
    piercingPower: 6,
    rateOfFire: 7,
    range: 6,
    accuracy: 6,
    handling: 4,
    roundCapacity: 0,
    action: "Select-fire",
    calibre: "995+440nm",
    image: "Images/Guns/kris-thaler-plasmabazooka1c.webp",
    description:
      "A plasma and laser gun put into one; plasma for full-auto punches and laser for semi-auto piercing.",
  },
  {
    name: 'H "Mantis"',
    type1: "Special", // Changed from 'type'
    type2: "rifle", // New attribute
    cost: 1400000,
    equipmentLevel: 4,
    stoppingPower: 7,
    piercingPower: 5,
    rateOfFire: 5,
    range: 6,
    accuracy: 6,
    handling: 4,
    roundCapacity: 0,
    action: "Burst",
    calibre: "Unknown",
    image: "Images/Guns/lin-hongy-1-edited.webp",
    description:
      "Experimental Herald tech. Shoots a quick burst of 3 mana bolts that uncharacteristically move quickly.",
  },
  {
    name: "Burial M55",
    type1: "Kinetic", // Changed from 'type'
    type2: "rifle", // New attribute
    cost: 700000,
    equipmentLevel: 4,
    stoppingPower: 9,
    piercingPower: 8,
    rateOfFire: 3,
    range: 9,
    accuracy: 8,
    handling: 4,
    roundCapacity: 12,
    action: "Semi-auto",
    calibre: "8.02mm TB",
    image: "Images/Guns/lin-hongy-1.webp",
    description:
      "Used in some of the most famous assassinations in history. High-powered and deadly accurate.",
  },
  {
    name: "Atrophy",
    type1: "Laser", // Changed from 'type'
    type2: "rifle", // New attribute
    cost: 1000000,
    equipmentLevel: 4,
    stoppingPower: 6,
    piercingPower: 10,
    rateOfFire: 2,
    range: 9,
    accuracy: 10,
    handling: 3,
    roundCapacity: 0,
    action: "Semi-auto",
    calibre: "625nm",
    image: "Images/Guns/alex-refuser-01-lumistrike-general-shot.webp",
    description:
      "It is said that the victims don't even feel the pain, dropping dead as if it had come from nowhere...",
  },
  {
    name: "Orca A7",
    type1: "Rail", // Changed from 'type'
    type2: "rifle", // New attribute
    cost: 1800000,
    equipmentLevel: 4,
    stoppingPower: 9,
    piercingPower: 9,
    rateOfFire: 2,
    range: 10,
    accuracy: 9,
    handling: 3,
    roundCapacity: 6,
    action: "Semi-auto",
    calibre: "28mm",
    image: "Images/Guns/su-wang-demonstone-op-1.webp",
    description:
      "A skilled shooter with this weapon can become one of the deadliest people in the galaxy.",
  },

  {
    name: "Hail-92",
    type1: "Kinetic",
    type2: "lightweapon",
    cost: 650000,
    equipmentLevel: 4,
    stoppingPower: 5,
    piercingPower: 4,
    rateOfFire: 9,
    range: 6,
    accuracy: 5,
    handling: 2,
    roundCapacity: 200,
    action: "Full-auto",
    calibre: "6.16mm UNI",
    image: "Images/Guns/anuj-kansara-view-01.webp",
    description:
      "A light machine gun that's often used by bandits. Uses seven barrels to unleash a torrent of bullets.",
  },
  {
    name: "FD7 Optimum",
    type1: "Kinetic",
    type2: "lightweapon",
    cost: 900000,
    equipmentLevel: 5,
    stoppingPower: 7,
    piercingPower: 7,
    rateOfFire: 5,
    range: 6,
    accuracy: 6,
    handling: 2,
    roundCapacity: 80,
    action: "Full-auto",
    calibre: "8.02mm TB",
    image: "Images/Guns/sean-drake-8.webp",
    description:
      "A medium machine gun that can punch holes in armour and is perfect for suppressive fire.",
  },
  {
    name: "MX Llama",
    type1: "Rail",
    type2: "lightweapon",
    cost: 750000,
    equipmentLevel: 5,
    stoppingPower: 6,
    piercingPower: 5,
    rateOfFire: 8,
    range: 5,
    accuracy: 6,
    handling: 2,
    roundCapacity: 100,
    action: "Full-auto",
    calibre: "28mm",
    image: "Images/Guns/mx-llama-presentation-2.webp",
    description:
      "Almost called FD8, but it was a class of its own. Can shoot rail projectiles as if it was full-auto.",
  },
  {
    name: "Salamander Or2",
    type1: "Special",
    type2: "lightweapon",
    cost: 800000,
    equipmentLevel: 4,
    stoppingPower: 9,
    piercingPower: 1,
    rateOfFire: 10,
    range: 3,
    accuracy: 2,
    handling: 1,
    roundCapacity: 0,
    action: "Thrower",
    calibre: "n/a",
    image: "Images/Guns/andrey-bushkov-2-1.webp",
    description:
      "A flamethrower often employed by the Dustkeepers. Perfect for burning away biomass.",
  },
  {
    name: 'H "Flare"',
    type1: "Special",
    type2: "lightweapon",
    cost: 1600000,
    equipmentLevel: 5,
    stoppingPower: 6,
    piercingPower: 5,
    rateOfFire: 10,
    range: 5,
    accuracy: 7,
    handling: 1,
    roundCapacity: 0,
    action: "Continuous",
    calibre: "Unknown",
    image: "Images/Guns/andrey-bushkov-thundercaster2.webp",
    description:
      "Fires a deadly continuous beam of mana that intensifies the longer you hold it. Overheats quickly.",
  },
  {
    name: "Sardonic 9",
    type1: "Plasma",
    type2: "lightweapon",
    cost: 2200000,
    equipmentLevel: 5,
    stoppingPower: 10,
    piercingPower: 9,
    rateOfFire: 2,
    range: 10,
    accuracy: 10,
    handling: 4,
    roundCapacity: 0,
    action: "Semi-auto",
    calibre: "1990nm",
    image: "Images/Guns/enclave-interactive-plusma-gun-enclave-interactive.webp",
    description: "Made from lost technology. When dismantled, the parts don't make sense yet functions realiably when put together.",
  }, 
  {
    name: "H12",
    type1: "Explosive",
    type2: "launcher",
    cost: 500000,
    equipmentLevel: 4,
    stoppingPower: 6,
    piercingPower: 4,
    rateOfFire: 4,
    range: 3,
    accuracy: 3,
    handling: 2,
    roundCapacity: 1,
    action: "Launcher",
    calibre: "82mm",
    image: "Images/Guns/ben-kiefaber-2.webp",
    description:
      "Can launch any type of grenade. Used for destructive purposes as well as crowd control.",
  },
  {
    name: "Stark-4",
    type1: "Explosive",
    type2: "launcher",
    cost: 700000,
    equipmentLevel: 5,
    stoppingPower: 8,
    piercingPower: 7,
    rateOfFire: 1,
    range: 6,
    accuracy: 6,
    handling: 2,
    roundCapacity: 8,
    action: "Semi-auto",
    calibre: "28mm",
    image: "Images/Guns/terraform-studios-grenade-launcher-03-w.webp",
    description:
      "Cheap for an all-purpose launcher but effective at taking out heavy and expensive targets.",
  },
  {
    name: "KM Swarm",
    type1: "Explosive",
    type2: "launcher",
    cost: 1200000,
    equipmentLevel: 5,
    stoppingPower: 5,
    piercingPower: 6,
    rateOfFire: 6,
    range: 4,
    accuracy: 5,
    handling: 2,
    roundCapacity: 1,
    action: "Launcher",
    calibre: "110mm",
    image: "Images/Guns/csaba-szilagyi-csaba-portfolio-kang-tao-zhuo-2.webp",
    description:
      "A launcher that's more focused for taking out personnel, rather than materiel.",
  },
  {
    name: "FD102 Toler",
    type1: "Explosive",
    type2: "launcher",
    cost: 2000000,
    equipmentLevel: 5,
    stoppingPower: 10,
    piercingPower: 7,
    rateOfFire: 1,
    range: 9,
    accuracy: 9,
    handling: 1,
    roundCapacity: 12,
    action: "Semi-auto",
    calibre: "40mm",
    image: "Images/Guns/georgiy-nomerovsky-beaty-shot.webp",
    description:
      "Locks onto targets and launches high-destructive missiles which seek them.",
  },
  {
    name: "Explody Thing",
    type1: "Explosive",
    type2: "launcher",
    cost: 2200000,
    equipmentLevel: 5,
    stoppingPower: 8,
    piercingPower: 6,
    rateOfFire: 4,
    range: 6,
    accuracy: 5,
    handling: 1,
    roundCapacity: 4,
    action: "Semi-auto",
    calibre: "82mm",
    image: "Images/Guns/alex-savelev-back-weapon-copy.webp",
    description:
      "The weapon used by Sya'ra the Mad Roller to repel a small Black-hawk convoy during the Luos wars.",
  },
  {
    name: "Moses Or19",
    type1: "Laser/Plasma",
    type2: "launcher",
    cost: 3000000,
    equipmentLevel: 5,
    stoppingPower: 7,
    piercingPower: 10,
    rateOfFire: 2,
    range: 9,
    accuracy: 10,
    handling: 1,
    roundCapacity: 0,
    action: "Burst",
    calibre: "720nm x4",
    image: "Images/Guns/filippo-ubertino-wr138.webp",
    description:
      "A specialized heavy laser gun that fires volatile ion particles, causing explosions.",
  },


  {
    name: "Hel",
    type1: "Rail",
    type2: "heavyweapon",
    cost: 4000000,
    equipmentLevel: 6,
    stoppingPower: 10,
    piercingPower: 11,
    rateOfFire: 3,
    range: 6,
    accuracy: 5,
    handling: 0,
    roundCapacity: 0,
    action: "Thrower",
    calibre: "n/a",
    image: "Images/Guns/paul-dave-malla-reaper-pulse-plasma-railgun-keyshot-01.webp",
    description:
      "A standard ship railgun mounted on legs, can punch through a small moon. Sadly, it takes 30 minutes to reload and it weighs 5 tons.",
  },
  {
    name: "FD99x Perfection",
    type1: "Kinetic",
    type2: "heavyweapon",
    cost: 6000000,
    equipmentLevel: 7,
    stoppingPower: 10,
    piercingPower: 9,
    rateOfFire: 10,
    range: 9,
    accuracy: 8,
    handling: 0,
    roundCapacity: 1000,
    action: "Gatling",
    calibre: "45mm Qn",
    image: "Images/Guns/mattis-heisler-3rdp-view-7-5.webp",
    description:
      "Usually mounted on vehicles, this monster's roar can be heard from many kilometers away.",
  },
];

const vehicles = [
  //aka dragoon mounts, need to insert
  {
    id: "vehicle-dunebuggy",
    name: "AT Dunebuggy",
    cost: 500000,
    hangarSpaceUse: 1,
    crew: 4,
    t1WeaponSlots: 2, // Changed to camelCase
    t2WeaponSlots: 0, // Changed to camelCase
    mobility: 5,
    armour: 0, // Standardized to 'armour' (camelCase)
    length: "4m", // Changed to camelCase
    image: "/Images/Vehicles/icle051.webp",
    description:
      "The all-terrain dunebuggy allows for great ground coverage. Its high-traction wheels can be replaced with skates or skiis. +Comes with a free machine gun",
    shields: 0,
    uptime: 0,
    recharge: 0,
    type: "regular",
  },
  {
    id: "vehicle-MLUV",
    name: "MLUV",
    cost: 1000000,
    hangarSpaceUse: 1,
    crew: 6,
    t1WeaponSlots: 2,
    t2WeaponSlots: 0,
    mobility: 3,
    armour: 0, // Standardized to 'armour' (camelCase)
    length: "4m",
    image: "/Images/Vehicles/icle049.webp",
    description:
      "This mlitary light utility vehicle has a good balance of mobility, armour, and firepower, perfect for troop transportation and support. +Comes with a free T1 weapon",
    shields: 0,
    uptime: 0,
    recharge: 0,
    type: "regular",
  },
  {
    id: "vehicle-APC",
    name: "APC",
    cost: 2000000,
    hangarSpaceUse: 2,
    crew: 12,
    t1WeaponSlots: 2,
    t2WeaponSlots: 0,
    mobility: "4",
    armour: 4, // Standardized to 'armour' (camelCase)
    length: "6m",
    image: "Images/Vehicles/dropship-indotort-midjourney.webp",
    description:
      "Large and bulky, these Armoured Personnel Carriers can transport a good handful of troops or VIPs and protect them with thick armour. +Comes with a free T1 weapon",
    shields: 0,
    uptime: 0,
    recharge: 0,
    type: "regular",
  },
  {
    id: "vehicle-terrain-tank",
    name: "Terrain Tank",
    cost: 3000000,
    hangarSpaceUse: 2,
    crew: 5,
    t1WeaponSlots: 2,
    t2WeaponSlots: 1,
    mobility: "4",
    armour: 6, // Standardized to 'armour' (camelCase)
    length: "6m",
    image: "/Images/Vehicles/icle045.webp",
    description:
      "These tanks are light armoured, but with their special quarduped tank treads, they can cover many kinds of terrain with good speed. +Comes with a free T2 weapon",
    shields: 0,
    uptime: 0,
    recharge: 0,
    type: "regular",
  },
  {
    id: "vehicle-heavy-tank",
    name: "Heavy Tank",
    cost: 4000000,
    hangarSpaceUse: 2,
    crew: 6,
    t1WeaponSlots: 4,
    t2WeaponSlots: 1,
    mobility: "3",
    armour: 8, // Standardized to 'armour' (camelCase)
    length: "11m",
    image: "Images/Vehicles/octopus_by_karanak_-deviantart.webp",
    description:
      "Fit for convoys, heavy firepower, artillery support, and everything tank-like, these beasts can lead the charge into combat. +Comes with a free T2 weapon",
    shields: 0,
    uptime: 0,
    recharge: 0,
    type: "regular",
  },
  {
    id: "vehicle-spider-tank",
    name: "Spider Tank",
    cost: 6000000,
    hangarSpaceUse: 2,
    crew: 4,
    t1WeaponSlots: 3,
    t2WeaponSlots: 1,
    mobility: "3",
    armour: 5, // Standardized to 'armour' (camelCase)
    length: "9m",
    image: "Images/Vehicles/weiyi-qin-3.webp",
    description:
      "Spider tanks are a more experi- mental platform, but unlike tradi- tional tanks, they have less trouble overcoming terrain. +Comes with a free T2 weapon",
    shields: 0,
    uptime: 0,
    recharge: 0,
    type: "regular",
  },
  {
    id: "vehicle-ground-mech",
    name: "Ground Mech",
    cost: 1000000,
    hangarSpaceUse: 1,
    crew: 1,
    t1WeaponSlots: 2,
    t2WeaponSlots: 0,
    mobility: 3,
    armour: 3, // Standardized to 'armour' (camelCase)
    length: "5m",
    image: "/Images/Vehicles/icle023.webp",
    description:
      "This personal ground mech has ample firepower with versatile movement. The perfect firepower support platform for your troops. +Comes with a free T1 weapon",
    shields: 0,
    uptime: 0,
    recharge: 0,
    type: "regular",
  },
  {
    id: "vehicle-heavy-ground-mech",
    name: "Heavy Ground Mech",
    cost: 4000000,
    hangarSpaceUse: 2,
    crew: 2,
    t1WeaponSlots: 3,
    t2WeaponSlots: 1,
    mobility: 4,
    armour: 5, // Standardized to 'armour' (camelCase)
    length: "8m",
    image: "/Images/Vehicles/icle025.webp",
    description:
      "These mechs are equipped with extremely hard hitting ordnance, particularily against air targets and other vehicles. +Comes with a free T2 weapon",
    shields: 0,
    uptime: 0,
    recharge: 0,
    type: "regular",
  },
  {
    id: "vehicle-og-mobile-suit",
    name: "OG Mobile Suit",
    cost: 7000000,
    hangarSpaceUse: 2,
    crew: 8,
    t1WeaponSlots: 1,
    t2WeaponSlots: 0,
    mobility: 7,
    armour: 5, // Standardized to 'armour' (camelCase)
    length: "10m",
    image: "/Images/Vehicles/icle021.webp",
    description:
      "Single-piloted, but extremely versatile. An upgrade from your standard power armour, these can fly in atmosphere or space. +Comes with a free T2 weapon",
    shields: 0,
    uptime: 0,
    recharge: 0,
    type: "regular",
  },
  {
    id: "vehicle-submarine",
    name: "Submarine",
    cost: 3000000,
    hangarSpaceUse: 3,
    crew: 12,
    t1WeaponSlots: 1,
    t2WeaponSlots: 0,
    mobility: 7,
    armour: "25m", // Standardized to 'armour' (camelCase)
    length: "25m",
    image: "Images/Vehicles/weiyi-qin-osprey.webp",
    description:
      "These submarines can withstand extreme temperatures and pres- sures, and can withstand many liquids. +Comes with a free T1 weapon",
    shields: 0,
    uptime: 0,
    recharge: 0,
    type: "regular",
  },
  {
    id: "vehicle-lamprey-boarding-ship",
    name: "Lamprey Boarding Ship",
    cost: 5000000,
    hangarSpaceUse: 4,
    crew: 12,
    t1WeaponSlots: 2,
    t2WeaponSlots: 0,
    mobility: 7,
    armour: "12m", // Standardized to 'armour' (camelCase)
    length: "12m",
    image: "/Images/Vehicles/icle017.webp",
    description:
      "This ship uses high-powered lasers to cut through hulls to allow its boarding party inside. However, it cannot fly through ship shields. +Has 2 hangar space capacity",
    shields: 0,
    uptime: 0,
    recharge: 0,
    type: "regular",
  },
  {
    id: "vehicle-drop-ship",
    name: "Drop Ship",
    cost: 5000000,
    hangarSpaceUse: 2,
    crew: 12,
    t1WeaponSlots: 3,
    t2WeaponSlots: 0,
    mobility: 7,
    armour: 3, // Standardized to 'armour' (camelCase)
    length: "15m",
    image: "/Images/Vehicles/icle015.webp",
    description:
      "Heavily armoured and perfectly capable of transporting troops and vehicles. +Comes with a free T1 weapon +Has 3 hangar space capacity",
    shields: 0,
    uptime: 0,
    recharge: 0,
    type: "regular",
  },
  {
    id: "vehicle-armoured-rover",
    name: "ARMOURED ROVER",
    armour: 6,
    shields: 6,
    mobility: 4,
    uptime: 8,
    recharge: 5,
    type: "dragoonMount",
    cost: 0,
    hangarSpaceUse: 1,
    crew: 6,
    t1WeaponSlots: 0,
    t2WeaponSlots: 0,
    length: "5m",
    image: "Images/Vehicles/des-zhu-8-3.webp",
    description:
      "An amphibious all-terrain rover used by Beatrice R&D for exploration that can go underwater. It's a mobile transport and base.",
  },
  {
    id: "vehicle-tyrant",
    name: "TYRANT",
    armour: 4,
    shields: 7,
    mobility: 8,
    uptime: 6,
    recharge: 4,
    type: "dragoonMount",
    cost: 0,
    hangarSpaceUse: 1,
    crew: 1,
    t1WeaponSlots: 0,
    t2WeaponSlots: 0,
    length: "3m",
    image: "/Images/Vehicles/veh015.webp",
    description:
      "One of the most advanced mobile suits that costed the Federation a fortune. It's highly mobile in the air and in space.",
  },
  {
    id: "vehicle-stingray",
    name: "STINGRAY",
    armour: 1,
    shields: 5,
    mobility: 9,
    uptime: 7,
    recharge: 6,
    type: "dragoonMount",
    cost: 0,
    hangarSpaceUse: 1,
    crew: 3,
    t1WeaponSlots: 2,
    t2WeaponSlots: 0,
    length: "5m",
    image: "/Images/Vehicles/veh031.webp",
    description:
      "Considered the top of its class in manoeuvrability, the Stingray is a drone often used for aerial and space scouting.",
  },
  {
    id: "vehicle-conduit",
    name: "CONDUIT",
    armour: 3,
    shields: 9,
    mobility: 5,
    uptime: 2,
    recharge: 2,
    type: "dragoonMount",
    cost: 0,
    hangarSpaceUse: 1,
    crew: 0,
    t1WeaponSlots: 0,
    t2WeaponSlots: 0,
    length: "0m",
    image: "/Images/Vehicles/veh013.webp",
    description:
      "An exoskeleton specifically made for interfacing with a Dragoon frame to amplify the pilot's spell capabilities by a massive amount.",
  },
  {
    id: "vehicle-dropship",
    name: "DROPSHIP",
    armour: 5,
    cost: 0,
    shields: 6,
    mobility: 7,
    uptime: 7,
    recharge: 3,
    hangarSpaceUse: 2,
    crew: 12,
    t1WeaponSlots: 3,
    t2WeaponSlots: 0,
    length: "15m",
    image: "/Images/Vehicles/veh029.webp",
    description:
      "Hardy VTOL dropships manufactured by Hammerhead Industries that can transport your Apocalypse fireteam and provide aerial support.",
    type: "dragoonMount",
  },
  {
    id: "vehicle-golem",
    name: "GOLEM",
    armour: 8,
    shields: 6,
    mobility: 4,
    uptime: 2,
    recharge: 2,
    type: "dragoonMount",
    cost: 0,
    hangarSpaceUse: 1,
    crew: 1,
    t1WeaponSlots: 1,
    t2WeaponSlots: 0,
    length: "7m",
    image: "/Images/Vehicles/veh011.webp",
    description:
      "An experimental Triglav weapon platform that never found success until Dragoon interfacing technology made it viable.",
    type: "dragoonMount",
  },
  {
    id: "vehicle-dunebike",
    name: "DUNEBIKE",
    armour: 3,
    shields: 5,
    mobility: 9,
    uptime: 9,
    recharge: 9,
    type: "dragoonMount",
    cost: 0,
    hangarSpaceUse: 1,
    crew: 1,
    t1WeaponSlots: 0,
    t2WeaponSlots: 0,
    length: "2m",
    image: "/Images/Vehicles/veh035.webp",
    description:
      "An all-terrain motorcycle that can reach top speed on any solid terrain, and comes with interchangeable wheels for different environments.",
  },
  {
    id: "vehicle-doppelsoldner",
    name: "DOPPELSÖLDNER",
    armour: 9,
    shields: 6,
    mobility: 5,
    uptime: 5,
    recharge: 5,
    type: "dragoonMount",
    cost: 0,
    hangarSpaceUse: 1,
    crew: 2,
    t1WeaponSlots: 1,
    t2WeaponSlots: 0,
    length: "11m",
    image: "Images/Vehicles/noax-design-monarch-7.webp",
    description:
      "A tank with hyper-reactive armour that was never able to support its own energy demands, now possible with a Dragoon pilot.",
  },
];

const rigs = [
  {
    id: "offensive-kinetic-counterbalancers",
    name: "Kinetic Counterbalancers",
    rigType: "offensive",
    image: "/Images/Equipment/rig259.webp",
    description:
      "Counterbalancers for kinetic weapon types, allowing for greatly reduced recoil when firing.",
  },
  {
    id: "offensive-rocket-catalysts",
    name: "Rocket Catalysts",
    rigType: "offensive",
    image: "/Images/Equipment/rig257.webp",
    description:
      "Propellants for explosive-based weapons use more efficient compounds, significantly increasing payload velocity.",
  },
  {
    id: "offensive-nanite-superconductors",
    name: "Nanite Superconductors",
    rigType: "offensive",
    image: "/Images/Equipment/rig255.webp",
    description:
      "Enhances the magnetic capabilities of railguns, allowing them to cycle through rounds faster.",
  },
  {
    id: "offensive-lens-calibrator",
    name: "Lens Calibrator",
    rigType: "offensive",
    image: "/Images/Equipment/rig253.webp",
    description:
      "A management system for lenses on laser-based weaponry, causing them to reach maximum power output faster.",
  },
  {
    id: "offensive-particle-fuse-batteries",
    name: "Particle Fuse Batteries",
    rigType: "offensive",
    image: "/Images/Equipment/rig251.webp",
    description:
      "Powerful batteries for plasma-based weapons that allows for a longer uptime of firing before overheating.",
  },
  {
    id: "offensive-trajectory-analysis",
    name: "Trajectory Analysis",
    rigType: "offensive",
    image: "/Images/Equipment/rig249.webp",
    description:
      "A suite that enhances the suit's capability of using ranged weaponry, allowing for pinpoint motion prediction and accuracy.",
  },
  {
    id: "offensive-munitions-reconstructor",
    name: "Munitions Reconstructor",
    rigType: "offensive",
    image: "/Images/Equipment/rig233.webp",
    description:
      "Adds a compartment to the suit that, when fed appropriate hyperdense material cubes, can construct ammunition.",
  },
  {
    id: "offensive-thermal-management-system",
    name: "Thermal Management System",
    rigType: "offensive",
    image: "/Images/Equipment/rig231.webp",
    description:
      "Logistical attachments to the suit that improves weapon heat management, allowing for greater volumes of fire.",
  },
  {
    id: "offensive-integrated-rangefinder",
    name: "Integrated Rangefinder",
    rigType: "offensive",
    image: "/Images/Equipment/rig229.webp",
    description:
      "A rig embedded into the suit's HUD, feeding back helpful ballistics calculations for long range shooting.",
  },
  {
    id: "offensive-weapon-mass-compensator",
    name: "Weapon Mass Compensator",
    rigType: "offensive",
    image: "/Images/Equipment/rig227.webp",
    description:
      "A series of synthetic muscle fibres that cater to handling the suit's specific weapon systems for extreme handling.",
  },
  {
    id: "offensive-martial-engine",
    name: "Martial Engine",
    rigType: "offensive",
    image: "/Images/Equipment/rig225.webp",
    description:
      "Installs a machine learning program that assists in close-quarters combat, using vast libraries of data on martial arts.",
  },
  {
    id: "offensive-hypertense-muscle-fibres",
    name: "Hypertense Muscle Fibres",
    rigType: "offensive",
    image: "/Images/Equipment/rig223.webp",
    description:
      "Self-regenerating artificial muscle fibres that significantly increases the physical strength of the suit.",
  },
  {
    id: "offensive-spell-cache-circuits",
    name: "Spell Cache Circuits",
    rigType: "offensive",
    image: "/Images/Equipment/rig207.webp",
    description:
      "Improves the execution of spells, reducing the cast time for most spell types.",
  },
  {
    id: "offensive-spell-burst-capacitors",
    name: "Spell Burst Capacitors",
    rigType: "offensive",
    image: "/Images/Equipment/rig205.webp",
    description:
      "The suit's mana catalyst passively drains mana charge from surrounding environments, improving spell potencies.",
  },
  {
    id: "offensive-leyline-memory-bridge",
    name: "Leyline Memory Bridge",
    rigType: "offensive",
    image: "/Images/Equipment/rig203.webp",
    description:
      "Improves the successive re-casting of the same spell or similar ones when used in frequent amounts.",
  },
  {
    id: "offensive-ancillary-leyline-subroutines",
    name: "Ancillary Leyline Subroutines",
    rigType: "offensive",
    image: "/Images/Equipment/rig201.webp",
    description:
      "For the longer the suit is outputting spells from its mana catalyst in battle, spell handling exponentially improves.",
  },
  {
    id: "offensive-mana-grid-management",
    name: "Mana Grid Management",
    rigType: "offensive",
    image: "/Images/Equipment/rig199.webp",
    description:
      "Reserves some of the suit's computing power to make mana consumption more efficient, reducing spell mana costs.",
  },
  {
    id: "offensive-void-wave-algorithm-injector",
    name: "Void-wave Algorithm Injector",
    rigType: "offensive",
    image: "/Images/Equipment/rig197.webp",
    description:
      "Casting spells from the one spell affinity family will increase the potencies of other spells from the same family.",
  },
  {
    id: "defensive-armour:-reactive-nanite-hardening",
    name: "Armour: Reactive Nanite Hardening",
    rigType: "defensive",
    image: "/Images/Equipment/rig181.webp",
    description:
      "Improves the suit's armour nanites to counteract all incoming damage by a significant amount.",
  },
  {
    id: "defensive-armour:-perforated-padding",
    name: "Armour: Perforated Padding",
    rigType: "defensive",
    image: "/Images/Equipment/rig179.webp",
    description:
      "A perforated layer to the suit's armour that significantly reduces the impact of kinetic projectiles, especially AP rounds.",
  },
  {
    id: "defensive-armour:-electro-magnetic-plating",
    name: "Armour: Electro-Magnetic Plating",
    rigType: "defensive",
    image: "/Images/Equipment/magia-artificial-lightning-paladin.webp",
    description:
      "Charged plating that defends against energy-based attacks by adjusting its electro-magnetic charge.",
  },
  {
    id: "defensive-armour:-elemental-hardening",
    name: "Armour: Elemental Hardening",
    rigType: "defensive",
    image: "/Images/Equipment/magia-artificial-nostryan-frostknight.webp",
    description:
      "Plating that uses an alloy of metal that's charged with mana, adding a mild resistance to mana-based attacks.",
  },
  {
    id: "defensive-armour:-nanite-charging-bank",
    name: "Armour: Nanite Charging Bank",
    rigType: "defensive",
    image: "/Images/Equipment/rig173.webp",
    description:
      "A reservoir attached to the suit that charges armour nanites, allowing for faster self-repair.",
  },
  {
    id: "defensive-pain-suit",
    name: "PAIN Suit",
    rigType: "defensive",
    image: "/Images/Equipment/rig171.webp",
    description:
      "An integration with the pilot's neurolink suit which helps inhibit pain and keeps the mind focused while in combat.",
  },
  {
    id: "defensive-shield:-crysalis-protocol",
    name: "Shield: Crysalis Protocol",
    rigType: "defensive",
    image: "/Images/Equipment/rig155.webp",
    description:
      "Suit shield gains compounding defence against currently incoming damage types while reducing other resistances.",
  },
  {
    id: "defensive-shield:-reactive-force-grid",
    name: "Shield: Reactive Force Grid",
    rigType: "defensive",
    image: "/Images/Equipment/rig153.webp",
    description:
      "Counteracts kinetic impacts to the shield with small bursts of shockwaves, reducing impact significantly.",
  },
  {
    id: "defensive-shield:-mana-dispersion",
    name: "Shield: Mana Dispersion",
    rigType: "defensive",
    image: "/Images/Equipment/rig149.webp",
    description:
      "A protocol in the shield that increases the entropy of mana-based attacks, potentially dispersing them.",
  },
  {
    id: "defensive-shield:-wavelength-nullification",
    name: "Shield: Wavelength Nullification",
    rigType: "defensive",
    image: "/Images/Equipment/rig151.webp",
    description:
      "Attempts to deter incoming electro-magnetic attacks with nullifying wavelengths of energy, albeit only slightly.",
  },
  {
    id: "defensive-shield:-auxiliary-shield-generator",
    name: "Shield: Auxiliary Shield Generator",
    rigType: "defensive",
    image: "/Images/Equipment/rig147.webp",
    description:
      "Greatly increases the efficiency of the suit's shield operation, allowing for a longer uptime against sustained attacks.",
  },
  {
    id: "defensive-chaff-fullers",
    name: "Chaff Fullers",
    rigType: "defensive",
    image: "/Images/Equipment/rig145.webp",
    description:
      "Add strips of stealthy material around your suit, increasing resistance to radar, hacking and optics.",
  },
  {
    id: "mobility-parkour",
    name: "Parkour",
    rigType: "mobility",
    image: "/Images/Equipment/rig129.webp",
    description:
      "A servos that significantly improves ground mobility and agility, allowing for seamless dodging and acrobatics.",
  },
  {
    id: "mobility-dancer",
    name: "Dancer",
    rigType: "mobility",
    image: "/Images/Equipment/rig127.webp",
    description:
      "Uses small thrusters to give brief bursts of speed to either individual limbs or the entire suit.",
  },
  {
    id: "mobility-roller",
    name: "Roller",
    rigType: "mobility",
    image: "/Images/Equipment/rig125.webp",
    description:
      "Adds retractable wheels that allow for fast ground speeds. Stabilizers allow for smooth gliding, even while shooting.",
  },
  {
    id: "mobility-harrier",
    name: "Harrier",
    rigType: "mobility",
    image: "/Images/Equipment/rig123.webp",
    description:
      "Adds a jetpack that allows for agile hovering above ground, but somewhat reduces ground mobility.",
  },
  {
    id: "mobility-warhawk",
    name: "Warhawk",
    rigType: "mobility",
    image: "/Images/Equipment/rig121.webp",
    description:
      "Afterburners for extreme flight speeds while also significantly reducing mobility when on the ground.",
  },
  {
    id: "mobility-launch",
    name: "Launch",
    rigType: "mobility",
    image: "/Images/Equipment/rig119.webp",
    description:
      "Special thrusters that allows suits to launch from the ground at incredible vertical velocities.",
  },
  {
    id: "mobility-inertia",
    name: "Inertia",
    rigType: "mobility",
    image: "/Images/Equipment/rig103.webp",
    description:
      "Significantly minimizes damage taken from severe heights by directing impact kinetic energy outwards on landing.",
  },
  {
    id: "mobility-hyperspatial-subcontroller",
    name: "Hyperspatial Subcontroller",
    rigType: "mobility",
    image: "/Images/Equipment/rig101.webp",
    description:
      "Analyzes immediate surroundings and factors that in to all suit mobility functions for greater use of the environment.",
  },
  {
    id: "mobility-astrometer-gyro-sensor",
    name: "Astrometer-Gyro Sensor",
    rigType: "mobility",
    image: "/Images/Equipment/rig099.webp",
    description:
      "Improves the thrusters on the suit meant for manoeuvrability while in space. Goes well with Warhawk or Harrier.",
  },
  {
    id: "mobility-hazardous-protection",
    name: "Hazardous Protection",
    rigType: "mobility",
    image: "/Images/Equipment/rig097.webp",
    description:
      "Improves the suit's survivability in hazardous environments with better oxygen efficiency and temperature control.",
  },
  {
    id: "mobility-tilt",
    name: "Tilt",
    rigType: "mobility",
    image: "/Images/Equipment/rig095.webp",
    description:
      "A magnet-based servos that boosts the suit's mobility in more electrically-conductive environments.",
  },
  {
    id: "mobility-phantom",
    name: "Phantom",
    rigType: "mobility",
    image: "/Images/Equipment/rig093.webp",
    description:
      "When activated, this cloak masks the suit from detection while disabling most of the suit's other major functions.",
  },
  {
    id: "command-warhound",
    name: "Warhound",
    rigType: "command",
    image: "/Images/Equipment/rig077.webp",
    description:
      "When activated, boosts the functionality of all of the suit's functions at a mild rate temporarily.",
  },
  {
    id: "command-bastion",
    name: "Bastion",
    rigType: "command",
    image: "/Images/Equipment/rig075.webp",
    description:
      "Activating causes nanites to harden for an extreme defence, but this locks up the suit and only lasts for a minute.",
  },
  {
    id: "command-prometheus",
    name: "Prometheus",
    rigType: "command",
    image: "/Images/Equipment/rig073.webp",
    description:
      "When initiated, this reroutes most of the suit's energy reserves to instantly recharge shield capacity to max.",
  },
  {
    id: "command-elusive",
    name: "Elusive",
    rigType: "command",
    image: "/Images/Equipment/alex-figini-exo-chick.webp",
    description:
      "Weapon systems have a harder time tracking the suit and take longer to lock on.",
  },
  {
    id: "utility-cognition-enhancement",
    name: "Cognition Enhancement",
    rigType: "utility",
    image: "/Images/Equipment/rig051.webp",
    description:
      "An attachment to the pilot's neurolink suit which improves the pilot's cognition by a large amount when worn.",
  },
  {
    id: "utility-deep-dive",
    name: "Deep Dive",
    rigType: "utility",
    image: "/Images/Equipment/rig049.webp",
    description:
      "A neurolink boost that integrates the pilot's mind with the suit's security grid more intimately.",
  },
  {
    id: "command-overmind",
    name: "Overmind",
    rigType: "command",
    image: "/Images/Equipment/rig069.webp",
    description:
      "Frees up processing power when executing an e-war module, allowing for faster uses of subsequent e-war modules.",
  },
  {
    id: "command-redeemer",
    name: "Redeemer",
    rigType: "command",
    image: "/Images/Equipment/rig067.webp",
    description:
      "Executes all of the suit's available spells at once with increased potency, but significantly depletes mana reserves.",
  },
  {
    id: "utility-probe-assistant-modules",
    name: "Probe Assistant Modules",
    rigType: "utility",
    image: "/Images/Equipment/rig047.webp",
    description:
      "Small probes that can be launched from the suit and use e-war modules up to Tech 2 at a reduced effectiveness.",
  },
  {
    id: "utility-neurolink-implants",
    name: "Neurolink Implants",
    rigType: "utility",
    image: "/Images/Equipment/rig045.webp",
    description:
      "Grants the pilot cybernetic implants that allows the suit's neurolink to integrate with their mind more effectively.",
  },
  {
    id: "utility-mana-flux-converter",
    name: "Mana Flux Converter",
    rigType: "utility",
    image: "/Images/Equipment/rig043.webp",
    description:
      "Reroutes a portion of the suit's mana capacity to help with the processing of e-war modules.",
  },
  {
    id: "utility-energy-grid-override",
    name: "Energy Grid Override",
    rigType: "utility",
    image: "/Images/Equipment/rig041.webp",
    description:
      "Allows the pilot to utilize the energy grid more effectively, pumping energy from some modules and into others at will.",
  },
  {
    id: "utility-signals-amplifier",
    name: "Signals Amplifier",
    rigType: "utility",
    image: "/Images/Equipment/rig025.webp",
    description:
      "A multitude of signal amplifiers that boosts the effectiveness of emissions-type e-war modules.",
  },
  {
    id: "utility-machine-learning-diagnostics",
    name: "Machine Learning Diagnostics",
    rigType: "utility",
    image: "/Images/Equipment/rig023.webp",
    description:
      "Advances the suit's multiple artificial intelligence systems to better use digital-type e-war modules.",
  },
  {
    id: "utility-logistics-controls",
    name: "Logistics Controls",
    rigType: "utility",
    image: "/Images/Equipment/rig021.webp",
    description:
      "Expands the suit's inventory of handling logistics-type e-war modules, providing additional effects and reserves.",
  },
  {
    id: "utility-assimilation",
    name: "Assimilation",
    rigType: "utility",
    image: "/Images/Equipment/rig015.webp",
    description:
      "Physically connects the pilot's mind and leylines to the suit. As a result, the suit gets much harder to get out of.",
  },
  {
    id: "utility-hazardous-waste-collector",
    name: "Hazardous Waste Collector",
    rigType: "utility",
    image: "/Images/Equipment/rig019.webp",
    description: "Essentially a vacuum that the suit may be equipped with.",
  },
  {
    id: "utility-repair-&-diagnostics",
    name: "Repair & Diagnostics",
    rigType: "utility",
    image: "/Images/Equipment/rig017.webp",
    description:
      "Integrates an AI with a huge database of almost all known and in-use technology.",
  },
];

function createFrame(num) {
  let newFrame = {
    id: "frame-vulcan",
    name: "Vulcan",
    frameIntegrity: 75,
    weaponPoints: 12,
    offensiveSlot: 8,
    defensiveSlot: 6,
    mobilitySlot: 4,
    commandSlot: 1,
    utilitySlot: 4,
    vehicleSlot: 0,
    upgrades: "",
    choices: [],
  }

  switch (num) {
    case 2:
      newFrame.id = "frame-dragoon";
      newFrame.name = "Dragoon";
      newFrame.weaponPoints = 8;
      newFrame.offensiveSlot = 4;
      newFrame.defensiveSlot = 4;
      newFrame.mobilitySlot = 5;
      newFrame.vehicleSlot = 1;
      console.log(newFrame);
      break;
    case 3:
      newFrame.id = "frame-imperator";
      newFrame.name = "Imperator";
      newFrame.frameIntegrity = 60;
      newFrame.weaponPoints = 8;
      newFrame.offensiveSlot = 4;
      newFrame.defensiveSlot = 4;
      newFrame.utilitySlot = 8;
      console.log(newFrame);
      break;
    case 1:
      console.log(newFrame);
      break;
  }
  return newFrame;
}

function handleFrame(choiceFrame) {
  //if choiceFrame is already active, remove active
  if(choiceFrame.classList.contains('active')){
    choiceFrame.classList.remove('active'); 
    //if choiceframe is a frame upgrade, deactivate parent
    if(choiceFrame.classList.contains('choice-frame-upgrade')){choiceFrame.closest('.choice-frame').classList.remove('active');} 
    player.frame = null; 
  } else { //choiceFrame is not active
    //remove all active choices
    const activeFrame = document.querySelectorAll('.choice-frame.active, .choice-frame-upgrade.active');
    activeFrame.forEach(choice => choice.classList.remove('active')); 
    player.frame = null;    
    
    //if choiceframe is a frame upgrade, activate it first, then the parent
    if(choiceFrame.classList.contains('choice-frame-upgrade')){
      const parentFrame = choiceFrame.closest('.choice-frame');
      choiceFrame.classList.add('active');
      parentFrame.classList.add('active');
      let num = parseInt(parentFrame.id.substring(12));
      player.frame = createFrame(num);
      player.frame.upgrades = choiceFrame.id;
     
    } 
    //if choiceframe is a frame, activate only it
    else if (choiceFrame.classList.contains('choice-frame')) {
      choiceFrame.classList.add('active');
      let num = parseInt(choiceFrame.id.substring(12));
      player.frame = createFrame(num);

    } 
  }
  return;
}

function populateRigs(dataArray, choicePrefix, sectionID) {
  const targetSection = document.getElementById(sectionID);

  if (!targetSection) {
    console.error(`Target section with ID "${sectionID}" not found.`);
    return;
  }

  dataArray.forEach((item) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add('choice-rigs');
    newDiv.style.flexBasis = "calc(100%/5)";
    newDiv.id = `${item.id}`;
    switch (item.rigType) {
      case "offensive":
        newDiv.classList.add('offensive-rigs');
        break;
      case "defensive":
        newDiv.classList.add('defensive-rigs');
        break;
      case "utility":
        newDiv.classList.add('utility-rigs');
        break;
      case "command":
        newDiv.classList.add('command-rigs');
        break;
      case "mobility":
        newDiv.classList.add('mobility-rigs');
        break;
    }

    const newSpan = document.createElement("span");
    newDiv.appendChild(newSpan);

    // Image element - common to all
    const imgElement = document.createElement("img");
    imgElement.src =
      item.image || "https://placehold.co/100x100/eeeeee/ffffff?text=NoImage";
    imgElement.alt = `${item.name} image`;
    //imgElement.style.maxHeight = '300px';
    newSpan.appendChild(imgElement); // Image added after newSpan

    const costP = document.createElement("p");
    costP.innerHTML = `Rig Type: ${item.rigType}`;
    newSpan.appendChild(costP);

    const descriptionP = document.createElement("p");
    descriptionP.innerHTML = item.description;
    newSpan.appendChild(descriptionP);

    targetSection.before(newDiv); // Append to the target section
  });
}

function populateVehicles(dataArray, choicePrefix, sectionID) {
  const targetSection = document.getElementById(sectionID);

  if (!targetSection) {
    console.error(`Target section with ID "${sectionID}" not found.`);
    return;
  }

  dataArray.forEach((item) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("choice-rigs");
    newDiv.style.flexBasis = "calc(100%/5)";
    newDiv.id = `${item.id}`;

    if (item.type === "dragoonMount") {
      newDiv.classList.add('defensive-rigs');
    } else {
      newDiv.classList.add('mobility-rigs');
    }

    const newSpan = document.createElement("span");
    newDiv.appendChild(newSpan);

    // Image element - common to all
    const imgElement = document.createElement("img");
    imgElement.src = item.image;
    imgElement.title = getImgName(item.image);
    newSpan.appendChild(imgElement);

    // Display the vehicle name
    const nameP = document.createElement("h3");
    nameP.innerHTML = `${item.name}`;
    newSpan.appendChild(nameP);

    const uList1 = document.createElement("ul");
    uList1.style =
      "display: grid; grid-template-columns: 1fr 1fr; list-style: none; padding: 0; margin: 0; font-size: 15px; text-align: left;";

    // Adjusted appendList1 calls to reflect vehicles attributes
    appendList1(uList1, "Cost: ", formatterIntl.format(item.cost));
    appendList1(uList1, "Hangar Space Use: ", item.hangarSpaceUse);
    appendList1(uList1, "Crew: ", item.crew);
    appendList1(uList1, "T1 Weapon Slots: ", item.t1WeaponSlots);
    appendList1(uList1, "T2 Weapon Slots: ", item.t2WeaponSlots);
    appendList1(uList1, "Mobility: ", item.mobility);
    appendList1(uList1, "Armour: ", item.armour);
    appendList1(uList1, "Length: ", item.length);
    appendList1(uList1, "Shields: ", item.shields);
    appendList1(uList1, "Uptime: ", item.uptime);
    appendList1(uList1, "Recharge: ", item.recharge);
    newSpan.appendChild(uList1);

    const descriptionP = document.createElement("p");
    descriptionP.innerHTML = item.description;
    newSpan.appendChild(descriptionP);

    targetSection.before(newDiv);
  });
}
function addGunDataToSection() {
      // If not populated, create new divs to populate choices
      guns.forEach(gun => {
        let targetSection = document.getElementById('endOfEquipment');
          switch(gun.type2){
            case 'handgun':
              targetSection = document.getElementById('title-submachineguns');
              break;
            case 'smg':
              targetSection = document.getElementById('title-shotguns');
              break;
            case 'shotgun':
              targetSection = document.getElementById('title-rifles');
              break;
            case 'rifle':
              targetSection = document.getElementById('title-lightweapons');
              break;
            case 'lightweapon':
              targetSection = document.getElementById('title-launchers');
              break;
            case 'launcher':
              targetSection = document.getElementById('title-heavyweapons');
              break;
            default://for heavyweapons
              break;
          }
          const newDiv = document.createElement("div");
          newDiv.classList.add("choice", "gun");
          // Ensure unique ID for each choice element, sanitize name for ID
          newDiv.id = gun.name;

          const newSpan = document.createElement("span");
          newDiv.appendChild(newSpan);

          const imgElement = document.createElement('img');
          imgElement.src = gun.image;
          imgElement.title = getImgName(gun.image); // Add alt text for accessibility
          newSpan.appendChild(imgElement);

          // Create an h3 element for the name
          const h3Element = document.createElement('h3');
          h3Element.style.marginTop = '0px';
          h3Element.style.marginBottom = '0px';
          h3Element.textContent = gun.name || 'No Name';
          newSpan.appendChild(h3Element);

          // Type
          const typeP = document.createElement('p');
          typeP.textContent = `Type: ${gun.type1} | Cost: ${formatterIntl.format(gun.cost)}`;
          typeP.style = "text-align: center;"
          newSpan.appendChild(typeP);

          // Equipment Level
          const levelP = document.createElement('p');
          levelP.textContent = `Equipment Level: ${gun.equipmentLevel || 0}`;
          newSpan.appendChild(levelP);

          // Stopping Power
          if (gun.stoppingPower !== null && gun.stoppingPower !== undefined) {
              const stoppingPowerP = document.createElement('p');
              stoppingPowerP.textContent = `Stopping Power: ${gun.stoppingPower}`;
              newSpan.appendChild(stoppingPowerP);
          }

          // Piercing Power
          if (gun.piercingPower !== null && gun.piercingPower !== undefined) {
              const piercingPowerP = document.createElement('p');
              piercingPowerP.textContent = `Piercing Power: ${gun.piercingPower}`;
              newSpan.appendChild(piercingPowerP);
          }

          // Rate of Fire
          if (gun.rateOfFire !== null && gun.rateOfFire !== undefined) {
              const rateOfFireP = document.createElement('p');
              rateOfFireP.textContent = `Rate of Fire: ${gun.rateOfFire}`;
              newSpan.appendChild(rateOfFireP);
          }

          // Range
          if (gun.range !== null && gun.range !== undefined) {
              const rangeP = document.createElement('p');
              rangeP.textContent = `Range: ${gun.range}`;
              newSpan.appendChild(rangeP);
          }

          // Accuracy
          if (gun.accuracy !== null && gun.accuracy !== undefined) {
              const accuracyP = document.createElement('p');
              accuracyP.textContent = `Accuracy: ${gun.accuracy}`;
              newSpan.appendChild(accuracyP);
          }

          // Handling
          if (gun.handling !== null && gun.handling !== undefined) {
              const handlingP = document.createElement('p');
              handlingP.textContent = `Handling: ${gun.handling}`;
              newSpan.appendChild(handlingP);
          }

          // Round Capacity
          if (gun.roundCapacity !== null && gun.roundCapacity !== undefined) {
              const roundCapacityP = document.createElement('p');
              roundCapacityP.textContent = `Round Capacity: ${gun.roundCapacity}`;
              newSpan.appendChild(roundCapacityP);
          }

          // Action
          if (gun.action !== undefined) {
              const actionP = document.createElement('p');
              actionP.textContent = `Action: ${gun.action}`;
              newSpan.appendChild(actionP);
          }

          // Calibre (now includes diode/bolt values from the image)
          if (gun.calibre !== undefined) {
              const calibreP = document.createElement('p');
              calibreP.textContent = `Calibre: ${gun.calibre}`;
              newSpan.appendChild(calibreP);
          }

          // Energy Use
          if (gun.energyUse !== null && gun.energyUse !== undefined) {
              const energyUseP = document.createElement('p');
              energyUseP.textContent = `Energy Use: ${gun.energyUse}`;
              newSpan.appendChild(energyUseP);
          }

          // Tier
          if (gun.tier !== null && gun.tier !== undefined) {
              const tierP = document.createElement('p');
              tierP.textContent = `Tier: ${gun.tier}`;
              newSpan.appendChild(tierP);
          }

          // Damage Per Volley
          if (gun.damagePerVolley !== null && gun.damagePerVolley !== undefined) {
              const damagePerVolleyP = document.createElement('p');
              damagePerVolleyP.textContent = `Damage Per Volley: ${gun.damagePerVolley}`;
              newSpan.appendChild(damagePerVolleyP);
          }

          // Projectile Velocity
          if (gun.projectileVelocity !== null && gun.projectileVelocity !== undefined) {
              const projectileVelocityP = document.createElement('p');
              projectileVelocityP.textContent = `Projectile Velocity: ${gun.projectileVelocity}`;
              newSpan.appendChild(projectileVelocityP);
          }

          // Tracking
          if (gun.tracking !== null && gun.tracking !== undefined) {
              const trackingP = document.createElement('p');
              trackingP.textContent = `Tracking: ${gun.tracking}`;
              newSpan.appendChild(trackingP);
          }

          // Description
          if (gun.description !== undefined) {
              const descriptionP = document.createElement('p');
              descriptionP.textContent = `Description: ${gun.description}`;
              newSpan.appendChild(descriptionP);
          }

          targetSection.before(newDiv); // Append to the target section
        });
}

