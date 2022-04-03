

// moment.js time function and id for HTML
var momentTimeDate = moment().format("MMM Do YY");
$("#currentDay").html(momentTimeDate);

// add event listener code using JQuery for saveBtn click
$(document).on("click", function () {
    var task = $(this).val("description");
    console.log(task);
    var time = $(this).val("time");
    console.log(time);
})

//save local storage saves. Need to create vars that save data to send to local storage.

//Need a function loop? that checks the timeblock IDs for time and changes styles accordingly. Idk
//if I need this all as a single function or maybe an if else loop through?

//need to get all information from local storage on refresh/page load