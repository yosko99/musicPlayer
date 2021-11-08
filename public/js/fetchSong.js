const fetchSong = (id, callback) => {
    $.ajax({
        type: "get",
        url: `/songs?song=${id}`,
        dataType: "json",
        beforeSend : function(){
            $("#player").hide("slow");
            $("#spinner").show("slow");
        },
        success: function (response) {
            $("#spinner").hide("fast");
            callback(response)
        },
        fail: function (err) {
            callback(err);
        }
    })
}

export default fetchSong;