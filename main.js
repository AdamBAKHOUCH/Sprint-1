// Variables:

// Problem: Write a JavaScript function that declares a variable using var and returns its value.
function Variables (x){
    var x
return x
}
Variables(5)
5
// Problem: Create a function that takes two arguments and checks if they are equal. Return true if they are and false if they are not.

function isEqual (x,y){
    if ((x-y===0)||(y-x===0)){
        return("true")

    }
    else {return"false"}
    
}
undefined
isEqual(5,5)
'true'
isEqual(5,4)
'false'

// Problem: Implement a function that declares a "constant" variable using var (even though var variables are not constant) and attempts to reassign it. Handle any resulting errors.
function reassign(y){
    var x=9 
    x=y
    return(x)
    }
    undefined

    reassign(99)
    99

// Problem: Create a function that defines a variable using var within its scope. Try to access the variable outside of the function and explain the result.
function withoutWithin (x) {
    var x=5
    return(x)
    }
    undefined
    x
    VM86:1 Uncaught ReferenceError: x is not defined
        at <anonymous>:1:1
    (anonymous) @ VM86:1
    //The variable is out of the global scope reach as it is defined only in te local scope of our function.

// Problem: Write a function that takes a variable as an argument and returns its data type.
function dataType(number){
    var number 

return (typeof(number))

}
// Conditional Statements:

// Problem: Create a function that takes an age as an argument and returns a message based on whether the person is a child, a teenager, an adult, or a senior citizen.
function ageOfPerson(age) {         if (age<12 && age>0) { 
                return 'child'         }    
                     else if (age>12 && age<20) {             return 'teenager'         } 
                             else if (age>19 && age<36) {             return 'adult'         } 
                                     else return 'senior citizen'     }
                                     
                                      undefined ageOfPerson(2) 'child' ageOfPerson(15) 'teenager' ageOfPerson(25) 'adult' ageOfPerson(40) 'senior citizen'
// Problem: Write a functin that checks if a given nu9mber is even or odd and returns an appropriate message.
function 
// Problem: Create a function that simulates a basic login system. It takes a username and password as arguments and returns true if  "Login successful" if they match, or false if  "Login failed" if they don't.

// Problem: Write a function that calculates the grade for a given test score. The function should return "A," "B," "C," "D," or "F" based on the score.

// Problem: Create a function that takes a day of the week as an argument and returns whether it's a weekday or a weekend day.