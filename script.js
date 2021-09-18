// Get Clock Elemnts from DOM
const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const dayPeriod = document.querySelector(".day-period");

//CLOCK
function time() {
  // Get current date
  const now = new Date();
  // Calculate current time HH/MM/SS AM/PM
  const currentTime = Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).formatToParts(now);
  
  // PRINT calculated time on the display
  hour.textContent = currentTime[0].value;
  min.textContent = currentTime[2].value;
  sec.textContent = currentTime[4].value;
  dayPeriod.textContent = currentTime[6].value;
}

setInterval(time, 1000);
