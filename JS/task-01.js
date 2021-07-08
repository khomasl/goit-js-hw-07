// Підраховує к-ть елементів li.item в списку
// const arrItems = document.querySelector('#categories').children;
// console.log(`В списке ${[...arrItems].length} категории.`);
//2-й спосіб
const arrItems = document.querySelectorAll('li.item');
console.log(`В списке ${[...arrItems].length} категории.`);

// Виводить контент всіх заголовків h2 в списку
const arrH2 = [...arrItems].map(item => item.querySelectorAll('h2'));
const arrH = document.querySelectorAll('h2');
const text = [...arrH].map(item => item.textContent);
console.log('arrH :>> ',[...arrH]);
console.log('text :>> ', text);
console.log('arrH2 :>> ', arrH2);
const getText = items => console.log();