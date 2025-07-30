export {switchChoose};
import {formatterIntl} from "/Script/manaData.js";
import {titles} from "/Script/choiceData.js";

    function handleChoice (section, chosenChoice, creditChange, maxChoices) { //passthru section, the choice selected, the credit change, and maximum amount of choices
      const activeChoices = section.querySelectorAll('.choice.active'); //check how many choices are active
      const isChosenActive = chosenChoice.classList.contains('active');
      if (isChosenActive) {
        // If the chosen choice is already active, deactivate it (deselect)
        chosenChoice.classList.toggle('active');
        player.credits -= creditChange; // Remove credits

        //remove choice
        const index = player.choices.indexOf(chosenChoice.id);
        if(index !== -1){
          player.choices.splice(index, 1);
        }
        document.getElementById("credits-display").innerHTML = `Credits: `+ formatterIntl.format(player.credits);
      } else {
                // If the chosen choice is not active, try to activate it (select)
        if (activeChoices.length < maxChoices) { //as long as the num of active choices are less than allowed active
            chosenChoice.classList.toggle('active'); //you may toggle the selected choice to be active
            player.credits += creditChange; // and Add credits 
            player.choices.push(chosenChoice.id);
            document.getElementById("credits-display").innerHTML = `Credits: `+ formatterIntl.format(player.credits);
        }
      }
    }

    function handleChoicePos (section, chosenChoice, creditChange, maxChoices) { //passthru section, the choice selected, the credit change, and maximum amount of choices
      const activeChoices = section.querySelectorAll('div.section-startingPos.active'); //check how many choices are active
      const isChosenActive = chosenChoice.classList.contains('active');
      if (isChosenActive) {
        // If the chosen choice is already active, deactivate it (deselect)
        chosenChoice.classList.toggle('active');
        player.credits -= creditChange; // Remove credits

        //remove choice
        const index = player.choices.indexOf(chosenChoice.id);
        if(index !== -1){
          player.choices.splice(index, 1);
        }
        document.getElementById("credits-display").innerHTML = `Credits: `+ formatterIntl.format(player.credits);
      } else {
                // If the chosen choice is not active, try to activate it (select)
        if (activeChoices.length < maxChoices) { //as long as the num of active choices are less than allowed active
            chosenChoice.classList.toggle('active'); //you may toggle the selected choice to be active
            player.credits += creditChange; // and Add credits 
            player.choices.push(chosenChoice.id);
            document.getElementById("credits-display").innerHTML = `Credits: `+ formatterIntl.format(player.credits);
        }
      }
    }


function switchChoose(id, choiceElement, sectionToToggle, originToggleArray, player){
  //for titles

  const chosenTitle = titles.find(title=> title.id === id);
  let titleCredits = 0; 
  if (chosenTitle) {
    if (chosenTitle.credits !== undefined) {
      titleCredits = chosenTitle.credits;
    }}

  switch (id) {
    case 'choice-lore':
      choiceElement.classList.toggle('active'); 
      sectionToToggle.classList.toggle('visible');
      break;
    case 'choice-you':
      choiceElement.classList.toggle('active'); 
      sectionToToggle.classList.toggle('visible');
      break;
    case 'choice-fleet':
      choiceElement.classList.toggle('active'); 
      sectionToToggle.classList.toggle('visible');
      break;
    case 'choice-crew':
      choiceElement.classList.toggle('active'); 
      sectionToToggle.classList.toggle('visible');
      break;
    case 'choice-contracts':
      //placeholder
      break;
    case 'choice-battle':
      //placeholder
      break;
    case 'choice-moneysource':
      choiceElement.classList.toggle('active'); 
      sectionToToggle.classList.toggle('visible');
      break;
    case 'choice-origin':
      choiceElement.classList.toggle('active'); 
      sectionToToggle.classList.toggle('visible');
      originToggleArray.forEach(origin => {
        const elmen = document.getElementById(origin);
        elmen.classList.toggle('visible');
        });
      break;
    case 'choice-titles':
      choiceElement.classList.toggle('active'); 
      sectionToToggle.classList.toggle('visible');
      break;
    case 'choice-hull':
      choiceElement.classList.toggle('active'); 
      sectionToToggle.classList.toggle('visible');
      break;

    //make player choose ONLY 1 MONEYSOURCE
    case 'choose-gambling':
      handleChoice(sectionToToggle, choiceElement, 100000000, 1);
      break; 
    case 'choose-theft':
      handleChoice(sectionToToggle, choiceElement, 200000000, 1);
      break; 
    case 'choose-invest':
      handleChoice(sectionToToggle, choiceElement, 250000000, 1);
      break; 
    case 'choose-retired':
      handleChoice(sectionToToggle, choiceElement, 150000000, 1);
      break; 
    case 'choose-sponsorScam':
      handleChoice(sectionToToggle, choiceElement, 0, 1);
      break; 
    
    //make player choose only 1 sponsor, unless sponsorScam
    case 'choice-sponsor':
      choiceElement.classList.toggle('active'); 
      sectionToToggle.classList.toggle('visible');
      break;
    
    case 'choose-navy':
      if(player.choices.includes('choose-sponsorScam')){
        handleChoice(sectionToToggle, choiceElement, 311000000, 2);
      } 
      else {
        handleChoice(sectionToToggle, choiceElement, 311000000, 1);
      }
      break; 
    case 'choose-seal':
      if(player.choices.includes('choose-sponsorScam')){
        handleChoice(sectionToToggle, choiceElement, 536200000, 2);
      } 
      else {
        handleChoice(sectionToToggle, choiceElement, 536200000, 1);
      }

      break; 
    case 'choose-civillian':
      if(player.choices.includes('choose-sponsorScam')){
        handleChoice(sectionToToggle, choiceElement, 300000000, 2);
      } 
      else {
        handleChoice(sectionToToggle, choiceElement, 300000000, 1);
      }
      break; 
      case 'choose-blackhawk':
      if(player.choices.includes('choose-sponsorScam')){
        handleChoice(sectionToToggle, choiceElement, 500000000, 2);
      } 
      else {
        handleChoice(sectionToToggle, choiceElement, 500000000, 1);
      }
      break; 
    case 'choose-pirates':
      if(player.choices.includes('choose-sponsorScam')){
        handleChoice(sectionToToggle, choiceElement, 333000000, 2);
      } 
      else {
        handleChoice(sectionToToggle, choiceElement, 333000000, 1);
      }
      break; 
    case 'choose-talons':
      if(player.choices.includes('choose-sponsorScam')){
        handleChoice(sectionToToggle, choiceElement, 777000000, 2);
      } 
      else {
        handleChoice(sectionToToggle, choiceElement, 777000000, 1);
      }
      break;
    case 'choose-luos':
      if(player.choices.includes('choose-sponsorScam')){
        handleChoice(sectionToToggle, choiceElement, 1000000000, 2);
      } 
      else {
        handleChoice(sectionToToggle, choiceElement, 1000000000, 1);
      }
      break; 
    case 'choose-dustkeepers':
      if(player.choices.includes('choose-sponsorScam')){
        handleChoice(sectionToToggle, choiceElement, 640000000, 2);
      } 
      else {
        handleChoice(sectionToToggle, choiceElement, 640000000, 1);
      }
      break; 
    case 'choose-gazers':
      if(player.choices.includes('choose-sponsorScam')){
        handleChoice(sectionToToggle, choiceElement, 0, 2);
      } 
      else {
        handleChoice(sectionToToggle, choiceElement, 0, 1);
      }
      break; 
    case 'choose-io':
      if(player.choices.includes('choose-sponsorScam')){
        handleChoice(sectionToToggle, choiceElement, 400000000, 2);
      } 
      else {
        handleChoice(sectionToToggle, choiceElement, 400000000, 1);
      }
      break; 
    case 'choose-hammerhead':
      if(player.choices.includes('choose-sponsorScam')){
        handleChoice(sectionToToggle, choiceElement, 800000000, 2);
      } 
      else {
        handleChoice(sectionToToggle, choiceElement, 800000000, 1);
      }
      break;
    case 'choose-beatrice':
      if(player.choices.includes('choose-sponsorScam')){
        handleChoice(sectionToToggle, choiceElement, 320000000, 2);
      } 
      else {
        handleChoice(sectionToToggle, choiceElement, 320000000, 1);
      }
      break;   
    case 'choose-noSponsor':
      if(player.choices.includes('choose-sponsorScam')){
        handleChoice(sectionToToggle, choiceElement, 150000000, 2);
      } 
      else {
        handleChoice(sectionToToggle, choiceElement, 150000000, 1);
      }
      break;
    case 'choose-laporte':
    case 'choose-dellsin':
      handleChoicePos(sectionToToggle, choiceElement, -25000000, 1);
      break;
    case 'choose-capitolus':
    case 'choose-arcadia':
      handleChoicePos(sectionToToggle, choiceElement, 0, 1);
      break;
    

    case 'choose-new-terra': 
      const strings1 = ['choose-pirates', 'choose-luos', 'choose-talons'];
      if (strings1.some(str => player.choices.includes(str))){
          alert('hostile to Federation!!'); 
      } else {
        handleChoicePos(sectionToToggle, choiceElement, -50000000, 1);
      }
      break;

    case 'choose-archer':
      const strings2 = ['choose-pirates', 'choose-luos', 'choose-talons'];
      if (strings2.some(str => player.choices.includes(str))){
          handleChoicePos(sectionToToggle, choiceElement, 50000000, 1);
      }
      break;
    case 'choose-ysgard':
      handleChoicePos(sectionToToggle, choiceElement, -50000000, 1);
      break;
    case 'choose-wayward':case 'choose-ragnarok':case 'choose-valhalla':case 'choose-talon-prime':case 'choose-zona':case 'choose-ten-cred':case 'choose-las-stop':case 'choose-detritus':case 'choose-exodus':case 'choose-haven':case 'choose-olympus':case 'choose-erebus':case 'choose-abyss':case 'choose-star-dust':case 'choose-br-5rb':case 'choose-dl7-2e':case 'choose-crown-forge':case 'choose-clover-region':case 'choose-mjolnir':case 'choose-prion':case 'choose-bastion':case 'choose-synchordia': 
      handleChoicePos(sectionToToggle, choiceElement, 50000000, 1);
      break;
    case 'title-rogue':
      console.log(chosenTitle,titleCredits);
      handleChoice(sectionToToggle, choiceElement, titleCredits, 2);
      break;
    case 'title-whisperer':
      console.log(chosenTitle,titleCredits);
      handleChoice(sectionToToggle, choiceElement, titleCredits, 2);
      break;
    case 'title-old-timer':
      handleChoice(sectionToToggle, choiceElement, titleCredits, 2);
      break;
    case 'title-ghost':
      handleChoice(sectionToToggle, choiceElement, titleCredits, 2);
      break;
    case 'title-leader':
      handleChoice(sectionToToggle, choiceElement, titleCredits, 2);
      break;
    case 'title-saint':
      handleChoice(sectionToToggle, choiceElement, titleCredits, 2);
      break;
    case 'title-berserk':
      handleChoice(sectionToToggle, choiceElement, titleCredits, 2);
      break;
    case 'title-nemesis':
      handleChoice(sectionToToggle, choiceElement, titleCredits, 2);
      break;
    case 'title-harbinger':
      handleChoice(sectionToToggle, choiceElement, titleCredits, 2);
      break;
    case 'title-prisoner':
      handleChoice(sectionToToggle, choiceElement, titleCredits, 2);
      break;
    case 'title-space-cowboy':
      handleChoice(sectionToToggle, choiceElement, titleCredits, 2);
      break;
    case 'title-sleeper':
      handleChoice(sectionToToggle, choiceElement, titleCredits, 2);
      break;
    case 'title-traveler':
      handleChoice(sectionToToggle, choiceElement, titleCredits, 2);
      break;
    case 'title-guardian':
      handleChoice(sectionToToggle, choiceElement, titleCredits, 2);
      break;
    case 'title-sorcerer':
      handleChoice(sectionToToggle, choiceElement, titleCredits, 2);
      break;
    case 'title-hellraiser':
      handleChoice(sectionToToggle, choiceElement, titleCredits, 2);
      break;
    case 'title-fatebreaker':
      handleChoice(sectionToToggle, choiceElement, titleCredits, 2);
      break;
    case 'title-demigod':
      handleChoice(sectionToToggle, choiceElement, titleCredits, 2);
      break;
  }
}

                             
        