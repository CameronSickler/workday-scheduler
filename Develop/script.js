

// moment.js time function and id for HTML
var momentTimeDate = moment().format("MMM Do YY");
$("#currentDay").html(momentTimeDate);

// add event listener code using JQuery for saveBtn click
$(document).on("click", function () {
    //saves the current element description as var task
    var task = $(this).siblings(".description").val();
    console.log(task);
    var time = $(this).parent().attr("id");
    console.log(time);

    //localStorage moved within the click function to save on click within scope.
    localStorage.setItem(task, time);
})

//Need a function loop? that checks the timeblock IDs for time and changes styles accordingly. Idk

function timeMonitor() {
    console.log(time);
    // i need to check the moment.js time when this runs and then loop over the timeblocks to 
    //update their styles depending on what time it is.
}


//need to get all information from local storage on refresh/page load