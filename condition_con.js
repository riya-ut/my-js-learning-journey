// if(condition)
//     {
//         body
//     }

var v1 = 15
var v2 = 16
if(v1==v2)
    {
        console.log('The value of v1 is equal to v2')
    }
else if(v1>v2){
    console.log('The value of v1 is greater than v2')
}
else {
    console.log('all the above conditions are invalid')
}

//Switch expressions
let str = "Javascript" 
switch(str)
{
    case "HTML":
        console.log("The course enrolled is HTML")
        break
    case "CSS":
        console.log("The course enrolled is CSS")
        break
    case "Javascript":
        console.log("The course enrolled is Javascript")
        break
    default:
        console.log("Invalid Course")

}