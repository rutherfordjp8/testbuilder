/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
//function that generates random card numbers of desired length.
var genRanNums = function (prefix, length) {
    var str = "";
    for(var i = 0; i < length-prefix.length; i++) {
      str += Math.floor((Math.random() * 10));
    }
    return prefix + str;
};
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  it('Throws an error so it fails', function() {
  //  throw new Error('Delete me!');
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num%2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
describe('Diner\'s Club', function() {
  var expect = chai.expect;
  var name = dinersClub["name"];
  var prefixs = dinersClub["prefix"];
  var arrLengths = dinersClub["length"];
  //Generate Tests
  for(var i = 0; i < arrLengths.length; i++) {
    for (var j = 0; j < prefixs.length; j++) {
      (function(prefix) {
        //creates a random number with desired prefix and length.
        
        var cardNum = genRanNums(prefix,arrLengths[i]);
        it('has a prefix of ' + prefix + ' and a length of ' + arrLengths[i], function() {
        expect(detectNetwork(cardNum)).to.equal(name);
        });
      })(prefixs[j])
    };
  };

  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
  //  throw new Error('Delete me!');
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var expect = chai.expect;
  var name = americanExpress["name"];
  var prefixs = americanExpress["prefix"];
  var arrLengths = americanExpress["length"];
  //Generate Tests
  for(var i = 0; i < arrLengths.length; i++) {
    for (var j = 0; j < prefixs.length; j++) {
      (function(prefix) {
        //creates a random number with desired prefix and length.
        
        var cardNum = genRanNums(prefix,arrLengths[i]);
        it('has a prefix of ' + prefix + ' and a length of ' + arrLengths[i], function() {
        expect(detectNetwork(cardNum)).to.equal(name);
        });
      })(prefixs[j])
    };
  };

  var assert = function(isTrue) {
    if(isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') !== 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') !== 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/

  var expect = chai.expect;
  var name = visa["name"];
  var prefixs = visa["prefix"];
  var arrLengths = visa["length"];
  //Generate Tests
  for(var i = 0; i < arrLengths.length; i++) {
    for (var j = 0; j < prefixs.length; j++) {
      (function(prefix) {
        //creates a random number with desired prefix and length.
        
        var cardNum = genRanNums(prefix,arrLengths[i]);
        it('has a prefix of ' + prefix + ' and a length of ' + arrLengths[i], function() {
        expect(detectNetwork(cardNum)).to.equal(name);
        });
      })(prefixs[j])
    };
  };

  var assert = chai.assert;

 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
  var name = masterCard["name"];
  var prefixs = masterCard["prefix"];
  var arrLengths = masterCard["length"];
  //Generate Tests
  for(var i = 0; i < arrLengths.length; i++) {
    for (var j = 0; j < prefixs.length; j++) {
      (function(prefix) {
        //creates a random number with desired prefix and length.
        
        var cardNum = genRanNums(prefix,arrLengths[i]);
        it('has a prefix of ' + prefix + ' and a length of ' + arrLengths[i], function() {
        expect(detectNetwork(cardNum)).to.equal(name);
        });
      })(prefixs[j])
    };
  };
 
  it('has a prefix of 51 and a length of 15', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 15', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 15', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  // var should = chai.should();
  
  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  });
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var expect = chai.expect;
  var name = discover["name"];
  var prefixs = discover["prefix"];
  var arrLengths = discover["length"];
  //Generate Tests
  for(var i = 0; i < arrLengths.length; i++) {
    for (var j = 0; j < prefixs.length; j++) {
      (function(prefix) {
        //creates a random number with desired prefix and length.
        
        var cardNum = genRanNums(prefix,arrLengths[i]);
        it('has a prefix of ' + prefix + ' and a length of ' + arrLengths[i], function() {
        expect(detectNetwork(cardNum)).to.equal(name);
        });
      })(prefixs[j])
    };
  };
  



  it('has a prefix of 6011 and a length of 16', function() {
    expect(detectNetwork('6011123456789012')).to.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function() {
    expect(detectNetwork('6011123456789012345')).to.equal('Discover');
  });
});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var expect = chai.expect;
  var name = maestro["name"];
  var prefixs = maestro["prefix"];
  var arrLengths = maestro["length"];
  //Generate Tests
  for(var i = 0; i < arrLengths.length; i++) {
    for (var j = 0; j < prefixs.length; j++) {
      (function(prefix) {
        //creates a random number with desired prefix and length.
        
        var cardNum = genRanNums(prefix,arrLengths[i]);
        it('has a prefix of ' + prefix + ' and a length of ' + arrLengths[i], function() {
        expect(detectNetwork(cardNum)).to.equal(name);
        });
      })(prefixs[j])
    };
  };

});

describe('should support China UnionPay', function() {
  var expect = chai.expect;
  var name = chinaUP["name"];
  var prefixs = chinaUP["prefix"];
  var arrLengths = chinaUP["length"];
  //Generate Tests
  for(var i = 0; i < arrLengths.length; i++) {
    for (var j = 0; j < prefixs.length; j++) {
      (function(prefix) {
        //creates a random number with desired prefix and length.
        
        var cardNum = genRanNums(prefix,arrLengths[i]);
        it('has a prefix of ' + prefix + ' and a length of ' + arrLengths[i], function() {
        expect(detectNetwork(cardNum)).to.equal(name);
        });
      })(prefixs[j])
    };
  };
});
describe('should support Switch', function() {
  var expect = chai.expect;
  var name = switch1["name"];
  var prefixs = switch1["prefix"];
  var arrLengths = switch1["length"];
  //Generate Tests
  for(var i = 0; i < arrLengths.length; i++) {
    for (var j = 0; j < prefixs.length; j++) {
      (function(prefix) {
        //creates a random number with desired prefix and length.
        var cardNum = genRanNums(prefix,arrLengths[i]);
        it('has a prefix of ' + prefix + ' and a length of ' + arrLengths[i], function() {
        expect(detectNetwork(cardNum)).to.equal(name);
        });
      })(prefixs[j])
    };
  };
})
