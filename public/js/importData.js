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
        fetchSong(id, ({ head, player }) => {
            if (checkHead === false) {
                $(head).appendTo("head");
                $("#musicPlayer").html(player).show("slow");
                checkHead = true;
            } else {
                $(player).appendTo("#musicPlayer");
            }
        })
    })
}

export default importData;