import { LitElement, html, css } from 'lit';
import '../componente-boton/componente-boton.js';

class PrimerComponente  extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;  
      }
      .container {
        width: 80%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 10px;
        grid-auto-rows: minmax(100px, auto);
      }
      .imagen{
        grid-column: 1 / 2;
        grid-row: 1;
      }
      .parrafos{
        grid-column: 2 / 3;
        grid-row: 1;
      }

      .parrafo1{
        color: #1DB954;
        font-family: tahoma;
      }
      .parrafo2{
        color: #E50914;
        font-family: monospace;
      }
      .parrafo3{
        color: #DA291C;
        font-family:Arial;
      }

    `;
  }

  static get properties() {
    return {
        img : {type : String},
        contador : {type : Number},
    };
  }

  constructor() {
    super();
    this.img = "https://http2.mlstatic.com/D_NQ_NP_896378-MLM47341137648_092021-W.jpg";
    this.contador = 0;
  }

  _cambiarColor()
  {
    this.shadowRoot.getElementById("p1").style.color = "blue";
    this.shadowRoot.getElementById("p2").style.color = "green";
    this.shadowRoot.getElementById("p3").style.color = "black";
  }

  _contar(e)
  {
    this.contador ++;
    if(this.contador === 3)
    {
        e.preventDefault();
        e.detail.handleDisabled = true;
    } 
  }

  _restaura(e)
  {
    this.contador = 0;
    e.preventDefault();
    console.log("antes de cambiarlo", e.detail.handleDisabled);
    e.detail.handleDisabled = false;
    this.update();
  }
  

  render() {
    return html`
      <div class="container">
        <div class="imagen">
            <img src=${this.img} />
        </div>
        <div class="parrafos">
            <p id="p1" class="parrafo1">Este es el parrafo 1</p>
            <p id="p2" class="parrafo2">Este es el parrafo 2</p>
            <p id="p3" class="parrafo3">Este es el parrafo 3</p>
            <componente-boton @click = ${this._cambiarColor}></componente-boton>
            <componente-boton @boton-cuenta = ${this._contar} name="Contar"></componente-boton>
            <componente-boton @boton-cuenta = ${this._restaura} name="Regresar"></componente-boton>
        </div>
        <p>${this.contador}</p>
      </div>
    `;
  }
}

customElements.define('primer-componente', PrimerComponente);