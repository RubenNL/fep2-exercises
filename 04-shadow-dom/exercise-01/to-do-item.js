// The <to-do-item> element:

// - Contains a text attribute
// - Contains an index attribute
// - Contains a checked attribute

/*const template = document.createElement('template')
template.innerHTML =
*/
class TodoItem extends HTMLElement {
	constructor() {
		super();
		const shadow = this.attachShadow({mode: 'open'});
		shadow.innerHTML=`
			<li class="item">
				<input type="checkbox">
				<label></label>
			</li>
			<style>
				.completed {
					text-decoration: line-through;
				}
				:host {
					display: block;
					font-family: sans-serif;
				  }
			</style>`;
	}

	connectedCallback() {
		this.shadowRoot.querySelector('input').addEventListener('click', (e) => {
			this.dispatchEvent(new CustomEvent('onToggle', {
				detail: this.getAttribute('index'),
				// By setting composed to true, the event will bubble outside
				// of the Shadow DOM
				composed: true,
				bubbles: true
			}));
		});
		// We set a default attribute here; if our end user hasn't provided one,
		// our element will display a "placeholder" text instead.
		if (!this.hasAttribute('text')) {
			this.setAttribute('text', 'placeholder');
		}

		this._renderTodoItem();
	}

	static get observedAttributes() {
		return ['text', 'checked', 'index'];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		switch(name){
			case 'text':
				this._text = newValue;
				break;
			case 'checked':
				// Set the checked property to the 'checked' attribute value
				this._checked = this.hasAttribute('checked');
				break;
			case 'index':
				// Attributes only allow a String type. Parse the String to an
				// integer to be able to get the index property as an integer.
				this._index = parseInt(newValue);
				break;
		}
	}

	_renderTodoItem() {
		if (this.hasAttribute('checked')) {
			this.shadowRoot.querySelector('.item').classList.add('completed');
			this.shadowRoot.querySelector('label').setAttribute('checked', '');
		} else {
			this.shadowRoot.querySelector('.item').classList.remove('completed');
			this.shadowRoot.querySelector('label').removeAttribute('checked');
		}

		this.shadowRoot.querySelector('label').innerHTML = this._text;
	}

	set index(val) {
		this.setAttribute('index', val);
	}

	get index() {
		return this._index;
	}

	// Implement a getter and setter for the checked property, so every time
	// we change the property or the attribute, the value will always be in sync.
	get checked() {
		return this.hasAttribute('checked');
	}

	set checked(val) {
		if (val) {
			this.setAttribute('checked', '');
		} else {
			this.removeAttribute('checked');
		}
	}
}
window.customElements.define('to-do-item', TodoItem);