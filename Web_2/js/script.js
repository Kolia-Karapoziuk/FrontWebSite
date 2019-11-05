function openLink(evt, animName) {
  let i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
  }

  document.getElementById(animName).style.display = "block";
  evt.currentTarget.className += " w3-red";
}

function addForm() {
  document.getElementById("search").style.display = "block";
}

function RemoveForm() {
  if (document.getElementById("search-input").value === "") {
    document.getElementById("search").style.display = "none";
  }
}

function validate(evt) {
  let theEvent = evt || window.event;
  let key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  let regex = /[0-9]|\./;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}

$(document).ready(
  function () {
    $(".tabs").on("click", ".tabul", function () {
      //удаляєм класи актів
      $(".tabs").find(".tabActive").removeClass("tabActive");
      //add class active
      $(this).addClass("tabActive");
    });
  });

$(document).ready(
  function () {
    $(".pay").on("click", ".cardPay", function () {
      //удаляєм класи актів
      $(".pay").find(".cardActive").removeClass("cardActive");
      //add class active
      $(this).addClass("cardActive");
    });
  });

$(document).ready(
  function () {
    $(".conImgZR").on("click", ".conImgS", function () {
      //удаляєм класи актів
      $(".conImgZR").find(".cardActive").removeClass("cardActive");
      //add class active
      $(this).addClass("cardActive");
    });
  });


$(function () {
  //задание заполнителя с помощью параметра placeholder
  $("#yearTime").mask("99/99");
  //задание заполнителя с помощью параметра placeholder

});