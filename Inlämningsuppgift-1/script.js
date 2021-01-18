const form = document.querySelector('#form');
const output = document.querySelector('#output');

const validate = id => {
    const input = document.querySelector('#'+id);
    const error = document.querySelector('#'+id+'-error');

    if(input.id === "name") {
        if(input.value === '') {
            förnamnerror.innerText = 'Var vänligen att ange ett namn';
            return false;
        } else if(input.value.length < 3) {
            förnamnerror.innerText = 'Ditt namn måste minst tre tecken'
            return false;
        }
        else {
            error.innerText = '';
            return true;
        }
    }
    
    if(input.id === "name2") {
        if(input.value === '') {
            efternamnerror.innerText = 'Var vänligen att ange ett namn';
            return false;
        } else if(input.value.length < 3) {
            efternamnerror.innerText = 'Ditt namn måste minst tre tecken'
            return false;
        }
        else {
            error.innerText = '';
            return true;
        }
    } 

    if(input.id === "email") {
        let regEx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

        if(regEx.test(input.value)) {
            return true;
        } else {
            eposterror.innerText = 'Var vänligen att ange en giltig email address'
        }

    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    document.querySelectorAll('input').forEach(input => {
        validate(input.id)
        console.log(input.id)
    })
})






