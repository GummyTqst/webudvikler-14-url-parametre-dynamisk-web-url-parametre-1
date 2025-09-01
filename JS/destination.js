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
    </div>
    `

    detailWrapper.insertAdjacentHTML("beforeend", content);
}


    