// query selects all of the elements that have the drum class using .length 
// then assigns them to a variable
var allTheButtons = document.body.querySelectorAll(".drum").length;


//then adds the variable to the for loop i iterates through them 
//then plugs i into the query selected class of .drum adding an event 
//listener to each button 
for (var i = 0; i < allTheButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHtml = this.innerHTML;

        makeSound(buttonInnerHtml);

        buttonAnimation(buttonInnerHtml);
    });

}


document.addEventListener("keydown", function (event) {

    makeSound(event.key);

    buttonAnimation(event.key);
});


function makeSound(key) {

    switch (key) {
        case "w":
            var kickbass = new Audio("sounds/kick-bass.mp3")
            kickbass.play();
            break;

        case "a":
            var snare = new Audio("sounds/snare.mp3")
            snare.play();
            break;

        case "s":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "d":
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();
            break;

        case "j":
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();
            break;


        case "k":
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();
            break;

        case "l":
            var crash = new Audio("sounds/crash.mp3")
            crash.play();
            break;


        default:
            console.log(key)
    }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);

}