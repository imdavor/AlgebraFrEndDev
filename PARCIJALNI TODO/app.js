// Selectors
/** 1. pokupi sve sa indexa */
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners
/** 2. kad kliknem dodaj Todo  */
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

// Functions
/** 3. */
function addTodo(event) {
    /** spriječi formu da submita */
    event.preventDefault();
    // console.log('hello')
    /** start creating <li> strukturu koja će se umetnuti unutar <ul class="todo-list">*/
    /** biti će
     * <div class="todo">
     * <li></li>
     * <button>Delete</button>
     * <button>Checked</button>
     * </div> */

    // kreiraj Todo DIV
    const todoDiv = document.createElement("div");
    // kreiraj i dodaj klasu elementu (div-u)
    todoDiv.classList.add('todo');

    // kreiraj LI
    const newTodo = document.createElement('li');
    // vrijednost koju hoću unutra 
    newTodo.innerText = todoInput.value;
    // dodaj klasu
    newTodo.classList.add('todo-item');
    // zalijepi u Div todo-item
    todoDiv.appendChild(newTodo); // sad imamo div sa li item-om

    // sad trebamo 2 buttona
    // CHECK MARK BUTTON
    const completedButton = document.createElement('button');
    // dodamo i tag unutar buttona sa innerHTML
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    // dodamo klasu buttonu
    completedButton.classList.add("complete-btn");
    // i sada dodamo button u Div
    todoDiv.appendChild(completedButton);

    // CHECK TRASH BUTTON
    const trashButton = document.createElement('button');
    // dodamo i tag unutar buttona sa innerHTML
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    // dodamo klasu buttonu
    trashButton.classList.add("trash-btn");
    // i sada dodamo button u Div
    todoDiv.appendChild(trashButton);

    // i na kraju upucavamo u <ul class="todo-list">
    todoList.appendChild(todoDiv);

    // ispraznimo Todo Input vrijednost iz polja
    todoInput.value = "";
}

// DELETE
function deleteCheck(e) {
    //console.log(e.target) //da vidim kaj klikam
    // delete Todo
    const item = e.target;
    if (item.classList[0] === "trash-btn") {
        // item.remove(); ovo briše samo ikonu zato možemo otići odavde na Parent
        const todo = item.parentElement;
        // za animaciju dodamo klasu fall prije remove elemnta
        todo.classList.add("fall"); // problem je kaj remove odma remova element, zato dodajemo funk da čeka na remove dok animacija ne završi
        todo.addEventListener('transitionEnd', function () {
            todo.remove();
        });
    }
    // CHECK MARK
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}
