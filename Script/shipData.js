// This file contains data for various ship hulls available in the game.

export {hulls, shipAI, energy, shield, mods, industrial, eWar, rooms, weapons, drones,
        createShip, deleteShip, addHull, addWeapon, addAI,addEnergyGen, addShield, 
        addCommandMod, addHullMod, addToHangar, addShipEquipment, addRoom, 
        resetShipConfigUI, renderShipConfigUI, editShipName};




// The structure is based on the existing shipData.js forma
const hulls = [
    // Fighters from 'ship Data.docx'
    {
        name: "S92-TMC",
        manufacturer: "Hammerhead Ind.",
        type: 'frigate', cost: 7000000,
        spinalMount: 3,
        spinal: [], // Default empty array
        broadsideMount: 2,
        broadside: [], // Default empty array
        pointDefenceMount: 4,
        pointDefence: [], // Default empty array
        hangarSpace: 1,
        hangar: [], // Default empty array
        navigation: 20, // 20/25
        hullArmor: 3, // 03/25
        shieldStrength: 1, // 01/25
        length: '18m',
        maxCrew: 1,
        extraRooms: 0,
        rooms: [], // Default empty array
        energyUse: 0, // No specific value in docx, default to 0
        description: "A standard fighter from Hammerhead Industries, equipped for combat.",
        image: '/Images/Other/Beatrice R&D.webp'
    },
    {
        name: "S97-TRN",
        manufacturer: "Hammerhead Ind.",
        type: 'frigate', cost: 9000000,
        spinalMount: 3,
        spinal: [],
        broadsideMount: 4,
        broadside: [],
        pointDefenceMount: 3,
        pointDefence: [],
        hangarSpace: 0,
        hangar: [],
        navigation: 20, // 20/25
        hullArmor: 2, // 02/25
        shieldStrength: 1, // 01/25
        length: '24m',
        maxCrew: 1,
        extraRooms: 0,
        rooms: [],
        energyUse: 0,
        description: "A versatile Hammerhead Industries fighter with enhanced broadside capabilities.",
        image: '/Images/Other/Beatrice R&D.webp'
    },
    {
        name: "Beyond",
        manufacturer: "Beatrice R&D",
        type: 'frigate', cost: 9000000, // Corrected from 10m in original shipData.js to 9m as per docx
        spinalMount: 3,
        spinal: [],
        broadsideMount: 2,
        broadside: [],
        pointDefenceMount: 3,
        pointDefence: [],
        hangarSpace: 2,
        hangar: [],
        navigation: 24, // 24/25
        hullArmor: 4, // 04/25
        shieldStrength: 1, // 01/25
        length: '16m',
        maxCrew: 2,
        extraRooms: 0,
        rooms: [],
        energyUse: 0,
        description: "The Beyond is a Beatrice R&D fighter known for its advanced navigation systems.",
        image: '/Images/Other/Beatrice R&D.webp'
    },
    {
        name: "Wasp",
        manufacturer: "Federation Navy",
        type: 'frigate', cost: 11000000,
        spinalMount: 3,
        spinal: [],
        broadsideMount: 4,
        broadside: [],
        pointDefenceMount: 2,
        pointDefence: [],
        hangarSpace: 0,
        hangar: [],
        navigation: 21, // 21/25
        hullArmor: 4, // 04/25
        shieldStrength: 0, // No value in docx, default to 0
        length: '14m', // No value in docx, default to 0
        maxCrew: 1,
        extraRooms: 0,
        rooms: [],
        energyUse: 0,
        description: "A nimble fighter used by the Federation Navy.",
        image: '/Images/Other/Beatrice R&D.webp'
    },

    // Frigates from 'ship Data.docx'
    {
        name: "Stingray",
        manufacturer: "Hammerhead Ind.",
        type: 'frigate', cost: 25000000,
        spinalMount: 1,
        spinal: [],
        broadsideMount: 4,
        broadside: [],
        pointDefenceMount: 6,
        pointDefence: [],
        hangarSpace: 0,
        hangar: [],
        navigation: 18, // 18/25
        hullArmor: 7, // 07/25
        shieldStrength: 2, // 02/25
        length: '120m',
        maxCrew: 20,
        extraRooms: 0,
        rooms: [],
        energyUse: 0,
        description: "The Stingray is a Hammerhead Industries frigate, designed for versatile engagements.",
        image: '/Images/Other/Beatrice R&D.webp'
    },
    {
        name: "Valkyrie",
        manufacturer: "Beatrice R&D",
        type: 'frigate', cost: 30000000,
        spinalMount: 1,
        spinal: [],
        broadsideMount: 6,
        broadside: [],
        pointDefenceMount: 4,
        pointDefence: [],
        hangarSpace: 0,
        hangar: [],
        navigation: 22, // 22/25
        hullArmor: 6, // 06/25
        shieldStrength: 2, // 02/25
        length: '100m',
        maxCrew: 25,
        extraRooms: 0,
        rooms: [],
        energyUse: 0,
        description: "A Beatrice R&D frigate, known for its strong broadside weaponry.",
        image: '/Images/Other/Beatrice R&D.webp'
    },
    {
        name: "Manta",
        manufacturer: "Federation Navy",
        type: 'frigate', cost: 35000000,
        spinalMount: 1,
        spinal: [],
        broadsideMount: 5,
        broadside: [],
        pointDefenceMount: 5,
        pointDefence: [],
        hangarSpace: 0,
        hangar: [],
        navigation: 19, // 19/25
        hullArmor: 8, // 08/25
        shieldStrength: 3, // 03/25
        length: '110m',
        maxCrew: 22,
        extraRooms: 0,
        rooms: [],
        energyUse: 0,
        description: "A robust frigate in the Federation Navy's arsenal, balanced for defense and offense.",
        image: '/Images/Other/Beatrice R&D.webp'
    },

    // Destroyers from 'ship Data.docx'
    {
        name: "Javelin",
        manufacturer: "Hammerhead Ind.",
        type: 'frigate', cost: 50000000,
        spinalMount: 2,
        spinal: [],
        broadsideMount: 8,
        broadside: [],
        pointDefenceMount: 8,
        pointDefence: [],
        hangarSpace: 0,
        hangar: [],
        navigation: 15, // 15/25
        hullArmor: 10, // 10/25
        shieldStrength: 4, // 04/25
        length: '250m',
        maxCrew: 50,
        extraRooms: 0,
        rooms: [],
        energyUse: 0,
        description: "The Javelin is a Hammerhead Industries destroyer, capable of sustained engagements.",
        image: '/Images/Other/Beatrice R&D.webp'
    },
    {
        name: "Aegis",
        manufacturer: "Beatrice R&D",
        type: 'frigate', cost: 60000000,
        spinalMount: 2,
        spinal: [],
        broadsideMount: 10,
        broadside: [],
        pointDefenceMount: 6,
        pointDefence: [],
        hangarSpace: 0,
        hangar: [],
        navigation: 18, // 18/25
        hullArmor: 9, // 09/25
        shieldStrength: 5, // 05/25
        length: '220m',
        maxCrew: 60,
        extraRooms: 0,
        rooms: [],
        energyUse: 0,
        description: "A Beatrice R&D destroyer, featuring strong defensive capabilities.",
        image: '/Images/Other/Beatrice R&D.webp'
    },
    {
        name: "Gladius",
        manufacturer: "Federation Navy",
        type: 'frigate', cost: 70000000,
        spinalMount: 2,
        spinal: [],
        broadsideMount: 9,
        broadside: [],
        pointDefenceMount: 7,
        pointDefence: [],
        hangarSpace: 0,
        hangar: [],
        navigation: 16, // 16/25
        hullArmor: 11, // 11/25
        shieldStrength: 6, // 06/25
        length: '240m',
        maxCrew: 55,
        extraRooms: 0,
        rooms: [],
        energyUse: 0,
        description: "The Gladius is a Federation Navy destroyer, a balanced and reliable warship.",
        image: '/Images/Other/Beatrice R&D.webp'
    },

    // Cruisers from 'ship Data.docx'
    {
        name: "Colossus",
        manufacturer: "Hammerhead Ind.",
        type: 'frigate', cost: 90000000,
        spinalMount: 3,
        spinal: [],
        broadsideMount: 12,
        broadside: [],
        pointDefenceMount: 10,
        pointDefence: [],
        hangarSpace: 2,
        hangar: [],
        navigation: 12, // 12/25
        hullArmor: 14, // 14/25
        shieldStrength: 7, // 07/25
        length: '500m',
        maxCrew: 150,
        extraRooms: 0,
        rooms: [],
        energyUse: 0,
        description: "A Hammerhead Industries cruiser, built for heavy firepower and some fighter support.",
        image: '/Images/Other/Beatrice R&D.webp'
    },
    {
        name: "Oracle",
        manufacturer: "Beatrice R&D",
        type: 'frigate', cost: 100000000,
        spinalMount: 3,
        spinal: [],
        broadsideMount: 14,
        broadside: [],
        pointDefenceMount: 8,
        pointDefence: [],
        hangarSpace: 0,
        hangar: [],
        navigation: 15, // 15/25
        hullArmor: 13, // 13/25
        shieldStrength: 8, // 08/25
        length: '480m',
        maxCrew: 180,
        extraRooms: 0,
        rooms: [],
        energyUse: 0,
        description: "The Oracle is a Beatrice R&D cruiser, focusing on broadside attacks and advanced systems.",
        image: '/Images/Other/Beatrice R&D.webp'
    },
    {
        name: "Vanguard",
        manufacturer: "Federation Navy",
        type: 'frigate', cost: 110000000,
        spinalMount: 3,
        spinal: [],
        broadsideMount: 13,
        broadside: [],
        pointDefenceMount: 9,
        pointDefence: [],
        hangarSpace: 0,
        hangar: [],
        navigation: 13, // 13/25
        hullArmor: 15, // 15/25
        shieldStrength: 9, // 09/25
        length: '520m',
        maxCrew: 160,
        extraRooms: 0,
        rooms: [],
        energyUse: 0,
        description: "A Federation Navy cruiser, known for its balanced combat capabilities and robust armor.",
        image: '/Images/Other/Beatrice R&D.webp'
    },

    // Battleships from 'ship Data.docx'
    {
        name: "Behemoth",
        manufacturer: "Hammerhead Ind.",
        type: 'frigate', cost: 150000000,
        spinalMount: 4,
        spinal: [],
        broadsideMount: 18,
        broadside: [],
        pointDefenceMount: 12,
        pointDefence: [],
        hangarSpace: 4,
        hangar: [],
        navigation: 9, // 09/25
        hullArmor: 20, // 20/25
        shieldStrength: 10, // 10/25
        length: '1.2km',
        maxCrew: 500,
        extraRooms: 0,
        rooms: [],
        energyUse: 0,
        description: "A Hammerhead Industries battleship, featuring immense firepower and significant hangar capacity.",
        image: '/Images/Other/Beatrice R&D.webp'
    },
    {
        name: "Paladin",
        manufacturer: "Beatrice R&D",
        type: 'frigate', cost: 160000000,
        spinalMount: 4,
        spinal: [],
        broadsideMount: 20,
        broadside: [],
        pointDefenceMount: 10,
        pointDefence: [],
        hangarSpace: 0,
        hangar: [],
        navigation: 11, // 11/25
        hullArmor: 19, // 19/25
        shieldStrength: 11, // 11/25
        length: '1.1km',
        maxCrew: 600,
        extraRooms: 0,
        rooms: [],
        energyUse: 0,
        description: "The Paladin is a Beatrice R&D battleship, a formidable vessel with strong broadside and shielding.",
        image: '/Images/Other/Beatrice R&D.webp'
    },
    {
        name: "Conqueror",
        manufacturer: "Federation Navy",
        type: 'frigate', cost: 170000000,
        spinalMount: 4,
        spinal: [],
        broadsideMount: 19,
        broadside: [],
        pointDefenceMount: 11,
        pointDefence: [],
        hangarSpace: 0,
        hangar: [],
        navigation: 10, // 10/25
        hullArmor: 21, // 21/25
        shieldStrength: 12, // 12/25
        length: '1.3km',
        maxCrew: 550,
        extraRooms: 0,
        rooms: [],
        energyUse: 0,
        description: "The Conqueror is a Federation Navy battleship, a balanced and heavily armored warship.",
        image: '/Images/Other/Beatrice R&D.webp'
    },

    // Carriers from 'ship Data.docx'
    {
        name: "Leviathan",
        manufacturer: "Hammerhead Ind.",
        type: 'frigate', cost: 200000000,
        spinalMount: 1,
        spinal: [],
        broadsideMount: 10,
        broadside: [],
        pointDefenceMount: 14,
        pointDefence: [],
        hangarSpace: 50,
        hangar: [],
        navigation: 7, // 07/25
        hullArmor: 16, // 16/25
        shieldStrength: 6, // 06/25
        length: '2km',
        maxCrew: 2500,
        extraRooms: 0,
        rooms: [],
        energyUse: 0,
        description: "A massive Hammerhead Industries carrier, designed to deploy a large number of fighters.",
        image: '/Images/Other/Beatrice R&D.webp'
    },
    {
        name: "Gáe Bulg",
        manufacturer: "Blackhawk Elite",
        type: 'frigate', cost: 120000000,
        spinalMount: 1,
        spinal: [],
        broadsideMount: 0, // No value in docx, default to 0
        broadside: [],
        pointDefenceMount: 16,
        pointDefence: [],
        hangarSpace: 66,
        hangar: [],
        navigation: 1, // 01/25
        hullArmor: 19, // 19/25
        shieldStrength: 8, // 08/25
        length: '2.5km',
        maxCrew: 3800,
        extraRooms: 20,
        rooms: [],
        energyUse: 0,
        description: "The Gáe Bulg is a Blackhawk Elite carrier, specializing in overwhelming fighter deployment.",
        image: '/Images/Other/Beatrice R&D.webp'
    },

    // Dreadnoughts from 'ship Data.docx'
    {
        name: "Gungnir",
        manufacturer: "Blackhawk Elite",
        type: 'frigate', cost: 300000000,
        spinalMount: 5,
        spinal: [],
        broadsideMount: 36,
        broadside: [],
        pointDefenceMount: 16,
        pointDefence: [],
        hangarSpace: 38,
        hangar: [],
        navigation: 0, // 00/25
        hullArmor: 40, // 40/25
        shieldStrength: 10, // 10/25
        length: '6.5km',
        maxCrew: 6000,
        extraRooms: 32,
        rooms: [],
        energyUse: 0,
        description: "The Gungnir is a Blackhawk Elite dreadnought, a true behemoth of the battlefield.",
        image: '/Images/Other/Beatrice R&D.webp'
    },
    {
        name: "Dhyana",
        manufacturer: "Triglav Innovations",
        type: 'frigate', cost: 340000000,
        spinalMount: 6,
        spinal: [],
        broadsideMount: 42,
        broadside: [],
        pointDefenceMount: 14,
        pointDefence: [],
        hangarSpace: 28,
        hangar: [],
        navigation: 0, // 00/25
        hullArmor: 34, // 34/25
        shieldStrength: 10, // 10/25
        length: '7km',
        maxCrew: 5000, // Assuming 5,000 as per snippet
        extraRooms: 0, // No value in docx, default to 0
        rooms: [],
        energyUse: 0,
        description: "The Dhyana is a Triglav Innovations dreadnought, known for its immense firepower and advanced design.",
        image: '/Images/Other/Beatrice R&D.webp'
    },
    // New entries from 'Page 2 Stardust.md'
    {
        name: "PI V18",
        manufacturer: "Pulsar Inc.",
        type: 'frigate', cost: 15000000, // "15m"
        spinalMount: 4,
        spinal: [],
        broadsideMount: 4,
        broadside: [],
        pointDefenceMount: 4,
        pointDefence: [],
        hangarSpace: 3,
        hangar: [],
        navigation: 4, // "04/25"
        hullArmor: 2, // "02/25"
        shieldStrength: 1, // "01/25"
        length: '24m',
        maxCrew: 2,
        extraRooms: 0,
        rooms: [],
        energyUse: 1,
        description: "Integrated PI Control V6 may be installed without occupying slots. Although Pulsar's next generation fighter is only in an incremental improvement on its previous efforts, the integrated PIO system is a classy touch that leaves room for a second command module. It is still very comfortable, and has a cozy cabin area for longer voyages.",
        image: '/Images/Other/Beatrice R&D.webp'
    },
    {
        name: "X66 \"Omen\,
        manufacturer: "Triglav Innovations",
        type: 'frigate', cost: 20000000, // "20m"
        spinalMount: 3,
        spinal: [],
        broadsideMount: 4,
        broadside: [],
        pointDefenceMount: 2,
        pointDefence: [],
        hangarSpace: 1,
        hangar: [],
        navigation: 24, // "24/25"
        hullArmor: 2, // "02/25"
        shieldStrength: 2, // "02/25"
        length: '18m',
        maxCrew: 1,
        extraRooms: 0,
        rooms: [],
        energyUse: 1,
        description: "May perform missions for a mech, dropship, or drone. Incorporates integrated power capacitor to X66. With both automated flight and extended reconnaissance. While capable of carrying a pilot, it doesn't like it.",
        image: '/Images/Other/Beatrice R&D.webp'
    },
    {
        name: "Cygnus",
        manufacturer: "Talons",
        type: 'frigate', cost: 30000000, // "30m"
        spinalMount: 4,
        spinal: [],
        broadsideMount: 6,
        broadside: [],
        pointDefenceMount: 2,
        pointDefence: [],
        hangarSpace: 3,
        hangar: [],
        navigation: 22, // "22/25"
        hullArmor: 2, // "02/25"
        shieldStrength: 2, // "02/25"
        length: '23m',
        maxCrew: 2,
        extraRooms: 0,
        rooms: [],
        energyUse: 1,
        description: "Digital Security may be installed without occupying slots. Recognizing the increasing uselessness of drone warfare, the Talon developed the Cygnus command and control fighter. It is fast and has a good range. The Federation finds the recent advances in the sophistication of Talon engineering concerning.",
        image: '/Images/Other/Beatrice R&D.webp'
    },
    {
        name: "Scorpion",
        manufacturer: "Heralds",
        type: 'frigate', cost: 36000000, // "36m"
        spinalMount: 4,
        spinal: [],
        broadsideMount: 6,
        broadside: [],
        pointDefenceMount: 2,
        pointDefence: [],
        hangarSpace: 3,
        hangar: [],
        navigation: 24, // "24/25"
        hullArmor: 2, // "02/25"
        shieldStrength: 2, // "02/25"
        length: '25m',
        maxCrew: 2,
        extraRooms: 0,
        rooms: [],
        energyUse: 2,
        description: "May perform missions for a mech, dropship, or submarine. The \"Scorpion\" is a multi-environment fighter whose field-linked modules allow it to operate effectively in an atmosphere and perform a wide variety of tasks.",
        image: '/Images/Other/Beatrice R&D.webp'
    },
    {
        name: "Hermes",
        manufacturer: "Beatrice R&D",
        type: 'frigate', cost: 16000000, // "16m"
        spinalMount: 2,
        spinal: [],
        broadsideMount: 6,
        broadside: [],
        pointDefenceMount: 4,
        pointDefence: [],
        hangarSpace: 2,
        hangar: [],
        navigation: 21, // "21/25"
        hullArmor: 2, // "02/25"
        shieldStrength: 2, // "02/25"
        length: '49m',
        maxCrew: 5,
        extraRooms: 1,
        rooms: [],
        energyUse: 2,
        description: "The Hermes is useful as a shuttle or scout craft for Beatrice's larger ships. But it has also become a popular courier ship on its own merits.",
        image: '/Images/Other/Beatrice R&D.webp'
    },
    {
        name: "Dirk",
        manufacturer: "Red Dagger Pirates",
        type: 'frigate', cost: 19000000, // "19m"
        spinalMount: 4,
        spinal: [],
        broadsideMount: 2,
        broadside: [],
        pointDefenceMount: 1,
        pointDefence: [],
        hangarSpace: 1,
        hangar: [],
        navigation: 23, // "23/25"
        hullArmor: 2, // "02/25"
        shieldStrength: 2, // "02/25"
        length: '46m',
        maxCrew: 3,
        extraRooms: 0,
        rooms: [],
        energyUse: 2,
        description: "Don't be fooled by its small size. The Dirk never travels alone. These scout ships are always on the lookout for new prey, and are notorious for jamming a victim's warp drive while calling in their mothership for the kill.",
        image: '/Images/Other/Beatrice R&D.webp'
    },
    {
        name: "PI Vk2",
        manufacturer: "Pulsar Inc.",
        type: 'frigate', cost: 20000000, // "20m"
        spinalMount: 3,
        spinal: [],
        broadsideMount: 6,
        broadside: [],
        pointDefenceMount: 4,
        pointDefence: [],
        hangarSpace: 1,
        hangar: [],
        navigation: 20, // "20/25"
        hullArmor: 2, // "02/25"
        shieldStrength: 2, // "02/25"
        length: '50m',
        maxCrew: 5,
        extraRooms: 0,
        rooms: [],
        energyUse: 2,
        description: "The PI Vk2 is often used as a shuttle for civilian liners or a luxury yacht for wealthy businessmen. Roomy, spacious, and surprisingly comfortable, the Vk2 is an increasingly common sight.",
        image: '/Images/Other/Beatrice R&D.webp'
    },
    {
        name: "Morning Star",
        manufacturer: "Talons",
        type: 'frigate', cost: 28000000, // "28m"
        spinalMount: 4,
        spinal: [],
        broadsideMount: 10,
        broadside: [],
        pointDefenceMount: 2,
        pointDefence: [],
        hangarSpace: 1,
        hangar: [],
        navigation: 20, // "20/25"
        hullArmor: 2, // "02/25"
        shieldStrength: 2, // "02/25"
        length: '65m',
        maxCrew: 8,
        extraRooms: 0,
        rooms: [],
        energyUse: 2,
        description: "The Morning Star is one of the earliest corvettes, and one of the most successful. Highly adaptable, it can fill the role of scout, interceptor, light support, heavy fighter, or planetary landing craft.",
        image: '/Images/Other/Beatrice R&D.webp'
    },
    {
        name: "Shrike",
        manufacturer: "Heralds",
        type: 'frigate', cost: 45000000, // "45m"
        spinalMount: 5,
        spinal: [],
        broadsideMount: 10,
        broadside: [],
        pointDefenceMount: 2,
        pointDefence: [],
        hangarSpace: 1,
        hangar: [],
        navigation: 21, // "21/25"
        hullArmor: 7, // "07/25"
        shieldStrength: 3, // "03/25"
        length: '70m',
        maxCrew: 10,
        extraRooms: 0,
        rooms: [],
        energyUse: 3,
        description: "The Shrike is usually found as a plaything of the super rich, who take pains to outfit them in the most expensive way possible.",
        image: '/Images/Other/Beatrice R&D.webp'
    },
    {
        name: "Medusa",
        manufacturer: "Heralds",
        type: 'frigate', cost: 74000000, // "74m"
        spinalMount: 6,
        spinal: [],
        broadsideMount: 14,
        broadside: [],
        pointDefenceMount: 8,
        pointDefence: [],
        hangarSpace: 10,
        hangar: [],
        navigation: 17, // "17/25"
        hullArmor: 12, // "12/25"
        shieldStrength: 5, // "05/25"
        length: '245m',
        maxCrew: 42,
        extraRooms: 1,
        rooms: [],
        energyUse: 4,
        description: "Fast and deadly, the \"Medusa\" is the quintessential raider. However the large number of point-defense mounts suggest the Heralds designed it as an escort vessel.",
        image: '/Images/Other/Beatrice R&D.webp'
    },
    {
        name: "Rapier",
        manufacturer: "Red Dagger",
        type: 'frigate', cost: 40000000, // "40m"
        spinalMount: 5,
        spinal: [],
        broadsideMount: 14,
        broadside: [],
        pointDefenceMount: 5,
        pointDefence: [],
        hangarSpace: 7,
        hangar: [],
        navigation: 12, // "12/25"
        hullArmor: 11, // "11/25"
        shieldStrength: 5, // "05/25"
        length: '349m',
        maxCrew: 11,
        extraRooms: 4,
        rooms: [],
        energyUse: 4,
        description: "Introduced in the battle of BRSRB-4, the Rapier quickly became the pirates’ favorite heavy skirmish vessel.",
        image: '/Images/Other/Beatrice R&D.webp'
    },
    {
        name: "PI Vc11",
        manufacturer: "Pulsar Inc.",
        type: 'frigate', cost: 49000000, // "49m"
        spinalMount: 5,
        spinal: [],
        broadsideMount: 16,
        broadside: [],
        pointDefenceMount: 7,
        pointDefence: [],
        hangarSpace: 10,
        hangar: [],
        navigation: 10, // "10/25"
        hullArmor: 12, // "12/25"
        shieldStrength: 5, // "05/25"
        length: '364m',
        maxCrew: 15,
        extraRooms: 4,
        rooms: [],
        energyUse: 4,
        description: "Intent on overtaking Triglav’s technological lead, Pulsar Inc. engaged with a new partner to develop the PI Vc11 light cruiser. These compact, highly efficient ships retain Pulsar’s signature space-saving refinements while incorporating a more martial configuration.",
        image: '/Images/Other/Beatrice R&D.webp'
    },
    {
        name: "Fury",
        manufacturer: "Talons",
        type: 'frigate', cost: 64000000, // "64m"
        spinalMount: 6,
        spinal: [],
        broadsideMount: 18,
        broadside: [],
        pointDefenceMount: 6,
        pointDefence: [],
        hangarSpace: 8,
        hangar: [],
        navigation: 11, // "11/25"
        hullArmor: 12, // "12/25"
        shieldStrength: 5, // "05/25"
        length: '360m',
        maxCrew: 12,
        extraRooms: 4,
        rooms: [],
        energyUse: 4,
        description: "Furies have become a menace in the Clover systems. Dedicated gunships capable of catching and killing Viking class destroyers, they operate in packs to take down larger vessels.",
        image: '/Images/Other/Beatrice R&D.webp'
    },
    {
        name: "Harrower",
        manufacturer: "Heralds",
        type: 'frigate', cost: 99000000, // "99m"
        spinalMount: 6,
        spinal: [],
        broadsideMount: 20,
        broadside: [],
        pointDefenceMount: 12,
        pointDefence: [],
        hangarSpace: 13,
        hangar: [],
        navigation: 14, // "14/25"
        hullArmor: 13, // "13/25"
        shieldStrength: 6, // "06/25"
        length: '347m',
        maxCrew: 10,
        extraRooms: 5,
        rooms: [],
        energyUse: 4,
        description: "These \"Harrower\" light cruisers were found with the \"Monarch\" battleships. They possess reactionless drives that give them incredible agility and allow them to safely land on planets.",
        image: '/Images/Other/Beatrice R&D.webp'
    },
    {
        name: "X45 Scythe",
        manufacturer: "Triglav Innovations",
        type: 'frigate', cost: 80000000, // "80m"
        spinalMount: 4,
        spinal: [],
        broadsideMount: 24,
        broadside: [],
        pointDefenceMount: 8,
        pointDefence: [],
        hangarSpace: 18,
        hangar: [],
        navigation: 5, // "05/25"
        hullArmor: 15, // "15/25"
        shieldStrength: 8, // "08/25"
        length: '785m',
        maxCrew: 8,
        extraRooms: 5,
        rooms: [],
        energyUse: 6,
        description: "May not mount anti-matter cannon. Triglav found something out there, and they reverse-engineered it into the X45 Scythe. Although only time will tell if the battlecruiser design is viable, the Scythe’s ability to quickly bring heavy firepower to the battlefield has proven invaluable on several occasions.",
        image: '/Images/Other/Beatrice R&D.webp'
    },
    {
        name: "Manta (Herald)", // Renamed to avoid conflict with Federation Navy Manta
        manufacturer: "Heralds",
        type: 'frigate', cost: 120000000, // "120m"
        spinalMount: 4,
        spinal: [],
        broadsideMount: 28,
        broadside: [],
        pointDefenceMount: 8,
        pointDefence: [],
        hangarSpace: 20,
        hangar: [],
        navigation: 9, // "09/25"
        hullArmor: 19, // "19/25"
        shieldStrength: 9, // "09/25"
        length: '817m',
        maxCrew: 6,
        extraRooms: 5,
        rooms: [],
        energyUse: 7,
        description: "May not mount anti-matter cannon. The technology and design of the \"Manta\" are distinct from those found in other Herald ships. Triglav won’t be happy you have one of the original Herald battlecruisers.",
        image: '/Images/Other/Beatrice R&D.webp'
    },
    {
        name: "Monarch",
        manufacturer: "Heralds",
        type: 'frigate', cost: 224000000, // "224m"
        spinalMount: 4,
        spinal: [],
        broadsideMount: 30,
        broadside: [],
        pointDefenceMount: 10,
        pointDefence: [],
        hangarSpace: 28,
        hangar: [],
        navigation: 9, // "09/25"
        hullArmor: 22, // "22/25"
        shieldStrength: 9, // "09/25"
        length: '1960m',
        maxCrew: 21,
        extraRooms: 6,
        rooms: [],
        energyUse: 7,
        description: "Advanced Jump Drive allows the \"Monarch\" to travel freely between systems without jump gates. Kings of the \"Ghul\" tech family, two \"Monarch\" fast battleships were recently found. These ships feel alive, and maneuver with a grace unheard of in such a large vessel. Their gravity sails tacking against some unseen medium.",
        image: '/Images/Other/Beatrice R&D.webp'
    },
    {
        name: "Charon",
        manufacturer: "Beatrice R&D",
        type: 'frigate', cost: 96000000, // "96m, Unique" - taking 96m
        spinalMount: 2,
        spinal: [],
        broadsideMount: 15,
        broadside: [],
        pointDefenceMount: 48,
        pointDefence: [],
        hangarSpace: 3, // "03/25"
        hangar: [],
        navigation: 22, // "22/25"
        hullArmor: 22, // "22/25"
        shieldStrength: 9, // "09/25"
        length: '1390m',
        maxCrew: 28,
        extraRooms: 8,
        rooms: [],
        energyUse: 7,
        description: "Jump Field allows Charon’s fleet to travel freely between systems without jump gates. The Charon is Beatrice R&D’s flagship and the product of decades of work: a jump ship capable of conveying an entire fleet of vessels to an unexplored system in a single leap. Cynical minds note it can bypass jump gates for a back door attack.",
        image: '/Images/Other/Beatrice R&D.webp'
    },
    {
        name: "X65 \"Odysseus\,
        manufacturer: "Triglav Innovations",
        type: 'frigate', cost: 220000000, // "220m"
        spinalMount: 3,
        spinal: [],
        broadsideMount: 26,
        broadside: [],
        pointDefenceMount: 8,
        pointDefence: [],
        hangarSpace: 24,
        hangar: [],
        navigation: 2, // "02/25"
        hullArmor: 22, // "22/25"
        shieldStrength: 9, // "09/25"
        length: '3700m',
        maxCrew: 24,
        extraRooms: 8,
        rooms: [],
        energyUse: 7,
        description: "Uses Dreadnought rules. Within the Odysseus, Triglav fused the titanic might of the dreadnought with the more versatile nature of the battleship, creating a new breed of super-capital ship.",
        image: '/Images/Other/Beatrice R&D.webp'
    },
    {
        name: "PI Va2",
        manufacturer: "Pulsar Inc.",
        type: 'frigate', cost: 380000000, // "380m"
        spinalMount: 4,
        spinal: [],
        broadsideMount: 32,
        broadside: [],
        pointDefenceMount: 20,
        pointDefence: [],
        hangarSpace: 30,
        hangar: [],
        navigation: 9, // "09/25"
        hullArmor: 20, // "20/25"
        shieldStrength: 10, // "10/25"
        length: '6km',
        maxCrew: 40,
        extraRooms: 7,
        rooms: [],
        energyUse: 7,
        description: "Advanced Jump Drive lets the Va2 travel freely between systems without jump gates. Designed for Pulsar’s corporate field headquarters, the Va2 is the ultimate deep space exploration vessel. It serves as a base for traversing and researching multiple systems in comfort and relative safety.",
        image: '/Images/Other/Beatrice R&D.webp'
    },
    {
        name: "Archangel",
        manufacturer: "Talons",
        type: 'frigate', cost: 380000000, // "380m"
        spinalMount: 6,
        spinal: [],
        broadsideMount: 42,
        broadside: [],
        pointDefenceMount: 14,
        pointDefence: [],
        hangarSpace: 44,
        hangar: [],
        navigation: 8, // "08/25"
        hullArmor: 32, // "32/25"
        shieldStrength: 10, // "10/25"
        length: '7km',
        maxCrew: 34,
        extraRooms: 7,
        rooms: [],
        energyUse: 7,
        description: "Although formidable in combat, the Archangel’s primary task is to watch over uncharted systems. It acts as a mobile fortress securing new worlds during the early terraforming and colonization stages. Only once a system is well established is it added to the galactic network.",
        image: '/Images/Other/Beatrice R&D.webp'
    },
    {
        name: "Hades",
        manufacturer: "Heralds",
        type: 'frigate', cost: 0, // "Special, Unique" - defaulting to 0
        spinalMount: 0,
        spinal: [],
        broadsideMount: 48,
        broadside: [],
        pointDefenceMount: 24,
        pointDefence: [],
        hangarSpace: 84,
        hangar: [],
        navigation: 9, // "09/25"
        hullArmor: 0, // "-/25" - defaulting to 0
        shieldStrength: 0, // "-/25" - defaulting to 0
        length: '12km',
        maxCrew: 20000, // "4,000 - 20,000" - taking max crew
        extraRooms: 10,
        rooms: [],
        energyUse: 10,
        description: "Wormhole Generator creates a temporary gateway to any designated star system. Energy Damping Field negates 80% of damage received. Anti-matter cannon strike overloads damping field for five minutes, but \"Hades\" survives otherwise intact. \"Hades\" is a mobile space station the size of a small city, recovered from a decaying orbit around a black hole. Formerly a scientific research outpost, \"Hades\" possesses unique technologies that will have a strong impact on space travel once they are reverse engineered.",
        image: '/Images/Other/Beatrice R&D.webp'
    },
];

const shipAI = [
  {
    name: "Winston v9.0.3",
    manufacturer: "Beatrice R&D",
    role: "Multi-Role",
    description: "A minimalistic and subtle ship AI that has all of the basic functions any ship-farer could want. Most ships will be well off with this AI.",
    image: "/Images/Other/Beatrice R&D.webp"
  },
  {
    name: "Beatrice v6.8.2",
    manufacturer: "Beatrice R&D",
    role: "Exploration",
    description: "Named after the founder of the corporation herself while also utilizing her voice, the Beatrice AI is reknown for being efficient at managing exploration voyages.",
    image: "/Images/Other/Beatrice R&D.webp"
  },
  {
    name: "Targray v3.3",
    manufacturer: "Hammerhead Ind.",
    role: "Industry",
    description: "Targray keeps production and mining operations at tip-top shape. He's full of many frameworks built to keep things running.",
    image: "/Images/Other/Beatrice R&D.webp"
  },
  {
    name: "Cassandra v16.0.2",
    manufacturer: "Beatrice R&D",
    role: "Entertainment",
    description: "If you're planning on flying a vessel for civillian use or comfort, Cassandra is the AI you need. She's programmed to keep everyone happy on your ship.",
    image: "/Images/Other/Beatrice R&D.webp"
  },
  {
    name: "Luke v9.5.1",
    manufacturer: "Pulsar Inc.",
    role: "Deep Space Exploration",
    description: "Luke specializes in max efficiency and recycling of resources for those extremely long journeys.",
    image: "/Images/Other/Beatrice R&D.webp"
  },
  {
    name: "Rom v22.4",
    manufacturer: "Red Dagger Pirates",
    role: "Skirmish & Interception",
    description: "Rom was made by Red Dagger programmers specifically to maximize output into navigation, giving ships the best advantage when it comes to scaling the battlefield. He's very adaptable for any situation you may come across.",
    image: "/Images/Other/Beatrice R&D.webp"
  },
  {
    name: "Jacob v13.0.4",
    manufacturer: "Federation Navy",
    role: "Fire Support",
    description: "Fleet synergy is the epitome of the Federation Navy, and that's partially thanks to Jacob. He synergizes well with other combat AIs and is a great tactician.",
    image: "/Images/Other/Beatrice R&D.webp"
  },
  {
    name: "Remington v3.0.1",
    manufacturer: "Triglav Innovations",
    role: "Covert Ops",
    description: "Nothing's more discrete than the latest version of Remington. For any special ops ship-farers out there, there's no AI better than him.",
    image: "/Images/Other/Beatrice R&D.webp"
  },
  {
    name: "Lai'na v15.3.2",
    manufacturer: "Luos Syndicate",
    role: "Assault",
    description: "There are a lot of assault-based AI out there, but none are better than Lai'na. Programmed by a brilliant Outer Ring programmer, she holds top record in combat performance.",
    image: "/Images/Other/Beatrice R&D.webp"
  },
  {
    name: "Cedrick v9.2.10",
    manufacturer: "Blackhawk Elite",
    role: "Siege & Defence",
    description: "When it comes to prolonged battles, Cedrick comes out to be the most stalwart. He's able to manage ship defences perfectly with minimal resources.",
    image: "/Images/Other/Beatrice R&D.webp"
  },
  {
    name: "Blueberry v7.3.2",
    manufacturer: "Talons",
    role: "Guerilla",
    description: "She's a little sassy and sinister, but that's how the Talons programmed her. She's easily one of the most fearsome AIs, full of ingenious tactics to wither down foes.",
    image: "/Images/Other/Beatrice R&D.webp"
  },
  {
    name: "Sophocles v1.0.3",
    manufacturer: "Triglav Innovations",
    role: "Mana Interfacing",
    description: "Sophocles is Triglav's best attempt at utilizing mana power. His AI is incredibly complex compared to others, and has the potential to make ships incredible.",
    image: "/Images/Other/Beatrice R&D.webp"
  }
];

const energy = [
  {
    name: "Solar Panels",
    cost: 2000000,
    energyOutput: ,
    chargeDuration: "30 minutes",
    description: "Solar energy is plentiful, so long as you're near a star. Works great as a hybrid energy system. +Does not count towards your energy system maximum count *Can only be bought once",
    image: "https://placehold.co/100x100/123456/ffffff?text=Energy"
  },
  {
    name: "Power Capacitors",
    cost: 10000000,
    energyOutput: ,
    chargeDuration: "8 days",
    description: "Capacitors are small enough to fit in fighters, though they must be recharged often. However, they can also be coupled with other energy systems instead boost their effectiveness.",
    image: "https://placehold.co/100x100/123456/ffffff?text=Energy"
  },
  {
    name: "Nuclear Fission",
    cost: 16000000,
    energyOutput: ,
    chargeDuration: "25 years",
    description: "Large and bulky, fission reactors are best kept in larger and better defended vessels. Great power output and great efficiency. *Cannot be equipped on fighters *Requires a nuclear engineer",
    image: "https://placehold.co/100x100/123456/ffffff?text=Energy"
  },
  {
    name: "Nuclear Fusion",
    cost: 26000000,
    energyOutput: ,
    chargeDuration: "15 years",
    description: "Fusion has a much more potent energy output than fission, but is also less efficient. *Cannot be equipped on fighters *Requires a nuclear engineer",
    image: "https://placehold.co/100x100/123456/ffffff?text=Energy"
  },
  {
    name: "Mana Core",
    cost: 50000000,
    energyOutput: ,
    chargeDuration: "Lifetimes",
    description: "Mana energy was reverse engineered from the \"Ghost\" family of Herald technology. Current tech is still difficult to wire with mana. +Herald ships get +1 energy output and get 10m off",
    image: "https://placehold.co/100x100/123456/ffffff?text=Energy"
  },
  {
    name: "Anti-Matter Core",
    cost: 40000000,
    energyOutput: ,
    chargeDuration: "12 years",
    description: "A very volatile energy substance, anti-matter has brought endless potential technology and sciences. This core safely decommissions itself if it's forcefully broken into.",
    image: "https://placehold.co/100x100/123456/ffffff?text=Energy"
  }
];

const shield = [
  {
    name: "Basic Shielding",
    cost: 1000000,
    shieldStrength: "+7",
    description: , // No description provided in the source for this item
    image: "https://placehold.co/100x100/789abc/ffffff?text=Shield"
  },
  {
    name: "Standard Shielding",
    cost: 5000000,
    shieldStrength: "+10",
    description: , // No description provided in the source for this item
    image: "https://placehold.co/100x100/789abc/ffffff?text=Shield"
  },
  {
    name: "Advanced Shielding",
    cost: 20000000,
    shieldStrength: "+12",
    description: "+Ships with power capacitors or better 10m off",
    image: "https://placehold.co/100x100/789abc/ffffff?text=Shield"
  },
  {
    name: "Aegis Shielding",
    cost: 30000000,
    shieldStrength: "+14",
    description: "+Ships with nuclear fusion or better get 15m off",
    image: "https://placehold.co/100x100/789abc/ffffff?text=Shield"
  },
  {
    name: "Stalwart Shielding",
    cost: 40000000,
    shieldStrength: "+16",
    description: "+Ships with anti-matter core or better get 10m off",
    image: "https://placehold.co/100x100/789abc/ffffff?text=Shield"
  },
  {
    name: "Mana Shielding",
    cost: 40000000,
    shieldStrength: "+15",
    description: "+Ships with a mana core get this for 5m off and with +2 defence",
    image: "https://placehold.co/100x100/789abc/ffffff?text=Shield"
  }
];



const mods = [ // This array contains both Command Mods and Hull Mods
    {
    name: "Cool Paint Job",
    manufacturer: "Civillian",
    cost: 0, // Free!
    specialAbility: "None",
    cooldown: "Passive",
    range: "Self",
    description: "Your ship turns the heads of the opposite sex by about an extra 0.4 radians per second.",
    type: "command", // Added type to differentiate
    image: "/Images/Other/Beatrice R&D.webp"
  },
  {
    name: "V77-SLT Control Room",
    manufacturer: "Hammerhead Ind.",
    cost: 1000000,
    specialAbility: "Willpower",
    cooldown: "5 minutes",
    range: "Self",
    description: "Your ship gains a small boost to engine thrust, weapon damage and shield defence for 30 seconds.",
    type: "command",
    image: "/Images/Other/Beatrice R&D.webp"
  },
  {
    name: "\"Columbus\" BTR37",
    manufacturer: "Beatrice R&D",
    cost: 2000000,
    specialAbility: "Elusive",
    cooldown: "Passive",
    range: "Self",
    description: "Other weapons take almost twice as long to lock weapons onto your ship. Your FTL drives are also stronger, and can achieve warp-speed quicker than others.",
    type: "command",
    image: "/Images/Other/Beatrice R&D.webp"
  },
  {
    name: "FDN Control zrt3",
    manufacturer: "Federation Navy",
    cost: 3000000,
    specialAbility: "Bulwark",
    cooldown: "5 minutes",
    range: "Self",
    description: "Your ship slows to half its velocity but deploys a one-sided force field that blocks all but the strongest incoming damage from a certain direction for 20 seconds.",
    type: "command",
    image: "/Images/Other/Beatrice R&D.webp"
  },
  {
    name: "\"Zip\" MK III",
    manufacturer: "Red Dagger Pirates",
    cost: 3000000,
    specialAbility: "Raptor",
    cooldown: "5 minutes",
    range: "Self",
    description: "Your ship's engines double their efforts, earning you twice the thrust and acceleration for 20 seconds.",
    type: "command",
    image: "/Images/Other/Beatrice R&D.webp"
  },
  {
    name: "PI Control V6",
    manufacturer: "Pulsar Inc.",
    cost: 3000000,
    specialAbility: "Atlas",
    cooldown: "Continuous",
    range: "Moderate",
    description: "Once activated, your ship links the energy sources of all nearby allied ships. All ships gain a performance boost for all modules, especially for mining and salvage modules.",
    type: "command",
    image: "/Images/Other/Beatrice R&D.webp"
  },
  {
    name: "X38 \"Tribe\" TDNK",
    manufacturer: "Triglav Innovations",
    cost: 3000000,
    specialAbility: "Valkyrie",
    cooldown: "5 minutes",
    range: "Long",
    description: "Your ship uses experimental EMP tech to single out an enemy ship. For 3 minutes, that ship's shields are weakened, weapons slowed, and navigation cut in half.",
    type: "command",
    image: "/Images/Other/Beatrice R&D.webp"
  },
  {
    name: "CBL2 \"Banshee\,
    manufacturer: "Luos Syndicate",
    cost: 4000000,
    specialAbility: "Moonshine",
    cooldown: "10 minutes",
    range: "Moderate",
    description: "After picking a direction, your ship emits a powerful EMP pulse in a cone, dealing heavy damage to shields while also interfering with electrical systems.",
    type: "command",
    image: "/Images/Other/Beatrice R&D.webp"
  },
  {
    name: "SH ExmT",
    manufacturer: "Luos Syndicate",
    cost: 4000000,
    specialAbility: "Prometheus",
    cooldown: "15 minutes",
    range: "Self",
    description: "Using stored energy reserves, your ship completely regenerates your shield strength back to its maximum.",
    type: "command",
    image: "/Images/Other/Beatrice R&D.webp"
  },
  {
    name: "BH Command VR",
    manufacturer: "Blackhawk Elite",
    cost: 5000000,
    specialAbility: "Leviathan",
    cooldown: "15 minutes",
    range: "Long (radius)",
    description: "All allied ships get a massive bonus to shield and hull armour defence for 3 minutes.",
    type: "command",
    image: "/Images/Other/Beatrice R&D.webp"
  },
  {
    name: "MI520 \"Visage\,
    manufacturer: "Talons",
    cost: 5000000,
    specialAbility: "Kraken",
    cooldown: "15 minutes",
    range: "Long (radius)",
    description: "All allied ships get a massive bonus to weapon reload times, fire rates and damage for 3 minutes. Does not effect Anti-Matter Cannons.",
    type: "command",
    image: "/Images/Other/Beatrice R&D.webp"
  },
  {
    name: "Herald \"Blink\,
    manufacturer: "Heralds",
    cost: 7000000,
    specialAbility: "Umbra",
    cooldown: "8 minutes",
    range: "Long",
    description: "Your ship blinks out of existence and almost instantaneously re-appears a far distance ahead of where you were pointed.",
    type: "command",
    image: "/Images/Other/Beatrice R&D.webp"
  },
  {
    name: "Point-Defence Upgrade",
    cost: 1000000,
    maximumUpgrades: 3,
    pointDefenceMounts: 2, // Specific mount type
    description: , // No general description provided, only stats
    type: "hull", // Added type to differentiate
    image: "/Images/Other/Beatrice R&D.webp"
  },
  {
    name: "Broadside Upgrade",
    cost: 2000000,
    maximumUpgrades: 3,
    broadsideTurretMounts: 2, // Specific mount type
    description: "*Can't be fit on carriers",
    type: "hull",
    image: "/Images/Other/Beatrice R&D.webp"
  },
  {
    name: "Spinal Weapon Mount",
    cost: 3000000,
    maximumUpgrades: 2,
    spinalWeaponMounts: 1, // Specific mount type
    description: "*Can't be fit on carriers",
    type: "hull",
    image: "/Images/Other/Beatrice R&D.webp"
  },
  {
    name: "Overdrive Afterburner",
    cost: 3000000,
    maximumUpgrades: 5,
    navigation: 1, // Specific stat
    description: , // No general description provided, only stats
    type: "hull",
    image: "/Images/Other/Beatrice R&D.webp"
  },
  {
    name: "Nano Armour Coating",
    cost: 4000000,
    maximumUpgrades: 1,
    hullArmor: "20%", // Keep as string as it's a percentage
    description: , // No general description provided, only stats
    type: "hull",
    image: "/Images/Other/Beatrice R&D.webp"
  },
  {
    name: "Vehicle Bay",
    cost: 3000000,
    maximumUpgrades: 4,
    hangarSpace: 2, // Specific stat
    description: "+Cost does not scale with class *Spaces are only for vehicles *Can't be fit on fighters",
    type: "hull",
    image: "/Images/Other/Beatrice R&D.webp"
  },
  {
    name: "Active Cloaking",
    cost: 6000000,
    maximumUpgrades: 1,
    description: "Activating this turns your ship invisible to sight or scans. You cannot do anything (including FTL warp) but navigate at half speed.",
    type: "hull",
    image: "/Images/Other/Beatrice R&D.webp"
  },
  {
    name: "Teleport Jammer",
    cost: 2000000,
    maximumUpgrades: 1,
    description: "Prevents boarding parties from teleporting into your vessel. +Dreadnoughts have this for free +Fighters don't need a jammer",
    type: "hull",
    image: "/Images/Other/Beatrice R&D.webp"
  },
  {
    name: "Shield Extender",
    cost: 4000000,
    maximumUpgrades: 1,
    shieldStrength: 2, // Specific stat
    description: "Sacrifice 20% of your ship's shields and give it to all allied ships within a moderate distance.",
    type: "hull",
    image: "/Images/Other/Beatrice R&D.webp"
  },
  {
    name: "Hull Extension",
    cost: 1000000,
    maximumUpgrades: 2,
    navigation: , // No specific navigation value provided
    extraRooms: , // No specific extra rooms value provided
    description: "+Frigates gain 2 crew slots *Can't be fit on fighters",
    type: "hull",
    image: "/Images/Other/Beatrice R&D.webp"
  },
  {
    name: "Hangar Bay",
    cost: 5000000,
    maximumUpgrades: 4,
    hangarSpace: 2, // Specific stat
    description: "+Cost does not scale with class *Spaces are only for drones/ships *Can't be fit on fighters",
    type: "hull",
    image: "/Images/Other/Beatrice R&D.webp"
  },
  {
    name: "Hull Reduction",
    cost: 0, // Free!
    maximumUpgrades: 2,
    navigation: , // No specific navigation value provided
    extraRooms: , // No specific extra rooms value provided
    description: "*Frigates lose 2 crew slots *Can't be fit on fighters",
    type: "hull",
    image: "/Images/Other/Beatrice R&D.webp"
  }
];

const industrial = [
  {
    name: "Mining Harvester",
    cost: 2000000,
    moduleType: "Industrial",
    description: "This harvester uses infrared light to separate common ores from asteroids. It has its own unique built-in tractor beam to bring the ore to your ship while mining. +Can mine low-grade ore *Uses a broadside or point-defence turret mount *Requires ore processing facility",
    image: "https://placehold.co/100x100/987654/ffffff?text=Industrial"
  },
  {
    name: "MK2 Frequency Lens",
    cost: 1000000,
    moduleType: "Industrial",
    description: "You can replace the lens of a mining harvester with this lens that uses a smaller green laser to mine more complex ores. Lenses can be changed on the fly. +Can switch with mining harvester lenses to mine mid-grade ore *Requires a mining harvester",
    image: "https://placehold.co/100x100/987654/ffffff?text=Industrial"
  },
  {
    name: "MK3 Frequency Lens",
    cost: 1000000,
    moduleType: "Industrial",
    description: "The most precise and powerful lens, the MK3 is capable of pin-pointing the most valuable ore from asteroids. It's inefficient for mining lower grade ores, however. +Can switch with mining harvester lenses to mine high-grade ore *Requires a mining harvester",
    image: "https://placehold.co/100x100/987654/ffffff?text=Industrial"
  },
  {
    name: "Salvage Harvester",
    cost: 3000000,
    moduleType: "Industrial",
    description: "Using similar technology to the mining harvesters, this laser is specialized in taking apart machines. Perfect for salvaging debris or ship wrecks. It also comes with its own tractor beam. *Uses a broadside or point-defence turret mount *Requires a cargo space room",
    image: "https://placehold.co/100x100/987654/ffffff?text=Industrial"
  },
  {
    name: "Tractor Beam",
    cost: 3000000,
    moduleType: "Logistics",
    description: "A universal tractor beam that harnesses light to attract or push matter not limited to ore or scrap. It's useful for retrieving free- floating objects, or that one maintenance crew member who accidentally cut his safety wire. *Can only be bought once per ship *Cannot target other active ships",
    image: "https://placehold.co/100x100/987654/ffffff?text=Industrial"
  },
  {
    name: "Composition Scanner",
    cost: 4000000,
    moduleType: "Logistics",
    description: "This very complex module can scan objects and bring back very precise results. It can detect ore/mineral compositions in asteroids, energy sources, electri- cal activity, and even life forms. It can also scan other ships to give you intel on their systems. *Can only be bought once per ship",
    image: "https://placehold.co/100x100/987654/ffffff?text=Industrial"
  }
];


const eWar = [
  {
    name: "Poisoning Module",
    cost: 7000000,
    moduleType: "E-War",
    range: "000000886",
    description: "This module can be used to infect a hostile ship's weapons, lowering all of their weapon's tracking, rate of fire, and range effectiveness by 1.",
    image: "https://placehold.co/100x100/abcdef/ffffff?text=EWar"
  },
  {
    name: "Honey Pot Module",
    cost: 3000000,
    moduleType: "E-War",
    range: , // Range was blank in source for this item
    description: "Set up a fake scapegoat server on your vessel that looks appealing to hostile hackers, and use it to monitor their every move while they try to attack your systems in futile.",
    image: "https://placehold.co/100x100/abcdef/ffffff?text=EWar"
  },
  {
    name: "Warp Jammer",
    cost: 6000000,
    moduleType: "E-War",
    range: , // Range was blank in source for this item
    description: "You can point this module at a hostile ship to effectively disable their warp drive, giving them no chance to escape.",
    image: "https://placehold.co/100x100/abcdef/ffffff?text=EWar"
  },
  {
    name: "Comm Scrambler",
    cost: 5000000,
    moduleType: "E-War",
    range: , // Range was blank in source for this item
    description: "Pointing this at a hostile ship will scramble their comms, cutting off their outside and inside communi- cations if done well.",
    image: "https://placehold.co/100x100/abcdef/ffffff?text=EWar"
  },
  {
    name: "MITM Module",
    cost: 4000000,
    moduleType: "E-War",
    range: , // Range was blank in source for this item
    description: "This specialized terminal and tools allow your cybersec officer to easily conduct a man-in-the-middle attack to intercept any sort of data from a ship, giving you information about all of a ship's systems.",
    image: "https://placehold.co/100x100/abcdef/ffffff?text=EWar"
  },
  {
    name: "Penetration Module",
    cost: 8000000,
    moduleType: "E-War",
    range: , // Range was blank in source for this item
    description: "This module helps your cybersec officer by giving them tools to penetrate through a system's defences. In bypassing their securi- ty grid, you lower the hostile's shield strength by 21",
    image: "https://placehold.co/100x100/abcdef/ffffff?text=EWar"
  },
  {
    name: "Bridge Module",
    cost: 8000000,
    moduleType: "E-War",
    range: , // Range was blank in source for this item
    description: "If successful, this module will disable the teleport jammer of a ship while this process continues to run.",
    image: "https://placehold.co/100x100/abcdef/ffffff?text=EWar"
  },
  {
    name: "Incident Module",
    cost: 6000000,
    moduleType: "E-War",
    range: , // Range was blank in source for this item
    description: "This module implements a wide array of cyber defense tools to help your cybersec officer, such as network security monitoring frameworks. Attacks are easier to determine and isolate..",
    image: "https://placehold.co/100x100/abcdef/ffffff?text=EWar"
  },
  {
    name: "Efficiency Module",
    cost: 4000000,
    moduleType: "E-War",
    range: , // Range was blank in source for this item
    description: "Installing this in your digital securi- ty room vastly improves the efficiency of digital systems on your ship, reducing your ship's radar cross-section by a significant amount.",
    image: "https://placehold.co/100x100/abcdef/ffffff?text=EWar"
  },
  {
    name: "Presence Module",
    cost: 5000000,
    moduleType: "E-War",
    range: , // Range was blank in source for this item
    description: "Using complex polymorphic code engines and rootkits, this module helps ensure your digital offensive has staying power. It is more difficult for enemies to find and eliminate your attacks.",
    image: "https://placehold.co/100x100/abcdef/ffffff?text=EWar"
  },
  {
    name: "Overflow Module",
    cost: 10000000,
    moduleType: "E-War",
    range: , // Range was blank in source for this item
    description: "If done well, this module can effectively disable up to 2 ship weapons of an enemy ship, or one anti-matter cannon.",
    image: "https://placehold.co/100x100/abcdef/ffffff?text=EWar"
  },
  {
    name: "Security Grid",
    cost: 14000000,
    moduleType: "E-War",
    range: , // Range was blank in source for this item
    description: "Your ship can project its e-war capabilities across all allied ships in a wide range, allowing you to apply defensive modules to more vulnerable ships and even conduct offensives from them.",
    image: "https://placehold.co/100x100/abcdef/ffffff?text=EWar"
  }
];


const rooms = [
    {
        name: "Command Room",
        description: "The central hub for ship operations and command.",
        cost: 5000000,
        consequences: "Increases command efficiency and crew morale.",
        type: "command", // Added type to differentiate
        image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room"
    },
    {
        name: "Crew Quarters Upgrade",
        cost: 1000000,
        description: "All ships have sleeping quarters for your entire crew, but they are cramped and not too comfortable. Upgrade with this if you want more privacy and better comfort. +Does not cost a room slot",
        type: "quarters",
        image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room"
    },
    {
        name: "Officer's Quarters",
        cost: 2000000,
        description: "Comfy, furnished dwellings that can accomodate 1-6 people on a frigate, up to 12 on a destroyer, and 10% of your crew on a cruiser or larger. Keep your important crew members with high morale!",
        type: "quarters",
        image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room"
    },
    {
        name: "Captain's Quarters",
        cost: 5000000,
        description: "It will be a very luxurious suite for you on a frigate or destroyer, and a penthouse on a cruiser or larger.",
        type: "quarters",
        image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room"
    },
    {
        name: "Basic Infirmary",
        cost: 1000000,
        description: "Got a headache? Maybe you need a bandage? Okay, you can do stitches and make-shift broken-bone splints here too, but don't expect much more.",
        type: "infirmary",
        image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room"
    },
    {
        name: "Standard Infirmary",
        cost: 2000000,
        description: "Equipped with decent medical equipment, enough to perform surgeries. Your wounded may live another day, and with a good doctor, your crew's in good hands. *Requires a doctor",
        type: "infirmary",
        image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room"
    },
    {
        name: "Advanced Infirmary",
        cost: 12000000,
        description: "The most advanced medical technology is at your finger tips, including magical space beds that can almost instantaneously repair damaged body parts. *Requires a doctor",
        type: "infirmary",
        image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room"
    },
    {
        name: "Evacuation Room",
        cost: 1000000,
        description: "This will have enough escape pods for your crew and will get them out of your burning wreckage of a ship. They are equipped with survival equipment and can even navigate to the closest safe spot.",
        type: "evacuation",
        image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room"
    },
    {
        name: "Advanced Evacuation",
        cost: 9000000,
        description: "Your escape pods have warp drives built into them and are even moderately armoured with a small shield to protect their inhabitants more effectively. Comes with a sparkling wine bottle in each.",
        type: "evacuation",
        image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room"
    },
    {
        name: "Standard Mess Hall",
        cost: 2000000,
        description: "Monday is burger day, Tuesday is turkey day, Wednesday is spaghetti day, Thursday is... you get the idea. +Can combine with a tavern *Requires a chef",
        type: "messhall",
        image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room"
    },
    {
        name: "Fancy Mess Hall",
        cost: 7000000,
        description: "All of the good crew members can sit with the captain for the day (that's you)! Enjoy mouth-watering exotic and delicious foods. +Can combine with a tavern *Requires a chef",
        type: "messhall",
        image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room"
    },
    {
        name: "Tavern",
        cost: 1000000,
        description: "Sometimes you need a good drink after a long day of hard work. Kick back and relax. Bar food is good too, but not that filling. +Can combine with a mess hall *Requires a chef or bartender",
        type: "tavern",
        image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room"
    },
    {
        name: "Gravity Control Room",
        cost: 2000000,
        description: "All ships come with basic, built-in gravity control, but maybe you want to manipulate it more precisely, and control it for separate rooms in your ship.",
        type: "control",
        image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room"
    },
    {
        name: "Lounge",
        cost: 0, // Free!
        description: "Maybe you don't fancy the fancy stuff. Get a few couches, a coffee table, maybe a TV, and suddenly you have a room to laze around in. +Can combine with a recreational room and an observatory",
        type: "recreational",
        image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room"
    },
    {
        name: "Recreational Room",
        cost: 1000000,
        description: "During times of no action, your crew might get bored. Why not turn a room into a pool, gym, spa, library, mini-golf course, or more? +Can combine with a lounge and an observatory",
        type: "recreational",
        image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room"
    },
    {
        name: "Observatory",
        cost: 2000000,
        description: "You're living amongst the stars, so why not pay attention to them once in awhile? +Can combine with a recreational room and a lounge",
        type: "recreational",
        image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room"
    },
    {
        name: "Laboratory",
        cost: 1000000,
        description: "You might want this if you want to analyze ancient artifacts or other anomalies. Otherwise, enjoy mixing chemicals, running volatile experiments, and other fun things. *Requires a scientist",
        type: "research",
        image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room"
    },
    {
        name: "Terraforming Bay",
        cost: 9000000,
        description: "It takes many years to terraform a planet. This room comes equipped with the means to get started, but It's not cheap. +Can combine with a laboratory *Requires a laboratory",
        type: "industrial",
        image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room"
    },
    {
        name: "Cryosleep Chambers",
        cost: 8000000,
        description: "You may want to go to cryosleep for those really long voyages into unknown space. These chambers ensure you're in good health while you're out cold. *Requires a doctor and scientist",
        type: "medical",
        image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room"
    },
    {
        name: "Ore Processing Facility",
        cost: 3000000,
        description: "With all of the ore you will be dealing with, you wil need a place to process them. +Can combine with a factory wing *Requires a production manager",
        type: "industrial",
        image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room"
    },
    {
        name: "Factory Wing",
        cost: 3000000,
        description: "This factory wing is fitted with heavy machinery, capable of producing things en masse. It can also process scrap metal. +Can combine with an ore processing facility",
        type: "industrial",
        image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room"
    },
    {
        name: "Cargo Space",
        cost: 0, // Free!
        description: "With the blink of an eye, you can turn an empty room into... an empty room. Where else will you keep your excessive space loot? +Can combine with an engineering bay",
        type: "storage",
        image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room"
    },
    {
        name: "Engineering Bay",
        cost: 3000000,
        description: "Need to repair something? Bring it here. It's a mechanic's heaven. +Can combine with a cargo space *Requires a mechanical engineer",
        type: "utility",
        image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room"
    },
    {
        name: "Hypercomms Room",
        cost: 2000000,
        description: "This high-tech room comes with hypercommunications tech, able to send communications across star systems almost instantly. +Can combine with a digital security room",
        type: "communications",
        image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room"
    },
    {
        name: "Digital Security Room",
        cost: 4000000,
        description: "Defend your ship's vulnerable digital systems with top of the line encryption grids. +Can combine with a hypercomms room *Requires a cyber security officer",
        type: "security",
        image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room"
    },
    {
        name: "Arsenal",
        cost: 4000000,
        description: "Maybe you are a gun nut, or have a few on board with you. Keep all of your small arms, here. Comes with all kinds of weaponry fit for your standard soldier's hands.",
        type: "storage",
        image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room"
    },
    {
        name: "Advanced Arsenal",
        cost: 9000000,
        description: "This arsenal comes with charging stations for power armour, if you or your crew have them. It also comes with all sorts of experimental and advanced weaponry.",
        type: "storage",
        image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room"
    },
    {
        name: "Training Room",
        cost: 3000000,
        description: "Give yourself some venting space. Get up close and personal and With this state-of-the-art virtual reality training room, you can emulate almost any hand-to-hand combat situation.",
        type: "recreational",
        image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room"
    },
    {
        name: "Teleporting Platform",
        cost: 5000000,
        description: "beam you and your crew into the enemy ship, or onto the surface of a planet.",
        type: "transport",
        image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room"
    },
    {
        name: "Holding Cells",
        cost: 1000000,
        description: "Maybe you've got some volatile prisoners you need to hold somewhere, or maybe you just want to put Styx on time-out.",
        type: "security",
        image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room"
    },
    {
        name: "Stasis Cell",
        cost: 2000000,
        description: "Got an extremely volatile prisoner or lifeform that you need to contain at all costs? Throw it in the stasis cell to ensure it doesn't do anything you'd regret. Can only hold up to one specimen.",
        type: "security",
        image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room"
    },
    {
        name: "Meat Fridge",
        cost: 3000000,
        description: "Stemcell-grown meat is popular in space-faring vessels. All you have to do is make sure to refill the growing solution and the meat multiplies. Comes in many flavours such as beef, chicken, kanye, etc.",
        type: "food",
        image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room"
    },
    {
        name: "Aquaculture Room",
        cost: 1000000,
        description: "Raise some space fish! While you might get some good eats, you will need to replace the water often... They will need nutrients, however. +Can combine with a hydroponic garden",
        type: "food",
        image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room"
    },
    {
        name: "Hydroponic Garden",
        cost: 1000000,
        description: "Have an in-ship garden by raising plants in water; enjoy the fresh air! unless you have plants for that. +Can combine with an aquaculture room",
        type: "food",
        image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room"
    },
    {
        name: "Secure Vault",
        cost: 2000000,
        description: "Transporting critical material worth hundreds of millions of credits? Maybe you don't want to keep it in your cargo space, or maybe you Some aquaculture might help.... Just don't trust your crew mates. +Counts as a cargo space",
        type: "storage",
        image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room"
    },
    {
        name: "Safe Room",
        cost: 3000000,
        description: "Got invaders in your ship and need a place to hide? Get a safe room... also known as a panic room. It's a hidden compartment in your ship that's hard to find, and comes with full life support. Easily defensible.",
        type: "security",
        image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room"
    },
    {
        name: "Upgraded Ship Security",
        cost: 8000000,
        description: "All ships come with mild in-ship security drones. Perhaps you want to install more robust automated turrets and camera systems? +Does not cost a room slot",
        type: "security",
        image: "https://placehold.co/100x100/ffccaa/ffffff?text=Room"
    }
];

const weapons = [
  {
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
    description: "For ships that can get up close and personal, machine guns offer rapid firepower. Nothing can withstand a hail of high-calibre, metal-shredding bullets.",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Weapon"
  },
  {
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
    description: "Blasters fire orbs of very volatile supercharged particles capable of causing severe damage. However, the projectiles are a little slow, they're very close-ranged weapons.",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Weapon"
  },
  {
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
    description: "Of the three light-class weapons, the light laser lannon is the most accurate and longest-ranged, but is also slightly less damaging than the others. Great against missiles.",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Weapon"
  },
  {
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
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Weapon"
  },
  {
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
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Weapon"
  },
  {
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
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Weapon"
  },
  {
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
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Weapon"
  },
  {
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
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Weapon"
  },
  {
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
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Weapon"
  },
  {
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
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Weapon"
  },
  {
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
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Weapon"
  },
  {
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
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Weapon"
  },
  {
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
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Weapon"
  },
  {
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
    weaponTypes: "Explosive +8 damage vs hull armour *Can be shot down *Limited to 3 per fighter",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Weapon"
  },
  {
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
    weaponTypes: "Kin, energy *Requires a cruiser or larger, or a destroyer spinal mount",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Weapon"
  },
  {
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
    weaponTypes: "Energy +1 damage when focused >2 min *Requires a cruiser or larger, or a destroyer spinal mount",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Weapon"
  },
  {
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
    weaponTypes: "En, blaster *Requires a cruiser or larger, or a destroyer spinal mount",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Weapon"
  },
  {
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
    weaponTypes: "Unique *Costs 2 spinal weapon mounts *Requires a battleship or larger *5 min charge, 10 min cool down",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Weapon"
  }, 
  {
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
    description: "Weapon Type: Energy. *Double damage vs. hull armor. The ionizing energy of the gamma ray laser is more effective against hull armor than the thermal effects of lower frequency lasers. The graser is especially suited for intercepting lightly shielded targets such as missiles and drones.",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Weapon"
  },
  {
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
    description: "Weapon Type: Energy. *Requires a cruiser or larger ship, or a destroyer spinal mount. Recently reverse-engineered from Herald technology, the quantum disruptor acts as the sub-atomic level, breaking matter apart explosively. Triglav deliberately engineered a well-rounded heavy weapon expected to become a standard in cruiser skirmishes.",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Weapon"
  },
  {
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
    description: "Weapon Type: Energy. *Double damage vs. shields. *Can stun targets. *Requires a cruiser or larger ship, or a destroyer spinal mount. Clusters of light ion batteries set in swift-tracking servo mounts, ion arrays are employed as area defense weapons. They were designed to intercept and stun smaller ships so that larger weapons can finish them off. Lately they have seen increasing use on pirate ships seeking to take their prey intact.",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Weapon"
  },
  {
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
    description: "Weapon Type: En. Explosive. *Shield piercing: shields can block only half the damage from this weapon. *Double damage vs. shields. The hellbore is a huge plasma battery that delivers a massive strike of thermal and explosive energies at just the right moment.",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Weapon"
  },
  {
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
    description: "Weapon Type: Energy. *Shield piercing: shields can block only half the damage from this weapon. *Double damage vs. shields. *Stuns targets of the same class or smaller. *Requires a cruiser or larger ship. *Costs two spinal weapon mounts. The phase cannon is a dedicated alpha strike weapon, dealing overpowering electromagnetic and thermal damage that strips away a ship's shields and heavily disrupts its control systems. Follow up attacks on the stunned target are almost always decisive.",
    image: "https://placehold.co/100x100/ff0000/ffffff?text=Weapon"
  },

];

const drones = [
  {
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
    description: "Agile and quick, scout drones are cheap, portable, and expendable. They're great for for basic recon, combat, or point defence. +Comes with a free machine gun *Limited to T1 weapons",
    image: "https://placehold.co/100x100/00ff00/ffffff?text=Drone"
  },
  {
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
    description: "Essentially just high-performance computers strapped to navigation systems, beacon drones relay data communication for an extended range between ships. +Boosts E-War Module range by 2",
    image: "https://placehold.co/100x100/00ff00/ffffff?text=Drone"
  },
  {
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
    description: "These are more suited for straight up combat than scout drones. +Comes with a free T1 weapon *Limited to T1 and T2 weapons *T2 weapons can only be put on spinal weapon mounts",
    image: "https://placehold.co/100x100/00ff00/ffffff?text=Drone"
  },
  {
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
    description: "Brawler drones are meant to take hits and provide great firepower. +Comes with a free T2 weapon *Limited to T1 and T2 weapons *T2 weapons can only be put on spinal weapon mounts",
    image: "https://placehold.co/100x100/00ff00/ffffff?text=Drone"
  },
  {
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
    description: "+Can cloak for up to 5 minutes +Comes with a free T2 weapon *Limited to T1 and T2 weapons, and tesla overchargers *T2 weapons can only be put on spinal weapon mounts",
    image: "https://placehold.co/100x100/00ff00/ffffff?text=Drone"
  },
  {
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
    description: "Large but equipped to deliver hull-breaching blows. +Comes with a free torpedo silo *Limited to T3 and T1 weapons *T3 weapons can only be put on spinal mounts",
    image: "https://placehold.co/100x100/00ff00/ffffff?text=Drone"
  },
  {
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
    description: "A drone that uses mining lasers to mine asteroids, and can carry the ore to your ship. +Comes with a free mining harvester (MK1 crystal) *Limited to industrial modules",
    image: "https://placehold.co/100x100/00ff00/ffffff?text=Drone"
  },
  {
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
    description: "A special drone that projects your ship's shield capacity. +Can project a shield that covers 60m^2 and has 1/3 the shield strength of your main ship *Shield lasts 5 min",
    image: "https://placehold.co/100x100/00ff00/ffffff?text=Drone"
  },
  {
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
    description: "These helpful repair drones will do a superb job at making sure your ship's hull is in tact. While these are very efficient models, they are not well protected. +Can repair hull armour",
    image: "https://placehold.co/100x100/00ff00/ffffff?text=Drone"
  },
  {
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
    description: "Better protected and mobile than standard repair drones, these drones can repair in the midst of combat. They are less efficient, but easy to rebuild or replace. +Can repair hull armour",
    image: "https://placehold.co/100x100/00ff00/ffffff?text=Drone"
  },
  {
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
    description: "Equipped with top of the line. analyzing equipment, these probes are perfect for sending into the unknown for discovery. +Has a built-in tractor beam and composition scanner",
    image: "https://placehold.co/100x100/00ff00/ffffff?text=Drone"
  },
  {
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
    description: "If you plan on engaging multiple enemy ships and you want to keep them all from escaping, loading up on lasso drones is a good idea. +Has a built-in warp jammer",
    image: "https://placehold.co/100x100/00ff00/ffffff?text=Drone"
  }

];

function createShip() { //initialize ship object
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
      choiceList: [
        { subsystemChoice: [] }, { roomChoice: [] },
        { industrialChoice: [] }, { energyChoice: [] },
        { eWarChoice: [] }, { spinalChoice: [] },
        { broadSideChoice: [] }, { pointDefenseChoice: [] },
        { hangarChoice: [] }, { aiChoice:  },
        { commandMods:  },
      ]
    };

    return newShip;
}

function deleteShip(shipID, map) { //delete ship object
    // Logic to delete a ship by its ID
    map.delete(shipID); // Set the ship object to null to simulate deletion
    console.log(`Ship with ID: ${shipID} has been deleted.`);
    return map; // Return null to indicate the ship has been deleted
}

function addHull(shipObject, hullData) {
    shipObject.hull = hullData;
}   

function addWeapon(shipObject, weaponData) {
    if(weaponData.type.includes('spinal')) { //if the weapon can be slotted into a spinal mount
        if(shipObject.spinalWeapons.length < shipObject.hull.spinalMount ) { //if the number of spinal weapons on the ship is less than the number of spinal mounts
            shipObject.spinalWeapons.push(weaponData); //add the weapon to the spinal weapons array
            return;
        } else if (shipObject.hull.type === 'frigate' || shipObject.hull.type === 'fighter') { 
            console.log("No available spinal mounts for this weapon.");
            return;
        } else if (shipObject.broadsideWeapons.length < shipObject.hull.broadsideMount) { //if there exists a broadside mount, we can add the weapon
            if (shipObject.hull.type === 'destroyer') { return;}
            shipObject.broadsideWeapons.push(weaponData);
            return;
        } else {
            console.log("No available mounts for this weapon.");
            return;
        }
    } else if (weaponData.type.includes('broadside')) { //if the weapon can be slotted into a broadside mount
        if(shipObject.broadsideWeapons.length < shipObject.hull.broadsideMount) { //if the number of broadside weapons on the ship is less than the number of broadside mounts
            shipObject.broadsideWeapons.push(weaponData); //add the weapon to the broadside weapons array
            return;
        } else {
            console.log("No available broadside mounts for this weapon.");
            return;
        }
    } else {
        if(shipObject.pointDefenceWeapons.length < shipObject.hull.pointDefenceMount) { //if the number of point defence weapons on the ship is less than the number of point defence mounts
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
    } else if (energyData.type === 'solar' && !shipObject.energyGen.includes('solar')) {
        shipObject.energyGen.push(energyData);
         //add the solar energy generator to the energy generators array
    } else {
        console.log("No available energy generator slots for this energy generator.");
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
    if (shipObject.hull.type === 'dreadnought') {
        console.log("Dreadnoughts cannot have hull mods.");
        return;
    } else {
        shipObject.hullMods.push(hullModData); //add the hull mod to the hull mods array
    }
}

function addToHangar (shipObject, drone) {
    if (shipObject.hangar.length < shipObject.hull.hangarSpace) {
        shipObject.hangar.push(drone); //add the drone to the hangars array
    } else {
        console.log("No available hangar space for this drone.");
    }
}

function addShipEquipment (shipObject, equipmentData) { //accepts ewar & industrial equipment
    shipObject.shipEquipment.push(equipmentData);
}

function addRoom(shipObject, roomData) {
    if (shipObject.rooms.length < shipObject.hull.extraRooms) {
        shipObject.rooms.push(roomData); //add the room to the rooms array
    } else {
        console.log("No available room slots for this room.");
    }
    switch (roomData.type) {
        case 'tavern':
            if (shipObject.rooms.includes('standardMessHall')||shipObject.rooms.includes('luxuryMessHall')) {
                shipObject.hull.extraRooms += 1; //if the ship has a mess hall, we can add a tavern
            }
            break;
        case 'luxuryMessHall':
        case 'standardMessHall':
            if (shipObject.rooms.includes('tavern')) {
                shipObject.hull.extraRooms += 1; //if the ship has a tavern, we can add a mess hall
            }
            break;
        case 'lounge':
        case 'recreation':
        case 'observatory':
            if (shipObject.rooms.includes('lounge')||shipObject.rooms.includes('recreation')||shipObject.rooms.includes('observatory')) {
                shipObject.hull.extraRooms += 1; //if the ship has a lounge or recreation room, we can add an observatory
            }
            break;
        case 'terraformingBay':
        case 'laboratory':
            if (shipObject.rooms.includes('laboratory')) {
                shipObject.hull.extraRooms += 1; //if the ship has a terraforming bay, we can add another one
            }
            break;
        case 'oreProcessing':
        case 'factory':
            if (shipObject.rooms.includes('oreProcessing')||shipObject.rooms.includes('factory')) {
                shipObject.hull.extraRooms += 1; //if the ship has an ore processing or factory, we can add another one
            }
            break;
        case 'engineeringBay':
        case 'cargoSpace': 
            if (shipObject.rooms.includes('engineeringBay')||shipObject.rooms.includes('cargoSpace')) {
                shipObject.hull.extraRooms += 1; //if the ship has an engineering bay or cargo space, we can add another one
            }
            break;
        case 'hypercomms':
        case 'digitalSecurity':
            if (shipObject.rooms.includes('hypercomms')||shipObject.rooms.includes('digitalSecurity')) {
                shipObject.hull.extraRooms += 1; //if the ship has a hypercomms or digital security, we can add another one
            }
            break;
        case 'aquaCulture':
        case 'hydroponics':
            if (shipObject.rooms.includes('aquaCulture')||shipObject.rooms.includes('hydroponics')) {
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
    const targetDivs = sectionToReset.querySelectorAll('.choice');

    // Iterate over each div and add the 'active' class
    targetDivs.forEach(choice => {
      choice.classList.remove('active');
    });
  } else {
    console.error("Element with ID 'section-hull' not found.");
  }
}

function renderShipConfigUI(shipId) {
  // Reset all relevant configuration UI sections
  resetShipConfigUI('section-hull');
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
      hullElement.classList.add('active');
      console.log(`Activated hull UI for: ${hullName}`);
    } else {
      console.warn(`Hull UI element not found for ID: ${hullChoiceId}. Make sure it's populated.`);
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
    const shipNameDiv = shipDiv.querySelector('.ship-name');
    if (shipNameDiv) {
      shipNameDiv.focus(); // Focus on the ship name div to allow editing
      //shipNameDiv.addEventListener('blur', () =>
    } else {
      console.error(`Ship name display div not found within ship ID "${shipId}".`);
    }
  }
}