export {
  switchChoose, handleChoiceSkills, handleChoiceRigs, handleChoiceVehicle, handleChoiceCrew,
  handleChoiceGun, getImgName, updateSummary,
};
import { formatterIntl, catalyst, spellBases } from "/stardustCYOA/Script/manaData.js";
import { titles, skills, } from "/stardustCYOA/Script/choiceData.js";
import { crew } from "/stardustCYOA/Script/crewData.js";
import { guns, generateStatBar } from "/stardustCYOA/Script/equipmentData.js";
import { sponsorMap } from "/stardustCYOA/Script/choiceData.js";

function getImgName(url) {
  // Use the URL object to correctly parse the pathname
  // Get the part of the path after the last slash, which is the filename.
  const filename = url.substring(url.lastIndexOf('/') + 1);
  // Find the last dot in the filename to determine the extension.
  const lastDotIndex = filename.lastIndexOf('.');
  // If a dot is found, return the substring before it. Otherwise, return the full filename.
  return lastDotIndex !== -1 ? filename.substring(0, lastDotIndex) : filename;
}

function handleChoice(section, chosenChoice, creditChange, maxChoices) {
  //passthru section, the choice selected, the credit change, and maximum amount of choices
  const activeChoices = section.querySelectorAll(".choice.active"); //check how many choices are active
  const isChosenActive = chosenChoice.classList.contains("active");
  if (isChosenActive) {
    // If the chosen choice is already active, deactivate it (deselect)
    chosenChoice.classList.toggle("active");
    player.credits -= creditChange; // Remove credits

    //remove choice
    const index = player.choices.indexOf(chosenChoice.id);
    if (index !== -1) {
      player.choices.splice(index, 1);
    }
    document.getElementById("credits-display").innerHTML =
      `Credits: ` + formatterIntl.format(player.credits);
  } else {
    // If the chosen choice is not active, try to activate it (select)
    if (activeChoices.length < maxChoices) {
      //as long as the num of active choices are less than allowed active
      chosenChoice.classList.toggle("active"); //you may toggle the selected choice to be active
      player.credits += creditChange; // and Add credits
      player.choices.push(chosenChoice.id);
      document.getElementById("credits-display").innerHTML =
        `Credits: ` + formatterIntl.format(player.credits);
    }
  }
}

function handleChoicePos(section, chosenChoice, creditChange, maxChoices) {
  //passthru section, the choice selected, the credit change, and maximum amount of choices
  const activeChoices = section.querySelectorAll(
    "div.section-startingPos.active"
  ); //check how many choices are active
  const isChosenActive = chosenChoice.classList.contains("active");
  if (isChosenActive) {
    // If the chosen choice is already active, deactivate it (deselect)
    chosenChoice.classList.toggle("active");
    player.credits -= creditChange; // Remove credits

    //remove choice
    const index = player.choices.indexOf(chosenChoice.id);
    if (index !== -1) {
      player.choices.splice(index, 1);
    }
    document.getElementById("credits-display").innerHTML =
      `Credits: ` + formatterIntl.format(player.credits);
  } else {
    // If the chosen choice is not active, try to activate it (select)
    if (activeChoices.length < maxChoices) {
      //as long as the num of active choices are less than allowed active
      chosenChoice.classList.toggle("active"); //you may toggle the selected choice to be active
      player.credits += creditChange; // and Add credits
      player.choices.push(chosenChoice.id);
      document.getElementById("credits-display").innerHTML =
        `Credits: ` + formatterIntl.format(player.credits);
    }
  }
}

function handleChoiceSkills(section, chosenChoice, creditChange, chosenSkill) {
  //passthru section, the choice selected, the credit change, and maximum amount of choices
  const activeChoices = section.querySelectorAll("div.section-skills.active"); //check how many choices are active
  const isChosenActive = chosenChoice.classList.contains("active");
  let isPrereqActive = false;
  if (isChosenActive) {
    // If the chosen choice is already active, deactivate it (deselect)
    activeChoices.forEach((choice) => {
      let tempSkill = skills.find((skill) => skill.id === choice.id);
      if (tempSkill.prerequisites.includes(chosenSkill.id)) {
        isPrereqActive = true;
        alert('This skill is an active pre-requisite! Deactivate latest skill first!');
        return;
      }
    });
    if (isPrereqActive === false) {
      chosenChoice.classList.remove("active");
      if (player.choices.includes('choose-civillian')) {
        player.credits -= (creditChange / 2);
      } else {
        player.credits -= creditChange; // Remove credits
      }

      //remove choice
      const index = player.skills.indexOf(chosenChoice.id);
      if (index !== -1) {
        player.skills.splice(index, 1);
      }
      document.getElementById("credits-display").innerHTML =
        `Credits: ` + formatterIntl.format(player.credits);
    }
  } else {
    //check for pre-requisities, if there are pre-requisities
    if (chosenSkill.prerequisites.length > 0) {
      let fulfilled = 0; // Changed from const to let because its value is modified
      for (let i = 0; i < chosenSkill.prerequisites.length; i++) {
        // Changed length() to length

        activeChoices.forEach((choice) => {
          // Corrected forEach syntax
          if (choice.id === chosenSkill.prerequisites[i]) {
            // Added missing if condition
            fulfilled += 1;
          }
        });
      }

      if (fulfilled === chosenSkill.prerequisites.length) {
        chosenChoice.classList.toggle("active"); //you may toggle the selected choice to be active
        if (player.choices.includes('choose-civillian')) {
          player.credits += (creditChange / 2);
        } else {
          player.credits += creditChange; // Remove credits
        }
        player.skills.push(chosenChoice.id);
        document.getElementById("credits-display").innerHTML =
          `Credits: ` + formatterIntl.format(player.credits);
      } else {
        return;
      }
    } else {
      chosenChoice.classList.toggle("active"); //you may toggle the selected choice to be active
      if (player.choices.includes('choose-civillian')) {
        player.credits += (creditChange / 2);
      } else {
        player.credits += creditChange; // Remove credits
      }
      player.skills.push(chosenChoice.id);
      document.getElementById("credits-display").innerHTML =
        `Credits: ` + formatterIntl.format(player.credits);
    }
  }
}
function handleChoiceGun(chosenChoice) {
  const isChosenActive = chosenChoice.classList.contains("active");

  const chosenGun = guns.find(gun => gun.name === chosenChoice.id);

  if (isChosenActive) {
    // If the chosen choice is already active, deactivate it (deselect)
    chosenChoice.classList.remove("active");
    player.credits += chosenGun.cost;
    player.equipmentLevel -= chosenGun.equipmentLevel;
    document.getElementById("credits-display").innerHTML = `Credits: ` + formatterIntl.format(player.credits);

    //remove choice
    const index = player.gear.indexOf(chosenGun);
    if (index !== -1) {
      player.gear.splice(index, 1);
    }
  } else {
    chosenChoice.classList.add("active");
    player.credits -= chosenGun.cost;
    player.equipmentLevel += chosenGun.equipmentLevel;
    document.getElementById("credits-display").innerHTML = `Credits: ` + formatterIntl.format(player.credits);
    player.gear.push(chosenGun);
  }

}
function handleChoiceRigs(chosenChoice, creditChange, rigType) {
  //passthru section, the choice selected, the credit change, and maximum amount of choices
  //const activeChoices = section.querySelectorAll(".rigs"); //check how many choices are active
  const isChosenActive = chosenChoice.classList.contains("active");
  const whatSlot = `${rigType}Slot`;
  if (isChosenActive) {
    // If the chosen choice is already active, deactivate it (deselect)
    chosenChoice.classList.remove("active");

    player.frame[whatSlot] += creditChange; // player here = player.frame   

    //remove choice
    const index = player.frame.choices.indexOf(chosenChoice.id);
    if (index !== -1) {
      player.frame.choices.splice(index, 1);
    }

    //document.getElementById("credits-display").innerHTML = `Credits: ` + formatterIntl.format(player.credits);
  } else if (player.frame[whatSlot] > 0) {

    //as long as the num of active choices are less than allowed active
    chosenChoice.classList.add("active"); //you may toggle the selected choice to be active
    player.frame[whatSlot] -= creditChange; // and Add credits
    player.frame.choices.push(chosenChoice.id);
    //document.getElementById("credits-display").innerHTML = `Credits: ` + formatterIntl.format(player.credits);
  }
}

function handleChoiceVehicle(chosenChoice, creditChange, vehicles) {
  //passthru section, the choice selected, the credit change, and maximum amount of choices
  //const activeChoices = section.querySelectorAll(".rigs"); //check how many choices are active
  const isChosenActive = chosenChoice.classList.contains("active");
  const chosenVehicle = vehicles.find(object => object.id === chosenChoice.id);

  if (isChosenActive) {
    // If the chosen choice is already active, deactivate it (deselect)
    chosenChoice.classList.remove("active");

    if (creditChange === 0) {
      player.credits += chosenVehicle.cost;
      player.equipmentLevel += 1;
      document.getElementById("credits-display").innerHTML = `Credits: ` + formatterIntl.format(player.credits);
    }
    else { player.frame.vehicleSlot += creditChange; }

    //remove choice
    const index = player.frame.choices.indexOf(chosenChoice.id);
    if (index !== -1) {
      player.frame.choices.splice(index, 1);
    }

    //
  } else if (creditChange === 0 || player.frame.vehicleSlot > 0) { // || 
    //as long as the num of active choices are less than allowed active
    chosenChoice.classList.add("active"); //you may toggle the selected choice to be active
    if (creditChange === 0) {
      player.credits -= chosenVehicle.cost;
      player.equipmentLevel -= 1;
      document.getElementById("credits-display").innerHTML = `Credits: ` + formatterIntl.format(player.credits);
    }
    else { player.frame.vehicleSlot -= creditChange; }
    player.frame.choices.push(chosenChoice.id);
    //document.getElementById("credits-display").innerHTML = `Credits: ` + formatterIntl.format(player.credits);
  }
}

function handleChoiceCrew(chosenChoice) {
  const isChosenActive = chosenChoice.classList.contains("active");

  const chosenCrew = crew.find(employee => employee.title === chosenChoice.id);

  let crewPlace1 = {
    title: chosenCrew.title,
    quantity: 1,
  }

  if (isChosenActive) {
    // If the chosen choice is already active, deactivate it (deselect)
    chosenChoice.classList.remove("active");
    //Talon sponsor benefit
    if (player.choices.includes('choose-talons')) {
      if (chosenCrew.alignment === 'Federation' || chosenCrew.alignment === 'Blackhawk Elite') {
        player.credits += chosenCrew.cost;
      } else {
        player.credits += (chosenCrew.cost - 1000000);
      }
    } else {
      player.credits += chosenCrew.cost;
    }
    player.crewNum += 1;
    document.getElementById("credits-display").innerHTML = `Credits: ` + formatterIntl.format(player.credits);
    document.getElementById("crew-display").innerHTML = `Required Crew: ` + formatterIntl.format(player.crewNum);

    //remove choice
    const index = player.crew.findIndex(ac => ac.title === chosenCrew.title);
    player.crew.splice(index, 1);

  } else {
    chosenChoice.classList.add("active");
    //Talon sponsor benefit
    if (player.choices.includes('choose-talons')) {
      if (chosenCrew.alignment === 'Federation' || chosenCrew.alignment === 'Blackhawk Elite') {
        player.credits -= chosenCrew.cost;
      } else {
        player.credits -= (chosenCrew.cost - 1000000);
      }
    } else {
      player.credits -= chosenCrew.cost;
    }
    player.crewNum -= 1;
    document.getElementById("credits-display").innerHTML = `Credits: ` + formatterIntl.format(player.credits);
    document.getElementById("crew-display").innerHTML = `Required Crew: ` + formatterIntl.format(player.crewNum);
    player.crew.push(crewPlace1);
  }
}

// Add this function to switchChoose.js
function handleEWar(chosenChoice, creditChange) {
  const isChosenActive = chosenChoice.classList.contains("active");
  const parentContainer = chosenChoice.closest('.p-frame') || chosenChoice.closest('.choice');

  // Find all E-War choices in the same category/container
  const sameCategoryEWar = parentContainer.querySelectorAll('.choice.ewar');

  if (isChosenActive) {
    // If already active, deactivate it
    chosenChoice.classList.remove("active");
    if (player.frame.name === 'Imperator') {
      if (player.frame.upgrade === 'frame-upgrade-monsoon') {
        if (chosenChoice.classList.contains('emissions')) {
          player.frame.frameIntegrity += (creditChange * 0.5);
        } else {
          player.frame.frameIntegrity += (creditChange * 0.75);
        }
      } else {
        if (chosenChoice.classList.contains('digital')) {
          player.frame.frameIntegrity += (creditChange * 0.5);
        } else {
          player.frame.frameIntegrity += (creditChange * 0.75);
        }
      }
    }

    // Remove choice from frame choices
    const index = player.frame.choices.indexOf(chosenChoice.id);
    if (index !== -1) {
      player.frame.choices.splice(index, 1);
    }
  } else {
    // Activate the chosen E-War
    chosenChoice.classList.add("active");
    if (player.frame.name === 'Imperator') {
      if (player.frame.upgrade === 'frame-upgrade-monsoon') {
        if (chosenChoice.classList.contains('emissions')) {
          player.frame.frameIntegrity -= (creditChange * 0.5);
        } else {
          player.frame.frameIntegrity -= (creditChange * 0.75);
        }
      } else {
        if (chosenChoice.classList.contains('digital')) {
          player.frame.frameIntegrity -= (creditChange * 0.5);
        } else {
          player.frame.frameIntegrity -= (creditChange * 0.75);
        }
      }
    } else {
      player.frame.frameIntegrity -= creditChange;
    } // Deduct integrity
    player.frame.choices.push(chosenChoice.id);
  }

  // Update the frame integrity display
  document.getElementById("frameCredits-display").innerHTML =
    `Frame Resources: ` + formatterIntl.format(player.frame.frameIntegrity);
}

function handleSpells(chosenChoice, creditChange) {
  const isChosenActive = chosenChoice.classList.contains("active");
  const parentContainer = chosenChoice.closest('.spell');

  // Find all spell choices in the same category/container
  const sameCategorySpells = parentContainer.querySelectorAll('.choice.spell');

  if (isChosenActive) {
    // If already active, deactivate it
    chosenChoice.classList.remove("active");
    if (player.choices.includes('choose-gazers')) {
      player.frame.frameIntegrity += 0;
    } else {
      player.frame.frameIntegrity += creditChange;
    } // Refund integrity

    // Remove choice from frame choices
    const index = player.frame.choices.indexOf(chosenChoice.id);
    if (index !== -1) {
      player.frame.choices.splice(index, 1);
    }
  } else {
    // Activate the chosen spell
    chosenChoice.classList.add("active");
    if (player.choices.includes('choose-gazers')) {
      player.frame.frameIntegrity -= 0;
    } else {
      player.frame.frameIntegrity -= creditChange; // Deduct integrity
    }
    player.frame.choices.push(chosenChoice.id);
  }

  // Update the frame integrity display
  document.getElementById("frameCredits-display").innerHTML =
    `Frame Resources: ` + formatterIntl.format(player.frame.frameIntegrity);
}

function handleAffinity(id, choiceElement) { //handle affinity
  const isChosenActive = choiceElement.classList.contains("active");
  let allowAffinity = false;
  if (player.frame.choices.includes('Base Catalyst: Arm Blade')) {
    switch (id) {
      case "Void Tier 1 Affinity":
      case "Erosion Tier 1 Affinity":
      case "Vorpal Tier 1 Affinity":
      case "Thermal Tier 1 Affinity":
      case "Arc Tier 1 Affinity":
      case "Kinetic Tier 1 Affinity":
      case "Resonance Tier 1 Affinity":
      case "Corruption Tier 1 Affinity":
      case "Retribution Tier 1 Affinity":
        allowAffinity = true;
        break;
    }
  }
  if (player.frame.choices.includes('Paralogical Tier 2 Casting')) {
    switch (id) {
      case "Void Tier 2 Affinity":
      case "Erosion Tier 2 Affinity":
      case "Vorpal Tier 2 Affinity":
        allowAffinity = true;
        break;
    }
  }
  if (player.frame.choices.includes('Elemental Tier 2 Casting')) {
    switch (id) {
      case "Thermal Tier 2 Affinity":
      case "Arc Tier 2 Affinity":
      case "Kinetic Tier 2 Affinity":
        allowAffinity = true;
        break;
    }
  }
  if (player.frame.choices.includes('Anticausal Tier 2 Casting')) {
    switch (id) {
      case "Resonance Tier 2 Affinity":
      case "Corruption Tier 2 Affinity":
      case "Retribution Tier 2 Affinity":
        allowAffinity = true;
        break;
    }
  }
  if (player.frame.choices.includes('Paralogical Tier 3 Casting')) {
    switch (id) {
      case "Void Tier 3 Affinity":
      case "Erosion Tier 3 Affinity":
      case "Vorpal Tier 3 Affinity":
        allowAffinity = true;
        break;
    }
  }
  if (player.frame.choices.includes('Elemental Tier 3 Casting')) {
    switch (id) {
      case "Thermal Tier 3 Affinity":
      case "Arc Tier 3 Affinity":
      case "Kinetic Tier 3 Affinity":
        allowAffinity = true;
        break;
    }
  }
  if (player.frame.choices.includes('Anticausal Tier 3 Casting')) {
    switch (id) {
      case "Resonance Tier 3 Affinity":
      case "Corruption Tier 3 Affinity":
      case "Retribution Tier 3 Affinity":
        allowAffinity = true;
        break;
    }
  }

  console.log(allowAffinity);

  if (isChosenActive) {
    choiceElement.classList.remove('active');
    const index = player.frame.choices.indexOf(choiceElement.id);
    if (index !== -1) {
      player.frame.choices.splice(index, 1);
    }
  } else if (allowAffinity) {
    choiceElement.classList.add("active");
    player.frame.choices.push(choiceElement.id);
  } else {
    choiceElement.classList.remove("active");
  }
}

function handleCatalyst(chosenChoice, creditChange) {
  const isChosenActive = chosenChoice.classList.contains("active");
  const parentContainer = chosenChoice.closest('.catalyst');

  if (isChosenActive) {
    // If already active, deactivate it
    chosenChoice.classList.remove("active");
    // Refund integrity
    if (player.frame.upgrade === 'frame-upgrade-seraph') {
      player.frame.frameIntegrity += (creditChange - 1);
    } else {
      player.frame.frameIntegrity += creditChange;
    }

    // Remove choice from frame choices
    const index = player.frame.choices.indexOf(chosenChoice.id);
    if (index !== -1) {
      player.frame.choices.splice(index, 1);
    }
  } else {
    // Activate the chosen spell
    chosenChoice.classList.add("active");
    if (player.frame.upgrade === 'frame-upgrade-seraph') {
      player.frame.frameIntegrity -= (creditChange - 1); // Deduct integrity
    } else {
      player.frame.frameIntegrity -= creditChange;
    }
    player.frame.choices.push(chosenChoice.id);
  }

  // Update the frame integrity display
  document.getElementById("frameCredits-display").innerHTML =
    `Frame Resources: ` + formatterIntl.format(player.frame.frameIntegrity);
}


function switchChoose(
  id,
  choiceElement,
  sectionToToggle,
  originToggleArray,
  player
) {
  //for titles
  const chosenTitle = titles.find((title) => title.id === id);
  let titleCredits = 0;
  if (chosenTitle) {
    if (chosenTitle.credits !== undefined) {
      titleCredits = chosenTitle.credits;
    }
  }

  //for skills
  const chosenSkill = skills.find((skill) => skill.id === id);

  let skillCredits = 0;
  if (chosenSkill) {
    if (chosenSkill.credits !== undefined) {
      skillCredits = chosenSkill.credits;
    }
  }

  switch (id) {
    case "choice-lore":
      choiceElement.classList.toggle("active");
      sectionToToggle.classList.toggle("visible");
      break;
    case "choice-you":
      choiceElement.classList.toggle("active");
      sectionToToggle.classList.toggle("visible");
      break;
    case "choice-fleet":
      choiceElement.classList.toggle("active");
      sectionToToggle.classList.toggle("visible");
      break;
    case "choice-crew":
      choiceElement.classList.toggle("active");
      sectionToToggle.classList.toggle("visible");
      break;
    case "choice-contracts":
      //placeholder
      break;
    case "choice-battle":
      //placeholder
      break;
    case "choice-moneysource":
      choiceElement.classList.toggle("active");
      sectionToToggle.classList.toggle("visible");
      break;
    case "choice-origin":
      choiceElement.classList.toggle("active");
      sectionToToggle.classList.toggle("visible");
      originToggleArray.forEach((origin) => {
        const elmen = document.getElementById(origin);
        elmen.classList.toggle("visible");
      });
      break;
    case "choice-titles":
      choiceElement.classList.toggle("active");
      sectionToToggle.classList.toggle("visible");
      break;
    case "choice-hull":
      choiceElement.classList.toggle("active");
      sectionToToggle.classList.toggle("visible");
      break;

    //make player choose ONLY 1 MONEYSOURCE
    case "choose-gambling":
      handleChoice(sectionToToggle, choiceElement, 100000000, 1);
      break;
    case "choose-theft":
      handleChoice(sectionToToggle, choiceElement, 200000000, 1);
      break;
    case "choose-invest":
      handleChoice(sectionToToggle, choiceElement, 250000000, 1);
      break;
    case "choose-retired":
      handleChoice(sectionToToggle, choiceElement, 150000000, 1);
      break;
    case "choose-sponsorScam":
      handleChoice(sectionToToggle, choiceElement, 0, 1);
      break;

    //make player choose only 1 sponsor, unless sponsorScam
    case "choice-sponsor":
      choiceElement.classList.toggle("active");
      sectionToToggle.classList.toggle("visible");
      break;

    case "choose-navy":
      if (player.choices.includes("choose-sponsorScam")) {
        handleChoice(sectionToToggle, choiceElement, 311000000, 2);
      } else {
        handleChoice(sectionToToggle, choiceElement, 311000000, 1);
      }
      break;
    case "choose-seal":
      if (player.choices.includes("choose-sponsorScam")) {
        handleChoice(sectionToToggle, choiceElement, 536200000, 2);
      } else {
        handleChoice(sectionToToggle, choiceElement, 536200000, 1);
      }

      break;
    case "choose-civillian":
      if (player.choices.includes("choose-sponsorScam")) {
        handleChoice(sectionToToggle, choiceElement, 300000000, 2);
      } else {
        handleChoice(sectionToToggle, choiceElement, 300000000, 1);
      }
      break;
    case "choose-blackhawk":
      if (player.choices.includes("choose-sponsorScam")) {
        handleChoice(sectionToToggle, choiceElement, 500000000, 2);
      } else {
        handleChoice(sectionToToggle, choiceElement, 500000000, 1);
      }
      break;
    case "choose-pirates":
      if (player.choices.includes("choose-sponsorScam")) {
        handleChoice(sectionToToggle, choiceElement, 333000000, 2);
      } else {
        handleChoice(sectionToToggle, choiceElement, 333000000, 1);
      }
      break;
    case "choose-talons":
      if (player.choices.includes("choose-sponsorScam")) {
        handleChoice(sectionToToggle, choiceElement, 777000000, 2);
      } else {
        handleChoice(sectionToToggle, choiceElement, 777000000, 1);
      }
      break;
    case "choose-luos":
      if (player.choices.includes("choose-sponsorScam")) {
        handleChoice(sectionToToggle, choiceElement, 1000000000, 2);
      } else {
        handleChoice(sectionToToggle, choiceElement, 1000000000, 1);
      }
      break;
    case "choose-dustkeepers":
      if (player.choices.includes("choose-sponsorScam")) {
        handleChoice(sectionToToggle, choiceElement, 640000000, 2);
      } else {
        handleChoice(sectionToToggle, choiceElement, 640000000, 1);
      }
      break;
    case "choose-gazers":
      if (player.choices.includes("choose-sponsorScam")) {
        handleChoice(sectionToToggle, choiceElement, 0, 2);
      } else {
        handleChoice(sectionToToggle, choiceElement, 0, 1);
      }
      break;
    case "choose-io":
      if (player.choices.includes("choose-sponsorScam")) {
        handleChoice(sectionToToggle, choiceElement, 400000000, 2);
      } else {
        handleChoice(sectionToToggle, choiceElement, 400000000, 1);
      }
      break;
    case "choose-hammerhead":
      if (player.choices.includes("choose-sponsorScam")) {
        handleChoice(sectionToToggle, choiceElement, 800000000, 2);
      } else {
        handleChoice(sectionToToggle, choiceElement, 800000000, 1);
      }
      break;
    case "choose-beatrice":
      if (player.choices.includes("choose-sponsorScam")) {
        handleChoice(sectionToToggle, choiceElement, 320000000, 2);
      } else {
        handleChoice(sectionToToggle, choiceElement, 320000000, 1);
      }
      break;
    case "choose-noSponsor":
      if (player.choices.includes("choose-sponsorScam")) {
        handleChoice(sectionToToggle, choiceElement, 150000000, 2);
      } else {
        handleChoice(sectionToToggle, choiceElement, 150000000, 1);
      }
      break;
    case "choose-laporte":
    case "choose-dellsin":
      handleChoicePos(sectionToToggle, choiceElement, -25000000, 1);
      break;
    case "choose-capitolus":
    case "choose-arcadia":
      handleChoicePos(sectionToToggle, choiceElement, 0, 1);
      break;

    case "choose-new-terra":
      const strings1 = ["choose-pirates", "choose-luos", "choose-talons"];
      if (strings1.some((str) => player.choices.includes(str))) {
        alert("hostile to Federation!!");
      } else {
        handleChoicePos(sectionToToggle, choiceElement, -50000000, 1);
      }
      break;

    case "choose-archer":
      const strings2 = ["choose-pirates", "choose-luos", "choose-talons"];
      if (strings2.some((str) => player.choices.includes(str))) {
        handleChoicePos(sectionToToggle, choiceElement, 50000000, 1);
      }
      break;
    case "choose-ysgard":
      handleChoicePos(sectionToToggle, choiceElement, -50000000, 1);
      break;
    case "choose-wayward":
    case "choose-ragnarok":
    case "choose-valhalla":
    case "choose-talon-prime":
    case "choose-zona":
    case "choose-ten-cred":
    case "choose-las-stop":
    case "choose-detritus":
    case "choose-exodus":
    case "choose-haven":
    case "choose-olympus":
    case "choose-erebus":
    case "choose-abyss":
    case "choose-star-dust":
    case "choose-br-5rb":
    case "choose-dl7-2e":
    case "choose-crown-forge":
    case "choose-clover-region":
    case "choose-mjolnir":
    case "choose-prion":
    case "choose-bastion":
    case "choose-synchordia":
      handleChoicePos(sectionToToggle, choiceElement, 50000000, 1);
      break;
    case "title-rogue":
      handleChoice(sectionToToggle, choiceElement, titleCredits, 2);
      break;
    case "title-whisperer":
      handleChoice(sectionToToggle, choiceElement, titleCredits, 2);
      break;
    case "title-old-timer":
      handleChoice(sectionToToggle, choiceElement, titleCredits, 2);
      break;
    case "title-ghost":
      handleChoice(sectionToToggle, choiceElement, titleCredits, 2);
      break;
    case "title-leader":
      handleChoice(sectionToToggle, choiceElement, titleCredits, 2);
      break;
    case "title-saint":
      handleChoice(sectionToToggle, choiceElement, titleCredits, 2);
      break;
    case "title-berserk":
      handleChoice(sectionToToggle, choiceElement, titleCredits, 2);
      break;
    case "title-nemesis":
      handleChoice(sectionToToggle, choiceElement, titleCredits, 2);
      break;
    case "title-harbinger":
      handleChoice(sectionToToggle, choiceElement, titleCredits, 2);
      break;
    case "title-prisoner":
      handleChoice(sectionToToggle, choiceElement, titleCredits, 2);
      break;
    case "title-space-cowboy":
      handleChoice(sectionToToggle, choiceElement, titleCredits, 2);
      break;
    case "title-sleeper":
      handleChoice(sectionToToggle, choiceElement, titleCredits, 2);
      break;
    case "title-traveler":
      handleChoice(sectionToToggle, choiceElement, titleCredits, 2);
      break;
    case "title-guardian":
      //if player has chosen guardian, return Hailey's cost to its original, then deactivate guardian
      let haileyCrew = crew.find(employee => employee.title === 'Hailey');
      if (player.choices.includes(id)) {
        haileyCrew.cost = 8000000;
      } else {
        haileyCrew.cost = 0;
      }
      handleChoice(sectionToToggle, choiceElement, titleCredits, 2);

      break;
    case "title-sorcerer":
      //if player has chosen guardian, return Hailey's cost to its original, then deactivate guardian
      let cometCrew = crew.find(employee => employee.title === 'Comet');
      if (player.choices.includes(id)) {
        cometCrew.cost = 8000000;
      } else {
        cometCrew.cost = 0;
      }
      handleChoice(sectionToToggle, choiceElement, titleCredits, 2);

      break;
    case "title-hellraiser":
      handleChoice(sectionToToggle, choiceElement, titleCredits, 2);
      break;
    case "title-fatebreaker":
      handleChoice(sectionToToggle, choiceElement, titleCredits, 2);
      break;
    case "title-demigod":
      let haileyCrew1 = crew.find(employee => employee.title === 'Hailey');
      let cometCrew1 = crew.find(employee => employee.title === 'Comet');
      if (player.choices.includes(id)) {
        cometCrew1.cost = 8000000;
        haileyCrew1.cost = 8000000;
      } else {
        cometCrew1.cost = 0;
        haileyCrew1.cost = 0;
      }
      handleChoice(sectionToToggle, choiceElement, titleCredits, 2);
      break;
    case "skill-basic-piloting":
      handleChoiceSkills(
        sectionToToggle,
        choiceElement,
        skillCredits,
        chosenSkill
      );
      break;
    case "skill-standard-piloting":
      handleChoiceSkills(
        sectionToToggle,
        choiceElement,
        skillCredits,
        chosenSkill
      );
      break;
    case "skill-advanced-piloting":
      handleChoiceSkills(
        sectionToToggle,
        choiceElement,
        skillCredits,
        chosenSkill
      );
      break;
    case "skill-ship-gunnery":
      handleChoiceSkills(
        sectionToToggle,
        choiceElement,
        skillCredits,
        chosenSkill
      );
      break;
    case "skill-ship-weapon-specialization":
      handleChoiceSkills(
        sectionToToggle,
        choiceElement,
        skillCredits,
        chosenSkill
      );
      break;
    case "skill-medical":
      handleChoiceSkills(
        sectionToToggle,
        choiceElement,
        skillCredits,
        chosenSkill
      );
      break;
    case "skill-computer-science":
      handleChoiceSkills(
        sectionToToggle,
        choiceElement,
        skillCredits,
        chosenSkill
      );
      break;
    case "skill-cyber-security":
      handleChoiceSkills(
        sectionToToggle,
        choiceElement,
        skillCredits,
        chosenSkill
      );
      break;
    case "skill-mechanics":
      handleChoiceSkills(
        sectionToToggle,
        choiceElement,
        skillCredits,
        chosenSkill
      );
      break;
    case "skill-nuclear":
      handleChoiceSkills(
        sectionToToggle,
        choiceElement,
        skillCredits,
        chosenSkill
      );
      break;
    case "skill-industry":
      handleChoiceSkills(
        sectionToToggle,
        choiceElement,
        skillCredits,
        chosenSkill
      );
      break;
    case "skill-diplomacy":
      handleChoiceSkills(
        sectionToToggle,
        choiceElement,
        skillCredits,
        chosenSkill
      );
      break;
    case "skill-mind-link":
      handleChoiceSkills(
        sectionToToggle,
        choiceElement,
        skillCredits,
        chosenSkill
      );
      break;
    case "skill-mercantile":
      if (player.choices.includes('choose-retired')) {
        handleChoiceSkills(
          sectionToToggle,
          choiceElement, 0, chosenSkill);
      } else {
        handleChoiceSkills(
          sectionToToggle,
          choiceElement,
          skillCredits,
          chosenSkill
        );
      }
      break;
    case "skill-basicTraining":
      handleChoiceSkills(
        sectionToToggle,
        choiceElement,
        skillCredits,
        chosenSkill
      );
      break;
    case "skill-closeQuartersCombat":
      handleChoiceSkills(
        sectionToToggle,
        choiceElement,
        skillCredits,
        chosenSkill
      );
      break;
    case "skill-security":
      handleChoiceSkills(
        sectionToToggle,
        choiceElement,
        skillCredits,
        chosenSkill
      );
      break;
    case "skill-patrol":
      handleChoiceSkills(
        sectionToToggle,
        choiceElement,
        skillCredits,
        chosenSkill
      );
      break;
    case "skill-advanced-firearms":
      handleChoiceSkills(
        sectionToToggle,
        choiceElement,
        skillCredits,
        chosenSkill
      );
      break;
    case "skill-field-medic":
      handleChoiceSkills(
        sectionToToggle,
        choiceElement,
        skillCredits,
        chosenSkill
      );
      break;
    case "skill-hit":
      handleChoiceSkills(
        sectionToToggle,
        choiceElement,
        skillCredits,
        chosenSkill
      );
      break;
    case "skill-recovery":
      handleChoiceSkills(
        sectionToToggle,
        choiceElement,
        skillCredits,
        chosenSkill
      );
      break;
    case "skill-long-ranged-combat":
      handleChoiceSkills(
        sectionToToggle,
        choiceElement,
        skillCredits,
        chosenSkill
      );
      break;
    case "skill-wilderness-survival":
      handleChoiceSkills(
        sectionToToggle,
        choiceElement,
        skillCredits,
        chosenSkill
      );
      break;
    case "skill-raid":
      handleChoiceSkills(
        sectionToToggle,
        choiceElement,
        skillCredits,
        chosenSkill
      );
      break;
    case "skill-infiltration":
      handleChoiceSkills(
        sectionToToggle,
        choiceElement,
        skillCredits,
        chosenSkill
      );
      break;
    case "skill-demolition":
      handleChoiceSkills(
        sectionToToggle,
        choiceElement,
        skillCredits,
        chosenSkill
      );
      break;
    case "skill-combat-driving":
      handleChoiceSkills(
        sectionToToggle,
        choiceElement,
        skillCredits,
        chosenSkill
      );
      break;
    case "skill-assault":
      handleChoiceSkills(
        sectionToToggle,
        choiceElement,
        skillCredits,
        chosenSkill
      );
      break;
    case "skill-guerilla":
      handleChoiceSkills(
        sectionToToggle,
        choiceElement,
        skillCredits,
        chosenSkill
      );
      break;
    case "skill-weaponsmith":
      handleChoiceSkills(
        sectionToToggle,
        choiceElement,
        skillCredits,
        chosenSkill
      );
      break;
    case "skill-combat-engineering":
      handleChoiceSkills(
        sectionToToggle,
        choiceElement,
        skillCredits,
        chosenSkill
      );
      break;
    case "skill-leadership":
      handleChoiceSkills(
        sectionToToggle,
        choiceElement,
        skillCredits,
        chosenSkill
      );
      break;
    case "skill-defence":
      handleChoiceSkills(
        sectionToToggle,
        choiceElement,
        skillCredits,
        chosenSkill
      );
      break;

    case "tech1-comint-discipline":
    case "tech1-esm-honing":
    case "tech1-eccm":
    case "tech1-capacitor-destabilizer":
    case "tech1-flash-blinder":
    case "tech1-shield-transmitter":
    case "tech1-motor-desynchronizer":
    case "tech1-encryption-entangler":
    case "tech1-hijack-kit":
    case "tech1-greenhouse-virus":
    case "tech1-endurance-nanites":
    case "tech1-enhanced-trauma-management":
    case "tech1-clairvoyant-resolution":
    case "tech1-clarity-boost":
    case "tech1-phased-membrane":
      handleEWar(choiceElement, 2);
      break;
    case "tech2-elint-discipline":
    case "tech2-rcs-masking":
    case "tech2-sensor-dampening":
    case "tech2-mana-neutralizer":
    case "tech2-noise-gun":
    case "tech2-armour-nanite-energizer":
    case "tech2-active-armour-poisoning":
    case "tech2-overclocker":
    case "tech2-backdoor-masking":
    case "tech2-shield-poisoning":
    case "tech2-biotic-regenerative-nanites":
    case "tech2-surgical-response":
    case "tech2-mana-multivision":
    case "tech2-pineal-boost":
    case "tech2-power-membrane":
      handleEWar(choiceElement, 4);
      break;
    case "tech3-asint-discipline":
    case "tech3-target-rcs-enhancement":
    case "tech3-ecm-jamming":
    case "tech3-emp":
    case "tech3-target-painter":
    case "tech3-energy-transmitter":
    case "tech3-weapon-jammer":
    case "tech3-incident-response":
    case "tech3-rootkit-library":
    case "tech3-mana-script-entropy":
    case "tech3-fuse-nanites":
    case "tech3-leyline-override":
    case "tech3-omnidirectional-vision":
    case "tech3-trance":
    case "tech3-second-skin":
      handleEWar(choiceElement, 8);
      break;

    case "Base Catalyst: Arm Blade":
    case "Spell Synthesis":
    case "Advanced Spell Synthesis":
    case "Paralogical Tier 2 Casting":
    case "Elemental Tier 2 Casting":
    case "Anticausal Tier 2 Casting":
    case "Paralogical Tier 3 Casting":
    case "Elemental Tier 3 Casting":
    case "Anticausal Tier 3 Casting":
    case "Catalyst Upgrade: Vanguard":
    case "Catalyst Upgrade: Slayer":
    case "Catalyst Upgrade: Sentinel":
    case "Ghost Blade":
    case "Smite":
    case "Judgement":
    case "Moonlight":
    case "Flare":
    case "Guardian":
    case "Blink":
    case "Howl":
    case "Fortitude":
      let catalystChoice = catalyst.find(cata => cata.name === id);
      handleCatalyst(choiceElement, catalystChoice.cost);
      break;

    case "Void Tier 1 Affinity":
    case "Void Tier 2 Affinity":
    case "Void Tier 3 Affinity":
    case "Erosion Tier 1 Affinity":
    case "Erosion Tier 2 Affinity":
    case "Erosion Tier 3 Affinity":
    case "Vorpal Tier 1 Affinity":
    case "Vorpal Tier 2 Affinity":
    case "Vorpal Tier 3 Affinity":
    case "Thermal Tier 1 Affinity":
    case "Thermal Tier 2 Affinity":
    case "Thermal Tier 3 Affinity":
    case "Arc Tier 1 Affinity":
    case "Arc Tier 2 Affinity":
    case "Arc Tier 3 Affinity":
    case "Kinetic Tier 1 Affinity":
    case "Kinetic Tier 2 Affinity":
    case "Kinetic Tier 3 Affinity":
    case "Resonance Tier 1 Affinity":
    case "Resonance Tier 2 Affinity":
    case "Resonance Tier 3 Affinity":
    case "Corruption Tier 1 Affinity":
    case "Corruption Tier 2 Affinity":
    case "Corruption Tier 3 Affinity":
    case "Retribution Tier 1 Affinity":
    case "Retribution Tier 2 Affinity":
    case "Retribution Tier 3 Affinity":
      handleAffinity(id, choiceElement);
      break;
    case "Dart":
    case "Spray":
    case "Pulse":
    case "Barricade":
    case "Pinch":
    case "Self":
    case "Tether":
    case "Mine":
    case "Aura":
    case "Flash":
    case "Crescent":
    case "Arrow":
    case "Beam":
    case "Bomb":
    case "Pillars":
    case "Cloud":
    case "Spear":
    case "Swarm":
    case "Haze":
    case "Barrier":
    case "Overload":
    case "Nova":
    case "Starfall":
    case "Radiance":
      let spellChoice = spellBases.find(spell => spell.name === id);
      handleSpells(choiceElement, spellChoice.cost);
      break;
    default:
      // Handle cases where no match is found
      break;



  }
}

function findAlignment(player) {
  const matchedSponsorValues = [];
  player.choices.forEach(sponsor => {
    if (sponsorMap.has(sponsor)) {
      // If it does, use that choice as a key to get the value from the Map
      const sponsorValue = sponsorMap.get(sponsor);

      // Add the found value to our results array
      matchedSponsorValues.push(sponsorValue);
    }
  });
  return matchedSponsorValues;
}

function sumEnergy(ship, type1) {
  let sumGen = 0;
  let sumBattery = 0;
  ship.energy.forEach(energy => {
    if (energy.type === 'generation') {
      sumGen += energy.energyOutput;
    }
    else if (energy.type === 'battery') {
      sumBattery += energy.sumBattery;
    }
  });
  if (type1 === 'gen') {
    return sumGen;
  } else {
    return sumBattery;
  }
}

function updateSummary() {
  //IF Frame exists, display summary. Else, don't. 
  let frameCardContainer = document.getElementById('frameCard');
  let hullCardList = document.getElementById('hullCardList');
  let alignment = findAlignment(player);
  let html = '';
  let html2 = '';

  //this joins array 


  if (player.frame.name) {
    //find join the array
    const allAbilities = [...player.frame.choices, ...player.skills].join(', ');
    html = `
    <img src="${player.frame.image}" title="${getImgName(player.frame.image)}" class="card-image" style="object-fit:cover;">
    <div class="card-content">
        <h2 class="card-title">${player.frame.name}</h2>
        <p class="card-subtitle">Cost: ${0}</p>                                
        <div class="divider"></div>
        <div class="details-grid">
            <b>Specialty:</b><span> Apoc</span>
            <b>Equipment:</b><div class="stat-bar-container">${generateStatBar(player.equipmentLevel)}</div>
            <b>Skill Level:</b><div class="stat-bar-container">${generateStatBar(player.skills.length)}</div>
            <b>Alignment:</b><span>${alignment}</span>
            <b>Abilities:</b><span>${allAbilities}</span>
        </div>
        <div class="description">${player.choices}</div>
    </div>
    `;

    frameCardContainer.innerHTML = html;
  }
  else {

    frameCardContainer.innerText = 'No Summary Yet';
    frameCardContainer = 'color: black';
  }
  //IF ship exists, display summary. Else, don't. 

  if (player.ships) {
    hullCardList.innerHTML = '';
    for (const ship of Object.values(player.ships)) {
      const card = document.createElement('div');
      card.className = `card-wrapper hull-card`;

      const allShipChoices = [...ship.shipAI, ...ship.subsystems, ...ship.industrials, ...ship.energy, ...ship.eWar, ...ship.shield, ...ship.mods].join(', ');

      //for weapons
      const weaponNames = ship.weaponChoice.map(weapon => weapon.name)
      const weaponChoices = weaponNames.join(',');

      const roomNames = ship.rooms.map(room => room.name)
      const roomChoices = roomNames.join(',');

      html2 = `
        <img src="${ship.hull.image}" title="${getImgName(ship.hull.image)}" class="card-image">
        <div class="card-content">
            <div class="hull-details-grid">
                <b>Name:</b><span>${ship.shipName}</span>
                <b>Manufacturer:</b><span>${ship.hull.manufacturer}</span>
                <b>Type:</b><span>${ship.hull.type}</span>
                <b>Navigation/Hull Armor/Shield:</b><span>${ship.navigation}/${ship.hullArmor}/${ship.shieldStr}</span>
                <b>Length:</b><span>${ship.length}</span>
                <b>Max Crew:</b><span>${ship.maxCrew}</span> </div>
            <div class="hull-details-grid">
                <b>Rooms:</b><span>${roomChoices}</span>
                <b>Energy Generation/Use/Storage:</b><span>${sumEnergy(ship, 'gen')}/${ship.energyUse}/${sumEnergy(ship, 'bat')}</span>
                <b>Weapons:</b><span>${weaponChoices}</span>
                <b>Choices:</b><span>${allShipChoices}</span>
            </div> 
        </div>
      `;

      card.innerHTML = html2;
      hullCardList.appendChild(card);

    }
    return;
  }
}

