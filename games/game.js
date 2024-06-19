
var buttonColours = ["red", "blue", "green", "yellow",]
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

$(document).keypress(function () {
  if (!started) {
    $("#main-title").text("Level" + level);
    nextSequence();
    started = true;
  }
});

function CheckPattern(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");

    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  }
  else{
    console.log("wrong")
    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);

    $("h1").text("Game Over!, Press any Key to restart");
    StartOverGame();
  }
  
}
function nextSequence() {
  userClickedPattern = [];
  level++;

  $("#main-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);
}

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animaterOnpress(userChosenColour);
  CheckPattern(userClickedPattern.length - 1);
});

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animaterOnpress(currentColour) {
  $("#" + currentColour).addClass("pressbutton");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressbutton")
  }, 100);
}


function StartOverGame()
{
  level=0;
  gamePattern=[];
  started= false;
}