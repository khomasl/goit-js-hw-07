// Задача. Фильтрация массива чисел
// Задание
// Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Пиши код ниже этой строки
  
//     for (let i = 0; i < numbers.length; i += 1) {
//       if (numbers[i] > value) {
//         filteredNumbers.push(numbers[i]);
//       }
//     }
  
//     // Пиши код выше этой строки
//     return filteredNumbers;
//   }

function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Пиши код ниже этой строки
  
    // for (let i = 0; i < numbers.length; i += 1) {
    //   if (numbers[i] > value) {
    //     filteredNumbers.push(numbers[i]);
    //   }
    // }
    numbers.forEach(element => {
        if (element > value) {
          filteredNumbers.push(element)
        }
    });

    // filteredNumbers = numbers.filter(element => {
    //     return element > value
    // });
    
    // Пиши код выше этой строки
    return filteredNumbers;
  }

  console.log(filterArray([1, 2, 3, 4, 5], 3));