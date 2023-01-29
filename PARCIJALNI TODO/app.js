// Selectors
/** 1. pokupi klase  */
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo'); // select element


// Event Listeners
/** 2. kad kliknem dodaj Todo  */
document.addEventListener('DOMContentLoaded', getTodos); // 10. ovime checkiramo da li se stranica učitala, ako je > exec funkc getTodos
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

// Functions
/** 3. */
function addTodo(event) {
    /** spriječi formu da submita */
    event.preventDefault(); // (todoInput.value)
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
    // zalijepi todo-item u Div 
    todoDiv.appendChild(newTodo); // sad imamo div sa li item-om
    // 8.1  dodajemo TODO u local storage
    saveLocalTodos();
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
        // nakon što smo dodali fall , brišemo iz local storeage-a
        removeLocalTodos(todo);
        todo.addEventListener('transitionend', function () {
            todo.remove();
        });
    }
    // CHECK MARK
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

// FILTER
function filterTodo(e) {
    // zgrabi sve todos childNodes
    const todos = todoList.childNodes;
    // console.log(todos);
    // kreiramo loop da kada klikamo na Option samo item iz optiona je klikable
    todos.forEach(function (todo) {
        // targettiramo value is option elemenata
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex"; // show all
                break;
            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';  // show all
                } else {
                    todo.style.display = 'none'; // show none
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';  // show all
                } else {
                    todo.style.display = 'none'; // show none
                }
                break;
        }
    })
}

/// 8. save to local storage
function saveLocalTodos(todo) {
    //1. CHECK // provjeriti da li već imamo neki todos
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = []; // ako nema kreiraj prazan array
    } else {
        // a ako ima parsiraj u array
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    /// grab todo i gurni ih u todos array
    todos.push(todo);
    // push back in to local storage
    localStorage.setItem('todos', JSON.stringify(todos));
}

/// 9. bez ovoga ne radi dodavanje todoa na index.
function getTodos() {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = []; // ako nema kreiraj prazan array
    } else {
        // a ako ima parsiraj u array
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    // 10. moramo rekreirati sve što se gore događaloi
    todos.forEach(function (todo) {
        // kreiraj Todo DIV
        const todoDiv = document.createElement("div");
        // kreiraj i dodaj klasu elementu (div-u)
        todoDiv.classList.add('todo');
        // kreiraj LI
        const newTodo = document.createElement('li');
        newTodo.innerText = todo; // ovdje ne trebamo više value iz inputa nego trebamo value iz local storage-a
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo); // sad imamo div sa li item-om

        // sad trebamo 2 buttona
        // CHECK MARK BUTTON
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);

        // CHECK TRASH BUTTON
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);

        todoList.appendChild(todoDiv);
    });
}

function removeLocalTodos(todo) {
    // provjeri da li ima nekaj u local storage-u
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    /// kaj zapravo dobivamo do sada sa removeLocalTodos
    // 1.console.log(todo); // dobivamo klasu "todo fall"; todo je DIV
    // 2. console.log(todo.children[0].innerText);
    // [0] hvata <li>; // .inner.Text > hvata text u todo // ovo radimo da uhvatimo index od pobrisanog todo-a
    // console.log(todos.indexOf("potato"));
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));

    // sada napravimo da izbriše iz arraya/storeage prema kliknutom todo
    // ako sam kliknuo delete, izbriši ga i iz local storage-a

}
