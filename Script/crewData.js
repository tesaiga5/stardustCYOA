export { crew, archetype, addCrewToSection };
import { appendDropdown, formatterIntl } from "/Script/manaData.js";

const crew = [
  // This array contains data for various crew members and archetypes.
  // Each object represents a worker with attributes:
  // - title: The title of the crew member.
  // - Skill Level: A numerical representation of their skill (e.g., 1m, 2m, etc.).
  // - alignment: Their faction or general alignment (e.g., Neutral, Federation, Red Daggers).
  // - cost: The hiring cost of the crew member.
  // - description: A brief description of the crew member.
  // - specialty: Their primary area of expertise.
  // - equipment: Any specific equipment they are noted to have.
  // If an attribute is missing from the source, it is assigned a value of 0.

  // --- Specific Pilot Characters ---
  {
    title: "Anna Tse",
    skillLevel: 0, // Not explicitly stated, but implied by context as a pilot
    alignment: "Neutral",
    cost: 1000000,
    description: "Fresh pilot program grad, super loyal.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    title: "Gregor Hunter",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 2000000,
    description: "Your brother-like, experienced outer-rim guy.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    title: "Pepper",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 1000000,
    description: "Naive but loves flying, wants to be a co-pilot.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    title: "Horace Carter",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 2000000,
    description: "Vehicle enthusiast, desperate to be a pilot-for-hire.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    title: "Kay Hunter",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 2000000,
    description: "Gregor's younger sister, no experience, needs your guidance.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    title: "Elijah Horton",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 2000000,
    description: "Old-fashioned but skilled pilot, great at negotiating.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    title: "Sgt. Mark LeCruz",
    skillLevel: 0,
    alignment: "Federation",
    cost: 2000000,
    description: "Ace pilot, led a fighter squad, great asset.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    title: "Jacqueline Young",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 2000000,
    description: "Piloted scouting vessels, good at dodging asteroids.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    title: "Alvin Reyes",
    skillLevel: 0,
    alignment: "Blackhawk Elite",
    cost: 3000000,
    description: "Young gun, wants experience to prove himself.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    title: "Tiffany Manson",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 3000000,
    description: "Used to escort science and exploration vessels.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    title: "Susan Zim",
    skillLevel: 0,
    alignment: "Red Daggers",
    cost: 3000000,
    description: "Sharp, partook in risky heists with a powerful gang.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    title: "Tyler Vaughn",
    skillLevel: 0,
    alignment: "Federation",
    cost: 3000000,
    description: "Wealthy background, master tactician from the Navy.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    title: "Ivan Chesnikov",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 4000000,
    description: "Masked merc, friendly despite his past.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    title: "Milka Star",
    skillLevel: 0,
    alignment: "Red Daggers",
    cost: 4000000,
    description:
      "Polite, shy, Red Dagger who dislikes the Federation, has a dog.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    title: "Royce Kodai",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 4000000,
    description:
      "Exceptional police officer, chased criminals in high-speed pursuits.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    title: "Mokhov Petrovich",
    skillLevel: 0,
    alignment: "Blackhawk Elite",
    cost: 4000000,
    description: "Former drill sergeant seeking vengeance.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    title: "E.R.I.",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 5000000,
    description: "Sapient android, great pilot, not so good with social cues.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    title: "Wes Lunso",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 5000000,
    description: "Former merc, loves flying and racing.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    title: "Lia Stitt",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 5000000,
    description: "Thirsty for adventure, opportunist, loves detours.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    title: "Hailey",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "Special cost",
    description:
      "Requires 'The Guardian' title. Quiet, psi powers, knows what you'll say.",
    specialty: "Pilot",
    equipment: 0,
    image: "Images/Titles/hailey-crew-midjourney.webp",
  },
  {
    title: "Conrad Byrant",
    skillLevel: 0,
    alignment: "Blackhawk Elite",
    cost: 5000000,
    description: "Loyal, can fly for days without rest.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    title: "Mikayla Stone",
    skillLevel: 0,
    alignment: "Gazers",
    cost: 6000000,
    description: "Elite Gazer pilot, bold, brash, keeps her cool.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    title: 'David "Tabs" Sharp',
    skillLevel: 0,
    alignment: "Talons",
    cost: 6000000,
    description: "Pilot prodigy, part of risky Talon ops, a little haughty.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    title: "Tera en Chasteaux",
    skillLevel: 0,
    alignment: "Federation",
    cost: 7000000,
    description: "Best Fed pilot training, controlled her own patrol fleet.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    title: "Dorian Krueger",
    skillLevel: 0,
    alignment: "Federation",
    cost: 9000000,
    description: "Battle-hardened SOF pilot, man of few words.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    title: "Ise Ley'is",
    skillLevel: 0,
    alignment: "Luos Syndicate",
    cost: 9000000,
    description: "Ruthless, high-rank former PMC, respects strength.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    title: "Lux",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 14000000,
    description:
      "One of the best pilots for hire, sense of humor, mysterious past.",
    specialty: "Pilot",
    equipment: 0,
  },
  {
    title: "Zetta",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 18000000,
    description: "Origins unknown, obedient if you're competent.",
    specialty: "Pilot",
    equipment: 0,
  },

  // --- Engineers ---
  {
    title: "Enrico Jourdan",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 1000000,
    description: "Kind, loyal, cheap handiwork, no questions asked.",
    specialty: "Engineer",
    equipment: 0,
  },
  {
    title: "Derek Windtalker",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 2000000,
    description: "From a rare line of mechanics, believes he's one with metal.",
    specialty: "Engineer",
    equipment: 0,
  },
  {
    title: "Alena Bach",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 2000000,
    description:
      "Exceptional inventor, new to starship mechanics, wants to impress.",
    specialty: "Engineer",
    equipment: 0,
  },
  {
    title: "Malcolm Red",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 2000000,
    description:
      "Blames everything for not doing his job, skilled with a crowbar.",
    specialty: "Engineer",
    equipment: "Crowbar",
  },
  {
    title: "Adan Cervantes",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 3000000,
    description:
      "Highly intelligent nuclear engineer, radiation burns, life-support suit.",
    specialty: "Nuclear Engineer",
    equipment: "Life-support suit",
  },
  {
    title: "Trainwreck",
    skillLevel: 0,
    alignment: "Red Daggers",
    cost: 3000000,
    description: "Can keep a 'shit sandwich' moving, wants to build a tank.",
    specialty: "Engineer",
    equipment: 0,
  },
  {
    title: 'Trisha "Props" Lim',
    skillLevel: 0,
    alignment: "Neutral",
    cost: 3000000,
    description: "Hobbyist mechanic, loves tinkering, bubbly personality.",
    specialty: "Mechanic",
    equipment: 0,
  },
  {
    title: "Troy Hall",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 3000000,
    description: "Loves working with machines, metal arm useful.",
    specialty: "Engineer",
    equipment: "Metal arm",
  },
  {
    title: "Cindy Kayoko",
    skillLevel: 0,
    alignment: "Red Daggers",
    cost: 4000000,
    description:
      "Popular among Red Daggers, worked with questionable machinery, not political.",
    specialty: "Engineer",
    equipment: 0,
  },
  {
    title: "Amy McCartney",
    skillLevel: 0,
    alignment: "Federation",
    cost: 4000000,
    description: "Revered scientist, graceful, sings, wants a tavern.",
    specialty: "Scientist (Engineer)",
    equipment: 0,
  },
  {
    title: "Roxanne Gilliam",
    skillLevel: 0,
    alignment: "Talons",
    cost: 4000000,
    description: "Led nuclear research in Talon labs, anti-matter tech.",
    specialty: "Nuclear Research (Engineer)",
    equipment: 0,
  },
  {
    title: "Mereille Fairley",
    skillLevel: 0,
    alignment: "Federation",
    cost: 4000000,
    description: "Geek with Fed gadgets, device for any situation.",
    specialty: "Gadgeteer (Engineer)",
    equipment: "Fed gadgets",
  },
  {
    title: "Arthur Foster",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 5000000,
    description: "Studied under big titles, offers skills for a challenge.",
    specialty: "Engineer",
    equipment: 0,
  },
  {
    title: "Reid Enos",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 6000000,
    description: "Mad scientist, knows lots about nuclear tech.",
    specialty: "Nuclear Tech (Engineer)",
    equipment: 0,
  },

  // --- Doctors ---
  {
    title: "Kelly Moss",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 0,
    description:
      "Cannot be alone in advanced infirmary, volunteered to aid the poor.",
    specialty: "Medic",
    equipment: 0,
  },
  {
    title: "Bethany Parks",
    skillLevel: 0,
    alignment: "Federation",
    cost: 1000000,
    description:
      "Fresh out of medical school, wants field experience, loves cats.",
    specialty: "Medic",
    equipment: 0,
  },
  {
    title: "Ignacio Lopez",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 2000000,
    description:
      "Cares only for medical books, competent medic with a workplace.",
    specialty: "Medic",
    equipment: 0,
  },
  // Trisha "Props" Lim is listed under Engineers and Doctors, will keep her under Engineers only as she is described as a "Hobbyist mechanic"
  {
    title: "Tina Wei",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 4000000,
    description: "Former merc medic, used to stress of high demand.",
    specialty: "Merc Medic",
    equipment: 0,
  },
  {
    title: "Lupe",
    skillLevel: 0,
    alignment: "Red Daggers",
    cost: 4000000,
    description:
      "Technically a doctor, but unconventional, pirate miracle worker.",
    specialty: "Unconventional Doctor",
    equipment: 0,
  },
  {
    title: "Devon Trice",
    skillLevel: 0,
    alignment: "Blackhawk Elite",
    cost: 5000000,
    description:
      "Stalwart Blackhawk, favors less violent life, skilled in combat.",
    specialty: "Medic (Combat Skilled)",
    equipment: 0,
  },
  {
    title: "Lyra Miralda",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 7000000,
    description:
      "Young, in medical textbooks, quick, efficient, a little awkward.",
    specialty: "Medic",
    equipment: 0,
  },

  // --- Ship Gunners ---
  {
    title: "Brian Richardson",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 1000000,
    description:
      "Knows everything about ship weapons, student who'd drop studies for gunner job.",
    specialty: "Ship Weapons",
    equipment: 0,
  },
  {
    title: "Seer",
    skillLevel: 0,
    alignment: "Red Daggers",
    cost: 1000000,
    description:
      "Bad history, prime pirate example, unsavory even to Red Daggers.",
    specialty: "Ship Gunner",
    equipment: 0,
  },
  {
    title: "Elizabeth Tyler",
    skillLevel: 0,
    alignment: "Federation",
    cost: 2000000,
    description: "Part of rare Fed patrols, met action but inexperienced.",
    specialty: "Ship Gunner",
    equipment: 0,
  },
  {
    title: "Alton Daniel",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 2000000,
    description: "From a backwater planet, skilled in ship gunning.",
    specialty: "Ship Gunner",
    equipment: 0,
  },
  {
    title: "John Pope",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 3000000,
    description: "Former merchant, quick aim from bandit attacks.",
    specialty: "Ship Gunner",
    equipment: 0,
  },
  {
    title: "Theresa Herder",
    skillLevel: 0,
    alignment: "Blackhawk Elite",
    cost: 3000000,
    description:
      "Former Fed gunner, Blackhawk Elite, disciplined but laid-back off work.",
    specialty: "Ship Gunner",
    equipment: 0,
  },
  {
    title: "Vis'yeth",
    skillLevel: 0,
    alignment: "Luos Syndicate",
    cost: 4000000,
    description:
      "Mysterious, took down three cruisers himself in Haven defence.",
    specialty: "Ship Gunner",
    equipment: 0,
  },
  {
    title: 'Clara "Sun" Howell',
    skillLevel: 0,
    alignment: "Neutral",
    cost: 4000000,
    description: "Fiery and passionate, fun to tease about being a ginger.",
    specialty: "Ship Gunner",
    equipment: 0,
  },
  {
    title: "Faith Nichols",
    skillLevel: 0,
    alignment: "Federation",
    cost: 4000000,
    description: "From Fed SOF, high-tech equipment, very innocent.",
    specialty: "Ship Gunner",
    equipment: "High-tech equipment",
  },
  {
    title: "Comet",
    skillLevel: 0,
    alignment: "Neutral",
    cost: "Special cost",
    description: "Requires 'The Sorcerer' title, body mingles with energy.",
    specialty: "Ship Gunner",
    equipment: 0,
    image: "Images/Crew/sorcerer-crew-midjourney.webp",
  },
  {
    title: "Viktor",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 5000000,
    description: "Down to earth, professional, reliable ship gunner.",
    specialty: "Ship Gunner",
    equipment: 0,
  },
  {
    title: 'Tavia "Echo" Tsun',
    skillLevel: 0,
    alignment: "Talons",
    cost: 5000000,
    description:
      "Rare Talon for hire, intimidating but down-to-earth, don't call her Tavi.",
    specialty: "Ship Gunner",
    equipment: 0,
  },
  {
    title: "Lt. Bill Smith",
    skillLevel: 0,
    alignment: "Federation",
    cost: 5000000,
    description: "Veteran gunner, hits hard and ruthlessly.",
    specialty: "Ship Gunner",
    equipment: 0,
  },
  {
    title: "Amanda Lynch",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 6000000,
    description:
      "Fast, strong-willed, never lost a fleet fight, defended industrial areas.",
    specialty: "Ship Gunner",
    equipment: 0,
  },

  // --- Combat & Security ---
  {
    title: "Owen Baker",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 1000000,
    description: "Drove out bandits from his homeworld.",
    specialty: "Guerilla warfare",
    equipment: 0,
  },
  {
    title: "Sasha Baker",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 1000000,
    description: "Owen's younger sister, crack shot, too many kill notches.",
    specialty: "Sniping",
    equipment: 0,
  },
  {
    title: "Myrie Shaffer",
    skillLevel: 0,
    alignment: "Red Daggers",
    cost: 2000000,
    description: "Worked for notorious pirate gang, makes deals go her way.",
    specialty: "Storming",
    equipment: 0,
  },
  {
    title: "Pierre Mikisugi",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 2000000,
    description: "Good cop, part of high-stake raids.",
    specialty: "Ship security",
    equipment: 0,
  },
  {
    title: "Sophie Haynes",
    skillLevel: 0,
    alignment: "Federation",
    cost: 2000000,
    description:
      "Faith Nichols' friend, quick, witty, has a sixth sense for bad vibes.",
    specialty: "Covert ops",
    equipment: 0,
  },
  {
    title: "Grzegorz Grzegrzółka",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 2000000,
    description:
      "Ex-cop, works to pay for his sister's education, does things his own way.",
    specialty: "Ship security",
    equipment: 0,
  },
  {
    title: "Ley'ra Laur",
    skillLevel: 0,
    alignment: "Luos Syndicate",
    cost: 3000000,
    description:
      "Steel nerves, took point in battles, lost her high-tech armor, shy off-duty.",
    specialty: "Point position",
    equipment: "Lost high-tech armor",
  },
  {
    title: 'Dani "Cuts" Laine',
    skillLevel: 0,
    alignment: "Blackhawk Elite",
    cost: 3000000,
    description:
      "Aggressive, blunt, fireteam leader, helped reduce crime in 3 systems.",
    specialty: "Long-range",
    equipment: 0,
  },
  {
    title: "Ward Shapiro",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 3000000,
    description:
      "Joined security to finish his book, got conscripted and sent to front lines.",
    specialty: "Sentry",
    equipment: 0,
  },
  {
    title: "Sgt. Raul Miller",
    skillLevel: 0,
    alignment: "Federation",
    cost: 3000000,
    description:
      "Stationed on an ice planet, dealt with pirates and cartels, navigates tough terrain.",
    specialty: "Front-line assault",
    equipment: 0,
  },
  {
    title: 'Erik "Sooter" Burke',
    skillLevel: 0,
    alignment: "Red Daggers",
    cost: 3000000,
    description:
      "Not smart in other areas, but a great rank-and-file pirate with a weapon. Don't make him mad.",
    specialty: "Front-line assault",
    equipment: "Weapon",
  },
  {
    title: "Vikram Solar",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 4000000,
    description:
      "Loves laser weapons, refuses conventional ammo ('messy'), a bit of a neat freak.",
    specialty: "Long-range (Laser Weapons)",
    equipment: "Laser weapons",
  },
  {
    title: "Darrel Wallace",
    skillLevel: 0,
    alignment: "Blackhawk Elite",
    cost: 4000000,
    description:
      "Flew in many fleets, top-notch on-ship security, tough like the Blackhawks.",
    specialty: "Sentry (On-ship security)",
    equipment: 0,
  },
  {
    title: "Rooks King",
    skillLevel: 0,
    alignment: "Gazers",
    cost: 5000000,
    description:
      "Skilled Gazer operator, hangs with Dustkeepers, his disappearances are ignored.",
    specialty: "Guerilla warfare",
    equipment: 0,
  },
  {
    title: "Livia Amaruq",
    skillLevel: 0,
    alignment: "Federation",
    cost: 5000000,
    description:
      "Ex-operative from Fed SOF, worked on the same ice planet as Sgt. Raul, looks deadly.",
    specialty: "Hand-to-hand",
    equipment: 0,
  },
  {
    title: "Scot Shephard",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 5000000,
    description: "SWAT in a big city, seen the worst of humanity.",
    specialty: "Storming",
    equipment: 0,
  },
  {
    title: "Alessia",
    skillLevel: 0,
    alignment: "Talons",
    cost: 5000000,
    description:
      "Hot-headed, wants to strangle her brother Ricce, don't get in her way.",
    specialty: "Long-ranged",
    equipment: 0,
  },
  {
    title: "Ricce",
    skillLevel: 0,
    alignment: "Federation",
    cost: 5000000,
    description:
      "Stalwart soldier in high-tech armor, a force on the battlefield. Silent about his sister Alessia.",
    specialty: "Front-line assault",
    equipment: "High-tech armor",
  },
  {
    title: "Arabelle Meyer",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 5000000,
    description: "Disciplined, patient, cunning assassin, great at hiding.",
    specialty: "Sniping (Assassin)",
    equipment: 0,
  },
  {
    title: "Marcelo Lee",
    skillLevel: 0,
    alignment: "Talons",
    cost: 6000000,
    description:
      "Rare Talon for hire, has cool gadgets, solo mission experience.",
    specialty: "Guerilla warfare",
    equipment: "Cool gadgets",
  },
  {
    title: "Lt. Jenny Larue",
    skillLevel: 0,
    alignment: "Federation",
    cost: 6000000,
    description:
      "Top Fed SOF officer, commands with a valiant heart, known for 'strict kindness,' often works under Tera.",
    specialty: "Point position",
    equipment: 0,
  },
  {
    title: "Martin Jenkins",
    skillLevel: 0,
    alignment: "Blackhawk Elite",
    cost: 6000000,
    description:
      "Iconic Blackhawk Elite shock trooper, leads conflicts with unstoppable momentum.",
    specialty: "Storming (Shock Trooper)",
    equipment: 0,
  },
  {
    title: "My'hra Jos",
    skillLevel: 0,
    alignment: "Luos Syndicate",
    cost: 7000000,
    description:
      "Skilled ground officer in a small PMC, helped defend the Abyss system.",
    specialty: "Infiltration",
    equipment: 0,
  },
  {
    title: "Patch Newton",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 7000000,
    description:
      "Notorious, deadly assassin with a rifle. Built his own unique hardware, 'one with his armor.'",
    specialty: "Sniping (Assassin)",
    equipment: "Rifle, unique hardware",
  },
  {
    title: "Locust",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 14000000,
    description:
      "'Rider of Famine,' can destroy armies with his blade, from the classified Apocalypse program.",
    specialty: "Hand-to-hand (Blade)",
    equipment: "Blade",
  },
  {
    title: "Plague",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 15000000,
    description:
      "'Rider of Pestilence,' toughest armor, strongest in brute force, one of the four separated Riders.",
    specialty: "Front-line assault (Brute Force)",
    equipment: "Toughest armor",
  },
  {
    title: "Archangel",
    skillLevel: 0,
    alignment: "Federation",
    cost: 17000000,
    description:
      "'Rider of War,' wields a unique Ion Cannon, loyal to the Federation.",
    specialty: "Heavy weapons",
    equipment: "Unique Ion Cannon",
  },
  {
    title: "Styx",
    skillLevel: 0,
    alignment: "Herself",
    cost: 18000000,
    description:
      "'Rider of Death,' holds a terrible grudge against the Federation after defection, respects her siblings.",
    specialty: "Infiltration",
    equipment: 0,
  },

  // --- Cyber Security Officers ---
  {
    title: "Perry West",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 3000000,
    description:
      "From a big company, great at electronic warfare, your ship will be well defended.",
    specialty: "Electronic warfare",
    equipment: 0,
  },
  {
    title: 'Erica "761"',
    skillLevel: 0,
    alignment: "Neutral",
    cost: 4000000,
    description:
      "Dropped out of university, cut ties, now wants to join your crew.",
    specialty: "Cyber Security",
    equipment: 0,
  },
  {
    title: "Damian Galt",
    skillLevel: 0,
    alignment: "Red Daggers",
    cost: 4000000,
    description:
      "Has an excellent service record and a lot of illegally obtained porn. Will awkwardly hit on female crew over the PA. Constantly.",
    specialty: "Cyber Security",
    equipment: 0,
  },
  {
    title: "Slash Singer",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 4000000,
    description:
      "Brilliant programmer, can bypass tough security, has lots of 'skeleton key' decryption programs.",
    specialty: "Programmer (Security Bypass)",
    equipment: "'Skeleton key' decryption programs",
  },
  {
    title: "Veslav Smertodov",
    skillLevel: 0,
    alignment: "Talons",
    cost: 6000000,
    description:
      "Well-known Talon hacker, expert with AI, good at multitasking, often fought 'Arachne' in cyber battles.",
    specialty: "Hacker (AI Expert)",
    equipment: 0,
  },
  {
    title: "Arachne",
    skillLevel: 0,
    alignment: "Federation",
    cost: 6000000,
    description:
      "Ex-military intelligence officer, can go head-to-head with notorious hackers in cyber warfare.",
    specialty: "Cyber warfare",
    equipment: 0,
  },
  {
    title: "Uplink",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 12000000,
    description:
      "Expensive to install, one of the few sapient AI androids, wants access to all information.",
    specialty: "AI Android (Information Access)",
    equipment: 0,
  },

  // --- Scientists ---
  {
    title: "Lauren L. Lazuli",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 0,
    description:
      "Found her in your lab, caffeine packets everywhere, feverishly working on a thesis, sleeps in the lab.",
    specialty: "Scientist (Thesis)",
    equipment: 0,
  },
  {
    title: "Curt Robertson",
    skillLevel: 0,
    alignment: "Federation",
    cost: 1000000,
    description:
      "Believes you shouldn't abandon your body, human biology specialist, very tall due to his research.",
    specialty: "Human biology",
    equipment: 0,
  },
  {
    title: "Emily Newton",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 1000000,
    description:
      "Morally against combat ships, expert in xenobiology and terraforming, a bit eccentric.",
    specialty: "Xenobiology, Terraforming",
    equipment: 0,
  },
  {
    title: "Sarah Escher",
    skillLevel: 0,
    alignment: "Red Daggers",
    cost: 2000000,
    description:
      "Super smart but short attention span, frequent experiments with mana energy gave her an eerie glow.",
    specialty: "Mana energy experiments",
    equipment: 0,
  },
  {
    title: "Shinichi Yagazen",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 3000000,
    description:
      "Biology, bioengineering, chemistry, and biological warfare expert. Wanted for questionable experiments and creating bioweapons.",
    specialty: "Biology, Bioengineering, Chemistry, Biological Warfare",
    equipment: 0,
  },
  {
    title: "Isaac J. Bidlack",
    skillLevel: 0,
    alignment: "Federation",
    cost: 3000000,
    description:
      "Years of study, research increased galactic agricultural production by half a percent. Likes candied fish.",
    specialty: "Agricultural production research",
    equipment: 0,
  },
  {
    title: "Wilhelm von Welch",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 5000000,
    description:
      "Brilliant and mad, strict scientist obsessed with learning about the Heralds.",
    specialty: "Heralds research",
    equipment: 0,
  },

  // --- Production Managers ---
  {
    title: "Sibyl",
    skillLevel: 0,
    alignment: "Red Daggers",
    cost: 1000000,
    description:
      "Worked in Red Dagger industrial wings for 20+ years, knows lots of mining and manufacturing tricks.",
    specialty: "Mining, Manufacturing",
    equipment: 0,
  },
  {
    title: "Madeline Moran",
    skillLevel: 0,
    alignment: "Blackhawk Elite",
    cost: 2000000,
    description:
      "Crucial to Blackhawk Elite's hardware might, keeps them going strong.",
    specialty: "Hardware production",
    equipment: 0,
  },
  {
    title: "Wesley Chalmers",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 2000000,
    description:
      "Always gets the job done, even if your ship is falling apart.",
    specialty: "Production Management",
    equipment: 0,
  },
  {
    title: "Corrine Peyton",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 3000000,
    description:
      "Serious and authoritative in industrial wings, workers obey or face a long, deafening scolding.",
    specialty: "Industrial Management",
    equipment: 0,
  },
  {
    title: "Ty Piper",
    skillLevel: 0,
    alignment: "Federation",
    cost: 3000000,
    description:
      "Great production manager, excellent track record from Fed industrial systems, promotes efficiency and work ethics.",
    specialty: "Production Management (Efficiency)",
    equipment: 0,
  },
  {
    title: "May Padilla",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 4000000,
    description:
      "Hard worker, speeds things up, likes to boast about her strength.",
    specialty: "Production Management",
    equipment: 0,
  },
  {
    title: "Michael Danagger",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 6000000,
    description:
      "Super successful industrialist, his company fueled shipping businesses in over a dozen systems.",
    specialty: "Industrialist",
    equipment: 0,
  },

  // --- Chefs & Bartenders ---
  {
    title: "Jorgen Masterson",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 1000000,
    description:
      "Retired merc who became a chef. Served on prison transports, capable and ingenious cook.",
    specialty: "Chef",
    equipment: 0,
  },
  {
    title: "Mikka Akimoto",
    skillLevel: 0,
    alignment: "Red Daggers",
    cost: 1000000,
    description:
      "Specializes in Japanese and other Asian cuisines. Sushi and ramen are timeless.",
    specialty: "Chef (Japanese/Asian Cuisine)",
    equipment: 0,
  },
  {
    title: "Patricia Cooper",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 2000000,
    description:
      "Loves to cook, takes charge in the kitchen, enjoys working with European cuisines.",
    specialty: "Chef (European Cuisine)",
    equipment: 0,
  },
  {
    title: "Vito Lozano",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 4000000,
    description:
      "Will only use a fancy mess hall. Do not disturb when he's cooking. His spaghetti is perfection.",
    specialty: "Chef",
    equipment: 0,
  },
  {
    title: "Laurie Parsons",
    skillLevel: 0,
    alignment: "Federation",
    cost: 1000000,
    description:
      "Typical bartender, listens to your problems, perfect for standard mixes.",
    specialty: "Bartender",
    equipment: 0,
  },
  {
    title: "Carolyn Brooks",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 2000000,
    description:
      "Playful and outgoing, aims for smiles with every serve, loves mixing fancy drinks.",
    specialty: "Bartender (Fancy Drinks)",
    equipment: 0,
  },
  {
    title: "Hal",
    skillLevel: 0,
    alignment: "Neutral",
    cost: 4000000,
    description:
      "Former assassin, has many stories, might have 'special' mixes that need a lab.",
    specialty: "Bartender (Special Mixes)",
    equipment: 0,
  },
];

const archetype = [
  {
    title: "Volunteers",
    skillLevel: 0,
    alignment: "Neutral",
    cost: {
      x1: 0,
      x5: 0,
      x10: 0,
      x50: 0,
      x100: 0,
      x500: 0,
    },
    description:
      "Many people volunteer to be a part of a ship crew. These people can get the job done, but they're not professionals.",
  },
  {
    title: "Civilian Workers",
    skillLevel: 0,
    alignment: "Neutral",
    cost: {
      x1: 100000,
      x5: 300000,
      x10: 500000,
      x50: 1000000,
      x100: 2000000,
      x500: 9000000,
    },
    description:
      "Plenty of civilians are looking for legitimate work, and many of them qualify as space-faring crew members.",
  },
  {
    title: "Industry Labourers",
    skillLevel: 0,
    alignment: "Neutral",
    cost: {
      x1: 100000,
      x5: 300000,
      x10: 500000,
      x50: 1000000,
      x100: 2000000,
      x500: 9000000,
    },
    description:
      "Looking to get work done? No other crew can get your mining, manufacturing, and processing needs finished as efficiently.",
  },
  {
    title: "Researchers",
    skillLevel: 0,
    alignment: "Neutral",
    cost: {
      x1: 100000,
      x5: 300000,
      x10: 500000,
      x50: 1000000,
      x100: 2000000,
      x500: 9000000,
    },
    description:
      "For the pursuit of science and discovery among endless amount of stars, researchers make for a very intelligent crew.",
  },
  {
    title: "Bandits",
    skillLevel: 0,
    alignment: "Pirates",
    cost: {
      x1: 100000,
      x5: 300000,
      x10: 500000,
      x50: 1000000,
      x100: 2000000,
      x500: 9000000,
    },
    description:
      "The average bandit can make a hard working crew member, provided you can get them to respect you.",
  },
  {
    title: "Explorers",
    skillLevel: 0,
    alignment: "Neutral",
    cost: {
      x1: 100000,
      x5: 300000,
      x10: 500000,
      x50: 1000000,
      x100: 2000000,
      x500: 9000000,
    },
    description:
      "Cursed with an endless thing for exploration, explorers long for the stars as much as you do. Almost.",
  },
  {
    title: "Medics",
    skillLevel: 0,
    alignment: "Neutral",
    cost: {
      x1: 100000,
      x5: 300000,
      x10: 500000,
      x50: 1000000,
      x100: 2000000,
      x500: 9000000,
    },
    description:
      "Medical knowledge is a valuable asset. Unfortunately, not every one's a medic, so why not hire some professionals?",
  },
  {
    title: "Engineers",
    skillLevel: 0,
    alignment: "Neutral",
    cost: {
      x1: 100000,
      x5: 300000,
      x10: 500000,
      x50: 1000000,
      x100: 2000000,
      x500: 9000000,
    },
    description:
      "It's usually wise to have a good amount of engineers available. No one's better at maintaining your vessel and its machinery.",
  },
  {
    title: "Mercenaries",
    skillLevel: 0,
    alignment: "Neutral",
    cost: {
      x1: 100000,
      x5: 300000,
      x10: 500000,
      x50: 1000000,
      x100: 2000000,
      x500: 9000000,
    },
    description:
      "Mercenaries make up the majority of the galaxy's ship crews that aren't pirates or part of the Federation.",
  },
  {
    title: "Seraphs",
    skillLevel: 0,
    alignment: "Blackhawk Elite",
    cost: {
      x1: 100000,
      x5: 300000,
      x10: 500000,
      x50: 1000000,
      x100: 2000000,
      x500: 9000000,
    },
    description:
      "Essentially Blackhawks-in-training, the Seraphs is where they all start. While relatively inexperienced, they show promise.",
  },
  {
    title: "Red Dagger Pirates",
    skillLevel: 0,
    alignment: "Red Daggers",
    cost: {
      x1: 100000,
      x5: 300000,
      x10: 500000,
      x50: 1000000,
      x100: 2000000,
      x500: 9000000,
    },
    description:
      "Above the average pirate and bandit lies the average Red Dagger. Their cunning and hardy instincts are exceptional.",
  },
  {
    title: "Navy Soldiers",
    skillLevel: 0,
    alignment: "Federation",
    cost: {
      x1: 100000,
      x5: 300000,
      x10: 500000,
      x50: 1000000,
      x100: 2000000,
      x500: 9000000,
    },
    description:
      "The Federation trains decent and disciplined crew members. They will give to you you are a valiant and capable leader.",
  },
  {
    title: "Core Ring Mercs",
    skillLevel: 0,
    alignment: "Luos Syndicate",
    cost: {
      x1: 100000,
      x5: 300000,
      x10: 500000,
      x50: 1000000,
      x100: 2000000,
      x500: 9000000,
    },
    description:
      "Luos Core Ring mercs are both fearsome and sinister, and deathly loyal to those who prove their strength.",
  },
  {
    title: "Dustkeepers",
    skillLevel: 0,
    alignment: "Neutral",
    cost: {
      x1: 100000,
      x5: 300000,
      x10: 500000,
      x50: 1000000,
      x100: 2000000,
      x500: 9000000,
    },
    description:
      "Highly skilled with a very rich variety of talents, Dustkeepers can make a very capable crew for almost any job.",
  },
];

function addCrewToSection(crewArray, choicePrefix, sectionID, dataType) {
  const targetSection = document.getElementById(sectionID);

  if (!targetSection) {
    console.error(`Target section with ID "${sectionID}" not found.`);
    return;
  }

  if (!Array.isArray(crewArray)) {
    console.error(
      `Global variable "${crewArray}" is not an array or does not exist.`
    );
    return;
  }

  // Check if the section already has population to prevent duplicate entries
  // Assuming the first item's title is representative for checking
  if (crewArray.length > 0) {
    // Sanitize the title for use as an ID
    const checkDiv = document.getElementById(
      `${choicePrefix}-${crewArray[0].title
        .replace(/\s/g, "-")
        .replace(/[^a-zA-Z0-9-]/g, "")}`
    );
    if (document.contains(checkDiv)) {
      return; // Section already populated, do nothing
    }
  }

  // If not populated, create new divs to populate choices
  crewArray.forEach((item) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("choice");
    // Ensure unique ID for each choice element, sanitize title for ID
    newDiv.id = `${choicePrefix}-${item.title
      .replace(/\s/g, "-")
      .replace(/[^a-zA-Z0-9-]/g, "")}`;

    const newSpan = document.createElement("span");
    newDiv.appendChild(newSpan);

    // Image element - common to all
    const imgElement = document.createElement("img");
    imgElement.src =
      item.image || "https://placehold.co/100x100/eeeeee/ffffff?text=NoImage";
    imgElement.alt = `${item.name} image`;
    newSpan.appendChild(imgElement); // Image added after newSpan

    // Create an h3 element for the title
    const h3Element = document.createElement("h3");
    h3Element.style.marginTop = "0px";
    h3Element.style.marginBottom = "0px";
    h3Element.textContent = item.title || "No Title";
    newSpan.appendChild(h3Element);

    // Cost
    if (dataType === "archetype") {
      appendDropdown(newSpan, 5);

      const costP = document.createElement("p");
      costP.innerHTML = "Cost: ";
      newSpan.appendChild(costP);

      Object.keys(item.cost).forEach((key) => {
        let costPerCrew = document.createElement("p");
        costPerCrew.innerHTML = `${key}: ${item.cost[key]}`;
        newSpan.appendChild(costPerCrew);
      });
    } else {
      const costP = document.createElement("p");
      costP.innerHTML = `Cost: ${item.cost}`;
      newSpan.appendChild(costP);
    }

    // Specialty
    if (item.specialty !== undefined) {
      const specialtyP = document.createElement("p");
      specialtyP.textContent = `Specialty: ${item.specialty}`;
      newSpan.appendChild(specialtyP);
    }

    if (item.equipment !== undefined) {
      const equipmentP = document.createElement("p");
      equipmentP.textContent = `Equipment: ${item.equipment}`;
      newSpan.appendChild(equipmentP);
    }
    // Skill Level
    if (item.skillLevel !== undefined) {
      const skillLevelP = document.createElement("p");
      skillLevelP.textContent = `Skill Level: ${item.skillLevel}`;
      newSpan.appendChild(skillLevelP);
    }

    // Alignment
    if (item.alignment !== undefined) {
      const alignmentP = document.createElement("p");
      alignmentP.textContent = `Alignment: ${item.alignment}`;
      newSpan.appendChild(alignmentP);
    }

    // Description
    if (item.description !== undefined) {
      const descriptionP = document.createElement("p");
      descriptionP.textContent = `Description: ${item.description}`;
      newSpan.appendChild(descriptionP);
    }

    targetSection.before(newDiv); // Append to the target section
  });
}
