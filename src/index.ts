


interface userInput {
	arrayOfNumbers: number[];
	target: number;
	// index: number;
	twoSum(): number
  }

class sumOfTwo { 
	arrayOfNumbers: number[];
	target: number;
	// declare index: number;
	
	constructor(arrayOfNumbers: number[], target: number) {
	  this.arrayOfNumbers = arrayOfNumbers;
	  this.target = target;
	}

	twoSum(): number{
		console.log("userInput.arrayOfNumbers ", this.arrayOfNumbers);
		console.log("userInput.target", this.target);
		let localArrayOfNumbers = this.arrayOfNumbers.sort(function(a, b){return a - b});
		let localTaregt = this.target;
		for (let index = 0; index < localArrayOfNumbers.length; index++) {
			const element = localArrayOfNumbers[index];
			console.log("element ", element);
			if(element<localTaregt){
				
			}
		}
		return 0
	}
 } 
 const value = [2,7,11,15];
 const obj = new sumOfTwo(value , 9);
 obj.twoSum() 
// declare const userInput: userInput;
 // const result = userInput.index
 // console.log("result is: ", result);
 