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
        disabledBut : {type : String},
    };
  }

  constructor() {
    super();
    this.name = "Boton";
    this.disabledBut = "false";
  }

  _dispatchMyEvent(e) {
    let detail ={
      p1 : "parrafo4",
      p2 : "parrafo5",
      p3 : "parrafo6"
    }
    let myEvent = new CustomEvent('cambia-color', {
      detail,
      bubbles: true,
      composed: true });

    this.dispatchEvent(myEvent);
    if (myEvent.defaultPrevented) {
        e.preventDefault();
      }
    
  }
  

  render() {
    return html`
        <button class="boton" @click=${this._dispatchMyEvent} ?disabled=${this.disabledBut === "true" ? true: false}>${this.name} ${this.handleDisabled}</button>      
    `;
  }
}

customElements.define('componente-boton', ComponenteBoton);