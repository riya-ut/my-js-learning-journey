function validate(){
    var un = document.getElementById("uname").value
    var unp = /^[A-Za-z]+$/
    var ph = document.getElementById("ph").value
    var pnp = /^[6-9]{1}[0-9]{9}$/

    //name validation condition
    if(un==""){
        document.getElementById("unm").innerHTML= "User name should not be empty"
        return false
    }
    if(un.match(unp))
    true;
    else{
        document.getElementById("unm").innerHTML= "User name should contain only characters"
        return false
    }
    if(un.length<3)
    {
         document.getElementById("unm").innerHTML= "User name should contain min 3 characters"
        return false
    }

    if(un.length>8)
    {
         document.getElementById("unm").innerHTML= "User name should contain max 8 characters"
        return false
    }
    //phone number validation condition
    if(ph==""){
        document.getElementById("pnm").innerHTML= "phone number should not be empty"
        return false
    }
    if(ph.match(pnp))
    true;
    else{
        document.getElementById("pnm").innerHTML= "Invalid phone number"
        return false
    }

}