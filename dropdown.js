// Get the select element
const select = document.getElementById('country-dropdown');

// Get the paths and create an array of option values and titles
const countryPaths = document.querySelectorAll('path.ready');
const optionValues = [];
countryPaths.forEach((path) => {
  const title = path.getAttribute('title');
  const value = path.getAttribute('data-popup');
  const option = new Option(title, value);
  optionValues.push(option);
});

// Sort the options alphabetically by title
const sortedOptions = optionValues.sort((a, b) => a.text.localeCompare(b.text));

// Insert the "Select" option at the beginning
// sortedOptions.unshift(new Option('Select', ''));

// Add the options to the select element
// select.append(...sortedOptions);

console.log('Dropdown script running!');

// const countryDropdown = document.getElementById("country-dropdown");
// const countryOptions = countryDropdown.querySelectorAll(".dropdown-option");

// countryOptions.forEach((option) => {
//   option.addEventListener("click", function () {
//     const countryTitle = this.getAttribute("title");
//     console.log(`Selected country: ${countryTitle}`);
//   });
// });

