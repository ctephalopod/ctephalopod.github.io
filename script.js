const svg = document.getElementById('Layer_2');
const paths = svg.querySelectorAll('path');
const entryPopups = document.querySelectorAll('.entry-popup');
const entryClose = document.querySelector(".entry-close");

paths.forEach((path) => {
  path.addEventListener('click', function() {
    const popupId = this.getAttribute('data-popup');
    const popup = document.getElementById(popupId);
    entryPopups.forEach((entryPopup) => {
      if (entryPopup === popup) {
        entryPopup.classList.remove('hidden');
      } else {
        entryPopup.classList.add('hidden');
      }
    });
  });
});

entryClose.addEventListener("click", function() {
  entryPopups.forEach((entryPopup) => {
    entryPopup.classList.add("hidden");
  });
});