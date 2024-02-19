// Define the custom component
class RESTAPIComponent extends HTMLElement {
    constructor() {
        super();

        // Attach shadow DOM
        this.attachShadow({ mode: 'open' });

        // Set initial state
        this._data = null;

        // Fetch data from the JSONPlaceholder API
        this.fetchData();

        // Render the component
        this.render();
    }

    // Method to fetch data from the JSONPlaceholder API
    async fetchData() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            this._data = await response.json();

            // Re-render the component with the fetched data
            this.render();
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // Method to render the component
    render() {
            this.shadowRoot.innerHTML = `
        <style>
          /* Your component styles here */
          :host {
            display: block;
            padding: 16px;
            border: 1px solid #ccc;
            border-radius: 4px;
            margin-bottom: 16px;
          }
  
          ul {
            list-style-type: none;
            padding: 0;
          }
  
          li {
            margin-bottom: 8px;
          }
        </style>
        <div>
          <h2>TODOs from JSONPlaceholder API</h2>
          <ul>
            ${this._data ? this._data.map(todo => `<li>${todo.title}</li>`).join('') : 'Loading...'}
          </ul>
        </div>
      `;
    }
  }
  
  // Define the custom element
  customElements.define('rest-api-component', RESTAPIComponent);