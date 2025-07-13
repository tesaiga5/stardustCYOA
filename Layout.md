function handleChoice (section, chosenChoice, creditChange, maxChoices) {
const activeChoices = section.querySelectorAll('.choice.active');
const isChosenActive = chosenChoice.classList.contains('active');
if (isChosenActive) {
// If the chosen choice is already active, deactivate it (deselect)
chosenChoice.classList.toggle('active');
player.credits -= creditChange; // Remove credits

        //remove choice
        const index = player.choices.indexOf(chosenChoice.id);
        if(index !== -1){
          player.choices.splice(chosenChoice.id, 1);
        }
        document.getElementById("credits-display").innerHTML = `Credits: `+ formatterIntl.format(player.credits);
      } else {
                // If the chosen choice is not active, try to activate it (select)
        if (activeChoices.length < maxChoices) {
            chosenChoice.classList.toggle('active');
            player.credits += creditChange; // Add credits
            player.choices.push(chosenChoice.id);
            document.getElementById("credits-display").innerHTML = `Credits: `+ formatterIntl.format(player.credits);
        }
      }
    }
