console.log('js sourced');
$(document).ready(function(){
  console.log('jq sourced');


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
    });// end on click function

    //ajax call to receive winningNum
    var getNumber = function(){
      $.ajax({
        type: 'GET',
        url: '/winningNum',
        success: function(response){
          console.log('got number:', response);

        }

      });

    };
    var compareNumber = function(){
      for (var i = 0; i < playerGuess.length; i++) {

        if(playerGuess[i].playerOne==maxRange.val){
          alert('you won!');
      }  else if (playerGuess[i].playerTwo==maxRange.val) {
          alert('you won!');
      } else if (playerGuess[i].playerThree==maxRange.val) {
          alert('you won!');
      } else if (playerGuess[i].playerFour==maxRange.val) {
          alert('you won!');
      }
    }
    };
});// end document ready
