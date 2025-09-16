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
console.log(info)
console.log(info["first name"])
console.log(info.address)
info.gender = "Female"
console.log(info)
delete info.marks
console.log (info)
info["last name"] = "Lekshmi"
console.log (info)
