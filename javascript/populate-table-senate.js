import {senateData} from '../data/javascript/senate-data.js';


const table = document.getElementById("senate-data");
const membersArr = senateData.results[0].members;

populateTable(membersArr);

function populateTable(element) {
    
    for(let i = 0; i < membersArr.length; i++){
            table.insertAdjacentHTML("beforeend",
                "<tr><td>" + element[i].first_name + " " + 
                (element[i].middle_name ||= " ") + 
                addUrl(element[i].url, 
                    element[i].last_name) + " " + 
                element[i].party + " " + 
                element[i].state + " " + 
                element[i].seniority + " " + 
                element[i].votes_with_party_pct + "%" + "</td></tr>");
    }
}

function addUrl(link, name) {
    return "<a href=" + link + ">" + name + "</a>";
}

