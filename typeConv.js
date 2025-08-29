//implicit type casting
let v1 = 5
let v2 = '5'
console.log(v1+v2)

// 1. number to string 

let a = 5
let b = String(a)       //S is upper case
console.log(b)
console.log(typeof(b))
    
// 2. number to Boolean


let bool = Boolean(a)       //B is upper case
console.log(bool)
console.log(typeof(bool))

// -------------------

// 1.string to number
let str = "T"
let n = Number(str)
console.log(n)
console.log(typeof(n))      //value not a number & type is anumber
// 2.string to Boolean

let c = Boolean(str)
console.log(c)
console.log(typeof(c))  

// ---------------------------

// 1.Boolean to number
let d = true
let e = Number(d)
console.log(e)
console.log(typeof(e))


// 2.Boolean to string

let f = String(d)
console.log(f)
console.log(typeof(f))
