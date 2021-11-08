import fetchData from "./fetchData.js";

$('#findBtn').click(function () {
    fetchData($("#searchBar").val());
})