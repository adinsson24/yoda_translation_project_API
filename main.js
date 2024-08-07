let yodaImg = document.getElementById("yodaImg");
let textInput = document.getElementById("textInput");
let generateBtn = document.getElementById("generateButton");
let yodaForm = document.querySelector("form");
let yodaTranslation = document.getElementById("yodaTranslation");

document.body.style.backgroundColor = "rgba(95,115,106,255)";
document.body.style.color = "rgba(181,129,18,255)";
document.body.style.textAlign = "center";

yodaImg.src = "Yoda.png";
yodaImg.style.width = "250px";
yodaForm.style.padding = "20px";

function generateYoda(event) {
    event.preventDefault();

    var text = textInput.value; // Get the input text
    var url = "https://api.funtranslations.com/translate/yoda.json?text=" + encodeURIComponent(text);

    fetch(url)
        .then(function(response) {
            return response.json(); // Parse the response as JSON
        })
        .then(function(myJson) {
            console.log(myJson); // Log the full response for debugging
            if (myJson.contents && myJson.contents.translated) {
                yodaTranslation.innerText = "Translation: " + myJson.contents.translated; // Display the translated text
            } else {
                yodaTranslation.innerText = "Translation not available."; // Handle missing data
            }
        })
        .catch(function(error) {
            console.error('Error:', error); // Log any errors
            yodaTranslation.innerText = "Translation not available."; // Handle fetch errors
        });
}

generateBtn.addEventListener("click", generateYoda);
