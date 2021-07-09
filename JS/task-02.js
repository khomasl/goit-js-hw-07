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
ingredients.forEach(elem => {
  const li = document.createElement('li');
  li.textContent = elem;
  const ul = document.querySelector('#ingredients');
  ul.appendChild(li);
})