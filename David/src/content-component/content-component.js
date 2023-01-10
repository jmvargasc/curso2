import { LitElement, html, css } from 'lit-element';
import '../button-component/button-component.js';

class ContentComponent  extends LitElement {

  static get is() {
    return 'content-component';
  }

  static get styles() {
    return css`
      .containcol {
        display: flex;
        flex-direction: row;
      }

      .col1 {
        width:50%;
      }

      .col2 {
        width:50%;
      }
      .colorr {
        color : red;
      }
      .colorb {
        color : blue;
      }
      .colorg {
        color : green;
      }

      .colorA {
        color : aqua;
      }
      .colorL {
        color : lime;
      }
      .colorC {
        color : coral;
      }
    `;
  }

  static get properties() {
    return {
    color1 : {type:String},
    color2 : {type:String},
    color3 : {type:String},
    handleDisable : {type:Boolean},
    conteo: {type:Number},
    };
  }

  constructor() {
    super();
    this.color1 = 'colorr';
    this.color2 = 'colorb';
    this.color3 = 'colorg';
    this.handleDisable = false;
    this.conteo =0;
  }

  render() {
    return html`
      <div class="containcol">
        <div class="col1">
            <img src="./src/descarga.jpg">
        </div>
        <div class="col2">
            <p class="${this.color1}">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
            <p class="${this.color2}">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
            <p class="${this.color3}">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
            <button-component @changeColors="${e => this.changueColors()}"></button-component>
            <button @click ="${e => this.contador(e)}" ?disabled=${this.handleDisable}>Clicks</button>
            <button @click ="${e => this.reiniciar()}" >Reinicio</button>
        </div>
      </div>
    `;
  }

  changueColors(){
    this.color1 = 'colorA';
    this.color2 = 'colorL';
    this.color3 = 'colorC';
  }

  contador(e){
    this.conteo++;
    if(this.conteo>=3){
      this.handleDisable=true;
      console.log("clicks", this.conteo);
    }
  }

  reiniciar(){
    this.conteo=0;
    this.handleDisable=false;
  }
}

customElements.define(ContentComponent.is, ContentComponent);
export default ContentComponent