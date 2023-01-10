import { LitElement, html, css } from 'lit-element';

class ButtonComponent  extends LitElement {

  static get is() {
    return 'button-component';
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  static get styles() {
    return css`
      .btn {
        background-color: #F44516;
        border: none;
        border-radius: 10px;
        width: 100px;
        height: 40px;
        font-size: 13px;
      }
    `;
  }

  render() {
    return html`
      <button class="btn">Cambiar color</button>
    `;
  }
}



customElements.define(ButtonComponent.is, ButtonComponent);
export default ButtonComponent