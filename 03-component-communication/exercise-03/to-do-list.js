// The <to-do-list> element:

// - Contains an array of to-do's as a property
// - Adds a to do
// - Toggles a to do

import './to-do-item.js';

const template = document.createElement('template')
template.innerHTML = `
    <h1>To do</h1>
    <input type="text" placeholder="Add a new to do"></input>
    <button>Voeg toe</button>

    <ul id="todos"></ul>
    `;

class ToDoList extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.appendChild(template.content.cloneNode(true))

        this.querySelector('button').addEventListener('click', this._addTodo.bind(this));
    }

    _toggleTodo(event) {
        // Find the to do that fired the event using event.detail as its index
        const todo = this._todos[event.detail];

        todo.checked = !todo.checked;
        this._renderTodoList();
    }

    _addTodo() {
        if(this.querySelector('input').value.length > 0){
            this._todos.push({
                text: this.querySelector('input').value,
                checked: false
            })
            this._renderTodoList();
            this.querySelector('input').value = '';
        }
    }

    _renderTodoList() {
        this.querySelector('#todos').innerHTML = '';

        this._todos.forEach((todo, index) => {
            let $todoItem = document.createElement('to-do-item');
            $todoItem.setAttribute('text', todo.text);

            // if our to-do is checked, set the attribute, else; omit it.
            if (todo.checked) {
                $todoItem.setAttribute('checked', '');
            }

            // By setting index we have some state to keep track of the index
            // of the to do
            $todoItem.setAttribute('index', index);
            $todoItem.addEventListener('onToggle', this._toggleTodo.bind(this));
            this.querySelector('#todos').appendChild($todoItem);
        });
    }

    // Implement getters and setters to be able to pass data to the component
    // and render a list of to do's.
    set todos(value) {
        this._todos = value;
        this._renderTodoList();
    }

    get todos() {
        return this._todos;
    }
}

window.customElements.define('to-do-list', ToDoList);