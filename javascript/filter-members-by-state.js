//Imports
import {populateTable} from "./populate-table.js";


//Variables
let states = document.getElementById('select-dropdown');
let filteredMembers = [];


//Functions
export function displaySelectedStateMembers(array, target) {
    populateTable(array, target);
    states.addEventListener("change", function () {

        filterMembersByState(array, target);
    })
}

function filterMembersByState(array, target) {
    console.log("firing filter");
    filteredMembers = [];

    for (let i = 0; i < states.length; i++) {
        if (states[i].selected) {
            for (let j = 0; j < array.length; j++) {
                if (states[i].value === array[j].state) {
                    filteredMembers.push(array[j]);
                }
            }
        }
    }
    while (target.firstChild) {
        target.lastChild.remove();
    }
    populateTable(filteredMembers, target);
}


