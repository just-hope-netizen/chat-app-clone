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

searchInput.addEventListener("click", function changeIcon() {
    secondSvg.classList.add("search-second-svg--active");
    firstSvg.classList.add("search-svg--inactive");
    if (true) {
        searchBtn.addEventListener("click", function revertChange(params) {
            secondSvg.classList.remove("search-second-svg--active");
            firstSvg.classList.remove("search-svg--inactive");
            
        })
    }
    
    
})


// first a element
// for .sidebar-contact__message-wrapper

let contactString = document.getElementById("sidebar-contact__message-wrapper").innerHTML;
let cut = String(1);
if(contactString > cut){
    let newString =  contactString.slice(0, 30) ;
    let symbol = "..."
    newString += symbol;
    document.getElementById("sidebar-contact__message-wrapper").innerHTML = newString;
}

//for .arrow-icon
const sideBarArchor = document.getElementById("sidebar-contact");
const arrowIcon = document.getElementById("arrow-icon");
sideBarArchor.addEventListener("mouseenter", function iconAppear(params) {
    arrowIcon.classList.add("arrow-icon--active")
    if(this.addEventListener){
      this.addEventListener("mouseleave", function iconDisappear(params) {
          arrowIcon.classList.remove("arrow-icon--active")
      })
    }
})
//


// second a element
// for .sidebar-contact__message-wrapper-1

contactString = document.getElementById("sidebar-contact__message-wrapper-2").innerHTML;
if (contactString > cut) {
    let newString = contactString.slice(0, 20);
    let symbol = "...";
    newString += symbol
    document.getElementById("sidebar-contact__message-wrapper-2").innerHTML = newString;
}

// for icon
const secondSideBarArchor = document.getElementById("sidebar-contact-2");
const secondArrowIcon = document.getElementById("arrow-icon-2");
secondSideBarArchor.addEventListener("mouseenter", function iconAppearSecond(params) {
    secondArrowIcon.classList.add("arrow-icon--active")
    if(this.addEventListener){
      this.addEventListener("mouseleave", function iconDisappearSecond(params) {
          secondArrowIcon.classList.remove("arrow-icon--active")
      })
    }
})
//---------------------------------------------------------------------------------------------------------//

// for  third a element
// for .sidebar-contact__message-wrapper-1

contactString = document.getElementById("sidebar-contact__message-wrapper-3").innerHTML;

if (contactString > cut) {
    let newString = contactString.slice(0, 25);
    let symbol = "...";
    newString += symbol
    document.getElementById("sidebar-contact__message-wrapper-3").innerHTML = newString;
}

// for icon
const thirdSideBarArchor = document.getElementById("sidebar-contact-3");
const thirdArrowIcon = document.getElementById("arrow-icon-3");
thirdSideBarArchor.addEventListener("mouseenter", function iconAppearThird(params) {
    thirdArrowIcon.classList.add("arrow-icon--active")
    if(this.addEventListener){
      this.addEventListener("mouseleave", function iconDisappearThird(params) {
          thirdArrowIcon.classList.remove("arrow-icon--active")
      })
    }
})
//------------------------------------------------------------------------------------------------------------//

// for  fourth a element
// for .sidebar-contact__message-wrapper-1

contactString = document.getElementById("sidebar-contact__message-wrapper-4").innerHTML;

if (contactString > cut) {
    let newString = contactString.slice(0, 25);
    let symbol = "...";
    newString += symbol
    document.getElementById("sidebar-contact__message-wrapper-4").innerHTML = newString;
}

// for icon
const fourthSideBarArchor = document.getElementById("sidebar-contact-4");
const fourthArrowIcon = document.getElementById("arrow-icon-4");
fourthSideBarArchor.addEventListener("mouseenter", function iconAppearFourth(params) {
    fourthArrowIcon.classList.add("arrow-icon--active")
    if(this.addEventListener){
      this.addEventListener("mouseleave", function iconDisappearFourth(params) {
          fourthArrowIcon.classList.remove("arrow-icon--active")
      })
    }
})
//------------------------------------------------------------------------------------------//

// for  fifth a element
// for .sidebar-contact__message-wrapper-1

contactString = document.getElementById("sidebar-contact__message-wrapper-5").innerHTML;

if (contactString > cut) {
    let newString = contactString.slice(0, 25);
    let symbol = "...";
    newString += symbol
    document.getElementById("sidebar-contact__message-wrapper-5").innerHTML = newString;
}

// for icon
const fifthSideBarArchor = document.getElementById("sidebar-contact-5");
const fifthArrowIcon = document.getElementById("arrow-icon-5");
fifthSideBarArchor.addEventListener("mouseenter", function iconAppearFifth(params) {
    fifthArrowIcon.classList.add("arrow-icon--active")
    if(this.addEventListener){
      this.addEventListener("mouseleave", function iconDisappearFifth(params) {
          fifthArrowIcon.classList.remove("arrow-icon--active")
      })
    }
})
//----------------------------------------------------------------------------------------//

// for  sixth a element
// for .sidebar-contact__message-wrapper-1

contactString = document.getElementById("sidebar-contact__message-wrapper-6").innerHTML;

if (contactString > cut) {
    let newString = contactString.slice(0, 26);
    let symbol = "...";
    newString += symbol
    document.getElementById("sidebar-contact__message-wrapper-6").innerHTML = newString;
}

// for icon
const sixthSideBarArchor = document.getElementById("sidebar-contact-6");
const sixthArrowIcon = document.getElementById("arrow-icon-6");
sixthSideBarArchor.addEventListener("mouseenter", function iconAppearSixth(params) {
    sixthArrowIcon.classList.add("arrow-icon--active")
    if(this.addEventListener){
      this.addEventListener("mouseleave", function iconDisappearSixth(params) {
          sixthArrowIcon.classList.remove("arrow-icon--active")
      })
    }
})
//----------------------------------------------------------------------------------------//