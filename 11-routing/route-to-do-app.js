import { LitElement, html, css } from 'lit-element';
import './components/to-do-item/to-do-item.js';
import { connect } from 'pwa-helpers';
import { store } from './redux/store'
import {
  addTodo,
  removeTodo,
  updateTodoStatus
} from './redux/actions.js';

// Connect the component to the Redux store
class TodoApp extends connect(store)(LitElement) {
  static get properties() {
    return {
      todos: { type: Array }
    }
  }

  // Add a stateChanged method and update the component properties
  // based on it.
  stateChanged(state) {
    this.todos = state
    console.log(this.todos)
  }

  firstUpdated() {
    this.$input = this.shadowRoot.querySelector('input');
  }

  _removeTodo(event) {
    store.dispatch(removeTodo(event.detail));
  }

  _toggleTodo(event) {
    store.dispatch(updateTodoStatus(event.detail))
  }

  _addTodo(event) {
    event.preventDefault();
    if (this.$input.value.length > 0) {
      store.dispatch(addTodo( {
        id: Math.random().toString(36).substr(2),
        text: this.$input.value, 
        checked: false
      } ))
      this.$input.value = '';
    }
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

  render() {
    return html`
      <div>
        <form id="todo-input">
            <input type="text" placeholder="Add a new to do" />
            <button @click=${this._addTodo}>Add</button>
        </form>
        <ul id="todos">
            ${this.todos.map((todo, index) => html`
                  <to-do-item 
                      ?checked=${todo.checked}
                      text=${todo.text}
                      .id=${todo.id}
                      @onRemove=${this._removeTodo}
                      @onToggle=${this._toggleTodo}>    
                  </to-do-item>`
      )}
        </ul>
    </div>
    `;
  }
}

window.customElements.define('to-do-app', TodoApp);