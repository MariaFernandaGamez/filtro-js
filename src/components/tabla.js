import { LitElement, html, css } from 'lit';

class TablaInteractiva extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 15px;
    }

    th, td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }

    th {
      background-color: #f2f2f2;
    }

    .fila-entrada {
      display: flex;
      margin-bottom: 10px;
    }

    .fila-entrada input {
      margin-right: 10px;
    }

    .boton-eliminar {
      background-color: #f44336;
      color: white;
      border: none;
      cursor: pointer;
    }

    .boton-eliminar:hover {
      background-color: #da190b;
    }
  `;

  constructor() {
    super();
    this.datosTabla = [];
  }

  render() {
    return html`
    <h1>TABLA</h1>
      <div class="fila-entrada">
        <input id="nombre-input" type="text" placeholder="Nombre">
        <input id="edad-input" type="text" placeholder="Edad">
        <button @click="${this.agregarFila}">Agregar</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          ${this.datosTabla.map((fila, indice) => html`
            <tr>
              <td>${fila.nombre}</td>
              <td>${fila.edad}</td>
              <td><button class="boton-eliminar" @click="${() => this.eliminarFila(indice)}">Eliminar</button></td>
            </tr>
          `)}
        </tbody>
      </table>
    `;
  }

  agregarFila() {
    const nombreInput = this.shadowRoot.getElementById('nombre-input').value.trim();
    const edadInput = this.shadowRoot.getElementById('edad-input').value.trim();
    if (nombreInput && edadInput) {
      this.datosTabla = [...this.datosTabla, { nombre: nombreInput, edad: edadInput }];
      this.requestUpdate();
      this.shadowRoot.getElementById('nombre-input').value = '';
      this.shadowRoot.getElementById('edad-input').value = '';
    }
  }

  eliminarFila(indice) {
    this.datosTabla.splice(indice, 1);
    this.requestUpdate();
  }
}


customElements.define('tabla-dinamica', TablaInteractiva);