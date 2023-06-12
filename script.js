// DOMs
const colorAnswer = document.getElementById("color")
const changeColors = document.getElementById("changeColors")
const squares = document.querySelectorAll(".color_box")

let pickedColor
let colors = []
let r, g, b

init()

changeColors.onclick = function () {
    init()
}

function init() {
    colors = []
    genColors()
    colorSquares()
    pickedColor = chooseColor()
    colorAnswer.textContent = pickedColor
}

function colorSquares() {
    for (i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i]
        squares[i].onclick = function () {
            if (pickedColor === this.style.backgroundColor) {
                for (i = 0; i < squares.length; i++) {
                    squares[i].style.backgroundColor = pickedColor
                }
            } else {
                this.style.backgroundColor = "#232323"
            }
        }
    }
}

function chooseColor() {
    var random = Math.floor(Math.random() * colors.length)
    return colors[random]
}

function genColors() {
    for (i = 0; i < squares.length; i++) {
        colors.push(makeColor())
    }
}

function makeColor() {
    r = Math.floor(Math.random() * 256)
    g = Math.floor(Math.random() * 256)
    b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}
