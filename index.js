var biotextpt = document.getElementById("biopt-text");
var biotexten = document.getElementById("bioen-text");

for (var i = 0; i<document.querySelectorAll(".btn-bio").length; i++) {
  document.querySelectorAll(".btn-bio")[i].addEventListener("click", function () {
    biotextpt.classList.toggle("d-none");
    biotexten.classList.toggle("d-none");
    }
  );
};
