//Imports
import { senateData } from "../data/javascript/senate-data.js";
import { houseData } from "../data/javascript/house-data.js";
import { getMembers } from "./get-members.js";
import { calcAverageVotesWithParty } from "./average-votes.js";
import { statistics } from "../data/javascript/statistics.js";

//Variables
const senateArr = senateData.results[0].members;
const houseArr = houseData.results[0].members;
const membersArr = senateArr.concat(houseArr);

//Function calls
statistics.numDemocrats = getMembers(membersArr, "D").length;
statistics.numRepublicans = getMembers(membersArr,"R").length;
statistics.numIndependents = getMembers(membersArr, "I").length;
statistics.avgVotesWithPartyBothParties = calcAverageVotesWithParty(membersArr);
console.log(statistics);
