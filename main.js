let container = document.querySelector("#quote-container")
let downloadbtn = document.querySelector('#downloadbtn')
let quoteInput = document.querySelector('[name=quote]')
let quoteText = document.querySelector('#quote')
let backgroundBtn = document.querySelector("#colorchangerbtn")


// Background color change
backgroundBtn.addEventListener("click", function(a){
    let randomColors = randomColor()
    container.style.background = randomColors
})

