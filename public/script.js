console.log('js sourced');
$(document).ready(function(){
  console.log('jq sourced');
  $('#restartGame').on('click', function (){
    guesses.length = 0;
    number.length = 0;
    rangeN.length = 0;
    $('#guessCount').html('');
    $('#guessRDisplay').html('');
  });
var guesses = [];
var number = [];
var rangeN = [];

var sendRange =  function(){
  objectToSend = {
    val: $('#rangeNum').val(),

};
rangeN.push(objectToSend);
console.log('This is in rangeN:', rangeN);
  console.log(objectToSend);
  $.ajax( {
    type: 'POST',
    url: '/testPost',
    data: objectToSend,
    success: function(response){
      console.log('Got it: ', response);
    }// end success
    });// end ajax
  };// end sendRange

  $('#startGame').on('click', function(){
    sendRange();
    getNumber();
    range();
  });// end on click function

  var playerGuesses =  function(){
    objectToSend = {

      playerOne:$('#playerOne').val() ,
      playerTwo: $('#playerTwo').val(),
      playerThree: $('#playerThree').val(),
      playerFour: $('#playerFour').val(),
    };
    guesses.push(objectToSend);
    console.log(objectToSend);
    $.ajax( {
      type: 'POST',
      url: '/playerGuesses',
      data: objectToSend,
      success: function(response){
        console.log('Got it: ', response);
        compareNumber();
      }// end success
      });// end ajax
    };// end sendRange
    $('#submitGuess').on('click', function(){
      playerGuesses();
      guessCounter();
      clearInputs();
      console.log(guesses.length);
    });// end on click function

var guessCounter = function () {

    $('#guessCount').html('<p>' + '<strong>Number of Rounds Played: </strong>' + guesses.length + '</p>');
  // $('#guessCount').append('<p>' + '<strong>Number of guesses: </strong>' + guesses.length + '</p>');

  // console.log(guesses.length);
};

var range = function () {

    $('#guessRDisplay').html('<p>' + '<strong>Pick a number between 1 and ' + rangeN[0].val + '</strong></p>');
  };

    //ajax call to receive winningNum
    var getNumber = function(){
      $.ajax({
        type: 'GET',
        url: '/winningNum',
        success: function(response){
          console.log('got number:', response);
          number.push(response);
        }

      });

    };
    var compareNumber = function(){
      console.log('in compareNumber');
      for (var i = 0; i < guesses.length; i++) {

        if(guesses[i].playerOne==number[0]){
          alert(' Player One you won!');
      }  else if (guesses[i].playerTwo==number[0]) {
          alert('Player Two you won!');
      } else if (guesses[i].playerThree==number[0]) {
          alert('Player Three you won!');
      } else if (guesses[i].playerFour==number[0]) {
          alert('Player Four you won!');
      }
    }
    };

    var clearInputs = function(){
      $('#playerOne').val('');
     $('#playerTwo').val('');
        $('#playerThree').val('');
       $('#playerFour').val('');
       $('#rangeNum').val('');
       //$('#guessCount').html('');
    };

});// end document ready
