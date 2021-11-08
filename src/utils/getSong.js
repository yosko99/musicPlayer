var axios = require("axios").default;
require("dotenv").config();

const getSong = (songID, callback) => {
    let options = {
        method: 'GET',
        url: `https://genius.p.rapidapi.com/songs/${songID}`,
        headers: {
            'x-rapidapi-host': 'genius.p.rapidapi.com',
            "x-rapidapi-key": process.env.RAPID_API_KEY
        }
    };

    axios.request(options).then(function (response) {
        const { response: { song: { apple_music_player_url: playerUrl } } } = response.data;
        axios.get(playerUrl).then((scrapedData) => {
            const player = scrapedData.data.match(/<link rel="preload" href="((.)*)" as="audio">/, "gm")[1];
            callback({ player });
        }).catch((err) => {
            callback(err);
        })

    }).catch(function (error) {
        callback(error)
    });
}

module.exports = getSong;