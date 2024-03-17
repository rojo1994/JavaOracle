var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var level = 0;

var started = false;

function nextSequence() {

    userClickedPattern = [];

    var randomNumber = Math.floor(Math.random() * (3 + 1));
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);


    $("#level-title").text("Level " + level);
    level++;



}


$(".btn").click(function () {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animetePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
    
    
});


function playSound(nombre) {
    var audio = new Audio("./sounds/" + nombre + '.mp3');
    audio.play();

}

function animetePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}


$(document).keydown(function () {
    if (!started) {
        $("#level-title").text("Level " + level);
        started = true;
        nextSequence();
    }
});

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("success");
        
        if (userClickedPattern.length === gamePattern.length) {

            //5. Call nextSequence() after a 1000 millisecond delay.
            setTimeout(function () {
                nextSequence();
            }, 1000);

        }

    } else {
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Game Over, Press Any Key to Restart");

        startOver();


        
    }

}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}












