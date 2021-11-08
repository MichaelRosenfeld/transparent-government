export function leastVotedWithParty(array) {
  let votesArray = [];
  let result = [];

  //Push needed vote percentages from the Object to
  //an array for further manipulation
  for (let i = 0; i < array.length; i++) {
    votesArray.push(array[i].votes_against_party_pct);
  }

  //Save the top ten values to this array
  let topTen = votesArray.sort(function (a, b) { return b - a }).slice(0, 10);


  //Push the top ten names associated with the top ten values to
  //the Result Array
  for (let i = 0; i < array.length; i++) {
    array.filter(obj => {
      if (obj.votes_against_party_pct === topTen[i]) {
        result.push(obj.last_name);
      }
    })
  }
  console.log(result);
  return result;
}
