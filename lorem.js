const generateBtn = document.getElementById('generate-btn')
const copyBtn = document.getElementById('copy-btn')
const paraDisplay = document.getElementById('para')
const options = {
    method: "GET",
    headers: {"x-api-key": apiKey},
}

let url = "https://api.api-ninjas.com/v1/loremipsum?paragraphs=";


let generateParas = () => {
let noOfPara = document.getElementById('no-of-para').value
let finalURL = url + noOfPara

fetch(finalURL, options)

.then(x => x.json())
.then(data => {
    paraDisplay.innerText = data.text;
})
}

// copy function

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(paraDisplay.innerText)
    alert("COPIED!")
})


generateBtn.addEventListener('click', generateParas)
window.addEventListener('load', generateParas)





// learned
// navigator.clipboard.writeText()