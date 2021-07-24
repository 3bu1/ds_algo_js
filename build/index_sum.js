"use strict";
var add = function (num1, num2) {
    var total = num1 + num2;
    return total;
};
console.log("add(1,2) ", add(1, 2));
console.log("add(1,2) ", add(999999999999999999999999999, 9999999999999999999999999999999));
module.export = add;
