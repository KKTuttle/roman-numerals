var romanNumeral = function(input){
  var position = 0;
// debugger;
  var result = [];
  for(var i = input.length; i > 0; i--){
    //single

    if(position === 0 && (input[i-1]< 4)) {
      result.unshift(rNumFactory("I", parseInt(input[i-1]))); //1-3
      position += 1;
    } else if(input[i-1] === "4" && position === 0){   //4
      result.unshift("IV");
      position += 1;
    } else if (input[i-1] === "5" && position === 0){     //5
      result.unshift("V");
      position += 1;
    } else if (input[i-1] > 5 && input[i-1] < 9 && position === 0){     //6-8
      result.unshift("V" + rNumFactory("I", input[i-1] - 5));
      position += 1;
    } else if (input[i-1] === "9" && position === 0){   //9
      result.unshift("IX");
      position += 1;

      //tents
    } else if (position === 1 && (input[i-1]< 4)) {         //10-30
      result.unshift(rNumFactory("X", parseInt(input[i-1])));
      position += 1;
    } else if(input[i-1] === "4" && position === 1){      //40
      result.unshift("XL");
      position += 1;
    } else if (input[i-1] === "5" && position === 1){     //50
      result.unshift("L");
      position += 1;
    } else if (input[i-1] > 5 && input[i-1] < 9 && position === 1){     //60-80
      result.unshift("L" + rNumFactory("X", input[i-1] - 5));
      position += 1;
    } else if (input[i-1] === "9" && position === 1){       //90
      result.unshift("XC");
      position += 1;

      //hundreds
    } else if (position === 2 && (input[i-1]< 4)){          //100-300
      result.unshift(rNumFactory("C", parseInt(input[i-1])));
      position += 1;
    } else if(input[i-1] === "4" && position === 2){    //400
      result.unshift("CD");
      position += 1;
    } else if (input[i-1] === "5" && position === 2){     //500
      result.unshift("D");
      position += 1;
    } else if (input[i-1] > 5 && input[i-1] < 9 && position === 2){     //600-800
      result.unshift("D" + rNumFactory("C", input[i-1] - 5));
      position += 1;
    } else if (input[i-1] === "9" && position === 2){   //900
      result.unshift("CM");
      position += 1;

      //thousands
    } else if (position === 3 && (input[i-1]< 4)){                //3000
      result.unshift(rNumFactory("M", parseInt(input[i-1])));
      position += 1;
    } else {
      return false;
    }
  }
  return result.join("");
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
