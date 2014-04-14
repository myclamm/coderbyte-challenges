//#1 Create a function that outputs an array ADDERS, containing 3 functions,
//each of which add (x) to their respective index within the array.
//In other words...each element in the array should be a function that
//returns x+1,x+2,and x+3 respectively. ADDERS[1](5) should output 6.
var createAdders = function(){
    var fns = [];
    for(var i=1;i<4;i++){
        fns[i]= function(k){
           return function(x){
                return k+x
           }
        }(i)
    }
    return fns;
    
}
adders = createAdders();
//adders[1](5)
//adders[2](5)

//#2 Create a function "add" that takes x as it's parameter and outputs a function
//that takes a y parameter and returns the sum of x +y. Then, using the function
//factory you've just created, make a new function called add5, that takes an x
//parameter and returns x+5.

function add(x){
    return function(y){
        return x+y;
    }
}
add5 = add(5)
//add5(10)

//#3 Create a function "forEach" that takes two parameters: an array, and a callback,
//and it returns the callback on each of the array's elements. Use "forEach" to
//log each element in array to the console. BONUS: what happens when, in forEach's
//definition, you return the callback instead of just invoke the callback?

function forEach(array,callback){
    for(var i=0;i<array.length;i++){
        callback(array[i]);
    };
};
//forEach([1,2,3,4],console.log)
//BONUS ANSWER: the for loop stops after the first iteration

//#4 Create a function "map" that takes two parameters: an array, and a callback
//and it passes each array element to the callback, and pushes each result to
//an array called RESULT and the returns RESULT. BONUS:write it using forEach and
//also using a for loop.

function map(array,callback){
    var result = []
    forEach(array,function(x){
        result.push(callback(x));
    });
    return result;
};

function map1(array,callback){
    var result = [];
    for(i=0;i<array.length;i++){
        result.push(callback(array[i]))
    };
    return result;
}
//map1([1,2,3,4],add5);


//#5 Create a function "pluck" that takes the "name" of an object's property
//as an argument (e.g. "length") and returns a function that takes an object
//as an argumet and returns the value within the specified property name. Then
//use the pluck function to create a function that plucks the value of the
//given property name within an object.

function pluck(name){
    return function(object){
        return object[name];
    }
}
var getLength = pluck("length");
getLength("mustard")


//#6 Create a function "reduce" that takes three parameters, a callback(with 2
// parameters), a base, and an array, and returns the result of redefining base
//as the result of calling callback on base and array element, and then re-calling
//the callback on the base and each subsequent array element. Then use the
//reduce function to create an overly complex sum function that returns the sum
//of all the elements in an array.

function reduce(callback,base,array){
    forEach(array,function(x){
        base = callback(base,x)
    })
    return base;
}

function add(x,y){
    return x+y
}
function sum(array){
    return reduce(add,0,array);
}
//sum([1,2,3,4])