const repeatString = function(string, num) {
    let word = string;
    let i = 1;
    while (i < num) {
        console.log(word);
        i++;
    }
    return word;
};
console.log(repeatString("hey", 3));


// Do not edit below this line
module.exports = repeatString;
