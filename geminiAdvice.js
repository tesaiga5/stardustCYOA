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