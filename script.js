let width = 0;
document.getElementById("myInput").addEventListener("input", function (event) {
  var value = event.target.value;
  if (width < 25) {
    move(5);
  }
});
document.getElementById("inputTwo").addEventListener("input", function (event) {
  var value = event.target.value;
  if (width < 45) {
    move(5);
  } else {
    displayTwo();
  }
});
document
  .getElementById("salesOption")
  .addEventListener("input", function (event) {
    console.log("option");
    var value = event.target.value;
    if (width < 75) {
      move(25);
    } else {
    }
  });
document
  .getElementById("salesOptionTwo")
  .addEventListener("input", function (event) {
    console.log("option");
    var value = event.target.value;
    if (width < 100) {
      move(25);
    } else {
    }
  });
function move(e) {
  var elem = document.getElementById("myBar");
  frame();
  function frame() {
    width = width + e;
    elem.style.width = width + "%";
    elem.innerHTML = width + "%";
  }
}

function displayTwo() {
  var screenOne = document.getElementById("questions");
  var screenTwo = document.getElementById("screenTwo");
  screenOne.style.display = "none";
  screenTwo.style.display = "flex";
}
