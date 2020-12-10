import {LitElement, html, css} from 'lit-element';

class AppHeader extends LitElement {
  render() {
    return html`
      <header>
        <h1>To Do</h1>
      </header>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        background-color: #212121;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        color: white
      }

      h1 {
        margin: 0;
        padding: 0;
        text-align: center;
      }
    `;
  }
}

customElements.define('app-header', AppHeader);