

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


// function to compare current time with workday schedule time blocks and also pulls
// local storage values to populate the browser on page refresh/load

function timeMonitor() {

    var setMonitorTimeNow = moment().hour();


    $(".time-block").each(function () {
        // save the id attributes returned as an array of values to a variable
        var timeBlockChecker = ($(this).attr("id").split("hour")[1]);
        // save time block ids as a variable
        var currentHour = $(this).attr("id");
        // get values from local storage and populate the textareas
        $("#" + currentHour + " .description").val(localStorage.getItem(currentHour));

        // compare current time to timeblock and change class accordingly
        if (setMonitorTimeNow < timeBlockChecker) {
            $(this).addClass("future");
        } else if (setMonitorTimeNow == timeBlockChecker) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
}

//function call to start logic
timeMonitor();

