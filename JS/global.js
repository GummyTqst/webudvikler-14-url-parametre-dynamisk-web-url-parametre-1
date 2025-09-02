
function setLocalItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function getLocalItem(key) {
    return JSON.parse(localStorage.getItem(key)) || []
}

function removeLocalItem(key) {
    localStorage.removeItem(key)
}