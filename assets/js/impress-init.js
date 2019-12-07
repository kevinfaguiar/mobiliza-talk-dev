var rootElement = document.getElementById("impress");
rootElement.addEventListener("impress:init", function () {
  document.getElementsByTagName('html')[0].style.visibility = 'visible';
  document.getElementById('historia').style.backgroundImage = 'none';
  document.getElementById('historia').style.backgroundColor = 'black';
});

var starWarsNode = document.createElement("section");
starWarsNode.className = "step-content star-wars";

const starWarsHtml = `
<div class="crawl">
  <div class="title">
    <p>EPISÓDIO I</p>
    <h1>O QUE É PROGRAMAÇÃO</h1>
  </div>

  <p>Há muito tempo atrás uma civilização descobria o poder da computação através dele, o pai da computação: Alan
    Turing.</p>

  <p>Ele era franzino, tímido e meio excêntrico. Nunca empunhou uma arma, mas foi um dos personagens mais
    importantes da Segunda Guerra. Atrás de uma escrivaninha, Alan Turing, considerado o pai da computação,
    encontrou a chave para decifrar os códigos usados em mensagens nazistas — e, graças a seu trabalho, os aliados
    desvendaram cada passo dado pelos inimigos, onde encontrar seus submarinos e até como deveria ser a reação
    alemã durante o Dia D.</p>

  <p>A comemoração tem gosto amargo. Turing era homossexual, condição considerada criminosa na Grã-Bretanha até
    1967. Condenado, recebeu injeções de hormônios femininos, o que se conhece como castração química. Tinha 41
    anos em 7 de junho de 1954, quando, transtornado com as alterações em seu corpo e pela realidade em que vivia,
    deu cabo da vida comendo uma maçã envenenada, tal como Branca de Neve, de quem era fã.</p>

  <p>Como é possível que tanta gente nunca tenha ouvido falar de Alan Turing? Uma resposta: o trabalho que o
    tornou famoso era tão secreto que, por décadas, nem mesmo os familiares dos envolvidos no projeto sabiam o que
    eles faziam. Outra: ele morreu cedo. A verdade sobre o cientista começou a vir à luz em 1983 com o lançamento
    de Alan Turing: The Enigma, de Andrew Hodges. A obra inspirou o filme O Jogo da Imitação, lançado em 2015.</p>

  <p>"Ele estava lá, no começo da computação, da inteligência artificial e fez um trabalho importantíssimo na
    Segunda Guerra", diz John Graham Cummings, especialista em computadores, responsável por um abaixo-assinado
    que resultou no pedido oficial de perdão do primeiro-ministro Gordon Brown, da Grã-Bretanha, em 2009. Brown
    reconheceu a importância do trabalho de Turing durante a guerra e definiu o tratamento a que ele foi submetido
    de "terrível e desumano".</p>
</div>`

starWarsNode.innerHTML = starWarsHtml;

rootElement.addEventListener("impress:stepenter", function (event) {
  var currentStep = event.target.id;

  switch (currentStep) {
    case 'historia':
      document.getElementsByTagName('body')[0].style.backgroundColor = 'black';
      document.getElementById('historia').appendChild(starWarsNode);
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
      document.getElementsByClassName('star-wars')[0].remove();
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
