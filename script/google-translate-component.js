class GoogleTranslate extends HTMLElement {
    constructor() {
        super();

        // Load the Google Translate script dynamically
        const script = document.createElement('script');
        script.src = 'https://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate';
        script.async = true;
        document.head.appendChild(script);

        // Create a shadow DOM for encapsulation
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        // Create a container div for the Google Translate widget
        const container = document.createElement('div');
        container.id = 'google-translate';

        // Append the container to the shadow DOM
        this.shadowRoot.appendChild(container);
    }
}

// Define the custom element
customElements.define('google-translate', GoogleTranslate);