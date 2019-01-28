const head = document.querySelector("h1")
const kick = document.querySelector(".kick")
const snare = document.querySelector(".snare")
const play = document.querySelector(".play")
const kickDrum = "kick";
const snareDrum = "snare";


    createjs.Sound.registerSound("audio/kick.wav", kickDrum);
    createjs.Sound.registerSound("audio/snare.wav", snareDrum);


// play.addEventListener("click", ()=>{
//     console.log("play")
//     createjs.Sound.play(kickDrum);
// })

// head.addEventListener("click", () =>{
//     console.log("dziala js")
// })

document.addEventListener("keydown", (e)=>{
    console.log(e.which, e.key)
    if(e.which == 81){
        console.log("boom")
        // kick.classList.remove("kick")
        createjs.Sound.play(kickDrum);
        kick.classList.add("attack")
    }
    if (e.which == 80){
        snare.classList.add("attack")
        createjs.Sound.play(snareDrum);
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


