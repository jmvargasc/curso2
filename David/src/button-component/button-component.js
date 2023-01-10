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

  doSomething(e){
    this.dispatchEvent(new CustomEvent("changeColors",{detail:{value:e}}));
  }

  render() {
    return html`
      <button @click =${e => this.doSomething(e)} >Boton</button>
    `;
  }
}


customElements.define(ButtonComponent.is, ButtonComponent);
export default ButtonComponent