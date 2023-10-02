const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const biscoito = document.querySelector('#imgBiscoito1');
const btn_refresh = document.querySelector('#btn_refresh')
let xAttemp = -1;

biscoito.addEventListener('click', ()=>{
  xAttemp = NumberRandon();
  screen2.querySelector('h2').
  innerText = message(xAttemp);
  toggleScreen();
});

btn_refresh.addEventListener('click', ()=>{
  toggleScreen();
})

function toggleScreen(){
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');
}

function resetApp(){
  toggleScreen();
  xAttemp = 1;
  randonNumber= NumberRandon();
}

function NumberRandon(){
  return Math.round(Math.random() * 10);
}

function message(xAttemp){
  switch(xAttemp){
    case 0:
      return "Apaixone-se pelo processo de se tornar a sua melhor versão.";
    case 1:
      return "Seu crescimento começa aonde onde a sua zona de conforto termina.";
    case 2:
      return "Motivação é o que te faz começar, habito é o que te faz continuar.";
    case 3:
      return "O corpo alcança o que a mente acredita.";
    case 4:
      return "Sucesso é a soma de pequenos esforços.";
    case 5:
      return "O que não te desafia, não te faz mudar.";
    case 6:
      return "Se você vencer a si mesmo, você não irá perder para mais ninguém.";
    case 7:
      return "Sem o suor, não haverá conquistas.";
    case 8:
      return "Todos querem vencer, mas poucos querem ter o trabalho de conseguir.";
    case 9:
      return "O único treino que dá certo é aquele com esforço, determinação e paciencia";
    case 10:
      return "Não deixe que a preguiça seja mais forte que sua vontade de mudar";
  }
}