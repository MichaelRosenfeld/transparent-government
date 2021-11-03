// Imports
import {senateData} from "../data/javascript/senate-data.js";


//Variables
const stateList = document.getElementById("select-dropdown");
const senateArr = senateData.results[0].members;


//Functions
export function populateStateDropdownList() {
    let states = getStatesFromData(senateArr);
    
    for(let i = 0; i < states.length; i++) {
        let state = states[i];
        let element = document.createElement("option");
        element.textContent = state;
        element.value = state;
        stateList.add(element);
    }
}

function getStatesFromData(array) {
    let states = [];

    for (let i = 0; i < array.length; i++) {
        states.push(array[i].state);
    }
    return [...new Set(states)];
}
