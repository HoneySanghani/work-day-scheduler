//display current date for the page
var currentDate=moment().format("dddd, MMMM Do");     ;
var displayDate=document.querySelector("#currentDay");
console.log(getHour);
displayDate.innerHTML=currentDate;
//save task to local storage
$(document).ready(function(){
    $(".save-task").on("click",function(){
        var task=$(this).siblings('.description').val();
        var time=$(this).parent().attr('id');
        console.log(task,time);
        localStorage.setItem('time','task');
    })
})
$.each($("textarea"),function(){
    let hourEl =parseInt($(this).parent().attr('id'));
    if (getHour > hourEl) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
      } else if (getHour === hourEl) {
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
      } else if (getHour < hourEl) {
        $(this).addClass("future");
        $(this).removeClass("present");
        $(this).removeClass("past");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
      }
})

// var tasks = JSON.parse(localStorage.getItem("tasks"));
// $.each(tasks, function(list, arr) {
//     // then loop over sub-array
//     arr.forEach(function(task) {
//       createTask(task., task.date, list);
//     });
//   });