
var scores = [0,0,0,0,0];

function indexOfMax(arr) {
  if (arr.length === 0) {
    return -1;
  }

  var max = arr[0];
  var maxIndex = 0;

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      maxIndex = i;
      max = arr[i];
    }
  }

  return maxIndex;
}

var addscore = function(answer) {
  if (answer === "tywin") {
    scores[0] += 1;
  } else if (answer === "cercei") {
    scores[1] += 1;
  } else if (answer === "jamie") {
    scores[2] += 1;
  } else if (answer === "tyrion") {
    scores[3] += 1;
  } else {
    scores[4] += 1;
  }
}

var getWinner = function() {
  var winner = indexOfMax(scores)

  if (winner === 0) {
    return "Tywin"
  } else if (winner === 1) {
    return "Cercei"
  } else if (winner === 2) {
    return "Jamie"
  } else if (winner === 3) {
    return "Tyrion"
  } else {
    return "Joffery"
  }
}


$(document).ready(function() {

  $(".form1").submit(function(event) {
    event.preventDefault();

    var answer1 = $("input:radio[name=question1]:checked").val();
    var answer2 = $("input:radio[name=question2]:checked").val();
    var answer3 = $("input:radio[name=question3]:checked").val();
    var answer4 = $("input:radio[name=question4]:checked").val();
    var answer5 = $("input:radio[name=question5]:checked").val();
    var answer6 = $("input:radio[name=question6]:checked").val();
    var answer7 = $("input:radio[name=question7]:checked").val();
    var answer8 = $("input:radio[name=question8]:checked").val();


   addscore(answer1);
   addscore(answer2);
   addscore(answer3);
   addscore(answer4);
   addscore(answer5);
   addscore(answer6);
   addscore(answer7);
   addscore(answer8);

    console.log(scores);

    $("#result").text(getWinner());
    $(".container").hide();
    $("#result-text").fadeIn();
    console.log("#" + getWinner()+"-img");

    $("#" + getWinner()+"-img").fadeIn();

    scores = [0,0,0,0,0];


  });
});
