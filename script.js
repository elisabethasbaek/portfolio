//JavaScript document

    //FADE IN ON LOAD
//locates first page on site:
const yellow = document.querySelector("#yellow");
yellow.style.opacity = "0"; //initially invisible

//locates header:
const header = document.querySelector("header");
header.style.opacity = "0"; //initially invisible

//when the window loads run function "opacity":
window.addEventListener("load", opacity);

function opacity(){
    header.style.transition = "7s"; //fades in in 7 seconds
    header.style.opacity = "1"; //becomes visible

    yellow.style.transition = "4s"; //fades in in 4 seconds
    //yellow.style["transition-delay"] = "1s";
    yellow.style.opacity = "1"; //becomes visible
}


    //SHOW AND HIDE MENU
//locates burger menu icon:
const burger = document.querySelector(".fa-bars");
burger.addEventListener("click", showMenu);

//locates entire navbar/menu:
const navbar = document.querySelector("header nav");

//locates all elements in navbar/menu:
const arrow = document.querySelectorAll("header nav li");
for (let i=0; i<arrow.length; i++){
    arrow[i].addEventListener("click", hideMenu);
}

//shows menu:
function showMenu(){
    navbar.style["margin-right"] = "-30vw"; //make menu visible in viewport
    navbar.style.transition = "1s cubic-bezier(0.68, -0.6, 0.32, 1.6)"; //ease in with bounce
}

//hides menu:
function hideMenu(){
    navbar.style["margin-right"] = "-130vw"; //hide menu out of viewport
    navbar.style.transition = "2s"; //ease slowly out
}


    //SLIDER GALLERY
let index = 0;

//all images for gallery:
const images = ['images/picture01.jpg', 'images/picture02.jpg', 'images/picture03.jpg', 'images/picture04.jpg', 'images/picture05.jpg', 'images/picture06.jpg', 'images/picture07.jpg', 'images/picture08.jpg', 'images/picture09.jpg', 'images/picture10.jpg'];

//locates the image that is shown:
const newImage = document.querySelector("#coral img");

//when left arrow icon is clicked:
const left = document.querySelector("#coral .fa-chevron-left");
left.addEventListener("click", previous);

//when right arrow icon is clicked:
const right = document.querySelector("#coral .fa-chevron-right");
right.addEventListener("click", next);

//show next image in array:
function next(){
    if(index === images.length-1){
        index = 0;
    }else{
        index++;
    }

    newImage.setAttribute("src", images[index]);
}

//show previous image in array:
function previous(){
    if(index === 0){
        index = images.length-1;
    }else{
        index--;
    }

    newImage.setAttribute("src", images[index]);
}


    //SHOW HIDE CONTACT FORM
//locates the big button:
const bigButton = document.querySelector("#mint>i");
bigButton.addEventListener("click", showForm);

const bigButtonHover = document.querySelector("#mint>i:hover");

//locates the form container:
const form = document.querySelector("#mint>article");

//locates the small button in the form container:
const formButton = document.querySelector("#mint article i");
formButton.addEventListener("click", hideForm);

function showForm(){
    bigButton.style["margin-right"] = "-100vw"; //knocks bigButton out of viewport
    bigButton.style.transition = "1s ease-out"; //time it takes for bigButton to disappear
    bigButton.style.opacity = "0%"; //makes bigButton invisible
    bigButton.style.transform = "rotate(-180deg)"; //makes arrow point in right direction

    form.style["margin-left"] = "0vw"; //knocks form into viewport
    form.style.transition = "1s ease-out"; //time it takes for form to appear
    form.style.opacity = "100%"; //makes form visible

    formButton.style.transform = ""; //resets CSS for formButton
}

function hideForm(){
    formButton.style.transform = "rotate(180deg) scale(0.8)"; //makes arrow point in right direction

    form.style["margin-left"] = "-100vw"; //knocks form out of viewport
    form.style.transition = "1s ease-out"; //time it takes for form to disappear
    form.style.opacity = "0%"; //makes form invisible

    bigButton.style["margin-right"] = "0vw"; //knocks bigButton into viewport
    bigButton.style.transition = "1s ease-out"; //time it takes for bigButton to appear
    bigButton.style.opacity = "100%"; //makes bigButton visible
    bigButton.style.transform = ""; //resets CSS for bigButton
}


    //FORM VALIDATION
//locate form fields and when the submit button is pressed run validate function:
const formFields = document.querySelector("form");
formFields.addEventListener("submit", validate);

//message to show if input from user is wrong:
const wrong = document.querySelector("#wrong");

function validate(f){

    //placement of @ in email address:
    const atpos = f.target.mail.value.indexOf("@");

    //placement of . in email address:
    const dotpos = f.target.mail.value.lastIndexOf(".");

   if(f.target.mail.value === ""){
        wrong.textContent = ".please write a valid email address{}";
        event.preventDefault();
        f.target.mail.focus();
        return false;

    //checks whether there is @ and whether it's the very first character:
    }else if(atpos <=0){
        wrong.textContent = ".please write a valid email address{}";
        event.preventDefault();
        f.target.mail.focus();
        return false;

    //checks whether there is a character between @ and the last .:
    }else if(dotpos < atpos + 2){
        wrong.textContent = ".please write a valid email address{}";
        event.preventDefault();
        f.target.mail.focus();
        return false;

    //checks whether there is less than two characters after the last .:
    }else if(f.target.mail.value.length <= dotpos + 2){
        wrong.textContent = ".please write a valid email address{}";
        event.preventDefault();
        f.target.mail.focus();
        return false;

    //checks whether there is any input in the name field:
    }else if(f.target.name.value === ""){
        wrong.textContent = ".please write your name{}";
        event.preventDefault();
        f.target.name.focus();
        return false;

    //checks whether there is any input in the message field:
    }else if(f.target.message.value === ""){
        wrong.textContent = ".please write your message{}";
        event.preventDefault();
        f.target.message.focus();
        return false;

    }

    return true;
};


    //PROJECT LINKS IN ORANGE WHOOSH OUT OF FRAME
/*
const projectLink = document.querySelectorAll("#orange li a");
for (let i=0; i<projectLink.length; i++){
    projectLink[i].addEventListener("click", whoosh);
}

function whoosh(){
    
}
*/