
$( document ).ready(function() {
  $('.first-thing').hide()
  $('.first-thing').show(3000);
});


$(document).ready(function(){
  $('.second-thing').hide()
  $('.second-thing').show(3000)
})

$('#button-addon2').on('click', function(){ 
  console.log('the sign up button was clicked')
})


$(document).ready(function(){
  $(".scroll-up").dblclick(function(){
     $('html,body').animate({scrollTop: 0});
  });
});


$("#answer_button").on("click", function(){
  console.log('vbjkhllbkhvuhi')
})