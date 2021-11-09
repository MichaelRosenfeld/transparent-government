//Imports
import { senateData } from "../data/javascript/senate-data.js";
import { houseData } from "../data/javascript/house-data.js";
import { getNumOfMembers } from "./get-members.js";
import { calcAverageVotesWithParty } from "./average-votes.js";
import { calcTopTen, calcLeastMissedVotes } from "./calc-top-ten.js";
import { statistics } from "../data/javascript/statistics.js";

//Variables
const senateArr = senateData.results[0].members;
const houseArr = houseData.results[0].members;
const membersArr = senateArr.concat(houseArr);

//Function calls
statistics.numAllMembers = getNumOfMembers(membersArr).length;
statistics.numDemocrats = getNumOfMembers(membersArr, "D").length;
statistics.numRepublicans = getNumOfMembers(membersArr, "R").length;
statistics.numIndependents = getNumOfMembers(membersArr, "I").length;

statistics.avgVotesWithPartyBothParties = calcAverageVotesWithParty(membersArr);
statistics.avgVotesWithPartyRepublicans = calcAverageVotesWithParty(
  getNumOfMembers(membersArr, "R")
);
statistics.avgVotesWithPartyDemocrats = calcAverageVotesWithParty(
  getNumOfMembers(membersArr, "D")
);

statistics.leastVotedWithParty = calcTopTen(
  membersArr,
  "votes_against_party_pct"
);
statistics.mostVotedWithParty = calcTopTen(membersArr, "votes_with_party_pct");
statistics.mostMissedVotes = calcTopTen(membersArr, "missed_votes");
statistics.leastMissedVotes = calcLeastMissedVotes(
  membersArr,
  "missed_votes_pct"
);
console.log(statistics);
