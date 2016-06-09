var romanNumeral = function(input){
  var position = 0;
  var numerals = ["I", "V", "X", "L", "C", "D", "M"]
  var result = [];
  var position = 0;
  for(var i = input.length; i > 0; i--){
    if(input[i-1]< 4) {
      result.unshift(rNumFactory(numerals[position], parseInt(input[i-1]))); //1-3
      position += 2;
    } else if(input[i-1] === "4" ){   //4
      result.unshift(numerals[position] + numerals[position + 1]);
      position += 2;
    } else if (input[i-1] === "5"){     //5
      result.unshift(numerals[position + 1]);
      position += 2;
    } else if (input[i-1] > 5 && input[i-1] < 9){     //6-8
      result.unshift(numerals[position + 1] + rNumFactory(numerals[position], input[i-1] - 5));
      position += 2;
    } else if (input[i-1] === "9") {   //9
      result.unshift(numerals[position] + numerals[position + 2]);
      position += 2;
    } else {
      return false
    }
  }
  return result.join(""); //has to be outsite of for loop
}
var rNumFactory = function(letter, occurr){
  var res = "";
  for(i=0; i<occurr; i++){
    res += letter;
  }
  return res;
}

$(function() {
  $("form#converter").submit(function(event){
    var userInput = $("input#userInput").val().split("");
    var text = "";
    console.log(userInput);
    if(parseInt(userInput.join("")) > 3999){
      text = "Please enter a number between 1-3999";
    } else {
      text = romanNumeral(userInput);
    }
  $("#result").text(text);
  event.preventDefault();
  });
});
