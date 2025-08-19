export {
  catalyst,
  affinity,
  spellBases,
  populateDataToSection,
  populateCatalystToSection,
  appendDropdown,
  formatterIntl,
  appendParagraph,
  appendList1,
  createAffinityTable,
};

import { getImgName } from "/Script/switchChoose.js";

const catalyst = [
  {
    name: "Base Catalyst: Arm Blade",
    cost: 0,
    description:
      "The base catalyst that can project an arm blade of pure mana. Can cast Tier 1 magic from all magic families. Max two catalysts per suit.",
    image: "https://placehold.co/100x100/aabbcc/ffffff?text=Catalyst",
  },
  {
    name: "Spell Synthesis",
    cost: 3,
    description:
      "Gain the ability to combine two spell bases into one spell. Spell bases may play out in sequence or at the same time.",
    image: "https://placehold.co/100x100/aabbcc/ffffff?text=Catalyst",
  },
  {
    name: "Advanced Spell Synthesis",
    cost: 3,
    description: "You may now combine up to three spell bases into one spell.",
    image: "https://placehold.co/100x100/aabbcc/ffffff?text=Catalyst",
  },
  {
    name: "Paralogical Tier 2 Casting",
    cost: 2,
    description:
      "Gain access to tier 2 Paralogical affinity effects. Your blade may now take on tier 1 Paralogical affinities.",
    image: "https://placehold.co/100x100/aabbcc/ffffff?text=Catalyst",
  },
  {
    name: "Elemental Tier 2 Casting",
    cost: 2,
    description:
      "Gain access to tier 2 Elemental affinity effects. Your blade may now take on tier 1 Elemental affinities.",
    image: "https://placehold.co/100x100/aabbcc/ffffff?text=Catalyst",
  },
  {
    name: "Anticausal Tier 2 Casting",
    cost: 2,
    description:
      "Gain access to tier 2 Anticausal affinity effects. Your blade may now take on tier 1 Anticausal affinities.",
    image: "https://placehold.co/100x100/aabbcc/ffffff?text=Catalyst",
  },
  {
    name: "Paralogical Tier 3 Casting",
    cost: 3,
    description:
      "Gain access to tier 3 Paralogical affinity effects. Your blade may now take on tier 2 Paralogical affinities.",
    image: "https://placehold.co/100x100/aabbcc/ffffff?text=Catalyst",
  },
  {
    name: "Elemental Tier 3 Casting",
    cost: 3,
    description:
      "Gain access to tier Elemental affinity effects. Your blade may now take on tier 2 Elemental affinities.",
    image: "https://placehold.co/100x100/aabbcc/ffffff?text=Catalyst",
  },
  {
    name: "Anticausal Tier 3 Casting",
    cost: 3,
    description:
      "Gain access to tier 3 Anticausal affinity effects. Your blade may now take on tier 2 Anticausal affinities.",
    image: "https://placehold.co/100x100/aabbcc/ffffff?text=Catalyst",
  },
  {
    name: "Catalyst Upgrade: Vanguard",
    cost: 8,
    description:
      "Can't be taken with Slayer or Sentinel. You now have a catalyst blade in the form of a greatsword with increased blade potency.",
    image: "https://placehold.co/100x100/aabbcc/ffffff?text=Catalyst",
  },
  {
    name: "Catalyst Upgrade: Slayer",
    cost: 8,
    description:
      "Can't be taken with Vanguard or Sentinel. Your catalyst is in a staff form and can project a bladestaff. Spell bases now have greater potency.",
    image: "https://placehold.co/100x100/aabbcc/ffffff?text=Catalyst",
  },
  {
    name: "Catalyst Upgrade: Sentinel",
    cost: 8,
    description:
      "Can't be taken with Vanguard or Slayer. Instead of a blade, your catalyst is now a shield that covers your upper torso. Spells cost less mana.",
    image: "https://placehold.co/100x100/aabbcc/ffffff?text=Catalyst",
  },
  {
    name: "Ghost Blade",
    cost: 2,
    description:
      "Each swing of the blade will cast an echo of itself shortly afterwards, effectively hitting twice.",
    image: "https://placehold.co/100x100/aabbcc/ffffff?text=Catalyst",
  },
  {
    name: "Smite",
    cost: 2,
    description:
      "Activating this special upgrade will lengthen the blade of your catalyst up to three times and lasts for several minutes. Has a moderate cooldown.",
    image: "https://placehold.co/100x100/aabbcc/ffffff?text=Catalyst",
  },
  {
    name: "Judgement",
    cost: 3,
    description:
      "Your catalyst blade has the ability to shoot a projection of itself after charging up with mana for a short-medium distance.",
    image: "https://placehold.co/100x100/aabbcc/ffffff?text=Catalyst",
  },
  {
    name: "Moonlight",
    cost: 2,
    description:
      "Charging up a swing from your catalyst's blade by channeling energy into it will double the blade's potency for that swing.",
    image: "https://placehold.co/100x100/aabbcc/ffffff?text=Catalyst",
  },
  {
    name: "Flare",
    cost: 2,
    description:
      "Charging up a swing from your catalyst's blade by channeling energy into it will cause the next impact to explode.",
    image: "https://placehold.co/100x100/aabbcc/ffffff?text=Catalyst",
  },
  {
    name: "Guardian",
    cost: 5,
    description:
      "Create a near-indestructible immobile forcefield around yourself over a small area, enough to cover your entire fireteam.",
    image: "https://placehold.co/100x100/aabbcc/ffffff?text=Catalyst",
  },
  {
    name: "Blink",
    cost: 10,
    description:
      "Gain the ability to teleport a short distance. While low cooldown, repeated successive Blinks cost an increasing amount of mana to cast.",
    image: "https://placehold.co/100x100/aabbcc/ffffff?text=Catalyst",
  },
  {
    name: "Howl",
    cost: 8,
    description:
      "Activating this upgrade injects a large amount of mana into the servos subsystem of the suit, boosting all mobility capabilities two-fold temporarily.",
    image: "https://placehold.co/100x100/aabbcc/ffffff?text=Catalyst",
  },
  {
    name: "Fortitude",
    cost: 1,
    description:
      "Gain a strong resistance against psychic and mind-based attacks.",
    image: "https://placehold.co/100x100/aabbcc/ffffff?text=Catalyst",
  },
];

const affinity = [
  // Column 1 data, grouped
  [
    {
      title: "Void",
      image: "Images/Mana/void3-indotort-midjourney (11).webp",
      items: [
        {
          title: "Void Tier 1 Affinity",
          description:
            "Casting mana overloads turns on targets internal aetheric mana grid, this has a nullifying effect on other mana-powered mechanisms.",
        },
        {
          title: "Void Tier 2 Affinity",
          description:
            "Surrounding mana energy is significantly drawn towards the spell base and upon contact, is drained and siphoned back to you.",
        },
        {
          title: "Void Tier 3 Affinity",
          description:
            "Greatly reduces the amount of mana consumed by the casting of the spell while also making the next spell executable almost instantly.",
        },
      ],
    },
    {
      title: "Erosion",
      image: "Images/Mana/gangrene-indotort-midjourney (8).webp",
      items: [
        {
          title: "Erosion Tier 1 Affinity",
          description:
            "Accelerates the erosion of inanimate matter the spell comes into contact with. Higher potencies can melt metal extremely quickly.",
        },
        {
          title: "Erosion Tier 2 Affinity",
          description:
            "Biomatter that makes contact with the spell is decayed at an alarming rate.",
        },
        {
          title: "Erosion Tier 3 Affinity",
          description:
            "Micro-molecules in the affected area are annihilated. Likelihood of success is dependent on spell potency.",
        },
      ],
    },
    {
      title: "Vorpal",
      image: "Images/Mana/braindestruct-indotort-midjourney (7).webp",
      items: [
        {
          title: "Vorpal Tier 1 Affinity",
          description:
            "Crystallization effect. Edges are thinner than any matter known to man and cuts through targets at a sub-molecular level.",
        },
        {
          title: "Vorpal Tier 2 Affinity",
          description:
            "Ability to drain light. Maximum potency spell bases will have perfect light drain.",
        },
        {
          title: "Vorpal Tier 3 Affinity",
          description:
            "Attacks intelligence systems in close proximity by introducing entropy into their systems, including artificial intelligence and human minds.",
        },
      ],
    },
  ],
  // Column 2 data, grouped
  [
    {
      title: "Thermal",
      image: "Images/Mana/ironslab-indotort-midjourney.webp",
      items: [
        {
          title: "Thermal Tier 1 Affinity",
          description:
            "Lengthens the waveform of the spell base, creating a slight scorching effect while also increasing the velocity significantly.",
        },
        {
          title: "Thermal Tier 2 Affinity",
          description:
            "Cryogenic affinity that rapidly reduces the temperature of affected targets.",
        },
        {
          title: "Thermal Tier 3 Affinity",
          description:
            "Adds a molten effect to the point where higher potency spell bases can melt through metal like butter.",
        },
      ],
    },
    {
      title: "Arc",
      image: "Images/Mana/robotsith-indotort-midjourney.webp",
      items: [
        {
          title: "Arc Tier 1 Affinity",
          description:
            "An electric affinity that adds an electric charge to the spell base.",
        },
        {
          title: "Arc Tier 2 Affinity",
          description:
            'Increases the "conductivity" of the target against further spells of the same or similar type.',
        },
        {
          title: "Arc Tier 3 Affinity",
          description:
            "All affinity effects applied on the target will chain to nearby targets. Radius of distribution is dependent on spell affinity.",
        },
      ],
    },
    {
      title: "Kinetic",
      image: "Images/Mana/murasaki-hana-blackhole-composite3.webp",
      items: [
        {
          title: "Kinetic Tier 1 Affinity",
          description:
            "Spell bases gain a denser mass as if made of solid matter. Middle potencies are equivalent to that of denser metal.",
        },
        {
          title: "Kinetic Tier 2 Affinity",
          description:
            "Adds a detonation effect that releases a shockwave with an explosion velocity dependent on the potency of the spell base.",
        },
        {
          title: "Kinetic Tier 3 Affinity",
          description:
            "Spell base warps gravity potential of targets. Higher potencies can cause gravitational pulls on nearby systems.",
        },
      ],
    },
  ],
  // Column 3 data, grouped
  [
    {
      title: "Resonance",
      image: "Images/Mana/bastien-grivet-gold-path-ld.webp",
      items: [
        {
          title: "Resonance Tier 1 Affinity",
          description:
            "Increases the operational integrity of the target's mana grid, as well as adjusted friction or increased flow.",
        },
        {
          title: "Resonance Tier 2 Affinity",
          description:
            "Provides a hardening effect on any affected targets, strengthening solid matter or increasing mass for more inertia.",
        },
        {
          title: "Resonance Tier 3 Affinity",
          description:
            "Rapidly restructures the integrity of matter it comes into contact with. Biomatter is healed.",
        },
      ],
    },
    {
      title: "Corruption",
      image: "Images/Mana/mitch-aseltine-garden-island-design-01-v4-ma.webp",
      items: [
        {
          title: "Corruption Tier 1 Affinity",
          description:
            "Adds a sticky effect to the spell base while also allowing other effects in the same spell base to spread easier.",
        },
        {
          title: "Corruption Tier 2 Affinity",
          description:
            "Spells leave a lingering effect in the area that is affected. Duration is dependent on the potency of the spell.",
        },
        {
          title: "Corruption Tier 3 Affinity",
          description:
            "Spells leave a homing effect on the intended target upon the time the spell is cast. Accuracy is dependent on the potency of the spell.",
        },
      ],
    },
    {
      title: "Retribution",
      image: "Images/Mana/stars by MC Escher.webp",
      items: [
        {
          title: "Retribution Tier 1 Affinity",
          description:
            "Adds the ability to set a timer on the spell base before executing. Higher potencies can delay a spell from casting for several hours.",
        },
        {
          title: "Retribution Tier 2 Affinity",
          description:
            "Affected targets are hastened. Maximum potency can hasten a target for up to twice normal speed for up to a minute.",
        },
        {
          title: "Retribution Tier 3 Affinity",
          description:
            "Affected areas are caught and slowed in a time stasis field. Higher potencies can effectively stop targets when coming into contact.",
        },
      ],
    },
  ],
];

const spellBases = [
  {
    name: "Dart",
    cost: 1,
    description:
      "A small bolt of concentrated mana that can be fired off for a medium distance while costing relatively little to cast, and can be casted rather quickly in succession.",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase",
  },
  {
    name: "Spray",
    cost: 1,
    description:
      "Sprays a somewhat condensed cloud of mana in a continuous stream. It's short ranged with a low velocity, but it is effective at what it hits.",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase",
  },
  {
    name: "Pulse",
    cost: 1,
    description:
      "Bursts a very concentrated short-ranged shockwave in a cone in front of you. Has a low cooldown and can be devastating to any targets in range.",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase",
  },
  {
    name: "Barricade",
    cost: 1,
    description:
      "Projects a rectangular barrier that can cover almost a whole side of your suit. While it has a high potency, it only deploys relatively close to you.",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase",
  },
  {
    name: "Pinch",
    cost: 1,
    description:
      "While it has low potency and almost non-existent raw effective power, this base is mostly used for carrying other spell bases to a range in almost an instant.",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase",
  },
  {
    name: "Self",
    cost: 1,
    description:
      "A somewhat mild small self-aura that encompasses only the volume of your suit. That said, it is also very simple to cast and lasts a long time.",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase",
  },
  {
    name: "Tether",
    cost: 2,
    description:
      "A short-ranged tether with high concentration. Its potency slightly increases the longer you remain directly attached to the target with this tether.",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase",
  },
  {
    name: "Mine",
    cost: 2,
    description:
      "Mines can only be casted a short distance, but will detonate into a large explosion after the duration expires or when in proximity to a designated target type.",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase",
  },
  {
    name: "Aura",
    cost: 2,
    description:
      "Radiate a mild aura from your suit that affects all targets indiscriminately. Has a wide affective radius, and it may or may not include yourself.",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase",
  },
  {
    name: "Flash",
    cost: 2,
    description:
      "Suddenly let out a bright flash of mana in a radius around you.",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase",
  },
  {
    name: "Crescent",
    cost: 2,
    description:
      "Shoot out a highly concentrated disc of mana that travels a moderate range. This is very helpful for precision work.",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase",
  },
  {
    name: "Arrow",
    cost: 2,
    description:
      "A moderately sized bolt of mana that travels a decent distance at a decent velocity. It is also popular to use as a medium for carrying other spell bases.",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase",
  },
  {
    name: "Beam",
    cost: 4,
    description:
      "A beam of concentrated mana that travels almost instantly and accurately to your target.",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase",
  },
  {
    name: "Bomb",
    cost: 4,
    description:
      "Fire off a large bomb that, while travels slowly, explodes in a very large and concentrated explosion.",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase",
  },
  {
    name: "Pillars",
    cost: 4,
    description:
      "Summon extremely thin pillars of very potent mana randomly around a moderate radius of yourself. Can be casted rather frequently, and the pillars somewhat prioritize valid",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase",
  },
  {
    name: "Cloud",
    cost: 4,
    description:
      "A slow-moving cloud that covers a very large radius that can travel a moderate distance, lingering for a very long while.",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase",
  },
  {
    name: "Spear",
    cost: 6,
    description:
      "Throw an extremely dense spear of mana that can pierce through multiple targets.",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase",
  },
  {
    name: "Swarm",
    cost: 6,
    description:
      "Burst forward a group of accelerated mana darts. While somewhat inaccurate, it can be casted almost continuously and devastates anything in its path.",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase",
  },
  {
    name: "Haze",
    cost: 6,
    description:
      "A mana bomb that has a mild-but-effective explosion with a very large radius which leaves behind a lingering dense cloud.",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase",
  },
  {
    name: "Barrier",
    cost: 6,
    description:
      "Summon wide barrier of potent mana that's large enough to cover you and your fireteam from one direction.",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase",
  },
  {
    name: "Overload",
    cost: 10,
    description:
      "Charge up to fire a wide, devastating beam of mana that travels a far distance in an instant.",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase",
  },
  {
    name: "Nova",
    cost: 10,
    description:
      "Cast a sudden explosion around yourself that engulfs a large area, which then lingers for awhile as a violent storm of mana.",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase",
  },
  {
    name: "Starfall",
    cost: 10,
    description:
      "Shoot a burst of eight beams of concentrated mana that can hone in on separate targets or hit the same target multiple times.",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase",
  },
  {
    name: "Radiance",
    cost: 10,
    description:
      "Radiate an aura of mana over an extremely large area from your suit, which lingers for a long time.",
    image: "https://placehold.co/100x100/ddeeff/ffffff?text=SpellBase",
  },
];

/**
 * Helper function to create and append a paragraph element.
 * @param {HTMLElement} parentElement - The parent element to append the paragraph to.
 * @param {string} textContent - The text content for the paragraph.
 */
function appendParagraph(parentElement, textContent) {
  const p = document.createElement("p");
  p.textContent = textContent;
  parentElement.appendChild(p);
}

function appendDropdown(parentElement, tier) {
  // Create a new div to wrap the dropdown and number input
  const controlGroup = document.createElement("div");

  // Create the dropdown menu (select element)
  const selectElement = document.createElement("select");
  //for crewData
  if (tier === 5) {
    selectElement.innerHTML = `
        <option value="x-1">x1</option>
        <option value="x-5">x5</option>
        <option value="x-10">x10</option>
        <option value="x-50">x50</option>
        <option value="x-100">x100</option>
        <option value="x-500">x500</option>
    `;
  }
  //for weaponData on ship
  else if (tier === 1) {
    selectElement.innerHTML = `
        <option value="point-defence">Point-Defence</option>
    `;
  } else if (tier < 4) {
    selectElement.innerHTML = `
        <option value="spinal">Spinal</option>
        <option value="broadside">Broadside</option>
    `;
  } else {
    selectElement.innerHTML = `
        <option value="spinal">Spinal</option>
    `;
  }
  selectElement.addEventListener("change", (event) => {
    console.log("Selected:", event.target.value);
    // You can add logic here to handle the selected value
  });

  // Create the number display span
  const numberSpan = document.createElement("span");
  numberSpan.textContent = "0"; // Initial number
  numberSpan.id = `num-${Date.now()}`; // Unique ID for each number span

  // Create the decrement button
  const decrementButton = document.createElement("button");
  decrementButton.textContent = "-";
  decrementButton.addEventListener("click", () => {
    let currentNum = parseInt(numberSpan.textContent);
    if (currentNum > 0) {
      // Prevent going below zero
      numberSpan.textContent = currentNum - 1;
    }
  });

  // Create the increment button
  const incrementButton = document.createElement("button");
  incrementButton.textContent = "+";
  /*incrementButton.classList.add(
        'btn-secondary', 'px-4', 'py-2', 'rounded-lg', 'font-bold', 'text-xl'
    );*/
  incrementButton.addEventListener("click", () => {
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

function appendGauge(
  parentElement,
  labelText,
  currentValue,
  maxValue = 10,
  filledColorClass = "filled",
  emptyColorClass = "",
  highlightIndices = []
) {
  // Create the main container for the gauge (label + cells)
  const gaugeContainer = document.createElement("span");
  gaugeContainer.classList.add("gauge-container");

  // Create the label element
  const label = document.createElement("div");
  label.textContent = labelText;
  label.classList.add("gauge-label");
  label.style.color = "white";
  gaugeContainer.appendChild(label);

  // Create the container for the gauge cells
  const cellsContainer = document.createElement("span");
  cellsContainer.classList.add("gauge-cells");

  // Create individual gauge cells
  for (let i = 0; i < maxValue; i++) {
    const cell = document.createElement("span");
    cell.classList.add("gauge-cell");

    // Check if the cell should be filled
    if (i < currentValue) {
      // Apply specific filled color based on cell index
      if (i >= 0 && i <= 2) {
        // Cells 1-3 (0-indexed: 0, 1, 2)
        cell.classList.add("filled-white");
      } else if (i >= 3 && i <= 5) {
        // Cells 4-6 (0-indexed: 3, 4, 5)
        cell.classList.add("filled-light-purple");
      } else if (i >= 6 && i <= 8) {
        // Cells 7-9 (0-indexed: 6, 7, 8)
        cell.classList.add("filled-dark-purple");
      } else if (i === 9) {
        // Cell 10 (0-indexed: 9)
        cell.classList.add("filled-light-red");
      }
    }
    cellsContainer.appendChild(cell);
  }
  gaugeContainer.appendChild(cellsContainer);
  parentElement.appendChild(gaugeContainer);
}

/**
 * for hull */
function populateDataToSection(dataArray, choicePrefix, sectionID, dataType) {
  const targetSection = document.getElementById(sectionID);

  if (!targetSection) {
    console.error(`Target section with ID "${sectionID}" not found.`);
    return;
  }

  if (!Array.isArray(dataArray)) {
    console.error(
      `Provided data for ${dataType} is not an array or does not exist.`
    );
    return;
  }

  // Check if the section already has population to prevent duplicate entries
  if (dataArray.length > 0) {
    const checkDiv = document.getElementById(
      `${choicePrefix}-${dataArray[0].name.replace(/\s/g, "-")}`
    );
    if (document.contains(checkDiv)) {
      return;
    }
  }

  dataArray.forEach((item) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("choice", "ship");
    newDiv.id = `${choicePrefix}-${item.name.replace(/\s/g, "-")}`;

    const newSpan = document.createElement("span");
    newDiv.appendChild(newSpan);

    // Image element - common to all
    const imgElement = document.createElement("img");
    imgElement.src =
      item.image || "https://placehold.co/100x100/eeeeee/ffffff?text=NoImage";
    imgElement.title = getImgName(item.image);
    newSpan.appendChild(imgElement); // Image added after newSpan

    // Title (name) - common to all
    const h3Element = document.createElement("h3");
    h3Element.style.marginTop = "0px";
    h3Element.style.marginBottom = "0px";
    h3Element.textContent = item.name || "No Name";
    newSpan.appendChild(h3Element);

    // Cost - common to most, with special handling for secondaryCost in weapons
    if (item.cost !== undefined) {
      const costP = document.createElement("p");
      costP.innerHTML = `Cost: ${
        typeof item.cost === "number"
          ? typeof formatterIntl !== "undefined"
            ? formatterIntl.format(item.cost)
            : item.cost
          : "N/A"
      }`;
      if (dataType === "weapon" && item.secondaryCost !== undefined) {
        costP.innerHTML += ` (${
          typeof item.secondaryCost === "number"
            ? typeof formatterIntl !== "undefined"
              ? formatterIntl.format(item.secondaryCost)
              : item.secondaryCost
            : "N/A"
        })`;
      }
      newSpan.appendChild(costP);
    }

    // Dynamic properties based on dataType
    switch (dataType) {
      case "hull":
        appendParagraph(newSpan, `Manufacturer: ${item.manufacturer || "N/A"}`);
        appendParagraph(newSpan, `Type: ${item.type || "N/A"}`);
        appendParagraph(newSpan, `Spinal Mounts: ${item.spinalMount || 0}`);
        appendParagraph(
          newSpan,
          `Broadside Mounts: ${item.broadsideMount || 0}`
        );
        appendParagraph(
          newSpan,
          `Point Defence Mounts: ${item.pointDefenceMount || 0}`
        );
        appendParagraph(newSpan, `Hangar Space: ${item.hangarSpace || 0}`);
        appendParagraph(newSpan, `Navigation: ${item.navigation || 0}/25`);
        appendParagraph(newSpan, `Hull Armor: ${item.hullArmor || 0}/25`);
        appendParagraph(
          newSpan,
          `Shield Strength: ${item.shieldStrength || 0}/25`
        );
        appendParagraph(newSpan, `Length: ${item.length || "N/A"}`);
        appendParagraph(newSpan, `Max Crew: ${item.maxCrew || 0}`);
        appendParagraph(newSpan, `Extra Rooms: ${item.extraRooms || 0}`);
        appendParagraph(newSpan, `Energy Use: ${item.energyUse || 0}`);
        break;
      case "shipAI":
        appendParagraph(newSpan, `Manufacturer: ${item.manufacturer || "N/A"}`);
        appendParagraph(newSpan, `Role: ${item.role || "N/A"}`);
        break;
      case "energy":
        if (item.type==='generation') {appendParagraph(newSpan, `Energy Output: ${item.energyOutput || "N/A"}`);}
        else {appendParagraph(newSpan, `Battery Capacity: ${item.energyOutput || "N/A"}`);}
        
        appendParagraph(
          newSpan,
          `Charge Duration: ${item.chargeDuration || "N/A"}`
        );
        break;
      case "shield":
        appendParagraph(
          newSpan,
          `Shield Strength: ${item.shieldStrength || "N/A"}`
        );
        break;
      case "mod":
        if (item.type === "command") {
          appendParagraph(
            newSpan,
            `Manufacturer: ${item.manufacturer || "N/A"}`
          );
          appendParagraph(
            newSpan,
            `Special Ability: ${item.specialAbility || "N/A"}`
          );
          appendParagraph(newSpan, `Cooldown: ${item.cooldown || "N/A"}`);
          appendParagraph(newSpan, `Range: ${item.range || "N/A"}`);
        } else if (item.type === "hull") {
          appendParagraph(
            newSpan,
            `Maximum Upgrades: ${item.maximumUpgrades || "N/A"}`
          );
          if (item.pointDefenceMounts !== undefined)
            appendParagraph(
              newSpan,
              `Point-Defence Mounts: +${item.pointDefenceMounts}`
            );
          if (item.broadsideTurretMounts !== undefined)
            appendParagraph(
              newSpan,
              `Broadside Turret Mounts: +${item.broadsideTurretMounts}`
            );
          if (item.spinalWeaponMounts !== undefined)
            appendParagraph(
              newSpan,
              `Spinal Weapon Mounts: +${item.spinalWeaponMounts}`
            );
          if (item.navigation !== undefined)
            appendParagraph(newSpan, `Navigation: +${item.navigation}`);
          if (item.hullArmor !== undefined)
            appendParagraph(newSpan, `Hull Armor: +${item.hullArmor}`);
          if (item.hangarSpace !== undefined)
            appendParagraph(newSpan, `Hangar Space: +${item.hangarSpace}`);
          if (item.shieldStrength !== undefined)
            appendParagraph(
              newSpan,
              `Shield Strength: +${item.shieldStrength}`
            );
          if (item.extraRooms !== undefined)
            appendParagraph(newSpan, `Extra Rooms: +${item.extraRooms}`);
        }
        break;
      case "industrial":
        appendParagraph(newSpan, `Module Type: ${item.moduleType || "N/A"}`);
        break;
      case "ewar":
        appendParagraph(newSpan, `Module Type: ${item.moduleType || "N/A"}`);
        appendParagraph(newSpan, `Range: ${item.range || "N/A"}`);
        break;
      case "room":
        appendParagraph(newSpan, `Type: ${item.type || "N/A"}`);
        if (item.consequences)
          appendParagraph(newSpan, `Consequences: ${item.consequences}`);
        break;
      case "weapon":
        if (item.tier === 2 || item.tier === 3) {
          appendDropdown(newSpan, item.tier); // Add the dropdown for weapon mounts
          appendDropdown(newSpan, item.tier);
        } else {
          appendDropdown(newSpan, item.tier);
        }
        appendGauge(newSpan, "Energy Use: ", 10); // Example gauge for energy use
        appendParagraph(newSpan, `Energy Use: ${item.energyUse || "N/A"}`);
        appendParagraph(newSpan, `Tier: ${item.tier || "N/A"}`);
        appendParagraph(
          newSpan,
          `Damage Per Volley: ${item.damagePerVolley || "N/A"}`
        );
        appendParagraph(newSpan, `Rate of Fire: ${item.rateOfFire || "N/A"}`);
        appendParagraph(newSpan, `Accuracy: ${item.accuracy || "N/A"}`);
        appendParagraph(newSpan, `Range: ${item.range || "N/A"}`);
        appendParagraph(
          newSpan,
          `Projectile Velocity: ${item.projectileVelocity || "N/A"}`
        );
        appendParagraph(newSpan, `Tracking: ${item.tracking || "N/A"}`);
        appendParagraph(newSpan, `Weapon Types: ${item.weaponTypes || "N/A"}`);
        break;
      case "drone":
        appendParagraph(
          newSpan,
          `Hangar Space Use: ${item.hangarSpaceUse || "N/A"}`
        );
        appendParagraph(
          newSpan,
          `Spinal Weapon Mounts: ${item.spinalWeaponMounts || 0}`
        );
        appendParagraph(
          newSpan,
          `Broadside Turret Mounts: ${item.broadsideTurrentMounts || 0}`
        );
        appendParagraph(
          newSpan,
          `Point-Defence Mounts: ${item.pointDefenceMounts || 0}`
        );
        appendParagraph(newSpan, `Navigation: ${item.navigation || 0}`);
        appendParagraph(newSpan, `Hull Armour: ${item.hullArmour || 0}`);
        appendParagraph(newSpan, `Shield Defence: ${item.shieldDefence || 0}`);
        appendParagraph(newSpan, `Length: ${item.length || "N/A"}`);
        break;
      default:
        console.warn(
          `Unknown dataType: ${dataType}. No specific properties rendered.`
        );
    }

    // Description - common to all
    const descriptionP = document.createElement("p");
    descriptionP.innerHTML = item.description || "No description available.";
    newSpan.appendChild(descriptionP);

    targetSection.before(newDiv); // Append to the target section
  });
}

function populateCatalystToSection(choiceArray, choicePrefix, sectionID) {
  //name, cost, description, image
  const targetSection = document.getElementById(sectionID);
  choiceArray.forEach((item) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("choice", "ship");
    newDiv.id = item.name;

    const newSpan = document.createElement("span");
    newDiv.appendChild(newSpan);

    // Image element - common to all
    const imgElement = document.createElement("img");
    imgElement.src =
      item.image || "https://placehold.co/100x100/eeeeee/ffffff?text=NoImage";
    imgElement.alt = `${item.name} image`;
    newSpan.appendChild(imgElement); // Image added after newSpan

    // Title (name) - common to all
    const h3Element = document.createElement("h3");
    h3Element.style.marginTop = "0px";
    h3Element.style.marginBottom = "0px";
    h3Element.textContent = item.name || "No Name";
    newSpan.appendChild(h3Element);

    const costP = document.createElement("p");
    costP.innerHTML = `Cost: ${item.cost}`;
    newSpan.appendChild(costP);

    const descriptionP = document.createElement("p");
    descriptionP.innerHTML = item.description || "No description available.";
    newSpan.appendChild(descriptionP);

    targetSection.before(newDiv); // Append to the target section
  });
}

const formatterIntl = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 0, // Ensure no decimal places if not needed
  maximumFractionDigits: 0, // Allow up to 2 decimal places if present
});

function appendList1(newUl, content1, content2) {
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  li1.style = "margin-left: 10px;";
  li2.style = "margin-left: 10px;";
  li1.textContent = content1;
  li2.textContent = content2;
  newUl.appendChild(li1);
  newUl.appendChild(li2);
}

/**
 * Dynamically generates an affinity table with grouped items within a specified container.
 *
 * @param {Array<Array<Object>>} data An array of columns, where each column is an array of affinity groups.
 * @param {Array<string>} headers An array of strings for the column headers.
 * @param {string} containerID The ID of the HTML element to render the table inside.
 */
function createAffinityTable(data, headers, containerID) {
  const container = document.getElementById(containerID);
  if (!container) {
    console.error(`Container with ID "${containerID}" not found.`);
    return;
  }

  // Clear any existing content in the container
  container.innerHTML = "";

  // Create the main table container
  const tableContainer = document.createElement("div");
  tableContainer.classList.add("affinity-table-container");

  // Create and append the column headers
  headers.forEach((headerText) => {
    const headerDiv = document.createElement("div");
    headerDiv.classList.add("column-header");
    headerDiv.textContent = headerText;
    tableContainer.appendChild(headerDiv);
  });

  // Iterate over each column of data
  data.forEach((column, columnIndex) => {
    const affinityCard = document.createElement("div");
    affinityCard.classList.add("affinity-card");

    // Iterate over each group within the column
    column.forEach((group) => {
      // Create the main affinity group container
      const affinityGroup = document.createElement("div");
      affinityGroup.classList.add("affinity-group");

      // Create the single large image element for the group
      const imgElement = document.createElement("img");
      imgElement.src =
        group.image ||
        `https://placehold.co/80x280/2f3a4b/9333ea?text=${group.title}`;
      imgElement.title = getImgName(group.image);
      imgElement.classList.add("affinity-group-image");
      affinityGroup.appendChild(imgElement);

      // Create the content container for the three items
      const groupContent = document.createElement("div");
      groupContent.classList.add("affinity-group-content");

      // Iterate over each item within the group
      group.items.forEach((item) => {
        const affinityItem = document.createElement("div");
        affinityItem.classList.add("affinity-item");

        const h3Element = document.createElement("h3");
        h3Element.textContent = item.title;
        affinityItem.appendChild(h3Element);

        const pElement = document.createElement("p");
        pElement.textContent = item.description;
        affinityItem.appendChild(pElement);

        // Add a click event listener to each individual item
        affinityItem.addEventListener("click", () => {
          // Check if the item is already selected
          if (affinityItem.classList.contains("selected")) {
            // If it is, deselect it
            affinityItem.classList.remove("selected");
            console.log(`${item.title} has been deselected.`);
          } else {
            // If not, find all items within the same affinity group and deselect them
            const parentGroup = affinityItem.closest(".affinity-group");
            parentGroup.querySelectorAll(".affinity-item").forEach((el) => {
              el.classList.remove("selected");
            });

            // Add the 'selected' class to the clicked item
            affinityItem.classList.add("selected");
            console.log(`${item.title} has been selected.`);
          }
        });

        groupContent.appendChild(affinityItem);
      });

      // Append the content to the group and the group to the card
      affinityGroup.appendChild(groupContent);
      affinityCard.appendChild(affinityGroup);
    });
    tableContainer.appendChild(affinityCard);
  });

  // Append the entire table to the specified container
  container.before(tableContainer);
}
