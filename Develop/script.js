

// moment.js time function and id for HTML
var momentTimeDate = moment().format("MMM Do YY");
$("#currentDay").html(momentTimeDate);

// add event listener code using JQuery for saveBtn click
$(".saveBtn").on("click", function () {
    //saves the textarea value as var task on save btn click
    var task = $(this).siblings(".description").val();
    console.log(task);
    //saves the id as the time on save btn click
    var time = $(this).parent().attr("id");
    console.log(time);

    //localStorage moved within the click function to save on click within scope.
    localStorage.setItem(time, task);
})

//Need a function loop? that checks the timeblock IDs for time and changes styles accordingly. Idk

function timeMonitor() {

    var setMonitorTimeNow = moment().hour();



    // i need to check the moment.js time when this runs and then loop over the timeblocks to 
    //update their styles depending on what time it is.

    $(".time-block").each(function () {
        // save the id attributes returned as an array of values to a variable
        var timeBlockChecker = ($(this).attr("id").split("hour")[1]);
        var currentHour = $(this).attr("id");
        $("#" + currentHour + " .description").val(localStorage.getItem(currentHour));
        console.log(timeBlockChecker);
        console.log(setMonitorTimeNow);
        console.log(currentHour);

        if (setMonitorTimeNow < timeBlockChecker) {
            console.log("There is still time to finish this task");
            $(this).addClass("future");
        } else if (setMonitorTimeNow == timeBlockChecker) {
            console.log("This task must be completed now");
            $(this).addClass("present");
        } else {
            console.log("This task is overdue today");
            $(this).addClass("past");
        }
        console.log("===");
    })
}


timeMonitor();

