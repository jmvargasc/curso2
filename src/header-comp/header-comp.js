import { LitElement, html, css } from 'lit-element';

class HeaderComp  extends LitElement {

  static get is() {
    return 'header-comp';
  }

  static get properties() {
    return {};
  }
    
  static get styles() {
    return css`
      
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>      
     
    <nav class="rounded container navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">APP L&E</a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link btn" aria-current="page" >Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link btn">Nosotros</a>
            </li>
            <li class="nav-item">
              <a class="nav-link btn">Ayuda</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
          
        </div>
      </div>
    </nav>
    `;
  }
}

  

customElements.define(HeaderComp.is, HeaderComp);
export default HeaderComp



/*        <ul class="d-flex navbar-nav mb-2 mb-lg-0">
            <li class="nav-link">
              <a href="https://www.facebook.com" target="blank"><img src="./src/imagenes/uno.png" class="imagen"></a>
            </li>
            <li class="nav-link">
              <a href="https://twitter.com" target="blank"><img src="./src/imagenes/dos.png" class="imagen"></a>
            </li>
            <li class="nav-link">
              <a href="https://www.youtube.com" target="blank"><img src="./src/imagenes/tres.png" class="imagen"></a>
            </li>
          </ul> */