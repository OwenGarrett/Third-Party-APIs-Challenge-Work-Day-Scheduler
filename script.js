// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready (function () {


  var saveButton = $(".saveBtn");
  var hourNine = $("#hour-9");
  var hourTen = $("#hour-10");
  var hourEleven = $("#hour-11");
  var hourTwelve = $("#hour-12");
  var hourThirteen = $("#hour-13");
  var hourFourteen = $("#hour-14");
  var hourFifteen = $("#hour-15");
  var hourSixteen = $("#hour-16");
  var hourSeventeen = $("#hour-17"); 
// Displays stamp of date and time of when accessed 
const currentDay = dayjs().format("dddd, MMMM D, hh:mm:ss a");
$("#currentDay").text(currentDay);






function timeDisplay() { 

var currentHour = dayjs().hour();

$('.time-block').each(function () {
  var blockHour = parseInt($(this).attr('id').split('-')[1]);

if (blockHour < currentHour) {
    $(this).addClass("past")
  }  if (blockHour === currentHour) {
  $(this).addClass("present")}
    if (blockHour > currentHour) {
      $(this).addClass("future")
    }})

}
timeDisplay()


saveButton.on('click', function () {
  var value = $(this).siblings('.description').val(); 
  var time = $(this).parent().attr('id');
    localStorage.setItem(time, value);

})})