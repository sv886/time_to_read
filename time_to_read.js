$(window).ready(function(){

  var werdzCount = document.getElementById('werdz').innerHTML.split(' ').length;

  var werdzPerMinute = 230;

  var time = parseFloat(werdzCount/werdzPerMinute).toFixed(2)

  // button

  $("button#count").on("click", function(){
    alert("It will take an average of " + time + " minutes to read these " + werdzCount + " werdz.");

  });

  // function

  timeToRead = function(words, wpm){

    alert(parseFloat(words/wpm).toFixed(2) + " minutes to read this page.");

  };

 timeToRead(werdzCount, werdzPerMinute)



})
