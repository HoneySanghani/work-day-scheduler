let hours = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"];
  //shows todays date and time 
  let currDay = moment().format("dddd, MMMM Do");
  let getHour = moment().hours();
  
  $("#currentDay").append(currDay);
  
  //create task blocks for the page
  $.each(hours, function (index, value) {
    $(".container").append(`<div class='row' id='${index + 9}'>
    <p class='col-lg-1 col-sm-2 border-top border-dark p-4'>${value}</p>
    <textarea id='desc${index + 9}' class="border border-dark col-lg-10 col-sm-6 p-4 description"></textarea>
    <button id='save${
      index + 9
    }' class="btn col-lg-1 col-sm-2 bg-primary border rounded-right saveBtn"><i class="oi oi-file"></i></button>
    </div>   
    `);
  });
  
  //color cordinate task according to past/present/future
  $.each($("textarea"), function () {
    let hourEl = parseInt($(this).parent().attr("id"));
  
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
  });
  
  //Save to local storage
  $(".saveBtn").on("click", function () {
    let textareaId = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");
    localStorage.setItem(time, textareaId);
  });
  
  //Get data from local storage
  $.each($("textarea"), function (index, value) {
    let time = $(this).parent().attr("id");
    $(`#desc${index + 9}`).val(localStorage.getItem(time));
  });