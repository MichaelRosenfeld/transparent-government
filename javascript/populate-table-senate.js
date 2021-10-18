import {senateData} from '../data/javascript/senate-data.js';

const table = document.getElementById("senate-data");
const membersArr = senateData.results[0].members;



membersArr.forEach((e) => {
    constructString(getValuebyKey(e)) ;
} )



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

function constructString(element) {
    table.insertAdjacentHTML("beforeend", "<tr><td>" + element + " " + "</td></tr>");
}

function getValuebyKey(object) {
    return Object.values(object).find(key => object[key]);
}