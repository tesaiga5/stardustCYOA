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
