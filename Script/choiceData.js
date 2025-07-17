export const skills = [
    // Skills from "Page 1 Stardust word.docx"
    {
        id: "basic-piloting",
        title: "Basic Piloting",
        description: "If you're going into space, it's probably a good idea to at least know how to fly a ship. This course will teach you the basics, and when you're through, you'll be able to adequately pilot almost any ship. Don't expect to outwit more experienced pilots, however.",
        cost: 200000, // Assuming initial courses are free as per "You may take up to 6 courses..."
        prerequisites: [],
        consequences: [],
        playerUpdates: [{ attribute: "skills", action: "add", value: "basic-piloting" }],
        imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "standard-piloting",
        title: "Standard Piloting",
        description: "This course will put you through much more realistic simulations, and even take you onto the field a few times. New techniques open up a wave of new possibilities for you as an aspiring pilot, and you fly confidently enough to go toe-to-toe with other pilots out there.",
        cost: 200000, // 2m per additional course
        prerequisites: ["basic-piloting"],
        consequences: [],
        playerUpdates: [{ attribute: "skills", action: "add", value: "standard-piloting" }],  imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "advanced-piloting",
        title: "Advanced Piloting",
        description: "You're in the real world now, and you can't settle for anything less than the best when it comes to being a pilot. You'll be put in the most realistic conditions, enough that you're convinced that these are real situations they're throwing at you. Come out of this alive and you'll quickly become a respected pilot.",
        cost: 200000,
        prerequisites: ["standard-piloting"],
        consequences: [],
        playerUpdates: [{ attribute: "skills", action: "add", value: "advanced-piloting" }],  imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "ship-gunnery",
        title: "Ship Gunnery",
        description: "Learning how to fire a ship's weapons is almost an essential skill needed when space-faring. Hostiles. can find the sneakiest ways of getting you where they want you to be, so you best be prepared to defend yourself from them. You'll be able to ade- quately fire any ship weapon from this course.",
        cost: 200000,
        prerequisites: [],
        consequences: [],
        playerUpdates: [{ attribute: "skills", action: "add", value: "ship-gunnery" }],  imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "ship-weapon-specialization",
        title: "Ship Weapon Specialization",
        description: "This course highlights the advanced techniques in handling a certain ship weapon type. You can select either kinetic, energy, blaster, or explosive, boosting that weapon type's effectiveness when you're in command of the ship they're attached to.",
        cost: 200000,
        prerequisites: ["ship-gunnery"],
        consequences: [],
        playerUpdates: [{ attribute: "skills", action: "add", value: "ship-weapon-specialization" }],  imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "medical",
        title: "Medical",
        description: "People with medical knowledge are few and far between, but they're always in high demand. Having a doctor on board can improve the quality of life tenfold. Better yet, why not train yourself to become one?",
        cost: 200000,
        prerequisites: [],
        consequences: [],
        playerUpdates: [{ attribute: "skills", action: "add", value: "medical" }],  imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "computer-science",
        title: "Computer Science",
        description: "Information technology is heavily embedded into everything, so it's valuable knowledge to have. Especially when piloting a ship, it certainly helps to know how it works under the hood. Computer science is almost an essential skill to have for anyone hoping to travel the stars",
        cost: 200000,
        prerequisites: [],
        consequences: [],
        playerUpdates: [{ attribute: "skills", action: "add", value: "computer-science" }],  imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "cyber-security",
        title: "Cyber Security",
        description: "Take information technology a step further and into the world of info-sec. For as long humanity can remember, hacking and cyber defence has been a volatile field that requires top-of-the-line intuition and craftiness. E-war is just as dangerous as conven- tional warfare, and some argue it is more so.",
        cost: 200000,
        prerequisites: ["computer-science"],
        consequences: [],
        playerUpdates: [{ attribute: "skills", action: "add", value: "cyber-security" }],  imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "mechanics",
        title: "Mechanics",
        description: "Having no mechanical knowledge on your ship can lead to a boatload of problems; it's a no-brainer to have one on board. That said, knowing how to fix things yourself can't hurt, and it helps keep your mechanic doing more important things than trying to fix your robotic leg.",
        cost: 200000,
        prerequisites: [],
        consequences: [],
        playerUpdates: [{ attribute: "skills", action: "add", value: "mechanics" }],  imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "nuclear",
        title: "Nuclear",
        description: "Almost every ship nowadays is powered by nuclear technology, be it through fission, fusion, or even anti- matter. At least knowing the do's and don'ts of nuclear sciences may mean the difference between life and becoming atomized into oblivion.",
        cost: 200000,
        prerequisites: [],
        consequences: [],
        playerUpdates: [{ attribute: "skills", action: "add", value: "nuclear" }],  imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "industry",
        title: "Industry",
        description: "All of this would not be possible if it were not for the industrious side of society. Everything from mining, refining, and processing is covered in this course. If you plan on sailing the stars to make profit off of them, then you're going to want to have this skill under your belt.",
        cost: 200000,
        prerequisites: [],
        consequences: [],
        playerUpdates: [{ attribute: "skills", action: "add", value: "industry" }],  imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "diplomacy",
        title: "Diplomacy",
        description: "As someone who's likely going to get into a lot of interactions with others, it's good to at least know how to handle situations into your favour. You'll become a great mediator and can convince most people you're right. After taking this course, you can hire up to 4 crew members hostile to your faction.",
        cost: 200000,
        prerequisites: [],
        consequences: [{ type: "crew-hire-limit", value: 4, condition: "hostile-faction" }],
        playerUpdates: [{ attribute: "skills", action: "add", value: "diplomacy" }],  imageSrc: "/Images/Beatrice R&D.webp"
    },
    
    {
        id: "mind-link",
        title: "Mind-Link",
        description: "Experimental tech developed at Triglav that requires an immense amount of knowledge, patience, and fortitude to get through. With this skill, you'll be able to link your mind to your ship.",
        cost: 200000,
        prerequisites: ["medical", "mechanics", "nuclear", "advanced-piloting", "computer-science"],
        consequences: [{ type: "job-slots", value: 3 }], // Can assume 3 jobs instead of 2
        playerUpdates: [{ attribute: "skills", action: "add", value: "mind-link" }],  imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "mercantile",
        title: "Mercantile",
        description: "After all is said and done, you're going to want to be able to make profit, and lots of it. It's probably a good idea to have the know-how on how to barter and trade, since the whole product of industry is to not only build society but to acquire the means to do it even better.",
        cost: 200000,
        prerequisites: [],
        consequences: [],
        playerUpdates: [{ attribute: "skills", action: "add", value: "mercantile" }],  imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "basicTraining",
        title: "Basic Training",
        description: "Go through the same training any soldier goes though: Basic. You're trained on the basics of using firearms, you're whipped into taking basic orders, taught basic tactics, and trained in basic physical courses. All the fun stuff that, while basic, still pushes you to your limits.",
        cost: 200000,
        prerequisites: [],
        consequences: [],
        playerUpdates: [{ attribute: "skills", action: "add", value: "mercantile" }],  imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "closeQuartersCombat",
        title: "Close-Quarters Combat",
        description: "Anything that involves taking somebody on in the melee is covered this course. Learn to use the kinetics of your body as well as the handling of close combat weapons. Coming out of this course, you will never be caught without a knife. Or a hammer, if that's your thing.",
        cost: 200000,
        prerequisites: [],
        consequences: [],
        playerUpdates: [{ attribute: "skills", action: "add", value: "mercantile" }],  imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "security",
        title: "Security",
        description: "It's boring, but it's a start. You're left to guard some unknown building for god-knows-what, but all is not lost. Lucky for you, you got to use your weapons more than once; turns out that whatever you were guarding was of value to some people. You likely only faced untrained combatants, though.",
        cost: 200000,
        prerequisites: [],
        consequences: [],
        playerUpdates: [{ attribute: "skills", action: "add", value: "security" }],
        imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "patrol",
        title: "Patrol",
        description: "Another entry-level position, but you get to move! You get to experience the fun of sniffing out undesirables and neutralizing them. Towards the end of the term, you're brought to more hostile patrols where fights break out more often.",
        cost: 200000,
        prerequisites: [],
        consequences: [],
        playerUpdates: [{ attribute: "skills", action: "add", value: "patrol" }],
        imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "advanced-firearms",
        title: "Advanced Firearms",
        description: "Learn how to use your weapons effectively. From this course, you will be able to skillfully use most of the firearms out there. Your accuracy and precision will be disciplined. You even get to learn a little bit of the ins and outs of how firearms work.",
        cost: 200000, // Assuming a cost for advanced courses
        prerequisites: ["basicTraining"],
        consequences: [],
        playerUpdates: [{ attribute: "skills", action: "add", value: "advanced-firearms" }],
        imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "field-medic",
        title: "Field Medic",
        description: "A skilled medic is in high demand for all of the violence that happens in the civilized galaxy. Half of your effectiveness will come from your skill of using the latest medical technology, and the other half from your knowledge of healing. All of which can be learned from this course.",
        cost: 200000,
        prerequisites: [],
        consequences: [],
        playerUpdates: [{ attribute: "skills", action: "add", value: "field-medic" }],
        imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "hit",
        title: "Hit",
        description: "Unwanted miscreants are lurking everywhere, and your organization aims to thwart them all. What better way to spend your term than eliminating them? You get to do this on your own, as well. The more targets you eliminate, the more skilled and creative you get at doing it.",
        cost: 200000,
        prerequisites: ["security", "patrol"], // Assuming 'or' means either one
        consequences: [],
        playerUpdates: [{ attribute: "skills", action: "add", value: "hit" }],
        imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "recovery",
        title: "Recovery",
        description: "Not all combat is about taking lives. Sometimes, you have to save them. Here, you will experience the praise of rescuing high-value targets. VIPs, hostages, and even valuable assets will be your focus. Tense situations await; you will need to be precise and efficient.",
        cost: 200000,
        prerequisites: ["security", "patrol"], // Assuming 'or' means either one
        consequences: [],
        playerUpdates: [{ attribute: "skills", action: "add", value: "recovery" }],
        imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "long-ranged-combat",
        title: "Long-Ranged Combat",
        description: "You're good with firearms, but you aren't exactly a pronounced sniper... until you take this course, Learning to be a sniper is tough, and the success rate is discouraging to many. Training is body-breaking, and you will be pushed. If you prevail, you will become one of the most stout shots in the galaxy.",
        cost: 200000,
        prerequisites: ["advanced-firearms"],
        consequences: [],
        playerUpdates: [{ attribute: "skills", action: "add", value: "long-ranged-combat" }],
        imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "wilderness-survival",
        title: "Wilderness Survival",
        description: "With hundreds of planets out there, it isn't just enough to learn what grass is safe to eat. Be prepared to learn the most complex methods that can keep you alive with minimal provisions in the wilderness, across dozens of types of terrains.",
        cost: 200000,
        prerequisites: [],
        consequences: [],
        playerUpdates: [{ attribute: "skills", action: "add", value: "wilderness-survival" }],
        imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "raid",
        title: "Raid",
        description: "You'll be working in groups for this. Experiencing the pressure of enacting plans and working in a team is invaluable. If one of you messes up, you risk falling apart. The raids get tougher and much more high risk towards the end of the term.",
        cost: 200000,
        prerequisites: ["security", "patrol"], // Assuming 'or' means either one
        consequences: [],
        playerUpdates: [{ attribute: "skills", action: "add", value: "raid" }],
        imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "infiltration",
        title: "Infiltration",
        description: "Learning how to become undetected is a hard skill to master, but experience is a good teacher. At first, you'll be snatching low-profile things like ID cards or documents. Then, money caches. Weapon caches. Classified information. People.",
        cost: 200000,
        prerequisites: ["security", "patrol"], // Assuming 'or' means either one
        consequences: [],
        playerUpdates: [{ attribute: "skills", action: "add", value: "infiltration" }],
        imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "demolition",
        title: "Demolition",
        description: "After this course, you will be able to solve every problem with an explosion of some sort. You will get to handle all kinds of heavy weaponry and explosive devices, and become good at using them.",
        cost: 200000,
        prerequisites: ["advanced-firearms"],
        consequences: [],
        playerUpdates: [{ attribute: "skills", action: "add", value: "demolition" }],
        imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "combat-driving",
        title: "Combat Driving",
        description: "A vehicle can provide many tactical and logistical advantages in combat, so knowing how to operate the many kinds of vehicles out there is valuable. Buggies, walkers, tanks, power armour, and even mobile suits are covered in this course.",
        cost: 200000,
        prerequisites: [],
        consequences: [],
        playerUpdates: [{ attribute: "skills", action: "add", value: "combat-driving" }],
        imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "assault",
        title: "Assault",
        description: "Time to jump into the big fights. Experience the shell shocking action of the battlefield. Feel the ash and blood for yourself; you are but a grunt. A disposable, but no less necessary. Nothing whips a person into shape more than the heat of fire and smell of copper in the air.",
        cost: 200000,
        prerequisites: ["hit", "raid"], // Assuming 'or' means either one
        consequences: [],
        playerUpdates: [{ attribute: "skills", action: "add", value: "assault" }],
        imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "guerilla",
        title: "Guerilla",
        description: "It's often very illogical to take on a well-equipped base, which is why they're sending you to whittle it down bit by bit. You'll have to learn how to expend minimal resources to terrorize theirs. One mistake could end your life... or worse.",
        cost: 200000,
        prerequisites: ["recovery", "infiltration"], // Assuming 'or' means either one
        consequences: [],
        playerUpdates: [{ attribute: "skills", action: "add", value: "guerilla" }],
        imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "weaponsmith",
        title: "Weaponsmith",
        description: "Weapons are everywhere, so it's a given to learn how they work in detail. Small arms, heavy weapons and even close-combat weapons are learned. You'll be able to do much more than just clean your guns; you'll be able to make them to your liking.",
        cost: 200000,
        prerequisites: ["advanced-firearms"],
        consequences: [],
        playerUpdates: [{ attribute: "skills", action: "add", value: "weaponsmith" }],
        imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "combat-engineering",
        title: "Combat Engineering",
        description: "You might be good at handling vehicles, but these mechanical monstrosities are made to take a beating. You'll learn more than just changing tires; from now on, you'll be praised for always bringing welding equipment.",
        cost: 200000,
        prerequisites: ["combat-driving"],
        consequences: [],
        playerUpdates: [{ attribute: "skills", action: "add", value: "combat-engineering" }],
        imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "leadership",
        title: "Leadership",
        description: "You've made promising progress, so you've been chosen to lead your own squad. This is the test of tests; will you be the end of your squad mates? Or will you promise them glory? Do this well, and you'll have a fearsome reputation.",
        cost: 200000,
        prerequisites: ["assault"],
        consequences: [],
        playerUpdates: [{ attribute: "skills", action: "add", value: "leadership" }],
        imageSrc: "/Images/Beatrice R&D.webp"
    },
    {
        id: "defence",
        title: "Defence",
        description: "This is like a security job, except you're trying to stop a full out assault. Provisions and manpower will be scarce in this remote location, but the enemy will crash into you wave after wave.",
        cost: 200000,
        prerequisites: ["assault", "guerilla"], // Assuming 'or' means either one
        consequences: [],
        playerUpdates: [{ attribute: "skills", action: "add", value: "defence" }],
        imageSrc: "/Images/Beatrice R&D.webp"
    },
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

export const startPos = [
    // The Federation
    {
        cityName: "New Terra",
        cityType: "capital",
        allegiance: "Federation",
        description: "The crown jewel of the Federation, New Terra is what's considered as the 'core' of the sovereignty. While it contains some of the most important people to the Federation, it is also considered to be the safest place in the entire galaxy. Wealth prospers here, and provides ample opportunity to those seeking it."
    },
    {
        cityName: "Arcadia",
        cityType: "trade hub",
        allegiance: "Federation",
        description: "Situated in the 'galactic far east' of the Federation, Arcadia is both loyal and yet distant to New Terra and its influence. It's much more modest and is a lot more approachable to outside entities willing to trade. It has three space stations orbiting different planets, all of which are open to the public. Arcadia's multicultural cities are very welcoming."
    },
    {
        cityName: "Laporte",
        cityType: "trade hub",
        allegiance: "Federation",
        description: "Laporte is less of a trade hub and more of a cargo gathering of freighters ferrying goods to and from New Terra. It has one station orbiting the single civilized planet, and is open to the public for trade. With all of the mass of products available, prices are fairly desirable, here."
    },
    {
        cityName: "Dellsin",
        cityType: "other",
        allegiance: "Federation",
        description: "Dellsin is considered to be within the 'outer reaches' of the Federation, and like Arcadia, it sees a great mix of people coming and going. It is surrounded by several star systems in which planets are civilized with great urban cities."
    },
    {
        cityName: "Wayward",
        cityType: "other",
        allegiance: "Federation",
        description: "At the back of the Federation is Wayward, the Federation's top industry system that provides ore for almost half of the galactic nation. The surrounding systems are dotted with a network of ore-rich mining facilities with an almost endless supply. Wayward is home to some of the Federation's most prevalent corporations of industry."
    },
    {
        cityName: "Capitolus",
        cityType: "other",
        allegiance: "Federation",
        description: "Capitolus sees a lot more solitude than the other trade hub systems of the Federation. It's dubbed as the 'Centre of Knowledge', a gathering of the civilized galaxy's most brilliant minds. Top research and development firms such as Beatrice R&D and Pulsar Inc. trace their roots to this system."
    },
    {
        cityName: "Archer",
        cityType: "fort",
        allegiance: "Federation",
        description: "As the Federation's top military staging system, Archer houses the largest legions of the Federation Navy Armada - the strongest military power in the civilized galaxy. It has access to many routes that give them the leverage to insert almost anywhere in the outer rims."
    },

    // The Talons
    {
        cityName: "Talon Prime",
        cityType: "capital",
        allegiance: "The Talons",
        description: "Only the Talons know the true origins of how they came to be, but the notorious, high-class society held their small sovereignty for a very long time, long before they were first discovered by the Blackhawk Elite. Talon Prime is everything opposite of what you would expect of an outer-ring nation; it's clean, it's professional, and it's pleasant to live in. It's often said that the Talons have a sense of humour despite their professional appearance - they still, somehow, retain their outer-rim mentality and like to pick on those who take themselves too seriously."
    },
    {
        cityName: "Zona",
        cityType: "other",
        allegiance: "The Talons",
        description: "The source of the Talon power is in their access to valuable, high-grade ore, and Zona is abundant in this, on top of being of a rare breed of star systems in which a planet is habitable. Using technology likely stolen from the Federation and possibly Pulsar Inc., the Talons are able to self-sustain their small sovereignty with surprising efficiency."
    },

    // The Red Dagger Pirates
    {
        cityName: "Ten Cred",
        cityType: "capital",
        allegiance: "Red Dagger Pirates",
        description: "Despite being one of the (former) smaller pirate groups, the Red Daggers are also one of the oldest. After the Pirate Coalition War with the Blackhawks and the fall of the Luos Syndicate, they've become a prevalent power. And ever since their first of thousands of heists against neighboring powers, Ten Cred has been the Red Dagger's home system. It's also a very active trade system for inter relations between gangs and for powers they don't entirely hate."
    },
    {
        cityName: "Lastop",
        cityType: "other",
        allegiance: "Red Dagger Pirates",
        description: "When the Lastop system was first scouted out by the Talons, the Red Daggers were surprised to find that they were offered it in return of having a trade deal with them. It seemed that the Talons had no interest in expanding territory, but the Red Daggers took it without hesitating, and has since become a very powerful asset and ally. Lastop is rich in the much-needed common ores, and the Talons and Red Daggers have taken advantage of it."
    },

    // The Blackhawk Elite
    {
        cityName: "Ysgard",
        cityType: "capital",
        allegiance: "Blackhawk Elite",
        description: "Facing constant threats from powerful pirate organizations where the Federation was not as present, groups like the Blackhawk Elite arose. Ysgard was the first system that became the Blackhawk Elite's growing sovereignty, and as they drove pirate influence out, the Blackhawks captured more. Ysgard and the surrounding systems acted as a powerful shield for the Federation against the growing threat of the time that was the Luos Syndicate."
    },
    {
        cityName: "Ragnarök",
        cityType: "capital",
        allegiance: "Blackhawk Elite",
        description: "Seeking to take their righteousness further into dangerous territory, the Blackhawk Elites established Ragnarök, their second stronghold system. For decades, the Blackhawks defended Ragnarök fiercely, and through lots of blood, sweat, and tears, used Ragnarök's leverage to push far into pirate territory."
    },
    {
        cityName: "Valhalla",
        cityType: "capital",
        allegiance: "Blackhawk Elite",
        description: "The Blackhawk Elite were unstoppable and shredded through their enemies with ease... until they came upon the Talons. Matching them in power, the Blackhawks were stalled and thus were forced to settle down in Valhalla. Even after the Pirate Coalition War where much Blackhawk territory was lost and after the fall of the Luos Syndicate, Valhalla and Ragnarök remain defended with unbreakable, iron might."
    },
    {
        cityName: "Clover Region",
        cityType: "other",
        allegiance: "Blackhawk Elite",
        description: "In between the Blackhawk Elite's Valhalla sovereignty and the Talon sovereignty is a scant four systems that link the two powers. Silent and unseen from the rest of the civilized galaxy is a constant demonstration of might and tact, neither side ever getting an advantage over the other. When one side gets a victory, they lose the next encounter. It's gotten so bad that the two sides have silently agreed to wave their pride at each other in the form of 'wargames' instead of blowing each other into oblivion (most of the time), and fights have often turned into conflicting opinions and name-calling. They hate each other. A lot."
    },

    // The Rebels
    {
        cityName: "Detritus",
        cityType: "capital",
        allegiance: "The Rebels",
        description: "The Federation has plenty of virtues, but some groups have failed to see them within the galactic nation. The rising threats from pirate groups such as the Luos Syndicate caused uprising in the outer Federation systems; where was the Navy when they were most needed? Detritus was the second system to claim separatism from the Federation, having been long fed up with the incompetency. And to make matters worse, the Federation simply dismissed the claim and labeled them as a 'pirate group', along with the Exodus system. Being left to fend for themselves, they've held out against bandits and pirates using guerilla tactics and make-shift hardware."
    },
    {
        cityName: "Exodus",
        cityType: "capital",
        allegiance: "The Rebels",
        description: "Exodus, though not having been under as much threat from bandits as Detritus has, was the first to claim separatism from the Federation. Having started out as a simple mining colony, resources were limited and were only ferried in small amounts from Wayward. Despite Exodus' calls for increased support, they went unanswered and began to establish the colony as their own, starting agricultural projects with what they had. Soon they became self-sustaining, but when support from the Federation finally cut off, they ended up not caring anymore."
    },

    // The Luos Syndicate (former)
    {
        cityName: "Haven",
        cityType: "capital",
        allegiance: "Luos Syndicate",
        description: "Much of the once powerful Luos Syndicate now lies in ruin. Thousands of tons of twisted metal litter the entire Syndicate space from destroyed warships to unserviceable space stations. Pirate and Federation activity is still rampant after the Syndicate's fall, and unrest is evident throughout the many remaining cities. Haven was the Syndicate capital, and it was also bombarded the most by the Federation and mercenary armada. Although Haven was largely considered the centre of the Core Ring corporations, it was bitter irony to them that the last vestiges of the Luos armada that defended the system were made up of their Outer Ring counterparts; groups that they didn't see eye-to-eye with. At this point in the war, most of the companies in the Syndicate forces were either routed or just deserted completely."
    },
    {
        cityName: "Olympus",
        cityType: "other",
        allegiance: "Luos Syndicate",
        description: "Several years after the Pirate Coalition War, the Blackhawk Elite and Federation fought back. With an armada spanning several thousand ships including nearly sixty dreadnoughts, the Navy-led assault took them to the three entry-systems of the Luos Syndicate: Olympus, Elysium and Solaria. The Syndicate had prepared but despite their power, could not withstand their might. They held for a mere four days before being forced to retreat. Olympus was one of the entry systems."
    },
    {
        cityName: "Elysium",
        cityType: "other",
        allegiance: "Luos Syndicate",
        description: "Several years after the Pirate Coalition War, the Blackhawk Elite and Federation fought back. With an armada spanning several thousand ships including nearly sixty dreadnoughts, the Navy-led assault took them to the three entry-systems of the Luos Syndicate: Olympus, Elysium and Solaria. The Syndicate had prepared but despite their power, could not withstand their might. They held for a mere four days before being forced to retreat. Elysium saw the heaviest of the fights, but was also the last to fall."
    },
    {
        cityName: "Solaria",
        cityType: "other",
        allegiance: "Luos Syndicate",
        description: "Several years after the Pirate Coalition War, the Blackhawk Elite and Federation fought back. With an armada spanning several thousand ships including nearly sixty dreadnoughts, the Navy-led assault took them to the three entry-systems of the Luos Syndicate: Olympus, Elysium and Solaria. The Syndicate had prepared but despite their power, could not withstand their might. They held for a mere four days before being forced to retreat. Solaria was one of the entry systems."
    },
    {
        cityName: "Erebus",
        cityType: "other",
        allegiance: "Luos Syndicate",
        description: "Erebus was home to many of the Syndicate's Outer Ring corporations, such as the industrious Reibar manufacturing company or the venerable Cerberus Legion. Living conditions here were a stark contrast to Haven; it was a much harsher environment stricken with a more rustic atmosphere. Strange enough, the people were friendlier, and it's likely that the inhabitants here were the original founders of the Syndicate who envisioned a prosperous nation. A mercenary coalition led by the Blackhawk Elites had planned a back-door attack from Valhalla and it was at Erebus where they entered the Syndicate. Unfortunately for them, however, they were met not by Syndicate forces but by Talons and Red Daggers in an ingenious ambush; almost half of the fleet was decimated by pre-aimed anti-matter cannon blasts as they landed in the system, predicted to the tee by Talon spies. The mercenary fleet was forced to flee, but so were the Talons and Red Daggers after they had heard that the Syndicate defence had failed up at the 'galactic north'. Rumors spread that both groups left due to other reasons, but neither elected to comment."
    },
    {
        cityName: "Abyss",
        cityType: "other",
        allegiance: "Luos Syndicate",
        description: "After the devastating Luos defeat at Olympus, Elysium and Solaria, the Federation forces tore through the remaining systems like a plague. Cities were bombarded to submission and Syndicate fleets were outnumbered and shredded apart by relentless firepower. The remaining Syndicate forces gathered at Abyss for a final defence led by Ise Ley'is, who was one of the only remaining Syndicate commanders that wasn't missing or had abandoned the Syndicate as a whole. Under valiant and ruthless leadership, she and the remaining Syndicate forces defended the system for two months before attrition burned them out. No ship was spared, and the few thousand surviving souls of an armada of nearly two million fled to Haven."
    },
    {
        cityName: "Zen",
        cityType: "other",
        allegiance: "Luos Syndicate", // Explicitly stated in the prompt's CYOA section
        description: "CYOA Event System: Contract: 'The Twin Fangs'."
    },

    // No-Man's Land
    {
        cityName: "Star Dust",
        cityType: "other",
        allegiance: "No Man's Land",
        description: "Situated in almost literally the centre of the civilized galaxy, the Star Dust system is a very, very popular system for all factions. Namely, for the Stardust Space Station that orbits a barren planet. With such leverage for all corners of the civilized galaxy, trade is rampant here, and you could find almost anything. The massive station attracts some of the most curious people who often bring rare things like Herald artifacts, or even entire Herald ships. Under a silent agreement of pirate organizations and even the Federation, the Star Dust system is one of the few places to be left out of conflicts. Groups have tried, but the system has a very strong militia funded by the wealthy station owners."
    },
    {
        cityName: "BR-5RB",
        cityType: "other",
        allegiance: "No Man's Land",
        description: "During the long, tedious and fierce Pirate Coalition War, it was at BR-5RB where the Blackhawk Elite suffered their first major defeat. Bringing nearly twenty dreadnoughts and many battleships, they left the field with almost none left. It was through utilizing much quicker swarms of destroyers and cruisers that the pirates overwhelmed the Blackhawks."
    },
    {
        cityName: "DL7-2E",
        cityType: "other",
        allegiance: "No Man's Land",
        description: "After BR-5RB, the Blackhawk Elite staged another defence here, but morale was devastated and their might was stricken. They put up little to no resistance, and fled. Mjölnir was abandoned, and the Blackhawks fortified at their other two staging systems before the Pirate Coalition declared a victory. CYOA Event System: Contract: 'And the Fire Grows', 'Until Our Dying Breath'."
    },
    {
        cityName: "Carceri",
        cityType: "other",
        allegiance: "No Man's Land",
        description: "CYOA Event System: Contract: 'Search & Rescue'."
    },
    {
        cityName: "Farrigan's Reach",
        cityType: "other",
        allegiance: "No Man's Land",
        description: "CYOA Event System: Contract: 'Acheron', 'The Sound'."
    },
    {
        cityName: "Kolb",
        cityType: "other",
        allegiance: "No Man's Land",
        description: "CYOA Event System: Contract: 'Escalation'."
    },
    {
        cityName: "Craddock",
        cityType: "other",
        allegiance: "No Man's Land",
        description: "CYOA Event System: Contract: 'Ace'."
    },
    {
        cityName: "HT4J-L8",
        cityType: "other",
        allegiance: "No Man's Land",
        description: "CYOA Event System: Contract: 'This Land', 'Mining King Steve'."
    },
    {
        cityName: "Fordelia",
        cityType: "other",
        allegiance: "No Man's Land",
        description: "CYOA Event System: Contract: 'All Aboard'."
    },
    {
        cityName: "L9M7-2",
        cityType: "other",
        allegiance: "No Man's Land",
        description: "CYOA Event System: Contract: 'Asunder, Sweet'."
    },
    {
        cityName: "New Hope",
        cityType: "other",
        allegiance: "No Man's Land", // Listed under CYOA event systems, implying this allegiance for the context of the event.
        description: "CYOA Event System: Contract: 'Heat'."
    },

    // The Fire Legion
    {
        cityName: "Mjölnir",
        cityType: "capital",
        allegiance: "The Fire Legion",
        description: "Mjölnir was the second staging system that the Blackhawk Elites established during their crusade in the outer rims. For many decades, Ragnarök, Mjölnir and Valhalla were unbreakable, until the pirates formed a coalition led by the Luos Core Ring and began a full out assault. After the devastating Blackhawk losses at BR-5RB and DL7-2E, they were forced to abandon Mjölnir, and a part of the pirate coalition took over the region. Ever since, they have almost always kept to themselves, despite the collaboration with the Luos Syndicate and the Red Daggers. They called themselves the Fire Legion. It was not until recently when they began raising hostilities with the Red Daggers and even the Blackhawk Elites, their skirmishes growing more and more violent. As of late, the Blackhawks have responded by setting up strong blockades across the region of space surrounding the Fire Legion. Meanwhile, the rest of the galaxy has resorted to watching with anxious curiosity. Rumors are spreading that this all has to do with the Heralds, but even more ominous rumors suggest about something called the Harbinger. Others say it has something to do with mana energy. Either way, those on the front lines claim that the Legion can hardly be claimed as human anymore..."
    },
    {
        cityName: "Crown",
        cityType: "other",
        allegiance: "The Fire Legion",
        description: "After the Pirate Coalition War, the pirates who settled at Mjölnir named themselves the Fire Legion and began to raise hostilities against their former allies, the Red Daggers. The Crown and Forge systems are both witnesses to some of the most violent encounters that have been escalating throughout the years between the Legion, the Red Daggers, and Blackhawk Elites. Full out war seems to be brewing again, and sides are going to be taken."
    },
    {
        cityName: "Forge",
        cityType: "other",
        allegiance: "The Fire Legion",
        description: "After the Pirate Coalition War, the pirates who settled at Mjölnir named themselves the Fire Legion and began to raise hostilities against their former allies, the Red Daggers. The Crown and Forge systems are both witnesses to some of the most violent encounters that have been escalating throughout the years between the Legion, the Red Daggers, and Blackhawk Elites. Full out war seems to be brewing again, and sides are going to be taken."
    },

    // Independent
    {
        cityName: "Prion",
        cityType: "capital",
        allegiance: "Independent",
        description: "Pulsar Incorporated started out as a research and development company in the Federation, but after striking gold at Prion, they became one of the civilized galaxy's most prevalent industrial companies. The surrounding systems are rich with high-grade ore and allowed the company to establish the region as their own. Prion is one of the more popular systems, being a dependent source of high-grade metals for many different parties."
    },
    {
        cityName: "Bastion",
        cityType: "capital",
        allegiance: "Independent",
        description: "Very similar to Pulsar Inc., Beatrice Research and Development started off as a pursuit for exploration, terraforming and research. Many of the accessible systems in the civilized galaxy are thanks to the technology developed by Beatrice, and they have since established their own few systems as a base of operations. Bastion is fitted with some of the most advanced technology ever built by humanity, and with an endless amount of stars within human reach, Beatrice continues to lead the charge into the unknown universe."
    },
    {
        cityName: "Synchordia",
        cityType: "capital",
        allegiance: "Independent",
        description: "Unlike Beatrice R&D and Pulsar Inc, Hammerhead Industries was an industrious company from its roots. Inspired by the success of Pulsar, Hammerhead industries, one of the lead manufacturers of ships and vehicles in the Federation already, funded their own expedition across the galaxy. It was at Synchordia where they struck their own gold mine and established a strong, industrious fortress. They began mass producing ships ever since, and have become the most used ship hull brand for pilots across the galaxy."
    },
    {
        cityName: "Freeport",
        cityType: "other",
        allegiance: "Independent",
        description: "CYOA Event System: Contract: 'Don't Get Lost'."
    },
    {
        cityName: "Quorum",
        cityType: "other",
        allegiance: "Independent",
        description: "CYOA Event System: Contract: 'Rogue Drones'."
    }
];




