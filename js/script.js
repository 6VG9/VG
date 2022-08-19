function calcSumm(num1, num2, more, less) {
    let numSumm = num1 + num2;
    
    if (numSumm > 3) {
        more();
    } 
    else {
        less();
    }
}

function showMoreMessage() {
    console.log('Больше чем 3');
}
function showLessMessage() {
    console.log('Меньше чем 3');
}
calcSumm(1, 1, showMoreMessage, showLessMessage);

