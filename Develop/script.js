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