// список или же множество
const aswersArr = [
  'Да',
  'Нет',
  'Спроси меня завтра',
  'Скорее да, чем нет'
];

const form = document.getElementById('form');
const textWrap = document.getElementById('answer-wrap');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  gsap.to(textWrap, {opacity: 0, duration: 1});
  const input = document.querySelector('.input');
  if (input.value.trim() == '') {
    return
  }
  textWrap.innerHTML = '';
  const aswer = Math.floor(Math.random() * aswersArr.length);
  textWrap.textContent = aswersArr[aswer];
  input.value = '';
  gsap.to(textWrap, {opacity: 1, duration: 2});
})




const M1 = TweenMax.to('.character', 1,{repeat:-1,backgroundPosition: "-2400px",ease:SteppedEase.config(16)});

function play(){ M1.play(); };

function pause(){ M1.pause(); };

function timeScale(X){
  TweenLite.to([M1],1,{timeScale:X});
};


const charGo = document.getElementById('char-go');
const charStop = document.getElementById('char-stop');
const char1 = document.getElementById('speed-1');
const char4 = document.getElementById('speed-4');
const char10 = document.getElementById('speed-10');


charGo.addEventListener('click', () => {
  play()
})

charStop.addEventListener('click', () => {
  pause()
})

char1.addEventListener('click', () => {
  timeScale(1)
})

char4.addEventListener('click', () => {
  timeScale(4)
})

char10.addEventListener('click', () => {
  timeScale(10)
})

const openBtn = document.getElementById('open')
const modal = document.getElementById('modal')
openBtn.addEventListener('click', () => {
  modal.classList.remove('disabled')
})


const closeBtn = document.getElementById('close')
closeBtn.addEventListener('click', () => {
  modal.classList.add('disabled')
})
