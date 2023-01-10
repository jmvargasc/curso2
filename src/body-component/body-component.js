import { LitElement, html, css } from 'lit-element';
import styles from './body-component-style.js'
import '../button-component/button-component.js'

class BodyComponent  extends LitElement {

  static get styles() {
    return [
        styles,
      ]
  }

  static get properties() {
    return {
        colores : {type: Array},
        counter: {type: Number},
        unavaible: {type: Boolean}
    };
  }

  constructor() {
    super();
    this.colores=["rgb(0,0,255)","rgb(0,255,255)","rgb(255,0,255)"];
    this.counter=0;
    this.unavaible= false;
  }
  randomInt(){
    return Math.floor(Math.random() * (254 - 1 + 1) + 1)
  }
  
  changeColor(){
    this.colores=[]
    let color1 = "rgb("+this.randomInt()+","+this.randomInt()+","+this.randomInt()+")";
    let color2 = "rgb("+this.randomInt()+","+this.randomInt()+","+this.randomInt()+")";
    let color3 = "rgb("+this.randomInt()+","+this.randomInt()+","+this.randomInt()+")";
    this.colores.push(color1)
    this.colores.push(color2)
    this.colores.push(color3)
  }
  addCounter(){
    if(this.counter<=2){
      this.counter+=1;
      console.log(this.counter)
    }
    if(this.counter==3){
      this.unavaible=true;
    }
  }
  resetCounter(){
    this.counter=0;
    this.colores=["rgb(0,0,255)","rgb(0,255,255)","rgb(255,0,255)"];
    this.unavaible=false;
  }

  render() {
    return html`
    <div class="container">
        <div class="caja">
            <img class= "pic" src="https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" alt="gato .jpg"></img>
        </div>
        <div class="caja">
            ${this.colores.map((color)=>
                html `
                    <p class="dummyText" style="color: ${color}"> Text dummy </p>
                `
            )}
        </div>
    </div>
    <p class="counter">${this.counter}</p>
    <button-component @click="${this.changeColor}" .text="${"Cambiar Color"}" ></button-component>
    <button-component @click="${this.addCounter}" .text="${"Up Counter"}" .state="${this.unavaible}"></button-component>
    <button-component @click="${this.resetCounter}" .text="${"Reset Counter"}" .state="${!this.unavaible}"></button-component>
    `;
  }
}

customElements.define('body-component', BodyComponent);