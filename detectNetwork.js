// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

/*
	Diner's Club always starts with a 38 or 39 and has a length of 14.
	American Express always starts with a 34 or 37 and has a length of 15
	Visa always has a prefix of 4 and a length of 13, 16, or 19.
	MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
	Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
	Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
	China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
	Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.

	Regular Expressions:
	 dinersClub = /^3[89][0-9]{12}$/
	 americanExpress = /^3[47][0-9]{13}$/
	 visa = /^4[0-9]{12}([0-9]{3})?([0-9]{3})?$/
	 masterCard = /^5[1-5][0-9]{14}$/
	 discover = /^6((4[4-9])|(011)|5)([0-9]{12,17})$/
	 maestro = /^((5018)|(5020)|(5038)|(6304))[0-9]{8,15}$/
	 chinaUP = /^((622[1-9]\d\d)|(62[4-6])|(628[2-8]))[0-9]{10}([0-9]{1,6})?$/
	 switch1 = /^((4903)|(4905)|(4911)|(4936)|(564182)|(633110)|(6333)|(6759))[0-9]{10}([0-9]{2,5})?$/;
*/
var addToArr = function(arr,start,end) {
	for(start; start<=end; start++) {
		arr.push(start + '');
	}
}
var Card = function(name, prefix, length, regExp) {
	this.name = name;
	this.prefix = prefix;
	this.length = length;
	this.regExp = regExp;
};

var dinersClub = new Card("Diner\'s Club", ['38','39'],[14],
						/^3[89][0-9]{12}$/);
var americanExpress = new Card("American Express", ['34','37'], [15],
						/^3[47][0-9]{13}$/);
var visa = new Card("Visa", ['4'], [13,16,19],
						/^4[0-9]{12}([0-9]{3})?([0-9]{3})?$/);
var masterCard = new Card("MasterCard", ['51','52','53','54','55'], [16], 
						/^5[1-5][0-9]{14}$/);
var discover = new Card("Discover", ['6011','644','645','646','647','648','649','65'], [16,19],
						/^6((4[4-9])|(011)|5)([0-9]{12,17})$/);
var maestro = new Card("Maestro", ['5018','5020','5038','6304'],[12,13,14,15,16,17,18,19],
	 					/^((5018)|(5020)|(5038)|(6304))[0-9]{8,15}$/);
var chinaUP = new Card("China UnionPay", [], [16,17,18,19],
					 	/^((622[1-9]\d\d)|(62[4-6])|(628[2-8]))([0-9]{10})?([0-9]{1,6})?$/);
var switch1 = new Card("Switch",['4903','4905','4911','4936','564182','633110','6333','6759'],[16,18,19],
						/^((4903)|(4905)|(4911)|(4936)|(564182)|(633110)|(6333)|(6759))[0-9]{10}([0-9]{2,5})?$/);

addToArr(chinaUP["prefix"],622126,622925);
addToArr(chinaUP["prefix"],624,626);
addToArr(chinaUP["prefix"],6282,6288);

var cards = [dinersClub,americanExpress,switch1,visa,masterCard,discover,maestro,chinaUP];


var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  for(var i = 0; i < cards.length; i++) {
  	var regularExp = cards[i].regExp;

	//lazy about some of reg expression so double checking length
	for(var j = 0; j < cards[i]["length"].length; j++) {


		if(regularExp.test(cardNumber) && cards[i]["length"][j] === cardNumber.length) {
			return cards[i].name;
		}
	}
	
  	
  };
  //if nothing passes return
  return cardNumber;
};


