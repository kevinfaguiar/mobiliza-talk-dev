function smoothFadeIn(elementId, textContent) {
  var text = document.getElementById(elementId);
  text.style.display = 'none';
  text.innerText = textContent;
  var newDom = '';
  var animationDelay = 6;

  for (let i = 0; i < text.innerText.length; i++) {
    newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i]) + '</span>';
  }

  text.innerHTML = newDom;
  var length = text.children.length;

  for (let i = 0; i < length; i++) {
    text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
  }
  text.style.display = 'inline-block';
}

var rootElement = document.getElementById("impress");
rootElement.addEventListener("impress:init", function () {
  document.getElementsByTagName('html')[0].style.visibility = 'visible';
  document.getElementById('historia').style.backgroundImage = 'none';
  document.getElementById('historia').style.backgroundColor = 'black';
});

var starWarsIntro = document.createElement("div");
starWarsIntro.className = "star-wars-intro";
starWarsIntro.textContent = "A long time ago in a galaxy far, far away..."

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

var currentStep = null;

rootElement.addEventListener("impress:stepenter", function (event) {
  currentStep = event.target.id;
  var historiaInnerDiv = document.getElementById('historia-inner-div');
  if (historiaInnerDiv) historiaInnerDiv.remove();

  switch (currentStep) {
    case 'intro':
      document.getElementsByTagName('body')[0].style.backgroundColor = 'rgba(86, 43, 129)';
      document.getElementById('intro').style.backgroundImage
        = 'linear-gradient(rgba(86, 43, 129, 0.73), rgba(86, 43, 129, 0.73)), url(./assets/presentation/bg.png)';
      break;
    case 'historia':
      historiaInnerDiv = document.createElement('div');
      historiaInnerDiv.id = 'historia-inner-div';
      document.getElementById('historia').appendChild(historiaInnerDiv);
      document.getElementsByTagName('body')[0].style.backgroundColor = 'black';
      document.getElementById('historia-inner-div').appendChild(starWarsIntro);
      setTimeout(() => {
        if (document.getElementById('historia-inner-div')) {
          starWarsIntro.remove();
          document.getElementById('historia-inner-div').appendChild(starWarsNode);
        }
      }, 2000);
      break;
    case 'ending':
      smoothFadeIn('steve-jobs-quote-line-1', '"Todo mundo deveria aprender a programar');
      smoothFadeIn('steve-jobs-quote-line-2', 'porque isso te ensina a pensar."');
      smoothFadeIn('steve-jobs-name', 'Steve Jobs');

    default:
      break;
  }
});

rootElement.addEventListener("impress:stepleave", function (event) {
  currentStep = event.target.id;

  switch (currentStep) {
    case 'historia':
      document.getElementsByTagName('body')[0].style.backgroundColor = '#f2eff6';
      document.getElementById('historia-inner-div').remove();
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

  // IF IS intro || historia
  if (i === 0 || i === 1) {
    clonedNode.style.display = 'none';
  }

  steps[i].appendChild(clonedNode);
}

impress().init();
