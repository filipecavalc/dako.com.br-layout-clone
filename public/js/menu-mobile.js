openButton = document.getElementById("menu-toggle");
openButton.onclick = function openNav() {
  document.getElementById("mySidenav").style.width = "80%";
};

closeButton = document.getElementById("close-button");
closeButton.onclick = function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
};

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " active";
}

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "flex") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "flex";
  }
  });
}