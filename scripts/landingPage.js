// scroll reveal timings for header and sub-header
const sr = ScrollReveal ({
  distance: '5px',
  duration: 2600,
  delay: 450,
  reset: true
});

sr.reveal('#landingPageHeaderBenTrzText',{delay:50, origin:'top'});
sr.reveal('#landingPageHeaderCinskiText',{distance:'25px', duration: 3600, delay:100, origin:'right'});
sr.reveal('#landingPageSubHeaderTextOne',{delay:50, origin:'top'});
sr.reveal('#landingPageSubHeaderTextTwo',{distance:'25px', duration: 3600, delay:100, origin:'right'});

// randomly picking something for me to be terrible at
let terribleList = ["scaffolder", "juggler", "theraminist", "slam poet", "train conductor", "palm reader", "underwater welder", " harmonica player", "puppeteer", "yodeler", "interpretive dance choreographer", "hide-and-seeker", "breakdancer", "fire-eater" , "ventriloquist", "contortionist", "acupuncturist"];

let straplineOne = 'terrible ';
let straplineTwo = terribleList[(Math.floor(Math.random() * terribleList.length))];
let strapline = straplineOne.concat(straplineTwo);
    
document.getElementById('landingPageSubHeaderTextTwo').textContent = strapline;