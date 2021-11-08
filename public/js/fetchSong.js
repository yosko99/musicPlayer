const fetchSong = (id, callback) => {
    $.ajax({
        type: "get",
        url: `/songs?song=${id}`,
        dataType: "json",
        success: function (response) {
            callback(response)
        },
        fail: function (err) {
            callback(err);
        }
    })
}

export default fetchSong;