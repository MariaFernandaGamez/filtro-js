import { LitElement, html, css } from 'lit';

class ApiDataList extends LitElement {
  static styles = css`
    .container { font-family: Arial, sans-serif; }
    .list-item { cursor: pointer; padding: 10px; border: 1px solid #ccc; margin: 5px 0; }
    .list-item:hover { background-color: #f0f0f0; }
    .details { margin-top: 10px; }
    button { margin-top: 10px; padding: 10px; }
  `;

  render() {
    return html`
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
