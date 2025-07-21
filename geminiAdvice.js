// Function to handle a choice selection
function handleSingleChoiceSelection(clickedElement) {
  // 1. Find the parent container that groups these choices (e.g., 'section-hull')
  //    You might need to adjust 'closest('.section')' if your grouping div has a different class/ID.
  const parentContainer = clickedElement.closest('.section'); // Or .closest('#section-hull'), etc.

  if (parentContainer) {
    // 2. Find all 'choice' elements within this parent container
    const allChoicesInGroup = parentContainer.querySelectorAll('.choice');

    // 3. Iterate through all choices in the group
    allChoicesInGroup.forEach(choice => {
      // 4. If a choice is currently active AND it's not the one just clicked, deactivate it
      if (choice.classList.contains('active') && choice !== clickedElement) {
        clickedElement.classList.remove('active');
        // You might also need to update your ship object here to remove the old choice
        // For example: player.currentActiveShip.hull = null;
      }
    });

    // 5. Toggle the 'active' class on the clicked element
    //    If it was already active, this will deactivate it (useful for deselecting)
    //    If it was not active, this will activate it.
    clickedElement.classList.toggle('active');

    // 6. After toggling, if the element is now active, update your ship object
    if (clickedElement.classList.contains('active')) {
      // Example: If this is for 'hull' choices
      const chosenHullId = clickedElement.id.replace('choice-', ''); // Assuming IDs are like 'choice-fighter', 'choice-cruiser'
      // You would then find the corresponding hull data and assign it to your ship object
      // For instance: player.currentActiveShip.hull = hulls.find(h => h.id === chosenHullId);
      console.log(`Selected: ${chosenHullId}`);
    } else {
      // If the element was just deactivated, update ship object to reflect that
      // For instance: player.currentActiveShip.hull = null;
      console.log(`Deselected: ${clickedElement.id.replace('choice-', '')}`);
    }

    // You would also handle credit adjustments here based on the selected/deselected item
  }
}

// Example of how to attach event listeners using event delegation
// Assuming you have a main container for all your choice sections, e.g., 'choices-container'
const choicesContainer = document.getElementById('choices-container'); // Or document.body if it covers everything

if (choicesContainer) {
  choicesContainer.addEventListener('click', (event) => {
    const clickedChoice = event.target.closest('.choice');

    if (clickedChoice) {
      // Call your single-choice handling function
      handleSingleChoiceSelection(clickedChoice);

      // Prevent default behavior if needed (e.g., if it's a link)
      // event.preventDefault();
    }
  });
}


    function singleHullReturnCredits(clickedElement, shipDiv1) {
      // 1. Find the parent container that groups these choices (e.g., 'section-hull')
      //    You might need to adjust 'closest('.section')' if your grouping div has a different class/ID.
      const parentContainer = clickedElement.closest('.section'); // Or .closest('#section-hull'), etc.

      if (parentContainer) {
        // 2. Find all 'choice' elements within this parent container
        const allChoicesInGroup = parentContainer.querySelectorAll('.choice');

        // 3. Iterate through all choices in the group
        allChoicesInGroup.forEach(choice => {
          // 4. If a choice is currently active AND it's not the one just clicked, deactivate it
          if (choice.classList.contains('active') && choice !== clickedElement) {
            choice.classList.remove('active');  
            const prevHull = hulls.find(hull => hull.name === choice.id.replace('choice-', '')); // Find the previous hull data based on the ID
            return prevHull.cost; // Return the cost of the previous hull
          }
          else {
            return 0; // If no previous hull was active, return 0
          }
        });
      }
    }

    function chooseHull (clickedElement, shipDiv1, refund) {
      if (refund === 'refund'){ 
      }
      
      if (player.ships[shipDiv1.id]) { //player has chosen a ship 
        if (clickedElement === shipDiv1) // ship is the same as the clicked element
        player.credits += singleHullReturnCredits(clickedElement, shipDiv1); //if yes, set the previous choice to non-active, set the clicked choice as active
        //and addback the credits to the player
        const chosenHull = hulls.find(hull => hull.name === clickedElement.id.replace('choice-', '')); // Find the hull data based on the clicked element's ID
      player.ships[shipDiv1.id].hull = chosenHull; // Assign the chosen hull to the ship object
      player.credits -= chosenHull.cost; // Deduct the cost of the hull from the player's credits

      }     
    }

    sectionHull1.addEventListener('click', (event) => {
      const clickedElement = event.target.closest('.choice');
      if (clickedElement) { //if I click on chosen-hull
        //check if chosenhull is active
        if (clickedElement.classList.contains('active')){

        }
        /*
          check if clicked Element is active
          
          5. chosen hull writes on currently active ship 
          6. click on chosen hull again
          7. chosen hull deactivates
          8. chosen hull unwrite from currently active ship */
        // Call the function to handle single choice selection
        let shipDiv2 = document.getElementById(player.currentActiveShip);
        chooseHull(clickedElement, shipDiv2); 
      }
        //Regardless, clicked hull must be toggled active/not active
        clickedElement.classList.toggle('active');
       
        
      });