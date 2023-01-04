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
    initEventListeners = () => {};
}
