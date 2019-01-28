const head = document.querySelector("h1")
const kick = document.querySelector(".kick")
const snare = document.querySelector(".snare")

head.addEventListener("click", () =>{
    console.log("dziala js")
})

document.addEventListener("keydown", (e)=>{
    console.log(e.which, e.key)
    if(e.which == 81){
        console.log("boom")
        // kick.classList.remove("kick")
        kick.classList.add("attack")
    }
    if (e.which == 80){
        snare.classList.add("attack")
    }
})

document.addEventListener("keyup", (e) =>{
    if(e.which == 81){
        kick.classList.remove("attack")
    }
    if (e.which == 80){
        snare.classList.remove("attack")
    }
})