function createLocalStorage(hearts, localStorageName, isFrontpage) {
    const localStorage = getLocalItem(localStorageName)
    if (!localStorage || localStorage.length === 0) { // If no localStorage is present, then create it
        const heartList = createHeartList(hearts)
        setLocalItem(localStorageName, heartList) // Insert local storage
    }
    // User has been on destination page first and on the frontpage
    else if (localStorage.length === 1 && isFrontpage) {
        const heartList = createHeartList(hearts)
        heartList.forEach((heart) => {
            if (heart.id == localStorage[0].id) {
                heart.active = localStorage[0].active
            }
        })
        setLocalItem(localStorageName, heartList) // Insert local storage
    }
}

function createHeartList(hearts) {
    const heartList = []
    hearts.forEach((heart) => {
        const heartId = Number(heart.dataset.id)
        const heartObj = { id: heartId, active: false }
        heartList.push(heartObj)
    })
    return heartList
}

function handleHeart(hearts) {
    hearts.forEach((heart) => {
        heart.addEventListener("click", handleHeartClick)
    })
}

function handleHeartClick(event) {
    const key = "heartList"
    const target = event.currentTarget
    const id = parseInt(target.dataset.id)

    const heartList = getLocalItem(key)
    const item = heartList.find(h => h.id === id)

    if (item) {
        item.active = !item.active
        setLocalItem(key, heartList)
        updateHeartsDom(key)
    }
}

function updateHeartsDom(key) {
    const heartLocalStorage = getLocalItem(key)

    heartLocalStorage.forEach((elm) => {
        const heartDom = document.querySelector(`[data-id="${elm.id}"]`)
        if (!heartDom) {
            return
        }

        elm.active
            ? heartDom.classList.add("active")
            : heartDom.classList.remove("active")
    })
}