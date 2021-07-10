// Підраховує к-ть елементів li.item в списку
// const arrItems = document.querySelector('#categories').children;
// console.log(`В списке ${[...arrItems].length} категории.`);
//2-й спосіб
const arrCategories = document.querySelectorAll('li.item');
console.log(`В списке ${arrCategories.length} категории.`);

// Виводить контент всіх заголовків h2 в списку
// і к-ть елементів списку кожної з категорій
const arrChildren = [...arrCategories].map(elem => elem.children);
arrChildren.forEach(elem => 
    console.log(` Категория: ${elem[0].textContent} \n Количество элементов: ${elem[1].childElementCount}`));
