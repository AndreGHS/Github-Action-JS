const request = require("request-promise");

const options = {
    method: 'GET',
    uri: "https://icanhazdadjoke.com/",
    headers: {
        Accept: 'application/json',
        "User-Agent": "Writing JS action GitHub Skills Course.",
    },
    json:true,
};

async function getjoke() {
    const res = await request(options);
    return res.joke;
}

module.exports = getjoke;