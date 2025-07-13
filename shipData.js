// This file contains data for various ship hulls available in the game.
// The structure is based on the existing shipData.js forma
const hulls = [
    // Fighters from 'ship Data.docx'
    {
        name: "S92-TMC",
        manufacturer: "Hammerhead Ind.",
        cost: 7000000,
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
        cost: 9000000,
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
        cost: 9000000, // Corrected from 10m in original shipData.js to 9m as per docx
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
        cost: 11000000,
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
        cost: 25000000,
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
        cost: 30000000,
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
        cost: 35000000,
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
        cost: 50000000,
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
        cost: 60000000,
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
        cost: 70000000,
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
        cost: 90000000,
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
        cost: 100000000,
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
        cost: 110000000,
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
        cost: 150000000,
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
        cost: 160000000,
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
        cost: 170000000,
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
        cost: 200000000,
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
        cost: 120000000,
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
        cost: 300000000,
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
        cost: 340000000,
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
        cost: 15000000, // "15m"
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
        cost: 20000000, // "20m"
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
        cost: 30000000, // "30m"
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
        cost: 36000000, // "36m"
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
        cost: 16000000, // "16m"
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
        cost: 19000000, // "19m"
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
        cost: 20000000, // "20m"
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
        cost: 28000000, // "28m"
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
        cost: 45000000, // "45m"
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
        cost: 74000000, // "74m"
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
        cost: 40000000, // "40m"
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
        cost: 49000000, // "49m"
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
        cost: 64000000, // "64m"
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
        cost: 99000000, // "99m"
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
        cost: 80000000, // "80m"
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
        cost: 120000000, // "120m"
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
        cost: 224000000, // "224m"
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
        cost: 96000000, // "96m, Unique" - taking 96m
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
        cost: 220000000, // "220m"
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
        cost: 380000000, // "380m"
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
        cost: 380000000, // "380m"
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
        cost: 0, // "Special, Unique" - defaulting to 0
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
