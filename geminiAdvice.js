// Assume this player object is defined and updated as in the 'player-object-manipulation' immersive
// For demonstration, let's start with a player who has some credits and the 'wrestling' skill.
const player = {
    credits: 300,
    fleetSize: 2,
    skills: ["wrestling"], // Player has wrestling skill
    assets: [] // New attribute to track assets like MMA gym
};

// Define your choices as an array of objects
const choices = [
    {
        id: "learn-jujitsu",
        title: "Learn Jujitsu",
        description: "Master the art of grappling and close combat.",
        cost: 200,
        prerequisites: [
            { type: "skill", value: "wrestling" } // Requires the 'wrestling' skill
        ],
        consequences: [
            { type: "discount", targetChoiceId: "buy-mma-gym", value: 100 } // Gives a $100 discount on 'buy-mma-gym'
        ],
        playerUpdates: [
            { attribute: "skills", action: "add", value: "jujitsu" }
        ]
    },
    {
        id: "buy-mma-gym",
        title: "Buy MMA Gym",
        description: "Invest in a facility to train your combat skills.",
        baseCost: 1000, // Base cost
        currentCost: 1000, // This will be dynamically updated based on consequences
        prerequisites: [],
        consequences: [],
        playerUpdates: [
            { attribute: "assets", action: "add", value: "mma-gym" }
        ]
    },
    {
        id: "explore-galaxy",
        title: "Explore the Galaxy",
        description: "Embark on a journey into the unknown.",
        cost: 50,
        prerequisites: [
            { type: "fleetSize", value: 1 } // Requires at least 1 ship
        ],
        consequences: [],
        playerUpdates: [
            { attribute: "credits", action: "add", value: 500 } // Gain credits from exploration
        ]
    }
];

// Function to apply discounts to choices
function applyDiscount(targetChoiceId, discountValue) {
    const targetChoice = choices.find(choice => choice.id === targetChoiceId);
    if (targetChoice && targetChoice.baseCost !== undefined) {
        targetChoice.currentCost = Math.max(0, targetChoice.baseCost - discountValue);
        console.log(`Discount applied! '${targetChoice.title}' now costs ${targetChoice.currentCost} credits.`);
    }
}

// Function to check if a player can make a choice
function canMakeChoice(choice) {
    // Check prerequisites
    for (const prereq of choice.prerequisites) {
        if (prereq.type === "skill") {
            if (!player.skills.includes(prereq.value)) {
                console.log(`Cannot make choice '${choice.title}': Requires skill '${prereq.value}'.`);
                return false;
            }
        } else if (prereq.type === "fleetSize") {
            if (player.fleetSize < prereq.value) {
                console.log(`Cannot make choice '${choice.title}': Requires fleet size of at least ${prereq.value}.`);
                return false;
            }
        }
        // Add more prerequisite types as needed (e.g., 'item', 'reputation')
    }

    // Check cost
    const actualCost = choice.currentCost !== undefined ? choice.currentCost : choice.cost;
    if (player.credits < actualCost) {
        console.log(`Cannot make choice '${choice.title}': Not enough credits. Needs ${actualCost}, has ${player.credits}.`);
        return false;
    }

    return true;
}

// Function to execute a choice
function makeChoice(choiceId) {
    const choice = choices.find(c => c.id === choiceId);

    if (!choice) {
        console.log(`Error: Choice with ID '${choiceId}' not found.`);
        return;
    }

    if (!canMakeChoice(choice)) {
        console.log(`Cannot make choice '${choice.title}'. Conditions not met.`);
        return;
    }

    console.log(`\n--- Making Choice: ${choice.title} ---`);

    // Deduct cost
    const actualCost = choice.currentCost !== undefined ? choice.currentCost : choice.cost;
    player.credits -= actualCost;
    console.log(`Spent ${actualCost} credits. Remaining credits: ${player.credits}`);

    // Apply player updates
    for (const update of choice.playerUpdates) {
        if (update.attribute === "skills") {
            if (update.action === "add" && !player.skills.includes(update.value)) {
                player.skills.push(update.value);
                console.log(`Added skill: ${update.value}`);
            }
        } else if (update.attribute === "credits") {
            if (update.action === "add") {
                player.credits += update.value;
                console.log(`Gained ${update.value} credits.`);
            } else if (update.action === "subtract") {
                player.credits -= update.value;
                console.log(`Lost ${update.value} credits.`);
            }
        } else if (update.attribute === "assets") {
            if (update.action === "add" && !player.assets.includes(update.value)) {
                player.assets.push(update.value);
                console.log(`Added asset: ${update.value}`);
            }
        }
        // Add more attribute update types as needed
    }

    // Apply consequences (e.g., discounts to other choices)
    for (const consequence of choice.consequences) {
        if (consequence.type === "discount") {
            applyDiscount(consequence.targetChoiceId, consequence.value);
        }
        // Add more consequence types as needed (e.g., 'unlock-choice', 'trigger-event')
    }

    console.log("Choice applied successfully!");
    console.log("Current Player State:", player);
}

// --- Demonstrate Usage ---

console.log("Initial Player State:", player);
console.log("Initial MMA Gym Cost:", choices.find(c => c.id === "buy-mma-gym").currentCost);

// Attempt to learn Jujitsu (should succeed)
makeChoice("learn-jujitsu");

// Attempt to buy MMA Gym (should now be discounted)
makeChoice("buy-mma-gym");

// Attempt to explore galaxy (should succeed, player has enough fleet size)
makeChoice("explore-galaxy");

// Attempt to learn Jujitsu again (should not add skill again, but cost is deducted)
// (You might want to add logic to prevent re-taking choices or handle it differently)
makeChoice("learn-jujitsu");

// Player now has 1 ship. Attempt to explore galaxy again (should fail due to fleet size prereq)
player.fleetSize = 0; // Simulate losing all ships
console.log("\nSimulating player losing all ships...");
makeChoice("explore-galaxy");

/**
 * Creates a new ship object with specified combat and power attributes.
 *
 * @param {number} gunSlots - The number of gun slots available on the ship.
 * @param {number} turretSlots - The number of turret slots available on the ship.
 * @param {number} powerReq - The power requirement of the ship.
 * @returns {object} A new ship object.
 */
function createShip(gunSlots, turretSlots, powerReq) {
    // Basic validation to ensure inputs are numbers
    if (typeof gunSlots !== 'number' || typeof turretSlots !== 'number' || typeof powerReq !== 'number') {
        console.error("Error: All ship attributes (gunSlots, turretSlots, powerReq) must be numbers.");
        // Return a default or null object in case of invalid input
        return {
            gunSlots: 0,
            turretSlots: 0,
            powerReq: 0,
            id: `ship-${Date.now()}-${Math.floor(Math.random() * 1000)}` // Still provide a unique ID
        };
    }

    // You can add more properties to the ship object here as needed,
    // such as a unique ID, name, health, cargo capacity, etc.
    const newShip = {
        id: `ship-${Date.now()}-${Math.floor(Math.random() * 1000)}`, // Unique ID for each ship
        gunSlots: gunSlots,
        turretSlots: turretSlots,
        powerReq: powerReq,
        // You could add default values for other properties here
        health: 100,
        cargoCapacity: 50,
        status: "operational"
    };

    console.log(`New ship created with ID: ${newShip.id}`);
    return newShip;
}

// --- Demonstration of the function ---

// Create a small scout ship
const scoutShip = createShip(2, 1, 15);
console.log("Scout Ship:", scoutShip);

// Create a larger cruiser
const cruiserShip = createShip(6, 4, 75);
console.log("Cruiser Ship:", cruiserShip);

// Create a massive dreadnought
const dreadnoughtShip = createShip(12, 8, 200);
console.log("Dreadnought Ship:", dreadnoughtShip);

// Demonstrate invalid input
const invalidShip = createShip("two", 1, 10);
console.log("Invalid Ship (due to bad input):", invalidShip);