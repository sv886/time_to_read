$(window).ready(function(){

  var werdz_count = document.getElementById('werdz').innerHTML.split(' ').length;

  var werdzPerMinute = 230

  $("button#count").on("click", function(){
    alert("It will take an average of " + parseFloat(werdz_count/werdzPerMinute).toFixed(2) + " minutes to read these " + werdz_count + " werdz.");

  })


// timeToRead()





})
