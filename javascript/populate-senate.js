// Imports
import {senateData} from "../data/javascript/senate-data.js";
import {populateTable} from "./populate-table.js";

// Variables
const senateTable = document.getElementById("senate-data");
const senateArr = senateData.results[0].members;
let selected_members_filter = [];

// Function calls
checkIfSelected();

function checkIfSelected() {
    document.getElementById("democrat").addEventListener("click", function () {

        if (document.getElementById("democrat").checked === true) {
            filterMembersForParty();
        } else {
            while (senateTable.firstChild) {
                senateTable.firstChild.remove()
            }
        }
    });

    document.getElementById("republican").addEventListener("click", function () {

        if (document.getElementById("republican").checked === true) {
            filterMembersForParty();
        } else {
            while (senateTable.firstChild) {
                senateTable.firstChild.remove()
            }
        }
    });

    document.getElementById("independent").addEventListener("click", function () {

        if (document.getElementById("independent").checked === true) {
            filterMembersForParty();
        } else {
            while (senateTable.firstChild) {
                senateTable.firstChild.remove()
            }
        }
    });
}

function filterMembersForParty() {
    selected_members_filter = [];
    for (let i = 0; i < senateArr.length; i++) {
        //democrats
        if ((document.getElementById("democrat").checked && senateArr[i].party === 'D')) {
            selected_members_filter.push(senateArr[i]);
        }
        // republicans
        if ((document.getElementById("republican").checked && senateArr[i].party === 'R')) {
            selected_members_filter.push(senateArr[i]);
        }
        //independents
        if ((document.getElementById("independent").checked && senateArr[i].party === 'ID')) {
            selected_members_filter.push(senateArr[i]);
        }

    }
    while (senateTable.firstChild) {
        senateTable.firstChild.remove()
    }
    populateTable(selected_members_filter, senateTable);
}


