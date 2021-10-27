// Imports
import {senateData} from "../data/javascript/senate-data.js";
import {populateTable} from "./populate-table.js";

// Variables
const senateTable = document.getElementById("senate-data");
const senateArr = senateData.results[0].members;

// Function calls
populateTable(senateArr, senateTable);