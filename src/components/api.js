// Crear un Web Component que Obtenga y Muestre Datos de una API.

// Url Api : https://jsonplaceholder.typicode.com/users

// Crear un Web Component que obtenga datos de una API pública utilizando `fetch` y los muestre en una lista interactiva. El componente debe permitir actualizar los datos desde la API y mostrar detalles adicionales cuando se haga clic en un elemento de la lista.

// **Instrucciones**:

// 1. Define un nuevo elemento llamado `<api-data-list>`.
// 2. Usa el Shadow DOM para encapsular el estilo y la estructura del componente.
// 3. El componente debe hacer una solicitud a una API pública utilizando `fetch` para obtener una lista de elementos.
// 4. Muestra los elementos en una lista dentro del componente.
// 5. Cada elemento de la lista debe ser interactivo: al hacer clic, debe mostrar detalles adicionales del elemento.
// 6. El componente debe tener un botón para actualizar los datos desde la API.

import { LitElement, html, css } from 'lit';

class ApiDataList extends LitElement { 
    static styles = css`
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    `
    constructor(){
        super();
        this.users = [];
    }
    render() { 
        return html`
            <ul>
                ${this.users.map((user) => html`
                    <li>
                        <h2>${user.name}</h2>
                        <p>${user.email}</p>
                        <p>${user.phone}</p>
                        <p>${user.website}</p>
                    </li>
                `)}
            </ul>
            <button @click=${this.updateUsers}>Actualizar</button>
        `;
        
    }

}