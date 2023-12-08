// playing the animations when the about me tab is selected
function aboutStart() {

  const sr = ScrollReveal ({
    distance: '0px',
    duration: 800,
    delay: 0,
    reset: false
  });

  sr.reveal('#aboutBioSection', {delay: 0});
}

// Selecting the Intro section by default
window.onload = function() {initialStyling()};

function initialStyling() {
  document.getElementById('aboutScrollControllerIntroText').style.opacity = 1;
  document.getElementById('aboutScrollControllerIntroText').style.textDecoration = 'underline';
}

// When the user scrolls into any of the sections, make sure the appropriate button is lit up
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop < document.body.scrollHeight/5) {
    document.getElementById('aboutScrollControllerIntroText').style.opacity = 1;
    document.getElementById('aboutScrollControllerIntroText').style.textDecoration = 'underline';
  } else {
    document.getElementById('aboutScrollControllerIntroText').style.opacity = 0.3;
    document.getElementById('aboutScrollControllerIntroText').style.textDecoration = 'none';
  }
  if(document.documentElement.scrollTop > document.body.scrollHeight/5 && document.documentElement.scrollTop < document.body.scrollHeight/2) {
    document.getElementById('aboutScrollControllerSkillsText').style.opacity = 1;
    document.getElementById('aboutScrollControllerSkillsText').style.textDecoration = 'underline';
  } else {
    document.getElementById('aboutScrollControllerSkillsText').style.opacity = 0.3;
    document.getElementById('aboutScrollControllerSkillsText').style.textDecoration = 'none';
  }
  if(document.documentElement.scrollTop > document.body.scrollHeight/2) {
    document.getElementById('aboutScrollControllerExperienceText').style.opacity = 1;
    document.getElementById('aboutScrollControllerExperienceText').style.textDecoration = 'underline';
  } else {
    document.getElementById('aboutScrollControllerExperienceText').style.opacity = 0.3;
    document.getElementById('aboutScrollControllerExperienceText').style.textDecoration = 'none';
  }
}

// When the user clicks on one of the buttons, scroll to the appropriate section
function introScroll() {
  document.documentElement.scroll({
    top: 0,
    behavior: 'smooth'
  });
}

function skillsScroll() {
  const skillsSection = document.getElementById('aboutSkillsSection');
  const scrollPosition = skillsSection.offsetTop - 100;
  document.documentElement.scroll({
    top: scrollPosition,
    behavior: 'smooth'
  });
}

function experienceScroll() {
  const experienceSection = document.getElementById('aboutExperienceSection');
  const scrollPosition = experienceSection.offsetTop - 100;
  document.documentElement.scroll({
    top: scrollPosition,
    behavior: 'smooth'
  });
}

// Control for the different tabs in the Skills section
var skillsTabLinks = document.getElementsByClassName("aboutSkillsSubTitles");
var experienceTabLinks = document.getElementsByClassName("aboutExperienceSubTitles");
var skillsContents = document.getElementsByClassName("aboutSkillsTab");
var experienceContents = document.getElementsByClassName("aboutExperienceTab");

function openSkillsTab(tabName) {
  for (skillsTabLink of skillsTabLinks){
    skillsTabLink.classList.remove("activeTab");
  }
  for (skillsContent of skillsContents){
    skillsContent.classList.remove("activeTab");
  }
  
  event.currentTarget.classList.add("activeTab");
  var selectedTab = document.getElementById(tabName);
  selectedTab.classList.add("activeTab");
}

function openExperienceTab(tabName) {
  for (experienceTabLink of experienceTabLinks){
    experienceTabLink.classList.remove("activeTab");
  }
  for (experienceContent of experienceContents){
    experienceContent.classList.remove("activeTab");
  }
  
  event.currentTarget.classList.add("activeTab");
  var selectedTab = document.getElementById(tabName);
  selectedTab.classList.add("activeTab");
}