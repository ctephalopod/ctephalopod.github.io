// Country pop-up function //
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

// Tooltip hover function //
   function addTooltipToPath(pathId) {
      const path = document.getElementById(pathId);
      const title = path.getAttribute('title');
   
      path.addEventListener('mouseenter', function(event) {
      const tooltip = document.getElementById(`${pathId}-tooltip`);
      tooltip.classList.add('visible');
      });
   
      path.addEventListener('mousemove', function(event) {
      const tooltip = document.getElementById(`${pathId}-tooltip`);
      tooltip.style.top = event.pageY + 'px';
      tooltip.style.left = event.pageX + 'px';
      });
   
      path.addEventListener('mouseleave', function(event) {
      const tooltip = document.getElementById(`${pathId}-tooltip`);
      tooltip.classList.remove('visible');
      });
   }
   // Add tooltips to paths
      addTooltipToPath('Uruguay');
      addTooltipToPath('Brazil');
      addTooltipToPath('Falkland');
      addTooltipToPath('Argentina');
      addTooltipToPath('Chile');
      addTooltipToPath('Australia');
      addTooltipToPath('NewZealand');
      addTooltipToPath('Norway');
      addTooltipToPath('Denmark');
      addTooltipToPath('Sweden');
      addTooltipToPath('Finland');
      addTooltipToPath('Russia');
      addTooltipToPath('Greece');
      addTooltipToPath('Belgium');
      addTooltipToPath('Netherlands');
      addTooltipToPath('Germany');
      addTooltipToPath('Switzerland');
      addTooltipToPath('Austria');
      addTooltipToPath('Italy');
      addTooltipToPath('France');
      addTooltipToPath('Spain');
      addTooltipToPath('UnitedKingdom');
      addTooltipToPath('Liechtenstein');
      addTooltipToPath('Monaco');
      addTooltipToPath('Hope');
      addTooltipToPath('Egypt');
      addTooltipToPath('HongKong');
      addTooltipToPath('China');
      addTooltipToPath('Macau');
      addTooltipToPath('Japan');
      addTooltipToPath('Taiwan');
      addTooltipToPath('Israel');
      addTooltipToPath('Turkey');
      addTooltipToPath('Idaho');
      addTooltipToPath('Montana');
      addTooltipToPath('Wyoming');
      addTooltipToPath('NorthDakota');
      addTooltipToPath('SouthDakota');
      addTooltipToPath('Minnesota');
      addTooltipToPath('Nebraska');
      addTooltipToPath('Kansas');
      addTooltipToPath('Missouri');
      addTooltipToPath('Florida');
      addTooltipToPath('Alaska');
      addTooltipToPath('Hawaii');
      addTooltipToPath('VirginIslands');
      addTooltipToPath('PuertoRico');
      addTooltipToPath('DominicanRepublic');
      addTooltipToPath('Canada');
   