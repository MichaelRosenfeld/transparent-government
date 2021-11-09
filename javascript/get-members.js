
export function getNumOfMembers(data, party) {
  let members = [];

  if (party) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].party === party) {
        members.push(data[i]);
      }
    }
  } else {
    for (let i = 0; i < data.length; i++) {
      members.push(data[i]);
    }
  }
  return members;
}
