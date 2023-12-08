// playing the animations when the portfolio tab is selected
function portfolioStart() {

  const sr = ScrollReveal ({
    distance: '0px',
    duration: 1500,
    delay: 0,
    reset: false
  });

  sr.reveal('#portfolioTabOne', {delay: 0});
  sr.reveal('#portfolioTabTwo', {delay: 200});
  sr.reveal('#portfolioTabThree', {delay: 400});
  sr.reveal('#portfolioTabFour', {delay: 300});
  sr.reveal('#portfolioTabFive', {delay: 500});
  sr.reveal('#portfolioTabSix', {delay: 100});
}