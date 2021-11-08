export function calcTopTen(array, key) {
  let votesArray = [];
  let result = [];

  //Push needed vote percentages from the Object to
  //an array for further manipulation
  for (let i = 0; i < array.length; i++) {
    votesArray.push(array[i][key]);
  }

  //Save the top ten values to this array
  let topTen = votesArray.sort(function (a, b) { return b - a }).slice(0, 10);


  //Push the top ten names associated with the top ten values to
  //the Result Array
  for (let i = 0; i < array.length; i++) {
    array.filter(obj => {
      if (obj[key] === topTen[i]) {
        result.push(obj.last_name);
      }
    })
  }

  //Killing duplicates
  let uniqueResult = [...new Set(result)];
  console.log(uniqueResult);
  return uniqueResult;
}
