// Niv notes: This is for the signup modal, to show, open, close and for the submit. 
// I have pulled these IDs from my html and the class close

const modal = document.getElementById("signupModal");
const btn = document.getElementById("signupBtn");
const closeBtn = document.querySelector(".close");
const form = document.getElementById("signupForm");


// Niv note: opens sign-up pop up module
btn.onclick = () => modal.classList.add("show");

// Niv note: close pop-up module
closeBtn.onclick = () => modal.classList.remove("show");


  form.addEventListener("submit", (e) => {
    e.preventDefault(); //niv note: prevent from reloading
    const name = document.getElementById("name").value;
    alert(`Thanks for signing up, ${name}!`); // niv note: this is to show the thank you message once user submits
    modal.style.display = "none"; // niv notes: to close 
    form.reset(); // niv notes: to empty all fields in my pop-up module
  });

  // Niv notes: This is for the AI-tools page to fade the hero copy in 
  window.addEventListener("load", () => { // Niv note: make sure the page is loaded
  document.querySelector(".aitools_hero h1").classList.add("show"); // niv notes: load the animation for ai tools hero 1
  document.querySelector(".aitools_hero h2").classList.add("show"); // niv notes: load the animation for ai tools hero 2
});

