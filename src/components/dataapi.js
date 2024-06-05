import { LitElement, html, css } from 'lit';

class ApiDataList extends LitElement {
  static styles = css`
  .formulario {
    display: block;
    font-family: Arial, sans-serif;
    padding: 16px;
    max-width: 800px;
    margin: auto;
  }

  h1 {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 20px;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #45a049;
  }

  #list-container {
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 10px;
    margin-bottom: 20px;
    background-color: #f9f9f9;
  }

  .list-item {
    padding: 10px;
    border-bottom: 1px solid #ddd;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .list-item:last-child {
    border-bottom: none;
  }

  .list-item:hover {
    background-color: #f1f1f1;
  }

  .details {
    width: 100%;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #f9f9f9;
  }
`;

  render() {
    return html`
    <div class="formulario">
    <h1>DATA API</h1>
      <div class="container">
        <button @click=${this.fetchData}>Actualizar Datos</button>
        <div id="list-container">
          ${this.data.map(item => html`
            <div class="list-item" @click=${() => this.showDetails(item)}>
              ${item.name}
            </div>
          `)}
        </div>
        <div id="details-container" class="details"></div>
      </div>
    </div>
    `;
  }

  static get properties() {
    return {
      data: { type: Array }
    };
  }

  constructor() {
    super();
    this.data = [];
  }

  async fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('No se pudieron obtener los datos de la API');
      }
      this.data = await response.json();
    } catch (error) {
      console.error('Error al obtener datos de la API:', error);
      alert('Ocurrió un error al obtener los datos de la API. Por favor, inténtalo de nuevo más tarde.');
    }
  }

  showDetails(item) {
    const detailsContainer = this.shadowRoot.getElementById('details-container');
    detailsContainer.innerHTML = `
      <h3>${item.name}</h3>
      <p>Email: ${item.email}</p>
      <p>Phone: ${item.phone}</p>
      <p>Website: ${item.website}</p>
      <p>Company: ${item.company.name}</p>
      <p>Address: ${item.address.street}, ${item.address.suite}, ${item.address.city}</p>
    `;
  }
}

customElements.define('api-data-list', ApiDataList);
