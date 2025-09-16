document.getElementById("h1").innerHTML = "This text is comming from javascript"
document.getElementById("h1").style.color="pink"
//on click
function display() {
    document.write("your form is submited")

}
function change(value) {
    document.getElementById("changeID").innerHTML="you have changed the name to"+" " + value
}
function over() {
    alert("onMouseOver Event is working")//used for warning
}
function out() {
    alert("onMouseOut Event is working")//used for warning
}