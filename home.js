function togglemenu() {
  var menulist = getComputedStyle(
    document.getElementById("menulist")
  ).getPropertyValue("height");

  if (menulist === "0px") {
    document.getElementById("menulist").style.setProperty("height", "180px");
    for (let i = 0; i < 6; i++) {
      document
        .getElementsByClassName("links")
        [i].style.setProperty("display", "block");
    }
  } else {
    document.getElementById("menulist").style.setProperty("height", "0px");
    for (let i = 0; i < 6; i++) {
      document
        .getElementsByClassName("links")
        [i].style.setProperty("display", "none");
    }
  }
}
