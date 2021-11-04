
//Variables
const stateList = document.getElementById("select-dropdown");

//Functions
export function populateStateDropdown(array) {
    let states = getStatesFromData(array);
    
    for(let i = 0; i < states.length; i++) {
        let state = states[i];
        let element = document.createElement("option");
        element.id = state;
        element.value = state;
        element.textContent = state;
        stateList.add(element);
    }
}

function getStatesFromData(array) {
    let states = [];

    for (let i = 0; i < array.length; i++) {
        states.push(array[i].state);
    }
    //Removes duplicates
    return [...new Set(states)];
}
