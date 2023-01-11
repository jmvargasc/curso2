import { LitElement, html, css } from 'lit-element';
import '../button-comp/button-comp.js';
class BodyComp  extends LitElement {

  static get is() {
    return 'body-comp';
  }

  static get properties() {
    return {
      color1 :{type : String},
      color2 :{type : String},
      color3 :{type : String},
      estado :{type : String},
      numero :{type : Number},
    };
  }

  constructor() {
    super();
    this.color1="red";
    this.color2="blue";
    this.color3="green";
    this.estado="active";
    this.numero=0;
  }

  static get styles() {
    return css` `;
  }

  deshabilitar(){
    this.estado="disabled";
    setTimeout(()=>{
      this.color1="red"; this.color2="blue"; this.color3="green";
      this.estado="active";
      this.numero=0;
    },3000);
  }

  cambiar_color(){
    if(this.numero+1==3){
      this.numero++;
      this.deshabilitar();
    }else{
      this.numero++;
      console.log("Hola");
      this.color1="white";
      this.color2="white";
      this.color3="white";
    }
  }

  render() {
    return html`
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>      
    
    <div class="container">
      <div class="row justify-content-center">
          <div class="col-12"><span class="p-1"> </span></div>
          
          <div class="col-12 pb-1">
            <table>
              <tr>
                <td><img src="https://mexico.infoagro.com/wp-content/uploads/2017/01/Produccion-de-naranja.jpg"></td>
                <td>
                  <p style="color:${this.color1}">1.-loremipsu</p>
                  <p style="color:${this.color2}">2.-loremipsu</p>
                  <p style="color:${this.color3}">3.-loremipsu</p>
                  <p style="color:${this.color3}">${this.numero}</p>
                </td>
              </tr>
            </table>
          </div>

          <div class="col-1 pb-1">
            <button-comp @click="${()=>{this.cambiar_color()}}" estado="${this.estado}" name="Contar" btn="btn-outline-success"></button-comp> <br>
          </div>
          <div class="col-1 pb-1">
            <button-comp @click="${()=>{this.numero=0; this.color1="red"; this.color2="blue"; this.color3="green";}}" name="restaurar" btn="btn-outline-primary"></button-comp>
          </div>

          
          <div class="col-12"><span class="p-1"> </span></div>
      </div>
    </div>

    
    `;
  }
}

customElements.define(BodyComp.is, BodyComp);
export default BodyComp