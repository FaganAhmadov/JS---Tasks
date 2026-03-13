const todos = {
    continue: [],
    complated: []
}
let selectedTodo = null;
const continueToDosElem = document.querySelector('#continueToDos')
const todoInput = document.querySelector('#todoInput')
const complatedTodosElem = document.querySelector('#complatedTodos')
const toggleBtns = document.querySelectorAll('.toggleBtn')


let id = 0
todoInput.addEventListener(('keyup'), (e) => {
    let val = todoInput.value.trim()
    if (e.key === 'Enter') {
        if (val) {
            if (!selectedTodo) {
                todos.continue.push({
                    id: ++id,
                    title: val
                })
            } else {
                selectedTodo.title = val
                selectedTodo = null
            }
            todoInput.value = ''
            continueTodosRender()
            complatedTodosRender()
        } else {
            alert('Düzgün dəyər daxil edin')
        }
    }

})

function continueTodosRender() {
    continueToDosElem.innerHTML = ''
    todos.continue.forEach(todo => {
        continueToDosElem.innerHTML += `
                <div class="shadow-sm  flex  items-center gap-6 p-3">
                    <input type="checkbox" class="w-8 h-8 " oninput='handlerChecked(this, ${todo.id})' >
                    <p class='w-full' >${todo.title}</p>
                    <i class="fa-solid fa-trash-can" onclick='deleteTodo( "continue", ${todo.id}) ' ></i>   
                    <i class="fa-solid fa-pen cursor-pointer " onclick='editTodo( "continue", ${todo.id})' ></i>
                </div>
    `
    })
}

function complatedTodosRender() {
    complatedTodosElem.innerHTML = ''
    todos.complated.forEach(todo => {
        complatedTodosElem.innerHTML += `
                <div class=" flex gap-5 items-center">
                    <input type="checkbox" checked class="w-8 h-8" oninput='handlerChecked(this, ${todo.id})'>
                    <p class="line-through w-full ">${todo.title}</p>
                    <i class="fa-solid fa-trash-can" onclick='deleteTodo( "complated", ${todo.id}) ' ></i>   
                    <i class="fa-solid fa-pen cursor-pointer " onclick='editTodo( "complated",  ${todo.id})' ></i>
                </div>
    `
    })
}
// ------------------------------ 1ci-usul
function handlerChecked(elem, id) {
    if (elem.checked) {
        const foundTodo = todos.continue.find(todo => todo.id === id);
        todos.complated.push(foundTodo)
        todos.continue = todos.continue.filter(todo => todo.id !== id)
        complatedTodosRender()
        continueTodosRender()
        !(todos.continue.length) && addEmptyImage('continue')
    } else {
        const foundTodo = todos.complated.find(todo => todo.id === id);
        todos.continue.push(foundTodo)
        todos.complated = todos.complated.filter(todo => todo.id !== id)
        complatedTodosRender()
        continueTodosRender()
        !(todos.continue.length) && addEmptyImage('complated')
    }
}

toggleBtns.forEach((toggleBtn) => {
    toggleBtn.addEventListener('click', () => {
        if (toggleBtn.lastElementChild.classList.contains('fa-angle-down')) {
            toggleBtn.lastElementChild.classList.replace('fa-angle-down', 'fa-angle-up');
            toggleBtn.nextElementSibling.classList.replace('hidden', 'flex')
        } else {
            toggleBtn.lastElementChild.classList.replace('fa-angle-up', 'fa-angle-down')
            toggleBtn.nextElementSibling.classList.replace('flex', 'hidden')
        }
    })
})

function editTodo(status, id) {
    const foundTodo = todos[status === 'continue' ? 'continue' : 'complated'].find(todo => todo.id === id)
    selectedTodo = foundTodo
    todoInput.value = foundTodo.title
}

function deleteTodo(status, id) {
    todos[status] = todos[status === 'continue' ? 'continue' : 'complated'].filter(todo => todo.id !== id)
    continueTodosRender()
    complatedTodosRender()
    todos[status].length === 0 && addEmptyImage(status)
}

function addEmptyImage(status) {
    if (status === 'continue') {
        continueToDosElem.innerHTML = `
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZibtnwgnvNAHfnFae3vVZqs-Twcvpq3yPUw&s"
                    alt="" class="w-[100px] mx-auto ">
        `
    } else {
        complatedTodosElem.innerHTML = `
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZibtnwgnvNAHfnFae3vVZqs-Twcvpq3yPUw&s"
                    alt="" class="w-[100px] mx-auto ">
        `
    }
}