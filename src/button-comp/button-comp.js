import { LitElement, html, css } from 'lit-element';

class ButtonComp  extends LitElement {

  static get is() {
    return 'button-comp';
  }

  static get properties() {
    return {
      estado :{type : String},
      name :{type : String},
      btn :{type : String},
    };
  }

  constructor() {
    super();
    this.estado="active";
    this.name="Boton";
    this.name="info";
  }

  static get styles() {
    return css`
    `;
  }
  render() {
    return html`
    ${console.log(this.estado)}
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>      
    <button type="button" class="btn ${this.btn} ${this.estado}">${this.name}</button>
    `;
  }
}

customElements.define(ButtonComp.is, ButtonComp);
export default ButtonComp