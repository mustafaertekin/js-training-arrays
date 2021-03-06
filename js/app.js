/**
 * The following code contans TDD (test driven development) approach.
 * the follwing functions are the part of a TDD-Framework.
 * - describe(...)
 * - it(..)
 *
 * Please concantrate on the body of it(...) functions and fix them!
 */

describe('Array', function () {

    describe('#arithmetic', function () {
        it('should result the right number', function () {
            var c = [3, 4, 9, 12];
            c[0]=c[0]+1;
            c[0].should.equal(4);
        });
        it('should be equal to the second item', function () {
            var c = new Array(23, 46); // do not touch this
            (c[0] + 23).should.equal(c[1]);
        });
        it('should result the fourth element in the array', function () {
            var c = [3, 3, 3, 9];  // do not touch this
            (c[0] * c[1]).should.equal(c[3]);
        });
        it('should give the result by using the combination of two arrays', function () {
            var c = new Array(2, 3); // do not touch this
            var a = new Array(4, 6); // do not touch this
            (a[1] / 2).should.be.equal(c[1]);
        });
        it('should give the result by using the combination of two arrays', function () {
            var c = new Array("it", "switzerland", "training"); // do not touch this
            var a = ["KZO", "volketswil", "club"]; // do not touch this
            (c[0] + a[2]).should.equal("itclub");
        });
        it('should find the right array slot', function () {
            var c = new Array(5); // do not touch this
            c[0]=5;
            c[0].should.be.equal(5);
        });       
        it('should find and remove the item 2', function () {
            var c = [10, 22, 2, 34, 15, 3]; // do not touch this!
            var index = c.indexOf(2);
            c.splice(index, 1);
            c.should.be.deepEqual([10, 22, 34, 15, 3]);
        });       
        
    });
    
    describe('#string-operation', function () {
        it('should create a string with given parameter as seperator', function () {
            var c = ['i', 't', 'c', 'l', 'u', 'b']; // do not touch this
            c.join("+").should.equal("i+t+c+l+u+b");
        });
        it('should create a string with manipulated content', function () {
            var c = ['i', 't', 'c', 'l', 'u', 'b']; // do not touch this
            var processed = c.join("").replace("c", "C");
            processed.should.equal("itClub");
        });
    });
        
    describe('#join()', function () {
        it('should create a string with given parameter as seprator', function () {
            var c = ['i', 't', 'c', 'l', 'u', 'b']; // do not touch this
            c = c.join("+-").concat("+-");
            c.should.equal("i+-t+-c+-l+-u+-b+-");
        });
    });

    describe('#length', function () {
        it('should give the number of elements in the array', function () {
            var c = ["it", "club", "schweiz", "KZO"]; // do not touch this
            c.push("the 5th element")
            c.length.should.equal(5);
        });
    });

    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            
            [1, 2, 4].indexOf(3).should.be.equal(-1);
        });
    });
    
    describe('#sort()', function () {
        it('should sort the array in ascending order', function () {
            var c = [9, 2, 6, 0, -1]; // do not touch this
            c.sort(function(a,b){return a>b});
      
            c.should.be.deepEqual([-1, 0, 2, 6, 9]);
        });
        it('should sort the array in descending order', function () {
            var c = [-1, 1, 3, 2]; // do not touch this
            c.sort(function(a,b){return a<b});
            
            c.should.be.deepEqual([3, 2, 1, -1]);
        });        
    });
    
    describe('#concat()', function () {
        it('should merge the given arrays', function () {
            var c = [4, 5]; // do not touch this
            var a = [8, 9]; // do not touch this
            var processed = c.concat(a);
            processed.should.be.deepEqual([4,5,8,9]);
        });   
        it('should merge the given arrays', function () {
             var c = ["A", "B"]; // do not touch this!
             var a = ["C", "D", "E"]; // do not touch this!
             var processed = c.concat(a);
             processed.should.be.deepEqual(["A","B","C","D","E"]);
        }); 
 
    });
    
    describe('#push()', function () {
        it('should insert item at the end of the array', function () {
            var c = [10]; // do not touch this!
            c.push(11,12);
            var processed = c;
            processed.should.be.deepEqual([10,11,12]);
        });        
    });
    
    describe('#shift()', function () {
        it('should remove item at the front of the array', function () {
            var c = [10, 12, 13]; // do not touch this!
            c.shift(); 
            var processed = c;
            processed.should.be.deepEqual([12, 13]);
        });        
    });
    
    describe('#unshift()', function () {
        it('should insert item in the begin of the array', function () {
            var c = [12, 13]; // do not touch this!
            c.unshift(10);
            var processed =  c;
            processed.should.be.deepEqual([10, 12, 13]);
        });  
        it('should insert item as the first item in the array', function () {
            var c = [12, 13]; // do not touch this!
            c.unshift(1,10,13);
            var processed = c; // manuîpulate only this line
            processed.should.be.deepEqual([1, 10, 13, 12, 13]);
        });          
    });
    
    describe('#reverse()', function () {
        it('should change the order of items', function () {
            var c = [2, 101, 55]; // do not touch this!
            c.reverse();
            var processed = c; 
            processed.should.be.deepEqual([55, 101, 2]);
        });        
        it('should reverse a string', function () {
            var c = "bulcti"; // do not touch this!
            var processed = c.split("").reverse().join("");
            processed.should.be.deepEqual("itclub");
        });        
    });
   
    
    describe('#array methods', function () {
        it('can be used together', function () {
            var c = new Array(); // do not touch this
            c.push(1);
            c.pop();
            c.push(23);
            c.push(37);
            c.shift();
            c.unshift(5);
            c.unshift(2);
            (c[1] % c[0]).should.be.equal(1);
        });     
        it('should give number of people rest in the queue', function () {
            var c = []; // do not touch this
            c.push('ferdi');
            c.push('cihad');
            c.push('cemil');
            c.pop();
            c.reverse();
            c.shift();
            c.unshift('mehmet');
            c.should.be.deepEqual(['mehmet', 'ferdi']);
        });
    });
    
    describe('#looping', function () {
        it('should increment the counter one by one', function () {
              var counter = 0; // do not touch this
              for(var index=0; index < 8; index = index + 1){
                  counter = counter + 1;
              }
            
              counter.should.be.equal(8);
        });
        it('should increment the counter by array items', function () {
              var c = new Array(1,2,3,4,6);
              var counter = 0; // do not touch this!

              for(var index=1; index < 5; index = index + 1){
                  counter = counter + c[index];
              }            
              counter.should.be.equal(15);
        });
        it('should increment the counter randomly', function () {
              var c = []; // do not touch this!
              var maxNumber = 6;   
            
              for(var index=0; index < maxNumber; index = index + 1){
                  c[index] = index * Math.random();
              }
              c.length.should.be.equal(6);
              c[0].should.be.equal(0);
        });
        it('should change the array items indiviually', function () {
              var c = ["a", 'n', ' ', 'a', 't', "c", "l", 'u', 'b']; // do not touch this!
              for(var index=0; index < c.length; index = index + 1){
                  if (c[index] == 'a') {c[index] = 'i';}
              }
              c = c.join('');
              c.should.be.equal('in itclub');
        });
        it('should select only the even numbers', function () {
              var c = new Array(1,2,3,4,5,6); // do not touch this!
              var a = [];

              for(var index=0; index < c.length; index = index + 1){
                  if (c[index] % 2 == 0) {  
                      a.push(c[index]);
                  } 
              }
              a.should.be.deepEqual([2,4,6]);
        });
        it('should help to find the maximum number', function () {
              var c = [10,21,82,23,64,15,6]; // do not touch this!
              var max = 0; // get maximum number
              for(var index=0; index < c.length; index = index + 1){
                  if (c[index] > max) {
                      max = c[index];
                  } 
              }
              max.should.be.equal(82);
        });
        it('should help to find the minimum number', function () {
              var c = [10,21,82,23,64,15,6]; // do not touch this!
              var min = 100 ; // get minimum number
              for(var index=0; index < c.length; index = index + 1){
                  if (c[index] < min) {
                      min = c[index];
                  }
              }
              min.should.be.equal(6);
        });     
        it('should help to find the median', function () {
              var c = [13,21,82,23,64,15,6]; // do not touch this!
              var median = 34; // get median f.i [6,1,5] => 6+1+5/(number of element = 3) = 4,
                              
//The reduce() method reduces the array to a single value.
            
             function getSum(total, num) {  //The return value of the function is stored in an accumulator (result/total).
                return total + num;
             }
            
              median = c.reduce(getSum) / c.length;
            
              median.should.be.equal(32);
        }); 
        it('should help to find the numbers factor of three ', function () {
              var c = [9,21,80,23,60,11,6]; // do not touch this!
              var theNumbers = []; 
            
              for(var index=0; index < c.length; index = index + 1){
                  if (c[index] % 3 == 0) {
                      theNumbers.push(c[index]);
                  }
              }
              theNumbers = theNumbers.sort(function(a, b){return a-b});
            
              theNumbers.should.be.deepEqual([6,9,21,60]);
        });
        it('should help to find the numbers which can be divided by 2 or 3', function () {
              var c = [9,21,80,23,60,11,6,4]; // do not touch this!
              var theNumbers = []; 
            
              for(var index=0; index < c.length; index = index + 1){
                  if (c[index] % 2 == 0 || c[index] % 3 == 0) {
                      theNumbers.push(c[index]);
                  }
              }
              function sortNumber(a,b) {
                return a - b;
                }
            theNumbers.sort(sortNumber);
            console.log(theNumbers);
              theNumbers.should.be.deepEqual([4,6,9,21,60,80]);
        });
        it('should help to find the numbers which can be divided by both 2 and 3', function () {
              var c = [9,21,80,23,60,11,6,4]; // do not touch this!
              var theNumbers = []; 
            
              for(var index=0; index < c.length; index = index + 1){
                  if (c[index] % 2 == 0 && c[index] % 3 == 0){
                    theNumbers.push(c[index]);
                  }
              }        
            theNumbers.sort();

              theNumbers.should.be.deepEqual([6, 60]);
        });
        it('should help to find the strings which containing the word "el"', function () {
              var c = ['elveda','selami','hadi','itclub','kel','heyelan','oooo!','saral', 'peri', 'deli']; // do not touch this!
              var theNumbers = []; 
            
              for(var index=0; index < c.length; index = index + 1){
                  if (c[index].match(/el/) != undefined) {
                      theNumbers.push(c[index]);
                  }
              }        
        theNumbers.should.be.deepEqual(['elveda','selami','kel','heyelan','deli']);
        });
        it('should help to find repeating numbers', function () {
              var c = [10,21,10,23,64,21,6]; // do not touch this!
             
              var processed = [];
              /*for(var index=0; index < c.length - 1; index = index + 1){
                  if (c[index + 1] == c[index]){
                       processed.push(c[index]);
                  }
              }    */  
            
            // domch:
        for(var outerIndex=0; outerIndex < c.length; outerIndex++){
            for(var innerIndex=0; innerIndex < c.length; innerIndex++){
					  if (outerIndex!=innerIndex && c[outerIndex] == c[innerIndex] && processed.indexOf(c[outerIndex])==-1) {
						processed.push(c[outerIndex]);
						continue;
					  }  
				  }           // m.ertekin: "Woww"
        }
            
            processed.should.be.deepEqual([10,21]);
        }); 
        it('should find the numbers less then 100', function () {
              var c = [10,83,100,1000]; // do not touch this!
              var processed = []; 
              var index=0;
              while(index < c.length){
                  if (c[index] <= 100){
                     processed.push(c[index]); 
                  }
                 index = index + 1;  
              }        
              processed.should.be.deepEqual([10,83,100]);
        }); 
    });  
    
    
    describe('#conditionals', function () {
        it('should choose one one value', function () {
            var c = true; // do not touch this
            var processed=1;
            if(c == false){
                processed = 2;
            }
            
            processed.should.be.equal(1);
        });     
        it('should evaluate the condition to a boolean', function () {
            var c = Number.isNaN('NaN'); // do not touch this
            var processed=0;
            if(c == true){
                processed = 2;
            }else{
                processed = 0;
            }
            
            processed.should.be.equal(0);
        });
        it('should evaluate the condition with else-if to a boolean', function () {
            var c = 'mesut'; // do not touch this
            var processed=null;
            
            if(c === 'ferdi'){
                processed = 'progress';
            }else if(c === 'mesut'){
                processed = 'take it easy';
            }else{
                processed = 'go forward';
            }

            processed.should.be.equal('take it easy');
        });
        it('should evaluate the ternary operator to a value', function () {
            var c = 'iskender'; // do not touch this
            var processed= c !== 'iskender' ? "AC KALDIK YINE" : 'ENFESS';

            processed.should.be.equal('ENFESS');
        });
        it('should evaluate the nested ternary operator to a value', function () {
            var c = 'mesut'; // do not touch this
            var processed= c === 'mesut'
                           ? 'adana' : c === 'ferdi'
                           ? 'giresun' : c === 'mustafa'
                           ? 'antalya' : 'gurbet'
            
            processed.should.be.equal('adana');
        });
        it('should evaluate switch case ', function () {
            var city = 'adana'; 
            var country = null;
            
            switch(city){
                case 'adana': 
                    country = 'CH'
                    break;
                case 'istanbul':
                    country = 'NK';
                    break;
                case 'newyork':
                    country = 'US';
                    break;
                case 'zurich':
                case 'st.gallen':
                case 'luzern':    
                    country = 'CH'
            }
            
            country.should.be.equal('CH');
        });        
    });    
});

