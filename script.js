// Prosto Team
document.querySelector('.login').onclick= myClick;
const pass = "lilmuff1";
const user = "228693333";
function myClick() {
  const a = document.querySelector('.us').value;
  const b = document.querySelector('.pass').value;
  if (user === a && pass === b){window.location.replace("page1.html");}
  else {alert("Wrong data");}
}