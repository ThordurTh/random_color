"use strict";

function randomBackground() {
    //Set the background to a random color

    let rgb = randomColor();

    document.querySelector("body").style.backgroundColor = rgbToCSS(rgb);

}

function randomColor() {
    // returns a random rgb color object

    // Generate a random color
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    // Return it in RGB to randomBackground
    return {r,g,b};
}

function rgbToCSS(rgb) {
    // converts a rgb color object into a CSS color string
    // Takes the random color RGB 
    // Return it in a CSS color string to randomBackground
    return `RGB(${rgb.r},${rgb.g},${rgb.b})`;

}