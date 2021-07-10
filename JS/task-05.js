//Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. 
//Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const changeText = () => 
nameOutput.textContent = nameInput.value.trim() === '' ? 'незнакомец' : nameInput.value;

nameInput.addEventListener("input", changeText);
