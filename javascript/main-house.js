// Imports
import{houseData} from "../data/javascript/house-data.js";
import {populateTable} from "./populate-table.js";

// Variables
const houseTable = document.getElementById("house-data");
const houseArr = houseData.results[0].members;

// Function calls
populateTable(houseArr, houseTable);