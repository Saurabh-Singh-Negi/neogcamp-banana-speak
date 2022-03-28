var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("#text-area");
var outputText = document.querySelector("#output");


btnTranslate.addEventListener("click", function onClicking(){
    outputText.innerText = inputText.value + " hahahaha";
});

