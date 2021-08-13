// using Function
function handelJustFunctionClick() {
    const p = document.getElementById('clicking-method');
    p.innerText = 'set by using Function';
}

// direct 
document.getElementById('handle-event')
addEventListener('click', function () {
    const p = document.getElementById('clicking-method');
    p.innerText = 'What is your Name?';
})
// direct with input
document.getElementById('updateName');
addEventListener('click', function () {
    const NameFiled = document.getElementById('updateName');
    const p = document.getElementById('clicking-method')
    p.innerText = NameFiled.nodeValue;
    NameFiled.value = '';
})