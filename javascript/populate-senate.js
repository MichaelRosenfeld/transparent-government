// Imports
import {senateData} from "../data/javascript/senate-data.js";
import {populateTable} from "./populate-table.js";

// Variables
const senateTable = document.getElementById("senate-data");
const senateArr = senateData.results[0].members;

// Function calls
populateTable(senateArr, senateTable);

//if Democrat is selected
document.getElementById("democrat").addEventListener("click", function () {

    /*   filter_party(members_array) */
    if (document.getElementById("democrat").checked === true){
        populateTable(senateArr, senateTable);
    }
    else{
        populateTable(senateArr, senateTable);
    }
});
//if Republican is selected
document.getElementById("republican").addEventListener("click", function () {
    /*   filter_party(members_array) */
    if (document.getElementById("republican").checked === true){
        populateTable(senateArr, senateTable);
    }
    else{
        populateTable(senateArr, senateTable);
    }
});
//if Independent is selected
document.getElementById("independent").addEventListener("click", function () {
    /*   filter_party(members_array) */
    if (document.getElementById("independent").checked === true){
        populateTable(senateArr, senateTable);
    }
    else{
        populateTable(senateArr, senateTable);
    }
});


