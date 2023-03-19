const svg = document.getElementById('Layer_2');
const paths = svg.querySelectorAll('path');
const entryPopups = document.querySelectorAll('.entry-popup');
const entryCloses = document.querySelectorAll(".entry-close");

paths.forEach((path) => {
  path.addEventListener('click', function() {
    const popupId = this.getAttribute('data-popup');
    const popup = document.getElementById(popupId);
    entryPopups.forEach((entryPopup) => {
      if (entryPopup === popup) {
        entryPopup.classList.add('visible');
      } else {
        entryPopup.classList.remove('visible');
      }
    });
  });
});

entryCloses.forEach((entryClose) => {
  entryClose.addEventListener("click", function() {
    const entryPopup = this.closest('.entry-popup');
    entryPopup.classList.remove("visible");
  });
});
