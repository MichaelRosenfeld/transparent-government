import {senateData} from '../data/javascript/senate-data.js';

const tableParent = document.getElementById("senate-data");
const membersArr = senateData.results[0].members;

let th = document.createElement("th");
document.body.appendChild(th);
th.insertAdjacentHTML("beforebegin", "First Name" + "Last Name")

for (let i = 0; i < membersArr.length; i++) {
    let firstName = membersArr[i].first_name;
    let middleName = membersArr[i].middle_name;
    let lastName = membersArr[i].last_name;
    let party = membersArr[i].party;
    let state = membersArr[i].state;
    let seniority = membersArr[i].seniority;
    let votesWithParty = membersArr[i].votes_with_party_pct;
    let url = membersArr[i].url;

    let tr = document.createElement("tr");
    let td = document.createElement("td");

    document.body.appendChild(tr);
    document.body.appendChild(td);

    td.insertAdjacentHTML('afterbegin', addUrl(url, firstName) + " " +
        addUrl(url, hasMiddleName(middleName)) + " " + addUrl(url, lastName) +
        " " + party + " " + state + " " + seniority + " " + votesWithParty + "%");

}

function hasMiddleName(name) {
    if (name != null) {
        return name;
    } else {
        return " "
    }
}

function addUrl(link, name) {
    return "<a href=" + link + ">" + name + "</a>";
}