//Imports
import { senateData } from "../data/javascript/senate-data.js";
import { houseData } from "../data/javascript/house-data.js";
import { getMembers } from "./get-members.js";
import { calcAverageVotesWithParty } from "./average-votes.js";
import { calcTopTen } from "./calc-top-ten.js";
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
statistics.leastVotedWithParty = calcTopTen(membersArr, "votes_against_party_pct");
statistics.mostVotedWithParty = calcTopTen(membersArr, "votes_with_party_pct");
statistics.mostMissedVotes = calcTopTen(membersArr, "missed_votes");
console.log(statistics);
