var a = document.getElementById("h1")
a.addEventListener("click", msg1)
a.addEventListener("mouseout", msg2)
function msg1(){
    document.getElementById("h1"), this.innerHTML="work hard!"
}
function msg2(){
    document.getElementById("h1"), this.innerHTML="Get your dream job soon!"
}