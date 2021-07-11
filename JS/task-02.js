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

const arrLi = ingredients.map((elem) => {
  const li = document.createElement('li');
  li.textContent = elem;
  return li;
})

ul.append(arrLi[0], arrLi[1], arrLi[2], arrLi[3], arrLi[4], arrLi[5]);
