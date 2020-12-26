let addd = [
    {
        id: '1',
        title: 'nummer 1',
        completed: false
    },
    {
        id: '2',
        title: 'nummer 2',
        completed: false
    },
    {
        id: '3',
        title: 'nummer 3',
        completed: false
    },
    {
        id: '4',
        title: 'nummer 4',
        completed: false
    },
]

const input = document.querySelector('#name');
const addBtn = document.querySelector('#läggtill');
const output = document.querySelector('#add');

const listadd = () => {
    output.innerHTML = ''

    addd.forEach(läggtill => {
        output.innerHTML +=`<div id="${add.id}" class="bg-info p-2 d-flex justify-content-between mt-2">${add.title}<button class="btn btn-danger px-4">X</button></div>`
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

listadd();