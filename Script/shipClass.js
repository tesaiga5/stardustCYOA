const ITEM_MAP = {
    "weapon": "weaponChoice",
    "hangar": "hangarChoice",
    "shield": "shield",
    "mod": "mods",
    "ewar": "eWar",
    "industrial": "industrials",
    "energy": "energy",
    "room": "rooms",
    "shipAI": "shipAI"
};

export class Ship {
    constructor() {
        this.resetStats();
    }
    resetStats() {
        this.spinalSlot = 0;
        this.broadSideSlot = 0;
        this.pointDefenceSlot = 0;
        this.hullName = "";
        this.hangarSpace = 0;
        this.navigation = 0;
        this.hullArmor = 0;
        this.shieldStr = 0;
        this.length = 0;
        this.maxCrew = 0;
        this.extraRooms = 0;
        this.energyUse = 1;
        this.shipAI = [];
        this.shield = [];
        this.rooms = [];
        this.industrials = [];
        this.energy = [];
        this.eWar = [];
        this.weaponChoice = new Map(); //map weapons to quantity
        this.hangarChoice = [];
        this.mods = [];
        this.tier = 0;
        this.shipName = '';
        this.shipCost = 0;
    }
    addHull(hull, player) { //hull is an object, adds its properties to this ship
        // 1. Pull 'name' out separately since the Ship calls it 'hullName'
        // 2. Put everything else into a variable called 'stats'
        const { name, cost, ...stats } = hull;

        // 3. Update the name
        this.hullName = name;
        this.shipCost = cost * this.hullDiscount(player, hull); //apply discount and add cost. 
        // 5. Nuke/Overwrite all other matching attributes at once
        Object.assign(this, stats);                 
    }
    removeHull() { //removes the hull from the ship; nuke stats
        this.resetStats();
    }
    updateWeaponSlot() { //updates the weapon slot display
        document.getElementById("spinal-credits-display").innerHTML = `Remaining Spinal Slot: ${this.spinalSlot}`;
        document.getElementById("broadside-credits-display").innerHTML = `Remaining Broadside Slot: ${this.broadSideSlot}`;
        document.getElementById("pointdefence-credits-display").innerHTML = `Remaining Point Defence Slot: ${this.pointDefenceSlot}`;
    }
    hullDiscount(player, currentHull) { //searches for other ships to get discount
        const shipIds = Object.values(player.ships);
        let tempShip = shipIds[0];
        if (tempShip === null || shipIds.length === 1) {
            return 1;
        }
        let tempTier = 0;
        //search for ship with the highest tier
        for (const value of Object.values(player.ships)) {
            if (value.currentHull.tier > tempTier) {
            tempTier = value.currentHull.tier;
            tempShip = value;
            }
        }
        //apply discount based on tier difference
        let tierDiff = tempTier - currentHull.tier;
        return Math.max(0.4, 0.8 - (tierDiff * 0.1));
    }

    //auxiliary treatments happen outside of this function
    addItem(item, category) { //add any item to the ship e.g. weaponObject, weapon 
        const attributeName = ITEM_MAP[category];

        if (!attributeName || !this[attributeName]) {
            console.error(`Category ${category} does not exist on this ship.`);
            return;
        }

        if (category === "weapon") {
            // Check if we already have this weapon (using name as the unique key)
            if (this.weaponChoice.has(item.name)) {
                // Increment the quantity
                this.weaponChoice.get(item.name).quantity += 1;
            } else {
                // Add the weapon to the map with quantity 1
                this.weaponChoice.set(item.name, { item, quantity: 1 });
            }
        } else {// 1. Add to the relevant array
            this[attributeName].push(item);
        }
        
        // 2. Update the ship cost
        this.cost += item.cost;

        console.log(`Added ${item.name} to ${attributeName}.`);
    }

    removeItem(item, category) {//remove any item to the ship (e.g. weapon)
        const attributeName = ITEM_MAP[category];
        if (!attributeName || this[attributeName] === undefined) return;

        // --- EXCEPTION FOR WEAPONS ---
        if (category === "weapon") {
            if (this.weaponChoice.has(item.name)) {
                const weaponEntry = this.weaponChoice.get(item.name);
                
                if (weaponEntry.quantity > 1) {
                    // Decrement quantity
                    weaponEntry.quantity -= 1;
                } else {
                    // Only 1 left, so delete the entry entirely
                    this.weaponChoice.delete(item.name);
                }
                this.cost -= item.cost;
            }
        } 
        // --- STANDARD LOGIC FOR ARRAYS ---
        else {
            const targetArray = this[attributeName];
            const index = targetArray.findIndex(i => i.name === item.name);

            if (index !== -1) {
                this.cost -= item.cost;
                targetArray.splice(index, 1);
                }
            }
    }    
}