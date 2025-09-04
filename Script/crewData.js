export { crew, archetype, addCrewToSection };
import { appendDropdown, formatterIntl } from "/Script/manaData.js";
import { getImgName } from "/Script/switchChoose.js";

const crew = [
  {
    title: "Anna Tse",
    skillLevel: 2,
    alignment: "Neutral",
    cost: 1000000,
    description:
      "Anna recently graduated from the pilot program at Beatrice Tech. She is incredibly loyal and will follow you wherever you go.",
    specialty: "Pilot",
    equipment: 7,
    image: "Images/Crew/IsekaiLanayaya-civitai.webp",
  },
  {
    title: "Gregory Hunter",
    skillLevel: 7,
    alignment: "Neutral",
    cost: 2000000,
    description:
      "This guy would give an arm or two for you. He is everything you see in a brother, and has a lot of experience in the outer-rim systems.",
    specialty: "Pilot",
    equipment: 3,
    image: "Images/Crew/Awhimsical-Nixst3r-civitai.webp",
  },
  {
    title: "Pepper",
    skillLevel: 7,
    alignment: "Neutral",
    cost: 1000000,
    description:
      "Naive but incredibly outgoing, Pepper hasn't had much training, but she loves flying and does it a lot. She wants to try her hand at being a co-pilot.",
    specialty: "Pilot",
    equipment: 2,
    image: "Images/Crew/gothgirl-indotort-civitai.webp",
  },
  {
    title: "Horace Carter",
    skillLevel: 3,
    alignment: "Neutral",
    cost: 2000000,
    description:
      "He loves his cars, he loves ships, and is passionate about all things vehicles. Horace would kill to get a chance of becoming a pilot-for-hire.",
    specialty: "Pilot",
    equipment: 6,
    image: "Images/Crew/mifune-oskarvega-gelbooru.webp",
  },
  {
    title: "Kay Hunter",
    skillLevel: 2,
    alignment: "Neutral",
    cost: 2000000,
    description:
      "The younger sister of Gregor, Kay actually took her studies seriously. She also has virtually no experience, and needs you to lead her properly.",
    specialty: "Pilot",
    equipment: 8,
    image: "Images/Crew/reijlita3-civitai.webp",
  },
  {
    title: "Elijah Horton",
    skillLevel: 7,
    alignment: "Neutral",
    cost: 2000000,
    description:
      "An old fashioned but skilled pilot, Elijah was often offered courier contracts that took him deep into the outer rim systems. Great at negotiating.",
    specialty: "Pilot",
    equipment: 4,
    image: "Images/Crew/blackjawline-Nixst3r-civitai.webp",
  },
  {
    title: "Sgt. Markima 'Mark' LeCruz",
    skillLevel: 5,
    alignment: "Federation",
    cost: 2000000,
    description:
      "Mark is a sergeant who led her own squad of fighter pilots during the war against the Luos Syndicate. She is an ace pilot, and proves a great asset to any crew.",
    specialty: "Pilot",
    equipment: 6,
    image: "Images/Crew/makima-imge-civitai.webp",
  },
  {
    title: "Jacqueline Young",
    skillLevel: 7,
    alignment: "Neutral",
    cost: 2000000,
    description:
      "Jackie got her flying skills from piloting scouting vessels for Pulsar Inc., having lots of practice dodging dangerous, fast-moving asteroids.",
    specialty: "Pilot",
    equipment: 5,
    image: "Images/Crew/IsekaiLanayaya3-civitai.webp",
  },
  {
    title: "Alvin Reyes",
    skillLevel: 4,
    alignment: "Blackhawk Elite",
    cost: 3000000,
    description:
      'Often called a "kid" by his Blachawk superiors, Alvin longs for proper experience to prove to them he\'s capable. He assures you he would be a great asset.',
    specialty: "Pilot",
    equipment: 7,
    image: "Images/Crew/beautifulboy-azarado-civitai.webp",
  },
  {
    title: "Tiffany Manson",
    skillLevel: 7,
    alignment: "Neutral",
    cost: 3000000,
    description:
      "Targeting Beatrice R&D ships is looked down upon by everyone, but it happens. Tiffany often escorted science and exploration vessels in a fighter ship.",
    specialty: "Pilot",
    equipment: 4,
    image: "Images/Crew/spacegirl2-indotort-civitai.webp",
  },
  {
    title: "Susan Zim",
    skillLevel: 7,
    alignment: "Red Daggers",
    cost: 3000000,
    description:
      "Susie flew with a powerful gang in the Red Daggers. She's as sharp as she looks, and has partaken in very risky heists.",
    specialty: "Pilot",
    equipment: 6,
    image: "Images/Crew/popularity_choi-29.webp",
  },
  {
    title: "Tyler Vaughn",
    skillLevel: 4,
    alignment: "Federation",
    cost: 3000000,
    description:
      "Tyler comes from a wealthy line and found himself in the Navy. He is regarded as a master tactician, and now wants to put his knowledge to the test.",
    specialty: "Pilot",
    equipment: 7,
    image: "Images/Crew/meliodas-imge-civitai.webp",
  },
  {
    title: "Ivan Chesnikov",
    skillLevel: 5,
    alignment: "Neutral",
    cost: 4000000,
    description:
      "He might never take off his mask, but he really is a friendly guy, despite all of his experience flying with mercs. Never take him to a kebab parlour.",
    specialty: "Pilot",
    equipment: 8,
    image: "Images/Crew/johnson-ting-fighterpilot9.webp",
  },
  {
    title: "Milka Star",
    skillLevel: 6,
    alignment: "Red Daggers",
    cost: 4000000,
    description:
      "Milka's polite, shy, and friendly... everything that you wouldn't expect from a Red Dagger. She, as she puts it, \"greatly dislikes\" the Federation. Has a pet dog.",
    specialty: "Pilot",
    equipment: 7,
    image: "Images/Crew/runaheadofme-civitai.webp",
  },
  {
    title: "Royce Kodai",
    skillLevel: 9,
    alignment: "Neutral",
    cost: 4000000,
    description:
      "Large cities need their police force, and Royce is an exceptional cop. He's chased down criminals in some of the highest speed chas n the galaxy.",
    specialty: "Pilot",
    equipment: 7,
    image: "Images/Crew/kaneki-imge-civitai.webp",
  },
  {
    title: "Mokhov Petrovich",
    skillLevel: 5,
    alignment: "Blackhawk Elite",
    cost: 4000000,
    description:
      "A former drill sergeant from the Blackhawk Elite, Mokhov turned to piloting to search for vengeance. Vengeance for what, he'll only tell thos trusts.",
    specialty: "Pilot",
    equipment: 8,
    image: "Images/Crew/aleksandar-mihajlovic-final.webp",
  },
  {
    title: "E.R.I.",
    skillLevel: null,
    alignment: "Neutral",
    cost: 5000000,
    description:
      "Eri was a maid-purposed android who had a malfunction in the factory, gaining sapience. She doesn't know much about social cues, but she's a great pilot.",
    specialty: "Pilot",
    equipment: 5,
    image: "Images/Crew/robotgirl-3mcg33-civitai.jpeg",
  },
  {
    title: "Wes Lunso",
    skillLevel: null,
    alignment: "Neutral",
    cost: 5000000,
    description:
      "Wes used to work for a mercenary group, but has since left and is looking for a change in pace. He is very passionate for flying and racing.",
    specialty: "Pilot",
    equipment: null,
    image: "Images/Crew/ThousandHands-civitai.webp",
  },
  {
    title: "Lia Stitt",
    skillLevel: 6,
    alignment: "Neutral",
    cost: 5000000,
    description:
      "With a thirst for adventure, Lia will hitch on any ride that will take her to the stars. As an opportunist, she'll often take interesting detours if you let her.",
    specialty: "Pilot",
    equipment: 8,
    image: "Images/Crew/corporat3-civitai.webp",
  },
  {
    title: "Hailey",
    skillLevel: null,
    alignment: "Neutral",
    cost: "Special cost",
    description:
      "While she's not very talkative, Hailey seems to have some sort of psi powers. She knows what you're gonna say efore you do.",
    specialty: "Pilot",
    equipment: null,
    image: "Images/Titles/hailey-crew-midjourney.webp",
  },
  {
    title: "Conrad Byrant",
    skillLevel: 8,
    alignment: "Blackhawk Elite",
    cost: 5000000,
    description:
      "Conrad is a man who can stay to his duty and really commit to it. As a loyal Blackhawk pilot, he's flown for several days at a time without rest.",
    specialty: "Pilot",
    equipment: null,
    image: "Images/Crew/nikolay-demencevich-swame-studio-camera-new-02.webp",
  },
  {
    title: "Mikayla Suzuki",
    skillLevel: null,
    alignment: "Gazers",
    cost: 6000000,
    description:
      "Mikayla is one of the Gazer's elite pilots, and has baited many fleets to their deaths. She's bold and brash, but always keeps her cool, even under high pressure.",
    specialty: "Pilot",
    equipment: null,
    image: "Images/Crew/I_never_Did707-civitai.webp",
  },
  {
    title: 'David "Tabs" Sharp',
    skillLevel: 8,
    alignment: "Talons",
    cost: 6000000,
    description:
      "A pilot prodigy ever since he could get behind a wheel, Tabs has been a part of some of the Talon's riskiest operations. He's a little haughty, though.",
    specialty: "Pilot",
    equipment: 7,
    image:
      "Images/Crew/takeshiobata2-Nixst3r-civitai.webp",
  },
  {
    title: "Tera en Chasteaux",
    skillLevel: 8,
    alignment: "Federation",
    cost: 7000000,
    description:
      "Tera's been through some of the best pilot training the Federation has to offer, and was in control of her own patrol fleet around Freeport space for awhile.",
    specialty: "Pilot",
    equipment: 8,
    image: "Images/Crew/corporat2-civitai.webp",
  },
  {
    title: "Dorian Krueger",
    skillLevel: 8,
    alignment: "Federation",
    cost: 9000000,
    description:
      "Dorian is a battle-hardened pilot from one of the Federation's SOF. He's a man of few words, but every rare word of his carries intimidating weight.",
    specialty: "Pilot",
    equipment: 8,
    image: "Images/Crew/takeshiobata-Nixst3r-civitai.webp",
  },
  {
    title: "Ise Ley'is",
    skillLevel: 10,
    alignment: "Luos Syndicate",
    cost: 9000000,
    description:
      "Ise was a high-rank in the Core Ring PMC, Dramvel, but it has since dissolved after the war. She's ruthless, and will only respect you if you are, too.",
    specialty: "Pilot",
    equipment: 9,
    image: "Images/Crew/matasvolkovas350-civitai.webp",
  },
  {
    title: "Misa",
    skillLevel: 10,
    alignment: "Neutral",
    cost: 14000000,
    description:
      "While Misa is one of the best pilots up for hire, she also has a sense of humor. She doesn't talk about her past very much, and not much of her is known.",
    specialty: "Pilot",
    equipment: 1,
    image: "Images/Crew/misa-amane-indotort-civitai.webp",
  },
  {
    title: "Zetta",
    skillLevel: 10,
    alignment: "Neutral",
    cost: 18000000,
    description:
      "His origins unknown, some think he's an Al, others think he's a Herald. He is obedient to those who lead him, but only if you are competent enough.",
    specialty: "Pilot",
    equipment: 10,
    image: "Images/Crew/cubeman-indotort-midjourney.webp",
  },
  // --- engineerS ---
  {
    title: "Enrico Jourdan",
    skillLevel: null,
    alignment: "Neutral",
    cost: 1000000,
    description:
      "Kind hearted and loyal, Enrico can do a lot of handiwork for relatively cheap. He doesn't ask many questions either, he just loves doing his job.",
    specialty: "Engineer",
    equipment: null,
    image: "Images/Crew/enrico-indotort-midjourney.webp",
  },
  {
    title: "Derek Windtalker",
    skillLevel: 5,
    alignment: "Neutral",
    cost: 2000000,
    description:
      "Derek is from a very rare line mechanics. He claims his people were one with nature; he believes that he is one with metal, wires, and static.",
    specialty: "Engineer",
    equipment: null,
    image: "Images/Crew/dhiseveled-indotort-midjourney.webp",
  },
  {
    title: "Alena Bach",
    skillLevel: null,
    alignment: "Neutral",
    cost: 2000000,
    description:
      "Alena was an exceptional inventor from when she was child. She just started her career in starship mechanics, and would like to impress you with her work.",
    specialty: "Engineer",
    equipment: null,
    image: "Images/Crew/kindeng-indotort-midjourney.webp",
  },
  {
    title: "Malcolm Red",
    skillLevel: 7,
    alignment: "Neutral",
    cost: 2000000,
    description:
      "Malcolm blames exploding ships, bandit raids and bounty hunters as to why he has been barely able to actually do his job. Skilled with a crowbar.",
    specialty: "Engineer",
    equipment: null,
    image: "Images/Crew/trauma-indotort-midjourney.webp",
  },
  {
    title: "Adan Cervantes",
    skillLevel: null,
    alignment: "Neutral",
    cost: 3000000,
    description:
      "Terrible radiation burns cover his skin, so Adan relies on a life-support suit for his survival. That being said, he's highly intelligent and insightful.",
    specialty: "Nuclear",
    equipment: null,
    image: "Images/Crew/radiationburn-indotort-midjourney.webp",
  },
  {
    title: "Trainwreck",
    skillLevel: 7,
    alignment: "Red Daggers",
    cost: 3000000,
    description:
      'Trying to predict the future in front of a fortune teller? Yes I am!',
    specialty: "Engineer",
    equipment: 3,
    image: "Images/Crew/mavdol-疾速 k-artstation.webp",
  },
  {
    title: 'Trisha "Props" Lim',
    skillLevel: 8,
    alignment: "Neutral",
    cost: 3000000,
    description:
      "Props is a hobbyist mechanic and loves to tinker. As a kid, she loved gears and wires over dolls. She also has a very active and bubbly personality.",
    specialty: "Mechanic",
    equipment: null,
    image: "Images/Crew/engineer-indotort-civitai.webp",
  },
  {
    title: "Troy Hall",
    skillLevel: 7,
    alignment: "Neutral",
    cost: 3000000,
    description:
      "With a love for working with machines, Troy could spend many hours inside a workshop. His fire rings can be put to good use",
    specialty: "Engineer",
    equipment: null,
    image: "Images/Crew/k-phoenix-疾速 k-artstation.webp",
  },
  {
    title: "Cindy Kayoko",
    skillLevel: null,
    alignment: "Red Daggers",
    cost: 4000000,
    description:
      "Popular among the Red Daggers, Cindy has worked with an immeasurable amount of questionable machinery. She's not much for politics.",
    specialty: "Engineer",
    equipment: null,
    image: "Images/Crew/liyihao1999-civitai.webp",
  },
  {
    title: "Amy McCartney",
    skillLevel: null,
    alignment: "Federation",
    cost: 4000000,
    description:
      "While Amy is a revered scientist, she's also graceful and likes to sing as a hobby. While she's a little shy, she would love it if you had a tavern.",
    specialty: "Scientist",
    equipment: null,
    image: "Images/Crew/IsekaiLanayaya2-civitai.webp",
  },
  {
    title: "Roxanne Gilliam",
    skillLevel: 4,
    alignment: "Talons",
    cost: 4000000,
    description:
      "Roxanne led the forefront of nuclear research in Talon labs, and has contributed highly to the advancement of anti-matter technology.",
    specialty: "Nuclear",
    equipment: 5,
    image: "Images/Crew/thousandsons-velvets-civitai.webp",
  },
  {
    title: "Mereille Fairley",
    skillLevel: 7,
    alignment: "Federation",
    cost: 4000000,
    description:
      "Equip a geek with some of the Federation's best gadgets, and you get Mireille. She seems to have a device for almost any situation.",
    specialty: "Gadgeteer",
    equipment: 8,
    image: "Images/Crew/jin-kwang-park-4-1-low.webp",
  },
  {
    title: "Miguel Foster",
    skillLevel: 8,
    alignment: "Neutral",
    cost: 5000000,
    description: "Studied under big titles, offers skills for a challenge.",
    specialty: "Engineer",
    equipment: 4,
    image: "Images/Crew/sova-疾速 k-artstaion.webp",
  },
  {
    title: "Reid Enos",
    skillLevel: 9,
    alignment: "Neutral",
    cost: 6000000,
    description: "Alcoholic scientist, knows lots about nuclear tech.",
    specialty: "Nuclear",
    equipment: 9,
    image: "Images/Crew/tonystark--疾速 k-artstation.webp",
  },
  // --- doctors ---
  {
    title: "Kelly Moss",
    skillLevel: null,
    alignment: "Neutral",
    cost: 0,
    description:
      "Kelly was part of a volunteer program to aid the unfortunate in poverty-stricken planets. Cannot be alone in an advanced infirmary.",
    specialty: "Medic",
    equipment: null,
    image: "Images/Crew/corporat4-civitai.webp",
  },
  {
    title: "Bethany Parks",
    skillLevel: 5,
    alignment: "Federation",
    cost: 1000000,
    description:
      "Straight out of medical school, Bethany seeks to get field experience. She would like nothing more than to be a space doctor. Loves cats.",
    specialty: "Medic",
    equipment: null,
    image: "Images/Crew/KandooAI-civitai.webp",
  },
  {
    title: "Ignacio Lopez",
    skillLevel: 8,
    alignment: "Neutral",
    cost: 2000000,
    description:
      "Ignacio cares for nothing more than to study his medical books, and as long as you give him a workplace, he will be a competent medic.",
    specialty: "Medic",
    equipment: 8,
    image: "Images/Crew/AIDigitalMediaAgency-civitai.webp",
  },
  {
    title: "Melisa Asli Yazici",
    skillLevel: 6,
    alignment: "Neutral",
    cost: 4000000,
    description: "Former merc medic, used to stress of high demand.",
    specialty: "Medic",
    equipment: 6,
    image: "Images/Crew/fenurse-indotort-midjourney.webp",
  },
  {
    title: "Lupe",
    skillLevel: 7,
    alignment: "Red Daggers",
    cost: 4000000,
    description:
      "He's technically a doctor... just don't expect him to be very conventional. He's notorious among the pirates as a miracle worker, however.",
    specialty: "Witch Doctor",
    equipment: 3,
    image: "Images/Crew/joestar--疾速 k-artstation.webp",
  },
  {
    title: "Devon Trice",
    skillLevel: 8,
    alignment: "Blackhawk Elite",
    cost: 5000000,
    description:
      "Stalwart Blackhawk, favors less violent life, skilled in combat.",
    specialty: "Medic",
    equipment: 4,
    image: "Images/Crew/dash--疾速 k-artstation.webp",
  },
  {
    title: "Lyra Miralda",
    skillLevel: null,
    alignment: "Neutral",
    cost: 7000000,
    description:
      "Young, in medical textbooks, quick, efficient, a little awkward.",
    specialty: "Medic",
    equipment: null,
    image: "Images/Crew/max-frorer-dhaliafinal.webp",
  },
  // --- Ship gunners ---
  {
    title: "Brian Richardson",
    skillLevel: null,
    alignment: "Neutral",
    cost: 1000000,
    description:
      "Brian knows everything about ship weapons. While still a student, he'd drop his studies in a heart beat just to be a ship gunner.",
    specialty: "Ship Gunner",
    equipment: null,
    image: "Images/Crew/k-00k-sova-疾速 k-artstation.webp",
  },
  {
    title: "Seer",
    skillLevel: null,
    alignment: "Red Daggers",
    cost: 1000000,
    description:
      "A bad history of theft, murder, and drug addiction, Seer is the prime example of a pirate. Even the Red Daggers see him as unsavoury.",
    specialty: "Ship Gunner",
    equipment: null,
    image: "Images/Crew/male-pirate-indotort-midjourney.webp",
  },
  {
    title: "Elizabeth Tyler",
    skillLevel: null,
    alignment: "Federation",
    cost: 2000000,
    description: "Part of rare Fed patrols, met action but inexperienced.",
    specialty: "Ship Gunner",
    equipment: null,
    image: "Images/Crew/reijlita2-civitai.webp",
  },
  {
    title: "Alton Daniel",
    skillLevel: 3,
    alignment: "Neutral",
    cost: 2000000,
    description:
      "A man who comes from some backwater planet and somehow happens to be skilled in the highly stressful and violent art of ship gunning.",
    specialty: "Ship Gunner",
    equipment: 3,
    image: "Images/Crew/k-lu-01-疾速 k-artstation.webp",
  },
  {
    title: "John Pope",
    skillLevel: 4,
    alignment: "Neutral",
    cost: 3000000,
    description: "Former merchant, quick aim from bandit attacks.",
    specialty: "Ship Gunner",
    equipment: null,
    image: "Images/Crew/dkok-blackredrose-civitai.webp",
  },
  {
    title: "Theresa Herder",
    skillLevel: null,
    alignment: "Blackhawk Elite",
    cost: 3000000,
    description:
      "Former Fed gunner, Blackhawk Elite, disciplined but laid-back off work.",
    specialty: "Ship Gunner",
    equipment: null,
    image: "Images/Crew/IsekaiLanayaya4-civitai.webp",
  },
  {
    title: "Vis'yeth",
    skillLevel: 5,
    alignment: "Luos Syndicate",
    cost: 4000000,
    description:
      "Mysterious, took down three cruisers himself in Haven defence.",
    specialty: "Ship Gunner",
    equipment: null,
    image: "Images/Crew/guy-vuxyjeke-civitai.webp",
  },
  {
    title: 'Clara "Sun" Howell',
    skillLevel: 8,
    alignment: "Neutral",
    cost: 4000000,
    description: "Fiery and passionate, fun to tease about being a ginger.",
    specialty: "Ship Gunner",
    equipment: null,
    image: "Images/Crew/corporat5-civitai.webp",
  },
  {
    title: "Faith Nichols",
    skillLevel: null,
    alignment: "Federation",
    cost: 4000000,
    description: "From Fed SOF, high-tech equipment, very innocent.",
    specialty: "Ship Gunner",
    equipment: null,
    image: "Images/Crew/we11-civitai.webp",
  },
  {
    title: "Comet",
    skillLevel: 9,
    alignment: "Neutral",
    cost: "Special cost",
    description:
      "Her body seems to mingle with energy sources whenever she's near them, almost as if it courses through her veins...",
    specialty: "Ship Gunner",
    equipment: null,
    image: "Images/Crew/sorcerer-crew-midjourney.webp",
  },
  {
    title: "Viktor",
    skillLevel: 8,
    alignment: "Neutral",
    cost: 5000000,
    description:
      "He is very down to earth and simple (in the sense of being a professional ship gunner). He's reliable, and everybody just calls him Viktor.",
    specialty: "Ship Gunner",
    equipment: null,
    image: "Images/Crew/bloodangelsgunner-velvets-civitai.webp",
  },
  {
    title: 'Tavia "Echo" Tsun',
    skillLevel: 8,
    alignment: "Talons",
    cost: 5000000,
    description:
      "Echo is of a rare breed from the Talons who offers up her skills for hire. She looks intimidating, but she's actually pretty down-to-earth... just don't call her Tavi.",
    specialty: "Ship Gunner",
    equipment: null,
    image: "Images/Crew/awegirl-reijlita-civitai (1).webp",
  },
  {
    title: "Lt. Bill Smith",
    skillLevel: 8,
    alignment: "Federation",
    cost: 5000000,
    description:
      "Don't let his boring name fool you-Bill has a track record for being a veteran gunner in the Federation Navy. You can rely on him to hit hard and ruthlessly.",
    specialty: "Ship Gunner",
    equipment: null,
    image: "Images/Crew/baldalphaleg-velvets-civitai.webp",
  },
  {
    title: "Amanda Lynch",
    skillLevel: null,
    alignment: "Neutral",
    cost: 6000000,
    description:
      "She's fast, strong-willed and packs a punch, Amanda has never lost in a fleet fight. Her efforts have defended industrial from bandit incursions.",
    specialty: "Ship Gunner",
    equipment: null,
    image: "Images/Crew/jinx-schmede-civitai.webp",
  },
  // --- combat & Security ---
  {
    title: "Owen Baker",
    skillLevel: 8,
    alignment: "Neutral",
    cost: 1000000,
    description:
      "Owen's home world was under constant threat from bandits, and he was part of the planet's resistance force that drove them out for good.",
    specialty: "Guerilla Warfare",
    equipment: 4,
    image: "Images/Crew/takeshiobata3-Nixst3r-civitai.webp",
  },
  {
    title: "Sasha Baker",
    skillLevel: 7,
    alignment: "Neutral",
    cost: 1000000,
    description:
      "The younger sister of Owen, Sasha, too, helped drive out the bandits from her homeworld. She's a crack shot with her rifle, and has too many kill notches.",
    specialty: "Sniping",
    equipment: 7,
    image: "Images/Crew/fepirate1-indotort-midjourney.webp",
  },
  {
    title: "Myrie Shaffer",
    skillLevel: 6,
    alignment: "Red Daggers",
    cost: 2000000,
    description:
      "Myrie worked for a notorious pirate gang that ran the black market in nearly a fifth of the galaxy. When she's present, a deal will go her way.",
    specialty: "Sniping",
    equipment: 5,
    image: "Images/Crew/fepirate2-indotort-midjourney.webp",
  },
  {
    title: "Pierre Mikisugi",
    skillLevel: 4,
    alignment: "Neutral",
    cost: 2000000,
    description:
      "Good cops usually come with a decent set of skills, and Pierre is no exception. He's been a part of plenty of high-stake raids on criminal warehouses.",
    specialty: "Ship Security",
    equipment: 8,
    image: "Images/Crew/soldierboy1-indotort-civitai.webp",
  },
  {
    title: "Sophie Haynes",
    skillLevel: 6,
    alignment: "Federation",
    cost: 2000000,
    description:
      "A good friend of Faith Nichols, Sophie came from the same detachment. She's quick and very witty, and has a sixth sense for no-good intentions.",
    specialty: "Covert Ops",
    equipment: 5,
    image: "Images/Crew/stu42-civitai.webp",
  },
  {
    title: "Grzegorz Grzegrzółka",
    skillLevel: null,
    alignment: "Neutral",
    cost: 2000000,
    description:
      "Always seen working together with Pierre, Gregorz is an ex-cop working to pay for his little sister's education. He often does things his own way.",
    specialty: "Ship Security",
    equipment: null,
    image: "Images/Crew/robocop-indotort-midjourney.webp",
  },
  {
    title: "Ley'ra Laur",
    skillLevel: 8,
    alignment: "Luos Syndicate",
    cost: 3000000,
    description:
      "A soldier from the Outer Ring. Ley'ra has nerves of steel, always taking point. She lost her high-tech Erinyes armour from the war. Out of work, she's... shy.",
    specialty: "Point Position",
    equipment: 6,
    image: "Images/Crew/lou-ll-asuka-079-2.webp",
  },
  {
    title: 'Dani "Cuts" Laine',
    skillLevel: null,
    alignment: "Blackhawk Elite",
    cost: 3000000,
    description:
      "Aggressive and blunt, Dani makes a natural, valiant fireteam leader. She helped drive crime rates down hard in 3 star systems.",
    specialty: "Long-range",
    equipment: 6,
    image: "Images/Crew/eagelaxis-civitai.webp",
  },
  {
    title: "Ward Baker",
    skillLevel: 6,
    alignment: "Neutral",
    cost: 3000000,
    description:
      "Ward joined a small local security force as a doss to finish writing his book, but got conscripted for combat and shipped out to the front lines.",
    specialty: "Sentry",
    equipment: 4,
    image: "Images/Crew/whimsicalboy-NXT3R2point1-civitai.webp",
  },
  {
    title: "Sgt. Raul Miller",
    skillLevel: 8,
    alignment: "Federation",
    cost: 3000000,
    description:
      "Raul was stationed on an ice planet for nearly a decade. He's dealt with a lot of pirate and cartel activity, and can navigate across many kinds of terrain.",
    specialty: "Front-line Assault",
    equipment: 5,
    image: "Images/Crew/dkok-cowardly-civitai.webp",
  },
  {
    title: 'Erik "Sooter" Burke',
    skillLevel: 5,
    alignment: "Red Daggers",
    cost: 3000000,
    description:
      "He's not very intelligent in other fields, but give him a weapon and he will make a great rank-and-file pirate. Just don't make him angry.",
    specialty: "Front-line Assault",
    equipment: 6,
    image: "Images/Crew/malepirate2-indotort-midjourney.webp",
  },
  {
    title: "Vikram Solar",
    skillLevel: 6,
    alignment: "Neutral",
    cost: 4000000,
    description:
      "He has a penchant for laser based weapons and a refusal to use conventional ammunition because it's \"messy\". He's a bit of a neat freak that way.",
    specialty: "Long-range",
    equipment: 8,
    image: "Images/Crew/k-vishnu-shuiyin疾速 k-artstation.webp",
  },
  {
    title: "Darrel Wallace",
    skillLevel: null,
    alignment: "Blackhawk Elite",
    cost: 4000000,
    description:
      "Darrel has flown in many fleets, making sure that on-ship security is as good as it can be. The Blackhawks are tough, and Darrel mirrors that to a tee.",
    specialty: "Sentry",
    equipment: null,
    image: "Images/Crew/exoboy-archangel_ai-civitai.webp",
  },
  {
    title: "Rooks King",
    skillLevel: null,
    alignment: "Gazers",
    cost: 5000000,
    description:
      "Rooks is a skilled Gazer operator, but can be found hanging around Dustkeepers often. His comrades learned to ignore his disappearances.",
    specialty: "Guerilla Warfare",
    equipment: 5,
    image: "Images/Crew/johnson-ting-destiny-publishing-warlock.webp",
  },
  {
    title: "Livia Amaruq",
    skillLevel: 8,
    alignment: "Federation",
    cost: 5000000,
    description:
      "An ex-operative from a one of the Federation's top SOF groups, Livia worked on the same ice planet Sgt. Raul worked at. She's as deadly as she looks.",
    specialty: "Hand-to-hand",
    equipment: 10,
    image: "Images/Crew/soldiergirl2-indotort-civitai.webp",
  },
  {
    title: "Scot Shephard",
    skillLevel: null,
    alignment: "Neutral",
    cost: 5000000,
    description: "SWAT in a big city, seen the worst of humanity.",
    specialty: "Storming",
    equipment: 8,
    image: "Images/Crew/exosoldier-ruanyi-civitai.webp",
  },
  {
    title: "Alessia",
    skillLevel: 8,
    alignment: "Talons",
    cost: 5000000,
    description:
      "Hot-headed, Alessia wants nothing more than to strangle her brother, Ricce, to death. She won't say much about it, but you best not get in her way.",
    specialty: "Long-ranged",
    equipment: 6,
    image: "Images/Crew/detective-we11-civitai.webp",
  },
  {
    title: "Ricce",
    skillLevel: 6,
    alignment: "Federation",
    cost: 5000000,
    description:
      "A stalwart soldier in high tech power armour, Ricce is a force to be reckoned with on the battlefield. When asked about his sister Alessia, he'll remain silent.",
    specialty: "Front-line Assault",
    equipment: null,
    image: "Images/Crew/mak-oosayam-civitai.webp",
  },
  {
    title: "Arabelle Meyer",
    skillLevel: null,
    alignment: "Neutral",
    cost: 5000000,
    description:
      "It takes discipline, patience and cunning to be a professional assassin, and Arabelle has all of them. She's exceptionally good at hiding out of sight.",
    specialty: "Sniping",
    equipment: 9,
    image: "Images/Crew/jinyi-zhu-ruler-adjust2.webp",
  },
  {
    title: "Marcelo Lee",
    skillLevel: 8,
    alignment: "Talons",
    cost: 6000000,
    description:
      "Talons up for hire are very rare, and Marcelo is one of the few. He is equipped with lots of nifty gadgets, and has experience in running solo missions.",
    specialty: "Guerilla Warfare",
    equipment: 7,
    image: "Images/Crew/johnson-ting-destiny-publishing-voidarmor-hunter.webp",
  },
  {
    title: "Lt. Jenny Larue",
    skillLevel: 8,
    alignment: "Federation",
    cost: 6000000,
    description:
      'A top tier officer in the Federation SOF, Jen commands with a valiant heart, and is known for her "strict kindness." Often finds herself working under Tera.',
    specialty: "Point Position",
    equipment: 8,
    image: "Images/Crew/Maggs-civitai.webp",
  },
  {
    title: "David 'Dado' Elazar ",
    skillLevel: 8,
    alignment: "Blackhawk Elite",
    cost: 6000000,
    description:
      "One of the iconic Blackhawk Elite shock troopers, Dado leads the charge into all of his conflicts with an unstoppable momentum.",
    specialty: "Storming (Shock Trooper)",
    equipment: 10,
    image: "Images/Crew/Untitled-lykon-civitai.webp",
  },
  {
    title: "Nettie",
    image: "Images/Crew/bohemian-aaz777-civitai.webp",
    cost: 0,
    specialty: "Survival",
    equipment: 2,
    skillLevel: 1,
    alignment: "Neutral",
    description:
      "A young girl found wandering the streets of an abandoned city in Faraday. She claims to not know her title nor her family. She survived for years, alone.",
  },
  {
    title: "Kristina Hines",
    image: "Images/Crew/batonlady-Nixst3r-civitai.webp",
    cost: 1000000,
    specialty: "Long-range",
    equipment: 3,
    skillLevel: 4,
    alignment: "Red Dagger Pirates",
    description:
      "A new recruit in the Wolf Hunt gang who has shown promise in her marksmanship. She's becoming a quick favourite to Yula, the gang leader.",
  },
  {
    title: "Robby Delgarv",
    image: "Images/Crew/elfprince-jacob_ailoveu-civitai.webp",
    cost: 2000000,
    specialty: "Survival",
    equipment: 3,
    skillLevel: 5,
    alignment: "Neutral",
    description:
      "A Dustkeeper who likes to keep his gear modest. Has extensive knowledge on survival skills in harsh environments. Always seems to know what he's doing.",
  },
  {
    title: "Maxim Cyril",
    image: "Images/Crew/link-lykon-civitai.webp",
    cost: 2000000,
    specialty: "Medic",
    equipment: 6,
    skillLevel: 3,
    alignment: "Federation",
    description:
      "A field medic fresh out of med school, looking to bolster his battlefield experience. He's self-funded his own equipment, which is fairly expensive.",
  },
  {
    title: "Francesca Osvalt",
    image: "Images/Crew/eagleowl-jinkwangpark-artstation.webp",
    cost: 2000000,
    specialty: "Sniping",
    equipment: 5,
    skillLevel: 5,
    alignment: "Blackhawk Elite",
    description:
      "A Seraph employee who has worked on Fenris for several years. Her adventurous attitude eggs her to do something else.",
  },
  {
    title: "Moya LaCroix",
    image: "Images/Crew/rafael-amarante-3new223812.webp",
    cost: 3000000,
    specialty: "Front-line Assault",
    equipment: 6,
    skillLevel: 5,
    alignment: "Neutral",
    description:
      "Moya is a dedicated lo Security veteran who's both a top fighter and is very knowledgable about his high-tech gear. He searches for his long lost twin, Faulka.",
  },
  {
    title: "Faulka LaCroix",
    image: "Images/Crew/t-j-geisen-sniper-render-cloak-artstation (1).webp",
    cost: 3000000,
    specialty: "Sniping",
    equipment: 5,
    skillLevel: 6,
    alignment: "Neutral",
    description:
      "Faulka was an ex-lo Security operant, but has left for unknown reasons. Since then, she joined the Dustkeepers on Faraday as a skilled marksman.",
  },
  {
    title: "'Ms. Green'", //Cammy
    image: "Images/Crew/cammy-XUERYCJ-civitai.webp",
    cost: 3000000,
    specialty: "Guerilla Warfare",
    equipment: 5,
    skillLevel: 7,
    alignment: "Gazers",
    description:
      "Strong-willed and brutal, unlike typical Gazers. She usually relays intel and orders to her comrades, but is known to take matters into her own hands.",
  },
  {
    title: "Sya'ra Degala", //HarleyQuinn
    image: "Images/Crew/harley-indotort-midjourney.webp",
    cost: 3000000,
    specialty: "Demolition",
    equipment: 6,
    skillLevel: 6,
    alignment: "Luos Syndicate",
    description:
      "Called the Mad Roller friends, Sya'ra has a love for weapons. She'll follow you around if you show any interest in weaponry. Likes to wear roller blades.",
  },
  {
    title: "Jerilyn Hyata",
    image: "Images/Crew/janku-yoruuu-civitai.webp",
    cost: 5000000,
    specialty: "Infiltration",
    equipment: 6,
    skillLevel: 8,
    alignment: "Talons",
    description:
      "A Talon at the top of her class. She's snuck through some of the most complex security systems in the galaxy, most of them owned by the Blackhawk Elite.",
  },
  {
    title: "Connell Xuan",
    image: "Images/Crew/jinyi-zhu-9-22.webp",
    cost: 6000000,
    specialty: "Front-line Assault",
    equipment: 8,
    skillLevel: 7,
    alignment: "Neutral",
    description:
      "It's thanks to men like Connell why the Dustkeeper base on Faraday has not been breached by the mutants. His valiant battlecry rallies his comrades.",
  },
  {
    title: "Maren Krause",
    image: "Images/Crew/whitewolves-velvets-civitai.webp",
    cost: 7000000,
    specialty: "Sniping",
    equipment: 7,
    skillLevel: 9,
    alignment: "Federation",
    description:
      "Seeing Maren on the opposite end of your barrel means it's already too late. She also has a dire wolf protecting her in melee.",
  },
  {
    title: "Ley'ra Laur",
    image: "Images/Crew/park-jin-kwang-3-5.webp",
    cost: 3000000,
    specialty: "Point Position",
    equipment: 9,
    skillLevel: 8,
    alignment: "Luos Syndicate",
    description:
      "A soldier from the Outer Ring. Ley'ra has nerves of steel, always taking point. She lost her high-tech Erinyes armour from the war. Out of work, she's... shy.",
  },
  {
    title: "Lex StPierre",
    image: "Images/Crew/park-jin-kwang-6 (1).webp",
    cost: 7000000,
    specialty: "Sentry?",
    equipment: 9,
    skillLevel: 8,
    alignment: "Neutral",
    description:
      "It bolsters some of the greatest fighting skills and equipment in the galaxy... but it tends to not move until it is really needed.",
  },
  {
    title: "My'hra Jos",
    skillLevel: 9,
    alignment: "Luos Syndicate",
    cost: 7000000,
    description:
      "My'hra was a skilled ground officer in the small Outer Ring PMC, the Cerberus Legion. She helped defend the Abyss system from the Federation onslaught.",
    specialty: "Infiltration",
    equipment: 8,
    image: "Images/Crew/ryouta-otsuka-cyborg-body-1.webp",
  },
  {
    title: "Patch Newton",
    skillLevel: null,
    alignment: "Neutral",
    cost: 7000000,
    description:
      "A notorious assassin who's very deadly behind a rifle. His unique hardware was built by himself; It's often said that he's \"one with his armour.\"",
    specialty: "Sniping (Assassin)",
    equipment: null,
    image: "Images/Crew/valentine-sorokin-em-rifle-14-1.webp",
  },
  {
    title: "Locust",
    skillLevel: 10,
    alignment: "Neutral",
    cost: 14000000,
    description:
      "\"Rider of Famine.\" Locust can 'melt' armies with his eye. The highly classified Apocalypse program produced four of the greatest soldiers in the galaxy.",
    specialty: "Hand-to-hand (Fists)",
    equipment: 10,
    image: "Images/Crew/matthew-hjellen-lowpoly-torso-color-turn-01.webp",
  },
  {
    title: "Plague",
    skillLevel: 10,
    alignment: "Neutral",
    cost: 15000000,
    description:
      '"Rider of Pestilence." Plague has the toughest armour of the four, and is also the strongest in brute force. The four Riders have since separated.',
    specialty: "Front-line assault (Brute Force)",
    equipment: 10,
    image:
      "Images/Crew/l-j-koh-mortarion-commission-final-for-portfolios (1).webp",
  },
  {
    title: "Archangel",
    skillLevel: 10,
    alignment: "Federation",
    cost: 17000000,
    description:
      '"Rider of War." Archangel wields a one-of-a-kind, hand-held nuclear Saber, capable of leveling city blocks. She is still loyal to the Federation.',
    specialty: "Mass Destruction",
    equipment: 10,
    image: "Images/Crew/l-j-koh-sanguinius-new.webp",
  },
  {
    title: "Styx",
    skillLevel: 10,
    alignment: "Herself",
    cost: 18000000,
    description:
      '"Rider of Death." No one knows why, but Styx holds a terrible grudge against the Federation after her defection. She still respects her siblings, though.',
    specialty: "Infiltration",
    equipment: 10,
    image: "Images/Crew/reptileentity-diegocr-civitai.webp",
  },
  {
    title: "Begger",
    image: "Images/Crew/l-j-koh-angron-throne-1-edited-2022.webp",
    cost: 20000000,
    specialty: "Heavy weapons",
    equipment: 10,
    skillLevel: 9,
    alignment: "Himself",
    description:
      "Some say he's a fifth Apoc, but he openly hates them with a passion. No one knows where he came from, only that he's bloodthirsty and lives for conflict.",
  },
  // --- CYBER SECURITY OFFICERS ---
  {
    title: "Perry West",
    skillLevel: 5,
    alignment: "Neutral",
    cost: 3000000,
    description:
      "Hailing from a large company, Perry is perfectly capable at handling most electronic warfare. Your ship should be well defended with him.",
    specialty: "Electronic Warfare",
    equipment: 4,
    image: "Images/Crew/boredkid-indotort-civitai.webp",
  },
  {
    title: "Erica Chung",
    skillLevel: 6,
    alignment: "Neutral",
    cost: 4000000,
    description:
      "After dropping out of university, Erica cut ties to everyone, stopped drinking replicated water, and now wants to join your ship crew.",
    specialty: "Cyber Security",
    equipment: 3,
    image: "Images/Crew/asianwoman-indotort-midjourney.webp",
  },
  {
    title: "Damian Galt",
    skillLevel: 8,
    alignment: "Red Daggers",
    cost: 4000000,
    description:
      "This man brings an excellent service record and forty exobytes of illegally-obtained porn. Will awkwardly hit on female crew. Constantly. Over the PA.",
    specialty: "Cyber Security",
    equipment: 1,
    image: "Images/Crew/Fat_Bastard-villainswiki.webp",
  },
  {
    title: "Slash Singer",
    skillLevel: 8,
    alignment: "Neutral",
    cost: 4000000,
    description:
      "An ex-military intelligence officer who can go head to head with some of the most notorious hackers in the galaxy in cyberwarfare.",
    specialty: "Programmer (Security Bypass)",
    equipment: 5,
    image: "Images/Crew/cyberangel-vadim-sadovski-artstation.webp",
  },
  {
    title: "Veslav Smertodov",
    skillLevel: 9,
    alignment: "Talons",
    cost: 6000000,
    description:
      "A well-known Talon hacker who's an expert with Al and is extremely good at multitasking. She's often encountered Veslav in fierce cyber battles.",
    specialty: "Hacker (AI Expert)",
    equipment: 8,
    image: "Images/Crew/sergei kamennoy-Nixst3r-civitai.webp",
  },
  {
    title: "Arachne",
    skillLevel: 9,
    alignment: "Federation",
    cost: 6000000,
    description:
      "Ex-military intelligence officer, can go head-to-head with notorious hackers in cyber warfare.",
    specialty: "Cyber warfare",
    equipment: 9,
    image: "Images/Crew/ryouta-otsuka-wf01.webp",
  },
  {
    title: "Uplink",
    skillLevel: 10,
    alignment: "Neutral",
    cost: 12000000,
    description:
      "Installing her isn't cheap, but she's one of the very few Al androids with sapience, Uplink wants nothing more than more access to information. All of it.",
    specialty: "AI Android (Information Access)",
    equipment: 10,
    image: "Images/Crew/mexicangirl-indotort-civitai.webp",
  },
  // --- scientistS ---
  {
    title: "Lauren L. Lazuli",
    skillLevel: 4,
    alignment: "Neutral",
    cost: 0,
    description:
      "Your crew found her in your lab after leaving a port once, caffeine packets everywhere while she was feverishly working on a thesis. She sleeps in the lab.",
    specialty: "Scientist",
    equipment: null,
    image: "Images/Crew/agnes-kadokura(sushiu max)-gelbooru.webp",
  },
  {
    title: "Curt Robertson",
    skillLevel: 6,
    alignment: "Federation",
    cost: 1000000,
    description:
      "Curt believes that you should never abandon your own body. He's a specialist in human biology, and is very tall at the result of his biological research.",
    specialty: "Human Biology",
    equipment: null,
    image: "Images/Crew/ben-erdt-ally-all.webp",
  },
  {
    title: "Emily Park",
    skillLevel: 5,
    alignment: "Neutral",
    cost: 1000000,
    description:
      "Morally opposed to combat-purpose vessels, Dr. Newton is an expert at xenobiology and terraforming. She's a bit eccentric, though.",
    specialty: "Xenobiology, Terraforming",
    equipment: null,
    image: "Images/Crew/reijlita4-civitai.webp",
  },
  {
    title: "Sarah Escher",
    skillLevel: 6,
    alignment: "Red Daggers",
    cost: 2000000,
    description:
      "Incredibly intelligent, but with a very short attention span. Her frequent experiments with mana energy has earned her unnerving red eyes.",
    specialty: "Mana Energy Experiments",
    equipment: null,
    image: "Images/Crew/goth nun by tentacles-riders.webp",
  },
  {
    title: "Shinichi Yagazen",
    skillLevel: 6,
    alignment: "Neutral",
    cost: 3000000,
    description:
      "With numerous years of study, his research has made an increase in the agricultural production of the galaxy by half a percent. Likes candied fish.",
    specialty: "Agriculture",
    equipment: 6,
    image: "Images/Crew/okabe-epkbaybay-gelbooru.webp",
  },
  {
    title: "Isaac J. Bidlack",
    skillLevel: 7,
    alignment: "Federation",
    cost: 3000000,
    description:
      "Expert in biology, bioengineering, chemistry and biological warfare. Wanted for morally ambiguous experiments and creation of biological weapons.",
    specialty: "Biology, Bioengineering, Chemistry, Biological Warfare",
    equipment: 7,
    image: "Images/Crew/jakub-bazyluk-crafter-action-jb.webp",
  },
  {
    title: "Wilhelm von Welch",
    skillLevel: 8,
    alignment: "Neutral",
    cost: 5000000,
    description:
      "Both brilliant and a mad man at the same time, Wilhelm is a strict scientist who has an obsession with the pursuit of knowledge about the Heralds.",
    specialty: "Heralds Research",
    equipment: null,
    image: "Images/Crew/javier-charro-murray-30-solo.webp",
  },
  // --- production MANAGERS ---
  {
    title: "Sibyl",
    skillLevel: null,
    alignment: "Red Daggers",
    cost: 1000000,
    description:
      "Sibyl has worked in industrial wings for the Red Daggers for over 20 years. He knows lots of tricks and methods on mining and manufacturing.",
    specialty: "Mining, Manufacturing",
    equipment: null,
    image: "Images/Crew/audec-aenaluck-gelbooru.webp",
  },
  {
    title: "Madeline Moran",
    skillLevel: null,
    alignment: "Blackhawk Elite",
    cost: 2000000,
    description:
      "The Blackhawk Elite's might is largely due to their hardware, and with production managers like Madeline, they're set for a long, long time.",
    specialty: "Hardware production",
    equipment: null,
    image: "Images/Crew/female-engineer-indotort-midjourney.webp",
  },
  {
    title: "Skelly",
    skillLevel: 6,
    alignment: "Neutral",
    cost: 2000000,
    description:
      "Skelly will always get the job done, at the cost of your crew's mental health",
    specialty: "Production Management",
    equipment: null,
    image:
      "Images/Crew/thomas-du-crest-theadministrator-frame12-thomasducrest.webp",
  },
  {
    title: "Corrine Peyton",
    skillLevel: null,
    alignment: "Neutral",
    cost: 3000000,
    description:
      "Serious and authoritative in industrial wings, workers obey or face a long, deafening scolding.",
    specialty: "Industrial Management",
    equipment: null,
    image: "Images/Crew/LordTerror-civitai.webp",
  },
  {
    title: "Horatio Piper",
    skillLevel: 7,
    alignment: "Federation",
    cost: 3000000,
    description:
      "Great production manager, excellent track record from Fed industrial systems, promotes efficiency and work ethics.",
    specialty: "Production Management",
    equipment: null,
    image: "Images/Crew/thomas-du-crest-leader-horatio.webp",
  },
  {
    title: "May Padilla",
    skillLevel: 5,
    alignment: "Neutral",
    cost: 4000000,
    description:
      "Hard worker, speeds things up, likes to boast about her strength.",
    specialty: "Production Management",
    equipment: 5,
    image: "Images/Crew/00085-donko2_donq-civitai.webp",
  },
  {
    title: "Michael Danagger",
    skillLevel: 7,
    alignment: "Neutral",
    cost: 6000000,
    description:
      "An extremely successful industrialist, Danagger's company provided fuel for the shipping businesses over a dozen systems.",
    specialty: "Industrialist",
    equipment: 1,
    image: "Images/Crew/dmitry-vishnevsky-44-4-23.webp",
  },
  // --- CHEFS & BARTENDERS ---
  {
    title: "Jorgen Masterson",
    skillLevel: 8,
    alignment: "Neutral",
    cost: 1000000,
    description:
      "A retired mercenary who decided to become a chef. Having served on several prison transports, he is a capable and ingenious cook.",
    specialty: "Chef",
    equipment: 8,
    image: "Images/Crew/gordonramsay-indotort-midjourney.webp",
  },
  {
    title: "Mikka Akimoto",
    skillLevel: 6,
    alignment: "Red Daggers",
    cost: 1000000,
    description:
      "Mikka specializes in Japanese and some other Asian cuisines. Sushi and ramen never went out of fashion after thousands of years.",
    specialty: "Chef (Japanese/Asian Cuisine)",
    equipment: 6,
    image: "Images/Crew/chef-indotort-civitai.webp",
  },
  {
    title: "Patricia Cooper",
    skillLevel: 3,
    alignment: "Neutral",
    cost: 2000000,
    description:
      "Patricia loves to cook, and when she's in a kitchen, she's the one who's in charge. She loves working with European cuisines.",
    specialty: "Chef (European Cuisine)",
    equipment: 3,
    image: "Images/Crew/ratatouie-wikkitikki-civitai.webp",
  },
  {
    title: "Vito Lozano",
    skillLevel: 9,
    alignment: "Neutral",
    cost: 4000000,
    description:
      "Do not disturb; Chef at work. Nobody dares get in Vito's way when he's cooking. His spaghetti is perfection. *Will only use a fancy mess hall",
    specialty: "Chef",
    equipment: 3,
    image: "Images/Crew/Italianchef-indotort-midjourney.webp",
  },
  {
    title: "Laura Sofía Pérez Gómez",
    skillLevel: 4,
    alignment: "Federation",
    cost: 1000000,
    description:
      "Typical bartender, listens to your problems, perfect for standard mixes.",
    specialty: "Bartender",
    equipment: 1,
    image: "Images/Crew/female-chef-indotort-midjourney.webp",
  },
  {
    title: "Carolyn Brooks",
    skillLevel: 5,
    alignment: "Neutral",
    cost: 2000000,
    description:
      "Playful and outgoing, always aiming to earn a smile with every serve. She's a great bartender who loves mixing the fancier drinks.",
    specialty: "Bartender (Fancy Drinks)",
    equipment: 3,
    image: "Images/Crew/blackbartender-indotort-midjourney.webp",
  },
  {
    title: "Hal",
    skillLevel: 10,
    alignment: "Neutral",
    cost: 4000000,
    description:
      "Repentant bio-terrorist, has many stories, might have 'special' mixes that need a lab.",
    specialty: "Bartender",
    equipment: 7,
    image: "Images/Crew/jaime-martinez-fabius-bile-02.webp",
  },
  {
    title: "Yoav Hoze",
    skillLevel: 5,
    alignment: "Heralds",
    cost: 1000000,
    description:
      "Yoav believes that the Apoc are heralds of what's to come, just as the Heralds were. She can do telekinesis and 'miracles'. She believes that you are the strongest Apoc.",
    specialty: "Mage",
    equipment: 1,
    image: "Images/Crew/yoav-hoze-pose2front.webp",
  },
  {
    title: 'Valerius Thorne',
    skillLevel: 8,
    alignment: 'Neutral',
    cost: 3500000,
    description: 'During his research, he stumbled upon a forbidden ritual that allowed him to harness the raw, untamed energy of Mana. The ritual granted him immense power but came at a great cost: the chaotic energies now surge through his veins, manifesting as the shifting, geometric constructs that surround him. He believes that the Apoc are a necessary force to restore the balance disrupted by the Great Conjunction.',
    specialty: 'Mage',
    equipment: 5,
    image: "Images/Crew/wizard-andygl-civitai.webp"
  },

  {
    title: "Lysandra Sol",
    skillLevel: 7,
    alignment: "Heralds",
    cost: 2750000,
    description: "Born as a zealous sun-worshipper, Lysandra is a conduit for concentrated solar energy. She views those who oppose the Apoc as shadows that must be burned away. She can manipulate UV rays and celestial gravity in small scales (good for ship movement)",
    specialty: 'Mage',
    equipment: 5, // Randomized value
    image: "Images/Crew/sunlady-Nixst3r-civitai.webp"
  },
  {
    title: "Ignis Kaelen",
    skillLevel: 9,
    alignment: "Red Dagger Pirates",
    cost: 4500000,
    description: "A lone wolf fueled by rage, Ignis is a cybernetically enhanced pyrokinetic. She believes both the Apoc and the old world's order are corrupt and deserve destruction.",
    specialty: 'Mage',
    equipment: 9, // Randomized value
    image: "Images/Crew/firewizard-indotort-midjourney.webp"
  },
  {
    title: "Seraphina Cryos",
    skillLevel: 10,
    alignment: "Elder",
    cost: 10000000,
    description: "Seraphina is a silent observer and a being of pure thought. She views the Apoc with detached fascination, seeing them as an inevitable, natural progression. Can use ice magic and slow down time by 10%.",
    specialty: 'Mage',
    equipment: 10, // Randomized value
    image: "Images/Crew/icewizard-indotort-midjourney.webp"
  }
];

const archetype = [
  {
    title: "Volunteers",
    image: 'Images/Crew/kpopgroup-nontime-civitai.webp',
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
    image: 'Images/Crew/scoobydoo-indotort-midjourney.webp',
    skillLevel: 5,
    alignment: "Neutral",
    cost: {
      x1: 100000,
      x5: 200000,
      x10: 300000,
      x50: 1000000,
      x100: 2000000,
      x500: 8000000,
    },
    description:
      "Plenty of civilians are looking for legitimate work, and many of them qualify as space-faring crew members.",
  },
  {
    title: "Industry Labourers",
    image: 'Images/Crew/mexican-indotort-midjourney.webp',
    skillLevel: 6,
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
    image: 'Images/Crew/researcher-velvets-civitai.webp',
    skillLevel: 4,
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
    image: "Images/Crew/cyber-samurai-indotort-midjourney.webp",
    skillLevel: 4,
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
    image: 'Images/Crew/explorer-artfullyprompt-civitai.webp',
    skillLevel: 5,
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
    image: 'Images/Crew/medic-indotort-midjourney.webp',
    skillLevel: 6,
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
    image: 'Images/Crew/kan-liu-666k-engineerf.webp',
    skillLevel: 6,
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
    image: 'Images/Crew/park-jin-kwang-2.webp',
    skillLevel: 7,
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
    image: 'Images/Crew/johnson-ting-8.webp',
    skillLevel: 8,
    alignment: "Blackhawk Elite",
    cost: {
      x1: 100000,
      x5: 500000,
      x10: 1000000,
      x50: 5000000,
      x100: 10000000,
      x500: 50000000,
    },
    description:
      "Essentially Blackhawks-in-training, the Seraphs is where they all start. While relatively inexperienced, they show promise.",
  },
  {
    title: "Red Dagger Ninjas",
    image: "Images/Crew/future-akatsuki-indotort-midjourney.webp",
    skillLevel: 8,
    alignment: "Red Daggers",
    cost: {
      x1: 100000,
      x5: 500000,
      x10: 1000000,
      x50: 5000000,
      x100: 10000000,
      x500: 50000000,
    },
    description:
      "Above the average pirate and bandit lies the Red Dagger Ninjas. Their cunning and hardy instincts are exceptional.",
  },
  {
    title: "Navy Soldiers",
    image: 'Images/Crew/troops-shenpeiwu-artstation.jpg',
    skillLevel: 9,
    alignment: "Federation",
    cost: {
      x1: 150000,
      x5: 750000,
      x10: 1500000,
      x50: 7500000,
      x100: 15000000,
      x500: 50000000,
    },
    description:
      "The Federation trains decent and disciplined crew members. They will give to you you are a valiant and capable leader.",
  },
  {
    title: "Core Ring Mercs",
    image: 'Images/Crew/johnson-ting-demo-1-copy.webp',
    skillLevel: 6,
    alignment: "Luos Syndicate",
    cost: {
      x1: 150000,
      x5: 750000,
      x10: 1500000,
      x50: 7500000,
      x100: 15000000,
      x500: 50000000,
    },
    description:
      "Luos Core Ring mercs are both fearsome and sinister, and deathly loyal to those who prove their strength.",
  },
  {
    title: "Dustkeepers",
    image: 'Images/Crew/johnson-ting-buccaneers-wallpaper.webp',
    skillLevel: 7,
    alignment: "Neutral",
    cost: {
      x1: 200000,
      x5: 1000000,
      x10: 2000000,
      x50: 10000000,
      x100: 20000000,
      x500: 100000000,
    },
    description:
      "Highly skilled with a very rich variety of talents, Dustkeepers can make a very capable crew for almost any job.",
  },
  {
    title: "Outer Ring Mercs",
    image: 'Images/Crew/ironsons-velvets-civitai.webp',
    skillLevel: 7,
    alignment: "Luos Syndicate",
    cost: {
      x1: 200000,
      x5: 1000000,
      x10: 2000000,
      x50: 10000000,
      x100: 20000000,
      x500: 100000000,
    },
    description: "Mercenaries from the Luos Outer Ring are fierce and well disciplined, something even the Blackhawks admire and respect.",
  },
  {
    title: "Blackhawk Elites",
    image: 'Images/Crew/blacktemplars-velvets-civitai.webp',
    skillLevel: 8,
    alignment: "Blackhawk Elite",
    cost: {
      x1: 250000,
      x5: 1250000,
      x10: 2500000,
      x50: 12500000,
      x100: 25000000,
      x500: 125000000,
    },
    description: "With a will as hard as steel, the Blackhawks don't often boast about their profession, even if they really are that good.",
  },
  {
    title: "Talons",
    image: 'Images/Crew/nightlords-velvets-civitai.webp',
    skillLevel: 8,
    alignment: "Talons",
    cost: {
      x1: 250000,
      x5: 1250000,
      x10: 2500000,
      x50: 12500000,
      x100: 25000000,
      x500: 125000000,
    },
    description: "A crew of Talons will make any pilot think twice before messing with you. While a little cocky, their performance shows.",
  },
  {
    title: "Navy Operators",
    image: 'Images/Crew/3dma-frogman-re-03.webp',
    skillLevel: 8,
    alignment: "Federation",
    cost: {
      x1: 280000,
      x5: 1400000,
      x10: 2800000,
      x50: 14000000,
      x100: 28000000,
      x500: 140000000,
    },
    description:
      "The Federation has many SOF programs, and they all train very skilled crew members. They follow if you lead them.",
  },
  {
    title: "Gazer Operators",
    image: 'Images/Crew/greyknights-velvets-civitai.webp',
    skillLevel: 7,
    alignment: "Neutral",
    cost: {
      x1: 280000,
      x5: 1400000,
      x10: 2800000,
      x50: 14000000,
      x100: 28000000,
      x500: 140000000,
    },
    description: "Getting a sizeable crew of Gazer operators is not an easy job to do, but they've been known to group when needed.",
  },
  {
    title: "Androids",
    image: 'Images/Crew/abigail-diaz-serafleur-artstation.webp',
    skillLevel: 9,
    alignment: "Neutral",
    cost: {
      x1: 400000,
      x5: 2000000,
      x10: 4000000,
      x50: 20000000,
      x100: 40000000,
      x500: 200000000,
    },
    description: "AI and mechanics have come a long way, and one well-built android can do the average job better than normal crew mates.",
  },
  {
    title: "Controllers",
    image: 'Images/Crew/hooked-candyaddict-civitai.webp',
    skillLevel: 9,
    alignment: "Neutral",
    cost: {
      x1: 1000000,
      x5: 3000000,
      x10: 4000000,
      x50: 10000000,
      x100: 16000000,
      x500: 44000000,
    },
    crewMultiplier: 3,
    description: "These people are able to link up their minds straight to computers. Without the limitations of flesh, their potential is vast.",
  },
];

function addCrewToSection(crewArray, choicePrefix, sectionID, dataType) {
  let targetSection = document.getElementById(sectionID);

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
    if (dataType === "archetype") {
      newDiv.classList.add('archetype');
    }
    else {
      newDiv.classList.add('crew');
    }
    // Ensure unique ID for each choice element, sanitize title for ID
    newDiv.id = item.title;

    const newSpan = document.createElement("span");
    newDiv.appendChild(newSpan);

    // Image element - common to all
    const imgElement = document.createElement("img");
    imgElement.src =
      item.image || "https://placehold.co/100x100/eeeeee/ffffff?text=NoImage";
    imgElement.title = getImgName(item.image);
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
        costPerCrew.innerHTML = `${key}: ${formatterIntl.format(
          item.cost[key]
        )}`;
        newSpan.appendChild(costPerCrew);
      });
    } else {
      const costP = document.createElement("p");
      costP.innerHTML = `Cost: ${formatterIntl.format(item.cost)}`;
      newSpan.appendChild(costP);
    }

    // Specialty
    if (item.specialty !== undefined) {
      const specialtyP = document.createElement("p");
      specialtyP.textContent = `Specialty: ${item.specialty}`;
      newSpan.appendChild(specialtyP);

      switch (item.specialty) {
        case "Pilot":
          // The section for engineers comes after the pilot section.
          targetSection = document.getElementById("title-engineerCrew");
          break;
        case "Ship Gunner":
          // The section for combat crew comes after the gunner section.
          targetSection = document.getElementById("title-combatCrew");
          break;
        case "Engineer":
        case "Mechanic":
        case "Nuclear":
        case "Gadgeteer":
          // The section for doctors comes after the engineer section.
          targetSection = document.getElementById("title-doctorCrew");
          break;
        case "Scientist":
        case "Scientist (Thesis)":
        case "Human Biology":
        case "Xenobiology, Terraforming":
        case "Mana Energy Experiments":
        case "Agriculture":
        case "Biology, Bioengineering, Chemistry, Biological Warfare":
        case "Heralds Research":
          // The section for production comes after the scientist section.
          targetSection = document.getElementById("title-productionCrew");
          break;
        case "Witch Doctor":
        case "Medic":
          // The section for gunners comes after the doctor section.
          targetSection = document.getElementById("title-gunnerCrew");
          break;
        case "Mining, Manufacturing":
        case "Hardware Production":
        case "Production Management":
        case "Industrial Management":
        case "Industrialist":
          // The section for chefs comes after the production section.
          targetSection = document.getElementById("title-chefs");
          break;
        case "Guerilla Warfare":
        case "Sniping":
        case "Ship Security":
        case "Covert Ops":
        case "Point Position":
        case "Long-range":
        case "Front-line Assault":
        case "Long-range (Laser Weapons)":
        case "Sentry":
        case "Hand-to-hand":
        case "Storming":
        case "Sniping (Assassin)":
        case "Storming (Shock Trooper)":
          // The section for cybersec comes after the combat section.
          targetSection = document.getElementById("title-cybersecCrew");
          break;
        case "Electronic Warfare":
        case "Cyber Security":
        case "Programmer (Security Bypass)":
        case "Hacker (AI Expert)":
        case "Cyber warfare":
        case "AI Android (Information Access)":
          // The section for mages comes after the cybersec section.
          targetSection = document.getElementById("title-mageCrew");
          break;
        case "Mage":
          // The section for scientists comes after the mage section.
          targetSection = document.getElementById("title-scientistCrew");
          break;
        case "Chef":
        case "Chef (Japanese/Asian Cuisine)":
        case "Chef (European Cuisine)":
        case "Bartender":
        case "Bartender (Fancy Drinks)":
          targetSection = document.getElementById("endOfCrew");
        case null:
          break;
      }
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
      descriptionP.textContent = `${item.description}`;
      newSpan.appendChild(descriptionP);
    }

    targetSection.before(newDiv); // Append to the target section
  });
}
