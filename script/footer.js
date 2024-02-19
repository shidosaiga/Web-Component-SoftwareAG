// footer-component.js
class CustomFooter extends HTMLElement {
    constructor() {
        super();

        // Create a shadow root
        this.attachShadow({ mode: 'open' });

        // Define the HTML template
        this.render();
    }
    render() {
        this.shadowRoot.innerHTML = `
      <style>
        /* Add your styling here */
        .social-icons {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .social-icons a {
          margin-left: 20px;
        }

        .social-icons img {
          height: 50px;
          width: 50px;
        }
      </style>

      <div class="social-icons">
      <a href="https://www.facebook.com/bankofthailandofficial" target="_blank"><img src="https://cdn-icons-png.flaticon.com/256/59/59439.png" alt=""></a>
      <a href="https://twitter.com/bankofthailand" target="_blank"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/twitter-icon.png" alt=""></a>
      <a href="https://www.youtube.com/@BankofThailandofficial" target="_blank"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-icon.png" alt=""></a>
      <a href="https://www.instagram.com/bankofthailand.official/" target="_blank"><img src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-512.png" alt=""></a>
      <a href="https://page.line.me/bankofthailand" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/82/82105.png" alt=""></a>
    </div>

    `;
    }
}

// Define the custom element
customElements.define('custom-footer', CustomFooter);