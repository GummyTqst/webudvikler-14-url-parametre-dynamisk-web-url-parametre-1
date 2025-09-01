const mainWrapper = document.querySelector("#main-wrapper");
fetch("../data/destinations.json").then((response) => response.json()).then((data) => {
    content(data.destinations);

});

function content(destinations) {
    // console.log(destinations)

    const destinationDom = destinations.map((destination) => {
       return /*html*/ `
        <figure>
            <img src="../img/${destination.image}" alt="${destination.name}">
            <figcaption>
                <h2>${destination.title}</h2>
                <a href="destination.html?id=${destination.id}">More</a>
            </figcaption>
        </figure>
    `; 
    }).join("");
    mainWrapper.insertAdjacentHTML("beforeend", destinationDom);
}
