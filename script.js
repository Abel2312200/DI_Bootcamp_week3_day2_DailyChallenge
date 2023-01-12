


let libButton = document.getElementById('lib-button');
let allInputs = document.querySelectorAll('input');
let inputArray = [];

libButton.addEventListener('click', getInputValues);

function getInputValues(e) {
    for (let index = 0; index < allInputs.length; index++) {
        if( allInputs[index].value == ''){
            inputArray = [];
            break;
        }else{
            inputArray.push(allInputs[index].value);     
        }
    }
    if (inputArray.length !== 0)
        console.log(`My name is ${inputArray[0]}, I'm ${inputArray[1]}. And my best freind ${inputArray[2]} ${inputArray[3]} in ${inputArray[4]}`);
    e.preventDefault();
}

let inputValuesArray = [];
console.log(libButton)
