let ulEl =  document.querySelector("#options-btn__options");
let btn = document.getElementById("options-btn");
btn.addEventListener("click", function menu(params) {
    ulEl.classList.toggle("options-btn__options--active")
})

//profile slide functions
let sideBarAvatar = document.querySelector(".sidebar_avatar-wrapper");
let profileSlide = document.querySelector(".profile-slide");
let profileBack = document.querySelector("#back");
let sideBar = document.getElementById("sidebar");
sideBarAvatar.addEventListener("click", function profileAppear(params) {
    profileSlide.classList.add("profile-slide--active");
    sideBar.style.display = "none";
     if (true) {
         profileBack.addEventListener("click", function removeProfile(params) {
             profileSlide.classList.remove("profile-slide--active"); 
             sideBar.style.display = "flex";
         }
        )
     }
})

// for profile-slide-name
let profileBtn = document.getElementById("profile-slide-svg");
let input = document.getElementById("input");
let pEl = document.getElementById("profile-p-el");
    profileBtn.addEventListener("click", function replaceParagraph(params) {
    input.classList.toggle("input--active");
    pEl.classList.toggle("profile-p--inactive");
    
})

function myFunction(value) {
    pEl.innerHTML = value;   
}
// for profile-slide-about
let profileAboutBtn = document.getElementById("profile-slide-second-svg");
let profileAboutInput = document.getElementById("input-about");
let profileAboutP = document.getElementById("profile-second-p-el");
profileAboutBtn.addEventListener("click", function replaceAboutParagraph() {
    profileAboutInput.classList.toggle("input-about--active");
    profileAboutP.classList.toggle("profile-second-p-el--inactive")
    
})
function collectTheValue(value) {
    profileAboutP.innerHTML = value
    
}
// for search-wrapper
let searchBtn = document.getElementById("search-btn");
let firstSvg = document.getElementById("search-svg");
let secondSvg = document.getElementById("search-second-svg");
let searchInput = document.getElementById("search-field");

searchInput.addEventListener("click", function fdg() {
    secondSvg.classList.add("search-second-svg--active");
    firstSvg.classList.add("search-svg--inactive");
    if (true) {
        searchBtn.addEventListener("click", function cff(params) {
            secondSvg.classList.remove("search-second-svg--active");
            firstSvg.classList.remove("search-svg--inactive");
            
        })
    }
})
