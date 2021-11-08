const setFavorite = (fetchData) => {

    if (localStorage.getItem("favorite")) {
        fetchData(localStorage.getItem("favorite"));
        $(".heart img").attr("src", "./img/filled-heart.png");
        $("#searchBar").val(localStorage.getItem("favorite"));
    }

    $("#findBtn").click(function () {
        if (localStorage.getItem("favorite") == $("#searchBar").val()) {
            $(".heart img").attr("src", "./img/filled-heart.png");
        } else {
            $(".heart img").attr("src", "./img/empty-heart.png");
        }
    })

    $(".heart img").click(function () {
        if ($("#searchBar").val() == localStorage.getItem("favorite")) {
            localStorage.removeItem("favorite");
            $(".heart img").attr("src", "./img/empty-heart.png");

        } else {
            localStorage.setItem("favorite", $("#searchBar").val());
            $(".heart img").attr("src", "./img/filled-heart.png");
        }
    })
}

export default setFavorite;