const url = "https://api.propublica.org/congress/v1/113/house/members.json";

async function getData(url) {
  const response = await fetch(url, {
    headers: { "X-API-Key": "FzLQb1m5Kv6Jp5dRmBYR8vaMJ1aN6fGpxyEp3sxp" },
  });

  return response.json();
}

const houseData = await getData(url);

export { houseData };
