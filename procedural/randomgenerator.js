

class RandomGenerator{
	constructor(min, max){ 
		this.min = min;
		this.max = max;
		//takes in the minimum and maximum values
		//if they are not defined, it sets the minimum to 1, and the max to 10
		//makes storage for the random number
		if (min === undefined){
			this.min = 1;
		}
		if (max === undefined){
			this.max = 10;
		}
		this.randomNum = null;
	}
	generate(){
		//make a random value between the minimum and maximum values
		//and store the number into the storage from the constructor
		this.randomNum = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
	}
	getRange(){
		//return an object with min and max, min being the minimum value for the generator, max being the maximum value
		//returns a basic object literal
		var minMaxObj = {
			min: this.min,
			max: this.max,
		};
		return minMaxObj;
	}
	getNum(){
		//return the random number that was generated by generate()
		return this.randomNum;
	}
}