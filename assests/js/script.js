//display current date for the page
var currentDate=moment().format("dddd, MMMM Do");     ;
var displayDate=document.querySelector("#currentDay");
displayDate.innerHTML=currentDate;