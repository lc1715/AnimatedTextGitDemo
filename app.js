function randomRGB() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
}


const letters = document.querySelectorAll('.letter')

const intervalID = setInterval(function () {
    for (let letter of letters) {
        letter.style.color = randomRGB();
    }
}, 1000)