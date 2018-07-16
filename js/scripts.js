//user logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#type").val();
    var input = parseInt(userInput);
    rick(input);
    tabs.forEach(function(tab) {
      $("#user-output").append("<li>" + tab + "</li>");
    });
  });
});
//business logic
var tabs = [];
var index;
function rick(y) {
  for (index = 1; index <= y; index++) {
    if (index % 15 === 0) {
      tabs.push("Ping-Pong");
    } else if (index % 3 === 0) {
      tabs.push("Ping");
    } else if (index % 5 === 0) {
      tabs.push("pong");
    } else; {
      tabs.push(index);
    }
  }
}
// $(document).ready(function() {
//   $("form").click(function(event) {
//     alert("sign In here to Begin Game!");
//       });
//     });

$(document).ready(function() {
  $(".signupbtn").click(function(event) {
    $(".container").hide();
    $(".game").show();
    event.preventDefault();
  });
});
