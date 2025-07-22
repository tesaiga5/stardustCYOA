export { catalyst, affinity, spellBases, populateDataToSection };
const catalyst = [
  {
    name: "Base Catalyst: Arm Blade",
    cost: 0,
    description: "The base catalyst that can project an arm blade of pure mana. Can cast Tier 1 magic from all magic families. Max two catalysts per suit.",
    image: "https://placehold.co/100x100/aabbcc/ffffff?text=Catalyst"
  },
  {
    name: "Spell Synthesis",
    cost: 3,
    description: "Gain the ability to combine two spell bases into one spell. Spell bases may play out in sequence or at the same time.",
    image: "https://placehold.co/100x100/aabbcc/ffffff?text=Catalyst"
  },
  {
    name: "Advanced Spell Synthesis",
    cost: 3,
    description: "You may now combine up to three spell bases into one spell.",
    image: "https://placehold.co/100x100/aabbcc/ffffff?text=Catalyst"
  },
  {
    name: "Paralogical Tier 2 Casting",
    cost: 2,
    description: "Gain access to tier 2 Paralogical affinity effects. Your blade may now take on tier 1 Paralogical affinities.",
    image: "https://placehold.co/100x100/aabbcc/ffffff?text=Catalyst"
  },
  {
    name: "Elemental Tier 2 Casting",
    cost: 2,
    description: "Gain access to tier 2 Elemental affinity effects. Your blade may now take on tier 1 Elemental affinities.",
    image: "https://placehold.co/100x100/aabbcc/ffffff?text=Catalyst"
  },
  {
    name: "Anticausal Tier 2 Casting",
    cost: 2,
    description: "Gain access to tier 2 Anticausal affinity effects. Your blade may now take on tier 1 Anticausal affinities.",
    image: "https://placehold.co/100x100/aabbcc/ffffff?text=Catalyst"
  },
  {
    name: "Paralogical Tier 3 Casting",
    cost: 3,
    description: "Gain access to tier 3 Paralogical affinity effects. Your blade may now take on tier 2 Paralogical affinities.",
    image: "https://placehold.co/100x100/aabbcc/ffffff?text=Catalyst"
  },
  {
    name: "Elemental Tier 3 Casting",
    cost: 3,
    description: "Gain access to tier Elemental affinity effects. Your blade may now take on tier 2 Elemental affinities.",
    image: "https://placehold.co/100x100/aabbcc/ffffff?text=Catalyst"
  },
  {
    name: "Anticausal Tier 3 Casting",
    cost: 3,
    description: "Gain access to tier 3 Anticausal affinity effects. Your blade may now take on tier 2 Anticausal affinities.",
    image: "https://placehold.co/100x100/aabbcc/ffffff?text=Catalyst"
  },
  {
    name: "Catalyst Upgrade: Vanguard",
    cost: 8,
    description: "Can't be taken with Slayer or Sentinel. You now have a catalyst blade in the form of a greatsword with increased blade potency.",
    image: "https://placehold.co/100x100/aabbcc/ffffff?text=Catalyst"
  },
  {
    name: "Catalyst Upgrade: Slayer",
    cost: 8,
    description: "Can't be taken with Vanguard or Sentinel. Your catalyst is in a staff form and can project a bladestaff. Spell bases now have greater potency.",
    image: "https://placehold.co/100x100/aabbcc/ffffff?text=Catalyst"
  },
  {
    name: "Catalyst Upgrade: Sentinel",
    cost: 8,
    description: "Can't be taken with Vanguard or Slayer. Instead of a blade, your catalyst is now a shield that covers your upper torso. Spells cost less mana.",
    image: "https://placehold.co/100x100/aabbcc/ffffff?text=Catalyst"
  },
  {
    name: "Ghost Blade",
    cost: 2,
    description: "Each swing of the blade will cast an echo of itself shortly afterwards, effectively hitting twice.",
    image: "https://placehold.co/100x100/aabbcc/ffffff?text=Catalyst"
  },
  {
    name: "Smite",
    cost: 2,
    description: "Activating this special upgrade will lengthen the blade of your catalyst up to three times and lasts for several minutes. Has a moderate cooldown.",
    image: "https://placehold.co/100x100/aabbcc/ffffff?text=Catalyst"
  },
  {
    name: "Judgement",
    cost: 3,
    description: "Your catalyst blade has the ability to shoot a projection of itself after charging up with mana for a short-medium distance.",
    image: "https://placehold.co/100x100/aabbcc/ffffff?text=Catalyst"
  },
  {
    name: "Moonlight",
    cost: 2,
    description: "Charging up a swing from your catalyst's blade by channeling energy into it will double the blade's potency for that swing.",
    image: "https://placehold.co/100x100/aabbcc/ffffff?text=Catalyst"
  },
  {
    name: "Flare",
    cost: 2,
    description: "Charging up a swing from your catalyst's blade by channeling energy into it will cause the next impact to explode.",
    image: "https://placehold.co/100x100/aabbcc/ffffff?text=Catalyst"
  },
  {
    name: "Guardian",
    cost: 5,
    description: "Create a near-indestructible immobile forcefield around yourself over a small area, enough to cover your entire fireteam.",
    image: "https://placehold.co/100x100/aabbcc/ffffff?text=Catalyst"
  },
  {
    name: "Blink",
    cost: 10,
    description: "Gain the ability to teleport a short distance. While low cooldown, repeated successive Blinks cost an increasing amount of mana to cast.",
    image: "https://placehold.co/100x100/aabbcc/ffffff?text=Catalyst"
  },
  {
    name: "Howl",
    cost: 8,
    description: "Activating this upgrade injects a large amount of mana into the servos subsystem of the suit, boosting all mobility capabilities two-fold temporarily.",
    image: "https://placehold.co/100x100/aabbcc/ffffff?text=Catalyst"
  },
  {
    name: "Fortitude",
    cost: 1,
    description: "Gain a strong resistance against psychic and mind-based attacks.",
    image: "https://placehold.co/100x100/aabbcc/ffffff?text=Catalyst"
  },
];

const affinity = [
  {
    name: "Void Tier 1 Affinity",
    cost: null, // Cost is not explicitly stated for affinities
    description: "Causes severe mana overload burns on targets and neutralizes unspent mana. Has a nullifying effect on other mana-powered mechanisms.",
    image: "https://placehold.co/100x100/ccbbdd/ffffff?text=Affinity"
  },
  {
    name: "Void Tier 2 Affinity",
    cost: null,
    description: "Surrounding mana energy is significantly drawn towards the spell base and upon contact, is drained and siphoned back to you.",
    image: "https://placehold.co/100x100/ccbbdd/ffffff?text=Affinity"
  },
  {
    name: "Void Tier 3 Affinity",
    cost: null,
    description: "Greatly reduces the amount of mana consumed by the casting of the spell while also making the next spell executable almost instantly.",
    image: "https://placehold.co/100x100/ccbbdd/ffffff?text=Affinity"
  },
  {
    name: "Erosion Tier 1 Affinity",
    cost: null,
    description: "Accelerates the erosion of inanimate matter the spell comes into contact with. Higher potencies can rust metal extremely quickly.",
    image: "https://placehold.co/100x100/ccbbdd/ffffff?text=Affinity"
  },
  {
    name: "Erosion Tier 2 Affinity",
    cost: null,
    description: "Biomatter that makes contact with the spell is decayed at an alarming rate.",
    image: "https://placehold.co/100x100/ccbbdd/ffffff?text=Affinity"
  },
  {
    name: "Erosion Tier 3 Affinity",
    cost: null,
    description: "Random molecules in the affected area are annihilated. Likelihood of success is dependent on spell potency.",
    image: "https://placehold.co/100x100/ccbbdd/ffffff?text=Affinity"
  },
  {
    name: "Vorpal Tier 1 Affinity",
    cost: null,
    description: "Crystalization effect. Edges are thinner than any matter known to man and cuts through targets at a sub-molecular level.",
    image: "https://placehold.co/100x100/ccbbdd/ffffff?text=Affinity"
  },
  {
    name: "Vorpal Tier 2 Affinity",
    cost: null,
    description: "Ability to drain light. Maximum potency spell bases will have perfect light drain.",
    image: "https://placehold.co/100x100/ccbbdd/ffffff?text=Affinity"
  },
  {
    name: "Vorpal Tier 3 Affinity",
    cost: null,
    description: "Attacks intelligence systems in close proximity by introducing entropy into their systems, including artificial intelligences and human minds.",
    image: "https://placehold.co/100x100/ccbbdd/ffffff?text=Affinity"
  },
  {
    name: "Thermal Tier 1 Affinity",
    cost: null,
    description: "Lengthens the wavelength of the spell base, adding a slight burning effect while also increasing the velocity significantly.",
    image: "https://placehold.co/100x100/ccbbdd/ffffff?text=Affinity"
  },
  {
    name: "Thermal Tier 2 Affinity",
    cost: null,
    description: "Cryogenic affinity that rapidly reduces the temperature of affected targets.",
    image: "https://placehold.co/100x100/ccbbdd/ffffff?text=Affinity"
  },
  {
    name: "Thermal Tier 3 Affinity",
    cost: null,
    description: "Adds a molten effect to the point where higher potency spell bases can melt through metal like butter.",
    image: "https://placehold.co/100x100/ccbbdd/ffffff?text=Affinity"
  },
  {
    name: "Arc Tier 1 Affinity",
    cost: null,
    description: "An electric affinity that adds an electric charge to the spell base.",
    image: "https://placehold.co/100x100/ccbbdd/ffffff?text=Affinity"
  },
  {
    name: "Arc Tier 2 Affinity",
    cost: null,
    description: "Increases the \"conductivity\" of the target against further spells of the same or similar type.",
    image: "https://placehold.co/100x100/ccbbdd/ffffff?text=Affinity"
  },
  {
    name: "Arc Tier 3 Affinity",
    cost: null,
    description: "All affinity effects applied on the target will chain to nearby targets. Radius of distribution is dependent on spell affinity.",
    image: "https://placehold.co/100x100/ccbbdd/ffffff?text=Affinity"
  },
  {
    name: "Kinetic Tier 1 Affinity",
    cost: null,
    description: "Spell bases gain a dense mass as if made of solid matter. Middle potencies are equivalent to that of denser metal.",
    image: "https://placehold.co/100x100/ccbbdd/ffffff?text=Affinity"
  },
  {
    name: "Kinetic Tier 2 Affinity",
    cost: null,
    description: "Adds a detonation effect that releases a shockwave with an explosion velocity dependent on the potency of the spell base.",
    image: "https://placehold.co/100x100/ccbbdd/ffffff?text=Affinity"
  },
  {
    name: "Kinetic Tier 3 Affinity",
    cost: null,
    description: "Spell base warps gravity potential of targets. Higher potencies can cause gravitational pulls or gravity riptides.",
    image: "https://placehold.co/100x100/ccbbdd/ffffff?text=Affinity"
  },
  {
    name: "Resonance Tier 1 Affinity",
    cost: null,
    description: "Increases the operational integrity of the target's makeup, such as adjusted friction or increased bloodflow.",
    image: "https://placehold.co/100x100/ccbbdd/ffffff?text=Affinity"
  },
  {
    name: "Resonance Tier 2 Affinity",
    cost: null,
    description: "Provides a hardening effect on any affected targets, strengthening solid matter or increasing mass for more inertia.",
    image: "https://placehold.co/100x100/ccbbdd/ffffff?text=Affinity"
  },
  {
    name: "Resonance Tier 3 Affinity",
    cost: null,
    description: "Rapidly restructures the integrity of matter it comes into contact with. Biomatter is healed.",
    image: "https://placehold.co/100x100/ccbbdd/ffffff?text=Affinity"
  },
  {
    name: "Corruption Tier 1 Affinity",
    cost: null,
    description: "Adds a sticky affect to the spell base while also allowing other effects in the same spell base to spread easier.",
    image: "https://placehold.co/100x100/ccbbdd/ffffff?text=Affinity"
  },
  {
    name: "Corruption Tier 2 Affinity",
    cost: null,
    description: "Spells leave a lingering effect in the area that is affected. Duration is dependent on the potency of the spell.",
    image: "https://placehold.co/100x100/ccbbdd/ffffff?text=Affinity"
  },
  {
    name: "Corruption Tier 3 Affinity",
    cost: null,
    description: "Spell bases hone in on the intended target upon the time the spell is cast. Accuracy is dependent on the potency of the spell.",
    image: "https://placehold.co/100x100/ccbbdd/ffffff?text=Affinity"
  },
  {
    name: "Retribution Tier 1 Affinity",
    cost: null,
    description: "Adds the ability to set a timer on the spell base before executing. Higher potencies can delay a spell from casting for several hours.",
    image: "https://placehold.co/100x100/ccbbdd/ffffff?text=Affinity"
  },
  {
    name: "Retribution Tier 2 Affinity",
    cost: null,
    description: "Affected targets are hastened. Maximum potency can hasten a target for up to twice normal speed for up to a minute.",
    image: "https://placehold.co/100x100/ccbbdd/ffffff?text=Affinity"
  },
  {
    name: "Retribution Tier 3 Affinity",
    cost: null,
    description: "Affected areas are caught and slowed in a time stasis. Higher potencies can effectively stop targets when coming into contact.",
    image: "https://placehold.co/100x100/ccbbdd/ffffff?text=Affinity"
  }
];

const spellBases = [
  {
    name: "Dart",
    cost: 1,
    description: "A small bolt of concentrated mana that can be fired off for a medium distance while costing relatively little to cast, and can be casted rather quickly in succession.",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase"
  },
  {
    name: "Spray",
    cost: 1,
    description: "Sprays a somewhat condensed cloud of mana in a continuous stream. It's short ranged with a low velocity, but it is effective at what it hits.",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase"
  },
  {
    name: "Pulse",
    cost: 1,
    description: "Bursts a very concentrated short-ranged shockwave in a cone in front of you. Has a low cooldown and can be devastating to any targets in range.",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase"
  },
  {
    name: "Barricade",
    cost: 1,
    description: "Projects a rectangular barrier that can cover almost a whole side of your suit. While it has a high potency, it only deploys relatively close to you.",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase"
  },
  {
    name: "Pinch",
    cost: 1,
    description: "While it has low potency and almost non-existent raw effective power, this base is mostly used for carrying other spell bases to a range in almost an instant.",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase"
  },
  {
    name: "Self",
    cost: 1,
    description: "A somewhat mild small self-aura that encompasses only the volume of your suit. That said, it is also very simple to cast and lasts a long time.",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase"
  },
  {
    name: "Tether",
    cost: 2,
    description: "A short-ranged tether with high concentration. Its potency slightly increases the longer you remain directly attached to the target with this tether.",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase"
  },
  {
    name: "Mine",
    cost: 2,
    description: "Mines can only be casted a short distance, but will detonate into a large explosion after the duration expires or when in proximity to a designated target type.",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase"
  },
  {
    name: "Aura",
    cost: 2,
    description: "Radiate a mild aura from your suit that affects all targets indiscriminately. Has a wide affective radius, and it may or may not include yourself.",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase"
  },
  {
    name: "Flash",
    cost: 2,
    description: "Suddenly let out a bright flash of mana in a radius around you.",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase"
  },
  {
    name: "Crescent",
    cost: 2,
    description: "Shoot out a highly concentrated disc of mana that travels a moderate range. This is very helpful for precision work.",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase"
  },
  {
    name: "Arrow",
    cost: 2,
    description: "A moderately sized bolt of mana that travels a decent distance at a decent velocity. It is also popular to use as a medium for carrying other spell bases.",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase"
  },
  {
    name: "Beam",
    cost: 4,
    description: "A beam of concentrated mana that travels almost instantly and accurately to your target.",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase"
  },
  {
    name: "Bomb",
    cost: 4,
    description: "Fire off a large bomb that, while travels slowly, explodes in a very large and concentrated explosion.",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase"
  },
  {
    name: "Pillars",
    cost: 4,
    description: "Summon extremely thin pillars of very potent mana randomly around a moderate radius of yourself. Can be casted rather frequently, and the pillars somewhat prioritize valid",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase"
  },
  {
    name: "Cloud",
    cost: 4,
    description: "A slow-moving cloud that covers a very large radius that can travel a moderate distance, lingering for a very long while.",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase"
  },
  {
    name: "Spear",
    cost: 6,
    description: "Throw an extremely dense spear of mana that can pierce through multiple targets.",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase"
  },
  {
    name: "Swarm",
    cost: 6,
    description: "Burst forward a group of accelerated mana darts. While somewhat inaccurate, it can be casted almost continuously and devastates anything in its path.",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase"
  },
  {
    name: "Haze",
    cost: 6,
    description: "A mana bomb that has a mild-but-effective explosion with a very large radius which leaves behind a lingering dense cloud.",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase"
  },
  {
    name: "Barrier",
    cost: 6,
    description: "Summon wide barrier of potent mana that's large enough to cover you and your fireteam from one direction.",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase"
  },
  {
    name: "Overload",
    cost: 10,
    description: "Charge up to fire a wide, devastating beam of mana that travels a far distance in an instant.",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase"
  },
  {
    name: "Nova",
    cost: 10,
    description: "Cast a sudden explosion around yourself that engulfs a large area, which then lingers for awhile as a violent storm of mana.",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase"
  },
  {
    name: "Starfall",
    cost: 10,
    description: "Shoot a burst of eight beams of concentrated mana that can hone in on separate targets or hit the same target multiple times.",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase"
  },
  {
    name: "Radiance",
    cost: 10,
    description: "Radiate an aura of mana over an extremely large area from your suit, which lingers for a long time.",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase"
  }
];

/**
 * Helper function to create and append a paragraph element.
 * @param {HTMLElement} parentElement - The parent element to append the paragraph to.
 * @param {string} textContent - The text content for the paragraph.
 */
function appendParagraph(parentElement, textContent) {
  const p = document.createElement('p');
  p.textContent = textContent;
  parentElement.appendChild(p);
}

function appendDropdown(parentElement) {
    // Create a new div to wrap the dropdown and number input
    const controlGroup = document.createElement('div');

    // Create the dropdown menu (select element)
    const selectElement = document.createElement('select');
    selectElement.innerHTML = `
        <option value="spinal">Spinal</option>
        <option value="broadside">Broadside</option>
        <option value="point-defence">Point-Defence</option>
    `;
    selectElement.addEventListener('change', (event) => {
        console.log('Selected:', event.target.value);
        // You can add logic here to handle the selected value
    });

    // Create the number display span
    const numberSpan = document.createElement('span');
    numberSpan.textContent = '0'; // Initial number
    numberSpan.id = `num-${Date.now()}`; // Unique ID for each number span

    // Create the decrement button
    const decrementButton = document.createElement('button');
    decrementButton.textContent = '-';
    decrementButton.addEventListener('click', () => {
        let currentNum = parseInt(numberSpan.textContent);
        if (currentNum > 0) { // Prevent going below zero
            numberSpan.textContent = currentNum - 1;
        }
    });

    // Create the increment button
    const incrementButton = document.createElement('button');
    incrementButton.textContent = '+';
    incrementButton.classList.add(
        'btn-secondary', 'px-4', 'py-2', 'rounded-lg', 'font-bold', 'text-xl'
    );
    incrementButton.addEventListener('click', () => {
        let currentNum = parseInt(numberSpan.textContent);
        numberSpan.textContent = currentNum + 1;
    });

    // Append all elements to the control group
    controlGroup.appendChild(selectElement);
    controlGroup.appendChild(decrementButton);
    controlGroup.appendChild(numberSpan);
    controlGroup.appendChild(incrementButton);

    // Append the control group to the parent element
    parentElement.appendChild(controlGroup);
}

function appendGauge(parentElement, labelText, currentValue, maxValue = 10, filledColorClass = 'filled', emptyColorClass = '', highlightIndices = []) {
    // Create the main container for the gauge (label + cells)
    const gaugeContainer = document.createElement('span');
    gaugeContainer.classList.add('gauge-container');

    // Create the label element
    const label = document.createElement('span');
    label.textContent = labelText;
    label.classList.add('gauge-label');
    gaugeContainer.appendChild(label);

    // Create the container for the gauge cells
    const cellsContainer = document.createElement('span');
    cellsContainer.classList.add('gauge-cells');

    // Create individual gauge cells
for (let i = 0; i < maxValue; i++) {
  const cell = document.createElement('span');
  cell.classList.add('gauge-cell');

  // Check if the cell should be filled
  if (i < currentValue) {
    // Apply specific filled color based on cell index
    if (i >= 0 && i <= 2) { // Cells 1-3 (0-indexed: 0, 1, 2)
        cell.classList.add('filled-white');
    } else if (i >= 3 && i <= 5) { // Cells 4-6 (0-indexed: 3, 4, 5)
        cell.classList.add('filled-light-purple');
    } else if (i >= 6 && i <= 8) { // Cells 7-9 (0-indexed: 6, 7, 8)
        cell.classList.add('filled-dark-purple');
    } else if (i === 9) { // Cell 10 (0-indexed: 9)
        cell.classList.add('filled-light-red');
    }
  }
  cellsContainer.appendChild(cell);
}
    gaugeContainer.appendChild(cellsContainer);
    parentElement.appendChild(gaugeContainer);
}

/**
 * Populates a specified HTML section with data from a given array of objects.
 * This single function replaces multiple specialized functions by dynamically
 * rendering properties based on the 'dataType' parameter.
 *
 * @param {Array<Object>} dataArray - The array of objects to display (e.g., hulls, shipAI, weapons).
 * @param {string} choicePrefix - A prefix for the ID of each generated div (e.g., "item-choice").
 * @param {string} sectionID - The ID of the HTML element where the divs should be appended.
 * @param {string} dataType - A string indicating the type of data being displayed (e.g., 'hull', 'shipAI', 'weapon', 'industrial', 'ewar', 'room', 'drone', 'catalyst', 'affinity', 'spellBase', 'mod').
 */
function populateDataToSection(dataArray, choicePrefix, sectionID, dataType) {
  const targetSection = document.getElementById(sectionID);

  if (!targetSection) {
    console.error(`Target section with ID "${sectionID}" not found.`);
    return;
  }

  if (!Array.isArray(dataArray)) {
    console.error(`Provided data for ${dataType} is not an array or does not exist.`);
    return;
  }

  // Check if the section already has population to prevent duplicate entries
  if (dataArray.length > 0) {
    const checkDiv = document.getElementById(`${choicePrefix}-${dataArray[0].name.replace(/\s/g, '-')}`);
    if (document.contains(checkDiv)) {
      return;
    }
  }

  dataArray.forEach(item => {
    const newDiv = document.createElement("div");
    newDiv.classList.add('choice', 'ship');
    newDiv.id = `${choicePrefix}-${item.name.replace(/\s/g, '-')}`;

    const newSpan = document.createElement("span");
    newDiv.appendChild(newSpan);

    // Image element - common to all
    const imgElement = document.createElement('img');
    imgElement.src = item.image || 'https://placehold.co/100x100/eeeeee/ffffff?text=NoImage';
    imgElement.alt = `${item.name} image`;
    newSpan.appendChild(imgElement); // Image added after newSpan

    // Title (name) - common to all
    const h3Element = document.createElement('h3');
    h3Element.style.marginTop = '0px';
    h3Element.style.marginBottom = '0px';
    h3Element.textContent = item.name || 'No Name';
    newSpan.appendChild(h3Element);

    // Cost - common to most, with special handling for secondaryCost in weapons
    if (item.cost !== undefined) {
      const costP = document.createElement('p');
      costP.innerHTML = `Cost: ${typeof item.cost === 'number' ? (typeof formatterIntl !== 'undefined' ? formatterIntl.format(item.cost) : item.cost) : 'N/A'}`;
      if (dataType === 'weapon' && item.secondaryCost !== undefined) {
        costP.innerHTML += ` (${typeof item.secondaryCost === 'number' ? (typeof formatterIntl !== 'undefined' ? formatterIntl.format(item.secondaryCost) : item.secondaryCost) : 'N/A'})`;
      }
      newSpan.appendChild(costP);
    }

    // Dynamic properties based on dataType
    switch (dataType) {
      case 'hull':
        appendParagraph(newSpan, `Manufacturer: ${item.manufacturer || 'N/A'}`);
        appendParagraph(newSpan, `Type: ${item.type || 'N/A'}`);
        appendParagraph(newSpan, `Spinal Mounts: ${item.spinalMount || 0}`);
        appendParagraph(newSpan, `Broadside Mounts: ${item.broadsideMount || 0}`);
        appendParagraph(newSpan, `Point Defence Mounts: ${item.pointDefenceMount || 0}`);
        appendParagraph(newSpan, `Hangar Space: ${item.hangarSpace || 0}`);
        appendParagraph(newSpan, `Navigation: ${item.navigation || 0}/25`);
        appendParagraph(newSpan, `Hull Armor: ${item.hullArmor || 0}/25`);
        appendParagraph(newSpan, `Shield Strength: ${item.shieldStrength || 0}/25`);
        appendParagraph(newSpan, `Length: ${item.length || 'N/A'}`);
        appendParagraph(newSpan, `Max Crew: ${item.maxCrew || 0}`);
        appendParagraph(newSpan, `Extra Rooms: ${item.extraRooms || 0}`);
        appendParagraph(newSpan, `Energy Use: ${item.energyUse || 0}`);
        break;
      case 'shipAI':
        appendParagraph(newSpan, `Manufacturer: ${item.manufacturer || 'N/A'}`);
        appendParagraph(newSpan, `Role: ${item.role || 'N/A'}`);
        break;
      case 'energy':
        appendParagraph(newSpan, `Energy Output: ${item.energyOutput || 'N/A'}`);
        appendParagraph(newSpan, `Charge Duration: ${item.chargeDuration || 'N/A'}`);
        break;
      case 'shield':
        appendParagraph(newSpan, `Shield Strength: ${item.shieldStrength || 'N/A'}`);
        break;
      case 'mod':
        if (item.type === "command") {
          appendParagraph(newSpan, `Manufacturer: ${item.manufacturer || 'N/A'}`);
          appendParagraph(newSpan, `Special Ability: ${item.specialAbility || 'N/A'}`);
          appendParagraph(newSpan, `Cooldown: ${item.cooldown || 'N/A'}`);
          appendParagraph(newSpan, `Range: ${item.range || 'N/A'}`);
        } else if (item.type === "hull") {
          appendParagraph(newSpan, `Maximum Upgrades: ${item.maximumUpgrades || 'N/A'}`);
          if (item.pointDefenceMounts !== undefined) appendParagraph(newSpan, `Point-Defence Mounts: +${item.pointDefenceMounts}`);
          if (item.broadsideTurretMounts !== undefined) appendParagraph(newSpan, `Broadside Turret Mounts: +${item.broadsideTurretMounts}`);
          if (item.spinalWeaponMounts !== undefined) appendParagraph(newSpan, `Spinal Weapon Mounts: +${item.spinalWeaponMounts}`);
          if (item.navigation !== undefined) appendParagraph(newSpan, `Navigation: +${item.navigation}`);
          if (item.hullArmor !== undefined) appendParagraph(newSpan, `Hull Armor: +${item.hullArmor}`);
          if (item.hangarSpace !== undefined) appendParagraph(newSpan, `Hangar Space: +${item.hangarSpace}`);
          if (item.shieldStrength !== undefined) appendParagraph(newSpan, `Shield Strength: +${item.shieldStrength}`);
          if (item.extraRooms !== undefined) appendParagraph(newSpan, `Extra Rooms: +${item.extraRooms}`);
        }
        break;
      case 'industrial':
        appendParagraph(newSpan, `Module Type: ${item.moduleType || 'N/A'}`);
        break;
      case 'ewar':
        appendParagraph(newSpan, `Module Type: ${item.moduleType || 'N/A'}`);
        appendParagraph(newSpan, `Range: ${item.range || 'N/A'}`);
        break;
      case 'room':
        appendParagraph(newSpan, `Type: ${item.type || 'N/A'}`);
        if (item.consequences) appendParagraph(newSpan, `Consequences: ${item.consequences}`);
        break;
      case 'weapon':
        appendDropdown(newSpan); // Add the dropdown for weapon mounts
        appendGauge(newSpan, 'Energy Use', 10); // Example gauge for energy use
        appendParagraph(newSpan, `Energy Use: ${item.energyUse || 'N/A'}`);
        appendParagraph(newSpan, `Tier: ${item.tier || 'N/A'}`);
        appendParagraph(newSpan, `Damage Per Volley: ${item.damagePerVolley || 'N/A'}`);
        appendParagraph(newSpan, `Rate of Fire: ${item.rateOfFire || 'N/A'}`);
        appendParagraph(newSpan, `Accuracy: ${item.accuracy || 'N/A'}`);
        appendParagraph(newSpan, `Range: ${item.range || 'N/A'}`);
        appendParagraph(newSpan, `Projectile Velocity: ${item.projectileVelocity || 'N/A'}`);
        appendParagraph(newSpan, `Tracking: ${item.tracking || 'N/A'}`);
        appendParagraph(newSpan, `Weapon Types: ${item.weaponTypes || 'N/A'}`);
        break;
      case 'drone':
        appendParagraph(newSpan, `Hangar Space Use: ${item.hangarSpaceUse || 'N/A'}`);
        appendParagraph(newSpan, `Spinal Weapon Mounts: ${item.spinalWeaponMounts || 0}`);
        appendParagraph(newSpan, `Broadside Turret Mounts: ${item.broadsideTurrentMounts || 0}`);
        appendParagraph(newSpan, `Point-Defence Mounts: ${item.pointDefenceMounts || 0}`);
        appendParagraph(newSpan, `Navigation: ${item.navigation || 0}`);
        appendParagraph(newSpan, `Hull Armour: ${item.hullArmour || 0}`);
        appendParagraph(newSpan, `Shield Defence: ${item.shieldDefence || 0}`);
        appendParagraph(newSpan, `Length: ${item.length || 'N/A'}`);
        break;
      case 'catalyst':
        // Catalyst specific properties (cost and description already handled)
        break;
      case 'affinity':
        // Affinity specific properties (cost and description already handled)
        break;
      case 'spellBase':
        // SpellBase specific properties (cost and description already handled)
        break;
      default:
        console.warn(`Unknown dataType: ${dataType}. No specific properties rendered.`);
    }

    // Description - common to all
    const descriptionP = document.createElement("p");
    descriptionP.innerHTML = item.description || 'No description available.';
    newSpan.appendChild(descriptionP);

    targetSection.before(newDiv); // Append to the target section
  });
}
