import { LitElement, html } from 'lit-element';

import './to-do-item.js';

export class ToDoList extends LitElement {
	render() {
		return html`
			<h1>To do</h1>
			<input type="text" placeholder="Add a new to do"></input>
			<button @click="${this._handleClick}">Voeg toe</button>
		
			<ul id="todos"></ul>
			<style>
			  :host {
				display: block;
				font-family: sans-serif;
			  }
			
			  :host ul {
				list-style: none;
				padding: 0;
			  }
			
			  :host input {
				font-size: 1em;
				padding: 0.5em;
				border: 2px solid #323232;
				border-radius: 2px;
			  }
			
			  :host button {
				background-color: #104436;
				border: 2px solid #08221b;
				border-radius: 2px;
				color: white;
				cursor: pointer;
				font-size: 1em;
				padding: 0.5em 1em;
			  }
			</style>

		`
	}

	_toggleTodo(event) {
		// Find the to do that fired the event using event.detail as its index
		const todo = this._todos[event.detail];

		todo.checked = !todo.checked;
		this._renderTodoList();
	}

	_handleClick() {
		if (this.shadowRoot.querySelector('input').value.length > 0) {
			this._todos.push({
				text: this.shadowRoot.querySelector('input').value,
				checked: false
			})
			this._renderTodoList();
			this.shadowRoot.querySelector('input').value = '';
		}
	}

	_renderTodoList() {
		this.shadowRoot.querySelector('#todos').innerHTML = '';

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
			this.shadowRoot.querySelector('#todos').appendChild($todoItem);
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
customElements.define('to-do-list', ToDoList)