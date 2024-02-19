class GoogleTranslateComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        // Create the container div
        const translateContainer = document.createElement('div');
        translateContainer.id = 'google_translate_element';
        this.appendChild(translateContainer);

        // Create the style element for positioning
        // const style = document.createElement('style');
        // style.textContent = `
        //     google-translate {
        //         position: fixed;
        //         top: 10px;
        //         right: 10px;
        //         z-index: 9999; /* Adjust the z-index as needed */
        //     }
        // `;
        // this.appendChild(style);

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