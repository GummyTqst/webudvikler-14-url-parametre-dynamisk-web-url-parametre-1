const wrapper = document.querySelector("#main-wrapper");
const url = "../data/destinations.json";
let heartList = [];

async function getData(url) {
    let res = await fetch(url);
    let data = await res.json();

    const content = `
        <h1 class=destination-header> Apartments for rent </h1>
        <div class="destinations">
            ${data.destinations.map((destination) => {
                return /*html*/ `
                    <figure class="destination">
                        <div class="destination__img-wrapper">
                            <img class="destination__img" src="../img/${destination.image}" alt="${destination.name}">
                        </div>

                        <figcaption class="destination__caption">
                            <h2 class="destination__title">${destination.title}</h2>

                            <div class="destination__bottom">
                                <div class="favorite heart" data-id="${destination.id}">
                                    <button class="favorite__btn" aria-label="Add to favorites">
                                        <svg class="favorite__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" aria-hidden="true"> 
                                            <path d="M305 151.1L320 171.8L335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1L576 231.7C576 343.9 436.1 474.2 363.1 529.9C350.7 539.3 335.5 544 320 544C304.5 544 289.2 539.4 276.9 529.9C203.9 474.2 64 343.9 64 231.7L64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1z" stroke="black" stroke-width="14" />
                                        </svg>
                                    </button>
                                </div>
                                <a class="destination__link" href="destination.html?id=${destination.id}">More</a>
                            </div>
                        </figcaption>
                    </figure>
                
                `
            }).join("")}
        </div>
    `
    wrapper.insertAdjacentHTML("beforeend", content);

    const hearts = wrapper.querySelectorAll(`[data-id]`)
    createLocalStorage(hearts, "heartList", true)
    handleHeart(hearts)
    updateHeartsDom("heartList", hearts)
}
getData(url);


// const mainWrapper = document.querySelector("#main-wrapper");
// fetch("../data/destinations.json")
//     .then((response) => response.json())
//     .then((data) => {
//         content(data.destinations);
// });

// function content(destinations) {
//     // console.log(destinations)

//     const destinationDom = destinations.map((destination) => {
//        return /*html*/ `
//         <figure>
//             <img src="../img/${destination.image}" alt="${destination.name}">
//             <figcaption>
//                 <img src="../img/heart.svg" alt="heart icon">
//                 <a href="destination.html?id=${destination.id}">More</a>
//             </figcaption>
//         </figure>
//     `; 
//     }).join("");
//     mainWrapper.insertAdjacentHTML("beforeend", destinationDom);
// }
