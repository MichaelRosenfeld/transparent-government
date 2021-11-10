// Takes Array of members, populates specified target table with fixed properties.
export function populateTable(array, target) {
  for (let i = 0; i < array.length; i++) {
    target.insertAdjacentHTML(
      "beforeend",
      "<tr>" +
        "<td>" +
        array[i].first_name +
        "</td>" +
        "<td>" +
        (array[i].middle_name || " ") +
        "</td>" +
        "<td>" +
        addUrl(array[i].url, array[i].last_name) +
        "</td>" +
        "<td>" +
        array[i].party +
        "</td>" +
        "<td>" +
        array[i].state +
        "</td>" +
        "<td>" +
        array[i].seniority +
        "</td>" +
        "<td>" +
        array[i].votes_with_party_pct +
        "%" +
        "</td>" +
        "</tr>"
    );
  }

  function addUrl(link, name) {
    return "<a href=" + link + ">" + name + "</a>";
  }
}

export function populateAtGlance(object, target, key, key2) {
  target.insertAdjacentHTML("beforeend", "<td>" + object[key]) + "%" + "</td>";

  if (key2) {
    target.insertAdjacentHTML("beforeend", "<td>" + object[key2]) + "</td>";
  }
}
