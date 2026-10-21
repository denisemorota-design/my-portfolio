const Container=document.getElementById("container")
console.log("container")
const text=document.getElementById("indicator")
const input=document.getElementById("input")
const btnclick=document.getElementById("btn1")
const btndb=document.getElementById("btn2")
const btnpress=document.getElementById("btn3")
const text1=document.getElementById("txt1")

Container.addEventListener("mouseout",
    function(){
        text.innerHTML="mouse left the image"

    }
)

Container.addEventListener(
    "mouseover",
    function(){
        text.innerHTML="mouse is over the image"
    }
)

Container.addEventListener(
    "mouseover",
    function(){
        Container.style.transform="scale(1.1)"
    }

)

Container.addEventListener(
    "mouseout",
    function(){
        Container.style.transform="scale(1.0)"
    }

)

input.addEventListener(
    "input",
    function(){
        text.innerHTML="typing"
    }
)

input.addEventListener(
    "focus",
    function(){
        input.style.background="pink"
    }
)

btnclick.addEventListener(
    "click",
    function(){
        text1.innerHTML="future web developer"
        text.innerHTML="you clicked the button"
    }

)

btndb.addEventListener("dblclick", function(){
    text.innerHTML="you double clicked the button"
})

btnpress.addEventListener("mousedown", function(){
    text.innerHTML="button is being held"
})
btnpress.addEventListener("mouseup", function(){
    text.innerHTML="button was released"
})

