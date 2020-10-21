//start
// Function expression to select elements
const selectElement = (s) => document.querySelector(s);

selectElement('.open').addEventListener('click', function () {
    selectElement('.nav-list').classList.add('active');
})

//Close the menu on click
selectElement('.close').addEventListener('click', function () {
    selectElement('.nav-list').classList.remove('active');
})
  