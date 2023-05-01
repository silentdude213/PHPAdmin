'use strict';

class Validation {

    successful = false;

    #errorStatuses = {
        1: ["Заполните все поля!", "error-required-label", "Обязательное поле."],
        2: ["Неверный логин или пароль.", "error-auth-label"],
        3: ["Недопустимые символы", "error-symbol-label"],
        4: ["Превышена максимальная длина.", "error-maxlength-label", "Максимальная длина"]
    };
    #form;
    #inputs;

    constructor(form){
        this.#form = form;
        this.#inputs = this.#form.querySelectorAll('input');
    }

    validation(){
        this.#inputs.forEach(input => {
            if (input.dataset.required && !input.value){
                this.#errorMessage(this.#errorStatuses[1], input)
            }
            else if (input.dataset.maxlength < input.value){
                this.#errorMessage(this.#errorStatuses[4], input);
            }
        });
    }

    #errorMessage(error, element){
        
        // Отображение контейнера с ошибками 
        const error_box = this.#form.querySelector('.error-box');
        error_box.style.display = "flex";

        // Сообщение под инпутом
        const error_message = document.createElement('p');
        error_message.classList.add('error-message');

        // Создание элемента с ошибкой.
        const error_label = document.createElement('div');
        error_label.classList.add('error-label');

        // Если элемента с таким классом нет, то добавляем
        if (!this.#form.querySelector(`.${error[1]}`)){
            error_label.classList.add(error[1]);
            error_label.textContent = error[0];
            error_box.append(error_label);
        }
        if (!element.parentNode.querySelector('.error-message')){
            error_message.textContent = error[2];
            element.parentNode.append(error_message);
            element.style.border = "1px solid red";
        }
        console.log(error);
    }

    #clearError(errorType){
        // if(this.#form.querySelector('.error-label')){{
        //     switch(errorType){
        //         case 'message':
        //             this.#form.querySelector('.error-message').remove();
        //         break;
        //     }
        // }
        //     // this.#form.querySelector('.error-label').remove();
        // }
    }
}

document.querySelectorAll('.form').forEach(thisForm => {
    thisForm.addEventListener('submit', event => {
        event.preventDefault();
        let validation = new Validation(thisForm);   
        validation.validation();
    });
});