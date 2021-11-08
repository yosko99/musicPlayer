import cardTemplate from "./partials/cardTemplate.js";
import fetchSong from "./fetchSong.js";

const importData = (response) => {
    const { response: { hits } } = response;
    let content = '';
    for (const hit in hits) {
        const { result: { artist_names: artist } } = hits[hit];
        const { result: { header_image_thumbnail_url: imgUrl } } = hits[hit];
        const { result: { full_title: title } } = hits[hit];
        const { result: { id } } = hits[hit];
        content += cardTemplate(imgUrl, artist, title, id);
    }
    $(".contentHolder").html(content).show("slow");

    $(".card img").on("click", function () {
        const id = $(this).parent().parent().attr("id");
        const currentSong = $(this).parent().parent().text();

        fetchSong(id, ({ player }) => {
            $("#musicPlayer").empty()
                .html(`<source src="${player}"/>`)

            $("#currentSong").html(currentSong);
            document.querySelector("#musicPlayer").load();
            $("#player").show("slow");
        })
    })
}

export default importData;