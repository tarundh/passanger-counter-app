//document.getElementById("count-el").innerText = 5

let countEL = document.getElementById("count-el")
console.log(countEL)

let count = 0
let saveEl = document.getElementById("save-el")

function increment() {
    count = count + 1
    countEL.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEL.textContent = count
    count = 0
}