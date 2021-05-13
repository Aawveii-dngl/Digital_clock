function setDay() {
  var d = new Date();
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  document.getElementById("display1").innerHTML =
    days[d.getDay()] +
    "," +
    d.getFullYear() +
    "/" +
    d.getMonth() +
    "/" +
    d.getDate();
}
setInterval(setDay, 100);

function setTime() {
  var e = new Date();
  let hour = e.getHours();
  let mins = e.getMinutes();
  let sec = e.getSeconds();
  let AM_PM = "AM";
  if (hour > 12) {
    AM_PM = "PM";
  } else {
    AM_PM = "AM";
  }

  document.getElementById("display2").innerHTML =
    hour + ":" + mins + ":" + sec + AM_PM;
}
setInterval(setTime, 100);
