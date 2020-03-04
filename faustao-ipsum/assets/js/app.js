import { FaustoIpsum } from './fausto-ipsum.js';

let totalImages = 7;

document.addEventListener("DOMContentLoaded", () => document.querySelector("header").style.backgroundImage = `url('./assets/backgrounds/${FaustoIpsum.getRandomNumber(totalImages)}.png')`);

let createText = function () {
    window.getSelection().removeAllRanges();
    document.querySelector("#result").innerHTML = FaustoIpsum.createText({ paragraphsQuantity: document.querySelector("#paragraphsQuantity").value });
}

document.querySelector("#createText").addEventListener("click", createText);

document.addEventListener("DOMContentLoaded", createText);

document.querySelector("#copyToClipboard").addEventListener("click", () => {
    let selection = window.getSelection();
    selection.removeAllRanges();

    let range = document.createRange();
    let resultDiv = document.querySelector("#result");
    range.selectNode(resultDiv);
    selection.addRange(range);

    var text = resultDiv.innerHTML;
    text = text.replace("<p>", "").replace("</p>", "\r\n\r\n");

    navigator.clipboard.writeText(text).then(() => {

    });
});