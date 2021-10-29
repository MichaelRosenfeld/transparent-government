// Imports
import {populateTable} from "./populate-table.js";
import {senateData} from "../data/javascript/senate-data.js";

// Variables
const senateTable = document.getElementById("senate-data");
const senateArr = senateData.results[0].members;
let filteredMembers = [];

//Functions
export function displaySelectedMembers() {

    document.getElementById("democrat").addEventListener("click", function () {

        if (document.getElementById("democrat").checked === true) {
            filterMembersByParty();
        } else {
            while (senateTable.firstChild) {
                senateTable.firstChild.remove()
            }
        }
    });

    document.getElementById("republican").addEventListener("click", function () {

        if (document.getElementById("republican").checked === true) {
            filterMembersByParty();
        } else {
            while (senateTable.firstChild) {
                senateTable.firstChild.remove()
            }
        }
    });

    document.getElementById("independent").addEventListener("click", function () {

        if (document.getElementById("independent").checked === true) {
            filterMembersByParty();
        } else {
            while (senateTable.firstChild) {
                senateTable.firstChild.remove()
            }
        }
    });
}

export function filterMembersByParty() {

    filteredMembers = [];
    for (let i = 0; i < senateArr.length; i++) {
        //democrats
        if ((document.getElementById("democrat").checked && senateArr[i].party === 'D')) {
            filteredMembers.push(senateArr[i]);
        }
        // republicans
        if ((document.getElementById("republican").checked && senateArr[i].party === 'R')) {
            filteredMembers.push(senateArr[i]);
        }
        //independents
        if ((document.getElementById("independent").checked && senateArr[i].party === 'ID')) {
            filteredMembers.push(senateArr[i]);
        }

    }
    while (senateTable.firstChild) {
        senateTable.firstChild.remove()
    }
    populateTable(filteredMembers, senateTable);
}