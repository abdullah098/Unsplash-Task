window.onclick = function (event) {

  console.log(event.target);


  if (!event.target.matches('.abc')) {
    var dropdowns = document.getElementById("myDropdown");
    dropdowns.style.display = 'none';
    console.log("end");

  }

  if (!event.target.matches('.search') && !event.target.matches('.unsplash-input')) {
    document.getElementById("search").style.display = "none";
    console.log("end search");
  }


  if (event.target == modal) {
    modal.style.display = "none";
  }
}







function myFunction() {
  document.getElementById("myDropdown").style.display = "block";
  console.log("run");
}




// login page 
function loginPage() {
  window.location.href = "E:/JMM/4th Day Task/Unsplash Task/signUp.html";
}

// ----------------------------model js------------------------- 

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
  console.log("run");
}

span.onclick = function () {
  modal.style.display = "none";
  console.log("end");
}


// search dropdown 
function search_Dropdeown() {
  document.getElementById("search").style.display = "block";
  console.log("run search");
}