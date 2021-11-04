//Imports
import {populateTable} from "./populate-table.js";
import {senateData} from "../data/javascript/senate-data.js";

//Variables
const senateTable = document.getElementById("senate-data");
const senateArr = senateData.results[0].members;
let states = document.getElementById('select-dropdown').options;
let filteredMembers = [];

//Functions
export function displaySelectedStateMembers() {
    console.log("firing DisplaySelectedStateMembers");

    for (let i = 0; i < states.length; i++) {
        console.log(states[i].id);
    }
    for (let i = 0; i < states.length; i++) {
        states[i].addEventListener("click", function () {
            filterMembersByState();
        })
    }
    // Array.from(states).forEach(element => {
    //     element.addEventListener("click", function () {
    //         filterMembersByState();
    //     })
    // })
}

function filterMembersByState() {
    console.log("firing filter")
    filteredMembers = [];
    for (let i = 0; i < states.length; i++) {
        for (let j = 0; j < senateArr.length; j++) {
            if(states[i].selected && senateArr[j] === states[i].id){
                filteredMembers.push(senateArr[j]);
            }
        }
    }
    while (senateTable.firstChild) {
        senateTable.firstChild.remove()
    }
    populateTable(filteredMembers, senateTable);
}


