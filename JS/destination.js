let params = new URLSearchParams(window.location.search);
const id = params.get("id");
const mainWrapper = document.querySelector("#main-wrapper");

console.log(id);

fetch(`../data/${id}.json`).then((response) => response.json()).then((data) => {
    showData(data);
})


function showData(data) {
   const content =  `<h2>${data.title}</h2>`

    mainWrapper.insertAdjacentHTML("beforeend", content);
}


    