const removeFromArray = function(Array, num) {
   Array.forEach((item, index) => {
    if (item === num) {
        Array.splice(index, 1);
    }
   });
   return Array;
};
//let Array = [1, 2, 3, 4];
//removeFromArray(Array, 3);
// Do not edit below this line
module.exports = removeFromArray;
