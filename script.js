var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("#text-area");
var outputText = document.querySelector("#output");

var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function getCompleteUrl(text) {
    return serverUrl + "?" + "text=" + text;
}


btnTranslate.addEventListener("click", function onClick(){
    var textByUser = inputText.value;

    fetch(getCompleteUrl(textByUser))
    .then(response => response.json())
    .then(json => console.log(json.contents.translated));

});

