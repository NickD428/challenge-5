$(function () {
  var currentDay = dayjs().format("dddd, MMMM D");
  $("#currentDay").text(currentDay);

  $(".saveBtn").on("click", function () {
    var timeBlock = $(this).parent(); 
    var hourId = timeBlock.attr("id"); 
    var description = timeBlock.find(".description").val(); 


    localStorage.setItem(hourId, description);
  });


  var currentHour = parseInt(dayjs().format("H")); 

  $(".time-block").each(function () {
    var hourId = parseInt($(this).attr("id").split("-")[1]); 

    if (hourId < currentHour) {
      $(this).removeClass("present future").addClass("past");
    } else if (hourId === currentHour) {
      $(this).removeClass("past future").addClass("present");
    } else {
      $(this).removeClass("past present").addClass("future");
    }
  });


  $(".time-block").each(function () {
    var hourId = $(this).attr("id");
    var savedDescription = localStorage.getItem(hourId);

    if (savedDescription) {
      $(this).find(".description").val(savedDescription);
    }
  });
});
