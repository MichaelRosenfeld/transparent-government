//Imports
import {displaySelectedPartyMembers} from "./filter-members-by-party.js";
import {populateStateDropdown} from "./populate-state-dropdown.js";
import {displaySelectedStateMembers} from "./filter-members-by-state.js";
import {senateData} from "../data/javascript/senate-data.js";


//Variables
const senateArr = senateData.results[0].members;
const senateTable = document.getElementById("senate-data");


//Function calls
populateStateDropdown(senateArr);
displaySelectedPartyMembers(senateArr, senateTable);
displaySelectedStateMembers(senateArr, senateTable);



