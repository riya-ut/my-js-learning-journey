//first way
var ar1 = [1,2,3,4,5,6]
console.log(ar1)
ar1.push(7)             //add in rare end
console.log(ar1)
ar1.unshift (0)
console.log (ar1)        //front add in end
ar1[3] = 33              //It is replacing the element not pushing
console.log(ar1)
ar1.pop()               //To remove from the rare end
console.log (ar1)

//To remove an element from front end
ar1.shift()
console.log(ar1)

//remove in between elements by using index
 delete ar1[4]
 console.log(ar1)       //memory is not dealocated

 ar1.splice(4,1)
 console.log(ar1)

 ar1.splice(2,0,77,45)
 console.log(ar1)

//  ar1.splice(-3)
//  console.log(ar1)






/*
//second way
var ar2 = []
ar2[0] = "A"
ar2[1] = "B"
ar2[2] = "C"
ar2[3] = "D"
console.log(ar2)

//third way : object type
var ar3 = new Array()
ar3[1] = "E"
ar3[0] = "F"
ar3[2] = "G"
ar3[3] = "H"
console.log(ar3)
*/