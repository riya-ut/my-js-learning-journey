//while
console.log("while")
var num = 1
while(num<=8)
{
    console.log(num)
    num++
}

//do-while
console.log("Do-while")
var num = 1
do
{
    console.log(num)
    num++
}
while(num<=8)


//for loop
console.log("for loop")
for(var i = 0; i<=10; i++)
{
    if(i==3)
    {
        continue
    }
    console.log(i)
}
//for of
var ar= ["A","B","C","D"]
console.log(ar)
for(var ar1 of ar){
    console.log(ar1)
}

//for in
var ob= {
    "firstName":"pinky",
    "lastName":"sharma"
}
console.log(ob)
for(var obj in ob)
{
    console.log(ob[obj])
}