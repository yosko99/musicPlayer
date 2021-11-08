import fetchData from "./fetchData.js";
import setFavorite from "./setFavorite.js"

setFavorite(fetchData);

$('#findBtn').click(function () {
    fetchData($("#searchBar").val());
})


