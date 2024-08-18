const removeFromArray = function(inputArray, ...removed) {

    const outputArray = inputArray.filter(number => !removed.includes(number));
        return outputArray
    };

// Do not edit below this line
module.exports = removeFromArray;
