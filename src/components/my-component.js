import { LitElement, html, css } from "lit-element";
import ButtonComponent from "./button-component";

class MyComponent extends LitElement {
  static get is() {
    return "my-component";
  }

  static get properties() {
    return {
      styles: { type: Object },
      counter: { type: Number },
      visible: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.styles = { color: "purple" };
    this.counter = 0;
    this.visible = true;
  }

  static get styles() {
    return css`
      .container {
        display: flex;
        flex-direction: column;
      }
      .row {
        display: flex;
        flex-direction: row;
        gap: 25px;
      }
      .col {
        display: flex;
        flex-direction: column;
      }
      strong {
        font-size: 25px;
      }
      img {
        width: 100px;
      }
      .parr {
        font-size: 20px;
      }
      .btns {
        display: flex;
        gap: 20px
      }
      .btn {
        background-color: #f44516;
        border: none;
        border-radius: 10px;
        width: 100px;
        height: 40px;
        font-size: 13px
      }
    `;
  }

  handleColor() {
    this.styles = { color: "green" };
  }

  incrementCounter() {
    for (let i = 0; i <= 3; i++) {
      this.counter += 1;
    }
    // if(this.counter=4){
    //   this.visible = false
    // }
  }

  resetCounter() {
    this.counter = 0;
  }

  render() {
    return html`
      <section class="container">
        <div class="row">
          <div class="col">
            <strong>COLUMNA 1</strong>
            <img src="/src/img/taza.jpg" alt="taza" />
          </div>
          <div class="col">
            <strong>COLUMNA 2</strong>
            <p class="parr" style="color:${this.styles.color}">Hola mundo</p>
            <p class="parr" style="color: ${this.styles.color}">Hola Lit</p>
            <p class="parr" style="color: ${this.styles.color}">BBVA</p>
          </div>
        </div>
        <div>
          <h1>Click número ${this.counter}</h1>
        </div>
        <div class="btns">
          <button-component
            @click=${() => this.handleColor()}
          ></button-component>
          <button
            class="btn"
            ?disable="${this.visible}"
            @click=${() => this.incrementCounter()}
          >
            Contador
          </button>
          <button class="btn" @click=${() => this.resetCounter()}>
            Resetear contador
          </button>
        </div>
      </section>
    `;
  }
}

customElements.define(MyComponent.is, MyComponent);
export default MyComponent;
