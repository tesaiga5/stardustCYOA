export const skills = [
    // Skills from "Page 1 Stardust word.docx"
    {
        id: "basic-piloting",
        title: "Basic Piloting",
        description: "If you're going into space, it's probably a good idea to at least know how to fly a ship. This course will teach you the basics, and when you're through, you'll be able to adequately pilot almost any ship. Don't expect to outwit more experienced pilots, however.",
        cost: 0, // Assuming initial courses are free as per "You may take up to 6 courses..."
        prerequisites: [],
        consequences: [],
        playerUpdates: [{ attribute: "skills", action: "add", value: "basic-piloting" }],
        imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "ship-gunnery",
        title: "Ship Gunnery",
        description: "Learning how to fire a ship's weapons is almost an essential skill needed when space-faring. Hostiles. can find the sneakiest ways of getting you where they want you to be, so you best be prepared to defend yourself from them. You'll be able to ade- quately fire any ship weapon from this course.",
        cost: 0,
        prerequisites: [],
        consequences: [],
        playerUpdates: [{ attribute: "skills", action: "add", value: "ship-gunnery" }],  imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "medical",
        title: "Medical",
        description: "People with medical knowledge are few and far between, but they're always in high demand. Having a doctor on board can improve the quality of life tenfold. Better yet, why not train yourself to become one?",
        cost: 0,
        prerequisites: [],
        consequences: [],
        playerUpdates: [{ attribute: "skills", action: "add", value: "medical" }],  imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "computer-science",
        title: "Computer Science",
        description: "Information technology is heavily embedded into everything, so it's valuable knowledge to have. Especially when piloting a ship, it certainly helps to know how it works under the hood. Computer science is almost an essential skill to have for anyone hoping to travel the stars",
        cost: 0,
        prerequisites: [],
        consequences: [],
        playerUpdates: [{ attribute: "skills", action: "add", value: "computer-science" }],  imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "standard-piloting",
        title: "Standard Piloting",
        description: "This course will put you through much more realistic simulations, and even take you onto the field a few times. New techniques open up a wave of new possibilities for you as an aspiring pilot, and you fly confidently enough to go toe-to-toe with other pilots out there.",
        cost: 2000000, // 2m per additional course
        prerequisites: [{ type: "skill", value: "basic-piloting" }],
        consequences: [],
        playerUpdates: [{ attribute: "skills", action: "add", value: "standard-piloting" }],  imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "ship-weapon-specialization",
        title: "Ship Weapon Specialization",
        description: "This course highlights the advanced techniques in handling a certain ship weapon type. You can select either kinetic, energy, blaster, or explosive, boosting that weapon type's effectiveness when you're in command of the ship they're attached to.",
        cost: 2000000,
        prerequisites: [{ type: "skill", value: "ship-gunnery" }],
        consequences: [],
        playerUpdates: [{ attribute: "skills", action: "add", value: "ship-weapon-specialization" }],  imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "mechanics",
        title: "Mechanics",
        description: "Having no mechanical knowledge on your ship can lead to a boatload of problems; it's a no-brainer to have one on board. That said, knowing how to fix things yourself can't hurt, and it helps keep your mechanic doing more important things than trying to fix your robotic leg.",
        cost: 0,
        prerequisites: [],
        consequences: [],
        playerUpdates: [{ attribute: "skills", action: "add", value: "mechanics" }],  imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "cyber-security",
        title: "Cyber Security",
        description: "Take information technology a step further and into the world of info-sec. For as long humanity can remember, hacking and cyber defence has been a volatile field that requires top-of-the-line intuition and craftiness. E-war is just as dangerous as conven- tional warfare, and some argue it is more so.",
        cost: 2000000,
        prerequisites: [{ type: "skill", value: "computer-science" }],
        consequences: [],
        playerUpdates: [{ attribute: "skills", action: "add", value: "cyber-security" }],  imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "advanced-piloting",
        title: "Advanced Piloting",
        description: "You're in the real world now, and you can't settle for anything less than the best when it comes to being a pilot. You'll be put in the most realistic conditions, enough that you're convinced that these are real situations they're throwing at you. Come out of this alive and you'll quickly become a respected pilot.",
        cost: 2000000,
        prerequisites: [{ type: "skill", value: "standard-piloting" }],
        consequences: [],
        playerUpdates: [{ attribute: "skills", action: "add", value: "advanced-piloting" }],  imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "standard-combat-training",
        title: "Standard Combat Training",
        description: "Hand-to-hand, long-ranged, you name it. This course teaches you the basics in combat defence and offence, skills you might find invaluable one day. The universe is not a friendly place, so knowing how to fire a weapon properly can bring you a long way.",
        cost: 0,
        prerequisites: [],
        consequences: [],
        playerUpdates: [{ attribute: "skills", action: "add", value: "standard-combat-training" }],  imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "nuclear",
        title: "Nuclear",
        description: "Almost every ship nowadays is powered by nuclear technology, be it through fission, fusion, or even anti- matter. At least knowing the do's and don'ts of nuclear sciences may mean the difference between life and becoming atomized into oblivion.",
        cost: 0,
        prerequisites: [],
        consequences: [],
        playerUpdates: [{ attribute: "skills", action: "add", value: "nuclear" }],  imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "industry",
        title: "Industry",
        description: "All of this would not be possible if it were not for the industrious side of society. Everything from mining, refining, and processing is covered in this course. If you plan on sailing the stars to make profit off of them, then you're going to want to have this skill under your belt.",
        cost: 0,
        prerequisites: [],
        consequences: [],
        playerUpdates: [{ attribute: "skills", action: "add", value: "industry" }],  imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "diplomacy",
        title: "Diplomacy",
        description: "As someone who's likely going to get into a lot of interactions with others, it's good to at least know how to handle situations into your favour. You'll become a great mediator and can convince most people you're right. After taking this course, you can hire up to 4 crew members hostile to your faction.",
        cost: 0,
        prerequisites: [],
        consequences: [{ type: "crew-hire-limit", value: 4, condition: "hostile-faction" }],
        playerUpdates: [{ attribute: "skills", action: "add", value: "diplomacy" }],  imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "advanced-combat-training",
        title: "Advanced Combat Training",
        description: "Just pointing and shooting isn't enough; you need to know how to win, and this course can get you there. You'll be learning everything from valuable survival skills to the discipline of following and giving orders. You will be nothing short of a professional combat- ant in these times of conflict.",
        cost: 2000000,
        prerequisites: [{ type: "skill", value: "standard-combat-training" }],
        consequences: [],
        playerUpdates: [{ attribute: "skills", action: "add", value: "advanced-combat-training" }],  imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "mind-link",
        title: "Mind-Link",
        description: "Experimental tech developed at Triglav that requires an immense amount of knowledge, patience, and fortitude to get through. With this skill, you'll be able to link your mind to your ship.",
        cost: 2000000,
        prerequisites: [
            { type: "skill", value: "medical" },
            { type: "skill", value: "mechanics" },
            { type: "skill", value: "nuclear" },
            { type: "skill", value: "advanced-piloting" },
            { type: "skill", value: "computer-science" }
        ],
        consequences: [{ type: "job-slots", value: 3 }], // Can assume 3 jobs instead of 2
        playerUpdates: [{ attribute: "skills", action: "add", value: "mind-link" }],  imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "mercantile",
        title: "Mercantile",
        description: "After all is said and done, you're going to want to be able to make profit, and lots of it. It's probably a good idea to have the know-how on how to barter and trade, since the whole product of industry is to not only build society but to acquire the means to do it even better.",
        cost: 0,
        prerequisites: [],
        consequences: [],
        playerUpdates: [{ attribute: "skills", action: "add", value: "mercantile" }],  imageSrc: "/Images/Beatrice R&D.webp"
    }
];
export const titles = [
    {
        id:"title-rogue",
        title:"The Rogue",
        prerequisites: "none",
        consequences: [],
        credits: 200000000,
        imageSrc: "/Images/Beatrice R&D.webp",
        description: "One or more of your crew will betray you at some point while you are adventuring the stars. You best hope you have good security personnel... unless they're the traitors. name 5 traitors from the named crew members."
    },
    {
        id:"title-oldTimer",
        title:"The Old Timer",
        prerequisites: "none",
        consequences: {
            'energy-fusion': false, 
            'energy-mana': false,
            'energy-antiMatter': false,
            'shield-aegis': false,
            'shield-mana': false
        },
        credits: 100000000,
        imageSrc: "/Images/Beatrice R&D.webp",
        description: "*Can't take nuclear fusion, mana core, or anti-matter energy *Can't take aegis or mana shields You never saw the reason to upgrade. What you have is perfect- ly fine, and you don't need anything fancier to accomplish what you do."
    },
    {
        id:"title-ghost",
        title:"The Ghost",
        prerequisites: "none",
        consequences: [],
        credits: 120000000,
        imageSrc: "/Images/Beatrice R&D.webp",
        description: "For some reason, you appear as dead to all databases across the civilized galaxy. And whenever someone updates you as not dead, it reverts back the next day. This causes a lot of problems when you try to trade with others, gain acess to certain areas, or try to get people to take you seriously."
    },
    {
        id:"title-whisperer",
        title:"The Whisperer",
        prerequisites: "none",
        consequences: [],
        credits: 130000000,
        imageSrc: "/Images/Beatrice R&D.webp",
        description: "It takes awhile for you to catch on, but you find out that your ship Al has began to develop a more... emotional personality. How it happened, you're not sure, but it's become moody and will reject your orders if not treated well... some- thing Al shouldn't do. It's probably best you don't piss it off."
    },
    // Titles from "Page 1 Stardust word.docx"
    {
        id: "title-the-rogue",
        title: "The Rogue",
        bonusCredits: 50000000,
        complications: [
            "One or more of your crew will betray you at some point while you are adventuring the stars. You best hope you have good security personnel... unless they're the traitors. Limited to 5 traitors total. Must be named crew members.",
            { type: "bonus-per-traitor", value: 30000000 }
        ],
        imageSrc: "/Images/Beatrice R&D.webp",
        description: "One or more of your crew will betray you at some point while you are adventuring the stars. You best hope you have good security personnel... unless they're the traitors. Bonus starting credits: 50m +Every additional traitor adds 30m *Must be named crew members *Limited to 5 traitors total",
        prerequisites: [],
        consequences: []
    },
    {
        id: "title-the-old-timer",
        title: "The Old Timer",
        bonusCredits: 100000000,
        complications: [
            "Cannot take nuclear fusion, mana core, or anti-matter energy.",
            "Cannot take aegis or mana shields."
        ],
        imageSrc: "/Images/Beatrice R&D.webp",
        description: "*Can't take nuclear fusion, mana core, or anti-matter energy *Can't take aegis or mana shields You never saw the reason to upgrade. What you have is perfect- ly fine, and you don't need anything fancier to accomplish what you do.",
        prerequisites: [],
        consequences: []
    },
    {
        id: "title-the-ghost",
        title: "The Ghost",
        bonusCredits: 120000000,
        complications: [
            "For some reason, you appear as dead to all databases across the civilized galaxy. And whenever someone updates you as not dead, it reverts back the next day. This causes a lot of problems when you try to trade with others, gain acess to certain areas, or try to get people to take you seriously."
        ],
        imageSrc: "/Images/Beatrice R&D.webp",
        description: "For some reason, you appear as dead to all databases across the civilized galaxy. And whenever someone updates you as not dead, it reverts back the next day. This causes a lot of problems when you try to trade with others, gain acess to certain areas, or try to get people to take you seriously. Bonus starting credits: 120m",
        prerequisites: [],
        consequences: []
    },
    {
        id: "title-the-whisperer",
        title: "The Whisperer",
        bonusCredits: 130000000,
        complications: [
            "It takes awhile for you to catch on, but you find out that your ship Al has began to develop a more... emotional personality. How it happened, you're not sure, but it's become moody and will reject your orders if not treated well... some- thing Al shouldn't do. It's probably best you don't piss it off."
        ],
        imageSrc: "/Images/Beatrice R&D.webp",
        description: "It takes awhile for you to catch on, but you find out that your ship Al has began to develop a more... emotional personality. How it happened, you're not sure, but it's become moody and will reject your orders if not treated well... some- thing Al shouldn't do. It's probably best you don't piss it off. Bonus starting credits: 130m",
        prerequisites: [],
        consequences: []
    },
    {
        id: "title-the-leader",
        title: "The Leader",
        bonusCredits: 140000000,
        complications: [
            "A hostile bandit group has a bone to pick with you. They will show up at the most inconvenient times, but almost never to confront you directly. Sabotage, traps, and spies await you when you least expect it. The larger your crew, the more likely they can infiltrate. You might want intimidating crew members."
        ],
        imageSrc: "/Images/Beatrice R&D.webp",
        description: "A hostile bandit group has a bone to pick with you. They will show up at the most inconvenient times, but almost never to confront you directly. Sabotage, traps, and spies await you when you least expect it. The larger your crew, the more likely they can infiltrate. You might want intimidating crew members. Bonus starting credits: 140m",
        prerequisites: [],
        consequences: []
    },
    {
        id: "title-the-saint",
        title: "The Saint",
        bonusCredits: 150000000,
        complications: [
            "The notorious (former) \"Siblings of Death\" both join your crew at the same time, unbeknownst to each other. However, they don't find out until you're in the middle of space, and they hate each other's guts with a violent zeal."
        ],
        imageSrc: "/Images/Beatrice R&D.webp",
        description: "The notorious (former) \"Siblings of Death\" both join your crew at the same time, unbeknownst to each other. However, they don't find out until you're in the middle of space, and they hate each other's guts with a violent zeal. Bonus starting credits: 150m +Can get Alessia (combat) and Ricce (combat) for free",
        playerUpdates: [
            { attribute: "crew", action: "add", value: "Alessia" },
            { attribute: "crew", action: "add", value: "Ricce" }
        ],
        prerequisites: [],
        consequences: []
    },
    {
        id: "title-the-berserk",
        title: "The Berserk",
        bonusCredits: 170000000,
        complications: [
            "Something's wrong with the shields of your ships, but no matter what you do, it can't be fixed. However, your weapons seem improved.",
            "All ship shields permanently lose 2 points, to a minimum of 1.",
            "Shields cannot exceed 23/25."
        ],
        imageSrc: "/Images/Beatrice R&D.webp",
        description: "Something's wrong with the shields of your ships, but no matter what you do, it can't be fixed. However, your weapons seem improved. Bonus starting credits: 170m +All ship weapons permanently gain 1 point of damage per volley *All ship shields permanently lose 2 points, to a minmum of 1 *Shields cannot exceed 23/25",
        playerUpdates: [
            { attribute: "ship-weapon-damage", action: "add", value: 1 },
            { attribute: "ship-shield-strength", action: "subtract", value: 2, min: 1 },
            { attribute: "ship-shield-max", action: "set", value: 23 }
        ],
        prerequisites: [],
        consequences: []
    },
    {
        id: "title-the-nemesis",
        title: "The Nemesis",
        bonusCredits: 180000000,
        complications: [
            "Somewhere out there in the galaxy, someone sees you as the 'Perfect Rival.' They fly a similar ship or fleet doctrine that is every bit as good as yours. Their leader? A notorious pilot who has had a fearsome record of flawless victo- ries, winning with genius tact. Your hope is to not face them alone..."
        ],
        imageSrc: "/Images/Beatrice R&D.webp",
        description: "Somewhere out there in the galaxy, someone sees you as the 'Perfect Rival.' They fly a similar ship or fleet doctrine that is every bit as good as yours. Their leader? A notorious pilot who has had a fearsome record of flawless victo- ries, winning with genius tact. Your hope is to not face them alone... Bonus starting credits: 180m",
        prerequisites: [],
        consequences: []
    },
    {
        id: "title-the-harbinger",
        title: "The Harbinger",
        bonusCredits: 190000000,
        complications: [
            "You get horrendously lost and come across a huge ancient space station made completely out of Herald tech. However, you find yourself surrounded by a lot of mysterious Herald vessels. You know their ships are powerful, but they don't sem happy to see you. Better make a good impression..."
        ],
        imageSrc: "/Images/Beatrice R&D.webp",
        description: "You get horrendously lost and come across a huge ancient space station made completely out of Herald tech. However, you find yourself surrounded by a lot of mysterious Herald vessels. You know their ships are powerful, but they don't sem happy to see you. Better make a good impression... Bonus starting credits: 190m",
        prerequisites: [],
        consequences: []
    },
    {
        id: "title-the-prisoner",
        title: "The Prisoner",
        bonusCredits: 200000000,
        complications: [
            "You've been captured by your enemies! To your surprise, instead of imprisoning you, they force you to work for them as a ship captain, seeing your skills as one.",
            "Origin must have hostile factions.",
            "Can only hire hostile or neutral crew members.",
            "Diplomacy skill effect reversed."
        ],
        imageSrc: "/Images/Beatrice R&D.webp",
        description: "You've been captured by your enemies! To your surprise, instead of imprisoning you, they force you to work for them as a ship captain, seeing your skills as one. Bonus starting credits: 200m *Origin must have hostile factions *Can only hire hostile or neutral crew members *Diplomacy skill effect reversed",
        prerequisites: [],
        consequences: []
    },
    {
        id: "title-the-space-cowboy",
        title: "The Space Cowboy",
        bonusCredits: 200000000,
        complications: [
            "Someone unsavoury actively wants your head, and they've made that knowledge public. Anyone who wants to get in good with them or has something against you will be coming after you, knowing that there's a fat bounty reward waiting for them should they succeed."
        ],
        imageSrc: "/Images/Beatrice R&D.webp",
        description: "Someone unsavoury actively wants your head, and they've made that knowledge public. Anyone who wants to get in good with them or has something against you will be coming after you, knowing that there's a fat bounty reward waiting for them should they succeed. Bonus starting credits: 200m",
        prerequisites: [],
        consequences: []
    },
    {
        id: "title-the-sleeper",
        title: "The Sleeper",
        bonusCredits: 210000000,
        complications: [
            "A group of mindless but well organized and well equipped rogue drones are always at your heels, determined to assimilate you, your crew, and your ships into its hoard. Why, you're not sure. You just know they're tough to deal with, as they have an almost endless arsenal of ships and weapons."
        ],
        imageSrc: "/Images/Beatrice R&D.webp",
        description: "A group of mindless but well organized and well equipped rogue drones are always at your heels, determined to assimilate you, your crew, and your ships into its hoard. Why, you're not sure. You just know they're tough to deal with, as they have an almost endless arsenal of ships and weapons. Bonus starting credits: 210m",
        prerequisites: [],
        consequences: []
    },
    {
        id: "title-the-traveler",
        title: "The Traveler",
        bonusCredits: 220000000,
        complications: [
            "A wormhole will open up at a random point in time while you are in space and swallow you whole. You will appear in unknown space with no way to indicate where you are in the vast, empty universe. You may make it back eventually, but it will take years, at the least. Maybe decades... or never."
        ],
        imageSrc: "/Images/Beatrice R&D.webp",
        description: "A wormhole will open up at a random point in time while you are in space and swallow you whole. You will appear in unknown space with no way to indicate where you are in the vast, empty universe. You may make it back eventually, but it will take years, at the least. Maybe decades... or never. Bonus starting credits: 220m",
        prerequisites: [],
        consequences: []
    },
    {
        id: "title-the-guardian",
        title: "The Guardian",
        bonusCredits: 240000000,
        complications: [
            "After finding an abandoned facility on a remote moon, you find a woman. You take her in; she was put through many experiments, mostly involving mind-link tech. On hearing about this, certain shady Federation entities will seek to capture her for some reason... and also hunt you and your crew down, regardless of your standings."
        ],
        imageSrc: "/Images/Beatrice R&D.webp",
        description: "After finding an abandoned facility on a remote moon, you find a woman. You take her in; she was put through many experiments, mostly involving mind-link tech. On hearing about this, certain shady Federation entities will seek to capture her for some reason... and also hunt you and your crew down, regardless of your standings. Bonus starting credits: 240m +Can get \"Hailey\" (co-pilot) for free",
        playerUpdates: [{ attribute: "crew", action: "add", value: "Hailey" }],
        prerequisites: [],
        consequences: []
    },
    {
        id: "title-the-sorcerer",
        title: "The Sorcerer",
        bonusCredits: 240000000,
        complications: [
            "While passing by wreckages littering the former Luos Syndicate, you come across an SOS signal coming from a supposed aban- doned station. You investigate and find a woman hooked up to some sort of machines. Upon saving her, the twisted, possessed pirates of the Fire Legion will try to seek and eradicate you and your crew."
        ],
        imageSrc: "/Images/Beatrice R&D.webp",
        description: "While passing by wreckages littering the former Luos Syndicate, you come across an SOS signal coming from a supposed aban- doned station. You investigate and find a woman hooked up to some sort of machines. Upon saving her, the twisted, possessed pirates of the Fire Legion will try to seek and eradicate you and your crew. Bonus starting credits: 240m +Can get \"Comet\" (gunner) for free",
        playerUpdates: [{ attribute: "crew", action: "add", value: "Comet" }],
        prerequisites: [],
        consequences: []
    },
    {
        id: "title-the-hellraiser",
        title: "The Hellraiser",
        bonusCredits: 420000000,
        complications: [
            "Receive all complications from The Leader, The Nemesis, and The Space Cowboy."
        ],
        imageSrc: "/Images/Beatrice R&D.webp",
        description: "Receive all complications from The Leader, The Nemesis, and The Space Cowboy. Bonus starting credits: 420m *Cannot take The Leader, The Nemesis, or The Space Cowboy",
        prerequisites: [
            { type: "not-title", value: "title-the-leader" },
            { type: "not-title", value: "title-the-nemesis" },
            { type: "not-title", value: "title-the-space-cowboy" }
        ],
        consequences: []
    },
    {
        id: "title-the-fatebreaker",
        title: "The Fatebreaker",
        bonusCredits: 420000000,
        complications: [
            "Receive all complications from The Whisperer, The Sleeper and The Traveler."
        ],
        imageSrc: "/Images/Beatrice R&D.webp",
        description: "Receive all complications from The Whisperer, The Sleeper and The Traveler. Bonus starting credits: 420m *Cannot take The Whisperer, The Sleeper, or The Traveler",
        prerequisites: [
            { type: "not-title", value: "title-the-whisperer" },
            { type: "not-title", value: "title-the-sleeper" },
            { type: "not-title", value: "title-the-traveler" }
        ],
        consequences: []
    },
    {
        id: "title-the-demigod",
        title: "The Demigod",
        bonusCredits: 440000000,
        complications: [
            "Receive all complications and crew members from The Guardian and The Sorcerer."
        ],
        imageSrc: "/Images/Beatrice R&D.webp",
        description: "Receive all complications and crew members from The Guardian and The Sorcerer. Bonus starting credits: 440m *Cannot take The Guardian or The Sorcerer",
        prerequisites: [
            { type: "not-title", value: "title-the-guardian" },
            { type: "not-title", value: "title-the-sorcerer" }
        ],
        consequences: []
    }
];

const origins = [
    {
        id: "origin-federation-navy",
        title: "Federation Navy",
        hostiles: ["Red Daggers", "Talons", "Luos Syndicate"],
        description: "The venerable Federation Navy is the largest military space armada in the civilized galaxy. Consisting of many thousands of ships across many hundreds of branches, there is simply no force capable going toe-to-toe with them. Granted, with such a big sovereignty, the Navy is oftentimes spread thin, mobilizing as one only for extreme circumstances. Training to be a part of the Navy is extensive, thorough and disciplined, but it's known to reward many benefits... if sailing across the stars in some of the best tech around isn't enough, that is.",
        playerUpdates: [
            { attribute: "credits", action: "add", value: 100000000 }, // Base starting credits
            { attribute: "hull-discount", faction: "Federation Navy", value: 6000000 }
        ]
    },
    {
        id: "origin-federation-spec-ops",
        title: "Federation Spec Ops Forces",
        hostiles: ["Red Daggers", "Talons", "Luos Syndicate"],
        description: "Amidst the Federation's military might are its veritable spec ops programs, and there are many to choose from. Everything from solving internal strife to deploying in the outer-rim systems where piracy is large is inclusive; your stay won't be boring. However, your identity is often concealed, your social life often thrown out the window, and you won't really have many people to talk to other than your brothers and sisters of the forces. To some, that's worth it for a handful of the best skills in the galaxy",
        playerUpdates: [
            { attribute: "credits", action: "add", value: 120000000 }, // 100m + 20m bonus
            { attribute: "hull-discount", faction: "Triglav", value: 4000000 },
            { attribute: "hull-discount", faction: "Federation Navy", value: 4000000 }
        ]
    },
    {
        id: "origin-federation-civilian",
        title: "Federation Civilian",
        hostiles: [],
        description: "Not from the military? No problem! Renowned Federation schools like Rosette University or the University of Arcadia don't offer pilot training without a reason, and that's just two of potentially thousands. Space- faring might be expensive to most people, but all it takes is a good set of skills and a healthy amount of credits to find yourself out of the atmos- phere. Many from the Federation venture out almost aimlessly, often finding themselves a part of different factions. In fact, that's how many of these factions were born.",
        playerUpdates: [
            { attribute: "credits", action: "add", value: 100000000 }
        ]
    },
    {
        id: "origin-red-dagger-pirates",
        title: "Red Dagger Pirates",
        hostiles: ["Federation", "Blackhawk Elite"],
        description: "The Red Dagger Pirates are more of a coalition of several pirate groups spanning across the entirety of the civilized galaxy. While each group or gang more or less operate independently, they all generally have good standing with each other and can collaborate when needed. When it comes time for large scale conflict, they have a surprising ability to unite and mobilize almost as a make-shift military group fairly quickly. They've established a surprisingly efficient production line and have massive networks of shipyards across the outer rims.",
        playerUpdates: [
            { attribute: "credits", action: "add", value: 100000000 },
            { attribute: "hull-discount", faction: "Red Dagger Pirates", value: 6000000 }
        ]
    },
    {
        id: "origin-talons",
        title: "Talons",
        hostiles: ["Federation", "Blackhawk Elite"],
        description: "Not much is known about the Talons to other factions, but they tend to operate within their own unknown purpose. Initially labeled as a pirate group by the Federation, the Talons are known to employ some of the greatest skilled individuals in the galaxy. They are known for their notori- ous reputation of a classy but skilled and intelligent touch. Unlike other 'pirate' groups, the Talons bolster technology that could rival the likes of the Blackhawks and Federation Spec Ops. A Talon appearance is rare and surprising, and often an indicator that something's going down.",
        playerUpdates: [
            { attribute: "credits", action: "add", value: 100000000 },
            { attribute: "hull-discount", faction: "Talon", value: 6000000 }
        ]
    },
    {
        id: "origin-luos-syndicate",
        title: "Luos Syndicate",
        hostiles: ["Federation", "Blackhawk Elite"],
        description: "It has all come tumbling down for the Syndicate. A once large collective wealthy and powerful corporations, now crumbled and bombarded to dust by the recent Federation and Blackhawk galaxy-wide assault. Originally founded under the best of intentions while even establishing a big sovereignty and culture, corruption soon ran rampant, and the Syndi- cate found itself the centre of many shady trades. While not all of its members were inherently bad, all of its surviving corps and groups split, mainly between the feuding \"Core\" and \"Outer\" rings of organizations.",
        playerUpdates: [
            { attribute: "credits", action: "add", value: 100000000 },
            { attribute: "hull-discount", faction: "Talon", value: 4000000 },
            { attribute: "hull-discount", faction: "Red Dagger", value: 4000000 },
            { attribute: "hull-discount", faction: "Luos Syndicate", value: 4000000 }
        ]
    },
    {
        id: "origin-blackhawk-elite",
        title: "Blackhawk Elite",
        hostiles: ["Red Daggers", "Talons", "Luos Syndicate"],
        description: "As a collective of many mercenary groups, the Blackhawk Elites are known as some of the most elite mercenaries out there. They spend most of their time out in the outer rims, providing protection to those out of the Federation's protective reach and need it. They come into contact with bandits and pirates alike often, but that's the life that the Black- hawks strive for. Their society is highly militaristic, focused on bleeding discipline into its members because that's the type of mindset they need.",
        playerUpdates: [
            { attribute: "credits", action: "add", value: 100000000 },
            { attribute: "hull-discount", faction: "Blackhawk Elite", value: 6000000 }
        ]
    },
    {
        id: "origin-hammerhead-industries",
        title: "Hammerhead Industries",
        hostiles: [],
        description: "As the largest hardware manufacturer in the galaxy, Hammerhead Industries have established their own colonies that are home to a lot of productive and skilled individuals. This multi-trillion credit company produces many much-needed mechanics and engineers for the ever expanding industry of space faring and exploration. Their ships are everywhere, used by civilians, security groups, PMCs, and bandits alike. Show your skills as a down and dirty soot-lover and it won't be hard to strike gold in the industry world.",
        playerUpdates: [
            { attribute: "credits", action: "add", value: 100000000 },
            { attribute: "vehicle-mech-discount", value: 2000000, min: 1000000 }
        ]
    },
    {
        id: "origin-society-of-dustkeepers",
        title: "Society of Dustkeepers",
        hostiles: [],
        description: "\"Dustkeeper\" is more of a title than a faction. However, if you ever find yourself spelunking the depths of space in search of adventure and fortune on your lonesome, you'll also find yourself talking with others like yourself very often. Whether it's for the thrill of finding things never seen before or for the heaps of credits that ancient Herald artifacts can bring you, to others, it's all the same; you're a Dustkeeper. Maybe you travel alone, or maybe you travel with a band of like-minded people. Your purpose is seldom spoken, even if you get asked about it a lot.",
        playerUpdates: [
            { attribute: "credits", action: "add", value: 100000000 },
            { attribute: "weapon-discount", type: "kinetic", tier: 2, value: 1000000 }
        ]
    },
    {
        id: "origin-beatrice-r-and-d",
        title: "Beatrice R&D",
        hostiles: [],
        description: "Easily the most renowned scientific research company, Beatrice R&D is one of the reasons that space colonization has become a thing. Full of brilliant minds that spearhead the advancement of sciences, they've become so efficient at space exploration and terraforming that they have become self-sustaining colony on their own. After earning their independence from the Federation, Beatrice R&D continues to earn its respect from all entities. If not for their passive nature, then for their promise for taking humanity into new age upon new age.",
        playerUpdates: [
            { attribute: "credits", action: "add", value: 100000000 },
            { attribute: "drone-discount", value: 1000000, min: 1000000 }
        ]
    },
    {
        id: "origin-gazer",
        title: "Gazer",
        hostiles: ["Unknown"],
        description: "Some say that getting an invitation to join the Gazers is less likely than passing some of the Federation's top SOF programs, and many wouldn't doubt that. Ominously shady with an origin unknown, Gazer operators are among the best in the galaxy, even if the group is very small. With no side but their own, they often take on the \"big guys\" despite the horren- dous number differences. Their motives? Nobody but they know, and even some Gazers claim to not even know. As far as anyone can tell, they cause a ruckus for their own amusement.",
        playerUpdates: [
            { attribute: "credits", action: "add", value: 100000000 },
            { attribute: "hull-discount", faction: "Blackhawk Elite", value: 4000000 },
            { attribute: "hull-discount", faction: "Talon", value: 4000000 },
            { attribute: "hull-discount", faction: "Triglav", value: 4000000 }
        ]
    },
    {
        id: "origin-choose-your-own-adventure",
        title: "Choose Your Own Adventure",
        hostiles: [], // User can define
        description: "Perhaps you want to have your own origins. How did you inherit the millions of credits? Who are your friends, and who are your enemies? You can choose what alignment you wish. This is your adventure, so make it your own.",
        playerUpdates: [
            { attribute: "credits", action: "add", value: 100000000 },
            { attribute: "hull-discount", value: 3000000 } // 3m off all ship hulls
        ]
    }
];


const crew = [
    // This array contains data for various crew members and archetypes.
// Each object represents a worker with attributes:
// - name: The name of the crew member.
// - Skill Level: A numerical representation of their skill (e.g., 1m, 2m, etc.).
// - alignment: Their faction or general alignment (e.g., Neutral, Federation, Red Daggers).
// - cost: The hiring cost of the crew member.
// - description: A brief description of the crew member.
// - specialty: Their primary area of expertise.
// - equipment: Any specific equipment they are noted to have.
// If an attribute is missing from the source, it is assigned a value of 0.

  // --- Specific Pilot Characters ---
  {
    name: "Anna Tse",
    skillLevel: 0, // Not explicitly stated, but implied by context as a pilot
    alignment: "Neutral",
    cost: "1m",
    description: "Fresh pilot program grad, super loyal.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    name: "Gregor Hunter",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "2m",
    description: "Your brother-like, experienced outer-rim guy.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    name: "Pepper",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "1m",
    description: "Naive but loves flying, wants to be a co-pilot.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    name: "Horace Carter",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "2m",
    description: "Vehicle enthusiast, desperate to be a pilot-for-hire.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    name: "Kay Hunter",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "2m",
    description: "Gregor's younger sister, no experience, needs your guidance.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    name: "Elijah Horton",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "2m",
    description: "Old-fashioned but skilled pilot, great at negotiating.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    name: "Sgt. Mark LeCruz",
    skillLevel: 0,
    alignment: "Federation",
    cost: "2m",
    description: "Ace pilot, led a fighter squad, great asset.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    name: "Jacqueline Young",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "2m",
    description: "Piloted scouting vessels, good at dodging asteroids.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    name: "Alvin Reyes",
    skillLevel: 0,
    alignment: "Blackhawk Elite",
    cost: "3m",
    description: "Young gun, wants experience to prove himself.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    name: "Tiffany Manson",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "3m",
    description: "Used to escort science and exploration vessels.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    name: "Susan Zim",
    skillLevel: 0,
    alignment: "Red Daggers",
    cost: "3m",
    description: "Sharp, partook in risky heists with a powerful gang.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    name: "Tyler Vaughn",
    skillLevel: 0,
    alignment: "Federation",
    cost: "3m",
    description: "Wealthy background, master tactician from the Navy.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    name: "Ivan Chesnikov",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "4m",
    description: "Masked merc, friendly despite his past.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    name: "Milka Star",
    skillLevel: 0,
    alignment: "Red Daggers",
    cost: "4m",
    description: "Polite, shy, Red Dagger who dislikes the Federation, has a dog.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    name: "Royce Kodai",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "4m",
    description: "Exceptional police officer, chased criminals in high-speed pursuits.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    name: "Mokhov Petrovich",
    skillLevel: 0,
    alignment: "Blackhawk Elite",
    cost: "4m",
    description: "Former drill sergeant seeking vengeance.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    name: "E.R.I.",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "5m",
    description: "Sapient android, great pilot, not so good with social cues.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    name: "Wes Lunso",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "5m",
    description: "Former merc, loves flying and racing.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    name: "Lia Stitt",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "5m",
    description: "Thirsty for adventure, opportunist, loves detours.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    name: "Hailey",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "Special cost",
    description: "Requires 'The Guardian' title. Quiet, psi powers, knows what you'll say.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    name: "Conrad Byrant",
    skillLevel: 0,
    alignment: "Blackhawk Elite",
    cost: "5m",
    description: "Loyal, can fly for days without rest.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    name: "Mikayla Stone",
    skillLevel: 0,
    alignment: "Gazers",
    cost: "6m",
    description: "Elite Gazer pilot, bold, brash, keeps her cool.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    name: "David \"Tabs\" Sharp",
    skillLevel: 0,
    alignment: "Talons",
    cost: "6m",
    description: "Pilot prodigy, part of risky Talon ops, a little haughty.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    name: "Tera en Chasteaux",
    skillLevel: 0,
    alignment: "Federation",
    cost: "7m",
    description: "Best Fed pilot training, controlled her own patrol fleet.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    name: "Dorian Krueger",
    skillLevel: 0,
    alignment: "Federation",
    cost: "9m",
    description: "Battle-hardened SOF pilot, man of few words.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    name: "Ise Ley'is",
    skillLevel: 0,
    alignment: "Luos Syndicate",
    cost: "9m",
    description: "Ruthless, high-rank former PMC, respects strength.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    name: "Lux",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "14m",
    description: "One of the best pilots for hire, sense of humor, mysterious past.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    name: "Zetta",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "18m",
    description: "Origins unknown, obedient if you're competent.",
    specialty: "Pilot",
    equipment: 0,
  },

  // --- Engineers ---
  {
    name: "Enrico Jourdan",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "1m",
    description: "Kind, loyal, cheap handiwork, no questions asked.",
    specialty: "Engineer",
    equipment: 0,
  },
  {
    name: "Derek Windtalker",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "2m",
    description: "From a rare line of mechanics, believes he's one with metal.",
    specialty: "Engineer",
    equipment: 0,
  },
  {
    name: "Alena Bach",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "2m",
    description: "Exceptional inventor, new to starship mechanics, wants to impress.",
    specialty: "Engineer",
    equipment: 0,
  },
  {
    name: "Malcolm Red",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "2m",
    description: "Blames everything for not doing his job, skilled with a crowbar.",
    specialty: "Engineer",
    equipment: "Crowbar",
  },
  {
    name: "Adan Cervantes",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "3m",
    description: "Highly intelligent nuclear engineer, radiation burns, life-support suit.",
    specialty: "Nuclear Engineer",
    equipment: "Life-support suit",
  },
  {
    name: "Trainwreck",
    skillLevel: 0,
    alignment: "Red Daggers",
    cost: "3m",
    description: "Can keep a 'shit sandwich' moving, wants to build a tank.",
    specialty: "Engineer",
    equipment: 0,
  },
  {
    name: "Trisha \"Props\" Lim",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "3m",
    description: "Hobbyist mechanic, loves tinkering, bubbly personality.",
    specialty: "Mechanic",
    equipment: 0,
  },
  {
    name: "Troy Hall",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "3m",
    description: "Loves working with machines, metal arm useful.",
    specialty: "Engineer",
    equipment: "Metal arm",
  },
  {
    name: "Cindy Kayoko",
    skillLevel: 0,
    alignment: "Red Daggers",
    cost: "4m",
    description: "Popular among Red Daggers, worked with questionable machinery, not political.",
    specialty: "Engineer",
    equipment: 0,
  },
  {
    name: "Amy McCartney",
    skillLevel: 0,
    alignment: "Federation",
    cost: "4m",
    description: "Revered scientist, graceful, sings, wants a tavern.",
    specialty: "Scientist (Engineer)",
    equipment: 0,
  },
  {
    name: "Roxanne Gilliam",
    skillLevel: 0,
    alignment: "Talons",
    cost: "4m",
    description: "Led nuclear research in Talon labs, anti-matter tech.",
    specialty: "Nuclear Research (Engineer)",
    equipment: 0,
  },
  {
    name: "Mereille Fairley",
    skillLevel: 0,
    alignment: "Federation",
    cost: "4m",
    description: "Geek with Fed gadgets, device for any situation.",
    specialty: "Gadgeteer (Engineer)",
    equipment: "Fed gadgets",
  },
  {
    name: "Arthur Foster",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "5m",
    description: "Studied under big names, offers skills for a challenge.",
    specialty: "Engineer",
    equipment: 0,
  },
  {
    name: "Reid Enos",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "6m",
    description: "Mad scientist, knows lots about nuclear tech.",
    specialty: "Nuclear Tech (Engineer)",
    equipment: 0,
  },

  // --- Doctors ---
  {
    name: "Kelly Moss",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "Free!",
    description: "Cannot be alone in advanced infirmary, volunteered to aid the poor.",
    specialty: "Medic",
    equipment: 0,
  },
  {
    name: "Bethany Parks",
    skillLevel: 0,
    alignment: "Federation",
    cost: "1m",
    description: "Fresh out of medical school, wants field experience, loves cats.",
    specialty: "Medic",
    equipment: 0,
  },
  {
    name: "Ignacio Lopez",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "2m",
    description: "Cares only for medical books, competent medic with a workplace.",
    specialty: "Medic",
    equipment: 0,
  },
  // Trisha "Props" Lim is listed under Engineers and Doctors, will keep her under Engineers only as she is described as a "Hobbyist mechanic"
  {
    name: "Tina Wei",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "4m",
    description: "Former merc medic, used to stress of high demand.",
    specialty: "Merc Medic",
    equipment: 0,
  },
  {
    name: "Lupe",
    skillLevel: 0,
    alignment: "Red Daggers",
    cost: "4m",
    description: "Technically a doctor, but unconventional, pirate miracle worker.",
    specialty: "Unconventional Doctor",
    equipment: 0,
  },
  {
    name: "Devon Trice",
    skillLevel: 0,
    alignment: "Blackhawk Elite",
    cost: "5m",
    description: "Stalwart Blackhawk, favors less violent life, skilled in combat.",
    specialty: "Medic (Combat Skilled)",
    equipment: 0,
  },
  {
    name: "Lyra Miralda",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "7m",
    description: "Young, in medical textbooks, quick, efficient, a little awkward.",
    specialty: "Medic",
    equipment: 0,
  },

  // --- Ship Gunners ---
  {
    name: "Brian Richardson",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "1m",
    description: "Knows everything about ship weapons, student who'd drop studies for gunner job.",
    specialty: "Ship Weapons",
    equipment: 0,
  },
  {
    name: "Seer",
    skillLevel: 0,
    alignment: "Red Daggers",
    cost: "1m",
    description: "Bad history, prime pirate example, unsavory even to Red Daggers.",
    specialty: "Ship Gunner",
    equipment: 0,
  },
  {
    name: "Elizabeth Tyler",
    skillLevel: 0,
    alignment: "Federation",
    cost: "2m",
    description: "Part of rare Fed patrols, met action but inexperienced.",
    specialty: "Ship Gunner",
    equipment: 0,
  },
  {
    name: "Alton Daniel",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "2m",
    description: "From a backwater planet, skilled in ship gunning.",
    specialty: "Ship Gunner",
    equipment: 0,
  },
  {
    name: "John Pope",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "3m",
    description: "Former merchant, quick aim from bandit attacks.",
    specialty: "Ship Gunner",
    equipment: 0,
  },
  {
    name: "Theresa Herder",
    skillLevel: 0,
    alignment: "Blackhawk Elite",
    cost: "3m",
    description: "Former Fed gunner, Blackhawk Elite, disciplined but laid-back off work.",
    specialty: "Ship Gunner",
    equipment: 0,
  },
  {
    name: "Vis'yeth",
    skillLevel: 0,
    alignment: "Luos Syndicate",
    cost: "4m",
    description: "Mysterious, took down three cruisers himself in Haven defence.",
    specialty: "Ship Gunner",
    equipment: 0,
  },
  {
    name: "Clara \"Sun\" Howell",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "4m",
    description: "Fiery and passionate, fun to tease about being a ginger.",
    specialty: "Ship Gunner",
    equipment: 0,
  },
  {
    name: "Faith Nichols",
    skillLevel: 0,
    alignment: "Federation",
    cost: "4m",
    description: "From Fed SOF, high-tech equipment, very innocent.",
    specialty: "Ship Gunner",
    equipment: "High-tech equipment",
  },
  {
    name: "Comet",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "Special cost",
    description: "Requires 'The Sorcerer' title, body mingles with energy.",
    specialty: "Ship Gunner",
    equipment: 0,
  },
  {
    name: "Viktor",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "5m",
    description: "Down to earth, professional, reliable ship gunner.",
    specialty: "Ship Gunner",
    equipment: 0,
  },
  {
    name: "Tavia \"Echo\" Tsun",
    skillLevel: 0,
    alignment: "Talons",
    cost: "5m",
    description: "Rare Talon for hire, intimidating but down-to-earth, don't call her Tavi.",
    specialty: "Ship Gunner",
    equipment: 0,
  },
  {
    name: "Lt. Bill Smith",
    skillLevel: 0,
    alignment: "Federation",
    cost: "5m",
    description: "Veteran gunner, hits hard and ruthlessly.",
    specialty: "Ship Gunner",
    equipment: 0,
  },
  {
    name: "Amanda Lynch",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "6m",
    description: "Fast, strong-willed, never lost a fleet fight, defended industrial areas.",
    specialty: "Ship Gunner",
    equipment: 0,
  },

  // --- Combat & Security ---
  {
    name: "Owen Baker",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "1m",
    description: "Drove out bandits from his homeworld.",
    specialty: "Guerilla warfare",
    equipment: 0,
  },
  {
    name: "Sasha Baker",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "1m",
    description: "Owen's younger sister, crack shot, too many kill notches.",
    specialty: "Sniping",
    equipment: 0,
  },
  {
    name: "Myrie Shaffer",
    skillLevel: 0,
    alignment: "Red Daggers",
    cost: "2m",
    description: "Worked for notorious pirate gang, makes deals go her way.",
    specialty: "Storming",
    equipment: 0,
  },
  {
    name: "Pierre Mikisugi",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "2m",
    description: "Good cop, part of high-stake raids.",
    specialty: "Ship security",
    equipment: 0,
  },
  {
    name: "Sophie Haynes",
    skillLevel: 0,
    alignment: "Federation",
    cost: "2m",
    description: "Faith Nichols' friend, quick, witty, has a sixth sense for bad vibes.",
    specialty: "Covert ops",
    equipment: 0,
  },
  {
    name: "Grzegorz Grzegrzółka",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "2m",
    description: "Ex-cop, works to pay for his sister's education, does things his own way.",
    specialty: "Ship security",
    equipment: 0,
  },
  {
    name: "Ley'ra Laur",
    skillLevel: 0,
    alignment: "Luos Syndicate",
    cost: "3m",
    description: "Steel nerves, took point in battles, lost her high-tech armor, shy off-duty.",
    specialty: "Point position",
    equipment: "Lost high-tech armor",
  },
  {
    name: "Dani \"Cuts\" Laine",
    skillLevel: 0,
    alignment: "Blackhawk Elite",
    cost: "3m",
    description: "Aggressive, blunt, fireteam leader, helped reduce crime in 3 systems.",
    specialty: "Long-range",
    equipment: 0,
  },
  {
    name: "Ward Shapiro",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "3m",
    description: "Joined security to finish his book, got conscripted and sent to front lines.",
    specialty: "Sentry",
    equipment: 0,
  },
  {
    name: "Sgt. Raul Miller",
    skillLevel: 0,
    alignment: "Federation",
    cost: "3m",
    description: "Stationed on an ice planet, dealt with pirates and cartels, navigates tough terrain.",
    specialty: "Front-line assault",
    equipment: 0,
  },
  {
    name: "Erik \"Sooter\" Burke",
    skillLevel: 0,
    alignment: "Red Daggers",
    cost: "3m",
    description: "Not smart in other areas, but a great rank-and-file pirate with a weapon. Don't make him mad.",
    specialty: "Front-line assault",
    equipment: "Weapon",
  },
  {
    name: "Vikram Solar",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "4m",
    description: "Loves laser weapons, refuses conventional ammo ('messy'), a bit of a neat freak.",
    specialty: "Long-range (Laser Weapons)",
    equipment: "Laser weapons",
  },
  {
    name: "Darrel Wallace",
    skillLevel: 0,
    alignment: "Blackhawk Elite",
    cost: "4m",
    description: "Flew in many fleets, top-notch on-ship security, tough like the Blackhawks.",
    specialty: "Sentry (On-ship security)",
    equipment: 0,
  },
  {
    name: "Rooks King",
    skillLevel: 0,
    alignment: "Gazers",
    cost: "5m",
    description: "Skilled Gazer operator, hangs with Dustkeepers, his disappearances are ignored.",
    specialty: "Guerilla warfare",
    equipment: 0,
  },
  {
    name: "Livia Amaruq",
    skillLevel: 0,
    alignment: "Federation",
    cost: "5m",
    description: "Ex-operative from Fed SOF, worked on the same ice planet as Sgt. Raul, looks deadly.",
    specialty: "Hand-to-hand",
    equipment: 0,
  },
  {
    name: "Scot Shephard",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "5m",
    description: "SWAT in a big city, seen the worst of humanity.",
    specialty: "Storming",
    equipment: 0,
  },
  {
    name: "Alessia",
    skillLevel: 0,
    alignment: "Talons",
    cost: "5m",
    description: "Hot-headed, wants to strangle her brother Ricce, don't get in her way.",
    specialty: "Long-ranged",
    equipment: 0,
  },
  {
    name: "Ricce",
    skillLevel: 0,
    alignment: "Federation",
    cost: "5m",
    description: "Stalwart soldier in high-tech armor, a force on the battlefield. Silent about his sister Alessia.",
    specialty: "Front-line assault",
    equipment: "High-tech armor",
  },
  {
    name: "Arabelle Meyer",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "5m",
    description: "Disciplined, patient, cunning assassin, great at hiding.",
    specialty: "Sniping (Assassin)",
    equipment: 0,
  },
  {
    name: "Marcelo Lee",
    skillLevel: 0,
    alignment: "Talons",
    cost: "6m",
    description: "Rare Talon for hire, has cool gadgets, solo mission experience.",
    specialty: "Guerilla warfare",
    equipment: "Cool gadgets",
  },
  {
    name: "Lt. Jenny Larue",
    skillLevel: 0,
    alignment: "Federation",
    cost: "6m",
    description: "Top Fed SOF officer, commands with a valiant heart, known for 'strict kindness,' often works under Tera.",
    specialty: "Point position",
    equipment: 0,
  },
  {
    name: "Martin Jenkins",
    skillLevel: 0,
    alignment: "Blackhawk Elite",
    cost: "6m",
    description: "Iconic Blackhawk Elite shock trooper, leads conflicts with unstoppable momentum.",
    specialty: "Storming (Shock Trooper)",
    equipment: 0,
  },
  {
    name: "My'hra Jos",
    skillLevel: 0,
    alignment: "Luos Syndicate",
    cost: "7m",
    description: "Skilled ground officer in a small PMC, helped defend the Abyss system.",
    specialty: "Infiltration",
    equipment: 0,
  },
  {
    name: "Patch Newton",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "7m",
    description: "Notorious, deadly assassin with a rifle. Built his own unique hardware, 'one with his armor.'",
    specialty: "Sniping (Assassin)",
    equipment: "Rifle, unique hardware",
  },
  {
    name: "Locust",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "14m",
    description: "'Rider of Famine,' can destroy armies with his blade, from the classified Apocalypse program.",
    specialty: "Hand-to-hand (Blade)",
    equipment: "Blade",
  },
  {
    name: "Plague",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "15m",
    description: "'Rider of Pestilence,' toughest armor, strongest in brute force, one of the four separated Riders.",
    specialty: "Front-line assault (Brute Force)",
    equipment: "Toughest armor",
  },
  {
    name: "Archangel",
    skillLevel: 0,
    alignment: "Federation",
    cost: "17m",
    description: "'Rider of War,' wields a unique Ion Cannon, loyal to the Federation.",
    specialty: "Heavy weapons",
    equipment: "Unique Ion Cannon",
  },
  {
    name: "Styx",
    skillLevel: 0,
    alignment: "Herself",
    cost: "18m",
    description: "'Rider of Death,' holds a terrible grudge against the Federation after defection, respects her siblings.",
    specialty: "Infiltration",
    equipment: 0,
  },

  // --- Cyber Security Officers ---
  {
    name: "Perry West",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "3m",
    description: "From a big company, great at electronic warfare, your ship will be well defended.",
    specialty: "Electronic warfare",
    equipment: 0,
  },
  {
    name: "Erica \"761\"",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "4m",
    description: "Dropped out of university, cut ties, now wants to join your crew.",
    specialty: "Cyber Security",
    equipment: 0,
  },
  {
    name: "Damian Galt",
    skillLevel: 0,
    alignment: "Red Daggers",
    cost: "4m",
    description: "Has an excellent service record and a lot of illegally obtained porn. Will awkwardly hit on female crew over the PA. Constantly.",
    specialty: "Cyber Security",
    equipment: 0,
  },
  {
    name: "Slash Singer",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "4m",
    description: "Brilliant programmer, can bypass tough security, has lots of 'skeleton key' decryption programs.",
    specialty: "Programmer (Security Bypass)",
    equipment: "'Skeleton key' decryption programs",
  },
  {
    name: "Veslav Smertodov",
    skillLevel: 0,
    alignment: "Talons",
    cost: "6m",
    description: "Well-known Talon hacker, expert with AI, good at multitasking, often fought 'Arachne' in cyber battles.",
    specialty: "Hacker (AI Expert)",
    equipment: 0,
  },
  {
    name: "Arachne",
    skillLevel: 0,
    alignment: "Federation",
    cost: "6m",
    description: "Ex-military intelligence officer, can go head-to-head with notorious hackers in cyber warfare.",
    specialty: "Cyber warfare",
    equipment: 0,
  },
  {
    name: "Uplink",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "12m",
    description: "Expensive to install, one of the few sapient AI androids, wants access to all information.",
    specialty: "AI Android (Information Access)",
    equipment: 0,
  },

  // --- Scientists ---
  {
    name: "Lauren L. Lazuli",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "Free!",
    description: "Found her in your lab, caffeine packets everywhere, feverishly working on a thesis, sleeps in the lab.",
    specialty: "Scientist (Thesis)",
    equipment: 0,
  },
  {
    name: "Curt Robertson",
    skillLevel: 0,
    alignment: "Federation",
    cost: "1m",
    description: "Believes you shouldn't abandon your body, human biology specialist, very tall due to his research.",
    specialty: "Human biology",
    equipment: 0,
  },
  {
    name: "Emily Newton",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "1m",
    description: "Morally against combat ships, expert in xenobiology and terraforming, a bit eccentric.",
    specialty: "Xenobiology, Terraforming",
    equipment: 0,
  },
  {
    name: "Sarah Escher",
    skillLevel: 0,
    alignment: "Red Daggers",
    cost: "2m",
    description: "Super smart but short attention span, frequent experiments with mana energy gave her an eerie glow.",
    specialty: "Mana energy experiments",
    equipment: 0,
  },
  {
    name: "Shinichi Yagazen",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "3m",
    description: "Biology, bioengineering, chemistry, and biological warfare expert. Wanted for questionable experiments and creating bioweapons.",
    specialty: "Biology, Bioengineering, Chemistry, Biological Warfare",
    equipment: 0,
  },
  {
    name: "Isaac J. Bidlack",
    skillLevel: 0,
    alignment: "Federation",
    cost: "3m",
    description: "Years of study, research increased galactic agricultural production by half a percent. Likes candied fish.",
    specialty: "Agricultural production research",
    equipment: 0,
  },
  {
    name: "Wilhelm von Welch",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "5m",
    description: "Brilliant and mad, strict scientist obsessed with learning about the Heralds.",
    specialty: "Heralds research",
    equipment: 0,
  },

  // --- Production Managers ---
  {
    name: "Sibyl",
    skillLevel: 0,
    alignment: "Red Daggers",
    cost: "1m",
    description: "Worked in Red Dagger industrial wings for 20+ years, knows lots of mining and manufacturing tricks.",
    specialty: "Mining, Manufacturing",
    equipment: 0,
  },
  {
    name: "Madeline Moran",
    skillLevel: 0,
    alignment: "Blackhawk Elite",
    cost: "2m",
    description: "Crucial to Blackhawk Elite's hardware might, keeps them going strong.",
    specialty: "Hardware production",
    equipment: 0,
  },
  {
    name: "Wesley Chalmers",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "2m",
    description: "Always gets the job done, even if your ship is falling apart.",
    specialty: "Production Management",
    equipment: 0,
  },
  {
    name: "Corrine Peyton",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "3m",
    description: "Serious and authoritative in industrial wings, workers obey or face a long, deafening scolding.",
    specialty: "Industrial Management",
    equipment: 0,
  },
  {
    name: "Ty Piper",
    skillLevel: 0,
    alignment: "Federation",
    cost: "3m",
    description: "Great production manager, excellent track record from Fed industrial systems, promotes efficiency and work ethics.",
    specialty: "Production Management (Efficiency)",
    equipment: 0,
  },
  {
    name: "May Padilla",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "4m",
    description: "Hard worker, speeds things up, likes to boast about her strength.",
    specialty: "Production Management",
    equipment: 0,
  },
  {
    name: "Michael Danagger",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "6m",
    description: "Super successful industrialist, his company fueled shipping businesses in over a dozen systems.",
    specialty: "Industrialist",
    equipment: 0,
  },

  // --- Chefs & Bartenders ---
  {
    name: "Jorgen Masterson",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "1m",
    description: "Retired merc who became a chef. Served on prison transports, capable and ingenious cook.",
    specialty: "Chef",
    equipment: 0,
  },
  {
    name: "Mikka Akimoto",
    skillLevel: 0,
    alignment: "Red Daggers",
    cost: "1m",
    description: "Specializes in Japanese and other Asian cuisines. Sushi and ramen are timeless.",
    specialty: "Chef (Japanese/Asian Cuisine)",
    equipment: 0,
  },
  {
    name: "Patricia Cooper",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "2m",
    description: "Loves to cook, takes charge in the kitchen, enjoys working with European cuisines.",
    specialty: "Chef (European Cuisine)",
    equipment: 0,
  },
  {
    name: "Vito Lozano",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "4m",
    description: "Will only use a fancy mess hall. Do not disturb when he's cooking. His spaghetti is perfection.",
    specialty: "Chef",
    equipment: 0,
  },
  {
    name: "Laurie Parsons",
    skillLevel: 0,
    alignment: "Federation",
    cost: "1m",
    description: "Typical bartender, listens to your problems, perfect for standard mixes.",
    specialty: "Bartender",
    equipment: 0,
  },
  {
    name: "Carolyn Brooks",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "2m",
    description: "Playful and outgoing, aims for smiles with every serve, loves mixing fancy drinks.",
    specialty: "Bartender (Fancy Drinks)",
    equipment: 0,
  },
  {
    name: "Hal",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "4m",
    description: "Former assassin, has many stories, might have 'special' mixes that need a lab.",
    specialty: "Bartender (Special Mixes)",
    equipment: 0,
  },

  // --- Pilot Archetypes ---
  {
    name: "Wingman",
    skillLevel: 0,
    alignment: "Fighter",
    cost: "1m",
    description: "Average fighter pilot, best in formations, coordinates well.",
    specialty: "Pilot (Formations)",
    equipment: 0,
  },
  {
    name: "Racer",
    skillLevel: 0,
    alignment: "Fighter",
    cost: "1m",
    description: "Cares more about speed than fighting, but can still fly well.",
    specialty: "Pilot (Speed)",
    equipment: 0,
  },
  {
    name: "Ace",
    skillLevel: 0,
    alignment: "Frigate",
    cost: "3m",
    description: "Has combat history, led formations, very skilled in a Fighter.",
    specialty: "Pilot (Combat, Formations)",
    equipment: 0,
  },
  {
    name: "Lieutenant",
    skillLevel: 0,
    alignment: "Destroyer",
    cost: "4m",
    description: "Can lead a decent crew, responsible, keeps crew in check.",
    specialty: "Pilot (Crew Leadership)",
    equipment: 0,
  },
  {
    name: "Lt. Commander",
    skillLevel: 0,
    alignment: "Cruiser",
    cost: "6m",
    description: "Made a name for themselves, competent at leading lots of people.",
    specialty: "Pilot (Large Crew Leadership)",
    equipment: 0,
  },
  {
    name: "Commander",
    skillLevel: 0,
    alignment: "Carrier",
    cost: "7m",
    description: "Trustworthy for big ships, holds the ship together, people follow them.",
    specialty: "Pilot (Large Ship Command)",
    equipment: 0,
  },
  {
    name: "Captain",
    skillLevel: 0,
    alignment: "Dreadnought",
    cost: "8m",
    description: "The most experienced and capable pilot for the largest ships.",
    specialty: "Pilot (Dreadnought Command)",
    equipment: 0,
  },

  // --- Crew Archetypes ---
  {
    name: "Volunteers",
    skillLevel: 0,
    alignment: 0,
    cost: "Free!",
    description: "They'll get the job done, but they're not pros.",
    specialty: "General Crew",
    equipment: 0,
  },
  {
    name: "Industry Laborers",
    skillLevel: 0,
    alignment: 0,
    cost: "0.1m",
    description: "Need work done? These folks will get your mining, manufacturing, and processing needs sorted efficiently.",
    specialty: "Mining, Manufacturing, Processing",
    equipment: 0,
  },
  {
    name: "Civilian Workers",
    skillLevel: 0,
    alignment: 0,
    cost: "0.1m",
    description: "Plenty of civilians are looking for legit work, and they make great space-faring crew.",
    specialty: "General Crew",
    equipment: 0,
  },
  {
    name: "Researchers",
    skillLevel: 0,
    alignment: 0,
    cost: "0.1m",
    description: "For science and discovery among endless stars, these researchers make for a super intelligent crew.",
    specialty: "Science, Discovery",
    equipment: 0,
  },
  {
    name: "Bandits",
    skillLevel: 0,
    alignment: 0,
    cost: "0.1m",
    description: "An average bandit can be a hard-working crew member, as long as you can get them to respect you.",
    specialty: "General Crew",
    equipment: 0,
  },
  {
    name: "Explorers",
    skillLevel: 0,
    alignment: 0,
    cost: "0.1m",
    description: "These guys are cursed with an endless thirst for exploration and love the stars almost as much as you do.",
    specialty: "Exploration",
    equipment: 0,
  },
  {
    name: "Medics",
    skillLevel: 0,
    alignment: 0,
    cost: "0.1m",
    description: "Medical knowledge is super valuable. Not everyone's a medic, so why not hire some pros?",
    specialty: "Medical",
    equipment: 0,
  },
  {
    name: "Engineers (Archetype)", // Renamed to differentiate from specific engineers
    skillLevel: 0,
    alignment: 0,
    cost: "0.1m",
    description: "Need some repairs or maintenance? These engineers can get any ship up and running again, fast.",
    specialty: "Repairs, Maintenance",
    equipment: 0,
  },
  {
    name: "Mercenaries (Archetype)", // Renamed to differentiate from specific mercs
    skillLevel: 0,
    alignment: 0,
    cost: "0.1m",
    description: "These battle-hardened mercs are ready to take on any combat situation with a strong will and determination.",
    specialty: "Combat",
    equipment: 0,
  },
  {
    name: "Seraphs",
    skillLevel: 0,
    alignment: 0,
    cost: "0.1m",
    description: "These guys are your regular Blackhawks but they're not really into the whole 'politics' thing. They're just good at fighting.",
    specialty: "Combat",
    equipment: 0,
  },
  {
    name: "Red Dagger Pirates (Archetype)", // Renamed
    skillLevel: 0,
    alignment: 0,
    cost: "0.1m",
    description: "Some Red Daggers are pretty chill and will join your crew if they think you're cool.",
    specialty: "General Crew",
    equipment: 0,
  },
  {
    name: "Navy Soldiers",
    skillLevel: 0,
    alignment: 0,
    cost: "0.1m",
    description: "Federation Navy soldiers are well-disciplined and will listen to your every command.",
    specialty: "Military",
    equipment: 0,
  },
  {
    name: "Core Ring Mercs",
    skillLevel: 0,
    alignment: 0,
    cost: "0.1m",
    description: "These mercs are all about that Core Ring life and just want to get paid.",
    specialty: "Mercenary",
    equipment: 0,
  },
  {
    name: "Dustkeepers",
    skillLevel: 0,
    alignment: 0,
    cost: "0.1m",
    description: "Dustkeepers are always busy, even when they're not on a job. They can handle pretty much anything thrown their way.",
    specialty: "General Crew",
    equipment: 0,
  },
];
