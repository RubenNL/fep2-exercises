import { LitElement, html, css } from 'lit-element';

class TodoItem extends LitElement {
  static get properties() {
    return {
      text: { 
        type: String,
        reflect: true
      },
      checked: { 
        type: Boolean, 
        reflect: true 
      },
      id: { 
        type: Number 
      }
    }
  }

  constructor() {
    super();
    this.text = '';
    this.checked = false;
    this.id = ''
  }

  _fire(eventType, detail) {
    this.dispatchEvent(new CustomEvent(eventType, { detail: detail }));   
  }
  

  static get styles() {
    return css`
      :host {
        display: block;
        font-family: sans-serif;
      }
      .completed {
        text-decoration: line-through;
      }
      button {
        cursor: pointer;
        border: none;
        background-color: Transparent;
      }
    `;
  }

  render() {
    return html`
        <li class="item" .id="${this.id}">
            <input 
                type="checkbox" 
                .checked=${this.checked}
                @change=${() => this._fire('onToggle', this)}>
            <label class=${this.checked ? 'completed' : ''}>${this.text}</label>
            <button @click=${() => this._fire('onRemove', this.id)}>❌</button>
        </li>
    `;
  }
}

window.customElements.define('to-do-item', TodoItem);