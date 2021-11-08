import importData from "./importData.js"

const fetchData = (value, checkHead) => {
    $.ajax({
        type: "get",
        url: `/search?search=${value}`,
        dataType: "json",
        beforeSend: function () {
            $(".contentHolder").hide("fast").empty();
        },
        success: function (response) {
            importData(response, checkHead);
        },
        fail: function (err) {
            console.log(err);
        }
    })

}

export default fetchData;