import {LitElement, html, css } from 'lit-element';

class AppFooter extends LitElement {
  render() {
    return html`
      <div>® HU - 2020</div>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
      }
    `;
  }
}

customElements.define('app-footer', AppFooter);