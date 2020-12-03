import { css,LitElement, html } from 'lit-element';

export class TodoItem extends LitElement {
	static get properties() {
		return {
			text: { type: String },
			checked: {type:Boolean},
			index:{type:Number}
		};
	}
	constructor() {
		super();
		this.text="abc";
		this.checked=false;
		this.index=0;
	}
	static get styles() {
		// language=css
		return css`.completed {
				text-decoration: line-through;
			}
			:host {
				display: block;
				font-family: sans-serif;
			}`
	}
	render() {
		return html`
			<li class="item ${this.checked?'completed':''}" >
				<input type="checkbox" ?checked="${this.checked}" @click="${this._clickHandler}">
				<label>${this.text}</label>
			</li>`
	}
	_clickHandler() {
		this.checked=!this.checked;
		this.dispatchEvent(new CustomEvent('onToggle', {
			detail: this.getAttribute('index'),
			composed: true,
			bubbles: true
		}));
	}
}
customElements.define('to-do-item', TodoItem)