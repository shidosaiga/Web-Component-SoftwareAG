// HttpRequestComponent.js
class HttpRequestComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.sendRequest = this.sendRequest.bind(this);
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>
        input[type=text] {
            width: 100%;
            padding: 12px 20px;
            margin: 8px 0;
            box-sizing: border-box;
          }
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            height: 100vh;
        }
        :host {
            display: flex;
            justify-content: space-between;
            margin: 20px;
          }
        
        #left-panel,
        #right-panel {
            flex: 1;
            height: 100%;
            overflow: hidden;
        }
        
        #left-panel {
            border-right: 1px solid #ccc;
            padding: 20px;
        }
        
        #right-panel {
           
            max-height: 880px;
            overflow-y: scroll;
            overflow-x: scroll;
        }
        
        textarea {
            width: 100%;
            height: 380px;
        }
        
        button {
            margin-top: 10px;
            padding: 10px;
            cursor: pointer;
        }
        
        select {
            width: 100%;
            padding: 10px;
            margin-top: 10px;
        }
    </style>

    <div id="left-panel">
        <label for="api-url">API URL:</label>
        <input type="text" id="api-url" placeholder="Enter API URL">

        <label for="http-method">HTTP Method:</label>
        <select id="http-method">
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
        </select>

        <label for="json-input">JSON Raw:</label>
        <textarea id="json-input" placeholder="Enter JSON raw data"></textarea>

        <button id="send-request-btn">Send Request</button>
    </div>

    <div id="right-panel">
        <h2>Response:</h2>
        <pre id="response-view"></pre>
    </div>
        `;

        // Add a click event listener to the button
        this.shadowRoot.getElementById('send-request-btn').addEventListener('click', this.sendRequest);
    }

    sendRequest() {
        const apiUrl = this.shadowRoot.getElementById('api-url').value;
        const httpMethod = this.shadowRoot.getElementById('http-method').value;
        const jsonInput = this.shadowRoot.getElementById('json-input').value;

        fetch(apiUrl, {
                method: httpMethod,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: httpMethod !== 'GET' ? jsonInput : undefined,
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                this.shadowRoot.getElementById('response-view').innerText = JSON.stringify(data, null, 2);
            })
            .catch(error => {
                this.shadowRoot.getElementById('response-view').innerText = `Error: ${error.message}`;
            });
    }
}

customElements.define('http-request-component', HttpRequestComponent);