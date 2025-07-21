# stardustCYOA

An unofficial expansion to Stardust CYOA

Goal: to link ship choices to ship object

1. When user clicks on a hull choice, the ship object will register the choices
2. When user clicks on a new ship, the choices resets.
3. When user clicks on an old ship, the choices must reflect past choices
4. If ship object gets deleted, credits are refunded and choices reset
5. If ship object gets reset, credits are refunded and choices reset
6. If click on edit button, rename the ship name.

Solutions:

1. event listener, write on ship object
2. event listener, reset 'active' divs
3. event listener, read ship object, set chosen divs to active
4. event listener, reset 'active' divs, addback credits (require a counter in ship object), delete ship object
5. event listener, reset 'active' divs, addback credits (require a counter in ship object),
6. event listener, set div id

function fleetManagement () { #2, #3
//check which shipDiv is currently active (ship 1,2, or 3?)
//get the associated ship object from the shipDiv
//set to active all choice divs associated with the ship object  
//set player.currentActiveShip
}

function chooseHull (shipObject) { #1
//check if the user has chosen a hull before
//if yes, set the previous choice to non-active and set the clicked choice as active
//delete the previous choice from shipObject.hull
//write the clicked choice into shipObject
//pay credits to player and to shipObject credits
}
//create a function for each attribute because each attribute has different requirements

function recordShip (write / delete //reset, shipObject) { #4 $5
if write {
//write ship object into player.ships[] not currentactiveShip }

if delete {
delete ship object from player.ships
refund player credits
}

}

function editShipName {

}


1. Click on Ship 1 to set as currently active ship 
2. Click on choice-hull to open section-hull
3. 