var btnTranslate = document.querySelector("#btn-translate");
var text = document.querySelector("#text");

btnTranslate.addEventListener("click", function onClick() {
    console.log("clicked!");
    console.log("you entered:", text.value);
})