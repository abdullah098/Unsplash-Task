function myFunction() {
    document.getElementById("myDropdown").style.display = "block";
    console.log("run");
}

window.onclick = function (event) {

    console.log(event.target);
    

    if (!event.target.matches('.abc')) {
        var dropdowns = document.getElementById("myDropdown");
        dropdowns.style.display='none';
        console.log("end"); 
       
    }
}



function loginPage() {
    window.location.href = "E:/JMM/4th Day Task/Unsplash Task/signUp.html";
}

// ----------------------------model js------------------------- 

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
  console.log("run");
}

span.onclick = function() {
  modal.style.display = "none";
  console.log("end");
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}