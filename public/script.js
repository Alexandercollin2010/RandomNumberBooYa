console.log('js sourced');
$(document).ready(function(){
  console.log('jq sourced');
var sendRange =  function(){
  objectToSend = $('#rangeNum').val();
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
});// end document ready
