// This file contains data for various ship hulls available in the game.

export {
  hulls,
  shipAI,
  energy,
  shield,
  mods,
  industrial,
  eWar,
  rooms,
  weapons,
  drones,
  createShip,
  deleteShip,
  addHull,
  addWeapon,
  addAI,
  addEnergyGen,
  addShield,
  addCommandMod,
  addHullMod,
  addToHangar,
  addShipEquipment,
  addRoom,
  resetShipConfigUI,
  renderShipConfigUI,
  editShipName,
  populateHullToSection,
};

import {
  formatterIntl,
  appendParagraph,
  appendList1,
} from "/Script/manaData.js";

import {getImgName} from "/Script/switchChoose.js";

const hulls = [
  // Fighters
 
  {
    image: "Images/Ships/bob006.webp",
    name: "Scorpion",
    manufacturer: "Heralds",
    type: "fighter",
    cost: 36000000,
    spinalMount: 6,
    spinal: [],
    broadsideMount: 4,
    broadside: [],
    pointDefenceMount: 4,
    pointDefence: [],
    hangarSpace: 3,
    hangar: [],
    navigation: 25,
    hullArmor: 5,
    shieldStrength: 3,
    length: "25m",
    maxCrew: 2,
    extraRooms: 0,
    rooms: [],
    energyUse: 2,
    description: "The “Scorpion” is a multi-environment fighter whose field-linked modules and gravity drive place it in the newly discovered “Ghul” family of Herald technologies. Its unconventional propulsion allows it to maneuver effortlessly in an atmosphere."
  },
  {
    image: "Images/Ships/bob007.webp",
    name: "Cygnus",
    manufacturer: "Talons",
    type: "fighter",
    cost: 20000000,
    spinalMount: 4,
    spinal: [],
    broadsideMount: 6,
    broadside: [],
    pointDefenceMount: 2,
    pointDefence: [],
    hangarSpace: 2,
    hangar: [],
    navigation: 24,
    hullArmor: 3,
    shieldStrength: 2,
    length: "21m",
    maxCrew: 2,
    extraRooms: 0,
    rooms: [],
    energyUse: 1,
    description: "Recognizing the increasing usefulness of drone warfare, the Talon developed the Cygnus command and control fighter as a test bed for their new squadron synchronization system."
  },
  {
    image: "Images/Ships/bob008.webp",
    name: "X66 “Omen”",
    manufacturer: "Triglav Innovations",
    type: "fighter",
    cost: 20000000,
    spinalMount: 5,
    spinal: [],
    broadsideMount: 3,
    broadside: [],
    pointDefenceMount: 3,
    pointDefence: [],
    hangarSpace: 2,
    hangar: [],
    navigation: 24,
    hullArmor: 3,
    shieldStrength: 2,
    length: "18m",
    maxCrew: 1,
    extraRooms: 0,
    rooms: [],
    energyUse: 1,
    description: "The X66 is a fully autonomous drone fighter adept at assault, ambush, and extended reconnaissance. While capable of carrying a pilot, it doesn't likely need one."
  },
  {
    image: "Images/Ships/ship-coercer EveOnline.jpg",
    name: "Scab",
    manufacturer: "Heralds",
    type: "fighter",
    cost: 30000000,
    spinalMount: 5,
    spinal: [],
    broadsideMount: 6,
    broadside: [],
    pointDefenceMount: 2,
    pointDefence: [],
    hangarSpace: 2,
    hangar: [],
    navigation: 23,
    hullArmor: 6,
    shieldStrength: 3,
    length: "25m",
    maxCrew: 2,
    extraRooms: 0,
    rooms: [],
    energyUse: 0,
    description: "Unlike most Herald tech, \"Scabs\" are often found in abundance. Whoever they were, the Heralds most definitely loved to swarm their enemies with these."
  },
  {
    image: "Images/Ships/long-ouyang-fighter-4000.webp",
    name: "Yōkai",
    manufacturer: "Talons",
    type: "fighter",
    cost: 18000000,
    spinalMount: 4,
    spinal: [],
    broadsideMount: 6,
    broadside: [],
    pointDefenceMount: 4,
    pointDefence: [],
    hangarSpace: 0,
    hangar: [],
    navigation: 22,
    hullArmor: 3,
    shieldStrength: 1,
    length: "23m",
    maxCrew: 1,
    extraRooms: 0,
    rooms: [],
    energyUse: 0,
    description: "A favourite for elite Talon pilots who often venture out alone, mainly because the Yōkai excels at almost every role, especially when it comes to outgunning opponents."
  },
  {
    image: "Images/Ships/knight-indotort-midjourney.webp",
    name: "Knight",
    manufacturer: "Blackhawk Elite",
    type: "fighter",
    cost: 18000000,
    spinalMount: 4,
    spinal: [],
    broadsideMount: 4,
    broadside: [],
    pointDefenceMount: 4,
    pointDefence: [],
    hangarSpace: 3,
    hangar: [],
    navigation: 20,
    hullArmor: 5,
    shieldStrength: 1,
    length: "28m",
    maxCrew: 1,
    extraRooms: 0,
    rooms: [],
    energyUse: 0,
    description: "What It lacks in agility, the Knight makes up for in its powerful thrust- ers. As a solid assault fighter, the Knight boasts sturdy defence with a generous drone bay."
  },
  {
    image: "Images/Ships/x61stark-indotort-midjourney.webp",
    name: "X61 Stark",
    manufacturer: "Triglav Innovations",
    type: "fighter",
    cost: 15000000,
    spinalMount: 4,
    spinal: [],
    broadsideMount: 4,
    broadside: [],
    pointDefenceMount: 2,
    pointDefence: [],
    hangarSpace: 2,
    hangar: [],
    navigation: 21,
    hullArmor: 3,
    shieldStrength: 3,
    length: "24m",
    maxCrew: 1,
    extraRooms: 0,
    rooms: [],
    energyUse: 0,
    description: "Only recently did the scientists at Triglav reverse-engineer the strange green coating of Herald craft. The X61 Stark reflects this with powerful native shields."
  },
  {
    image: "Images/Ships/pike-indotort-midjourney.webp",
    name: "Pike",
    manufacturer: "Red Dagger Pirates",
    type: "fighter",
    cost: 15000000,
    spinalMount: 3,
    spinal: [],
    broadsideMount: 6,
    broadside: [],
    pointDefenceMount: 2,
    pointDefence: [],
    hangarSpace: 1,
    hangar: [],
    navigation: 22,
    hullArmor: 2,
    shieldStrength: 1,
    length: "21m",
    maxCrew: 2,
    extraRooms: 0,
    rooms: [],
    energyUse: 0,
    description: "When the Daggers get serious, they deploy their fearsome assault fighters, the Pikes. These ships often turn the tide in small confrontations and skirmishes."
  },
  {
    image: "Images/Ships/piv18-indotort-midjourney.webp",
    name: "PI V18",
    manufacturer: "Pulsar Inc.",
    type: "fighter",
    cost: 15000000,
    spinalMount: 4,
    spinal: [],
    broadsideMount: 4,
    broadside: [],
    pointDefenceMount: 4,
    pointDefence: [],
    hangarSpace: 3,
    hangar: [],
    navigation: 22,
    hullArmor: 4,
    shieldStrength: 1,
    length: "24m",
    maxCrew: 2,
    extraRooms: 0,
    rooms: [],
    energyUse: 1,
    description: "Although Pulsar’s next generation fighter is only an incremental improvement on its previous efforts, the integrated V6 system is a classy touch that leaves room for a second command module."
  },
  {
    image: "Images/Ships/piv17-indotort-midjourney.webp",
    name: "PI V17",
    manufacturer: "Pulsar Inc.",
    type: "fighter",
    cost: 13000000,
    spinalMount: 3,
    spinal: [],
    broadsideMount: 4,
    broadside: [],
    pointDefenceMount: 4,
    pointDefence: [],
    hangarSpace: 3,
    hangar: [],
    navigation: 22,
    hullArmor: 4,
    shieldStrength: 1,
    length: "24m",
    maxCrew: 2,
    extraRooms: 0,
    rooms: [],
    energyUse: 0,
    description: "Most pilots strive to fly one of these, if only for the sheer comfort of being in its cockpit. For any solo pilot wishing to travel the unknown, this is the ship to be in."
  },
  {
    image: "Images/Ships/tomahawk-indotort-midjourney.webp",
    name: "Tomahawk",
    manufacturer: "Red Dagger Pirates",
    type: "fighter",
    cost: 13000000,
    spinalMount: 4,
    spinal: [],
    broadsideMount: 4,
    broadside: [],
    pointDefenceMount: 2,
    pointDefence: [],
    hangarSpace: 0,
    hangar: [],
    navigation: 24,
    hullArmor: 2,
    shieldStrength: 1,
    length: "18m",
    maxCrew: 1,
    extraRooms: 0,
    rooms: [],
    energyUse: 0,
    description: "The Red Daggers produce these en masse, likely using stolen tech. While rookies usually fly them, these lightning-fast Tomahawks pose a serious threat to convoys."
  },
  {
    image: "Images/Ships/moth-indotort-midjourney.webp",
    name: "Moth",
    manufacturer: "Federation Navy",
    type: "fighter",
    cost: 13000000,
    spinalMount: 2,
    spinal: [],
    broadsideMount: 4,
    broadside: [],
    pointDefenceMount: 4,
    pointDefence: [],
    hangarSpace: 3,
    hangar: [],
    navigation: 18,
    hullArmor: 5,
    shieldStrength: 1,
    length: "26m",
    maxCrew: 2,
    extraRooms: 0,
    rooms: [],
    energyUse: 0,
    description: "Usually escorted by Wasps, the Moths carry the firepower to the battlefield. A common tactic is to load Moths up with bomber drones to overwhelm enemy heavy ships."
  },
  {
    image: "Images/Ships/Algos by EveOnline.jpg",
    name: "Wasp",
    manufacturer: "Federation Navy",
    type: "fighter",
    cost: 11000000,
    spinalMount: 3,
    spinal: [],
    broadsideMount: 4,
    broadside: [],
    pointDefenceMount: 2,
    pointDefence: [],
    hangarSpace: 0,
    hangar: [],
    navigation: 21,
    hullArmor: 4,
    shieldStrength: 1,
    length: "20m",
    maxCrew: 1,
    extraRooms: 0,
    rooms: [],
    energyUse: 0,
    description: "The main interceptor spacecraft for the Federation Navy, Wasps have become an icon. Most pilots learn how to fly one early on, and many tend to stick with this ship."
  },
 {
    image: "Images/Ships/Beyond_Beatrice_R&D_midjourney.webp",
    name: "Beyond",
    manufacturer: "Beatrice R&D",
    type: "fighter",
    cost: 9000000,
    spinalMount: 3,
    spinal: [],
    broadsideMount: 2,
    broadside: [],
    pointDefenceMount: 3,
    pointDefence: [],
    hangarSpace: 2,
    hangar: [],
    navigation: 24,
    hullArmor: 4,
    shieldStrength: 1,
    length: "16m",
    maxCrew: 2,
    extraRooms: 0,
    rooms: [],
    energyUse: 0,
    description: "The Beyond is often employed as a support craft for Beatrice R&D exploration teams, but it often sees its use in intercepting threats."
  },
  {
    image: "Images/Ships/S97-TRN-indotort-midjourney.webp",
    name: "S97-TRN",
    manufacturer: "Hammerhead Ind.",
    type: "fighter",
    cost: 9000000,
    spinalMount: 3,
    spinal: [],
    broadsideMount: 4,
    broadside: [],
    pointDefenceMount: 3,
    pointDefence: [],
    hangarSpace: 0,
    hangar: [],
    navigation: 20,
    hullArmor: 2,
    shieldStrength: 1,
    length: "24m",
    maxCrew: 1,
    extraRooms: 0,
    rooms: [],
    energyUse: 0,
    description: "Perhaps the most common single pilot ship in the galaxy, it's safe to assume that every space-faring group owns at least four. They're affordable and effective."
  },
  {
    image: "Images/Ships/S92TMC-indotort-midjourney.webp",
    name: "S92-TMC",
    manufacturer: "Hammerhead Ind.",
    type: "fighter",
    cost: 7000000,
    spinalMount: 3,
    spinal: [],
    broadsideMount: 2,
    broadside: [],
    pointDefenceMount: 4,
    pointDefence: [],
    hangarSpace: 1,
    hangar: [],
    navigation: 20,
    hullArmor: 3,
    shieldStrength: 1,
    length: "18m",
    maxCrew: 1,
    extraRooms: 0,
    rooms: [],
    energyUse: 0,
    description: "Perhaps the most basic fighter ship hull you can get that can fit a multi-purpose role, even for out-of combat activities."
  },
  // Frigates
  {
    image: "Images/Ships/Corax by EveOnline.jpg",
    name: "S47-LTM",
    manufacturer: "Hammerhead Ind.",
    type: "frigate",
    cost: 18000000,
    spinalMount: 3,
    spinal: [],
    broadsideMount: 6,
    broadside: [],
    pointDefenceMount: 4,
    pointDefence: [],
    hangarSpace: 4,
    hangar: [],
    navigation: 15,
    hullArmor: 6,
    shieldStrength: 2,
    length: "120m",
    maxCrew: 12,
    extraRooms: 7,
    rooms: [],
    energyUse: 1,
    description:
      "A cheap frigate that was initially designed as a hauling ship, but has since seen universal use across the galaxy. For its price, it can be used in any application.",
  },
  {
    image: "Images/Ships/Missile Frigate Animation by DionStabber.gif",
    name: "M8-GG",
    manufacturer: "Hammerhead Ind.",
    type: "frigate",
    cost: 20000000,
    spinalMount: 3,
    spinal: [],
    broadsideMount: 8,
    broadside: [],
    pointDefenceMount: 3,
    pointDefence: [],
    hangarSpace: 3,
    hangar: [],
    navigation: 16,
    hullArmor: 5,
    shieldStrength: 3,
    length: "135m",
    maxCrew: 12,
    extraRooms: 7,
    rooms: [],
    energyUse: 1,
    description:
      "These were discontinued by Hammerhead Industries after receiving pressure from the Blackhawks; they claim that the M8-GG was too prevalent in bandit doctrines.",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Venture",
    manufacturer: "Beatrice R&D",
    type: "frigate",
    cost: 22000000,
    spinalMount: 2,
    spinal: [],
    broadsideMount: 8,
    broadside: [],
    pointDefenceMount: 4,
    pointDefence: [],
    hangarSpace: 5,
    hangar: [],
    navigation: 19,
    hullArmor: 8,
    shieldStrength: 3,
    length: "118m",
    maxCrew: 7,
    extraRooms: 9,
    rooms: [],
    energyUse: 1,
    description:
      "A common frigate frequently put to use at Beatrice R&D. Not only is it ideal for exploration with its exceptional navigation systems, it can also hold its own in a fight.",
  },
  {
    image: "Images/Ships/SSTO gunship by Aleksandre Lortkipanidze.webp",
    name: "Skate",
    manufacturer: "Federation Navy",
    type: "frigate",
    cost: 24000000,
    spinalMount: 2,
    spinal: [],
    broadsideMount: 10,
    broadside: [],
    pointDefenceMount: 5,
    pointDefence: [],
    hangarSpace: 2,
    hangar: [],
    navigation: 17,
    hullArmor: 7,
    shieldStrength: 3,
    length: "115m",
    maxCrew: 12,
    extraRooms: 7,
    rooms: [],
    energyUse: 1,
    description:
      "Skates are the Navy's primary patrol craft, and are also a favorite for local security forces. Its high mobility also earns its use as an effective scout ship.",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Rhino",
    manufacturer: "Federation Navy",
    type: "frigate",
    cost: 24000000,
    spinalMount: 3,
    spinal: [],
    broadsideMount: 6,
    broadside: [],
    pointDefenceMount: 8,
    pointDefence: [],
    hangarSpace: 8,
    hangar: [],
    navigation: 15,
    hullArmor: 9,
    shieldStrength: 3,
    length: "138m",
    maxCrew: 13,
    extraRooms: 8,
    rooms: [],
    energyUse: 1,
    description:
      "The Navy loves their drone ships, and the Rhino mirrors that mentality to a tee. Rhinos are a favorite for star system security, often supported by Wasps and Moths.",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Viper",
    manufacturer: "Federation Navy",
    type: "frigate",
    cost: 26000000,
    spinalMount: 3,
    spinal: [],
    broadsideMount: 10,
    broadside: [],
    pointDefenceMount: 6,
    pointDefence: [],
    hangarSpace: 4,
    hangar: [],
    navigation: 16,
    hullArmor: 10,
    shieldStrength: 3,
    length: "134m",
    maxCrew: 12,
    extraRooms: 8,
    rooms: [],
    energyUse: 1,
    description:
      "Sometimes seen as the backbone of the Navy, the Viper packs a punch. It's primarily designed for assault purposes and sees a lot of action in naval warfare.",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Sabre",
    manufacturer: "Red Dagger Pirates",
    type: "frigate",
    cost: 26000000,
    spinalMount: 4,
    spinal: [],
    broadsideMount: 10,
    broadside: [],
    pointDefenceMount: 4,
    pointDefence: [],
    hangarSpace: 2,
    hangar: [],
    navigation: 20,
    hullArmor: 6,
    shieldStrength: 3,
    length: "124m",
    maxCrew: 11,
    extraRooms: 7,
    rooms: [],
    energyUse: 1,
    description:
      "Intimidating in design, the mere presence of the Sabre is sure to raise many hairs. When a Sabre comes in, many unfortunate victims know they have no chance.",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "PI Vf8",
    manufacturer: "Pulsar Inc.",
    type: "frigate",
    cost: 28000000,
    spinalMount: 3,
    spinal: [],
    broadsideMount: 8,
    broadside: [],
    pointDefenceMount: 7,
    pointDefence: [],
    hangarSpace: 6,
    hangar: [],
    navigation: 18,
    hullArmor: 8,
    shieldStrength: 3,
    length: "122m",
    maxCrew: 15,
    extraRooms: 9,
    rooms: [],
    energyUse: 1,
    description:
      "Pulsar's state-of-the-art exploration ship, the PI Vf8 can also find itself in more industrious roles. That said, its core functionality is deep- space exploration.",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "X12 Crypt",
    manufacturer: "Triglav Innovations",
    type: "frigate",
    cost: 30000000,
    spinalMount: 4,
    spinal: [],
    broadsideMount: 10,
    broadside: [],
    pointDefenceMount: 6,
    pointDefence: [],
    hangarSpace: 2,
    hangar: [],
    navigation: 17,
    hullArmor: 9,
    shieldStrength: 3,
    length: "140m",
    maxCrew: 13,
    extraRooms: 9,
    rooms: [],
    energyUse: 1,
    description:
      "The origins of the X12 Crypt is still kept hush-hush by Triglav, but its capabilities at navigation as well as firepower easily put it at odds with Stalwarts or Rulsaklas.",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Stalwart",
    manufacturer: "Blackhawk Elite",
    type: "frigate",
    cost: 33000000,
    spinalMount: 4,
    spinal: [],
    broadsideMount: 10,
    broadside: [],
    pointDefenceMount: 4,
    pointDefence: [],
    hangarSpace: 6,
    hangar: [],
    navigation: 14,
    hullArmor: 11,
    shieldStrength: 3,
    length: "136m",
    maxCrew: 14,
    extraRooms: 9,
    rooms: [],
    energyUse: 1,
    description:
      "With the heavily organized structure of the Blackhawk armadas, many merc squads find themselves inside one of these heavily armoured ships sooner or later.",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Rusalka",
    manufacturer: "Talons",
    type: "frigate",
    cost: 34000000,
    spinalMount: 4,
    spinal: [],
    broadsideMount: 12,
    broadside: [],
    pointDefenceMount: 5,
    pointDefence: [],
    hangarSpace: 3,
    hangar: [],
    navigation: 17,
    hullArmor: 7,
    shieldStrength: 3,
    length: "139m",
    maxCrew: 12,
    extraRooms: 8,
    rooms: [],
    energyUse: 1,
    description:
      "Rusalkas are known to be capable of taking on heavier hulls. Whether it's because of its efficient design or that it's mostly piloted by skilled Talon pilots is up for debate.",
  },
  {
    image: "Images/Ships/Chremoas Frigate by EveOnline.jpg",
    name: "Grin",
    manufacturer: "Heralds",
    type: "frigate",
    cost: 60000000,
    spinalMount: 5,
    spinal: [],
    broadsideMount: 12,
    broadside: [],
    pointDefenceMount: 2,
    pointDefence: [],
    hangarSpace: 5,
    hangar: [],
    navigation: 18,
    hullArmor: 9,
    shieldStrength: 4,
    length: "132m",
    maxCrew: 9,
    extraRooms: 8,
    rooms: [],
    energyUse: 1,
    description:
      'Part of the "Ghost" family of Herald tech, the "Grin" took Triglav scientists almost a century to figure out. It was this ship where they discovered mana shielding.',
  },
  // Corvettes (using Frigate rules) from stardust-powercreep-dlc-by-bob-grue-1.txt
  {
    image:
      "Images/Ships/Levy 9 heavy torpedo corvette-Infinite Lagrange by Jie Ni.jpg",
    name: "Hermes",
    manufacturer: "Beatrice R&D",
    type: "corvette",
    cost: 20000000,
    spinalMount: 2,
    spinal: [],
    broadsideMount: 3,
    broadside: [],
    pointDefenceMount: 2,
    pointDefence: [],
    hangarSpace: 1,
    hangar: [],
    navigation: 21,
    hullArmor: 6,
    shieldStrength: 2,
    length: "45m",
    maxCrew: 2,
    extraRooms: 2,
    rooms: [],
    energyUse: 1,
    description:
      "The Hermes is useful as a shuttle or scout craft for Beatrice's larger ships. It has also become a popular courier ship on its own merits.",
  },
  {
    image: "Images/Ships/bob004.webp",
    name: "Dirk",
    manufacturer: "Red Dagger Pirates",
    type: "corvette",
    cost: 20000000,
    spinalMount: 2,
    spinal: [],
    broadsideMount: 3,
    broadside: [],
    pointDefenceMount: 2,
    pointDefence: [],
    hangarSpace: 1,
    hangar: [],
    navigation: 22,
    hullArmor: 4,
    shieldStrength: 2,
    length: "61m",
    maxCrew: 2,
    extraRooms: 2,
    rooms: [],
    energyUse: 1,
    description:
      "Don't be fooled by its small size. The Dirk never travels alone. These scout ships are always on the lookout for new prey, and are notorious for jamming a victim's warp drive while calling in their mothership.",
  },
  {
    image: "Images/Ships/bob002.webp",
    name: "PI Vk2",
    manufacturer: "Pulsar Inc.",
    type: "corvette",
    cost: 20000000,
    spinalMount: 2,
    spinal: [],
    broadsideMount: 3,
    broadside: [],
    pointDefenceMount: 2,
    pointDefence: [],
    hangarSpace: 1,
    hangar: [],
    navigation: 20,
    hullArmor: 6,
    shieldStrength: 2,
    length: "54m",
    maxCrew: 2,
    extraRooms: 2,
    rooms: [],
    energyUse: 1,
    description:
      "The PI Vk2 is often used as a shuttle for couriers or a luxury yacht for wealthy businessmen. Fast, spacious, and surprisingly comfortable, the Vk2 is an increasingly common sight.",
  },
  {
    image: "Images/Ships/bob001.webp",
    name: "Morning Star",
    manufacturer: "Federation Navy",
    type: "corvette",
    cost: 20000000,
    spinalMount: 2,
    spinal: [],
    broadsideMount: 3,
    broadside: [],
    pointDefenceMount: 2,
    pointDefence: [],
    hangarSpace: 1,
    hangar: [],
    navigation: 20,
    hullArmor: 5,
    shieldStrength: 2,
    length: "65m",
    maxCrew: 2,
    extraRooms: 2,
    rooms: [],
    energyUse: 1,
    description:
      "The Morning Star is one of the earliest corvettes, and one of the most successful. Highly adaptable, it can fill the role of scout, interceptor, wing support, heavy fighter, or planetary landing craft.",
  },
  {
    image: "Images/Ships/bob003.webp",
    name: "Shrike",
    manufacturer: "Blackhawk Elite",
    type: "corvette",
    cost: 20000000,
    spinalMount: 2,
    spinal: [],
    broadsideMount: 3,
    broadside: [],
    pointDefenceMount: 3,
    pointDefence: [],
    hangarSpace: 1,
    hangar: [],
    navigation: 21,
    hullArmor: 7,
    shieldStrength: 3,
    length: "70m",
    maxCrew: 3,
    extraRooms: 3,
    rooms: [],
    energyUse: 2,
    description:
      "The Shrike is usually found as a plaything of the super rich, who take pains to outfit them in the most expensive way possible.",
  },

  // Destroyers
  {
    image:
      "Images/Ships/entangled-studio-ent-x4-veh-ship-ter-xl-builder-01.webp",
    name: "K792-UN4",
    manufacturer: "Hammerhead Ind.",
    type: "destroyer",
    cost: 24000000,
    spinalMount: 5,
    spinal: [],
    broadsideMount: 8,
    broadside: [],
    pointDefenceMount: 6,
    pointDefence: [],
    hangarSpace: 8,
    hangar: [],
    navigation: 12,
    hullArmor: 10,
    shieldStrength: 3,
    length: "210m",
    maxCrew: 32,
    extraRooms: 10,
    rooms: [],
    energyUse: 2,
    description:
      "This hull was produced primarily for security forces for when security situations become critical. You can bet that most star systems have these for emergencies.",
  },
  {
    image: "Images/Ships/Cargo Spaceship [Part II] by Jakub Wysocki.webp",
    name: "V77-SLT",
    manufacturer: "Hammerhead Ind.",
    type: "destroyer",
    cost: 26000000,
    spinalMount: 5,
    spinal: [],
    broadsideMount: 10,
    broadside: [],
    pointDefenceMount: 3,
    pointDefence: [],
    hangarSpace: 5,
    hangar: [],
    navigation: 12,
    hullArmor: 10,
    shieldStrength: 4,
    length: "240m",
    maxCrew: 40,
    extraRooms: 12,
    rooms: [],
    energyUse: 2,
    description:
      "Originally a hauler hull that was repurposed for war during the Pirate War, long ago. Its relatively thick armour coupled with wide- spread availability was ideal.",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Voyage",
    manufacturer: "Beatrice R&D",
    type: "destroyer",
    cost: 26000000,
    spinalMount: 5,
    spinal: [],
    broadsideMount: 8,
    broadside: [],
    pointDefenceMount: 4,
    pointDefence: [],
    hangarSpace: 9,
    hangar: [],
    navigation: 13,
    hullArmor: 10,
    shieldStrength: 4,
    length: "242m",
    maxCrew: 46,
    extraRooms: 15,
    rooms: [],
    energyUse: 2,
    description:
      "While classified as a destroyer- class hull, the Voyage often finds itself in courier or personnel transport jobs. Being in one can almost ensure your safe travels.",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Dart",
    manufacturer: "Red Dagger Pirates",
    type: "destroyer",
    cost: 28000000,
    spinalMount: 5,
    spinal: [],
    broadsideMount: 10,
    broadside: [],
    pointDefenceMount: 5,
    pointDefence: [],
    hangarSpace: 6,
    hangar: [],
    navigation: 16,
    hullArmor: 9,
    shieldStrength: 4,
    length: "223m",
    maxCrew: 38,
    extraRooms: 10,
    rooms: [],
    energyUse: 2,
    description:
      "The Dart is a destroyer hull that often sees its roles in convoy escort or scouting for something the Red Daggers deem valuable.",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Wolf",
    manufacturer: "Federation Navy",
    type: "destroyer",
    cost: 28000000,
    spinalMount: 5,
    spinal: [],
    broadsideMount: 8,
    broadside: [],
    pointDefenceMount: 5,
    pointDefence: [],
    hangarSpace: 10,
    hangar: [],
    navigation: 10,
    hullArmor: 12,
    shieldStrength: 4,
    length: "236m",
    maxCrew: 44,
    extraRooms: 13,
    rooms: [],
    energyUse: 2,
    description:
      "The Wolf got its name from the classical Navy doctrine of 3-5 of these hulls roaming the outskirts like a pack. When they catch scent of prey, there's no turning back.",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Longbow",
    manufacturer: "Red Dagger Pirates",
    type: "destroyer",
    cost: 30000000,
    spinalMount: 6,
    spinal: [],
    broadsideMount: 10,
    broadside: [],
    pointDefenceMount: 4,
    pointDefence: [],
    hangarSpace: 6,
    hangar: [],
    navigation: 14,
    hullArmor: 10,
    shieldStrength: 4,
    length: "235m",
    maxCrew: 42,
    extraRooms: 12,
    rooms: [],
    energyUse: 2,
    description:
      "When the Daggers go to war, they bring out their Longbows. They're supremely agile for destroyers and have a huge amount of firepower.",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Vulture",
    manufacturer: "Federation Navy",
    type: "destroyer",
    cost: 30000000,
    spinalMount: 5,
    spinal: [],
    broadsideMount: 14,
    broadside: [],
    pointDefenceMount: 6,
    pointDefence: [],
    hangarSpace: 6,
    hangar: [],
    navigation: 11,
    hullArmor: 13,
    shieldStrength: 4,
    length: "229m",
    maxCrew: 42,
    extraRooms: 12,
    rooms: [],
    energyUse: 2,
    description:
      "Unlike its namesake, the Vulture hull is for direct confrontations. They're notorious for being able to take a beating while still dishing out decent firepower.",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "PI Vd3",
    manufacturer: "Pulsar Inc.",
    type: "destroyer",
    cost: 32000000,
    spinalMount: 5,
    spinal: [],
    broadsideMount: 12,
    broadside: [],
    pointDefenceMount: 7,
    pointDefence: [],
    hangarSpace: 10,
    hangar: [],
    navigation: 13,
    hullArmor: 11,
    shieldStrength: 4,
    length: "252m",
    maxCrew: 56,
    extraRooms: 15,
    rooms: [],
    energyUse: 2,
    description:
      "This hull is one of the rare few that Pulsar created for the sole purpose of combat. In particular, they're made almost exclusively to escort deep-space exploration craft.",
  },
  {
    image: "Images/Ships/Belvor by Thibault Girard.webp",
    name: "X33 Tribe",
    manufacturer: "Triglav Innovations",
    type: "destroyer",
    cost: 36000000,
    spinalMount: 6,
    spinal: [],
    broadsideMount: 12,
    broadside: [],
    pointDefenceMount: 6,
    pointDefence: [],
    hangarSpace: 7,
    hangar: [],
    navigation: 13,
    hullArmor: 12,
    shieldStrength: 4,
    length: "247m",
    maxCrew: 44,
    extraRooms: 14,
    rooms: [],
    energyUse: 2,
    description:
      "The X33 Tribe is an extremely rare vessel, likely from not having been mass produced by Triglav. It's speculated that it's an early design for experimentation purposes.",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Viking",
    manufacturer: "Blackhawk Elite",
    type: "destroyer",
    cost: 42000000,
    spinalMount: 5,
    spinal: [],
    broadsideMount: 14,
    broadside: [],
    pointDefenceMount: 5,
    pointDefence: [],
    hangarSpace: 11,
    hangar: [],
    navigation: 10,
    hullArmor: 14,
    shieldStrength: 4,
    length: "255m",
    maxCrew: 48,
    extraRooms: 13,
    rooms: [],
    energyUse: 2,
    description:
      "Vikings often form up the majority of the support firepower in Black- hawk fleets. Many also find themselves in Blackhawk blockades, set up around the outer rims.",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Acheri",
    manufacturer: "Talons",
    type: "destroyer",
    cost: 45000000,
    spinalMount: 6,
    spinal: [],
    broadsideMount: 14,
    broadside: [],
    pointDefenceMount: 6,
    pointDefence: [],
    hangarSpace: 7,
    hangar: [],
    navigation: 14,
    hullArmor: 11,
    shieldStrength: 4,
    length: "244m",
    maxCrew: 46,
    extraRooms: 12,
    rooms: [],
    energyUse: 2,
    description:
      "Despite its capability of excelling at almost any task, the Acheri is never alone. When the Talons want to win, they'll throw in more than one of these just to be sure.",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Carapace",
    manufacturer: "Heralds",
    type: "destroyer",
    cost: 70000000,
    spinalMount: 7,
    spinal: [],
    broadsideMount: 14,
    broadside: [],
    pointDefenceMount: 5,
    pointDefence: [],
    hangarSpace: 10,
    hangar: [],
    navigation: 16,
    hullArmor: 13,
    shieldStrength: 5,
    length: "237m",
    maxCrew: 36,
    extraRooms: 12,
    rooms: [],
    energyUse: 2,
    description:
      'Long, slender, and organic-looking, the "Carapace" hull is an extremely rare sight. Only those who don\'t mind the attention of others fly these.',
  },

  // Cruisers
  {
    image: "Images/Ships/bob009.webp",
    name: "S07-DD",
    manufacturer: "Hammerhead Ind.",
    type: "cruiser",
    cost: 40000000,
    spinalMount: 3,
    spinal: [],
    broadsideMount: 12,
    broadside: [],
    pointDefenceMount: 4,
    pointDefence: [],
    hangarSpace: 7,
    hangar: [],
    navigation: 6,
    hullArmor: 12,
    shieldStrength: 6,
    length: "497m",
    maxCrew: 250,
    extraRooms: 12,
    rooms: [],
    energyUse: 3,
    description:
      "A popular ship among new merc companies looking to get an effective start, mainly due to the cost factor allowing quick fleet assembly of cruiser-class hulls.",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "TCO-7B",
    manufacturer: "Hammerhead Ind.",
    type: "cruiser",
    cost: 42000000,
    spinalMount: 2,
    spinal: [],
    broadsideMount: 14,
    broadside: [],
    pointDefenceMount: 8,
    pointDefence: [],
    hangarSpace: 10,
    hangar: [],
    navigation: 5,
    hullArmor: 13,
    shieldStrength: 6,
    length: "512m",
    maxCrew: 300,
    extraRooms: 14,
    rooms: [],
    energyUse: 3,
    description:
      "This is the main support vessel for the venerable Security corporation, who dedicate themselves to guarding the assets of companies such as Beatrice or Pulsar.",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Prospect",
    manufacturer: "Beatrice R&D",
    type: "cruiser",
    cost: 44000000,
    spinalMount: 2,
    spinal: [],
    broadsideMount: 10,
    broadside: [],
    pointDefenceMount: 8,
    pointDefence: [],
    hangarSpace: 9,
    hangar: [],
    navigation: 8,
    hullArmor: 13,
    shieldStrength: 7,
    length: "480m",
    maxCrew: 320,
    extraRooms: 16,
    rooms: [],
    energyUse: 3,
    description:
      "Prospect hulls are seldom a common sight, but that's their purpose. These vessels tend to keep a low profile and are avid at avoiding unnecessary conflict.",
  },
  {
    image: "Images/Ships/Jeanne d'Arc by admiralkew.webp",
    name: "Joan of Arc",
    manufacturer: "Federation Navy",
    type: "cruiser",
    cost: 48000000,
    spinalMount: 2,
    spinal: [],
    broadsideMount: 18,
    broadside: [],
    pointDefenceMount: 4,
    pointDefence: [],
    hangarSpace: 14,
    hangar: [],
    navigation: 6,
    hullArmor: 14,
    shieldStrength: 6,
    length: "491m",
    maxCrew: 310,
    extraRooms: 13,
    rooms: [],
    energyUse: 3,
    description:
      "In any Navy armada doctrine, you're bound to find a lot of the front-line brawler Manticore hulls. Many Joan pilots often zealously charge into battle.",
  },
  {
    image: "Images/Ships/Heavy cruiser by Pyrrhus Draws.jpeg",
    name: "Chimera",
    manufacturer: "Federation Navy",
    type: "cruiser",
    cost: 48000000,
    spinalMount: 2,
    spinal: [],
    broadsideMount: 12,
    broadside: [],
    pointDefenceMount: 8,
    pointDefence: [],
    hangarSpace: 8,
    hangar: [],
    navigation: 4,
    hullArmor: 16,
    shieldStrength: 6,
    length: "488m",
    maxCrew: 290,
    extraRooms: 14,
    rooms: [],
    energyUse: 3,
    description:
      "Supporting Joans from the back lines are the Chimeras, their brothers-in-arms. They're mostly drone ships, but they can hold their own in a gun fight.",
  },
  {
    image: "Images/Ships/Laevatain class Battlecruiser by Jie Ni.webp",
    name: "Glaive",
    manufacturer: "Red Dagger Pirates",
    type: "cruiser",
    cost: 52000000,
    spinalMount: 3,
    spinal: [],
    broadsideMount: 18,
    broadside: [],
    pointDefenceMount: 4,
    pointDefence: [],
    hangarSpace: 14,
    hangar: [],
    navigation: 8,
    hullArmor: 12,
    shieldStrength: 6,
    length: "502m",
    maxCrew: 280,
    extraRooms: 12,
    rooms: [],
    energyUse: 3,
    description:
      "Every pirate group in the Red Daggers has a leader, and you can bet that most of them fly a Glaive. This cruiser hull is the perfect flagship for such swift-moving pirates.",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "PI VC9",
    manufacturer: "Pulsar Inc.",
    type: "cruiser",
    cost: 54000000,
    spinalMount: 2,
    spinal: [],
    broadsideMount: 14,
    broadside: [],
    pointDefenceMount: 9,
    pointDefence: [],
    hangarSpace: 17,
    hangar: [],
    navigation: 6,
    hullArmor: 17,
    shieldStrength: 6,
    length: "523m",
    maxCrew: 340,
    extraRooms: 17,
    rooms: [],
    energyUse: 3,
    description:
      "If you're looking for a hull to enter and never have the need to leave, this is it. This is the epitome of deep-space exploration, packed with the brunt of Pulsar's tech.",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "X21 Riptide",
    manufacturer: "Triglav Innovations",
    type: "cruiser",
    cost: 58000000,
    spinalMount: 3,
    spinal: [],
    broadsideMount: 18,
    broadside: [],
    pointDefenceMount: 6,
    pointDefence: [],
    hangarSpace: 10,
    hangar: [],
    navigation: 15,
    hullArmor: 15,
    shieldStrength: 7,
    length: "514m",
    maxCrew: 310,
    extraRooms: 14,
    rooms: [],
    energyUse: 3,
    description:
      "A size down-grade of the X7 Phantom, the X21 Riptide has received nothing but praise in its performance at the battle of the Solaria system in the Luos war.",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Orestes",
    manufacturer: "Luos Syndicate",
    type: "cruiser",
    cost: 60000000,
    spinalMount: 3,
    spinal: [],
    broadsideMount: 20,
    broadside: [],
    pointDefenceMount: 6,
    pointDefence: [],
    hangarSpace: 13,
    hangar: [],
    navigation: 5,
    hullArmor: 18,
    shieldStrength: 6,
    length: "480m",
    maxCrew: 320,
    extraRooms: 15,
    rooms: [],
    energyUse: 3,
    description:
      "The Orestes was produced so much that despite the Syndicate losing almost all of its armada, many intact Orestes hulls found their ways onto the market.",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Myrmidon",
    manufacturer: "Blackhawk Elite",
    type: "cruiser",
    cost: 54000000,
    spinalMount: 4,
    spinal: [],
    broadsideMount: 20,
    broadside: [],
    pointDefenceMount: 8,
    pointDefence: [],
    hangarSpace: 10,
    hangar: [],
    navigation: 3,
    hullArmor: 16,
    shieldStrength: 6,
    length: "535m",
    maxCrew: 340,
    extraRooms: 15,
    rooms: [],
    energyUse: 3,
    description:
      'This is the standard-issue cruiser hull of the Blackhawks, awarded to any mercenary group in the conglomerate that achieves a Blackhawk-certified "Tier 2" ranking.',
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Er'el",
    manufacturer: "Talons",
    type: "cruiser",
    cost: 66000000,
    spinalMount: 5,
    spinal: [],
    broadsideMount: 22,
    broadside: [],
    pointDefenceMount: 6,
    pointDefence: [],
    hangarSpace: 13,
    hangar: [],
    navigation: 6,
    hullArmor: 14,
    shieldStrength: 7,
    length: "527m",
    maxCrew: 300,
    extraRooms: 14,
    rooms: [],
    energyUse: 3,
    description:
      "A common Talon tactic is to use this ship as bait; show one defenseless and let the enemy swarm it. Then, warp in the other Er'els to clean up the job.",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Waltz",
    manufacturer: "Heralds",
    type: "cruiser",
    cost: 92000000,
    spinalMount: 5,
    spinal: [],
    broadsideMount: 24,
    broadside: [],
    pointDefenceMount: 4,
    pointDefence: [],
    hangarSpace: 10,
    hangar: [],
    navigation: 7,
    hullArmor: 15,
    shieldStrength: 8,
    length: "509m",
    maxCrew: 290,
    extraRooms: 14,
    rooms: [],
    energyUse: 3,
    description:
      'The discovery of this ship marked the formation of the "Angel" tech family. It was most definitely time, almost completely different.',
  },
  // cruisers from stardust-powercreep-dlc-by-bob-grue-2.txt
  {
    image: "Images/Ships/bob009.webp",
    name: "Medusa",
    manufacturer: "Heralds",
    type: "cruiser",
    cost: 74000000,
    spinalMount: 6,
    spinal: [],
    broadsideMount: 14,
    broadside: [],
    pointDefenceMount: 5,
    pointDefence: [],
    hangarSpace: 0,
    hangar: [],
    navigation: 17,
    hullArmor: 12,
    shieldStrength: 5,
    length: "205m",
    maxCrew: 3,
    extraRooms: 5,
    rooms: [],
    energyUse: 2,
    description:
      "Fast and deadly, the Medusa is the quintessential raider. However, the large number of point defense mounts suggest the Heralds designed it as an escort vessel.",
  },
  {
    image: "Images/Ships/Rifter-Screenshot_3840x2160.jpg",
    name: "Rapier",
    manufacturer: "Red Dagger",
    type: "cruiser",
    cost: 40000000,
    spinalMount: 4,
    spinal: [],
    broadsideMount: 14,
    broadside: [],
    pointDefenceMount: 5,
    pointDefence: [],
    hangarSpace: 0,
    hangar: [],
    navigation: 12,
    hullArmor: 10,
    shieldStrength: 2,
    length: "349m",
    maxCrew: 3,
    extraRooms: 11,
    rooms: [],
    energyUse: 2,
    description:
      "Introduced in the Battle of BR R84, the Rapier quickly became the pirates' favorite heavy skirmish vessel.",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "PI Vcll",
    manufacturer: "Pulsar Inc.",
    type: "cruiser",
    cost: 40000000,
    spinalMount: 5,
    spinal: [],
    broadsideMount: 16,
    broadside: [],
    pointDefenceMount: 7,
    pointDefence: [],
    hangarSpace: 10,
    hangar: [],
    navigation: 10,
    hullArmor: 12,
    shieldStrength: 5,
    length: "364m",
    maxCrew: 130,
    extraRooms: 15,
    rooms: [],
    energyUse: 2,
    description:
      "Intent on overtaking Triglav's technological lead, Pulsar Inc. engaged with a new partner to develop the PI Vcll cruiser. These compact, highly efficient ships retain Pulsar's signature space-saving refinements while incorporating a more martial configuration.",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Fury",
    manufacturer: "Talons",
    type: "cruiser",
    cost: 64000000,
    spinalMount: 6,
    spinal: [],
    broadsideMount: 18,
    broadside: [],
    pointDefenceMount: 0,
    pointDefence: [],
    hangarSpace: 8,
    hangar: [],
    navigation: 11,
    hullArmor: 12,
    shieldStrength: 5,
    length: "360m",
    maxCrew: 120,
    extraRooms: 13,
    rooms: [],
    energyUse: 2,
    description:
      "Furies have become a menace in the Clover systems. Dedicated gunships capable of catching and killing Viking class destroyers, they operate in packs to take down larger vessels.",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Harrower",
    manufacturer: "Heralds",
    type: "cruiser",
    cost: 50000000,
    spinalMount: 6,
    spinal: [],
    broadsideMount: 20,
    broadside: [],
    pointDefenceMount: 6,
    pointDefence: [],
    hangarSpace: 12,
    hangar: [],
    navigation: 13,
    hullArmor: 14,
    shieldStrength: 1,
    length: "347m",
    maxCrew: 102,
    extraRooms: 13,
    rooms: [],
    energyUse: 2,
    description:
      "Three Harrower cruisers were found with the Monarch battleships. They possess reactionless drives that give them incredible agility and allow them to safely land on planets.",
  },

  // Battleships
  {
    image: "Images/Ships/bob009.webp",
    name: "Excursion",
    manufacturer: "Beatrice R&D",
    type: "battleship",
    cost: 60000000,
    spinalMount: 1,
    spinal: [],
    broadsideMount: 22,
    broadside: [],
    pointDefenceMount: 12,
    pointDefence: [],
    hangarSpace: 24,
    hangar: [],
    navigation: 1,
    hullArmor: 20,
    shieldStrength: 7,
    length: "1.1km",
    maxCrew: 2400,
    extraRooms: 18,
    rooms: [],
    energyUse: 4,
    description:
      "When humanity began its efforts at colonizing other star systems, this was the ship of choice that was sent out into the void. Most were never heard from again.",
  },
  {
    image: "Images/Ships/hans-palm-long ouyang.jpg",
    name: "G8-BS",
    manufacturer: "Hammerhead Ind.",
    type: "battleship",
    cost: 62000000,
    spinalMount: 1,
    spinal: [],
    broadsideMount: 26,
    broadside: [],
    pointDefenceMount: 8,
    pointDefence: [],
    hangarSpace: 15,
    hangar: [],
    navigation: 3,
    hullArmor: 18,
    shieldStrength: 7,
    length: "1.1km",
    maxCrew: 2200,
    extraRooms: 18,
    rooms: [],
    energyUse: 4,
    description:
      "Hammerhead only ever produced one battleship hull, and this is the result. Actually, this is the upgrade; it was received so well that they kept to original similar schematics.",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Ogre",
    manufacturer: "Federation Navy",
    type: "battleship",
    cost: 70000000,
    spinalMount: 2,
    spinal: [],
    broadsideMount: 30,
    broadside: [],
    pointDefenceMount: 6,
    pointDefence: [],
    hangarSpace: 18,
    hangar: [],
    navigation: 2,
    hullArmor: 20,
    shieldStrength: 7,
    length: "1.2km",
    maxCrew: 2500,
    extraRooms: 19,
    rooms: [],
    energyUse: 4,
    description:
      "Ogres have the reputation of being pseudo-space stations, able to peacefully rest in a planet's orbit. They often act as great stationary platforms for refueling and repair.",
  },
  {
    image: "Images/Ships/Abaddon Battlecruisers EveOnline.jpg",
    name: "Halberd",
    manufacturer: "Red Dagger Pirates",
    type: "battleship",
    cost: 72000000,
    spinalMount: 2,
    spinal: [],
    broadsideMount: 28,
    broadside: [],
    pointDefenceMount: 6,
    pointDefence: [],
    hangarSpace: 24,
    hangar: [],
    navigation: 3,
    hullArmor: 17,
    shieldStrength: 7,
    length: "878m",
    maxCrew: 1900,
    extraRooms: 15,
    rooms: [],
    energyUse: 4,
    description:
      'The Halberd is the largest ship hull that the Daggers care to fly, and they put it to crafty use. It\'s notorious at being used as a "battering ram" to break through blockades.',
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Skinwalker",
    manufacturer: "Federation Navy",
    type: "battleship",
    cost: 74000000,
    spinalMount: 1,
    spinal: [],
    broadsideMount: 26,
    broadside: [],
    pointDefenceMount: 12,
    pointDefence: [],
    hangarSpace: 21,
    hangar: [],
    navigation: 2,
    hullArmor: 18,
    shieldStrength: 8,
    length: "1.1km",
    maxCrew: 2100,
    extraRooms: 16,
    rooms: [],
    energyUse: 4,
    description:
      "Named after a popular urban legend among Navy personnel, the Skinwalker has an uncanny appearance. Fitting, for a fleet of Skinwalkers is surely hair raising.",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "PLV64",
    manufacturer: "Pulsar Inc.",
    type: "battleship",
    cost: 75000000,
    spinalMount: 1,
    spinal: [],
    broadsideMount: 24,
    broadside: [],
    pointDefenceMount: 10,
    pointDefence: [],
    hangarSpace: 18,
    hangar: [],
    navigation: 3,
    hullArmor: 19,
    shieldStrength: 8,
    length: "1km",
    maxCrew: 2200,
    extraRooms: 17,
    rooms: [],
    energyUse: 4,
    description:
      "When posed with a challenge to create the greatest planet-terra- forming ship in the galaxy, Pulsar came out with this hull. Now, almost all organizations own one.",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Troilus",
    manufacturer: "Luos Syndicate",
    type: "battleship",
    cost: 85000000,
    spinalMount: 1,
    spinal: [],
    broadsideMount: 30,
    broadside: [],
    pointDefenceMount: 9,
    pointDefence: [],
    hangarSpace: 18,
    hangar: [],
    navigation: 2,
    hullArmor: 18,
    shieldStrength: 7,
    length: "1km",
    maxCrew: 2100,
    extraRooms: 17,
    rooms: [],
    energyUse: 4,
    description:
      "This was more of a trophy ship employed by Luos Core Ring corporations. While still a capable vessel, these painted the fearsome and oppressive picture of Luos.",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "X7 Phantom",
    manufacturer: "Triglav Innovations",
    type: "battleship",
    cost: 96000000,
    spinalMount: 2,
    spinal: [],
    broadsideMount: 30,
    broadside: [],
    pointDefenceMount: 8,
    pointDefence: [],
    hangarSpace: 21,
    hangar: [],
    navigation: 1,
    hullArmor: 22,
    shieldStrength: 7,
    length: "1.5km",
    maxCrew: 2500,
    extraRooms: 18,
    rooms: [],
    energyUse: 4,
    description:
      "Almost as old as Triglav Itself, the X7 Phantom is a staple in the Federation Navy. These are usually piloted by the higher ranks, or used by spec ops.",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Razertail",
    manufacturer: "Luos Syndicate",
    type: "battleship",
    cost: 100000000,
    spinalMount: 2,
    spinal: [],
    broadsideMount: 32,
    broadside: [],
    pointDefenceMount: 11,
    pointDefence: [],
    hangarSpace: 18,
    hangar: [],
    navigation: 2,
    hullArmor: 20,
    shieldStrength: 8,
    length: "1.4km",
    maxCrew: 2200,
    extraRooms: 17,
    rooms: [],
    energyUse: 4,
    description:
      "A favourite for the Syndicate's more elite Outer Ring corporations, like the militaristic Cerberus Legion. They symbolize the side of Luos that kept to its morals.",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Paladin",
    manufacturer: "Blackhawk Elite",
    type: "battleship",
    cost: 105000000,
    spinalMount: 2,
    spinal: [],
    broadsideMount: 30,
    broadside: [],
    pointDefenceMount: 10,
    pointDefence: [],
    hangarSpace: 23,
    hangar: [],
    navigation: 3,
    hullArmor: 19,
    shieldStrength: 8,
    length: "1.6km",
    maxCrew: 2300,
    extraRooms: 19,
    rooms: [],
    energyUse: 4,
    description:
      "With the Talon conflict, rising bandit threats, and increasing threat from the Fire Legion, It's not uncommon to find Paladins roaming the outer rims these days.",
  },
  {
    image: "Images/Ships/long-ouyang-flagship3a-5000.jpg",
    name: "Ophanim",
    manufacturer: "Talons",
    type: "battleship",
    cost: 112000000,
    spinalMount: 2,
    spinal: [],
    broadsideMount: 34,
    broadside: [],
    pointDefenceMount: 8,
    pointDefence: [],
    hangarSpace: 17,
    hangar: [],
    navigation: 3,
    hullArmor: 23,
    shieldStrength: 9,
    length: "1.4km",
    maxCrew: 2300,
    extraRooms: 19,
    rooms: [],
    energyUse: 4,
    description:
      "The Talons rarely deploy these, as they prefer small-scale skirmishes to direct conflict. That said, the Ophanim has seen increasing use in the bitter Blackhawk conflict.",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Pyramid",
    manufacturer: "Heralds",
    type: "battleship",
    cost: 150000000,
    spinalMount: 3,
    spinal: [],
    broadsideMount: 32,
    broadside: [],
    pointDefenceMount: 10,
    pointDefence: [],
    hangarSpace: 26,
    hangar: [],
    navigation: 3,
    hullArmor: 23,
    shieldStrength: 9,
    length: "1.6km",
    maxCrew: 2500,
    extraRooms: 19,
    rooms: [],
    energyUse: 4,
    description:
      'When they were first discovered by a small group of Dustkeepers, the "Pyramid" was mistaken for a Herald space station. That said, it probably wasn\'t too far fetched.',
  },
  // New Battleships from stardust-powercreep-dlc-by-bob-grue-2.txt
  {
    image: "Images/Ships/bob009.webp",
    name: "Manta",
    manufacturer: "Heralds",
    type: "battleship",
    cost: 120000000,
    spinalMount: 4,
    spinal: [],
    broadsideMount: 24,
    broadside: [],
    pointDefenceMount: 8,
    pointDefence: [],
    hangarSpace: 18,
    hangar: [],
    navigation: 5,
    hullArmor: 15,
    shieldStrength: 8,
    length: "755m",
    maxCrew: 850,
    extraRooms: 18,
    rooms: [],
    energyUse: 0,
    description:
      "The technology and design of the Manta are distinct from those found in other Herald ships. Triglav won't be happy you have one of the original Herald battlecruiser.",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "X45 Scythe",
    manufacturer: "Triglav Innovations",
    type: "battleship",
    cost: 50000000,
    spinalMount: 4,
    spinal: [],
    broadsideMount: 28,
    broadside: [],
    pointDefenceMount: 8,
    pointDefence: [],
    hangarSpace: 20,
    hangar: [],
    navigation: 8,
    hullArmor: 19,
    shieldStrength: 9,
    length: "902m",
    maxCrew: 817,
    extraRooms: 18,
    rooms: [],
    energyUse: 0,
    description:
      "Triglav found something out there, and they reverse-engineered it into the X45 Scythe. Although only time will tell if the battlecruiser design is viable, the Scythe's ability to quickly bring heavy firepower to the battlefield has proven invaluable on several occasions.",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Monarch",
    manufacturer: "Heralds",
    type: "battleship",
    cost: 224000000,
    spinalMount: 4,
    spinal: [],
    broadsideMount: 30,
    broadside: [],
    pointDefenceMount: 10,
    pointDefence: [],
    hangarSpace: 28,
    hangar: [],
    navigation: 6,
    hullArmor: 21,
    shieldStrength: 9,
    length: "1950m",
    maxCrew: 2100,
    extraRooms: 21,
    rooms: [],
    energyUse: 6,
    description:
      "Advanced Jump Drive allows the Monarch to travel freely between systems without jump gates. Kings of the Ghul tech family, two Monarch fast battleships were recently found. These ships feel alive, and maneuver with a grace unheard of in such a large vessel.",
  },

  // Carriers
  {
    image: "Images/Ships/bob009.webp",
    name: "ID-9F",
    manufacturer: "Hammerhead Ind.",
    type: "carrier",
    cost: 78000000,
    spinalMount: 0,
    spinal: [],
    broadsideMount: 0,
    broadside: [],
    pointDefenceMount: 10,
    pointDefence: [],
    hangarSpace: 54,
    hangar: [],
    navigation: 2,
    hullArmor: 20,
    shieldStrength: 8,
    length: "1.6km",
    maxCrew: 2800,
    extraRooms: 18,
    rooms: [],
    energyUse: 5,
    description:
      "After a request from Io Security to produce a carrier-class hull, Hammerhead created this. It's been used in critical operations to repel bandits from the Sturg system.",
  },
  {
    image: "Images/Ships/Cube by Beeple.webp",
    name: "Cube",
    manufacturer: "Beatrice R&D",
    type: "carrier",
    cost: 180000000,
    spinalMount: 0,
    spinal: [],
    broadsideMount: 0,
    broadside: [],
    pointDefenceMount: 15,
    pointDefence: [],
    hangarSpace: 52,
    hangar: [],
    navigation: 19,
    hullArmor: 8,
    shieldStrength: 3,
    length: "1km",
    maxCrew: 3000,
    extraRooms: 22,
    rooms: [],
    energyUse: 5,
    description:
      "A reverse-engineering attempt of Herald pocket dimension technology. The inside is larger than the outside by a factor of 2.",
  },
  {
    image: "Images/Ships/pierre-e-fieschi-maersk-highliner.jpg",
    name: "Typhon",
    manufacturer: "Federation Navy",
    type: "carrier",
    cost: 90000000,
    spinalMount: 0,
    spinal: [],
    broadsideMount: 0,
    broadside: [],
    pointDefenceMount: 13,
    pointDefence: [],
    hangarSpace: 54,
    hangar: [],
    navigation: 1,
    hullArmor: 22,
    shieldStrength: 9,
    length: "1.6km",
    maxCrew: 2800,
    extraRooms: 20,
    rooms: [],
    energyUse: 5,
    description: '"And Earth first bore starry eyes in his marvelous heads"',
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Ouranos",
    manufacturer: "Luos Syndicate",
    type: "carrier",
    cost: 100000000,
    spinalMount: 0,
    spinal: [],
    broadsideMount: 0,
    broadside: [],
    pointDefenceMount: 16,
    pointDefence: [],
    hangarSpace: 60,
    hangar: [],
    navigation: 1,
    hullArmor: 19,
    shieldStrength: 8,
    length: "2.2km",
    maxCrew: 3200,
    extraRooms: 19,
    rooms: [],
    energyUse: 5,
    description:
      '"... And from under the brows of his Heaven, equal to herself, to cover flashed fire, and fire burned from her on every side, and to be an ever-sure abiding-place for the blessed Gods."',
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Asmodai",
    manufacturer: "Talons",
    type: "carrier",
    cost: 100000000,
    spinalMount: 1,
    spinal: [],
    broadsideMount: 6,
    broadside: [],
    pointDefenceMount: 12,
    pointDefence: [],
    hangarSpace: 50,
    hangar: [],
    navigation: 1,
    hullArmor: 22,
    shieldStrength: 8,
    length: "2.5km",
    maxCrew: 3800,
    extraRooms: 20,
    rooms: [],
    energyUse: 5,
    description:
      '"So do not ask me so many things, Solomon, for eventually your kingdom will be divided. This glory of yours is temporary... Then shall be worshipped as Gods."',
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Gáe Bulg",
    manufacturer: "Blackhawk Elite",
    type: "carrier",
    cost: 120000000,
    spinalMount: 0,
    spinal: [],
    broadsideMount: 4,
    broadside: [],
    pointDefenceMount: 12,
    pointDefence: [],
    hangarSpace: 66,
    hangar: [],
    navigation: 1,
    hullArmor: 22,
    shieldStrength: 8,
    length: "1.7km",
    maxCrew: 2700,
    extraRooms: 17,
    rooms: [],
    energyUse: 5,
    description:
      '"Láeg came forward and cut Fer Diad open and took out the Gáe Bulg. Cú Chulainn saw his weapon bloody and crimson from Fer Diad\'s body..."',
  },

  // Dreadnoughts
  {
    image: "Images/Ships/bob009.webp",
    name: "Gungnir",
    manufacturer: "Blackhawk Elite",
    type: "dreadnought",
    cost: 300000000,
    spinalMount: 5,
    spinal: [],
    broadsideMount: 36,
    broadside: [],
    pointDefenceMount: 16,
    pointDefence: [],
    hangarSpace: 38,
    hangar: [],
    navigation: 0,
    hullArmor: 40,
    shieldStrength: 10,
    length: "7km",
    maxCrew: 5600,
    extraRooms: 30,
    rooms: [],
    energyUse: 6,
    description:
      "During the Battle of the Carceri system in the Pirate War decades ago, the Gungnir made its name when three defended a lone Blackhawk forward base from swarms of ships before succumbing to overwhelming numbers.",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Dhyana",
    manufacturer: "Triglav Innovations",
    type: "dreadnought",
    cost: 340000000,
    spinalMount: 6,
    spinal: [],
    broadsideMount: 42,
    broadside: [],
    pointDefenceMount: 14,
    pointDefence: [],
    hangarSpace: 28,
    hangar: [],
    navigation: 0,
    hullArmor: 34,
    shieldStrength: 10,
    length: "6.5km",
    maxCrew: 6000,
    extraRooms: 32,
    rooms: [],
    energyUse: 6,
    description:
      'It is said that the entire reason that Triglav Innovations was founded was for the Dhyana (often called "Diana"), and that every piece of technology that Triglav had discovered and invented was put into it.',
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Azrael",
    manufacturer: "Luos Syndicate & Talons",
    type: "dreadnought",
    cost: 370000000,
    spinalMount: 7,
    spinal: [],
    broadsideMount: 48,
    broadside: [],
    pointDefenceMount: 12,
    pointDefence: [],
    hangarSpace: 26,
    hangar: [],
    navigation: 0,
    hullArmor: 33,
    shieldStrength: 9,
    length: "7km",
    maxCrew: 5400,
    extraRooms: 28,
    rooms: [],
    energyUse: 6,
    description:
      "The Azrael project was a joint endeavor between the Luos Syndicate's top research firms and the Talons to produce the greatest and most destructive ship in the galaxy.",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Mothership",
    manufacturer: "Heralds",
    type: "dreadnought",
    cost: 470000000,
    spinalMount: 8,
    spinal: [],
    broadsideMount: 44,
    broadside: [],
    pointDefenceMount: 15,
    pointDefence: [],
    hangarSpace: 42,
    hangar: [],
    navigation: 0,
    hullArmor: 38,
    shieldStrength: 10,
    length: "8.5km",
    maxCrew: 6000,
    extraRooms: 36,
    rooms: [],
    energyUse: 6,
    description:
      "This is the rarest ship in the galaxy and the greatest piece of technology uncovered from the Heralds. The only ones known to exist belong to the wealthiest, most obscure, and most powerful organizations.",
  },
  // Dreadnoughts from stardust-powercreep-dlc-by-bob-grue-2.txt
  {
    image: "Images/Ships/bob009.webp",
    name: "Charon",
    manufacturer: "Beatrice R&D",
    type: "dreadnought",
    cost: 96000000,
    spinalMount: 2,
    spinal: [],
    broadsideMount: 0,
    broadside: [],
    pointDefenceMount: 15,
    pointDefence: [],
    hangarSpace: 48,
    hangar: [],
    navigation: 3,
    hullArmor: 22,
    shieldStrength: 9,
    length: "19km",
    maxCrew: 2800,
    extraRooms: 18,
    rooms: [],
    energyUse: 8,
    description:
      "The Charon is Beatrice R&D's flagship and the product of decades of work, a jump ship capable of conveying an entire fleet of vessels to an unexplored system in a single leap.",
  },
  {
    image: "Images/Ships/Archangel by CDFreedom, BANDAI.webp",
    name: "X65 “Odysseus”",
    manufacturer: "Triglav Innovations",
    type: "dreadnought",
    cost: 220000000,
    spinalMount: 3,
    spinal: [],
    broadsideMount: 28,
    broadside: [],
    pointDefenceMount: 8,
    pointDefence: [],
    hangarSpace: 2,
    hangar: [],
    navigation: 2,
    hullArmor: 22,
    shieldStrength: 9,
    length: "29km",
    maxCrew: 3700,
    extraRooms: 2,
    rooms: [],
    energyUse: 6,
    description:
      "Within the Odysseus, Triglav fused the titanic might of the dreadnought with the more versatile nature of the battleship, creating a new breed of super-capital ship.",
  },
  {
    name: "PI Va2",
    image: "Images/Ships/bob012.webp",
    manufacturer: "Pulsar Inc.",
    type: "dreadnought",
    cost: 280000000,
    spinalMount: 4,
    spinal: [],
    broadsideMount: 32,
    broadside: [],
    pointDefenceMount: 20,
    pointDefence: [],
    hangarSpace: 50,
    hangar: [],
    navigation: 0,
    hullArmor: 30,
    shieldStrength: 10,
    length: "10km",
    maxCrew: 6000,
    extraRooms: 40,
    rooms: [],
    energyUse: 7,
    description:
      "Officially designated as Pulsar's corporate field headquarters, the Va2 is the ultimate deep space exploration vessel. It serves as a base for traversing and researching multiple systems in comfort and relative safety. Advanced Jump Drive lets the Va2 travel freely between systems without jump gates.",
  },
  {
    name: "Archangel",
    image: "Images/Ships/bob011.webp",
    manufacturer: "Talons",
    type: "dreadnought",
    cost: 380000000,
    spinalMount: 6,
    spinal: [],
    broadsideMount: 42,
    broadside: [],
    pointDefenceMount: 14,
    pointDefence: [],
    hangarSpace: 38,
    hangar: [],
    navigation: 0,
    hullArmor: 32,
    shieldStrength: 10,
    length: "7km",
    maxCrew: 6000,
    extraRooms: 34,
    rooms: [],
    energyUse: 7,
    description:
      "Although formidable in combat, the Archangel’s primary task is to watch over uncharted systems. It acts as a mobile fortress securing new worlds during the early terraforming and colonization stages. Only once a system is well established is it added to the galactic network.",
  },
  {
    name: "Hades",
    image: "Images/Ships/bob010.webp",
    manufacturer: "Heralds",
    type: "dreadnought",
    cost: 500000000, // Special cost
    spinalMount: 0,
    spinal: [],
    broadsideMount: 48,
    broadside: [],
    pointDefenceMount: 24,
    pointDefence: [],
    hangarSpace: 81,
    hangar: [],
    navigation: 0,
    hullArmor: 36,
    shieldStrength: "Energy Damping Field: 80% Damage", // Special shield strength
    length: "124m", // This length seems very small for a dreadnought, but it's from the source.
    maxCrew: "4,000-20,000", // Special crew range
    extraRooms: 60,
    rooms: [],
    energyUse: 10,
    description:
      "Hades is a mobile space station the size of a small city, recovered from a decaying orbit around a black hole. Formerly a scientific research outpost, Hades possesses unique technologies that will have a strong impact on space travel once they are reverse engineered. Wormhole Generator creates a temporary gateway to any designated star system. Damping field negates 80% of damage received. Anti-matter cannon strike overloads damping field for five minutes, but Hades survives otherwise intact.",
  },
];

const shipAI = [
  {
    cost: 1000000,
    image: "Images/Ships/bob009.webp",
    name: "Winston v9.0.3",
    manufacturer: "Beatrice R&D",
    role: "Multi-Role",
    description:
      "A minimalistic and subtle ship AI that has all of the basic functions any ship-farer could want. Most ships will be well off with this AI.",
    image: "/Images/Other/Beatrice R&D.webp",
  },
  {
    cost: 1000000,
    image: "Images/Ships/bob009.webp",
    name: "Beatrice v6.8.2",
    manufacturer: "Beatrice R&D",
    role: "Exploration",
    description:
      "Named after the founder of the corporation herself while also utilizing her voice, the Beatrice AI is reknown for being efficient at managing exploration voyages.",
    image: "/Images/Other/Beatrice R&D.webp",
  },
  {
    cost: 1000000,
    image: "Images/Ships/bob009.webp",
    name: "Targray v3.3",
    manufacturer: "Hammerhead Ind.",
    role: "Industry",
    description:
      "Targray keeps production and mining operations at tip-top shape. He's full of many frameworks built to keep things running.",
    image: "/Images/Other/Beatrice R&D.webp",
  },
  {
    cost: 1000000,
    image: "Images/Ships/bob009.webp",
    name: "Cassandra v16.0.2",
    manufacturer: "Beatrice R&D",
    role: "Entertainment",
    description:
      "If you're planning on flying a vessel for civillian use or comfort, Cassandra is the AI you need. She's programmed to keep everyone happy on your ship.",
    image: "/Images/Other/Beatrice R&D.webp",
  },
  {
    cost: 1000000,
    image: "Images/Ships/bob009.webp",
    name: "Luke v9.5.1",
    manufacturer: "Pulsar Inc.",
    role: "Deep Space Exploration",
    description:
      "Luke specializes in max efficiency and recycling of resources for those extremely long journeys.",
    image: "/Images/Other/Beatrice R&D.webp",
  },
  {
    cost: 1000000,
    image: "Images/Ships/bob009.webp",
    name: "Rom v22.4",
    manufacturer: "Red Dagger Pirates",
    role: "Skirmish & Interception",
    description:
      "Rom was made by Red Dagger programmers specifically to maximize output into navigation, giving ships the best advantage when it comes to scaling the battlefield. He's very adaptable for any situation you may come across.",
    image: "/Images/Other/Beatrice R&D.webp",
  },
  {
    cost: 1000000,
    image: "Images/Ships/bob009.webp",
    name: "Jacob v13.0.4",
    manufacturer: "Federation Navy",
    role: "Fire Support",
    description:
      "Fleet synergy is the epitome of the Federation Navy, and that's partially thanks to Jacob. He synergizes well with other combat AIs and is a great tactician.",
    image: "/Images/Other/Beatrice R&D.webp",
  },
  {
    cost: 1000000,
    image: "Images/Ships/bob009.webp",
    name: "Remington v3.0.1",
    manufacturer: "Triglav Innovations",
    role: "Covert Ops",
    description:
      "Nothing's more discrete than the latest version of Remington. For any special ops ship-farers out there, there's no AI better than him.",
    image: "/Images/Other/Beatrice R&D.webp",
  },
  {
    cost: 1000000,
    image: "Images/Ships/bob009.webp",
    name: "Lai'na v15.3.2",
    manufacturer: "Luos Syndicate",
    role: "Assault",
    description:
      "There are a lot of assault-based AI out there, but none are better than Lai'na. Programmed by a brilliant Outer Ring programmer, she holds top record in combat performance.",
    image: "/Images/Other/Beatrice R&D.webp",
  },
  {
    cost: 1000000,
    image: "Images/Ships/bob009.webp",
    name: "Cedrick v9.2.10",
    manufacturer: "Blackhawk Elite",
    role: "Siege & Defence",
    description:
      "When it comes to prolonged battles, Cedrick comes out to be the most stalwart. He's able to manage ship defences perfectly with minimal resources.",
    image: "/Images/Other/Beatrice R&D.webp",
  },
  {
    cost: 1000000,
    image: "Images/Ships/bob009.webp",
    name: "Blueberry v7.3.2",
    manufacturer: "Talons",
    role: "Guerilla",
    description:
      "She's a little sassy and sinister, but that's how the Talons programmed her. She's easily one of the most fearsome AIs, full of ingenious tactics to wither down foes.",
    image: "/Images/Other/Beatrice R&D.webp",
  },
  {
    cost: 1000000,
    image: "Images/Ships/bob009.webp",
    name: "Sophocles v1.0.3",
    manufacturer: "Triglav Innovations",
    role: "Mana Interfacing",
    description:
      "Sophocles is Triglav's best attempt at utilizing mana power. His AI is incredibly complex compared to others, and has the potential to make ships incredible.",
    image: "/Images/Other/Beatrice R&D.webp",
  },
];

const energy = [
  {
    image: "Images/Ships/bob009.webp",
    name: "Solar Panels",
    type: "generation",
    cost: 2000000,
    energyOutput: 1,
    description:
      "Solar energy is plentiful, so long as you're near a star. Works great as a hybrid energy system. +Does not count towards your energy system maximum count *Can only be bought once",
    image: "Images/Subsystem/liam-young-solar-night-closed-003.webp",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Nuclear Fission",
    type: "generation",
    cost: 16000000,
    energyOutput: 5,
    description:
      "Large and bulky, fission reactors are best kept in larger and better defended vessels. Great power output and great efficiency. *Cannot be equipped on fighters *Requires a nuclear engineer",
    image: "Images/Subsystem/fission-indotort-midjourney.webp",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Nuclear Fusion",
    type: "generation",
    cost: 26000000,
    energyOutput: 6,
    chargeDuration: "15 years",
    description:
      "Fusion has a much more potent energy output than fission, but is also less efficient. *Cannot be equipped on fighters *Requires a nuclear engineer",
    image: "Images/Subsystem/paul-dave-malla-plutonium-nuclear-reactor-delta-02-sketchup-01-mid.webp",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Mana Core",
    type: "generation",
    cost: 70000000,
    energyOutput: 6,
    chargeDuration: "Lifetimes",
    description:
      'Mana energy was reverse engineered from the "Ghost" family of Herald technology. Mana energy produced can be stored as mana stones. +Herald ships get +1 energy output and get 10m off',
    image: "Images/Subsystem/purecrystallizedmana-titaniumdragon-deviantart.webp",
  },
  {

    name: "Anti-Matter Core",
    type: "generation",
    cost: 50000000,
    energyOutput: 7,
    description:
      "A very volatile energy substance, anti-matter has brought endless potential technology and sciences. This core safely decommissions itself if it's forcefully broken into.",
    image: "Images/Subsystem/gridexploration-natural-warp-artstation.webp",
  },
  {

    name: "Zero-Point Module",
    type: "generation",
    cost: 100000000,
    energyOutput: 8,
    description:
      "Taps into the energy that exists in a vacuum due to quantum fluctuations. Loses efficiency in debris field.",
    image: "Images/Subsystem/concentric rinds by MS Escher.webp",
  },
  {

    name: "Subspace Energy Extraction",
    type: "generation",
    cost: 300000000,
    energyOutput: 10,
    description:
      "Gathers energy from alternate dimensions or subspace realms that operate under different physical laws. Effectively limitless, as the energy is drawn from outside the conventional universe. <b>Must complete all Herald contracts. Can only be fitted on Herald ships.</b>",
    image: "Images/Subsystem/hexatechbaroque-naturalwarp-artstation.webp",
  },
  {

    name: "Power Capacitors",
    type: "battery",
    cost: 12000000,
    energyOutput: 3,
    chargeDuration: "8 days",
    description:
      "Capacitors are small enough to fit in fighters, though they must be recharged often. However, they can also be coupled with other energy systems instead boost their effectiveness.",
    image: "Images/Subsystem/02abattery-king-fung-ng-artstation.webp",
  },
  {

    name: "Exotic Matter Battery",
    type: "battery",
    cost: 24000000,
    energyOutput: 4,
    chargeDuration: "8 weeks",
    description:
      "After inventing the Warp Drive, Dr.Yau invented a hyper lattice made of exotic matter, which could fit in the palm of your hand or inside the cartridge of a gun. Alas, his inventions were stolen by Luos and he died penniless.",
    image: "Images/Subsystem/exoticmatter-indotort-midjourney.webp",
  },
  {

    name: "The Energy Grail",
    type: "battery",
    cost: 0,
    energyOutput: 7,
    chargeDuration: "As long as your conscience",
    description:
      "It escaped your notice that Comet destroyed enemy ships even when your ship had run out of ammo. You remembered the machines that she was hooked up to, the strange tablet that warned her future allies, and how applicances lose power whenever shes around. You are now tempted. <b>Must take Comet's Contract.</b>",
    image: "Images/Subsystem/cometsacrifice-indotort-civitai.webp",
  },
  {

    name: "Beatrice's Bosom",
    type: "battery",
    cost: 100000000,
    energyOutput: 8,
    chargeDuration: "8 months",
    description:
      "A descendant of Yau stole a classified prototype from Luos during the Siege of Haven. She further developed its design and patented it with Beatrice R&D. The technology is blackboxed and only available to those 'who are unattached'. <b>Only available to Gazers, Dustkeepers, and Beatrice R&D</b>",
    image: "Images/Subsystem/bubble-xxliang-civitai.webp",
  },
  {

    name: "Subspace Battery",
    type: "battery",
    cost: 120000000,
    energyOutput: 10,
    chargeDuration: "Forever",
    description:
      "Store limitless energy in a pocket dimension. Even if the battery is destroyed, can access the pocket dimension if you remember the (4D,2T) coordinates. <b>Only available in Herald Dreadnoughts</b>",
    image: "Images/Subsystem/strippingtheonion-naturalwarp-artstation.webp",
  },
];

const shield = [
  {
    image: "Images/Ships/bob009.webp",
    name: "Basic Shielding",
    cost: 1000000,
    shieldStrength: "+7",
    description: "", // No description provided in the source for this item
    image: "https://placehold.co/100x100/789abc/ffffff?text=Shield",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Standard Shielding",
    cost: 5000000,
    shieldStrength: "+10",
    description: "", // No description provided in the source for this item
    image: "https://placehold.co/100x100/789abc/ffffff?text=Shield",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Advanced Shielding",
    cost: 20000000,
    shieldStrength: "+12",
    description: "+Ships with power capacitors or better 10m off",
    image: "https://placehold.co/100x100/789abc/ffffff?text=Shield",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Aegis Shielding",
    cost: 30000000,
    shieldStrength: "+14",
    description: "+Ships with nuclear fusion or better get 15m off",
    image: "https://placehold.co/100x100/789abc/ffffff?text=Shield",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Stalwart Shielding",
    cost: 40000000,
    shieldStrength: "+16",
    description: "+Ships with anti-matter core or better get 10m off",
    image: "https://placehold.co/100x100/789abc/ffffff?text=Shield",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Mana Shielding",
    cost: 40000000,
    shieldStrength: "+15",
    description:
      "+Ships with a mana core get this for 5m off and with +2 defence",
    image: "https://placehold.co/100x100/789abc/ffffff?text=Shield",
  },
];

const mods = [
  // This array contains both Command Mods and Hull Mods
  {
    image: "Images/Ships/bob009.webp",
    name: "Cool Paint Job",
    manufacturer: "Civillian",
    cost: 0, // Free!
    specialAbility: "None",
    cooldown: "Passive",
    range: "Self",
    description:
      "Your ship turns the heads of the opposite sex by about an extra 0.4 radians per second.",
    type: "command", // Added type to differentiate
    image: "/Images/Other/Beatrice R&D.webp",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "V77-SLT Control Room",
    manufacturer: "Hammerhead Ind.",
    cost: 1000000,
    specialAbility: "Willpower",
    cooldown: "5 minutes",
    range: "Self",
    description:
      "Your ship gains a small boost to engine thrust, weapon damage and shield defence for 30 seconds.",
    type: "command",
    image: "/Images/Other/Beatrice R&D.webp",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: '"Columbus" BTR37',
    manufacturer: "Beatrice R&D",
    cost: 2000000,
    specialAbility: "Elusive",
    cooldown: "Passive",
    range: "Self",
    description:
      "Other weapons take almost twice as long to lock weapons onto your ship. Your FTL drives are also stronger, and can achieve warp-speed quicker than others.",
    type: "command",
    image: "/Images/Other/Beatrice R&D.webp",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "FDN Control zrt3",
    manufacturer: "Federation Navy",
    cost: 3000000,
    specialAbility: "Bulwark",
    cooldown: "5 minutes",
    range: "Self",
    description:
      "Your ship slows to half its velocity but deploys a one-sided force field that blocks all but the strongest incoming damage from a certain direction for 20 seconds.",
    type: "command",
    image: "/Images/Other/Beatrice R&D.webp",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: '"Zip" MK III',
    manufacturer: "Red Dagger Pirates",
    cost: 3000000,
    specialAbility: "Raptor",
    cooldown: "5 minutes",
    range: "Self",
    description:
      "Your ship's engines double their efforts, earning you twice the thrust and acceleration for 20 seconds.",
    type: "command",
    image: "/Images/Other/Beatrice R&D.webp",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "PI Control V6",
    manufacturer: "Pulsar Inc.",
    cost: 3000000,
    specialAbility: "Atlas",
    cooldown: "Continuous",
    range: "Moderate",
    description:
      "Once activated, your ship links the energy sources of all nearby allied ships. All ships gain a performance boost for all modules, especially for mining and salvage modules.",
    type: "command",
    image: "/Images/Other/Beatrice R&D.webp",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: 'X38 "Tribe" TDNK',
    manufacturer: "Triglav Innovations",
    cost: 3000000,
    specialAbility: "Valkyrie",
    cooldown: "5 minutes",
    range: "Long",
    description:
      "Your ship uses experimental EMP tech to single out an enemy ship. For 3 minutes, that ship's shields are weakened, weapons slowed, and navigation cut in half.",
    type: "command",
    image: "/Images/Other/Beatrice R&D.webp",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: 'CBL2 "Banshee"',
    manufacturer: "Luos Syndicate",
    cost: 4000000,
    specialAbility: "Moonshine",
    cooldown: "10 minutes",
    range: "Moderate",
    description:
      "After picking a direction, your ship emits a powerful EMP pulse in a cone, dealing heavy damage to shields while also interfering with electrical systems.",
    type: "command",
    image: "/Images/Other/Beatrice R&D.webp",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "SH ExmT",
    manufacturer: "Luos Syndicate",
    cost: 4000000,
    specialAbility: "Prometheus",
    cooldown: "15 minutes",
    range: "Self",
    description:
      "Using stored energy reserves, your ship completely regenerates your shield strength back to its maximum.",
    type: "command",
    image: "/Images/Other/Beatrice R&D.webp",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "BH Command VR",
    manufacturer: "Blackhawk Elite",
    cost: 5000000,
    specialAbility: "Leviathan",
    cooldown: "15 minutes",
    range: "Long (radius)",
    description:
      "All allied ships get a massive bonus to shield and hull armour defence for 3 minutes.",
    type: "command",
    image: "/Images/Other/Beatrice R&D.webp",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: 'MI520 "Visage"',
    manufacturer: "Talons",
    cost: 5000000,
    specialAbility: "Kraken",
    cooldown: "15 minutes",
    range: "Long (radius)",
    description:
      "All allied ships get a massive bonus to weapon reload times, fire rates and damage for 3 minutes. Does not effect Anti-Matter Cannons.",
    type: "command",
    image: "/Images/Other/Beatrice R&D.webp",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: 'Herald "Blink"',
    manufacturer: "Heralds",
    cost: 7000000,
    specialAbility: "Umbra",
    cooldown: "8 minutes",
    range: "Long",
    description:
      "Your ship blinks out of existence and almost instantaneously re-appears a far distance ahead of where you were pointed.",
    type: "command",
    image: "/Images/Other/Beatrice R&D.webp",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Point-Defence Upgrade",
    cost: 1000000,
    maximumUpgrades: 3,
    pointDefenceMounts: 2, // Specific mount type
    description: "", // No general description provided, only stats
    type: "hull", // Added type to differentiate
    image: "/Images/Other/Beatrice R&D.webp",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Broadside Upgrade",
    cost: 2000000,
    maximumUpgrades: 3,
    broadsideTurretMounts: 2, // Specific mount type
    description: "*Can't be fit on carriers",
    type: "hull",
    image: "/Images/Other/Beatrice R&D.webp",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Spinal Weapon Mount",
    cost: 3000000,
    maximumUpgrades: 2,
    spinalWeaponMounts: 1, // Specific mount type
    description: "*Can't be fit on carriers",
    type: "hull",
    image: "/Images/Other/Beatrice R&D.webp",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Overdrive Afterburner",
    cost: 3000000,
    maximumUpgrades: 5,
    navigation: 1, // Specific stat
    description: "", // No general description provided, only stats
    type: "hull",
    image: "/Images/Other/Beatrice R&D.webp",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Nano Armour Coating",
    cost: 4000000,
    maximumUpgrades: 1,
    hullArmor: "20%", // Keep as string as it's a percentage
    description: "", // No general description provided, only stats
    type: "hull",
    image: "/Images/Other/Beatrice R&D.webp",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Vehicle Bay",
    cost: 3000000,
    maximumUpgrades: 4,
    hangarSpace: 2, // Specific stat
    description:
      "+Cost does not scale with class *Spaces are only for vehicles *Can't be fit on fighters",
    type: "hull",
    image: "/Images/Other/Beatrice R&D.webp",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Active Cloaking",
    cost: 6000000,
    maximumUpgrades: 1,
    description:
      "Activating this turns your ship invisible to sight or scans. You cannot do anything (including FTL warp) but navigate at half speed.",
    type: "hull",
    image: "/Images/Other/Beatrice R&D.webp",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Teleport Jammer",
    cost: 2000000,
    maximumUpgrades: 1,
    description:
      "Prevents boarding parties from teleporting into your vessel. +Dreadnoughts have this for free +Fighters don't need a jammer",
    type: "hull",
    image: "/Images/Other/Beatrice R&D.webp",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Shield Extender",
    cost: 4000000,
    maximumUpgrades: 1,
    shieldStrength: 2, // Specific stat
    description:
      "Sacrifice 20% of your ship's shields and give it to all allied ships within a moderate distance.",
    type: "hull",
    image: "/Images/Other/Beatrice R&D.webp",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Hull Extension",
    cost: 1000000,
    maximumUpgrades: 2,
    navigation: 0, // No specific navigation value provided
    extraRooms: 0, // No specific extra rooms value provided
    description: "+Frigates gain 2 crew slots *Can't be fit on fighters",
    type: "hull",
    image: "/Images/Other/Beatrice R&D.webp",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Hangar Bay",
    cost: 5000000,
    maximumUpgrades: 4,
    hangarSpace: 2, // Specific stat
    description:
      "+Cost does not scale with class *Spaces are only for drones/ships *Can't be fit on fighters",
    type: "hull",
    image: "/Images/Other/Beatrice R&D.webp",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Hull Reduction",
    cost: 0, // Free!
    maximumUpgrades: 2,
    navigation: 0, // No specific navigation value provided
    extraRooms: -2, // No specific extra rooms value provided
    description: "*Frigates lose 2 crew slots *Can't be fit on fighters",
    type: "hull",
    image: "/Images/Other/Beatrice R&D.webp",
  },
];

const industrial = [
  {
    image: "Images/Ships/bob009.webp",
    name: "Mining Harvester",
    cost: 2000000,
    moduleType: "Industrial",
    description:
      "This harvester uses infrared light to separate common ores from asteroids. It has its own unique built-in tractor beam to bring the ore to your ship while mining. +Can mine low-grade ore *Uses a broadside or point-defence turret mount *Requires ore processing facility",
    image: "https://placehold.co/100x100/987654/ffffff?text=Industrial",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "MK2 Frequency Lens",
    cost: 1000000,
    moduleType: "Industrial",
    description:
      "You can replace the lens of a mining harvester with this lens that uses a smaller green laser to mine more complex ores. Lenses can be changed on the fly. +Can switch with mining harvester lenses to mine mid-grade ore *Requires a mining harvester",
    image: "https://placehold.co/100x100/987654/ffffff?text=Industrial",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "MK3 Frequency Lens",
    cost: 1000000,
    moduleType: "Industrial",
    description:
      "The most precise and powerful lens, the MK3 is capable of pin-pointing the most valuable ore from asteroids. It's inefficient for mining lower grade ores, however. +Can switch with mining harvester lenses to mine high-grade ore *Requires a mining harvester",
    image: "https://placehold.co/100x100/987654/ffffff?text=Industrial",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Salvage Harvester",
    cost: 3000000,
    moduleType: "Industrial",
    description:
      "Using similar technology to the mining harvesters, this laser is specialized in taking apart machines. Perfect for salvaging debris or ship wrecks. It also comes with its own tractor beam. *Uses a broadside or point-defence turret mount *Requires a cargo space room",
    image: "https://placehold.co/100x100/987654/ffffff?text=Industrial",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Tractor Beam",
    cost: 3000000,
    moduleType: "Logistics",
    description:
      "A universal tractor beam that harnesses light to attract or push matter not limited to ore or scrap. It's useful for retrieving free- floating objects, or that one maintenance crew member who accidentally cut his safety wire. *Can only be bought once per ship *Cannot target other active ships",
    image: "https://placehold.co/100x100/987654/ffffff?text=Industrial",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Composition Scanner",
    cost: 4000000,
    moduleType: "Logistics",
    description:
      "This very complex module can scan objects and bring back very precise results. It can detect ore/mineral compositions in asteroids, energy sources, electri- cal activity, and even life forms. It can also scan other ships to give you intel on their systems. *Can only be bought once per ship",
    image: "https://placehold.co/100x100/987654/ffffff?text=Industrial",
  },
];

const eWar = [
  {
    image: "Images/Ships/bob009.webp",
    name: "Poisoning Module",
    cost: 7000000,
    moduleType: "E-War",
    range: "000000886",
    description:
      "This module can be used to infect a hostile ship's weapons, lowering all of their weapon's tracking, rate of fire, and range effectiveness by 1.",
    image: "Images/Ewar/chessmatrix-Tobias Schmid-artstation.webp",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Honey Pot Module",
    cost: 3000000,
    moduleType: "E-War",
    range: "0", // Range was blank in source for this item
    description:
      "Set up a fake scapegoat server on your vessel that looks appealing to hostile hackers, and use it to monitor their every move while they try to attack your systems in futile.",
    image: "Images/Ewar/honeypot-indotort-midjourney.webp",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Warp Jammer",
    cost: 6000000,
    moduleType: "E-War",
    range: "1 light hour", // Range was blank in source for this item
    description:
      "You can point this module at a hostile ship to effectively disable their warp drive, giving them no chance to escape.",
    image: "Images/Ewar/ben-bolton-sat3-001.webp",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Comm Scrambler",
    cost: 5000000,
    moduleType: "E-War",
    range: "1 light hour", // Range was blank in source for this item
    description:
      "Pointing this at a hostile ship will scramble their comms, cutting off their outside and inside communi- cations if done well.",
    image: "Images/Ewar/richard-wright-satellite-dish.webp",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "MITM Module",
    cost: 4000000,
    moduleType: "E-War",
    range: "1 light hour", // Range was blank in source for this item
    description:
      "This specialized terminal and tools allow your cybersec officer to easily conduct a man-in-the-middle attack to intercept any sort of data from a ship, giving you information about all of a ship's systems.",
    image: "Images/Ewar/ITguy-indotort-midjourney.webp",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Penetration Module",
    cost: 8000000,
    moduleType: "E-War",
    range: "1 light hour", // Range was blank in source for this item
    description:
      "This module helps your cybersec officer by giving them tools to penetrate through a system's defences. In bypassing their securi- ty grid, you lower the hostile's shield strength by 21",
    image: "https://placehold.co/100x100/abcdef/ffffff?text=EWar",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Bridge Module",
    cost: 8000000,
    moduleType: "E-War",
    range: "1 light hour", // Range was blank in source for this item
    description:
      "If successful, this module will disable the teleport jammer of a ship while this process continues to run.",
    image: "Images/Ewar/leif-heanzo-cockpit-pilot-v3-insta2.webp",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Incident Module",
    cost: 6000000,
    moduleType: "E-War",
    range: "0", // Range was blank in source for this item
    description:
      "This module implements a wide array of cyber defense tools to help your cybersec officer, such as network security monitoring frameworks. Attacks are easier to determine and isolate..",
    image: "Images/Ewar/ITguy-indotort-midjourney.webp",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Efficiency Module",
    cost: 4000000,
    moduleType: "E-War",
    range: "0", // Range was blank in source for this item
    description:
      "Installing this in your digital security room vastly improves the efficiency of digital systems on your ship, reducing your ship's radar cross-section by a significant amount.",
    image: "https://placehold.co/100x100/abcdef/ffffff?text=EWar",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Presence Module",
    cost: 5000000,
    moduleType: "E-War",
    range: "0", // Range was blank in source for this item
    description:
      "Using complex polymorphic code engines and rootkits, this module helps ensure your digital offensive has staying power. It is more difficult for enemies to find and eliminate your attacks.",
    image: "Images/Ewar/kayla-miller-deskscene.webp",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Overflow Module",
    cost: 10000000,
    moduleType: "E-War",
    range: "1 light hour", // Range was blank in source for this item
    description:
      "If done well, this module can effectively disable up to 2 ship weapons of an enemy ship, or one anti-matter cannon.",
    image: "https://placehold.co/100x100/abcdef/ffffff?text=EWar",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Security Grid",
    cost: 14000000,
    moduleType: "E-War",
    range: "1 light hour", // Range was blank in source for this item
    description:
      "Your ship can project its e-war capabilities across all allied ships in a wide range, allowing you to apply defensive modules to more vulnerable ships and even conduct offensives from them.",
    image: "https://placehold.co/100x100/abcdef/ffffff?text=EWar",
  },
];

const rooms = [
  {
    image: "Images/Ships/bob009.webp",
    name: "Command Room",
    description: "The central hub for ship operations and command.",
    cost: 5000000,
    consequences: "Increases command efficiency and crew morale.",
    type: "command", // Added type to differentiate
    image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Crew Quarters Upgrade",
    cost: 1000000,
    description:
      "All ships have sleeping quarters for your entire crew, but they are cramped and not too comfortable. Upgrade with this if you want more privacy and better comfort. +Does not cost a room slot",
    type: "quarters",
    image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Officer's Quarters",
    cost: 2000000,
    description:
      "Comfy, furnished dwellings that can accomodate 1-6 people on a frigate, up to 12 on a destroyer, and 10% of your crew on a cruiser or larger. Keep your important crew members with high morale!",
    type: "quarters",
    image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Captain's Quarters",
    cost: 5000000,
    description:
      "It will be a very luxurious suite for you on a frigate or destroyer, and a penthouse on a cruiser or larger.",
    type: "quarters",
    image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Basic Infirmary",
    cost: 1000000,
    description:
      "Got a headache? Maybe you need a bandage? Okay, you can do stitches and make-shift broken-bone splints here too, but don't expect much more.",
    type: "infirmary",
    image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Standard Infirmary",
    cost: 2000000,
    description:
      "Equipped with decent medical equipment, enough to perform surgeries. Your wounded may live another day, and with a good doctor, your crew's in good hands. *Requires a doctor",
    type: "infirmary",
    image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Advanced Infirmary",
    cost: 12000000,
    description:
      "The most advanced medical technology is at your finger tips, including magical space beds that can almost instantaneously repair damaged body parts. *Requires a doctor",
    type: "infirmary",
    image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Evacuation Room",
    cost: 1000000,
    description:
      "This will have enough escape pods for your crew and will get them out of your burning wreckage of a ship. They are equipped with survival equipment and can even navigate to the closest safe spot.",
    type: "evacuation",
    image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Advanced Evacuation",
    cost: 9000000,
    description:
      "Your escape pods have warp drives built into them and are even moderately armoured with a small shield to protect their inhabitants more effectively. Comes with a sparkling wine bottle in each.",
    type: "evacuation",
    image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Standard Mess Hall",
    cost: 2000000,
    description:
      "Monday is burger day, Tuesday is turkey day, Wednesday is spaghetti day, Thursday is... you get the idea. +Can combine with a tavern *Requires a chef",
    type: "messhall",
    image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Fancy Mess Hall",
    cost: 7000000,
    description:
      "All of the good crew members can sit with the captain for the day (that's you)! Enjoy mouth-watering exotic and delicious foods. +Can combine with a tavern *Requires a chef",
    type: "messhall",
    image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Tavern",
    cost: 1000000,
    description:
      "Sometimes you need a good drink after a long day of hard work. Kick back and relax. Bar food is good too, but not that filling. +Can combine with a mess hall *Requires a chef or bartender",
    type: "tavern",
    image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Gravity Control Room",
    cost: 2000000,
    description:
      "All ships come with basic, built-in gravity control, but maybe you want to manipulate it more precisely, and control it for separate rooms in your ship.",
    type: "control",
    image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Lounge",
    cost: 0, // Free!
    description:
      "Maybe you don't fancy the fancy stuff. Get a few couches, a coffee table, maybe a TV, and suddenly you have a room to laze around in. +Can combine with a recreational room and an observatory",
    type: "recreational",
    image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Recreational Room",
    cost: 1000000,
    description:
      "During times of no action, your crew might get bored. Why not turn a room into a pool, gym, spa, library, mini-golf course, or more? +Can combine with a lounge and an observatory",
    type: "recreational",
    image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Observatory",
    cost: 2000000,
    description:
      "You're living amongst the stars, so why not pay attention to them once in awhile? +Can combine with a recreational room and a lounge",
    type: "recreational",
    image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Laboratory",
    cost: 1000000,
    description:
      "You might want this if you want to analyze ancient artifacts or other anomalies. Otherwise, enjoy mixing chemicals, running volatile experiments, and other fun things. *Requires a scientist",
    type: "research",
    image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Terraforming Bay",
    cost: 9000000,
    description:
      "It takes many years to terraform a planet. This room comes equipped with the means to get started, but It's not cheap. +Can combine with a laboratory *Requires a laboratory",
    type: "industrial",
    image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Cryosleep Chambers",
    cost: 8000000,
    description:
      "You may want to go to cryosleep for those really long voyages into unknown space. These chambers ensure you're in good health while you're out cold. *Requires a doctor and scientist",
    type: "medical",
    image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Ore Processing Facility",
    cost: 3000000,
    description:
      "With all of the ore you will be dealing with, you wil need a place to process them. +Can combine with a factory wing *Requires a production manager",
    type: "industrial",
    image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Factory Wing",
    cost: 3000000,
    description:
      "This factory wing is fitted with heavy machinery, capable of producing things en masse. It can also process scrap metal. +Can combine with an ore processing facility",
    type: "industrial",
    image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Cargo Space",
    cost: 0, // Free!
    description:
      "With the blink of an eye, you can turn an empty room into... an empty room. Where else will you keep your excessive space loot? +Can combine with an engineering bay",
    type: "storage",
    image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Engineering Bay",
    cost: 3000000,
    description:
      "Need to repair something? Bring it here. It's a mechanic's heaven. +Can combine with a cargo space *Requires a mechanical engineer",
    type: "utility",
    image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Hypercomms Room",
    cost: 2000000,
    description:
      "This high-tech room comes with hypercommunications tech, able to send communications across star systems almost instantly. +Can combine with a digital security room",
    type: "communications",
    image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Digital Security Room",
    cost: 4000000,
    description:
      "Defend your ship's vulnerable digital systems with top of the line encryption grids. +Can combine with a hypercomms room *Requires a cyber security officer",
    type: "security",
    image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Arsenal",
    cost: 4000000,
    description:
      "Maybe you are a gun nut, or have a few on board with you. Keep all of your small arms, here. Comes with all kinds of weaponry fit for your standard soldier's hands.",
    type: "storage",
    image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Advanced Arsenal",
    cost: 9000000,
    description:
      "This arsenal comes with charging stations for power armour, if you or your crew have them. It also comes with all sorts of experimental and advanced weaponry.",
    type: "storage",
    image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Training Room",
    cost: 3000000,
    description:
      "Give yourself some venting space. Get up close and personal and With this state-of-the-art virtual reality training room, you can emulate almost any hand-to-hand combat situation.",
    type: "recreational",
    image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Teleporting Platform",
    cost: 5000000,
    description:
      "beam you and your crew into the enemy ship, or onto the surface of a planet.",
    type: "transport",
    image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Holding Cells",
    cost: 1000000,
    description:
      "Maybe you've got some volatile prisoners you need to hold somewhere, or maybe you just want to put Styx on time-out.",
    type: "security",
    image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Stasis Cell",
    cost: 2000000,
    description:
      "Got an extremely volatile prisoner or lifeform that you need to contain at all costs? Throw it in the stasis cell to ensure it doesn't do anything you'd regret. Can only hold up to one specimen.",
    type: "security",
    image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Meat Fridge",
    cost: 3000000,
    description:
      "Stemcell-grown meat is popular in space-faring vessels. All you have to do is make sure to refill the growing solution and the meat multiplies. Comes in many flavours such as beef, chicken, kanye, etc.",
    type: "food",
    image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Aquaculture Room",
    cost: 1000000,
    description:
      "Raise some space fish! While you might get some good eats, you will need to replace the water often... They will need nutrients, however. +Can combine with a hydroponic garden",
    type: "food",
    image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Hydroponic Garden",
    cost: 1000000,
    description:
      "Have an in-ship garden by raising plants in water; enjoy the fresh air! unless you have plants for that. +Can combine with an aquaculture room",
    type: "food",
    image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Secure Vault",
    cost: 2000000,
    description:
      "Transporting critical material worth hundreds of millions of credits? Maybe you don't want to keep it in your cargo space, or maybe you Some aquaculture might help.... Just don't trust your crew mates. +Counts as a cargo space",
    type: "storage",
    image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Safe Room",
    cost: 3000000,
    description:
      "Got invaders in your ship and need a place to hide? Get a safe room... also known as a panic room. It's a hidden compartment in your ship that's hard to find, and comes with full life support. Easily defensible.",
    type: "security",
    image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Upgraded Ship Security",
    cost: 8000000,
    description:
      "All ships come with mild in-ship security drones. Perhaps you want to install more robust automated turrets and camera systems? +Does not cost a room slot",
    type: "security",
    image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room",
  },
];

const weapons = [
  {
    image: "Images/Ships/bob009.webp",
    name: "Machine Gun",
    cost: 1000000,
    secondaryCost: 500000,
    energyUse: 1,
    tier: 1,
    damagePerVolley: 3,
    rateOfFire: 9,
    accuracy: 3,
    range: 3,
    projectileVelocity: 8,
    tracking: 8,
    weaponTypes: "Kinetic",
    description:
      "For ships that can get up close and personal, machine guns offer rapid firepower. Nothing can withstand a hail of high-calibre, metal-shredding bullets.",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Weapon",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Light Particle Blaster",
    cost: 1000000,
    secondaryCost: 500000,
    energyUse: 3,
    tier: 1,
    damagePerVolley: 5,
    rateOfFire: 7,
    accuracy: 5,
    range: 5,
    projectileVelocity: 4,
    tracking: 8,
    weaponTypes: "Blaster",
    description:
      "Blasters fire orbs of very volatile supercharged particles capable of causing severe damage. However, the projectiles are a little slow, they're very close-ranged weapons.",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Weapon",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Light Laser Cannon",
    cost: 1000000,
    secondaryCost: 500000,
    energyUse: 4,
    tier: 1,
    damagePerVolley: 1,
    rateOfFire: 10,
    accuracy: 8,
    range: 6,
    projectileVelocity: 10,
    tracking: 8,
    weaponTypes: "Energy",
    description:
      "Of the three light-class weapons, the light laser lannon is the most accurate and longest-ranged, but is also slightly less damaging than the others. Great against missiles.",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Weapon",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Missile Pod",
    cost: 2000000,
    secondaryCost: 1000000,
    energyUse: 2,
    tier: 1,
    damagePerVolley: 5,
    rateOfFire: 4,
    accuracy: 9,
    range: 7,
    projectileVelocity: 7,
    tracking: 8,
    weaponTypes: "Explosive *Can be shot down",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Weapon",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Flak Cannon",
    cost: 2000000,
    secondaryCost: 1000000,
    energyUse: 1,
    tier: 1,
    damagePerVolley: 2,
    rateOfFire: 8,
    accuracy: 7,
    range: 7,
    projectileVelocity: 8,
    tracking: 8,
    weaponTypes: "Kinetic +1 damage vs drones, fighters",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Weapon",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Auto Cannon",
    cost: 2000000,
    secondaryCost: 1000000,
    energyUse: 1,
    tier: 1,
    damagePerVolley: 5,
    rateOfFire: 8,
    accuracy: 5,
    range: 7,
    projectileVelocity: 8,
    tracking: 6,
    weaponTypes: "Kinetic",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Weapon",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Artillery Cannon",
    cost: 3000000,
    secondaryCost: 1500000,
    energyUse: 2,
    tier: 2,
    damagePerVolley: 8,
    rateOfFire: 5,
    accuracy: 6,
    range: 8,
    projectileVelocity: 8,
    tracking: 5,
    weaponTypes: "Kin, explosive +1 damage vs hull armour",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Weapon",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Heavy Particle Blaster",
    cost: 3000000,
    secondaryCost: 1500000,
    energyUse: 4,
    tier: 2,
    damagePerVolley: 7,
    rateOfFire: 8,
    accuracy: 5,
    range: 5,
    projectileVelocity: 4,
    tracking: 8,
    weaponTypes: "Blaster",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Weapon",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Mana Blaster",
    cost: 4000000,
    secondaryCost: 2000000,
    energyUse: 5,
    tier: 2,
    damagePerVolley: 8,
    rateOfFire: 8,
    accuracy: 5,
    range: 5,
    projectileVelocity: 3,
    tracking: 8,
    weaponTypes: "Blaster +1 damage with a mana core",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Weapon",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Heavy Laser Cannon",
    cost: 4000000,
    secondaryCost: 2000000,
    energyUse: 6,
    tier: 2,
    damagePerVolley: 4,
    rateOfFire: 10,
    accuracy: 9,
    range: 9,
    projectileVelocity: 10,
    tracking: 5,
    weaponTypes: "Energy +1 damage when focused >2 min",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Weapon",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Rail Gun",
    cost: 4000000,
    secondaryCost: 2000000,
    energyUse: 5,
    tier: 2,
    damagePerVolley: 9,
    rateOfFire: 4,
    accuracy: 8,
    range: 9,
    projectileVelocity: 9,
    tracking: 3,
    weaponTypes: "Kin, energy",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Weapon",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Missile Launcher",
    cost: 5000000,
    secondaryCost: 2000000,
    energyUse: 3,
    tier: 2,
    damagePerVolley: 8,
    rateOfFire: 3,
    accuracy: 9,
    range: 7,
    projectileVelocity: 7,
    tracking: 7,
    weaponTypes: "Explosive *Can be shot down",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Weapon",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Tesla Overcharger",
    cost: 6000000,
    secondaryCost: 4000000,
    energyUse: 6,
    tier: 3,
    damagePerVolley: 3,
    rateOfFire: 6,
    accuracy: 8,
    range: 4,
    projectileVelocity: 10,
    tracking: 5,
    weaponTypes: "Energy +6 damage vs shields +Can stun targets",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Weapon",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Torpedo Silo",
    cost: 6000000,
    secondaryCost: 4000000,
    energyUse: 3,
    tier: 3,
    damagePerVolley: 10,
    rateOfFire: 3,
    accuracy: 7,
    range: 9,
    projectileVelocity: 3,
    tracking: 3,
    weaponTypes:
      "Explosive +8 damage vs hull armour *Can be shot down *Limited to 3 per fighter",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Weapon",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Ragefire Rail Gun",
    cost: 8000000,
    secondaryCost: 4000000,
    energyUse: 7,
    tier: 3,
    damagePerVolley: 6,
    rateOfFire: 10,
    accuracy: 9,
    range: 9,
    projectileVelocity: 10,
    tracking: 3,
    weaponTypes:
      "Kin, energy *Requires a cruiser or larger, or a destroyer spinal mount",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Weapon",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Tachyon Laser Cannon",
    cost: 6000000,
    secondaryCost: 4000000,
    energyUse: 7,
    tier: 3,
    damagePerVolley: 8,
    rateOfFire: 8,
    accuracy: 9,
    range: 9,
    projectileVelocity: 9,
    tracking: 1,
    weaponTypes:
      "Energy +1 damage when focused >2 min *Requires a cruiser or larger, or a destroyer spinal mount",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Weapon",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Pulse Beam Cannon",
    cost: 8000000,
    secondaryCost: 4000000,
    energyUse: 6,
    tier: 3,
    damagePerVolley: 10,
    rateOfFire: 4,
    accuracy: 9,
    range: 10,
    projectileVelocity: 9,
    tracking: 2,
    weaponTypes:
      "En, blaster *Requires a cruiser or larger, or a destroyer spinal mount",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Weapon",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Anti-Matter Cannon",
    cost: 60000000,
    secondaryCost: 30000000,
    energyUse: 8,
    tier: 4,
    damagePerVolley: 11,
    rateOfFire: 0,
    accuracy: 10,
    range: 10,
    projectileVelocity: 10,
    tracking: 0,
    weaponTypes:
      "Unique *Costs 2 spinal weapon mounts *Requires a battleship or larger *5 min charge, 10 min cool down",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Weapon",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Graser",
    cost: 2000000,
    secondaryCost: 1000000,
    energyUse: 6,
    tier: 1,
    damagePerVolley: 2,
    rateOfFire: 8,
    accuracy: 9,
    range: 5,
    projectileVelocity: 10,
    tracking: 8,
    description:
      "Weapon Type: Energy. *Double damage vs. hull armor. The ionizing energy of the gamma ray laser is more effective against hull armor than the thermal effects of lower frequency lasers. The graser is especially suited for intercepting lightly shielded targets such as missiles and drones.",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Weapon",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Quantum Disruptor",
    cost: 8000000,
    secondaryCost: 4000000,
    energyUse: 7,
    tier: 3,
    damagePerVolley: 6,
    rateOfFire: 9,
    accuracy: 9,
    range: 9,
    projectileVelocity: 9,
    tracking: 5,
    description:
      "Weapon Type: Energy. *Requires a cruiser or larger ship, or a destroyer spinal mount. Recently reverse-engineered from Herald technology, the quantum disruptor acts as the sub-atomic level, breaking matter apart explosively. Triglav deliberately engineered a well-rounded heavy weapon expected to become a standard in cruiser skirmishes.",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Weapon",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Ion Array",
    cost: 8000000,
    secondaryCost: 4000000,
    energyUse: 7,
    tier: 3,
    damagePerVolley: 3,
    rateOfFire: 10,
    accuracy: 9,
    range: 8,
    projectileVelocity: 9,
    tracking: 7,
    description:
      "Weapon Type: Energy. *Double damage vs. shields. *Can stun targets. *Requires a cruiser or larger ship, or a destroyer spinal mount. Clusters of light ion batteries set in swift-tracking servo mounts, ion arrays are employed as area defense weapons. They were designed to intercept and stun smaller ships so that larger weapons can finish them off. Lately they have seen increasing use on pirate ships seeking to take their prey intact.",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Weapon",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Hellbore Cannon",
    cost: 18000000,
    secondaryCost: 9000000,
    energyUse: 8,
    tier: 3,
    damagePerVolley: 60,
    rateOfFire: 2,
    accuracy: 9,
    range: 10,
    projectileVelocity: 10,
    tracking: 1,
    description:
      "Weapon Type: En. Explosive. *Shield piercing: shields can block only half the damage from this weapon. *Double damage vs. shields. The hellbore is a huge plasma battery that delivers a massive strike of thermal and explosive energies at just the right moment.",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Weapon",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Phase Cannon",
    cost: 24000000,
    secondaryCost: 12000000,
    energyUse: 8,
    tier: 4,
    damagePerVolley: 80,
    rateOfFire: 1,
    accuracy: 10,
    range: 14,
    projectileVelocity: 10,
    tracking: 1,
    description:
      "Weapon Type: Energy. *Shield piercing: shields can block only half the damage from this weapon. *Double damage vs. shields. *Stuns targets of the same class or smaller. *Requires a cruiser or larger ship. *Costs two spinal weapon mounts. The phase cannon is a dedicated alpha strike weapon, dealing overpowering electromagnetic and thermal damage that strips away a ship's shields and heavily disrupts its control systems. Follow up attacks on the stunned target are almost always decisive.",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Weapon",
  },
];

const drones = [
  {
    image: "Images/Ships/bob009.webp",
    name: "Scout Drone",
    cost: 500000,
    hangarSpaceUse: 0.5,
    spinalWeaponMounts: 1,
    broadsideTurrentMounts: 0,
    pointDefenceMounts: 0,
    navigation: 25,
    hullArmour: 1,
    shieldDefence: 3,
    length: "2m",
    description:
      "Agile and quick, scout drones are cheap, portable, and expendable. They're great for for basic recon, combat, or point defence. +Comes with a free machine gun *Limited to T1 weapons",
    image: "https://placehold.co/100x100/00ff00/ffffff?text=Drone",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Beacon Drone",
    cost: 1000000,
    hangarSpaceUse: 1,
    spinalWeaponMounts: 0,
    broadsideTurrentMounts: 0,
    pointDefenceMounts: 0,
    navigation: 10,
    hullArmour: 2,
    shieldDefence: 5,
    length: "6m",
    description:
      "Essentially just high-performance computers strapped to navigation systems, beacon drones relay data communication for an extended range between ships. +Boosts E-War Module range by 2",
    image: "https://placehold.co/100x100/00ff00/ffffff?text=Drone",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Combat Drone",
    cost: 1000000,
    hangarSpaceUse: 1,
    spinalWeaponMounts: 1,
    broadsideTurrentMounts: 1,
    pointDefenceMounts: 0,
    navigation: 22,
    hullArmour: 2,
    shieldDefence: 6,
    length: "4m",
    description:
      "These are more suited for straight up combat than scout drones. +Comes with a free T1 weapon *Limited to T1 and T2 weapons *T2 weapons can only be put on spinal weapon mounts",
    image: "https://placehold.co/100x100/00ff00/ffffff?text=Drone",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Brawler Drone",
    cost: 2000000,
    hangarSpaceUse: 2,
    spinalWeaponMounts: 1,
    broadsideTurrentMounts: 2,
    pointDefenceMounts: 1,
    navigation: 20,
    hullArmour: 5,
    shieldDefence: 7,
    length: "10m",
    description:
      "Brawler drones are meant to take hits and provide great firepower. +Comes with a free T2 weapon *Limited to T1 and T2 weapons *T2 weapons can only be put on spinal weapon mounts",
    image: "https://placehold.co/100x100/00ff00/ffffff?text=Drone",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Stealth Drone",
    cost: 4000000,
    hangarSpaceUse: 2,
    spinalWeaponMounts: 1,
    broadsideTurrentMounts: 2,
    pointDefenceMounts: 1,
    navigation: 18,
    hullArmour: 2,
    shieldDefence: 5,
    length: "12m",
    description:
      "+Can cloak for up to 5 minutes +Comes with a free T2 weapon *Limited to T1 and T2 weapons, and tesla overchargers *T2 weapons can only be put on spinal weapon mounts",
    image: "https://placehold.co/100x100/00ff00/ffffff?text=Drone",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Bomber Drone",
    cost: 5000000,
    hangarSpaceUse: 3,
    spinalWeaponMounts: 1,
    broadsideTurrentMounts: 0,
    pointDefenceMounts: 2,
    navigation: 16,
    hullArmour: 8,
    shieldDefence: 9,
    length: "20m",
    description:
      "Large but equipped to deliver hull-breaching blows. +Comes with a free torpedo silo *Limited to T3 and T1 weapons *T3 weapons can only be put on spinal mounts",
    image: "https://placehold.co/100x100/00ff00/ffffff?text=Drone",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Mining Drone",
    cost: 1000000,
    hangarSpaceUse: 1,
    spinalWeaponMounts: 0,
    broadsideTurrentMounts: 2,
    pointDefenceMounts: 0,
    navigation: 18,
    hullArmour: 2,
    shieldDefence: 2,
    length: "6m",
    description:
      "A drone that uses mining lasers to mine asteroids, and can carry the ore to your ship. +Comes with a free mining harvester (MK1 crystal) *Limited to industrial modules",
    image: "https://placehold.co/100x100/00ff00/ffffff?text=Drone",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Shield Drone",
    cost: 2000000,
    hangarSpaceUse: 1,
    spinalWeaponMounts: 0,
    broadsideTurrentMounts: 0,
    pointDefenceMounts: 0,
    navigation: 22,
    hullArmour: 1,
    shieldDefence: 6,
    length: "6m",
    description:
      "A special drone that projects your ship's shield capacity. +Can project a shield that covers 60m^2 and has 1/3 the shield strength of your main ship *Shield lasts 5 min",
    image: "https://placehold.co/100x100/00ff00/ffffff?text=Drone",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Hull Repair Drone",
    cost: 2000000,
    hangarSpaceUse: 1,
    spinalWeaponMounts: 0,
    broadsideTurrentMounts: 0,
    pointDefenceMounts: 0,
    navigation: 14,
    hullArmour: 1,
    shieldDefence: 2,
    length: "4m",
    description:
      "These helpful repair drones will do a superb job at making sure your ship's hull is in tact. While these are very efficient models, they are not well protected. +Can repair hull armour",
    image: "https://placehold.co/100x100/00ff00/ffffff?text=Drone",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Combat Repair Drone",
    cost: 2000000,
    hangarSpaceUse: 1,
    spinalWeaponMounts: 0,
    broadsideTurrentMounts: 0,
    pointDefenceMounts: 0,
    navigation: 18,
    hullArmour: 4,
    shieldDefence: 5,
    length: "4m",
    description:
      "Better protected and mobile than standard repair drones, these drones can repair in the midst of combat. They are less efficient, but easy to rebuild or replace. +Can repair hull armour",
    image: "https://placehold.co/100x100/00ff00/ffffff?text=Drone",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Science Probe",
    cost: 2000000,
    hangarSpaceUse: 0.5,
    spinalWeaponMounts: 0,
    broadsideTurrentMounts: 0,
    pointDefenceMounts: 0,
    navigation: 11,
    hullArmour: 1,
    shieldDefence: 3,
    length: "2m",
    description:
      "Equipped with top of the line. analyzing equipment, these probes are perfect for sending into the unknown for discovery. +Has a built-in tractor beam and composition scanner",
    image: "https://placehold.co/100x100/00ff00/ffffff?text=Drone",
  },
  {
    image: "Images/Ships/bob009.webp",
    name: "Lasso Drone",
    cost: 8000000,
    hangarSpaceUse: 2,
    spinalWeaponMounts: 0,
    broadsideTurrentMounts: 0,
    pointDefenceMounts: 0,
    navigation: 14,
    hullArmour: 2,
    shieldDefence: 4,
    length: "12m",
    description:
      "If you plan on engaging multiple enemy ships and you want to keep them all from escaping, loading up on lasso drones is a good idea. +Has a built-in warp jammer",
    image: "https://placehold.co/100x100/00ff00/ffffff?text=Drone",
  },
];

function createShip() {
  //initialize ship object
  // Basic validation to ensure inputs are numbers

  // You can add more properties to the ship object here as needed,
  // such as a unique ID, name, health, cargo capacity, etc.
  const newShip = {
    spinalWeapons: [],
    broadSideWeapons: [],
    pointDefenseWeapons: [],
    hull: "fighter",
    hangarSpace: 0,
    navigation: 0,
    hullArmor: 0,
    shieldStr: 0,
    length: 0,
    maxCrew: 0,
    extraRooms: 0,
    energyUse: 1,
    aiChoice: "winston",
    commandMods: "cool paint job",
    shipAI: {},
    energy: [],
    shield: {},
    choiceList: [
      { subsystemChoice: [] },
      { roomChoice: [] },
      { industrialChoice: [] },
      { energyChoice: [] },
      { eWarChoice: [] },
      { spinalChoice: [] },
      { broadSideChoice: [] },
      { pointDefenseChoice: [] },
      { hangarChoice: [] },
      { aiChoice: [] },
      { commandMods: [] },
    ],
  };

  return newShip;
}

function deleteShip(shipID, map) {
  //delete ship object
  // Logic to delete a ship by its ID
  map.delete(shipID); // Set the ship object to null to simulate deletion
  console.log(`Ship with ID: ${shipID} has been deleted.`);
  return map; // Return null to indicate the ship has been deleted
}

function addHull(shipObject, hullData) {
  shipObject.hull = hullData;
}

function addWeapon(shipObject, weaponData) {
  if (weaponData.type.includes("spinal")) {
    //if the weapon can be slotted into a spinal mount
    if (shipObject.spinalWeapons.length < shipObject.hull.spinalMount) {
      //if the number of spinal weapons on the ship is less than the number of spinal mounts
      shipObject.spinalWeapons.push(weaponData); //add the weapon to the spinal weapons array
      return;
    } else if (
      shipObject.hull.type === "frigate" ||
      shipObject.hull.type === "fighter"
    ) {
      console.log("No available spinal mounts for this weapon.");
      return;
    } else if (
      shipObject.broadsideWeapons.length < shipObject.hull.broadsideMount
    ) {
      //if there exists a broadside mount, we can add the weapon
      if (shipObject.hull.type === "destroyer") {
        return;
      }
      shipObject.broadsideWeapons.push(weaponData);
      return;
    } else {
      console.log("No available mounts for this weapon.");
      return;
    }
  } else if (weaponData.type.includes("broadside")) {
    //if the weapon can be slotted into a broadside mount
    if (shipObject.broadsideWeapons.length < shipObject.hull.broadsideMount) {
      //if the number of broadside weapons on the ship is less than the number of broadside mounts
      shipObject.broadsideWeapons.push(weaponData); //add the weapon to the broadside weapons array
      return;
    } else {
      console.log("No available broadside mounts for this weapon.");
      return;
    }
  } else {
    if (
      shipObject.pointDefenceWeapons.length < shipObject.hull.pointDefenceMount
    ) {
      //if the number of point defence weapons on the ship is less than the number of point defence mounts
      shipObject.pointDefenceWeapons.push(weaponData); //add the weapon to the point defence weapons array
      return;
    } else {
      console.log("No available point defence mounts for this weapon.");
      return;
    }
  }
}

//function removeWeapon(shipObject, weaponData) {}

function addAI(shipObject, aiData) {
  shipObject.onboardAI = aiData; //set the onboard AI to the AI data
}

function addEnergyGen(shipObject, energyData) {
  if (shipObject.energyGen.length < 2) {
    shipObject.energyGen.push(energyData);
    //add the energy generator to the energy generators array
  } else if (
    energyData.type === "solar" &&
    !shipObject.energyGen.includes("solar")
  ) {
    shipObject.energyGen.push(energyData);
    //add the solar energy generator to the energy generators array
  } else {
    console.log(
      "No available energy generator slots for this energy generator."
    );
  }
}

function addShield(shipObject, shieldData) {
  if (shipObject.shield.length >= 1) {
    console.log("No available shield slots for this shield.");
    return; //if the ship already has a shield, we cannot add another one
  }
  shipObject.shield.push(shieldData); //add the shield to the shields array
}

function addCommandMod(shipObject, commandModData) {
  if (shipObject.commandMods.length < 1) {
    shipObject.commandMods.push(commandModData); //add the command mod to the command mods array
  } else {
    console.log("No available command mod slots for this command mod.");
  }
}

function addHullMod(shipObject, hullModData) {
  if (shipObject.hull.type === "dreadnought") {
    console.log("Dreadnoughts cannot have hull mods.");
    return;
  } else {
    shipObject.hullMods.push(hullModData); //add the hull mod to the hull mods array
  }
}

function addToHangar(shipObject, drone) {
  if (shipObject.hangar.length < shipObject.hull.hangarSpace) {
    shipObject.hangar.push(drone); //add the drone to the hangars array
  } else {
    console.log("No available hangar space for this drone.");
  }
}

function addShipEquipment(shipObject, equipmentData) {
  //accepts ewar & industrial equipment
  shipObject.shipEquipment.push(equipmentData);
}

function addRoom(shipObject, roomData) {
  if (shipObject.rooms.length < shipObject.hull.extraRooms) {
    shipObject.rooms.push(roomData); //add the room to the rooms array
  } else {
    console.log("No available room slots for this room.");
  }
  switch (roomData.type) {
    case "tavern":
      if (
        shipObject.rooms.includes("standardMessHall") ||
        shipObject.rooms.includes("luxuryMessHall")
      ) {
        shipObject.hull.extraRooms += 1; //if the ship has a mess hall, we can add a tavern
      }
      break;
    case "luxuryMessHall":
    case "standardMessHall":
      if (shipObject.rooms.includes("tavern")) {
        shipObject.hull.extraRooms += 1; //if the ship has a tavern, we can add a mess hall
      }
      break;
    case "lounge":
    case "recreation":
    case "observatory":
      if (
        shipObject.rooms.includes("lounge") ||
        shipObject.rooms.includes("recreation") ||
        shipObject.rooms.includes("observatory")
      ) {
        shipObject.hull.extraRooms += 1; //if the ship has a lounge or recreation room, we can add an observatory
      }
      break;
    case "terraformingBay":
    case "laboratory":
      if (shipObject.rooms.includes("laboratory")) {
        shipObject.hull.extraRooms += 1; //if the ship has a terraforming bay, we can add another one
      }
      break;
    case "oreProcessing":
    case "factory":
      if (
        shipObject.rooms.includes("oreProcessing") ||
        shipObject.rooms.includes("factory")
      ) {
        shipObject.hull.extraRooms += 1; //if the ship has an ore processing or factory, we can add another one
      }
      break;
    case "engineeringBay":
    case "cargoSpace":
      if (
        shipObject.rooms.includes("engineeringBay") ||
        shipObject.rooms.includes("cargoSpace")
      ) {
        shipObject.hull.extraRooms += 1; //if the ship has an engineering bay or cargo space, we can add another one
      }
      break;
    case "hypercomms":
    case "digitalSecurity":
      if (
        shipObject.rooms.includes("hypercomms") ||
        shipObject.rooms.includes("digitalSecurity")
      ) {
        shipObject.hull.extraRooms += 1; //if the ship has a hypercomms or digital security, we can add another one
      }
      break;
    case "aquaCulture":
    case "hydroponics":
      if (
        shipObject.rooms.includes("aquaCulture") ||
        shipObject.rooms.includes("hydroponics")
      ) {
        shipObject.hull.extraRooms += 1; //if the ship has an aqua culture or hydroponics, we can add another one
      }
      break;
  }
}

//Set current active ship
function resetShipConfigUI(targetShipSection) {
  //for each div in section-hull, set them to not active
  // Get the parent div with the ID "section-hull"
  const sectionToReset = document.getElementById(targetShipSection);

  // Check if the element exists to avoid errors
  if (sectionToReset) {
    // Get all direct child div elements within "section-hull"
    const targetDivs = sectionToReset.querySelectorAll(".choice");

    // Iterate over each div and add the 'active' class
    targetDivs.forEach((choice) => {
      choice.classList.remove("active");
    });
  } else {
    console.error("Element with ID 'section-hull' not found.");
  }
}

function renderShipConfigUI(shipId) {
  // Reset all relevant configuration UI sections
  resetShipConfigUI("section-hull");
  // Add more reset calls for other sections as they are implemented
  // resetShipConfigUI('section-mod');
  // resetShipConfigUI('section-weapon');
  // resetShipConfigUI('section-industrial');
  // resetShipConfigUI('section-ewar');
  // resetShipConfigUI('section-room');

  const shipData = player.ships[shipId];
  console.log(`Rendering UI for ship: ${shipId}`, shipData);

  // --- Render Hull Configuration ---
  if (shipData.hull) {
    const hullName = shipData.hull.name;
    // Ensure the ID matches how it's generated in addHullDataToSection
    const hullChoiceId = `choice-${hullName}`;
    const hullElement = document.getElementById(hullChoiceId);
    if (hullElement) {
      hullElement.classList.add("active");
      console.log(`Activated hull UI for: ${hullName}`);
    } else {
      console.warn(
        `Hull UI element not found for ID: ${hullChoiceId}. Make sure it's populated.`
      );
    }
  }
}

function editShipName(shipId) {
  // Get the main ship container div using the passed ID
  const shipDiv = document.getElementById(shipId);
  if (!shipDiv) {
    console.error(`Ship div with ID "${shipId}" not found.`);
    return;
  } else {
    // Find the specific ship name display div *inside* the shipDiv
    const shipNameDiv = shipDiv.querySelector(".ship-name");
    if (shipNameDiv) {
      shipNameDiv.focus(); // Focus on the ship name div to allow editing
      //shipNameDiv.addEventListener('blur', () =>
    } else {
      console.error(
        `Ship name display div not found within ship ID "${shipId}".`
      );
    }
  }
}

function populateHullToSection(dataArray, choicePrefix) {
  // Check if the section already has population to prevent duplicate entries
  if (dataArray.length > 0) {
    const checkDiv = document.getElementById(
      `${choicePrefix}-${dataArray[0].name.replace(/\s/g, "-")}`
    );
    if (document.contains(checkDiv)) {
      return;
    }
  }

  dataArray.forEach((item) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("choice", "ship");
    newDiv.id = `${choicePrefix}-${item.name.replace(/\s/g, "-")}`;

    const newSpan = document.createElement("span");
    newDiv.appendChild(newSpan);

    // Image element - common to all
    const imgElement = document.createElement("img");
    imgElement.src =
      item.image || "https://placehold.co/100x100/eeeeee/ffffff?text=NoImage";
    imgElement.title = getImgName(item.image);
    newSpan.appendChild(imgElement); // Image added after newSpan

    // Title (name) - common to all
    const h3Element = document.createElement("h3");
    h3Element.style.marginTop = "0px";
    h3Element.style.marginBottom = "0px";
    h3Element.textContent = item.name || "No Name";
    newSpan.appendChild(h3Element);

    // Cost - common to most, with special handling for secondaryCost in weapons
    if (item.cost !== undefined) {
      const costP = document.createElement("p");
      costP.style = "margin-top: 0;";
      costP.innerHTML = `Cost: ${formatterIntl.format(item.cost)}`;
      newSpan.appendChild(costP);
    }
    const uList1 = document.createElement("ul");
    uList1.style =
      "display: grid; grid-template-columns: 1fr 1fr; list-style: none; padding: 0; margin: 0; font-size: 15px; text-align: left;";

    appendList1(uList1, "Manufacturer: ", item.manufacturer);
    appendList1(uList1, "Type: ", item.type);
    appendList1(uList1, "Spinal Mounts: ", item.spinalMount);
    appendList1(uList1, "Broadside Mounts: ", item.broadsideMount);
    appendList1(uList1, "Point Defence Mounts: ", item.pointDefenceMount);
    appendList1(uList1, "Hangar Space: ", item.hangarSpace);
    appendList1(uList1, "Navigation: ", item.navigation);
    appendList1(uList1, "Hull Armor: ", item.hullArmor);
    appendList1(uList1, "Shield Strength: ", item.shieldStrength);
    appendList1(uList1, "Length: ", item.length);
    appendList1(uList1, "Max Crew: ", item.maxCrew);
    appendList1(uList1, "Extra Rooms: ", item.extraRooms);
    appendList1(uList1, "Energy Use: ", item.energyUse);
    newSpan.appendChild(uList1);

    // Description - common to all
    const descriptionP = document.createElement("p");
    descriptionP.innerHTML = item.description || "No description available.";
    newSpan.appendChild(descriptionP);

    const targetSection = document.getElementById(`title-${item.type}`);

    switch (item.type) {
      case "fighter":
        targetSection.after(newDiv);
        break;
      case "frigate":
        targetSection.after(newDiv);
        break;
      case "destroyer":
        targetSection.after(newDiv);
        break;
      case "cruiser":
        targetSection.after(newDiv);
        break;
      case "corvette":
        targetSection.after(newDiv);
        break;
      case "battleship":
        targetSection.after(newDiv);
        newDiv.classList.remove("ship");
        newDiv.classList.add("ship1");
        break;
      case "carrier":
        targetSection.after(newDiv);
        newDiv.classList.remove("ship");
        newDiv.classList.add("ship1");
        break;
      case "dreadnought":
        targetSection.after(newDiv);
        newDiv.classList.remove("ship");
        newDiv.classList.add("ship1");
        break;

      // Append to the target section
    }
  });
}
