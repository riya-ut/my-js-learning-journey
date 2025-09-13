var ar =[1,2,3,4,5]
console.log(ar)
ar.forEach(function(i, index){
    console.log(index + "=" +i)
})

//for each string to an array
var str = "JavaScript"
var c = str.split('')
c.forEach(function(ch)
{
    console.log(ch)
})

//map method : transforming array into some other array
var arr = [1,2,3,4,5] //1, 4,6,8,10
console.log(arr)
function double(X) {
    return X*2
}
var ar1 = arr.map(double)
console.log(ar1)

//another method
var arr1 = [6,7,8,9,10] //1, 4,6,8,10
console.log(arr1)
var ar2 = arr1.map((x)=>x*2)
console.log(ar2)

var fill = arr1.filter((x)=>x%2==0)     //fillter method
console.log(fill)