function toggle(target) {
  var section = document.getElementById(target);
  section.className =
    (section.className == "showing-less") ?
    "showing-more" : "showing-less";
    
}