const form = document.querySelector('#form');
const output = document.querySelector('#output');


const validateText = (input, error) => {
    if(input.id === "name") {
        if(input.value === '') {
            förnamnerror.innerText = 'Var vänligen att ange ett förnamn';
            return false;
        } else if(input.value.length < 3) {
            förnamnerror.innerText = 'Ditt namn måste minst tre tecken'
            return false;
        }
        else {
            förnamnerror.innerText = '';
            return true;
        }
    }
    
    
    if(input.id === "name2") {
        if(input.value === '') {
            efternamnerror.innerText = 'Var vänligen att ange ett efternamn';
            return false;
        } else if(input.value.length < 3) {
            efternamnerror.innerText = 'Ditt namn måste minst tre tecken'
            return false;
        }
        else {
            efternamnerror.innerText = '';
            return true;
        }
    } 
}

const validateEmail = (input, error) => {
    if(input.id === "email1"){
        let regEx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

        if(regEx.test(input.value)) {
            eposterror.innerText = '';
            return true;
        } else {
            eposterror.innerText = 'Var vänligen att ange en giltig email address'
            return false;
        }

    }
}

const validate = () => {

    document.querySelectorAll('input').forEach(input => {
        // const input = document.querySelector('#'+id);
        const error = document.querySelector('#'+input.id+'-error');
    
        if(input.type === "text") {
            validateText(input, error)
        }
    

    
    if(input.id === "email1") {
        validateEmail(input, error)
    }
})
}



form.addEventListener('submit', (e) => {
    e.preventDefault();

    validate()

   // document.querySelectorAll('input').forEach(input => {
    //    validate(input.id);
        // console.log(input.id);
    // })
})






