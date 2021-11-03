// Imports
import {senateData} from "../data/javascript/senate-data.js";


//Variables
const stateList = document.getElementById("select-dropdown");
let option = document.createElement("option");
const senateArr = senateData.results[0].members;


//Functions
export function getStatesFromData(array) {
    let states = [];
    
    for (let i = 0; i < array.length; i++) {
        states.push(array[i].state);
    }
    
    let filteredStates = [...new Set(states)];
    console.log(filteredStates);
    return filteredStates;
}


export function populateStateDropdownList() {
    let states = getStatesFromData(senateArr);
    for(let i = 0; i < states.length; i++) {
        let option = states[i];
        let element = document.createElement("option");
        element.textContent = option;
        element.value = option;
        stateList.add(element);
    }
}