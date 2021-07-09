//Задание 8 - дополнительное, выполнять не обязательно
//Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.
//Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.
//Каждый созданный div:
  //Имеет случайный rgb цвет фона
  //Размеры самого первого div - 30px на 30px
  //Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
//Создай функцию destroyBoxes(), которая очищает div#boxes.

const random = number => Math.floor(Math.random() * (number+1));
const rndCol = () => `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

const valueInput = document.querySelector('input');
const renderBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');
const boxesDiv = document.querySelector('#boxes');
   
const createBoxes = (amount) => {
    amount = valueInput.value; 
    let str = '';
    for (let i = 0; i < amount; i += 1){
        const size = 30 + 10 * i;
        str +=  `<div style="height: ${size}px; width: ${size}px; background-color: ${rndCol()}"></div>`
    }
    boxesDiv.innerHTML = str;
}

const destroyBoxes = () => [...boxesDiv.children].forEach(div => div.remove())

renderBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);