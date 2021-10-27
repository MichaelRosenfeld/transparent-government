import {houseData} from '../data/javascript/house-data.js';


const table = document.getElementById("house-data");
const membersArr = houseData.results[0].members;

populateTable(membersArr);

function populateTable(element) {

    for (let i = 0; i < membersArr.length; i++) {
        table.insertAdjacentHTML("beforeend",
            "<tr>" +
            "<td>" + element[i].first_name + "</td>" +
            "<td>" + (element[i].middle_name ||= " ") + "</td>" +
            "<td>" + addUrl(element[i].url, element[i].last_name) + "</td>" +
            "<td>" + element[i].party + "</td>" +
            "<td>" + element[i].state + "</td>" +
            "<td>" + element[i].seniority + "</td>" +
            "<td>" + element[i].votes_with_party_pct + "%" + "</td>" +
            "</tr>");
    }
}

function addUrl(link, name) {
    return "<a href=" + link + ">" + name + "</a>";
}