//user logic
$(document).ready(function() {
  $("form").click(function(event) {
    event.preventDefault();
    var userInput = $("input#type").val();
    var input = parseInt(userInput);
    nick(input);
    web.forEach(function(input){
    ("#user-output").append("<li>" + +"</li>")  });
  });
  });
});
//business logic
