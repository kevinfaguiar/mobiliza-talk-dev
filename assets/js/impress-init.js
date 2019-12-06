var rootElement = document.getElementById("impress");
rootElement.addEventListener("impress:init", function () {
  document.getElementsByTagName('html')[0].style.visibility = 'visible';
  document.getElementById('historia').style.backgroundImage = 'none';
  document.getElementById('historia').style.backgroundColor = 'black';
});

var rootElement = document.getElementById("impress");
rootElement.addEventListener("impress:stepenter", function (event) {
  var currentStep = event.target.id;

  switch (currentStep) {
    case 'historia':
      document.getElementsByTagName('body')[0].style.backgroundColor = 'black';
      document.getElementsByClassName('star-wars')[0].style.visibility = 'visible';
      break;

    default:
      break;
  }
});

rootElement.addEventListener("impress:stepleave", function (event) {
  var currentStep = event.target.id;

  switch (currentStep) {
    case 'historia':
      document.getElementsByTagName('body')[0].style.backgroundColor = '#f2eff6';
      document.getElementsByClassName('star-wars')[0].style.visibility = 'hidden';
      break;

    default:
      break;
  }
});

var steps = document.getElementsByClassName("step"),
  len = steps !== null ? steps.length : 0;

var logoImg = document.createElement("img");
logoImg.className = "logo-img";
logoImg.src = './assets/logo/logo.png';

for (var i = 0; i < len; i++) {
  var clonedNode = logoImg.cloneNode(true);

  // IF IS historia
  if (i === 1) {
    clonedNode.style.display = 'none';
  }

  steps[i].appendChild(clonedNode);
}

var titleImg = document.createElement("img");
titleImg.className = "title";
titleImg.src = './assets/presentation/title.png';

for (var i = 0; i < len; i++) {
  var clonedNode = titleImg.cloneNode(true);
  steps[i].appendChild(clonedNode);
}



impress().init();
