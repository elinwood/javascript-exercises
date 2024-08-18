const repeatString = function(inputWord, times) {

    if (times < 0) return "ERROR";

    let outputWord = "";


    for (let i = 0; i < times; i++)
        outputWord += inputWord;
        return outputWord;

};

// Do not edit below this line
module.exports = repeatString;
