var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// List View
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}

// Grid View
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "50%";
  }
}


const accordion = document.getElementsByClassName
      ('contentbx')
  for (i=0; i<accordion.length; i++){
    accordion[i].addEventListener('click', function(){
      this.classList.toggle('active')
    })
  }      