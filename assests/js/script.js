//display current date for the page
var currentDate=moment().format("dddd, MMMM Do");     ;
var displayDate=document.querySelector("#currentDay");
var currentTime=moment().hours();
console.log(currentTime);
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

// var tasks = JSON.parse(localStorage.getItem("tasks"));
// $.each(tasks, function(list, arr) {
//     // then loop over sub-array
//     arr.forEach(function(task) {
//       createTask(task., task.date, list);
//     });
//   });