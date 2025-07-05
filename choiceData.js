const skills = [
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