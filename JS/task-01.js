// Підраховує к-ть елементів li.item в списку
// const arrItems = document.querySelector('#categories').children;
// console.log(`В списке ${[...arrItems].length} категории.`);
//2-й спосіб
const arrCategories = document.querySelectorAll('li.item');
console.log(`В списке ${arrCategories.length} категории.`);

// Виводить контент всіх заголовків h2 в списку
// і к-ть елементів списку кожної з категорій
arrCategories.forEach(elem => 
    console.log(` Категория: ${elem.firstElementChild.textContent} \n Количество элементов: ${elem.lastElementChild.childElementCount}`));
