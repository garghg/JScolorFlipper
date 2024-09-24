// Get the <body> element from the document , [0] is the first element, but body only has one anyways
const body = document.getElementsByTagName("body")[0];

// Function to set the background color of the body to a given color name from html file depending on button click
function setColor(name) {
    body.style.backgroundColor = name;
}

// Function to generate and apply a random RGB color as the background
function randomColor() {
    // Generate a random integer between 0 and 255 for red, green, and blue components
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    // Create a string representing the RGB color
    const color = `rgb(${red}, ${green}, ${blue})`;
    body.style.backgroundColor = color; // Apply the random generated rgb color to the body background
}
