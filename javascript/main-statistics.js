//Imports
import { senateData } from "../data/javascript/senate-data.js";
import { houseData } from "../data/javascript/house-data.js";
import { getMembers } from "./get-members.js";
import { calcAverageVotesWithParty } from "./average-votes.js";
import { leastVotedWithParty } from "./least-voted-with-party.js";
import { statistics } from "../data/javascript/statistics.js";

//Variables
const senateArr = senateData.results[0].members;
const houseArr = houseData.results[0].members;
const membersArr = senateArr.concat(houseArr);

//Function calls

//Amount of respective members
statistics.numAllMembers = getMembers(membersArr).length;
statistics.numDemocrats = getMembers(membersArr, "D").length;
statistics.numRepublicans = getMembers(membersArr,"R").length;
statistics.numIndependents = getMembers(membersArr, "I").length;

//Average Votes with respective Party
statistics.avgVotesWithPartyBothParties = calcAverageVotesWithParty(membersArr);
statistics.avgVotesWithPartyRepublicans = calcAverageVotesWithParty(getMembers(membersArr, "R"));
statistics.avgVotesWithPartyDemocrats = calcAverageVotesWithParty(getMembers(membersArr, "D"));

//Least Votes with Party
statistics.leastVotedWithParty = leastVotedWithParty(membersArr);
console.log(statistics);
