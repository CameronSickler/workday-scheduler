// var hoursList = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

// $('.hour').each(function () {
//     $(this).text(hoursList)
// })

// var timeEl = $("#time")
// var timeMethod = moment().format('MMMM Do YYYY, h:mm:ss a');


//practice code above






// moment.js time function and id for HTML
var time = moment().format("MMM Do YY");
$("#currentDay").html(time);

// add event listener code using JQuery for saveBtn click

//save local storage saves. Need to create vars that save data to send to local storage.

//Need a function loop? that checks the timeblock IDs for time and changes styles accordingly. Idk
//if I need this all as a single function or maybe an if else loop through?

//need to get all information from local storage on refresh/page load