import {senateData} from "../data/javascript/senate-data.js";
import{houseData} from "../data/javascript/house-data.js";
import {populateTable} from "./populate-table.js";

// Variables

const senateTable = document.getElementById("senate-data");
const senateArr = senateData.results[0].members;
const houseTable = document.getElementById("house-data");
const houseArr = houseData.results[0].members;

// Function Calls

populateTable(senateArr, senateTable);
populateTable(houseArr, houseTable);