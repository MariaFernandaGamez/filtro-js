// Crear una Galería de Imágenes con Web Components

// Crear un Web Component que muestre una galería de imágenes con la funcionalidad de navegación y visualización de imágenes en un modal.

// **Instrucciones**:

// 1. Define un nuevo elemento llamado `<image-gallery>`.
// 2. Usa el Shadow DOM para encapsular el estilo y la estructura del componente.
// 3. El componente debe aceptar una lista de URLs de imágenes como un atributo.
// 4. Debe mostrar miniaturas de las imágenes.
// 5. Al hacer clic en una miniatura, debe abrirse un modal con la imagen ampliada y permitir navegar entre las imágenes.


 import { LitElement, html, css } from 'lit';
 

class ImageGallery extends LitElement {
  static styles = css`
    .miniaturas {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      margin-left:50px;
    }

    .miniatura {
      margin: 5px;
      cursor: pointer;
    }

    .miniatura img {
      width: 350px;
      height: 330px;
    }

    .modal {
      display: none;
      position: fixed;
      z-index: 2;
      top: 100px;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.9);
      overflow: auto;
      text-align:center;
    }

    .modal-content {
      display: block;
      margin-top: 100px;
      margin-left: 350px;
      width: 80%;
      max-width: 800px;
    }

    .modal-content img {
      width: 750px;
      height: 700px;
    }
  `;

  static properties = {
    images: { type: Array },
    currentImageIndex: { type: Number }
  };

  constructor() {
    super();
    this.images = [];
    this.currentImageIndex = 0;
  }

  render() {
    return html`
      <h1>GALERIA</h1>
      <div class="miniaturas">
        ${this.images.map((image, index) => html`
          <div class="miniatura" @click=${() => this.openModal(index)}>
            <img src=${image.img}>
          </div>
        `)}
      </div>
      <div class="modal" @click=${() => this.closeModal()}>
        <div class="modal-content">
          <span class="close">&times;</span>
          <img id="modal-image" src=${this.images[this.currentImageIndex]?.img}>
          <button @click=${() => this.navigate(-1)} id="prev">Anterior</button>
          <button @click=${() => this.navigate(1)} id="next">Siguiente</button>
        </div>
      </div>
    `;
  }

  openModal(index) {
    this.currentImageIndex = index;
    this.shadowRoot.querySelector('.modal').style.display = 'block';
  }

  closeModal() {
    this.shadowRoot.querySelector('.modal').style.display = 'none';
  }

  navigate(direction) {
    const newIndex = this.currentImageIndex + direction;
    if (newIndex >= 0 && newIndex < this.images.length) {
      this.currentImageIndex = newIndex;
      this.updateModalImage();
    }
  }

  updateModalImage() {
    this.shadowRoot.getElementById('modal-image').src = this.images[this.currentImageIndex]?.img;
  }
}



customElements.define('image-gallery', ImageGallery);





