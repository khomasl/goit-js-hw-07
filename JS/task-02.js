const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
//  Для каждого элемента массива инградиентов создает отдельный li
//  после чего вставит все li за одну операцию в список ul.ingredients

const ul = document.querySelector('#ingredients');
const markup = ingredients.reduce(((str, item) => str + `<li>${item}</li>`),'');
ul.insertAdjacentHTML('afterbegin', markup);