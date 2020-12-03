import { css, LitElement, html } from 'lit-element';

import './to-do-item.js';

export class ToDoList extends LitElement {
	static get properties() {
		return {
			todos:{type:Array}
		};
	}
	static get styles() {
		// language=css
		return css`:host {
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
			  }`
	}
	constructor() {
		super();
		this.todos=[];
	}
	render() {
		return html`
			<h1>To do</h1>
			<input type="text" placeholder="Add a new to do">
			<button @click="${this._handleClick}">Voeg toe</button>
		
			<ul id="todos">${this.todos.map(todo=>html`<to-do-item text="${todo.text}" ?checked="${todo.checked}" index="${todo.index}"></to-do-item>`)}</ul>`
	}

	_handleClick() {
		if (this.shadowRoot.querySelector('input').value.length > 0) {
			this.todos.push({
				text: this.shadowRoot.querySelector('input').value,
				checked: false
			})
			this.todos=[...this.todos]
		}
	}
}
customElements.define('to-do-list', ToDoList)