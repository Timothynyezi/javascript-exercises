const repeatString = function(string, num) {
    if (num < 0) return "ERROR";
    let word = "";
    let i = 0;
    while(i < num) {
        word += string;
        i++;
    }
    return word;
};



// Do not edit below this line
module.exports = repeatString;
