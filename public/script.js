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
      url: '/testPost',
      data: objectToSend,
      success: function(response){
        console.log('Got it: ', response);
      }// end success
      });// end ajax
    };// end sendRange
    $('#submitGuess').on('click', function(){
      playerGuesses();
    });// end on click function

});// end document ready
