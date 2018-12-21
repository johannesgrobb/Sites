function outer(a) {
    return function inner(b) {
        //The inner function is making use of the variable 'a',
        //which was defined in an outer function called 'outer'.
        //By the time the inner function is called the outer function has returned.
        //The function called 'inner' is a closure.
        return a + b;
    }
}

outer(5)(5);

var storeOuter = outer(5);
storeOuter(10);

//We have to return the inner function for this to work.
//We can either call the function right away by using an extra() or we can store the result of the function in a veriable.
//We do not have to give the inner function a name but for testing it is best to name your functions.
//Closure only exists when and inner function makes use of variables defined from an outer function that has returned.
//If the inner function does not make ise of any of the external variables all we have is a nested function.

//How Closures Work

//Only variables used in the inner function are remembered.
function outerFn() {
    var data = "something from outerFn";
    var fact = "Remember me!";
    return function innerFn() {
        debugger
        return fact;;
    }
}

var outer = outerFn();
outer();
//Closures do not remember everything from outer functions, only the variables they need.


//Uses of Closure - Private Variables
function counter() {
    var count = 0;
    return function inner() {
        count++;
        return count;
    }
}

var counter1 = counter();
counter1();

function inner() {
    count++;
    return count;
}
counter1();

var counter2 = counter();
counter2();

//Module Patern


//Closure Examples

/* 
A function called specialMultiply which accepts two parameters.
If the function is passed both parameters, it returns the product
of the two. If the function is only passed one parameter - it returns
a function which can later be passed another parameter to return
the product.
*/

function specialMultiply(a,b){
if(arguments.length === 1) {
    return function(b) {
        return a*b;
    }
}    
return a*b;
}


/* 
A function called guessingGame which takes in one parameter amount.
The function returns another function that takes in a parameter called guess.
In the outer function, has a variable called answer which is the result of a random number between
0 and 10 as well as a variable called guesses which is set to 0.

In the inner function, if the guess passed in is the same as the random number
(defined in the outer function) - the string "You got it!" is returned.
If the guess is too high "Your guess is too high!" is returned
and if it is too low, "Your guess is too low!" is returned.
The user is stoped from guessing if the amount of guesses they have made is 
greater than the initial amount passed to the outer function.
*/

function guessingGame(amount){
    var answer = Math.floor(Math.random()*11);
    var guesses = 0;
    var completed = false;
    return function(guess) {
        if(!completed) {
            guesses++
        if(guess === answer) {
            completed = true;
            return "You got it!";
        }
        else if (guess > answer) return "Your guess is to high!";
        else if(guess < answer) return "Your guess is too low!";
        else if (guesses === amount) {
            completed = true;
            return "No more guesses the answer was " + answer;
        }
    }
    return "All done playing!";
}
}

guessingGame(2);

