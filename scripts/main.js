
var myImage = document.querySelector('img');

myImage.onclick = function () {
    'use strict';
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/uncertainty_image.jpeg') {
        myImage.setAttribute('src', 'images/doubt_fear.jpeg');
    } else {
        myImage.setAttribute('src', 'images/uncertainty_image.jpeg');
    }
};

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    'use strict';
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome ' + storedName;
}

myButton.onclick = function () {
    'use strict';
    setUserName();
};