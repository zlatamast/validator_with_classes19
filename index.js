// Реализуйте класс `Валидатор`, который будет проверять строки. К примеру, у него будет метод `isEmail`, который параметром принимает строку и проверяет, является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false. Кроме того, класс будет иметь следующие методы: метод `isDomain` для проверки домена, метод `isDate` для проверки даты и метод `isPhone` для проверки телефона

// Сделайте 2 версии этого класса - стандартную и статическую.

let email = document.querySelector('#email');
let domain = document.querySelector('#domain');
let date = document.querySelector('#date');
let phone = document.querySelector('phone');

class ValidatorStandard {

    isEmail(email) {
        let emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (emailReg.test(email) == false) {
            console.log(false)
        } else {
            console.log(true)
        }
    }
}

var validator = new ValidatorStandard();

function getStandardData() {
    console.log(validator.isEmail(email.value));
}

let buttonStandard = document.querySelector('#buttonStandard');
buttonStandard.addEventListener('click', getStandardData);


// _____________ Статический метод _______________

class ValidatorStatic {

    static isEmail(email) {
        let emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (emailReg.test(email) == false) {
            console.log(false)
        } else {
            console.log(true)
        }
    }
}

// ПОЧЕМУ НЕ ИЗ ЭКЗЕМПЛЯРА А ДЕЛАЕМ НА КЛАССЕ?

function getStaticData() {
    console.log(ValidatorStatic.isEmail(email.value));
}

let buttonStatic = document.querySelector('#buttonStatic');
buttonStatic.addEventListener('click', getStaticData);