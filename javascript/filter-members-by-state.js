//Imports
import {populateTable} from "./populate-table.js";
import {senateData} from "../data/javascript/senate-data.js";

//Variables
const senateTable = document.getElementById("senate-data");
const senateArr = senateData.results[0].members;
let states = document.getElementById('select-dropdown');
let filteredMembers = [];

//Functions
export function displaySelectedStateMembers() {
    populateTable(senateArr, senateTable)
    states.addEventListener("change", function (){

        filterMembersByState();
    })
}

function filterMembersByState() {
    console.log("firing filter");
    filteredMembers = [];

    for (let i = 0; i < states.length; i++) {
        if(states[i].selected){
            for (let j = 0; j < senateArr.length; j++) {
                if(states[i].value === senateArr[j].state){
                    filteredMembers.push(senateArr[j]);
                }
            }
        }
    }
    while (senateTable.firstChild){
        senateTable.lastChild.remove();
    }
    populateTable(filteredMembers, senateTable);
}


