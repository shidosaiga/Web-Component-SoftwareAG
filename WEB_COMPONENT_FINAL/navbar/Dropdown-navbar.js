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
customElements.define('dropdown-navbar', DropdownNavbar);