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
            const head = scrapedData.data.match(/<head>((.|\n)*?)<\/head>/, "gm");
            const player = scrapedData.data.match(/<apple-music-player .*>(.|\n)*?<\/apple-music-player>/, "gm");
            callback({ head, player });
        }).catch((err) => {
            callback(err);
        })

    }).catch(function (error) {
        callback(error)
    });
}

module.exports = getSong;