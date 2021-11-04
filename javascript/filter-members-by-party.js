// Imports
import {populateTable} from "./populate-table.js";


// Variables
let filteredMembers = [];


//Functions
export function displaySelectedPartyMembers(array, target) {
    populateTable(array, target);
    
    document.getElementById("democrat").addEventListener("click", function () {

        if (document.getElementById("democrat").checked === true) {
            filterMembersByParty(array, target);
        } else {
            while (target.firstChild) {
                target.firstChild.remove()
            }
        }
    });
    
    document.getElementById("republican").addEventListener("click", function () {

        if (document.getElementById("republican").checked === true) {
            filterMembersByParty(array, target);
        } else {
            while (target.firstChild) {
                target.firstChild.remove()
            }
        }
    });

    document.getElementById("independent").addEventListener("click", function () {

        if (document.getElementById("independent").checked === true) {
            filterMembersByParty(array, target);
        } else {
            while (target.firstChild) {
                target.firstChild.remove()
            }
        }
    });
}

export function filterMembersByParty(array, target) {
    filteredMembers = [];
    
    for (let i = 0; i < array.length; i++) {

        if ((document.getElementById("democrat").checked && array[i].party === 'D')) {
            filteredMembers.push(array[i]);
        }
        if ((document.getElementById("republican").checked && array[i].party === 'R')) {
            filteredMembers.push(array[i]);
        }
        if ((document.getElementById("independent").checked && array[i].party === 'ID')) {
            filteredMembers.push(array[i]);
        }
    }
    while (target.firstChild) {
        target.firstChild.remove()
    }
    populateTable(filteredMembers, target);
}