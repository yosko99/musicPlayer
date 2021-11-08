var axios = require("axios").default;
require("dotenv").config();

const fetchData = (search, callback) => {
    let options = {
        method: 'GET',
        url: 'https://genius.p.rapidapi.com/search',
        params: { q: search },
        headers: {
            'x-rapidapi-host': 'genius.p.rapidapi.com',
            "x-rapidapi-key": process.env.RAPID_API_KEY
        }
    };

    axios.request(options).then(function (response) {
        callback(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}

module.exports = fetchData;