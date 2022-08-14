var timeCurrentEl = $("#currentDay");
var timeBlocks = $('.hour');

// set time now to use in function logic for applying CSS styling. 
var timeNow = parseInt(moment().format("H"));

// set time and format to show on the header. 
function showTime() {
    var currentTime = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
    timeCurrentEl.text(currentTime)
}

//call showtime  function
showTime();
// set to increment by seconds. 
setInterval(showTime, 1000);

// add function to style the time block according to past present or future comparing to current time. 
$.each(timeBlocks, function(i, hour) {
    var hourEl = parseInt($(this).attr('id'));
    if (hourEl === timeNow) {
        $(this).next().addClass("present");
    } else if (hourEl < timeNow ) {
        $(this).next().addClass("past");
    } else if (hourEl > timeNow ) {
        $(this).next().addClass("future");
    }
})

$(".saveBtn").on("click", function (event) {
    var calendarItem =
      event.target.parentElement.previousElementSibling.children[0].value;
    localStorage.setItem(event.target.attributes[0].value, calendarItem);
  });

$(document).ready(function () {
    if (localStorage["8am"] !== null && localStorage["8am"] !== undefined) {
      var nineAm = $("<p>" + localStorage["9am"] + "</p>");
      $("#eightAm").append(nineAm[0].innerText);
    } else {
      ("");
    }
    if (localStorage["9am"] !== null && localStorage["9am"] !== undefined) {
      var nineAm = $("<p>" + localStorage["9am"] + "</p>");
      $("#nineAm").append(nineAm[0].innerText);
    } else {
      ("");
    }
    if (localStorage["10am"] !== null && localStorage["10am"] !== undefined) {
      var tenAm = $("<p>" + localStorage["10am"] + "</p>");
      $("#tenAm").append(tenAm[0].innerText);
    } else {
      ("");
    }
    if (localStorage["11am"] !== null && localStorage["11am"] !== undefined) {
      var elevenAm = $("<p>" + localStorage["11am"] + "</p>");
      $("#elevenAm").append(elevenAm[0].innerText);
    } else {
      ("");
    }
    if (localStorage["12pm"] !== null && localStorage["12pm"] !== undefined) {
      var twelvePm = $("<p>" + localStorage["12pm"] + "</p>");
      $("#twelvePm").append(twelvePm[0].innerText);
    } else {
      ("");
    }
    if (localStorage["1pm"] !== null && localStorage["1pm"] !== undefined) {
      var onePm = $("<p>" + localStorage["1pm"] + "</p>");
      $("#onePm").append(onePm[0].innerText);
    } else {
      ("");
    }
    if (localStorage["2pm"] !== null && localStorage["2pm"] !== undefined) {
      var twoPm = $("<p>" + localStorage["2pm"] + "</p>");
      $("#twoPm").append(twoPm[0].innerText);
    } else {
      ("");
    }
    if (localStorage["3pm"] !== null && localStorage["3pm"] !== undefined) {
      var threePm = $("<p>" + localStorage["3pm"] + "</p>");
      $("#threePm").append(threePm[0].innerText);
    } else {
      ("");
    }
    if (localStorage["4pm"] !== null && localStorage["4pm"] !== undefined) {
      var fourPm = $("<p>" + localStorage["4pm"] + "</p>");
      $("#fourPm").append(fourPm[0].innerText);
    } else {
      ("");
    }
    if (localStorage["5pm"] !== null && localStorage["5pm"] !== undefined) {
      var fivePm = $("<p>" + localStorage["5pm"] + "</p>");
      $("#fivePm").append(fivePm[0].innerText);
    } else {
      ("");
    }
  });
  