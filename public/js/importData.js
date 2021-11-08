import cardTemplate from "./partials/cardTemplate.js";
import fetchSong from "./fetchSong.js";

const importData = (response, checkHead) => {
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
        fetchSong(id, (data) => {
            if (checkHead === false) {
                $(data.head[1]).appendTo("head");
                $("#musicPlayer").html(data.player[0]);
                checkHead = true;
            } else {
                // $("#musicPlayer").empty();
                $(data.player[0]).appendTo("#musicPlayer");
            }
        })
    })
}

export default importData;