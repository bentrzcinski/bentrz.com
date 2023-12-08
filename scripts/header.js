function openPage(pageName, elmnt) {
  // Hide all elements with class="headerPage" by default */
  var i, headerPage, tablinks;
  headerPage = document.getElementsByClassName('headerPage');
  for (i = 0; i < headerPage.length; i++) {
    headerPage[i].style.display = "none";
  }

  // Returning all header text to default colour
  headerText = document.getElementsByClassName('headerText');
  for (i = 0; i < headerText.length; i++) {
    headerText[i].style.color = 'rgb(19, 51, 55)';
  }

  // Hide the landing page
  document.getElementById('landingPage').style.display = "none";

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.color = 'white';
}