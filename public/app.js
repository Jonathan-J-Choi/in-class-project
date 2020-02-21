console.log('app.js loaded');

$("#subjects").on("click", function() {
  $("#course").removeClass("d-none");
});
$("#courses").on("click", function() {
  $("#student").removeClass("d-none");
});