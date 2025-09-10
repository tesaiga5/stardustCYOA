const drones = [
    {
        name: "Wasp Drone",
        cost: 1000000,
        hangarSpace: 0.5,
        spinalWeaponMounts: 0,
        broadsideTurretMounts: 0,
        pointDefenseMounts: 1,
        navigation: "21/25",
        hullArmour: 1,
        shieldDefence: 2,
        length: "2m",
        notes: [
            "Comes with a free machine gun",
            "Limited to T1 weapons"
        ],
        description: "Agile and quick, scout drones are cheap, portable, and expendable. They're great for for basic recon, combat, or point defense.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Wasp+Drone"
    },
    {
        name: "Foehammer MDS",
        cost: 2000000,
        hangarSpace: 1,
        pointDefenseMounts: 0,
        broadsideTurretMounts: 2,
        hullArmour: 2,
        hullIntegrity: 20,
        length: "4m",
        notes: [
            "Weapon size modifier: x2",
            "Comes with free hull and missile kit.",
            "Munitions must be replenished at another ship after each volley"
        ],
        description: "Long-range offense is what the Foehammer Missile Delivery System excels at. It is designed to hit large battleship grade missiles or dreadnoughts and tear them apart. It also uses its high-speed missiles to get close to the target, allowing the drone to strike the enemy fleet with a powerful barrage of anti-matter charges. The missiles are capable of penetrating most shields and armor. The drone has a short-range laser that can be used to tear apart the enemy fleet. However, it can only fire once and then must be reloaded at a nearby ship. The laser is powered by a large capacitor, and it is a one-shot weapon. It has a long reload time. The drone has a limited number of missiles, and they are not powerful enough to destroy a large ship.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Foehammer+MDS"
    },
    {
        name: "Omni Drone",
        cost: 4000000,
        hangarSpace: 1,
        pointDefenseMounts: 1,
        broadsideTurretMounts: 0,
        hullArmour: 0,
        hullIntegrity: 18,
        length: "6m",
        notes: [
            "May mount one hull module available",
            "Limited to T1 weapons",
            "Can repair hull armor"
        ],
        description: "This advanced drone is designed for reconnaissance and support roles. Its primary function is to provide an omnidirectional view of the battlefield, allowing it to provide its commander with real-time intelligence on enemy positions, movements, and tactics. It is also capable of repairing its hull armor, a feature that is essential for a drone that is constantly in harm's way. The Omni Drone is a highly versatile drone, and it can be used for a variety of tasks, including scouting, reconnaissance, and combat support. It is also highly effective in a team environment, and it can be used to provide its commander with real-time intelligence on enemy positions, movements, and tactics.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Omni+Drone"
    },
    {
        name: "Harrower Drone",
        cost: 6000000,
        hangarSpace: 2,
        pointDefenseMounts: 2,
        broadsideTurretMounts: 2,
        hullArmour: 2,
        hullIntegrity: 25,
        length: "12m",
        notes: [
            "May mount one command module",
            "Comes with free T2 weapons",
            "Limited to T1 and T2 weapons",
            "x2 weapons restricted to spinal mounts"
        ],
        description: "This highly advanced drone is designed for combat and support roles. Its primary function is to provide its commander with a powerful and versatile weapon platform. It is capable of a variety of tasks, including combat, support, and reconnaissance. It can be used to engage enemy ships, or it can be used to provide its commander with real-time intelligence on enemy positions, movements, and tactics. It is also highly effective in a team environment, and it can be used to provide its commander with real-time intelligence on enemy positions, movements, and tactics.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Harrower+Drone"
    },
    {
        name: "Scout Drone",
        cost: 1000000,
        hangarSpace: 0.5,
        spinalWeaponMounts: 0,
        broadsideTurretMounts: 0,
        pointDefenseMounts: 1,
        navigation: "21/25",
        hullArmour: 1,
        shieldDefence: 2,
        length: "2m",
        notes: [
            "Comes with a free machine gun",
            "Limited to T1 weapons"
        ],
        description: "Agile and quick, scout drones are cheap, portable, and expendable. They're great for for basic recon, combat, or point defense.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Scout+Drone"
    },
    {
        name: "Beacon Drone",
        cost: 2000000,
        hangarSpace: 0.5,
        spinalWeaponMounts: 0,
        broadsideTurretMounts: 0,
        pointDefenseMounts: 1,
        navigation: "20/25",
        hullArmour: 4,
        shieldDefence: 15,
        length: "4m",
        notes: [
            "Boosts E-War Module Range by 2"
        ],
        description: "Essentially just high-performance computers strapped to navigation systems, beacon drones relay data communication for an extended range between ships.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Beacon+Drone"
    },
    {
        name: "Combat Drone",
        cost: 2000000,
        hangarSpace: 1,
        spinalWeaponMounts: 1,
        broadsideTurretMounts: 0,
        pointDefenseMounts: 1,
        navigation: "19/25",
        hullArmour: 5,
        shieldDefence: 2,
        length: "6m",
        notes: [
            "Comes with a free T1 weapon",
            "Limited to T1 and T2 weapons"
        ],
        description: "More suited for straight up combat than scout drones, combat drones still push for great agility with better protection and firepower.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Combat+Drone"
    },
    {
        name: "Brawler Drone",
        cost: 4000000,
        hangarSpace: 2,
        spinalWeaponMounts: 1,
        broadsideTurretMounts: 1,
        pointDefenseMounts: 2,
        navigation: "15/25",
        hullArmour: 7,
        shieldDefence: 3,
        length: "10m",
        notes: [
            "Comes with a free T2 weapon",
            "Limited to T1 and T2 weapons",
            "T2 weapons can only be put on spinal weapon mounts"
        ],
        description: "Brawler drones are meant to take hits and provide great firepower.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Brawler+Drone"
    },
    {
        name: "Stealth Drone",
        cost: 6000000,
        hangarSpace: 2,
        spinalWeaponMounts: 1,
        broadsideTurretMounts: 2,
        pointDefenseMounts: 2,
        navigation: "12/25",
        hullArmour: 6,
        shieldDefence: 4,
        length: "12m",
        notes: [
            "Can cloak for up to 5 minutes",
            "Comes with a free T2 weapon",
            "Limited to T1 and T2 weapons, and tesla overchargers",
            "T2 weapons can only be put on spinal weapon mounts"
        ],
        description: "Equipped with a cloaking device, the stealth drone is perfect for reconnaissance missions and ambushes. It is a very versatile drone, and it can be used for a variety of tasks, including scouting, combat, and reconnaissance. It is also highly effective in a team environment, and it can be used to provide its commander with real-time intelligence on enemy positions, movements, and tactics.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Stealth+Drone"
    },
    {
        name: "Bomber Drone",
        cost: 8000000,
        hangarSpace: 3,
        spinalWeaponMounts: 1,
        broadsideTurretMounts: 0,
        pointDefenseMounts: 2,
        navigation: "11/25",
        hullArmour: 9,
        shieldDefence: 6,
        length: "15m",
        notes: [
            "Comes with a free torpedo silo",
            "Limited to T3 and T4 weapons"
        ],
        description: "Large and bulky, but equipped to deliver hull-breaching blows with torpedoes. Make bigger ships whimper with bomber drones.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Bomber+Drone"
    },
    {
        name: "Mining Drone",
        cost: 1000000,
        hangarSpace: 1,
        spinalWeaponMounts: 1,
        broadsideTurretMounts: 0,
        pointDefenseMounts: 0,
        navigation: "18/25",
        hullArmour: 2,
        shieldDefence: 2,
        length: "6m",
        notes: [
            "Comes with a free mining harvester (MK1)",
            "Limited to industrial modules"
        ],
        description: "A drone that uses mining lasers to mine asteroids, and can carry the ore to your ship.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Mining+Drone"
    },
    {
        name: "Shield Drone",
        cost: 2000000,
        hangarSpace: 1,
        spinalWeaponMounts: 0,
        broadsideTurretMounts: 0,
        pointDefenseMounts: 0,
        navigation: "16/25",
        hullArmour: 4,
        shieldDefence: 6,
        length: "4m",
        notes: [
            "Can project a shield that covers 1000m^2 that has 1/5 the shield strength of your main ship",
            "Shield lasts 5 min"
        ],
        description: "A special drone that projects your ship's shield capacity.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Shield+Drone"
    },
    {
        name: "Hull Repair Drone",
        cost: 3000000,
        hangarSpace: 1,
        spinalWeaponMounts: 0,
        broadsideTurretMounts: 0,
        pointDefenseMounts: 0,
        navigation: "14/25",
        hullArmour: 2,
        shieldDefence: 2,
        length: "4m",
        notes: [
            "Can repair hull armour"
        ],
        description: "These helpful repair drones will do a superb job at making sure your ship's hull is in tact. While they are very efficient models, they are not well protected.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Hull+Repair+Drone"
    },
    {
        name: "Combat Repair Drone",
        cost: 3000000,
        hangarSpace: 1,
        spinalWeaponMounts: 0,
        broadsideTurretMounts: 0,
        pointDefenseMounts: 1,
        navigation: "16/25",
        hullArmour: 3,
        shieldDefence: 5,
        length: "4m",
        notes: [
            "Can repair hull armour"
        ],
        description: "Better protected and more reliable than standard repair drones, these drones can repair in the midst of combat. They are less efficient, but easy to rebuild or replace.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Combat+Repair+Drone"
    },
    {
        name: "Science Probe",
        cost: 4000000,
        hangarSpace: 0.5,
        spinalWeaponMounts: 0,
        broadsideTurretMounts: 0,
        pointDefenseMounts: 0,
        navigation: "11/25",
        hullArmour: 2,
        shieldDefence: 2,
        length: "2m",
        notes: [
            "Has a built-in tractor beam and composition scanner"
        ],
        description: "Equipped with top of the line analyzing equipment, these probes are perfect for sending into the unknown for discovery. ",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Science+Probe"
    },
    {
        name: "Lasso Drone",
        cost: 14000000,
        hangarSpace: 2,
        spinalWeaponMounts: 0,
        broadsideTurretMounts: 0,
        pointDefenseMounts: 0,
        navigation: "14/25",
        hullArmour: 2,
        shieldDefence: 4,
        length: "22m",
        notes: [
            "Has a built-in warp jammer"
        ],
        description: "If you plan on engaging multiple enemy ships and you want to keep them all from escaping, loading up on lasso drones is a good idea.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Lasso+Drone"
    }
];

const vehicle = [
    {
        name: "Courier",
        cost: 5000000,
        hangarSpaceSlots: 3,
        pointDefenseSlots: 0,
        T1WeaponSlots: 1,
        T2WeaponSlots: 0,
        T3WeaponSlots: 0,
        armour: 0,
        hull: 22,
        length: "4m",
        notes: [
            "Can mount one cargo bay",
            "Has a small hangar",
            "May carry out surface missions as a frigate or destroyer"
        ],
        description: "This vehicle is a small space to surface craft for transporting cargo, personnel, or yourself. It has a cargo bay to keep supplies, a small hangar, and a crew quarter that can be used for a variety of tasks. It is also highly effective in a team environment, and it can be used to transport its commander from one location to another.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Courier"
    }
];

const commandModule = [
    {
        name: "MI 550.30 'Tacle'",
        manufacturer: "Falons",
        cost: 3000000,
        specialAbility: "Hydra",
        prerequisites: "Fighters",
        range: "Moderate",
        description: "The Oracles command module is capable of a variety of tasks, including combat, support, and reconnaissance. It can be used to engage enemy ships, or it can be used to provide its commander with real-time intelligence on enemy positions, movements, and tactics. It is also highly effective in a team environment, and it can be used to transport its commander from one location to another.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=MI+550.30+Tacle"
    },
    {
        name: "X68 'Eclpse'",
        manufacturer: "Triglav Innovations",
        cost: 4000000,
        specialAbility: "Specter",
        prerequisites: "Continuous",
        range: "Self",
        notes: [
            "Cloak synergy: May travel at 75% speed while active.",
            "Cloak synergy: Detection reduced at 60% of normal range."
        ],
        description: "The X68 'Eclipse' command module is designed to provide its commander with a powerful and versatile weapon platform. It is capable of a variety of tasks, including combat, support, and reconnaissance. It can be used to engage enemy ships, or it can be used to provide its commander with real-time intelligence on enemy positions, movements, and tactics. It is also highly effective in a team environment, and it can be used to transport its commander from one location to another.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=X68+Eclipse"
    }
];

const compartment = [
    {
        name: "Clone Vat Bay",
        tier: "Advanced",
        cost: 20000000,
        prerequisites: "A Doctor and a Scientist",
        notes: [
            "Offers lost in combat crew their consciousness transferred to prepared clones",
            "Advanced version allows creation and transfer of a unique 'Hero' clone"
        ],
        description: "A clone vat bay is a highly advanced piece of technology that can be used to create clones of your crew members. It can also be used to transfer the consciousness of a crew member to a clone. The clone vat bay is a highly advanced piece of technology, and it is very expensive. It can be used to create clones of your crew members, or it can be used to transfer the consciousness of a crew member to a clone. The clone vat bay is a highly advanced piece of technology, and it is very expensive. It can be used to create clones of your crew members, or it can be used to transfer the consciousness of a crew member to a clone.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Clone+Vat+Bay"
    },
    {
        name: "Cybernetics Bay",
        tier: "Advanced",
        cost: 5000000,
        prerequisites: "A Doctor, Scientist, and Mechanical Engineer",
        notes: [
            "Allows you to enhance your crew members with cybernetics.",
            "You can also use the bay to repair and maintain your cybernetics."
        ],
        description: "The Cybernetics Bay is a highly advanced piece of technology that can be used to enhance your crew members with cybernetics. It can also be used to repair and maintain your cybernetics. The Cybernetics Bay is a highly advanced piece of technology, and it is very expensive. It can be used to enhance your crew members with cybernetics, or it can be used to repair and maintain your cybernetics.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Cybernetics+Bay"
    },
    {
        name: "Oculus",
        tier: "Special/Unique",
        cost: 1000000,
        prerequisites: "A Doctor and a Scientist",
        notes: [
            "Can emulate any command module.",
            "Must complete the active module's cooldown period before reactivating."
        ],
        description: "The Oculus is a highly advanced piece of technology that can be used to emulate any command module. It can also be used to repair and maintain your cybernetics. The Oculus is a highly advanced piece of technology, and it is very expensive. It can be used to emulate any command module, or it can be used to repair and maintain your cybernetics.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Oculus"
    }
];

const equipment = [
    {
        name: "Fragmentation",
        cost: 50000,
        equipmentLevel: 1,
        handling: "",
        description: "Your standard free grenade. Explodes and sends deadly shrapnel in every direction.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Fragmentation"
    },
    {
        name: "Hi-Ex",
        cost: 100000,
        equipmentLevel: 1,
        handling: "",
        description: "Damage is primarily from its explosiveness. Usually used for demolition purposes.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Hi-Ex"
    },
    {
        name: "Incendiary",
        cost: 200000,
        equipmentLevel: 1,
        handling: "",
        description: "Explodes in a great ball of fire, meant to flush out tight spaces.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Incendiary"
    },
    {
        name: "Breacher",
        cost: 700000,
        equipmentLevel: 2,
        handling: "",
        description: "An explosive that's specialized in punching holes in structures, particularly walls and ship hulls.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Breacher"
    },
    {
        name: "Flashbang",
        cost: 200000,
        equipmentLevel: 1,
        handling: "",
        description: "Produces a loud and bright burst that can temporarily blind and deafen through light protection.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Flashbang"
    },
    {
        name: "EMP",
        cost: 300000,
        equipmentLevel: 1,
        handling: "",
        description: "Sends out a controlled EMP, disrupting and disabling electrical systems.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=EMP"
    },
    {
        name: "Stasis",
        cost: 1000000,
        equipmentLevel: 2,
        handling: "",
        description: "Slows down time to a near crawl in a room-wide area.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Stasis"
    },
    {
        name: "Grapple Mod",
        cost: 250000,
        equipmentLevel: 1,
        handling: "",
        description: "A modification that can be added to any other grenade type. Counts as a grenade type to your max.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Grapple+Mod"
    },
    {
        name: "Plasma Sticky",
        cost: 600000,
        equipmentLevel: 1,
        handling: "",
        description: "While not as explosive as a hi-ex, these grenades are light and can stick to almost any surface.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Plasma+Sticky"
    },
    {
        name: "Explosive Charge",
        cost: 800000,
        equipmentLevel: 2,
        handling: "",
        description: "Explosive that can set off remotely, by proximity, time, or just to add more power to another explosion.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Explosive+Charge"
    },
    {
        name: "Taser Baton",
        cost: 50000,
        equipmentLevel: 1,
        handling: "",
        description: "A non-lethal but painful stick that can stun most people if they don't pick up that can.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Taser+Baton"
    },
    {
        name: "Combat Knife",
        cost: 100000,
        equipmentLevel: 1,
        handling: "",
        description: "It is said that the best knives in the galaxy were made by Reibar, a company in the Luos Outer Ring.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Combat+Knife"
    },
    {
        name: "Medium Melee Weapon",
        cost: 100000,
        equipmentLevel: 1,
        handling: "",
        description: "Any melee weapon that's about the size of a machete or larger. A bit primitive for the times, though.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Medium+Melee+Weapon"
    },
    {
        name: "Vibro-Blade",
        cost: 400000,
        equipmentLevel: 2,
        handling: "",
        description: "A special type of hyper-vibrated blades that use hypersonic vibrations to assist in cutting things.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Vibro-Blade"
    },
    {
        name: "Energy Sword",
        cost: 4000000,
        equipmentLevel: 3,
        handling: "",
        description: "A searing-hot blade made of energy that can cut through almost any material with ease.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Energy+Sword"
    },
    {
        name: "H \"Grasps\"",
        cost: 900000,
        equipmentLevel: 5,
        handling: "",
        description: "Allows you to conjure up mana blades and even shields. Becomes taxing on your stamina, however.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=H+%22Grasps%22"
    }
];

const crew = [
    {
        name: "Nettle",
        cost: 0,
        specialty: "Survival",
        equipmentLevel: 1,
        skillLevel: 2,
        alignment: "Neutral",
        description: "A young girl found wandering the streets of an abandoned city in Faraday. She claims to not know her name nor her family. She survived for years, alone.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Nettle"
    },
    {
        name: "Kristina Hines",
        cost: 2000000,
        specialty: "Long-range",
        equipmentLevel: 1,
        skillLevel: 3,
        alignment: "Red Daggers",
        description: "A new recruit in the Wolf Hunt Hurst gang who has shown promise in her marksmanship. She's becoming a quick favorite to Yula, the gang leader.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Kristina+Hines"
    },
    {
        name: "Robby Delgarv",
        cost: 3000000,
        specialty: "Survival",
        equipmentLevel: 1,
        skillLevel: 4,
        alignment: "Neutral",
        description: "A Dustkeeper who likes to keep his gear modest. Has extensive knowledge on survival skills in harsh environments. Always seems to know what he's doing.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Robby+Delgarv"
    },
    {
        name: "Maxim Cyril",
        cost: 2000000,
        specialty: "Melee",
        equipmentLevel: 1,
        skillLevel: 3,
        alignment: "Federation",
        description: "A field medic fresh out of med school, looking to bolster his battlefield experience. He's self-funded his own equipment, which is fairly expensive.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Maxim+Cyril"
    },
    {
        name: "Francesca Osvalt",
        cost: 2000000,
        specialty: "Melee",
        equipmentLevel: 2,
        skillLevel: 4,
        alignment: "Blackhawk Elite",
        description: "A Seraph employee who has worked on Fenris for several years. Her adventurous attitude eggs her to do something else.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Francesca+Osvalt"
    },
    {
        name: "Moya LaCroix",
        cost: 3000000,
        specialty: "Front-line assault",
        equipmentLevel: 2,
        skillLevel: 3,
        alignment: "Neutral",
        description: "Moya is a dedicated to Scoutya veteran who is both a top fighter and is very knowledgeable about his high-tech gear. He searches for his long lost twin, Faulka.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Moya+LaCroix"
    },
    {
        name: "Faulka LaCroix",
        cost: 3000000,
        specialty: "Sniping",
        equipmentLevel: 2,
        skillLevel: 3,
        alignment: "Neutral",
        description: "Faulka was an ex-Io Security Operative, but has left for unknown reasons. Since then, she joined the Dustkeepers on Faraday as a skilled marksman.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Faulka+LaCroix"
    },
    {
        name: "\"Ms. Green\"",
        cost: 3000000,
        specialty: "Guerilla warfare",
        equipmentLevel: 2,
        skillLevel: 4,
        alignment: "Gazers",
        description: "A shady and mysterious, like all of the Gazers. She usually relays intel and orders to her commdos, but is known to take matters into her own hands.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Ms.+Green"
    },
    {
        name: "Sya'ra Degala",
        cost: 4000000,
        specialty: "Demolition",
        equipmentLevel: 2,
        skillLevel: 4,
        alignment: "Luos Syndicate",
        description: "Called the Mad Roller by friends, Sya'ra has a love for weapons. She'll follow you around if you show any interest in weaponry. Likes to wear roller blades.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Sya'ra+Degala"
    },
    {
        name: "Jerilyn Hyata",
        cost: 5000000,
        specialty: "Infiltration",
        equipmentLevel: 3,
        skillLevel: 5,
        alignment: "Talons",
        description: "A Talon at the top of her class. She's snuck through some of the most complex security systems in the galaxy, most of them owned by the Blackhawk Elite.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Jerilyn+Hyata"
    },
    {
        name: "Connell Xuan",
        cost: 6000000,
        specialty: "Front-line assault",
        equipmentLevel: 4,
        skillLevel: 4,
        alignment: "Neutral",
        description: "It's thanks to men like Connell why the Dustkeepers base on Faraday has not been breached by the mutants. His valiant backstory rallies his comrades.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Connell+Xuan"
    },
    {
        name: "Maren Krause",
        cost: 7000000,
        specialty: "Hands-to-hand",
        equipmentLevel: 4,
        skillLevel: 5,
        alignment: "Federation",
        description: "Seeing Maren on the opposite end of your barrel means it's already too late. She prioritizes efficiency above all else, and she's very good at her job.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Maren+Krause"
    },
    {
        name: "Lex StPierre",
        cost: 7000000,
        specialty: "Sentry?",
        equipmentLevel: 5,
        skillLevel: 4,
        alignment: "Neutral",
        description: "(or he/she) bolsters some of the greatest fighting skills and equipment in the galaxy, but he (or she) tends to not move until they're good at what they're doing.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Lex+StPierre"
    },
    {
        name: "\"Bagger\"",
        cost: 20000000,
        specialty: "Heavy weapons",
        equipmentLevel: 5,
        skillLevel: 4,
        alignment: "Himself",
        description: "Some say he's a fifth Agon, but he openly hates them with a passion. No one knows where he came from, only that he's a bloodthirsty man with a love for conflict.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Bagger"
    },
    {
        name: "Gideon Kirkegaard",
        cost: 3000000,
        specialty: "Seraph",
        equipmentLevel: 10,
        skillLevel: 4,
        alignment: "Seraph",
        description: "Researchers at Beatrice R&D come off as the bookworm type; brains with a strong penchant for scientific advancement. However, the company has its own ethical limits, and he's not sure what he wants to do. He's also a skilled combat pilot.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Gideon+Kirkegaard"
    },
    {
        name: "Jennifer Larue",
        cost: 7000000,
        specialty: "Seraph",
        equipmentLevel: 10,
        skillLevel: 5,
        alignment: "Federation",
        description: "Lieutenant Jenny Larue serves as a capable operative, representing Hope Incident Response Unit 4 of the Federation SOF. She's trained in many forms of combat and tactics, and her expertise is in sensing things that shouldn't be there. She's been stationed near Freeport and Seraph for a while. Unbeknownst to her, her action here is scarce, she does get to participate in small campaigns to drive out local pirate gangs. She is capable of operating with a wide variety of equipment and is a very capable combatant. She is also a tactical expert and is an invaluable asset to her team. She's very good at her job and she's a very good leader. She also has a great sense of humor.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Jennifer+Larue"
    },
    {
        name: "David Sharp",
        cost: 9000000,
        specialty: "Seraph",
        equipmentLevel: 10,
        skillLevel: 3,
        alignment: "Talons",
        description: "Talons agents seldom make their appearances, but that's because they do well in masking their presence. David works only for premium commissions, usually as a bodyguard or a scout for the Talons. He's also a highly skilled sniper and a very good combatant. He's a veteran of many battles and he's a very good pilot. He's a very good scout and he's a very good tactician.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=David+Sharp"
    },
    {
        name: "Henrik Larun",
        cost: 5000000,
        specialty: "Hellion",
        equipmentLevel: 10,
        skillLevel: 4,
        alignment: "Blackhawk Elite",
        description: "The Blackhawk Elite is a massive conglomerate of mercenary groups that aims to bring order to the unlawful parts of the galaxy, especially to where the Federation can't reach. The Cyclone Marauders is a mechanized PMC that enforces the very strict jurisdiction of a family of a Blackhawk Elite on an entire system. Henrik is a very skilled combatant and a very good leader. He's a veteran of many battles and he's a very good pilot.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Henrik+Larun"
    },
    {
        name: "Comet",
        cost: 8000000,
        specialty: "Dreamy Psychopomp",
        equipmentLevel: 10,
        skillLevel: 5,
        alignment: "Seraph",
        description: "From a very young age, he's proven to have a very high aptitude in mana energy, which is why the Federation Navy takes him in to their academy. He's also a very skilled pilot and a very good combatant. He's a veteran of many battles and he's a very good leader. He's a very good pilot and he's a very good scout. He's a very good tactician and he's a very good leader.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Comet"
    },
    {
        name: "Faulka Lacroix",
        cost: 6000000,
        specialty: "Aethen Templar",
        equipmentLevel: 10,
        skillLevel: 4,
        alignment: "Neutral",
        description: "The Unbound base on the planet of Faraday is widely considered to be the archstone for the Dustkeepers. Many who came to help build the facility were independent experts, but among the Dustkeepers on Unbound is a highly skilled combatant and a very good tactician. He's a veteran of many battles and he's a very good pilot. He's a very good scout and he's a very good tactician.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Faulka+Lacroix"
    },
    {
        name: "Dreamer",
        cost: 16000000,
        specialty: "Controller",
        equipmentLevel: 10,
        skillLevel: 10,
        alignment: "Neutral",
        description: "One of a few completely compatible with her cybernetic interface, Dreamer lives inside the machinery of her ship as a pilot herself. She is the quiet voice in the back of your mind whispering 'is there room in here for one more?'.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Dreamer"
    },
    {
        name: "Wintermute",
        cost: 12000000,
        specialty: "Cyber security",
        equipmentLevel: 10,
        skillLevel: 9,
        alignment: "Gazers",
        description: "Wintermute describes herself as an information technology specialist. That the site is an enemy information and data organization is in a high-security server only justifies her high rate of pay.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Wintermute"
    },
    {
        name: "Krache",
        cost: 9000000,
        specialty: "Mechanical Engineer",
        equipmentLevel: 10,
        skillLevel: 8,
        alignment: "Dustkeepers",
        description: "Krache is an explorer at heart. Always searching for the most unknown, eager to discover the next frontier. The multi-limbed combat exoskeleton she uses is of her own design.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Krache"
    },
    {
        name: "Atlas",
        cost: 8000000,
        specialty: "Doctor",
        equipmentLevel: 10,
        skillLevel: 7,
        alignment: "Neutral",
        description: "Be it astrophysics, nuclear physics, terraforming, or even genetics, Atlas is an android that has a fondness for goldfish. And smoking. No, the fish is not making faces at you.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Atlas"
    },
    {
        name: "Cylene",
        cost: 7000000,
        specialty: "Infiltration",
        equipmentLevel: 10,
        skillLevel: 7,
        alignment: "Luos Syndicate",
        description: "Cylene is an executive assassination android with a full suite of optical camouflage. Including a visual cloaking and holographic mimicry. It prides itself on being neat, efficient, and causing minimal collateral damage... unless someone is really asking for it.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Cylene"
    },
    {
        name: "Nettie",
        cost: 1000000,
        specialty: "Survival",
        equipmentLevel: 10,
        skillLevel: 3,
        alignment: "Neutral",
        description: "Nettie is a young arms dealer who has been trying to get off Faraday for years. The last ship captain who offered her help was looking for a monster infested labyrinth, so she's happy to go with you. She just needs you to help her with a few debts.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Nettie"
    },
    {
        name: "K-10",
        cost: 5000000,
        specialty: "Special Luxury Nekenoid",
        equipmentLevel: 10,
        skillLevel: 8,
        alignment: "Neutral",
        description: "Despite having to reformat part of her memory, K-10 is a Nekenoid android who is looking for the chance to prove her worth to her new owner.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=K-10"
    },
    {
        name: "Sgt. Sya'ra Degala",
        cost: 9000000,
        specialty: "Demolition",
        equipmentLevel: 10,
        skillLevel: 9,
        alignment: "Luos Syndicate",
        description: "A veteran Cerberus Legion officer, Sya'ra's early years were spent fighting and tinkering with weapons. Her favorite hobbies are riding skates, explosives, and teasing her childhood friend Lyre. Yes, that homemade rocket launcher is safe.",
        image: "https://placehold.co/100x100/A020F0/FFFFFF?text=Sgt.+Sya'ra+Degala"
    }
];
