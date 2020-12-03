import { LitElement, html } from 'lit-element';

export class TodoItem extends LitElement {
	static get properties() {
		return { text: { type: String },checked: {type:Boolean} };
	}
	constructor() {
		super();
		this.text="abc";
		this.checked=false;
		this.index=0;
	}
	render() {
		return html`
			<li class="item">
				<input type="checkbox" ?checked="${this.checked}" @click="${this._clickHandler}">
				<label>${this.text}</label>
			</li>
			<style>
				.completed {
					text-decoration: line-through;
				}
				:host {
					display: block;
					font-family: sans-serif;
				  }
			</style>`
	}
	_clickHandler() {
		this.dispatchEvent(new CustomEvent('onToggle', {
			detail: this.getAttribute('index'),
			composed: true,
			bubbles: true
		}));
	}
}
customElements.define('to-do-item', TodoItem)