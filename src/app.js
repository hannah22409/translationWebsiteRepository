//this not done yet function for the AGENCY NAME on index html
function notDone() {
  alert("I'll change it when I have one");
}
let almost = document.querySelector(".notDone");
almost.addEventListener("click", notDone);

//this not done yet function for the SAMPLES on samples page
function notDoneSample() {
  alert("I'll add the samples when I have them");
}
let notDoneSamplee = document.querySelector(".notDoneSample");
notDoneSamplee.addEventListener("click", notDoneSample);

//this not done yet function for the LOGO on all 4 pages
function notDoneLogo() {
  alert("I'll change it to my logo when I make one");
}
let notDoneLogoo = document.querySelector(".notDoneLogo");
notDoneLogoo.addEventListener("click", notDoneLogo);

//this not done yet function for opening classmates' resource html page
function passwordResources() {
  let passwordResponse = prompt("What is the password?");

  if (passwordResponse === "gracias") {
    alert("open page");
  } else {
    alert("Sorry, these resources are restricted to authorized personnel.");
  }
}
let questionButton = document.querySelector("#buttonOne");
questionButton.addEventListener("click", passwordResources);
