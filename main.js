let navLinks = document.getElementById("navLinks");
    function showMenu(){
      navLinks.style.right = "0";
    }
    function hideMenu(){
      navLinks.style.right = "-200px";
    }


let reserveBtn = document.getElementById("reserveBtn");
let feedback = document.querySelector(".feedback");
let container = document.querySelector('.container')

reserveBtn.addEventListener("click", function(){
 feedback.classList.add("feedbackShow");
 container.classList.add('containerblur')

 setTimeout(function(){
  feedback.classList.remove("feedbackShow");
  container.classList.remove('containerblur')
 }, 1500)
})





