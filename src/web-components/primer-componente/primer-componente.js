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

      .parrafo4{
        color: #00FFFF;
        font-family: "Times New Roman";
      }
      .parrafo5{
        color: #800080;
        font-family: sans-serif;
      }
      .parrafo6{
        color: #FF8000;
        font-family: helvetica;
      }

    `;
  }

  static get properties() {
    return {
        img : {type : String},
        contador : {type : Number},
        handleDisabled : {type : Boolean},
        parrafos : {type : Object},
    };
  }

  constructor() {
    super();
    this.img = "https://http2.mlstatic.com/D_NQ_NP_896378-MLM47341137648_092021-W.jpg";
    this.contador = 0;
    this.handleDisabled = false;
    this.parrafos = {
      p1 : "parrafo1",
      p2 : "parrafo2",
      p3 : "parrafo3",
    };
  }

  _cambiarColor(e)
  {
    console.log("Click")

    e.preventDefault();
    console.log("Los que llegan");
    console.log(e.detail.p1);
    console.log(e.detail.p2);
    console.log(e.detail.p3);

    let p1 = this.parrafos.p1;
    let p2 = this.parrafos.p2;
    let p3 = this.parrafos.p3;

    console.log("Los que Estaban");

    console.log(p1);
    console.log(p2);
    console.log(p3);

    this.parrafos.p1 = e.detail.p1;
    this.parrafos.p2 = e.detail.p2;
    this.parrafos.p3 = e.detail.p3;

    console.log("Los Nuevos");

    console.log(this.parrafos.p1);
    console.log(this.parrafos.p2);
    console.log(this.parrafos.p3);

    e.detail.p1 = p1;
    e.detail.p2 = p2;
    e.detail.p3 = p3;

    console.log("Los viejos");

    console.log(e.detail.p1);
    console.log(e.detail.p2);
    console.log(e.detail.p3);

    this.requestUpdate();
  }

  _contar()
  {
    this.contador ++;
    if(this.contador === 3)
    {
        this.handleDisabled = true;
    } 
  }

  _restaura()
  {
    this.contador = 0;
    this.handleDisabled = false;
    
  }
  

  render() {
    return html`
      <div class="container">
        <div class="imagen">
            <img src=${this.img} />
        </div>
        <div class="parrafos">
            <p class=${this.parrafos.p1}>Este es el parrafo 1</p>
            <p class=${this.parrafos.p2}>Este es el parrafo 2</p>
            <p class=${this.parrafos.p3}>Este es el parrafo 3</p>
            <componente-boton @cambia-color = ${this._cambiarColor}></componente-boton>
            <componente-boton @click = ${this._contar} name="Contar" disabledBut = ${this.handleDisabled}></componente-boton>
            <componente-boton @click = ${this._restaura} name="Regresar" disabledBut = ${!this.handleDisabled}></componente-boton>
        </div>
        <p>${this.contador}</p>
      </div>
    `;
  }
}

customElements.define('primer-componente', PrimerComponente);