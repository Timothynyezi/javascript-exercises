const sumAll = function(num1, num2) {
    if ( num1 < 0 || num2 < 0) return "ERROR";
    let finalSum = 0;
    for (let i = num1; i >= num1 && i <= num2; i++) {
        finalSum += i;

    };
    
};

// Do not edit below this line
module.exports = sumAll;
