// Date Display 
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    // save button click listener 
    $(".save").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".text").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })
   
    function timeTracker() {
        //get current number of hours.
        var timeNow = moment().hour();

        // loop over time blocks
        $(".timeBlock").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // To check the time and add the classes for background indicators
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // Get item from local storage if any
    $("#eight .text").val(localStorage.getItem("eight"));
    $("#nine .text").val(localStorage.getItem("nine"));
    $("#ten .text").val(localStorage.getItem("ten"));
    $("#eleven .text").val(localStorage.getItem("eleven"));
    $("#tweleve .text").val(localStorage.getItem("twelve"));
    $("#thirteen .text").val(localStorage.getItem("thirteen"));
    $("#fourteen .text").val(localStorage.getItem("fourteen"));
    $("#fiveteen .text").val(localStorage.getItem("fiveteen"));
    $("#sixteen .text").val(localStorage.getItem("sixteen"));
    $("#seventeen .text").val(localStorage.getItem("seventeen"));

    timeTracker();
})