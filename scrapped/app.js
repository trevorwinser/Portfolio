function consolidateNav() {
  var x = document.getElementById("topnav-links");
    if (x.className === "topnav-links") {
      x.className += " responsive";
    } else {
      x.className = "topnav-links";
    }
  console.log("BLAH")
}