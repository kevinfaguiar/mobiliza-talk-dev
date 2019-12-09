function consoleText(words, id, cb) {
  var colors = ['#562b81'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id);
  target.setAttribute('style', 'color:' + colors[0]);
  target.setAttribute('style', 'font-size: 5rem');
  var interval = window.setInterval(function () {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function () {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        target.setAttribute('style', 'font-size: 5rem')
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function () {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
      cb();
      clearInterval(interval);
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function () {
    if (visible === true) {
      con.className = 'underline-ending hidden'
      visible = false;

    } else {
      con.className = 'underline-ending'
      visible = true;
    }
  }, 400)
}

function smoothFadeIn(elementId, textContent) {
  var text = document.getElementById(elementId);
  text.style.display = 'none';
  text.innerText = textContent;
  var newDom = '';
  var animationDelay = 6;

  for (var i = 0; i < text.innerText.length; i++) {
    newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i]) + '</span>';
  }

  text.innerHTML = newDom;
  var length = text.children.length;

  for (var i = 0; i < length; i++) {
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

var starWarsHtml = `
<div class="crawl">
  <div class="title">
    <p>EPISÓDIO I</p>
    <h1>DESENVOLVIMENTO DE SOFTWARE</h1>
  </div>

  <p>A máquina de Babbage foi provavelmente a máquina precursora do computador moderno. Utilizando ela, Ada, a condessa de Lovelace, 
  descreveu de um artigo procedimentos matemáticos de uma forma lógica visando chegar em um resultado.
  Por conta disso, Ada é até hoje considerada o primeiro programador da história da humanidade.</p>

  <p>A ciência da computação, e consequentemente a programação, só voltaria a ser aprimorada 
  se tornando o que conhecemos hoje durante a Segunda Guerra mundial pelas mãos do cientista Alan Turing.</p>

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
      consoleText(['vamos desenvolver softwares juntos?'], 'console-text-ending', () => {
        setTimeout(() => {
          smoothFadeIn('steve-jobs-quote', '"Todo mundo deveria aprender a programar porque isso te ensina a pensar."');
          setTimeout(() => smoothFadeIn('steve-jobs-name', 'Steve Jobs'), 1000);
        }, 1000);
      });
    default:
      document.getElementsByTagName('body')[0].style.backgroundColor = '#EFECF5';
      break;
  }
});

rootElement.addEventListener("impress:stepleave", function (event) {
  currentStep = event.target.id;

  switch (currentStep) {
    case 'historia':
      document.getElementsByTagName('body')[0].style.backgroundColor = '#EFECF5';
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
