$(window).ready(function(){

  var werdzCount = document.getElementById('werdz').innerHTML.split(' ').length;

  // function

  timeToRead = function(words, wpm = 230){

    return parseFloat(words/wpm).toFixed(2);

  };

  var readPage = timeToRead(werdzCount)

  alert( readPage + " minutes to read this page.");


  // button

  $("button#count").on("click", function(){
    $(".reading-time").append(readPage + " minutes to read these " + werdzCount + " werdz.");
      setTimeout(function() {
         $(".reading-time").fadeOut();
     }, 5000);
  });


})
