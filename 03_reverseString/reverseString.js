const reverseString = function(inputWord) {

    charCount = inputWord.length;
    let reverseWord = "";
    for ( let i = 0; i <= charCount; i++)
        reverseWord += inputWord.charAt(charCount - i);
    return reverseWord

};

// Do not edit below this line
module.exports = reverseString;
