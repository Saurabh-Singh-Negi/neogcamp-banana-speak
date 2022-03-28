var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("#text-area");
var outputText = document.querySelector("#output");

//var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function getCompleteUrl(text) {
    return serverUrl + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("you have an error",error);
}

function clickHandler() {
    
    var textByUser = inputText.value;
    //server call for processing 
    fetch(getCompleteUrl(textByUser))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputText.innerText = translatedText;
    })
    .catch(errorHandler)

};

btnTranslate.addEventListener("click", clickHandler);
