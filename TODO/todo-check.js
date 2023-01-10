export default class Todo {
    // Properties
    InputField = null;
    AddButton = null;
    TaskList = null;
    SaveButton = null;
    DeleteButton = null;

    constructor(root, options = {}) {
        const defaultOptions = {
            cssInputField: options.inputField ?? "",
            cssAddButton: options.addButton ?? "",
            cssTaskList: options.taskList ?? "",
            cssSaveButton: options.saveButton ?? "",
            cssDeleteButton: options.deleteButton ?? "",
        };

        this.init(root, defaultOptions);
    }

    // Inicijalizacija aplikacije
    init = (root, defaultOptions) => {
        this.initDOM(root, defaultOptions);
        this.initElementObjects();
        this.initEventListeners();
    };

    // Kreira potrebne DOM elemente i umetne ih u postojeći DOM (root element)
    initDOM = (root, defaultOptions) => {
        const rootElement = document.querySelector(root);
        const todoDOM = `
            <input type="text" id="inputField" class="${defaultOptions.cssInputField}" />

            <button type="button" id="addButton" class="${defaultOptions.cssAddButton}">Dodaj</button>

            <ul id="taskList" class="${defaultOptions.cssTaskList}"></ul>

            <button type="button" id="saveButton" class="${defaultOptions.cssSaveButton}">Pohrani listu</button>

            <button type="button" id="deleteButton" class="${defaultOptions.cssDeleteButton}">Izbriši listu</button>
        `;
        rootElement.innerHTML = todoDOM;
    };

    // Dohvati HTMLElemet objekte iz DOM-a i spremi ih u svojstva klase Todo
    initElementObjects = () => {
        this.InputField = document.querySelector("#inputField");
        this.AddButton = document.querySelector("#addButton");
        this.TaskList = document.querySelector("#taskList");
        this.SaveButton = document.querySelector("#saveButton");
        this.DeleteButton = document.querySelector("#deleteButton");
    };

    // Inicijalizira sve potrebne event listenere
    initEventListeners = () => {};
}
