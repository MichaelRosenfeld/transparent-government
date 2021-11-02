// Imports
import {populateTable} from "./populate-table.js";
import {senateData} from "../data/javascript/senate-data.js";

// Variables
const senateTable = document.getElementById("senate-data");
const senateArr = senateData.results[0].members;
let filteredMembers = [];

export function displaySelectedStateMembers() {
    for (let i = 0; i < senateArr.length; i++) {
        let id = senateArr[i].state.toString();
        console.log(id);
        document.getElementById(id).addEventListener("click", function () {
            if (document.getElementById(senateArr[i].state).checked === true) {
                filterMembersByState();
                } else {
                    while (senateTable.firstChild) {
                        senateTable.firstChild.remove()
                    }
                }
            }
        )
    }
}

export function filterMembersByState() {
    filteredMembers = [];
    for (let i = 0; i < senateArr.length; i++) {
        if(document.getElementById(senateArr[i].state).checked) {
            filteredMembers.push(senateArr[i]);
        }
    }
    while (senateTable.firstChild){
        senateTable.lastChild.remove()
    }
    populateTable(filteredMembers, senateTable);
}

