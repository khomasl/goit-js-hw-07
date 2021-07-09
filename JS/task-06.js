//Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
//Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
//Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
//Для добавления стилей, используй CSS-классы valid и invalid.

const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener("focusout", () => 
   validationInput.value.length === Number(validationInput.getAttribute('data-length')) ? 
    validationInput.setAttribute('class', "valid") : 
    validationInput.setAttribute('class', "invalid")
)