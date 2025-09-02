let params = new URLSearchParams(window.location.search);
const id = params.get("id");
const detailWrapper = document.querySelector("#detail-wrapper");

console.log(id);

fetch(`../data/${id}.json`).then((response) => response.json()).then((data) => {
    showData(data);
})


function showData(data) {
   const content =  `
    <div class="destination-container">
        <figure class="destination-image">
            <img src="../img/${data.image}" alt="${data.name}">
        </figure>

        <div class="favorite heart" data-id="${data.id}">
            <button class="favorite__btn" aria-label="Add to favorites">
                <svg class="favorite__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" aria-hidden="true"> 
                    <path d="M305 151.1L320 171.8L335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1L576 231.7C576 343.9 436.1 474.2 363.1 529.9C350.7 539.3 335.5 544 320 544C304.5 544 289.2 539.4 276.9 529.9C203.9 474.2 64 343.9 64 231.7L64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1z" stroke="black" stroke-width="14" />
                </svg>
            </button>
        </div>


        <div class="destination-info">
            <p>${data.destination}</p>
            <h2>${data.title}</h2>
            <p>${data.subtitle}</p>
            <p>${data.text}</p>
            <ul>
                Faciliteter
                <li>${data.facilities[0]}</li>
                <li>${data.facilities[1]}</li>
                <li>${data.facilities[2]}</li>
                <li>${data.facilities[3]}</li>
            </ul>
        </div>

        <div class="back-link">
            <a href="index.html">← Back to overview</a>
        </div>
    </div>
    `

    detailWrapper.insertAdjacentHTML("beforeend", content);

    const heart = document.querySelector(`[data-id="${data.id}"]`);
    createLocalStorage([heart], "heartList", false); // false because not frontpage
    handleHeart([heart]);
    updateHeartsDom("heartList");
}


    