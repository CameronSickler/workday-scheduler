

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

localStorage.setItem(task, time);

//Need a function loop? that checks the timeblock IDs for time and changes styles accordingly. Idk

function timeMonitor() {
    console.log(time);
    // i need to check the moment.js time when this runs and then loop over the timeblocks to 
    //update their styles depending on what time it is.
}


//need to get all information from local storage on refresh/page load