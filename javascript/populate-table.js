
export function populateTable(element, target) {
    for (let i = 0; i < element.length; i++) {

        function addUrl(link, name) {
            return "<a href=" + link + ">" + name + "</a>";
        }

        target.insertAdjacentHTML("beforeend",
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


