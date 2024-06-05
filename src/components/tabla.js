import { LitElement, html, css } from 'lit';

class TablaInteractiva extends LitElement {
  static styles = css`
  .tabla{
    display: block;
    font-family: Arial, sans-serif;
    padding: 16px;
    max-width: 600px;
    margin: auto;
  }

  h1 {
    text-align: center;
    color: #333;
  }

  .fila-entrada {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .fila-entrada input {
    flex: 1;
    padding: 8px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .fila-entrada button {
    padding: 8px 16px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .fila-entrada button:hover {
    background-color: #45a049;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }

  th, td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tr:hover {
    background-color: #f1f1f1;
  }

  .boton-eliminar {
    background-color: #f44336;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .boton-eliminar:hover {
    background-color: #d32f2f;
  }
`;;

  constructor() {
    super();
    this.datosTabla = [];
  }

  render() {
    return html`
    <div class="tabla">
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
    </div>
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