var countDownDate = new Date("Jan 1, 2025 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Format numbers to always show two digits
  var formattedHours = String(hours).padStart(2, '0');
  var formattedMinutes = String(minutes).padStart(2, '0');
  var formattedSeconds = String(seconds).padStart(2, '0');
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + " días " + formattedHours + ":"
  + formattedMinutes + ":" + formattedSeconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Feliz año nuevo";
  }
}, 1000);
