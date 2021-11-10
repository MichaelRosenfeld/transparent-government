let houseData = fetch(
  "https://api.propublica.org/congress/v1/113/house/members.json",
  {
    type: "GET",
    dataType: "json",
    headers: { "X-API-Key": "FzLQb1m5Kv6Jp5dRmBYR8vaMJ1aN6fGpxyEp3sxp" },
  }
)
  .then((response) => response.json())
  .then((data) => console.log(data));

export { houseData };
