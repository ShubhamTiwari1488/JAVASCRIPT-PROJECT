var buttonColours = ["red","blue","green","yellow"];

var gamePattern = [];
var userClickedPattern = [];

//tracks if the game has started
var started = false;

//variable to game to start to 0
var level = 0;

//Keypress listener to start the gamePattern
$(document).keypress(function() {
    if(!started) {
        $(".level").text("LEVEL "+level);
        nextSequence();
        started = true;
    }
});


//Event Listener to log buttons clicked

$("button").click(function() {
    //store class of the button which was clicked
    var userChosenColor = $(this).attr("class");

    console.log(userChosenColor);

    //add the content of var userChosenColor to userClickedPattern
    userClickedPattern.push(userChosenColor);

    //run function to play sound for the clicked button
    //playSound(userChosenColor);

    //run function to animate button press
    animatePress(userChosenColor);

    //calling checkanswer() . Here we pass the last index value since it will be having the latest value chosen by user 
    checkAnswer(userClickedPattern.length-1);

    console.log(userClickedPattern);
    console.log(gamePattern);
});


//function to check answer
function checkAnswer(currentLevel) {
    
    if(gamePattern[currentLevel] == userClickedPattern[currentLevel]){
        console.log("success");

        if(userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            },1000);
        }
    }

    else {
        console.log("wrong");
        //playSound("Wrong");

        $("body").addClass("game-over");

        setTimeout(function() {
            $("body").removeClass("game-over");
        },200);

        $(".level").text("GAME OVER , Press Any Key To Restart");
        startOver();
    }
}

//function to generate a random number
function nextSequence() {

    userClickedPattern = [];

    level++;

    $(".level").text("Level "+level);

    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColor = buttonColours[randomNumber];

    gamePattern.push(randomChosenColor);

    console.log(randomChosenColor);

    //Using jquery to choose button with same class name 
    $("."+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    //playSound(randomChosenColor);
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}


// function playSound(name) {
//     var audio = new Audio("sounds/" + name + ".mp3");
//     audio.play();
// }

//Animating the button
function animatePress(currentColor) {
    $("." + currentColor).addClass("pressed");

    setTimeout(function() {
        $("." + currentColor).removeClass("pressed");
    },100);
}