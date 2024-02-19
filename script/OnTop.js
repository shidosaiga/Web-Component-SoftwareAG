// scroll-to-top.js
class ScrollToTop extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });

        shadowRoot.innerHTML = `
        <style>
          #myBtn {
            display: none;
            position: fixed;
            bottom: 20px;
            right: 30px;
            z-index: 99;
            font-size: 18px;
            border: none;
            outline: none;
            background-color: #1776bf;
            color: white;
            cursor: pointer;
            padding: 15px;
            border-radius: 4px;
          }
  
          #myBtn:hover {
            background-color: #555;
          }
        </style>
        <button id="myBtn" title="Go to top">Top</button>
        
      `;

        this.mybutton = shadowRoot.getElementById("myBtn");

        window.addEventListener("scroll", () => this.scrollFunction());
        this.mybutton.addEventListener("click", () => this.topFunction());
    }

    connectedCallback() {
        // When the component is added to the DOM
    }

    disconnectedCallback() {
        // When the component is removed from the DOM
        window.removeEventListener("scroll", () => this.scrollFunction());
        this.mybutton.removeEventListener("click", () => this.topFunction());
    }

    scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            this.mybutton.style.display = "block";
        } else {
            this.mybutton.style.display = "none";
        }
    }

    topFunction() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

customElements.define('ontop-environment', ScrollToTop);