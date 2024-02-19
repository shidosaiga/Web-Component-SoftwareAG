// translation-element.js

class TranslationElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.loadGoogleTranslateScript();
    }

    render() {
        this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: fixed;
          top: 10px;
          right: 10px;
        }
      </style>
      <div id="google_translate_element"></div>
    `;
    }

    loadGoogleTranslateScript() {
        const script = document.createElement('script');
        script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        document.head.appendChild(script);
    }

    googleTranslateElementInit() {
        new google.translate.TranslateElement({
            pageLanguage: 'th,en',
            includedLanguages: 'th,en',
        }, this.shadowRoot.getElementById('google_translate_element'));
    }
}

customElements.define('translation-element', TranslationElement);