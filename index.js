
// detecting button pressed

let numDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numDrumButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let key = this.innerText;
        makeSound(key);
        buttonAnimation(key);
    });

}

// detecting key pressed

document.addEventListener("keydown", function(e) {
    makeSound(e.key);
    buttonAnimation(e.key);
});


// common functions

function makeSound(key) {
    let audio;

    switch (key) {
        case "w":
            audio = "sounds/tom-1.mp3";
            break;
        case "a":
            audio = "sounds/tom-2.mp3";
            break;
        case "s":
            audio = "sounds/tom-3.mp3";
            break;
        case "d":
            audio = "sounds/tom-4.mp3";
            break;
        case "j":
            audio = "sounds/snare.mp3";
            break;
        case "k":
            audio = "sounds/kick-bass.mp3";
            break;
        case "l":
            audio = "sounds/crash.mp3";
            break;
        default:
            console.log("Invalid button pressed: " + key);
            break;
    }

    let drum = new Audio(audio);
    drum.play();
}

function buttonAnimation(button) {
    let currentButton = document.querySelector("." + button);
    
    currentButton.classList.add("pressed");
    
    setTimeout(function() {
        currentButton.classList.remove("pressed");
    }, 100);
}