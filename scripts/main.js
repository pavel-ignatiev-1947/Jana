// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/Jana_2022.jpg') {
    myImage.setAttribute ('src','images/Jana_2022_2.jpg');
  } else {
    myImage.setAttribute ('src','images/Jana_2022.jpg');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Введите ваше имя.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Здравствуйте, ' + myName +localStorage.length;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Здравствуйте, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}