import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from './redux/store'
import '@google-web-components/google-chart';

class ToDoStats extends connect(store)(LitElement) {
    stateChanged(state) {
        this.todos = state        
    }

    render() {
        return html`
        <google-chart
            type='pie'
            options='{"title": "To Dos"}'
            cols='[{"label":"Done", "type":"string"}, {"label":"Number", "type":"number"}]'
            rows='
            [["Done", ${this.todos.filter(todo => todo.checked).length}],
            ["Open", ${this.todos.filter(todo => !todo.checked).length}]]'
        >
        </google-chart>
        `;
    }

    static get styles() {
        return css`
          :host {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
            height: 100%;
          }
          button {
            background-color: #076461;
            border: 2px solid #073332;
            border-radius: 2px;
            color: white;
            font-size: 1rem;
            font-weight: bold;
            text-transform: uppercase;
            padding: 0.5rem 1rem;
          }
          input {
            font-size: 1rem;
            padding: 0.5rem 1rem;
          }
          ul {
            list-style: none;
            padding: 0;
            min-height: 200px;
          }
        `;
      }
}

customElements.define('to-do-stats', ToDoStats);