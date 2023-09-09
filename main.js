let container = document.querySelector("#quote-container")
let backgroundBtn = document.querySelector("#colorchangerbtn")
let downloadbtn = document.querySelector('#downloadbtn')
let quoteInput = document.querySelector('[name=quote]')
let quoteText = document.querySelector('#quote')
let authorInput = document.querySelector('[name=author]')
let authorText = document.querySelector('#author')


// Background color change
backgroundBtn.addEventListener("click", function(a){
    let randomColors = randomColor()
    container.style.background = randomColors
})

// manipulate the text
quoteInput.addEventListener('keyup', function(a){
    quoteText.innerText = a.currentTarget.value
})

authorInput.addEventListener('keyup', function(a){
    authorText.innerText = a.currentTarget.value
})


// download image
downloadbtn.addEventListener('click', function() {
    html2canvas(container).then(canvas => {
        let a = document.createElement("a")
        a.download = Math.floor(Math.random() * 3000) + ".png"
        a.href = canvas.toDataURL()
        a.click()
    })
})