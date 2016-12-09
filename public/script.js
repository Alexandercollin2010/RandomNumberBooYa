console.log('js sourced');
$(document).ready(function(){
  console.log('jq sourced');
var guesses = [];
var number = [];

var sendRange =  function(){
  objectToSend = {
    val: $('#rangeNum').val(),

};
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
      }// end success
      });// end ajax
    };// end sendRange
    $('#submitGuess').on('click', function(){
      playerGuesses();
      compareNumber();
    });// end on click function

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
      for (var i = 0; i < guesses.length; i++) {

        if(guesses[i].playerOne== number[0]){
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
});// end document ready
