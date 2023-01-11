//1.
export default class Todo {
    //3. properties
    InputField = null;
    AddButton = null;
    TaskList = null;
    SaveButton = null;
    DeleteButton = null;

    constructor(root, options = {}) {
        const defaultOptions = {
            cssInputField: options.InputField ?? "",
            cssAddButton: options.AddButton ?? "",
            cssTaskList: options.TaskList ?? "",
            cssSaveButton: options.SaveButton ?? "",
            cssDeleteButton: options.DeleteButton ?? "",
        };
        // console.log(defaultOptions);
        this.init(root, defaultOptions);
    }
    //4. Inicijaizacija aplikacije
    init = (root, defaultOptions) => {
        this.initDOM(root, defaultOptions);
        this.initElementObjects();
        this.initEventListeners();
    };

    //5.  kreira potrebne DOM elemente i umetnw ih u postojeći DOM(root element)
    initDOM = (root, defaultOptions) => {
        const rootElement = document.querySelector(root);
        // console.log(rootElement);
        const todoDOM = `
        <input type="text" id="inputField" class="${defaultOptions.cssInputField}" />
        <button type="button" id="addButton" class="${defaultOptions.cssAddButton}">Dodaj</button>
        <ul id="taskList" class="${defaultOptions.cssTaskList}"></ul>
        <button type="button" id="saveButton" class="${defaultOptions.cssAddButton}">Pohrani listu</button>
        <button type="button" id="deleteButton" class="${defaultOptions.cssDeleteButton}">Izbriši</button>
        `;
        rootElement.innerHTML = todoDOM; // ono što je u todoDOM ubaci u innerHTML
    };

    // 6. pokupi ono što je upisano u DOMu i ubaci u  properties od klase TODO(na vrhu)
    initElementObjects = () => {
        this.InputField = document.querySelector("#inputField");
        this.AddButton = document.querySelector("#addButton");
        this.TaskList = document.querySelector("#taskList");
        this.SaveButton = document.querySelector("#saveButton");
        this.DeleteButton = document.querySelector("#deleteButton");
    };

    //7. inicijalizira sve potrebne evenListenere
    initEventListeners = () => {
        this.AddButton.addEventListener("click", this.addTaskToList);
    };

    //8.  kreiraj novi element liste kao novi task

    createTaskItem = (task) => {
        const listElement = document.createElement("li");
        listElement.innerHTML = task;
        listElement.dataset.createdAt = this.generateTimeStamp();
        listElement.dataset.completedAt = "";

        this.addCheckBoxtoListElement(listElement);
        this.addRemoveBtnToListElement(listElement);

        return listElement;
    };

    // 9. kreiraj checkbox element i dodaj mu eventlistener i umetni ga na početak li elementa

    addCheckBoxtoListElement = (listElement) => {
        const cb = document.createElement("input");
        cb.setAttribute("type", "checkbox");
        cb.addEventListener("change", this.changeTaskState);

        // TODO: dodati listener

        listElement.prepend(cb);
    };

    // 10. dodaj btn za brisanje elementa
    addRemoveBtnToListElement = (listElement) => {
        const btn = document.createElement("button");
        btn.setAttribute("type", "button");
        btn.innerHTML = "x";
        listElement.append(btn);

        btn.addEventListener("click", this.removeTaskItemFromList);
    };

    /*** 7.
     *  EVENT LISTENERS
     */
    //  dodaj novi task na listu
    addTaskToList = () => {
        //console.log("radi");
        const task = this.InputField.value.trim();
        if (!task) {
            alert("Upiši task!");
            return;
        }

        const taskItem = this.createTaskItem(task);
        this.TaskList.append(taskItem);
        this.resetInputField(taskItem);
    };

    // promijeni status taska
    changeTaskState = (e) => {
        const cb = e.target;
        const listElement = cb.parentNode;

        //console.log(cb);
        if (cb.checked) {
            listElement.style.textDecoration = "line-through";
            listElement.dataset.completedAt = this.generateTimeStamp();
        } else {
            listElement.style.textDecoration = "none";
        }
    };

    // izbriši task s liste
    removeTaskItemFromList = (e) => {
        const btn = e.target;
        const listElement = btn.parentNode;
        const cb = listElement.querySelector("input[type=checkbox]");

        if (cb.checked) {
            alert("Nemreš izbrisati završeni task!");
            return;
        }

        if (!confirm("Are you sure you want to delete this Task???")) {
            return;
        }

        listElement.remove();
    };

    /**
     * END EVENT LISTENERS
     */

    /**
     * HELPERS
     */
    resetInputField = () => {
        this.InputField.value = "";
        this.InputField.focus();
    };

    generateTimeStamp = () => {
        const date = new Date();

        return `${date.getFullYear()}-${
            date.getMonth() + 1
        }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    };

    /**
     * END HELPERS
     */
}
