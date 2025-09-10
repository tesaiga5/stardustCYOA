//choiceData.js
import { formatterIntl } from "/stardustCYOA/Script/manaData.js";

//manaData.js
import { getImgName } from "/stardustCYOA/Script/switchChoose.js";
import { weapons } from "/stardustCYOA/Script/shipData.js";

//shipData.js
import { getImgName } from "/stardustCYOA/Script/switchChoose.js";
import {
    formatterIntl,
    appendParagraph,
    appendList1,
} from "/stardustCYOA/Script/manaData.js";

//crewData.js
import { appendDropdown, formatterIntl } from "/stardustCYOA/Script/manaData.js";
import { getImgName } from "/stardustCYOA/Script/switchChoose.js";

//switchChoose.js
import { formatterIntl, catalyst, spellBases } from "/stardustCYOA/Script/manaData.js";
import { titles, skills, } from "/stardustCYOA/Script/choiceData.js";
import { crew } from "/stardustCYOA/Script/crewData.js";
import { guns, generateStatBar } from "/stardustCYOA/Script/equipmentData.js";
import { sponsorMap } from "/stardustCYOA/Script/choiceData.js";

//equipmentData.js
import { formatterIntl, appendList1 } from "/stardustCYOA/Script/manaData.js";
import { getImgName, updateSummary } from "/stardustCYOA/Script/switchChoose.js";

//index html
import {
    createShip, deleteShip, addHullToShip, addAI, addEnergyGen, addShield,
    addCommandMod, addHullMod, addToHangar, addShipEquipment, addRoom,
    resetShipConfigUI, renderShipConfigUI
} from '/stardustCYOA/Script/shipData.js'; //3064

import { //2514
    switchChoose, handleChoiceRigs, handleChoiceVehicle, handleChoiceCrew, getImgName,
    handleChoiceGun, updateSummary,
} from '/stardustCYOA/Script/switchChoose.js';
//populate titles
import { titles, skills, addTitlesToSection, startPos } from '/stardustCYOA/Script/choiceData.js';

import { crew, archetype, addCrewToSection } from '/stardustCYOA/Script/crewData.js'; // Import crew data
//populate hulls
import {
    hulls, shipAI, energy, shield, mods, industrial, eWar, rooms, weapons, drones,
    populateHullToSection, updateWeaponSlot, hullDiscount, sponsorHullDiscount, weaponDiscount,
} from '/stardustCYOA/Script/shipData.js';
//populate equipment
import {
    equipment, vehicles, rigs, populateRigs, populateVehicles, handleFrame, createFrame,
    guns, addGunDataToSection,
} from '/stardustCYOA/Script/equipmentData.js';
//populate spells and unified population function
import {
    catalyst, affinity, spellBases, populateDataToSection, populateCatalystToSection, appendDropdown, formatterIntl,
    appendParagraph, appendList1, createAffinityTable,
} from '/stardustCYOA/Script/manaData.js';

