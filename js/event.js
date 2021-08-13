function makeRed() {
    document.body.style.backgroundColor = 'red';
}

const blueButton = document.getElementById('make-blue-button');
blueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}
// <!-- anonymous Function -->
const greenButton = document.getElementById('make-green-button');
greenButton.onclick = function () {
    document.body.style.backgroundColor = 'green';
}
// handel by using and addEventListener
const goldenButton = document.getElementById('make-goldenRod');
goldenButton.addEventListener('click', makeGoldenRoad)
function makeGoldenRoad() {
    document.body.style.backgroundColor = 'gray';
}
// addEventListener
const hotPinkButton = document.getElementById('make-BlueViolet');
hotPinkButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'BlueViolet'
})

// direct Shortcut
document.getElementById('makeCrimson').addEventListener('click', function () {
    document.body.style.backgroundColor = 'Crimson';
})