const info = {
    "first name" : "Riya",
    "last name" : "UT",
    address : {
        city : "kollam",
        country : "India"
    },
    marks : [44,55,66,78],
    disp : function(){
        var age = 23
    }
}
//console.log(info)
var copy_of_info = {...info}        //copy or duplicate
console.log(copy_of_info);

var order = {
    item: "Biriyani",
    price: "350/-",
    message : function() {
        return `you have placed the ${this.item}and total amount is ${this.price}`
    }
}
console.log(order.message())
