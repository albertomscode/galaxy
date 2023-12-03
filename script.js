let question = prompt("Welcome to the Space🚀 Are you ready about what you are going to see here? YES/NO");
let yes = "YES";
let no = "NO";

if (question === yes){
  alert("Yay! You made me happy. Go for it! 😄")
} else if (question === no){
  alert("Well, you will see it anyways😊")
}

alert("P.S! Look at all animations and transitions I made. I am very proud of it, so I hope you enjoy it😜");

// cookie policy
$(document).on("ready", function () {
  if (document.cookie.indexOf("accepted_cookies=") < 0) {
    $(".cookie-overlay").removeClass("d-none").addClass("d-block");
  }

  $(".accept-cookies").on("click", function () {
    document.cookie = "accepted_cookies=yes;";
    $(".cookie-overlay").removeClass("d-block").addClass("d-none");
  });

  // expand depending on your needs
  $(".close-cookies").on("click", function () {
    $(".cookie-overlay").removeClass("d-block").addClass("d-none");
  });
});