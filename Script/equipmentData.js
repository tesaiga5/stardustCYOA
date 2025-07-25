import { formatterIntl } from "/Script/manaData.js";
export {equipment, vehicles, rigs, populateRigs};

// This array contains all equipment objects with their attributes.
// Blank attributes are set to '0'.
// Costs are converted to numerical values (k = thousand, m = million).
const equipment = [ //change to weapons later
  {
    name: ".362 Snub Lawmaker",
    type: "Kinetic",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "A snub-nosed revolver, perfect for concealment while still being able to pack a punch."
  },
  {
    name: "KML Compact",
    type: "Kinetic",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "Extremely popular for concealed carry. Perfect for those who don't want to attract attention."
  },
  {
    name: "Forcify MK VII",
    type: "Plasma",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "A compact plasma gun. Energy guns need no reload, but overheat, and need regular battery changes."
  },
  {
    name: "Bandit-12",
    type: "Kinetic",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "A favourite of bandits, this revolver can take off arms. Hold it well, as the recoil could take off your own."
  },
  {
    name: ".362 Deputy",
    type: "Kinetic",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "These handguns bolster accuracy with a hard hitting calibre. Usually owned by badasses."
  },
  {
    name: "C 2911",
    type: "Kinetic",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "Been in use for a long time, but never discarded for its iconic rep. Still shoots bullets, so it kills."
  },
  {
    name: "FD17 Daybreak",
    type: "Kinetic",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "A lightweight calibre in a double-stacked magazine is perfect for a well balanced handgun."
  },
  {
    name: "Sabre 6",
    type: "Plasma",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "A popular plasma gun that hits hard. This model is known to have good heat sinks."
  },
  {
    name: "Pallach Or2",
    type: "Laser",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "Shoots brief, high-powered pulses of laser, reaching temperatures hotter than the surface of a star."
  },
  {
    name: "H56",
    type: "Kinetic",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "A simple machine pistol with a high rate of fire. Its low calibre has low recoil."
  },
  {
    name: "FD9 Judge",
    type: "Kinetic",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "Perfect in the hands of those who love versatility. Can select to be semi, full, or burst. Silenced."
  },
  {
    name: "Gretel MK III",
    type: "Rail",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "Essentially a portable rail-gun. Known to pierce through tank armour."
  },
  {
    name: "Kayta F5",
    type: "Kinetic",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "Mass produced and found virtually everywhere, this balanced SMG is universally loved for its simplicity."
  },
  {
    name: "Rinn-J",
    type: "Plasma",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "If you want to rain hundreds of burning-hot plasma on your enemies, look no further."
  },
  {
    name: "Hellfang",
    type: "Laser",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "Nothing is scarier than the rapid fire of deadly red laser pulses. Has the highest PTSD-inducing rate. Loved by spec-ops."
  },
  {
    name: "FD39 Echo",
    type: "Kinetic",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "Very wieldly with all of the aspects of an SMG perfected to a tee."
  },
  {
    name: "LK Banshee",
    type: "Plasma",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "You can either go full-auto with torrents of hot plasma, or charged burst shots for more destruction."
  },
  {
    name: "H \"Frill\"",
    type: "Special",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "Experimental reverse-engineered tech from the Heralds. Rapidly shoots volatile mana bolts."
  },
  {
    name: "Spatha 2100FP",
    type: "Kinetic",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "A reliable pump-action that's used in virtually every security and military doctrine."
  },
  {
    name: "Espingarda Model 80",
    type: "Kinetic",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "One of the best weapons for storming and taking out hostiles in tight spaces, like ship interiors."
  },
  {
    name: "Starburst MK VI",
    type: "Laser",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "A more experimental weapon that utilizes multiple diodes to burst out a 'fan' of high-powered lasers."
  },
  {
    name: "Ogoun M31",
    type: "Plasma",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "Delivers a face-full of piping hot plasma. One of the more cruel weapons out there."
  },
  {
    name: "AS-12/45",
    type: "Kinetic",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "Not often used despite its full-auto capabilities, but a favourite for outer-rim bandits."
  },
  {
    name: "Wraithsong A4",
    type: "Rail",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "Shoots an insanely fast burst of 3 high-velocity darts, which is known to make a ghostly whistling sound."
  },
  {
    name: "UN200-42",
    type: "Plasma",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "A standard full-auto plasma gun... until you mark a target with the tag that the plasma orbs follow."
  },
  {
    name: "FD49 Reverb",
    type: "Kinetic",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "A very niche gun usually only found with bodyguards. Has an underslug ranged taser."
  },
  {
    name: "Angel",
    type: "Kinetic",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "The PDW improvement over the FD39 with a harder hitting and longer-ranged cartridge."
  },
  {
    name: "Devil's Kiss",
    type: "Plasma",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "Unknown origin. Has a secondary firing mode that overheats more but shoots explosive plasma shots."
  },
  {
    name: "Bastard-21",
    type: "Kinetic",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "Extremely cheap and shoddy, but that's its charm. Usually only found in the outer rim systems."
  },
  {
    name: "The Ivan",
    type: "Kinetic",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "A popular, cheap, and highly customizable assault rifle made in surplus for a war, long ago."
  },
  {
    name: "Sharktooth-T751",
    type: "Plasma",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "Looks cheaply put together, but is known to be one of the most well balanced plasma guns made."
  },
  {
    name: "FD22 Sprint",
    type: "Kinetic",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "A lightweight scout rifle, perfect for precision shooting and general recon."
  },
  {
    name: "LK Scarlet",
    type: "Laser",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "A versatile and effective laser rifle for scouting and recon. Perfect against armoured personnel."
  },
  {
    name: "The EVI Platform",
    type: "Kinetic",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "A favourite for gun nuts, mainly due to the high availability of after market parts for customization."
  },
  {
    name: "H23",
    type: "Kinetic",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "An elite bullpup with a unique, hard-hitting calibre. Some say it's the perfect assault rifle."
  },
  {
    name: "Gloom MK III",
    type: "Plasma/Laser",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "A plasma and laser gun put into one; plasma for full-auto punches and laser for semi-auto piercing."
  },
  {
    name: "H \"Mantis\"",
    type: "Special",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "Experimental Herald tech. Shoots a quick burst of 3 mana bolts that uncharacteristically move quickly."
  },
  {
    name: "Burial M55",
    type: "Kinetic",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "Used in some of the most famous assassinations in history. High-powered and deadly accurate."
  },
  {
    name: "Atrophy",
    type: "Laser",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "It is said that the victims don't even feel the pain, dropping dead as if it had come from nowhere..."
  },
  {
    name: "Orca A7",
    type: "Rail",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "A skilled shooter with this weapon can become one of the deadliest people in the galaxy."
  },
  {
    name: "Hail-92",
    type: "Kinetic",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "A light machine gun that's often used by bandits. Uses two barrels to unleash a torrent of bullets."
  },
  {
    name: "FD7 Optimum",
    type: "Kinetic",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "A medium machine gun that can punch holes in armour and is perfect for suppressive fire."
  },
  {
    name: "Salamander Or2",
    type: "Special",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "A flamethrower often employed by the Dustkeepers. Perfect for burning away biomass."
  },
  {
    name: "H \"Flare\"",
    type: "Special",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "Fires a deadly continuous beam of mana that intensifies the longer you hold it. Overheats quickly."
  },
  {
    name: "Ratio MK II",
    type: "Rail",
    cost: 2000000,
    equipmentLevel: 5,
    stoppingPower: 9,
    piercingPower: 10,
    rateOfFire: 2,
    range: 10,
    accuracy: 9,
    handling: 2,
    roundCapacity: 4,
    action: "Bolt-action",
    calibre: "42mm",
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "Accelerates particles at a very high speed, creating rays of super-charged, volatile particles. A magnetic anti-materiel weapon that uses coils instead of rails."
  },
  {
    name: "Sardonic 9",
    type: "Plasma",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "Unknown."
  },
  {
    name: "H12",
    type: "Explosive",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "Can launch any type of grenade. Used for destructive purposes as well as crowd control."
  },
  {
    name: "Stark-4",
    type: "Explosive",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "Cheap for a rocket launcher but effective at taking out heavy and expensive targets."
  },
  {
    name: "KM Swarm",
    type: "Explosive",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "A launcher that's more focused for taking out personnel, rather than materiel."
  },
  {
    name: "FD102 Toler",
    type: "Explosive",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "Locks onto targets and launches high-destructive missiles which seek them."
  },
  {
    name: "Explody Thing",
    type: "Explosive",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "The weapon used by Sya'ra the Mad Roller to repel a small Black-hawk convoy during the Luos wars."
  },
  {
    name: "Moses Or19",
    type: "Laser/Plasma",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "A specialized heavy laser gun that fires volatile ion particles, causing explosions."
  },
  {
    name: "Hel",
    type: "Special",
    cost: 4000000,
    equipmentLevel: 6,
    stoppingPower: 10,
    piercingPower: 9,
    rateOfFire: 10,
    range: 6,
    accuracy: 5,
    handling: 0,
    roundCapacity: 0,
    action: "Thrower",
    calibre: "n/a",
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "Spews a burning chemical liquid solution that can instantaneously melt through rock."
  },
  {
    name: "FD99x Perfection",
    type: "Kinetic",
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
    
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "Usually mounted on vehicles, this monster's roar can be heard from many kilometers away."
  }
];

const vehicles = [
  {
    name: "AT Dunebuggy",
    cost: 500000,
    hangarSpaceUse: 1,
    crew: 4,
    T1WeaponSlots: 2,
    T2WeaponSlots: 0,
    mobility: "000000000",
    Armour: "8m",
    Length: "4m",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "The all-terrain dunebuggy allows for great ground coverage. Its high-traction wheels can be replaced with skates or skiis. +Comes with a free machine gun"
  },
  {
    name: "MLUV",
    cost: 1000000,
    hangarSpaceUse: 1,
    crew: 6,
    T1WeaponSlots: 2,
    T2WeaponSlots: 0,
    mobility: "D0000",
    Armour: "E", // Assuming 'E' is a string value for Armour
    Length: "4m",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "This mlitary light utility vehicle has a good balance of mobility, armour, and firepower, perfect for troop transportation and support. +Comes with a free T1 weapon"
  },
  {
    name: "APC",
    cost: 2000000,
    hangarSpaceUse: 2,
    crew: 12,
    T1WeaponSlots: 2,
    T2WeaponSlots: 0,
    mobility: "D0000",
    Armour: "4m",
    Length: "6m",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "Large and bulky, these Armoured Personnel Carriers can transport a good handful of troops or VIPs and protect them with thick armour. +Comes with a free T1 weapon"
  },
  {
    name: "Terrain Tank",
    cost: 3000000,
    hangarSpaceUse: 2,
    crew: 5,
    T1WeaponSlots: 2,
    T2WeaponSlots: 1,
    mobility: "", // mobility value was blank in source for this item
    Armour: "6m",
    Length: "6m",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "These tanks are light armoured, but with their special quarduped tank treads, they can cover many kinds of terrain with good speed. +Comes with a free T2 weapon"
  },
  {
    name: "Heavy Tank",
    cost: 4000000,
    hangarSpaceUse: 2,
    crew: 6,
    T1WeaponSlots: 4,
    T2WeaponSlots: 1,
    mobility: "", // mobility value was blank in source for this item
    Armour: "8m",
    Length: "11m",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "Fit for convoys, heavy firepower, artillery support, and everything tank-like, these beasts can lead the charge into combat. +Comes with a free T2 weapon"
  },
  {
    name: "Spider Tank",
    cost: 6000000,
    hangarSpaceUse: 2,
    crew: 4,
    T1WeaponSlots: 3,
    T2WeaponSlots: 1,
    mobility: "", // mobility value was blank in source for this item
    Armour: "5m",
    Length: "9m",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "Spider tanks are a more experi- mental platform, but unlike tradi- tional tanks, they have less trouble overcoming terrain. +Comes with a free T2 weapon"
  },
  {
    name: "Ground Mech",
    cost: 1000000,
    hangarSpaceUse: 1,
    crew: 1,
    T1WeaponSlots: 2,
    T2WeaponSlots: 0,
    mobility: "0000000",
    Armour: "5m",
    Length: "5m",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "This personal ground mech has ample firepower with versatile movement. The perfect firepower support platform for your troops. +Comes with a free T1 weapon"
  },
  {
    name: "Heavy Ground Mech",
    cost: 4000000,
    hangarSpaceUse: 2,
    crew: 2,
    T1WeaponSlots: 3,
    T2WeaponSlots: 1,
    mobility: "000000SS",
    Armour: "8m",
    Length: "8m",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "These mechs are equipped with extremely hard hitting ordnance, particularily against air targets and other vehicles. +Comes with a free T2 weapon"
  },
  {
    name: "OG Mobile Suit",
    cost: 7000000,
    hangarSpaceUse: 2,
    crew: 8,
    T1WeaponSlots: 1,
    T2WeaponSlots: 0,
    mobility: "0000000",
    Armour: "10m",
    Length: "10m",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "Single-piloted, but extremely versatile. An upgrade from your standard power armour, these can fly in atmosphere or space. +Comes with a free T2 weapon"
  },
  {
    name: "Submarine",
    cost: 3000000,
    hangarSpaceUse: 3,
    crew: 12,
    T1WeaponSlots: 1,
    T2WeaponSlots: 0,
    mobility: "0000000000",
    Armour: "25m",
    Length: "25m",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "These submarines can withstand extreme temperatures and pres- sures, and can withstand many liquids. +Comes with a free T1 weapon"
  },
  {
    name: "Lamprey Boarding Ship",
    cost: 5000000,
    hangarSpaceUse: 4,
    crew: 12,
    T1WeaponSlots: 2,
    T2WeaponSlots: 0,
    mobility: "000000SS",
    Armour: "12m",
    Length: "12m",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "This ship uses high-powered lasers to cut through hulls to allow its boarding party inside. However, it cannot fly through ship shields. +Has 2 hangar space capacity"
  },
  {
    name: "Drop Ship",
    cost: 5000000,
    hangarSpaceUse: 2,
    crew: 12,
    T1WeaponSlots: 3,
    T2WeaponSlots: 0,
    mobility: "0000000",
    Armour: "15m",
    Length: "15m",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Equipment", description: "Heavily armoured and perfectly capable of transporting troops and vehicles. +Comes with a free T1 weapon +Has 3 hangar space capacity"
  }
];

const rigs = [
  {
    name: "Kinetic Counterbalancers",
    rigType: "offensive",
    image: '/Images/Equipment/rig259.webp', 
    description: "Counterbalancers for kinetic weapon types, allowing for greatly reduced recoil when firing."
  },
  {
    name: "Rocket Catalysts",
    rigType: "offensive",
    image: '', description: "Propellants for explosive-based weapons use more efficient compounds, significantly increasing payload velocity."
  },
  {
    name: "Nanite Superconductors",
    rigType: "offensive",
    image: '/Images/Equipment/rig255.webp', description: "Enhances the magnetic capabilities of railguns, allowing them to cycle through rounds faster."
  },
  {
    name: "Lens Calibrator",
    rigType: "offensive",
    image: '/Images/Equipment/rig253.webp', description: "A management system for lenses on laser-based weaponry, causing them to reach maximum power output faster."
  },
  {
    name: "Particle Fuse Batteries",
    rigType: "offensive",
    image: '/Images/Equipment/rig251.webp', description: "Powerful batteries for plasma-based weapons that allows for a longer uptime of firing before overheating."
  },
  {
    name: "Trajectory Analysis",
    rigType: "offensive",
    image: '/Images/Equipment/rig249.webp', description: "A suite that enhances the suit's capability of using ranged weaponry, allowing for pinpoint motion prediction and accuracy."
  },
  {
    name: "Munitions Reconstructor",
    rigType: "offensive",
    image: '/Images/Equipment/rig233.webp', description: "Adds a compartment to the suit that, when fed appropriate hyperdense material cubes, can construct ammunition."
  },
  {
    name: "Thermal Management System",
    rigType: "offensive",
    image: '/Images/Equipment/rig231.webp', description: "Logistical attachments to the suit that improves weapon heat management, allowing for greater volumes of fire."
  },
  {
    name: "Integrated Rangefinder",
    rigType: "offensive",
    image: '/Images/Equipment/rig229.webp', description: "A rig embedded into the suit's HUD, feeding back helpful ballistics calculations for long range shooting."
  },
  {
    name: "Weapon Mass Compensator",
    rigType: "offensive",
    image: '/Images/Equipment/rig227.webp', description: "A series of synthetic muscle fibres that cater to handling the suit's specific weapon systems for extreme handling."
  },
  {
    name: "Martial Engine",
    rigType: "offensive",
    image: '/Images/Equipment/rig225.webp', description: "Installs a machine learning program that assists in close-quarters combat, using vast libraries of data on martial arts."
  },
  {
    name: "Hypertense Muscle Fibres",
    rigType: "offensive",
    image: '/Images/Equipment/rig223.webp', description: "Self-regenerating artificial muscle fibres that significantly increases the physical strength of the suit."
  },
  {
    name: "Spell Cache Circuits",
    rigType: "offensive",
    image: '/Images/Equipment/rig207.webp', description: "Improves the execution of spells, reducing the cast time for most spell types."
  },
  {
    name: "Spell Burst Capacitors",
    rigType: "offensive",
    image: '/Images/Equipment/rig205.webp', description: "The suit's mana catalyst passively drains mana charge from surrounding environments, improving spell potencies."
  },
  {
    name: "Leyline Memory Bridge",
    rigType: "offensive",
    image: '/Images/Equipment/rig203.webp', description: "Improves the successive re-casting of the same spell or similar ones when used in frequent amounts."
  },
  {
    name: "Ancillary Leyline Subroutines",
    rigType: "offensive",
    image: '/Images/Equipment/rig201.webp', description: "For the longer the suit is outputting spells from its mana catalyst in battle, spell handling exponentially improves."
  },
  {
    name: "Mana Grid Management",
    rigType: "offensive",
    image: '/Images/Equipment/rig199.webp', description: "Reserves some of the suit's computing power to make mana consumption more efficient, reducing spell mana costs."
  },
  {
    name: "Void-wave Algorithm Injector",
    rigType: "offensive",
    image: '/Images/Equipment/rig197.webp', description: "Casting spells from the one spell affinity family will increase the potencies of other spells from the same family."
  },
  {
    name: "Armour: Reactive Nanite Hardening",
    rigType: "defensive",
    image: '/Images/Equipment/rig181.webp', description: "Improves the suit's armour nanites to counteract all incoming damage by a significant amount."
  },
  {
    name: "Armour: Perforated Padding",
    rigType: "defensive",
    image: '/Images/Equipment/rig179.webp', description: "A perforated layer to the suit's armour that significantly reduces the impact of kinetic projectiles, especially AP rounds."
  },
  {
    name: "Armour: Electro-Magnetic Plating",
    rigType: "defensive",
    image: '', description: "Charged plating that defends against energy-based attacks by adjusting its electro-magnetic charge."
  },
  {
    name: "Armour: Elemental Hardening",
    rigType: "defensive",
    image: '', description: "Plating that uses an alloy of metal that's charged with mana, adding a mild resistance to mana-based attacks."
  },
  {
    name: "Armour: Nanite Charging Bank",
    rigType: "defensive",
    image: '/Images/Equipment/rig173.webp', description: "A reservoir attached to the suit that charges armour nanites, allowing for faster self-repair."
  },
  {
    name: "PAIN Suit",
    rigType: "defensive",
    image: '/Images/Equipment/rig171.webp', description: "An integration with the pilot's neurolink suit which helps inhibit pain and keeps the mind focused while in combat."
  },
  {
    name: "Shield: Crysalis Protocol",
    rigType: "defensive",
    image: '/Images/Equipment/rig155.webp', description: "Suit shield gains compounding defence against currently incoming damage types while reducing other resistances."
  },
  {
    name: "Shield: Reactive Force Grid",
    rigType: "defensive",
    image: '/Images/Equipment/rig153.webp', description: "Counteracts kinetic impacts to the shield with small bursts of shockwaves, reducing impact significantly."
  },
  {
    name: "Shield: Mana Dispersion",
    rigType: "defensive",
    image: '/Images/Equipment/rig149.webp', description: "A protocol in the shield that increases the entropy of mana-based attacks, potentially dispersing them."
  },
  {
    name: "Shield: Wavelength Nullification",
    rigType: "defensive",
    image: '/Images/Equipment/rig151.webp', description: "Attempts to deter incoming electro-magnetic attacks with nullifying wavelengths of energy, albeit only slightly."
  },
  {
    name: "Shield: Auxiliary Shield Generator",
    rigType: "defensive",
    image: '/Images/Equipment/rig147.webp', description: "Greatly increases the efficiency of the suit's shield operation, allowing for a longer uptime against sustained attacks."
  },
  {
    name: "Chaff Fullers",
    rigType: "defensive",
    image: '/Images/Equipment/rig145.webp', description: "Add strips of stealthy material around your suit, increasing resistance to radar, hacking and optics."
  },
  {
    name: "Parkour",
    rigType: "mobility",
    image: '/Images/Equipment/rig129.webp', description: "A servos that significantly improves ground mobility and agility, allowing for seamless dodging and acrobatics."
  },
  {
    name: "Dancer",
    rigType: "mobility",
    image: '/Images/Equipment/rig127.webp', description: "Uses small thrusters to give brief bursts of speed to either individual limbs or the entire suit."
  },
  {
    name: "Roller",
    rigType: "mobility",
    image: '/Images/Equipment/rig125.webp', description: "Adds retractable wheels that allow for fast ground speeds. Stabilizers allow for smooth gliding, even while shooting."
  },
  {
    name: "Harrier",
    rigType: "mobility",
    image: '/Images/Equipment/rig123.webp', description: "Adds a jetpack that allows for agile hovering above ground, but somewhat reduces ground mobility."
  },
  {
    name: "Warhawk",
    rigType: "mobility",
    image: '/Images/Equipment/rig121.webp', description: "Afterburners for extreme flight speeds while also significantly reducing mobility when on the ground."
  },
  {
    name: "Launch",
    rigType: "mobility",
    image: '/Images/Equipment/rig119.webp', description: "Special thrusters that allows suits to launch from the ground at incredible vertical velocities."
  },
  {
    name: "Inertia",
    rigType: "mobility",
    image: '/Images/Equipment/rig103.webp', description: "Significantly minimizes damage taken from severe heights by directing impact kinetic energy outwards on landing."
  },
  {
    name: "Hyperspatial Subcontroller",
    rigType: "mobility",
    image: '/Images/Equipment/rig101.webp', description: "Analyzes immediate surroundings and factors that in to all suit mobility functions for greater use of the environment."
  },
  {
    name: "Astrometer-Gyro Sensor",
    rigType: "mobility",
    image: '/Images/Equipment/rig099.webp', description: "Improves the thrusters on the suit meant for manoeuvrability while in space. Goes well with Warhawk or Harrier."
  },
  {
    name: "Hazardous Protection",
    rigType: "mobility",
    image: '/Images/Equipment/rig097.webp', description: "Improves the suit's survivability in hazardous environments with better oxygen efficiency and temperature control."
  },
  {
    name: "Tilt",
    rigType: "mobility",
    image: '/Images/Equipment/rig095.webp', description: "A magnet-based servos that boosts the suit's mobility in more electrically-conductive environments."
  },
  {
    name: "Phantom",
    rigType: "mobility",
    image: '/Images/Equipment/rig093.webp', description: "When activated, this cloak masks the suit from detection while disabling most of the suit's other major functions."
  },
  {
    name: "Warhound",
    rigType: "command",
    image: '/Images/Equipment/rig077.webp', description: "When activated, boosts the functionality of all of the suit's functions at a mild rate temporarily."
  },
  {
    name: "Bastion",
    rigType: "command",
    image: '/Images/Equipment/rig075.webp', description: "Activating causes nanites to harden for an extreme defence, but this locks up the suit and only lasts for a minute."
  },
  {
    name: "Prometheus",
    rigType: "command",
    image: '/Images/Equipment/rig073.webp', description: "When initiated, this reroutes most of the suit's energy reserves to instantly recharge shield capacity to max."
  },
  {
    name: "Elusive",
    rigType: "command",
    image: '/Images/Equipment/rig015.webp', description: "Weapon systems have a harder time tracking the suit and take longer to lock on."
  },
  {
    name: "Cognition Enhancement",
    rigType: "utility",
    image: '/Images/Equipment/rig051.webp', description: "An attachment to the pilot's neurolink suit which improves the pilot's cognition by a large amount when worn."
  },
  {
    name: "Deep Dive",
    rigType: "utility",
    image: '/Images/Equipment/rig049.webp', 
    description: "A neurolink boost that integrates the pilot's mind with the suit's security grid more intimately."
  },
  {
    name: "Overmind",
    rigType: "command",
    image: '/Images/Equipment/rig069.webp', description: "Frees up processing power when executing an e-war module, allowing for faster uses of subsequent e-war modules."
  },
  {
    name: "Redeemer",
    rigType: "command",
    image: '/Images/Equipment/rig067.webp', description: "Executes all of the suit's available spells at once with increased potency, but significantly depletes mana reserves."
  },
  {
    name: "Probe Assistant Modules",
    rigType: "utility",
    image: '/Images/Equipment/rig047.webp', description: "Small probes that can be launched from the suit and use e-war modules up to Tech 2 at a reduced effectiveness."
  },
  {
    name: "Neurolink Implants",
    rigType: "utility",
    image: '/Images/Equipment/rig045.webp', description: "Grants the pilot cybernetic implants that allows the suit's neurolink to integrate with their mind more effectively."
  },
  {
    name: "Mana Flux Converter",
    rigType: "utility",
    image: '/Images/Equipment/rig043.webp', description: "Reroutes a portion of the suit's mana capacity to help with the processing of e-war modules."
  },
  {
    name: "Energy Grid Override",
    rigType: "utility",
    image: '/Images/Equipment/rig041.webp', description: "Allows the pilot to utilize the energy grid more effectively, pumping energy from some modules and into others at will."
  },
  {
    name: "Signals Amplifier",
    rigType: "utility",
    image: '/Images/Equipment/rig025.webp', description: "A multitude of signal amplifiers that boosts the effectiveness of emissions-type e-war modules."
  },
  {
    name: "Machine Learning Diagnostics",
    rigType: "utility",
    image: '/Images/Equipment/rig023.webp', description: "Advances the suit's multiple artificial intelligence systems to better use digital-type e-war modules."
  },
  {
    name: "Logistics Controls",
    rigType: "utility",
    image: '/Images/Equipment/rig021.webp', description: "Expands the suit's inventory of handling logistics-type e-war modules, providing additional effects and reserves."
  },
  {
    name: "Assimilation",
    rigType: "utility",
    image: '/Images/Equipment/rig015.webp', 
    description: "Integrates an AI with a huge database of almost all known and in-use technology."
  },
  {
    name: "Hazardous Waste Collector",
    rigType: "utility",
    image: '/Images/Equipment/rig019.webp', description: "Essentially a vacuum that the suit may be equipped with."
  },
  {
    name: "Repair & Diagnostics",
    rigType: "utility",
    image: '/Images/Equipment/rig017.webp', description: "Physically connects the pilot's mind and leylines to the suit. As a result, the suit gets much harder to get out of."
  }
];


function populateRigs(dataArray, choicePrefix, sectionID) {
  const targetSection = document.getElementById(sectionID);

  if (!targetSection) {
    console.error(`Target section with ID "${sectionID}" not found.`);
    return;
  }

  dataArray.forEach(item => {
    const newDiv = document.createElement("div");
    newDiv.classList.add('choice');
    newDiv.style.flexBasis = 'calc(100%/5)';
    newDiv.id = `${choicePrefix}-${item.name}`;
    switch(item.rigType){
      case ('offensive'): 
        newDiv.style.backgroundColor = 'rgb(253,88,95, 0.4)';
        newDiv.style.borderColor = 'rgb(141,69,73)';
        break;
      case ('defensive'): 
        newDiv.style.backgroundColor = 'rgb(90,152,255, 0.4)';
        newDiv.style.borderColor = 'rgb(40,81,199)';
        break;
      case ('utility'):
        newDiv.style.backgroundColor = 'rgb(244,255,82, 0.4)';
        newDiv.style.borderColor = 'rgb(99,90,51)';
        break;
      case ('command'):
        newDiv.style.backgroundColor = 'rgb(114,255,84, 0.4)';
        newDiv.style.borderColor = 'rgb(59,129,40)';
        break;
    }

    const newSpan = document.createElement("span");
    newDiv.appendChild(newSpan);

    // Image element - common to all
    const imgElement = document.createElement('img');
    imgElement.src = item.image || 'https://placehold.co/100x100/eeeeee/ffffff?text=NoImage';
    imgElement.alt = `${item.name} image`;
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