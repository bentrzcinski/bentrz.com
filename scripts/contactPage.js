/*let initialX = "50%";
let initialY = "50%";

function closePopup() {
  const popup = document.getElementById("customPopup");
  const overlay = document.getElementById("overlay");
  popup.style.display = "none";
  overlay.style.display = "none";
  popup.style.left = initialX;
  popup.style.top = initialY;
}

function openPopup() {
  const popup = document.getElementById("customPopup");
  const overlay = document.getElementById("overlay");
  const docHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );
  const docWidth = document.documentElement.clientWidth;

  popup.style.display = "block";
  overlay.style.display = "block";

  // Calculate center position in relation to the entire document
  const popupWidth = popup.offsetWidth;
  const popupHeight = popup.offsetHeight;
  const centerX = (docWidth - popupWidth) / 2;
  const centerY = (docHeight - popupHeight) / 2 + window.pageYOffset;

  popup.style.left = centerX + "px";
  popup.style.top = centerY + "px";
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission
  const popup = document.getElementById("customPopup");
  popup.style.display = "block";
  popup.style.animation = "fadeEffect 0.5s"; // Apply fade-in animation

  // Clear form fields after submission
  setTimeout(() => {
    document.getElementById("contactForm").reset();
  });
});

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

const popup = document.getElementById("customPopup");

popup.addEventListener("mousedown", function(event) {
  isDragging = true;
  offsetX = event.clientX - popup.getBoundingClientRect().left;
  offsetY = event.clientY - popup.getBoundingClientRect().top;
});

document.addEventListener("mousemove", function(event) {
  if (isDragging) {
    event.preventDefault();
    popup.style.left = event.clientX - offsetX + "px";
    popup.style.top = event.clientY - offsetY + "px";
  }
});

document.addEventListener("mouseup", function() {
  isDragging = false;
});*/