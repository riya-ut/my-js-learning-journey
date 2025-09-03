function display()
{
    console.log("The funvtion is invoked")  //function declaration
}
display()

//passing parameter
function dis(msg)
{
    return `Hello ${msg}`
}
var message = dis("Javascript")
console.log(message)

//Expression
var f = prompt("Enter the food item")
var dissplay = function (f) {
    return `You have ordered ${f}`
}
var food = dissplay(f)
console.log(food)

//arrow function
var j = prompt("Enter the juice item")
var dissplayy =  (j) =>`You have ordered ${f}`
var juice = dissplay(j)
console.log(juice)