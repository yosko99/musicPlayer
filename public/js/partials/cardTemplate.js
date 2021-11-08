const cardTemplate = (imgUrl, artist, title, id) => {
  return `
<div class="card p-2" id=${id}>
    <div class="cardBackground" style="background-image: url(${imgUrl})">
      <img src="./img/play-button.png" alt="Play button">
    </div>
    <div class="card-body">
      <h5 class="card-title">${artist}</h5>
      <p class="card-text">
        ${title}
      </p>
    </div>
  </div>`
}

export default cardTemplate;