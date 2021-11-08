import fetchData from "./fetchData.js";

let checkHead = false;

$('#findBtn').click(function () {
    fetchData($("#searchBar").val(), checkHead);
})