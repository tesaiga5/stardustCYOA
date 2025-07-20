// This file contains data for various ship hulls available in the game.

export {hulls, subSystems, mods, industrial, eWar, rooms, weapons, drones,
        createShip, deleteShip, addHull, addWeapon, addAI,addEnergyGen, addShield, 
        addCommandMod, addHullMod, addToHangar, addShipEquipment, addRoom,
}

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
        image: '/Images/Beatrice R&D.webp', // Using the same placeholder image
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
        image: '/Images/Beatrice R&D.webp',
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
        image: '/Images/Beatrice R&D.webp',
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
        image: '/Images/Beatrice R&D.webp',
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
        image: '/Images/Beatrice R&D.webp',
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
        image: '/Images/Beatrice R&D.webp',
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
        image: '/Images/Beatrice R&D.webp',
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
        image: '/Images/Beatrice R&D.webp',
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
        image: '/Images/Beatrice R&D.webp',
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
        image: '/Images/Beatrice R&D.webp',
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
        image: '/Images/Beatrice R&D.webp',
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
        image: '/Images/Beatrice R&D.webp',
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
        image: '/Images/Beatrice R&D.webp',
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
        image: '/Images/Beatrice R&D.webp',
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
        image: '/Images/Beatrice R&D.webp',
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
        image: '/Images/Beatrice R&D.webp',
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
        image: '/Images/Beatrice R&D.webp',
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
        image: '/Images/Beatrice R&D.webp',
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
        image: '/Images/Beatrice R&D.webp',
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
        image: '/Images/Beatrice R&D.webp',
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
        image: '/Images/Beatrice R&D.webp',
    },
    {
        name: "X66 \"Omen\"",
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
        image: '/Images/Beatrice R&D.webp',
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
        image: '/Images/Beatrice R&D.webp',
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
        image: '/Images/Beatrice R&D.webp',
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
        image: '/Images/Beatrice R&D.webp',
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
        image: '/Images/Beatrice R&D.webp',
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
        image: '/Images/Beatrice R&D.webp',
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
        image: '/Images/Beatrice R&D.webp',
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
        image: '/Images/Beatrice R&D.webp',
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
        image: '/Images/Beatrice R&D.webp',
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
        image: '/Images/Beatrice R&D.webp',
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
        image: '/Images/Beatrice R&D.webp',
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
        image: '/Images/Beatrice R&D.webp',
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
        image: '/Images/Beatrice R&D.webp',
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
        image: '/Images/Beatrice R&D.webp',
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
        image: '/Images/Beatrice R&D.webp',
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
        image: '/Images/Beatrice R&D.webp',
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
        image: '/Images/Beatrice R&D.webp',
    },
    {
        name: "X65 \"Odysseus\"",
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
        image: '/Images/Beatrice R&D.webp',
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
        image: '/Images/Beatrice R&D.D.webp',
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
        image: '/Images/Beatrice R&D.webp',
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
        image: '/Images/Beatrice R&D.webp',
    },
];

const subSystems = [
    {
        name: "AI",
        manufacturer: "Beatrice R&D",
        role: "Onboard AI",
        description: "Allows the ship to travel faster than light.",
        imageSrc: "/Images/Beatrice R&D.webp",
        
    },
    {
        name: "Energy",
        cost: 1000000,
        energyOutput: 5,
        chargeDuration: 10,
        auxDescription: "Generates energy for the ship's systems.",
        description: "Protects the ship from incoming fire.",
        imageSrc: "/Images/Beatrice R&D.webp",
    },
    {
        name: "Shield",
        cost: 5000000,
        shieldStrength: 10,
        description: "Maintains a habitable environment for the crew.",
        imageSrc: "/Images/Beatrice R&D.webp",
    },
];

const mods = [
    {
        name: "Command Mod",
        manufacturer: "Beatrice R&D",
        cost: 5000000,
        specialAbility: "None",
        cooldown: "passive",
        range: "self",
        description: "Enhances the ship's command and control capabilities.",
        imageSrc: "/Images/Beatrice R&D.webp",
    },
    {
        name: "Hull Mod",
        manufacturer: "Beatrice R&D",
        cost: 3000000,
        effect: "passive",
        description: "Reinforces the ship's hull, providing additional protection against damage.",
    }
];

const industrial = [
  {
    name: "Mining Harvester",
    cost: 2000000,
    moduleType: "Industrial",
    description: "This harvester uses infrared light to separate common ores from asteroids. It has its own unique built-in tractor beam to bring the ore to your ship while mining. +Can mine low-grade ore *Uses a broadside or point-defence turret mount *Requires ore processing facility"
  },
  {
    name: "MK2 Frequency Lens",
    cost: 1000000,
    moduleType: "Industrial",
    description: "You can replace the lens of a mining harvester with this lens that uses a smaller green laser to mine more complex ores. Lenses can be changed on the fly. +Can switch with mining harvester lenses to mine mid-grade ore *Requires a mining harvester"
  },
  {
    name: "MK3 Frequency Lens",
    cost: 1000000,
    moduleType: "Industrial",
    description: "The most precise and powerful lens, the MK3 is capable of pin-pointing the most valuable ore from asteroids. It's inefficient for mining lower grade ores, however. +Can switch with mining harvester lenses to mine high-grade ore *Requires a mining harvester"
  },
  {
    name: "Salvage Harvester",
    cost: 3000000,
    moduleType: "Industrial",
    description: "Using similar technology to the mining harvesters, this laser is specialized in taking apart machines. Perfect for salvaging debris or ship wrecks. It also comes with its own tractor beam. *Uses a broadside or point-defence turret mount *Requires a cargo space room"
  },
  {
    name: "Tractor Beam",
    cost: 3000000,
    moduleType: "Logistics",
    description: "A universal tractor beam that harnesses light to attract or push matter not limited to ore or scrap. It's useful for retrieving free- floating objects, or that one maintenance crew member who accidentally cut his safety wire. *Can only be bought once per ship *Cannot target other active ships"
  },
  {
    name: "Composition Scanner",
    cost: 4000000,
    moduleType: "Logistics",
    description: "This very complex module can scan objects and bring back very precise results. It can detect ore/mineral compositions in asteroids, energy sources, electri- cal activity, and even life forms. It can also scan other ships to give you intel on their systems. *Can only be bought once per ship"
  }
];


const eWar = [
  {
    name: "Poisoning Module",
    cost: 7000000,
    moduleType: "E-War",
    range: "000000886",
    description: "This module can be used to infect a hostile ship's weapons, lowering all of their weapon's tracking, rate of fire, and range effectiveness by 1."
  },
  {
    name: "Honey Pot Module",
    cost: 3000000,
    moduleType: "E-War",
    range: "", // Range was blank in source for this item
    description: "Set up a fake scapegoat server on your vessel that looks appealing to hostile hackers, and use it to monitor their every move while they try to attack your systems in futile."
  },
  {
    name: "Warp Jammer",
    cost: 6000000,
    moduleType: "E-War",
    range: "", // Range was blank in source for this item
    description: "You can point this module at a hostile ship to effectively disable their warp drive, giving them no chance to escape."
  },
  {
    name: "Comm Scrambler",
    cost: 5000000,
    moduleType: "E-War",
    range: "", // Range was blank in source for this item
    description: "Pointing this at a hostile ship will scramble their comms, cutting off their outside and inside communi- cations if done well."
  },
  {
    name: "MITM Module",
    cost: 4000000,
    moduleType: "E-War",
    range: "", // Range was blank in source for this item
    description: "This specialized terminal and tools allow your cybersec officer to easily conduct a man-in-the-middle attack to intercept any sort of data from a ship, giving you information about all of a ship's systems."
  },
  {
    name: "Penetration Module",
    cost: 8000000,
    moduleType: "E-War",
    range: "", // Range was blank in source for this item
    description: "This module helps your cybersec officer by giving them tools to penetrate through a system's defences. In bypassing their securi- ty grid, you lower the hostile's shield strength by 21"
  },
  {
    name: "Bridge Module",
    cost: 8000000,
    moduleType: "E-War",
    range: "", // Range was blank in source for this item
    description: "If successful, this module will disable the teleport jammer of a ship while this process continues to run."
  },
  {
    name: "Incident Module",
    cost: 6000000,
    moduleType: "E-War",
    range: "", // Range was blank in source for this item
    description: "This module implements a wide array of cyber defense tools to help your cybersec officer, such as network security monitoring frameworks. Attacks are easier to determine and isolate.."
  },
  {
    name: "Efficiency Module",
    cost: 4000000,
    moduleType: "E-War",
    range: "", // Range was blank in source for this item
    description: "Installing this in your digital securi- ty room vastly improves the efficiency of digital systems on your ship, reducing your ship's radar cross-section by a significant amount."
  },
  {
    name: "Presence Module",
    cost: 5000000,
    moduleType: "E-War",
    range: "", // Range was blank in source for this item
    description: "Using complex polymorphic code engines and rootkits, this module helps ensure your digital offensive has staying power. It is more difficult for enemies to find and eliminate your attacks."
  },
  {
    name: "Overflow Module",
    cost: 10000000,
    moduleType: "E-War",
    range: "", // Range was blank in source for this item
    description: "If done well, this module can effectively disable up to 2 ship weapons of an enemy ship, or one anti-matter cannon."
  },
  {
    name: "Security Grid",
    cost: 14000000,
    moduleType: "E-War",
    range: "", // Range was blank in source for this item
    description: "Your ship can project its e-war capabilities across all allied ships in a wide range, allowing you to apply defensive modules to more vulnerable ships and even conduct offensives from them."
  }
];


const rooms = [
    {
        name: "Command Room",
        description: "The central hub for ship operations and command.",
        cost: 5000000,
        consequences: "Increases command efficiency and crew morale.",
        type: "tavern",
        imageSrc: "/Images/Beatrice R&D.webp",
    }
];

const weapons = [
  {
    name: "Machine Gun",
    cost: 1000000,
    secondaryCost: 500000,
    energyUse: "",
    tier: 1,
    damagePerVolley: "",
    rateOfFire: "",
    accuracy: "",
    range: "",
    projectileVelocity: "",
    tracking: "",
    weaponTypes: "Kinetic",
    description: "For ships that can get up close and personal, machine guns offer rapid firepower. Nothing can withstand a hail of high-calibre, metal-shredding bullets."
  },
  {
    name: "Light Particle Blaster",
    cost: 1000000,
    secondaryCost: 500000,
    energyUse: "",
    tier: 1,
    damagePerVolley: "",
    rateOfFire: "",
    accuracy: "",
    range: "",
    projectileVelocity: "",
    tracking: "",
    weaponTypes: "Blaster",
    description: "Blasters fire orbs of very volatile supercharged particles capable of causing severe damage. However, the projectiles are a little slow, they're very close-ranged weapons."
  },
  {
    name: "Light Laser Cannon",
    cost: 1000000,
    secondaryCost: 500000,
    energyUse: "",
    tier: 1,
    damagePerVolley: "",
    rateOfFire: "",
    accuracy: "",
    range: "",
    projectileVelocity: "",
    tracking: "",
    weaponTypes: "Energy",
    description: "Of the three light-class weapons, the light laser lannon is the most accurate and longest-ranged, but is also slightly less damaging than the others. Great against missiles."
  },
  {
    name: "Missile Pod",
    cost: 2000000,
    secondaryCost: 1000000,
    energyUse: "",
    tier: 1,
    damagePerVolley: "",
    rateOfFire: "",
    accuracy: "",
    range: "",
    projectileVelocity: "",
    tracking: "",
    weaponTypes: "Explosive *Can be shot down",
    description: "These small missile launchers are fit for smaller craft, but can still deliver a hard-hitting payload of explosive warheads."
  },
  {
    name: "Flak Cannon",
    cost: 2000000,
    secondaryCost: 1000000,
    energyUse: "",
    tier: 1,
    damagePerVolley: "",
    rateOfFire: "",
    accuracy: "",
    range: "",
    projectileVelocity: "",
    tracking: "",
    weaponTypes: "Kinetic +1 damage vs drones, fighters",
    description: "While not that damaging against larger ships, you may need something to take care of those swarms of drones or fighters."
  },
  {
    name: "Auto Cannon",
    cost: 2000000,
    secondaryCost: 1000000,
    energyUse: "",
    tier: 1,
    damagePerVolley: "",
    rateOfFire: "",
    accuracy: "",
    range: "",
    projectileVelocity: "",
    tracking: "",
    weaponTypes: "Kinetic",
    description: "Auto cannons use higher calibre bullets and have a longer effective range than machine guns. They are larger, and thus have slightly more trouble tracking."
  },
  {
    name: "Artillery Cannon",
    cost: 3000000,
    secondaryCost: 1500000,
    energyUse: "",
    tier: 2,
    damagePerVolley: "",
    rateOfFire: "",
    accuracy: "",
    range: "",
    projectileVelocity: "",
    tracking: "",
    weaponTypes: "Kin, explosive +1 damage vs hull armour",
    description: "Artillery cannons deliver devastating damage to anything they fire at. Recoil of successive shots hurt their accuracy, however."
  },
  {
    name: "Heavy Particle Blaster",
    cost: 3000000,
    secondaryCost: 1500000,
    energyUse: "",
    tier: 2,
    damagePerVolley: "",
    rateOfFire: "",
    accuracy: "",
    range: "",
    projectileVelocity: "",
    tracking: "",
    weaponTypes: "Blaster",
    description: "More fit for ships of larger sizes, heavy particle blasters offer insane amounts of damage up close, perfect for ships that can close the distance easily."
  },
  {
    name: "Mana Blaster",
    cost: 4000000,
    secondaryCost: 2000000,
    energyUse: "",
    tier: 2,
    damagePerVolley: "",
    rateOfFire: "",
    accuracy: "",
    range: "",
    projectileVelocity: "",
    tracking: "",
    weaponTypes: "Blaster +1 damage with a mana core",
    description: "Mana blasters work at the same principle as particle blasters, but fire dangerous mana instead. While even slower, they hit hard."
  },
  {
    name: "Heavy Laser Cannon",
    cost: 4000000,
    secondaryCost: 2000000,
    energyUse: "",
    tier: 2,
    damagePerVolley: "",
    rateOfFire: "",
    accuracy: "",
    range: "",
    projectileVelocity: "",
    tracking: "",
    weaponTypes: "Energy +1 damage when focused >2 min",
    description: "Heavy laser cannons excel at medium-to-long range encounters, delivering consistent, intensifying damage-per-second."
  },
  {
    name: "Rail Gun",
    cost: 4000000,
    secondaryCost: 2000000,
    energyUse: "",
    tier: 2,
    damagePerVolley: "",
    rateOfFire: "",
    accuracy: "",
    range: "",
    projectileVelocity: "",
    tracking: "",
    weaponTypes: "Kin, energy",
    description: "Rail guns are for ships that want to keep engagements at long ranges and want accurate, unprecedented piercing power. However, they suffer up close with poor tracking."
  },
  {
    name: "Missile Launcher",
    cost: 5000000,
    secondaryCost: 2000000,
    energyUse: "",
    tier: 2,
    damagePerVolley: "",
    rateOfFire: "",
    accuracy: "",
    range: "",
    projectileVelocity: "",
    tracking: "",
    weaponTypes: "Explosive *Can be shot down",
    description: "Missile launchers unleash torrents of fast and agile missiles, perfect against fast targets or larger targets when fired en masse."
  },
  {
    name: "Tesla Overcharger",
    cost: 6000000,
    secondaryCost: 4000000,
    energyUse: "",
    tier: 3,
    damagePerVolley: "",
    rateOfFire: "",
    accuracy: "",
    range: "",
    projectileVelocity: "",
    tracking: "",
    weaponTypes: "Energy +6 damage vs shields +Can stun targets",
    description: "The Overcharger shoots super-charged bolts of lightning. While this will only do minor damage to a ship hull, it is exceptionally good against shields and also a ship's electrical systems."
  },
  {
    name: "Torpedo Silo",
    cost: 6000000,
    secondaryCost: 4000000,
    energyUse: "",
    tier: 3,
    damagePerVolley: "",
    rateOfFire: "",
    accuracy: "",
    range: "",
    projectileVelocity: "",
    tracking: "",
    weaponTypes: "Explosive +8 damage vs hull armour *Can be shot down *Limited to 3 per fighter",
    description: "They're slow, bulky and hard to load, but damn if they don't cause explosions. Torpedos are much larger than standard missiles, but don't track as well. However, that doesn't matter if the target is slow."
  },
  {
    name: "Ragefire Rail Gun",
    cost: 8000000,
    secondaryCost: 4000000,
    energyUse: "",
    tier: 3,
    damagePerVolley: "",
    rateOfFire: "",
    accuracy: "",
    range: "",
    projectileVelocity: "",
    tracking: "",
    weaponTypes: "Kin, energy *Requires a cruiser or larger, or a destroyer spinal mount",
    description: "The invention of the Ragefire is credited towards the Talons, although Triglav stole its schematics and called it their own. As the ultimate sniping weapon, a well-aimed Ragefire volley is bound to cause destructive havoc."
  },
  {
    name: "Tachyon Laser Cannon",
    cost: 6000000,
    secondaryCost: 4000000,
    energyUse: "",
    tier: 3,
    damagePerVolley: "",
    rateOfFire: "",
    accuracy: "",
    range: "",
    projectileVelocity: "",
    tracking: "",
    weaponTypes: "Energy +1 damage when focused >2 min *Requires a cruiser or larger, or a destroyer spinal mount",
    description: "The epitome of laser technology, These laser cannons utilize special diodes that can channel tachyon particles, constantly moving faster than light. They carry deadly radiation, destroying anything in its way."
  },
  {
    name: "Pulse Beam Cannon",
    cost: 8000000,
    secondaryCost: 4000000,
    energyUse: "",
    tier: 3,
    damagePerVolley: "",
    rateOfFire: "",
    accuracy: "",
    range: "",
    projectileVelocity: "",
    tracking: "",
    weaponTypes: "En, blaster *Requires a cruiser or larger, or a destroyer spinal mount",
    description: "Combining the hard hits from a blaster with the long range and accuracy of a laser cannon, the pulse beam cannon fires deadly rays of super-heated particles. However, they have a hard time tracking smaller targets."
  },
  {
    name: "Anti-Matter Cannon",
    cost: 60000000,
    secondaryCost: 30000000,
    energyUse: "",
    tier: 4,
    damagePerVolley: "",
    rateOfFire: "",
    accuracy: "",
    range: "",
    projectileVelocity: "",
    tracking: "",
    weaponTypes: "Unique *Costs 2 spinal weapon mounts *Requires a battleship or larger *5 min charge, 10 min cool down",
    description: "This gun is so massive, only the largest ships can fit it. Thus, to aim It, you must point your entire ship to your target. The ensuing beam of destruction is powerful enough to obliterate the largest of ships."
  }
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
    description: "Agile and quick, scout drones are cheap, portable, and expendable. They're great for for basic recon, combat, or point defence. +Comes with a free machine gun *Limited to T1 weapons"
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
    description: "Essentially just high-performance computers strapped to navigation systems, beacon drones relay data communication for an extended range between ships. +Boosts E-War Module range by 2"
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
    description: "These are more suited for straight up combat than scout drones. +Comes with a free T1 weapon *Limited to T1 and T2 weapons *T2 weapons can only be put on spinal weapon mounts"
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
    description: "Brawler drones are meant to take hits and provide great firepower. +Comes with a free T2 weapon *Limited to T1 and T2 weapons *T2 weapons can only be put on spinal weapon mounts"
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
    description: "+Can cloak for up to 5 minutes +Comes with a free T2 weapon *Limited to T1 and T2 weapons, and tesla overchargers *T2 weapons can only be put on spinal weapon mounts"
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
    description: "Large but equipped to deliver hull-breaching blows. +Comes with a free torpedo silo *Limited to T3 and T1 weapons *T3 weapons can only be put on spinal mounts"
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
    description: "A drone that uses mining lasers to mine asteroids, and can carry the ore to your ship. +Comes with a free mining harvester (MK1 crystal) *Limited to industrial modules"
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
    description: "A special drone that projects your ship's shield capacity. +Can project a shield that covers 60m^2 and has 1/3 the shield strength of your main ship *Shield lasts 5 min"
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
    description: "These helpful repair drones will do a superb job at making sure your ship's hull is in tact. While these are very efficient models, they are not well protected. +Can repair hull armour"
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
    description: "Better protected and mobile than standard repair drones, these drones can repair in the midst of combat. They are less efficient, but easy to rebuild or replace. +Can repair hull armour"
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
    description: "Equipped with top of the line. analyzing equipment, these probes are perfect for sending into the unknown for discovery. +Has a built-in tractor beam and composition scanner"
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
    description: "If you plan on engaging multiple enemy ships and you want to keep them all from escaping, loading up on lasso drones is a good idea. +Has a built-in warp jammer"
  }

];

function createShip() { //initialize ship object
    // Basic validation to ensure inputs are numbers

    // You can add more properties to the ship object here as needed,
    // such as a unique ID, name, health, cargo capacity, etc.
    const newShip = {
        spinalMount: 0, 
      broadSideMount: 0, 
      pointDefenseMount: 0, 
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
        { hangarChoice: [] }, { aiChoice: "" },
        { commandMods: "" },
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