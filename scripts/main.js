let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName){
	  setUserName();
  } else {
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
}
myButton.onclick = function() {
  setUserName();
}

document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/my-test-image.jpeg') {
      myImage.setAttribute('src','images/my-test-image-2.png');
    } else {
      myImage.setAttribute('src','images/my-test-image.jpeg');
    }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

