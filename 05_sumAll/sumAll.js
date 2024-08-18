const sumAll = function(num1, num2) {

    let numbers = [num1, num2];
    if (numbers.every(num => Number.isInteger(num) && num > 0)) {
        minValue = Math.min(...numbers);
        maxValue = Math.max(...numbers);
        let sumValue = 0;
        for (let i = minValue; i <= maxValue; i++) {
            sumValue += i;
        }
        return sumValue;
    }
    else {
        return "ERROR"
    }


};

// Do not edit below this line
module.exports = sumAll;
