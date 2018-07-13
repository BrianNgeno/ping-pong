//user logic
$(document).ready(function() {
  $("form").click(function(event) {
    event.preventDefault();
    var userInput = $("input#type").val();
    var input = parseInt(userInput);
    rick(input);
    web.forEach(function(input) {
      $("#user-output").append("<li>" + input + "</li>");
    });
  });
});
//business logic
var web = [];

function rick(input) {
  for (index = 1; index <= input; index++) {
    if (index % 15 === 0) {
      web.push("Ping-Pong");
    } else if (index % 3 === 0) {
      web.push("Ping");
    } else if (index % 5 === 0) {
      web.push("pong");
    } else; {
      web.push(index);
    }
  }

}
