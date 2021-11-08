export function calcAverageVotesWithParty(array) {
  let sumOfVotes = 0;
  let sumOfMembers = 0;

  for (let i = 0; i < array.length; i++) {
    sumOfVotes += array[i].votes_with_party_pct;
    sumOfMembers += 1;
  }

  let average = sumOfVotes / sumOfMembers;
  return average.toFixed(2);
}
