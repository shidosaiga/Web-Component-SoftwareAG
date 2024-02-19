// footer-component.js
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



class DropdownNavbar extends HTMLElement {
    constructor() {
        super();

        // Create a shadow root
        this.attachShadow({ mode: 'open' });

        // Define the HTML template
        this.render();

        // Register the scroll event listener
        window.addEventListener('scroll', this.myFunction.bind(this));
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                * {
                    padding: 0;
                    margin: 0;
                    font-family: sans-serif;
                }

                ul {
                    list-style: none;
                    background: rgba(86, 118, 160);
                    text-align: center;
                    border-radius: 10px;
                }

                ul li {
                    display: inline-block;
                    position: relative;
                    margin-right: 35px;
                }

                ul li a {
                    display: block;
                    padding: 20px 25px;
                    color: #FFF;
                    text-decoration: none;
                    text-align: center;
                    font-size: 16px;
                }

                ul li ul.dropdown li {
                    display: block;
                    background: rgba(86, 118, 160);
                    margin: 2px 0px;
                }

                ul li ul.dropdown {
                    width: auto;
                    position: absolute;
                    z-index: 999;
                    display: none;
                    border-radius: 10px;
                }

                ul li a:hover {
                    background: #e6f3ff;
                    color: rgba(86, 118, 160);
                    
                }

                ul li:hover ul.dropdown {
                    display: block;
                }

                .sticky {
                    position: fixed;
                    top: 5  ;
                    
                    width: 65%;
                    
                }

                .sticky + .content {
                    padding-top: 60px;
                    
                }
            </style>
            
            <div id="navbar">
            
                <ul>
                    <li><a href="/portal/pages/getstart">Getting started</a></li>
                    <li><a href="/portal/pages/guestabout">About</a></li>
                    <li>
                        <a href="/portal/pages/filtergallery">API gallery</a>
                        <ul class="dropdown">
                            <li><a href="/portal/pages/filtergallery">Filter gallery</a></li>
                            <li><a href="/portal/apis">Cards gallery</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="/portal/packages">API packages</a>
                        <ul class="dropdown">
                            <li><a href="/portal/packages">ALL Packages</a></li>
                        </ul>
                    </li> 
                    
                </ul>
            </div>
        `;
    }

    myFunction() {
        var navbar = this.shadowRoot.getElementById("navbar");
        var sticky = navbar.offsetTop;

        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }

}
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

customElements.define('google-translate', GoogleTranslateComponent);
customElements.define('dropdown-navbar', DropdownNavbar);
customElements.define('ontop-environment', ScrollToTop);