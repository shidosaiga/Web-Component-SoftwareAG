class GoogleTranslateComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        // Create the container div
        const translateContainer = document.createElement('div');
        translateContainer.id = 'google_translate_element';
        this.appendChild(translateContainer);



        // Create the script for Google Translate API
        const script = document.createElement('script');
        script.text = `
            function googleTranslateElementInit() {
                new google.translate.TranslateElement(
                    { pageLanguage: 'en,th', includedLanguages: 'en,th' },
                    'google_translate_element'
                );
            }
        `;
        this.appendChild(script);

        // Create the script for loading the translation library
        const translateScript = document.createElement('script');
        translateScript.src = 'http://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        this.appendChild(translateScript);
    }
}

customElements.define('google-translate', GoogleTranslateComponent);