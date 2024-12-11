/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

// Show and hide CH Notification Banner
function chShowHideNotificationBanner() {
  var x = document.getElementById("ch-notification-content"); // Hardcoded div ID is used as reference
  var y = document.getElementById("ch-show-hide-button"); // Hardcoded button (faux link) ID is used as reference
  if (x.style.display === "none") { // If the div is "none" (hidden) ...
    x.style.display = "block"; // ... then show the div ...
    y.innerHTML = "Hide message"; // ... and change button (link) label to 'Hide message'
  } else {
    x.style.display = "none"; // ... else hide the div ...
    y.innerHTML = "Show message"; // ... and change button (link) label to 'Show message'
  }
}
