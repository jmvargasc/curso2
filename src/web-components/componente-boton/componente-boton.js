import { LitElement, html, css } from 'lit';

class ComponenteBoton  extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .boton{
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 16px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        transition-duration: 0.4s;
        cursor: pointer;
      }
    `;
  }

  static get properties() {
    return {
        name : {type : String},
        handleDisabled : {}
    };
  }

  constructor() {
    super();
    this.name = "Boton";
    this.handleDisabled = false;
  }

  _dispatchMyEvent(e) {
    const detail = {
        handleDisabled : this.handleDisabled
      }
    let myEvent = new CustomEvent('boton-cuenta', {
      detail,
      bubbles: true,
      composed: true });

    this.dispatchEvent(myEvent);
    if (myEvent.defaultPrevented) {
        e.preventDefault();
      }
    this.handleDisabled = detail.handleDisabled;

    console.log("valor de handlerDisabled: ", this.handleDisabled);
  }
  

  render() {
    return html`
    ${console.log("valor de handlerDisabled 2", this.handleDisabled)}
      <button class="boton" @click=${this._dispatchMyEvent} ?disabled=${this.handleDisabled}>${this.name}</button>
    `;
  }
}

customElements.define('componente-boton', ComponenteBoton);