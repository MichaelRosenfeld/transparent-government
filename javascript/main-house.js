//Imports
import { displaySelectedPartyMembers } from "./filter-members-by-party.js";
import { populateStateDropdown } from "./populate-state-dropdown.js";
import { displaySelectedStateMembers } from "./filter-members-by-state.js";
import { houseData } from "../data/javascript/house-data.js";

//Variables
const houseArr = houseData.results[0].members;
const houseTable = document.getElementById("house-data");

//Function calls
populateStateDropdown(houseArr);
displaySelectedPartyMembers(houseArr, houseTable);
displaySelectedStateMembers(houseArr, houseTable);
