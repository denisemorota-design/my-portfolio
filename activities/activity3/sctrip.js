console.log("document")

const var1=document.getElementById("second")
console.log(var1)
var1.innerText="good luck"
var1.style.backgroundColor="pink"
var1.style.color="#5A1F3D"

const Button1=document.getElementById("btn1")

Button1.addEventListener(
    "click" ,function(){
        var1.innerHTML="Welcome to JavaScript!!!"
    }
)

const button2=document.getElementById("btn2")

button2.addEventListener(
    "dblclick" , function(){
        var1.innerHTML="hello world!!!"
    }

)

const input=document.getElementById("txt")
const txt=document.getElementById("txt1")

const image=document.getElementById("im")

image.addEventListener(
    "mouseover",
    function(){
        image.style.transform="scale(1.1)"
    }
)

image.addEventListener(
    "mouseout",
    function(){
        image.style.transform="scale(1.0)"
    }
)

input.addEventListener(
    "input",
    function(){
        txt.innerHTML=input.value
    }
)

