import importData from "./importData.js"

const fetchData = (value) => {
    $.ajax({
        type: "get",
        url: `/search?search=${value}`,
        dataType: "json",
        success: function (response) {
            importData(response);
        },
        fail: function (err) {
            console.log(err);
        }
    })

}

export default fetchData;