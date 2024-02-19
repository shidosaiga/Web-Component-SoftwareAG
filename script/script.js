// Define the custom component
class YouTubeComponent extends HTMLElement {
    constructor() {
        super();

        // Attach shadow DOM
        this.attachShadow({ mode: 'open' });

        // Set initial state
        this._videoId = 'f_gN2-_UZIs'; // Replace with the actual YouTube video ID

        // Render the component
        this.render();
    }

    // Method to render the component
    render() {
        this.shadowRoot.innerHTML = `
      <style>
        /* Your component styles here */
       

        iframe {
          width: 1200px;
          height: 600px; /* Set a specific height or adjust as needed */
          display: block;
          margin-bottom: 8px;
          border-radius: 12px;
        }
      </style>
      <div>
        <iframe
          
          src="https://www.youtube.com/embed/${this._videoId}"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    `;
    }
}

// Define the custom element
customElements.define('youtube-component', YouTubeComponent);