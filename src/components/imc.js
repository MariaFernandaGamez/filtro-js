import { LitElement, html, css } from 'lit';

class IMCComponent extends LitElement {
  static properties = {
    peso: { type: Number },
    altura: { type: Number },
    imc: { type: Number },
    categoria: { type: String },
    imageSrc: { type: String }
  };

  constructor() {
    super();
    this.peso = 0;
    this.altura = 0;
    this.imc = null;
    this.categoria = '';
    this.imageSrc = '';
  }

  static styles = css`
    form {
      display: flex;
      flex-direction: column;
      max-width: 300px;
      margin: auto;
    }
    label, input, button {
      margin: 10px 0;
    }
    .result {
      margin-top: 20px;
      text-align: center;
    }
    img {
      max-width: 100px;
      margin-top: 10px;
    }
  `;

  handlePesoInput(event) {
    this.peso = parseFloat(event.target.value);
  }

  handleAlturaInput(event) {
    this.altura = parseFloat(event.target.value);
  }

  calcularIMC() {
    if (this.peso > 0 && this.altura > 0) {
      this.imc = this.peso / (this.altura * this.altura);
      this.categoria = this.getCategoriaIMC(this.imc);
      this.imageSrc = this.getImageSrc(this.categoria);
    } else {
      this.imc = null;
      this.categoria = 'Datos inválidos';
      this.imageSrc = '';
    }
  }

  getCategoriaIMC(imc) {
    if (imc < 18.5) {
      return 'Bajo Peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
      return 'Normal';
    } else if (imc >= 25 && imc <= 29.9) {
      return 'Sobrepeso';
    } else if (imc >= 30 && imc <= 34.9) {
      return 'Obesidad';
    } else if (imc >= 35 && imc <= 39.9) {
      return 'Obesidad Severa';
    } else if (imc >= 40) {
      return 'Obesidad Mórbida';
    } else {
      return 'Datos inválidos';
    }
  }

  getImageSrc(categoria) {
    switch (categoria) {
      case 'Bajo Peso':
        return '/images/bajo-peso.jpg';
      case 'Normal':
        return '/images/normal.jpg';
      case 'Sobrepeso':
        return '/images/obesidad.jpg';
      case 'Obesidad':
        return '/images/obesidad.jpg';
      case 'Obesidad Severa':
        return '/images/obesidad.jpg';
      case 'Obesidad Mórbida':
        return '/images/obesidad.jpg';
      default:
        return '';
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.calcularIMC();
  }

  render() {
    return html`
    <h1>CALCULO DE IMC</h1>
      <form @submit=${this.handleSubmit}>
        <label for="peso">Ingrese su peso en Kg:</label>
        <input type="number" id="peso" name="peso" @input=${this.handlePesoInput} />

        <label for="altura">Ingrese su altura en metros:</label>
        <input type="number" id="altura" name="altura" @input=${this.handleAlturaInput} step="0.01" />

        <button type="submit">Calcular</button>
      </form>

      ${this.imc !== null ? html`
        <div class="result">
          <p>Su IMC es: ${this.imc.toFixed(2)}</p>
          <p>Su categoría es: ${this.categoria}</p>
          ${this.imageSrc ? html`<img src="${this.imageSrc}" alt="Imagen de categoría IMC" />` : ''}
        </div>
      ` : ''}
    `;
  }
}

customElements.define('imc-calculo', IMCComponent);

