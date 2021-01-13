let addd= [
    {
        id: '1',
        title: 'Lägg till',
        completed: false
    },
    
]

const form = document.querySelector('#todoForm');
const input = document.querySelector("#name");
const addBtn = document.querySelector('#läggtill');
const output = document.querySelector('#add');


const listadd = () => {
    output.innerHTML = ''

    addd.forEach(läggtill => {
        output.innerHTML +=`<div id="${addd.id}" class="bg-primary p-3 d-flex justify-content-between mt-2">${addd.title}<button class="btn btn-dark px-3">X</button></div>`
    })
}

addBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if(input.value !== '') {

        let add = {
            id: Date.now().toString(),
            title: input.value,
            completed: false
        }
        addd.push(add);
        listadd();
 
        input.value='';
    } else {
        input.classList.add('is-invalid');
    }
})

output.addEventListener('click', (e) => {
    addd = addd.filter(add => add.id !== e.target.parentNode.id)
})

listadd();







