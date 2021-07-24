"use strict";
var sumOfTwo = /** @class */ (function () {
    // declare index: number;
    function sumOfTwo(arrayOfNumbers, target) {
        this.arrayOfNumbers = arrayOfNumbers;
        this.target = target;
    }
    sumOfTwo.prototype.twoSum = function () {
        console.log("userInput.arrayOfNumbers ", this.arrayOfNumbers);
        console.log("userInput.target", this.target);
        var localArrayOfNumbers = this.arrayOfNumbers.sort(function (a, b) { return a - b; });
        var localTaregt = this.target;
        for (var index = 0; index < localArrayOfNumbers.length; index++) {
            var element = localArrayOfNumbers[index];
            console.log("element ", element);
        }
        return 0;
    };
    return sumOfTwo;
}());
var value = [2, 7, 11, 15];
var obj = new sumOfTwo(value, 9);
obj.twoSum();
// declare const userInput: userInput;
// const result = userInput.index
// console.log("result is: ", result);
