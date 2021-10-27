
// Takes Array of members, populates specified target table

export function populateTable(array, target) {
    
    for (let i = 0; i < array.length; i++) {
        target.insertAdjacentHTML("beforeend",
            "<tr>" +
            "<td>" + array[i].first_name + "</td>" +
            "<td>" + (array[i].middle_name ||= " ") + "</td>" +
            "<td>" + addUrl(array[i].url, array[i].last_name) + "</td>" +
            "<td>" + array[i].party + "</td>" +
            "<td>" + array[i].state + "</td>" +
            "<td>" + array[i].seniority + "</td>" +
            "<td>" + array[i].votes_with_party_pct + "%" + "</td>" +
            "</tr>");
    }
    
    // Adds a link to personal Homepage to name of member
    function addUrl(link, name) {
        return "<a href=" + link + ">" + name + "</a>";
    }
}



