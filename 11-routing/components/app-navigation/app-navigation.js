import { LitElement, html, css } from 'lit-element';

class AppNavigation extends LitElement {
  render() {
    return html`
      <nav>
        <ul>
          <li><a href="/">Add To Do</a></li>
          <li><a href="/stats/">Stats</a></li>
        </ul>
      </nav>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: block;
        margin: 0;
        padding: 1rem;
      }

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      a {
        display: block;
        border-bottom: 1px solid #0eb2ad;
        color: #232323;
        margin-bottom: 1rem;
        padding: 0.5rem 0;
        text-decoration: none;
      }
    `;
  }
}

customElements.define('app-navigation', AppNavigation);