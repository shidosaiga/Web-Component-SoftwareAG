// api-viewer.js
class ApiViewer extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: flex;
            justify-content: space-between;
            margin: 20px;
          }
  
          #left-panel, #right-panel {
            width: 48%;
            padding: 10px;
            border: 1px solid #ccc;
            box-sizing: border-box;
            overflow-y: auto;
          }
         
  
          #url-input, #json-input, #response-view {
            width: 100%;
            margin-bottom: 10px;
          }
  
          #url-input, #json-input, #execute-button {
            margin-bottom: 10px;
          }
  
          #execute-button {
            padding: 10px;
            background-color: #4CAF50;
            color: white;
            cursor: pointer;
          }
  
          #response-view {
            white-space: pre-wrap;
          }
        </style>
        <div id="left-panel">
          <input id="url-input" type="text" placeholder="Enter API URL">
          <label for="http-method">HTTP Method:</label>
          <select id="http-method">
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
              <option value="DELETE">DELETE</option>
          </select>

          <textarea id="json-input" placeholder="Enter JSON Raw"></textarea>
          <button id="execute-button">GET</button>
        </div>
        <div id="right-panel">
          <pre id="response-view"></pre>
        </div>
      `;

        // Attach event listener to the button
        this.shadowRoot.getElementById('execute-button').addEventListener('click', this.executeRequest.bind(this));
    }

    executeRequest() {
        const urlInput = this.shadowRoot.getElementById('url-input').value;
        const jsonInput = this.shadowRoot.getElementById('json-input').value;
        const responseView = this.shadowRoot.getElementById('response-view');

        // Assuming the API supports only GET requests for simplicity
        fetch(urlInput, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                // Add additional options as needed
            })
            .then(response => response.json())
            .then(data => {
                responseView.textContent = JSON.stringify(data, null, 2);
            })
            .catch(error => {
                responseView.textContent = `Error: ${error.message}`;
            });
    }
}

customElements.define('api-viewer', ApiViewer);