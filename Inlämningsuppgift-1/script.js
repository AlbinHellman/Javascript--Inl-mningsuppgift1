const form = document.querySelector('#form');
const output = document.querySelector('#output');
const firstName = document.querySelector('#name');
const lastName = document.querySelector('#name2');
const email = document.querySelector('#email1');

let users = [];

const renderUsers = () => {

    

    output.innerHTML = '';
    users.forEach(user => {

        let html = ` 
    <div class="användare">
                <h3>${user.firstName} ${user.lastName}</h3>
                <div class="flex">
                <p>${user.email}</p>
                <div class="knappar">
                    <button class="btn btn-primary">Ändra</button>
                    <button class="btn btn-danger">Ta Bort</button>
                </div>
                </div>
            </div>
`
        output.innerHTML += html
    })
}


const validateText = id => {
    const input = document.querySelector('#'+id);
        const error = document.querySelector('#'+id+'-error');
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
            efternamnerror.innerText = 'Ditt namn måste minst tre tecken';
            return false;
        }
        else {
            efternamnerror.innerText = '';
            return true;
        }
    } 
}

const validateEmail = id => {
    const input = document.querySelector('#'+id);
        const error = document.querySelector('#'+id+'-error');
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
        
    
        if(input.type === "text") {
         validateText(input.id);
        // console.log(validateText(input, error))
        }
    

    
    if(input.id === "email1") {
        validateEmail(input.id);
    }

   
})
}

const createUser = (firstName, lastName, email) => {
    let user = {
        id: Date.now().toString(),
        firstName,
        lastName,
        email
    }

    users.push(user);
    console.log(users);
}

renderUsers();

form.addEventListener('submit', (e) => {
    e.preventDefault();

    validate();
    

    if(validateText('name') && validateText('name2') && validateEmail('email1')) {

        createUser(firstName.value, lastName.value, email.value);
        renderUsers();
    }

   
})






