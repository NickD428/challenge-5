// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  var currentDay = dayjs().format("dddd, MMMM D");
  $("#currentDay").text(currentDay);

  $(".saveBtn").on("click", function () {
    var timeBlock = $(this).parent();
    var hourId = timeBlock.attr("id");
    var description = timeBlock.find(".description").val();
    localStorage.setItem(hourId, description);
  });
});
