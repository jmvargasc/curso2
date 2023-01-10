import { LitElement, html, css } from 'lit-element';
import styles from './button-component-style.js'
class ButtonComponent  extends LitElement {

  static get styles() {
    return [
      styles,
    ]
  }

  static get properties() {
    return {
        text:{type: String},
        state: {type: Boolean}
    };
  }

  constructor() {
    super();
    this.text = "button";
    this.state = false;
  }

  render() {
    return html`
      <button class="button" ?disabled="${this.state}">${this.text}</button>
    `;
  }
}

customElements.define('button-component', ButtonComponent);