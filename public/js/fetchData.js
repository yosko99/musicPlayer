import importData from "./importData.js"

const fetchData = (value) => {
    $.ajax({
        type: "get",
        url: `/search?search=${value}`,
        dataType: "json",
        beforeSend: function () {
            $(".contentHolder").hide("fast").empty();
        },
        success: function (response) {
            importData(response);
        },
        fail: function (err) {
            console.log(err);
        }
    })

}

export default fetchData;