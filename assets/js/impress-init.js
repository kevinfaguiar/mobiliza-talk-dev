var rootElement = document.getElementById("impress");
rootElement.addEventListener("impress:init", function () {
  document.getElementsByTagName('html')[0].style.visibility = 'visible';
});

impress().init();