import {AbstractPortalElement} from '../../abstract.portal.element';

export class ApiGalleryItemElement extends AbstractPortalElement {

    private api: any;
    private navigator: { navigate: (_: string) => void };

    constructor() {
        super();
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    connectedCallback() {
        this.attachShadow({mode: 'open'});
    }

    render(): void {
        this.api = this.getData();
        this.shadowRoot.innerHTML = this.getTemplate();
        this.shadowRoot.querySelector('.container').addEventListener('click', (event) => {
            event.preventDefault();
            this.shadowRoot.querySelector('.container').classList.toggle('in');
        });
        this.shadowRoot.querySelector('a.view').addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = `/portal/apis/${this.api.id}`, '_blank';
        });
    }

    private getTemplate() {
        return `
        <style>
            
            :host {
                display: flex;
                border: 1px solid #CACACA;
                margin: 10px;
                align-items: center;
                border-radius: 14px;
            }
            .container {
             display: flex;
             
            }
            img {
                margin: 0 10px;
            }
            .collapse {
                display: inline-block;
                border: 1rem solid transparent;
                border-left-color: #4D4D4D;
                cursor: pointer;
                height: 0;
                width: 0;
                align-self: center;
                transition: all 0.5s ease-in-out;
                
            }
            .collapse-content {
                max-height: 0;
                overflow: hidden;
                transition: max-height 0.5s ease-in-out;
                padding: 0 10px;
            }
            .container.in .collapse {
                transform: rotateZ(90deg);
            }
            .container.in + .collapse-content {
                height: auto;
                max-height: 400px;
                overflow: auto;
            }
            .wrapper {
                display: flex;
                flex-direction: column;
                width: 100%;
                font-size: 16px;
                
            }
            .my-8p {
               margin-top: 0.5rem;
               margin-bottom: 0.5rem; 
            }
            .details {
                display: flex;
            }
            .detail {
                flex-grow: 1;
            }
            pre {
                align-self: center;
                margin: 0 5px;
            }
            a {
                text-decoration: none;
                color: var(--primary, #1789FF);
            }
            .button {
                border: none;
                color: white;
                padding: 15px 32px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                margin: 4px 2px;
                cursor: pointer;
              }
              
              .button1 {background-color: #04AA6D;} /* Green */
        </style>
        <div class="wrapper">
            <div class="container">
                <a href="javascript:;" class="collapse"></a>
                <img src="https://icons.veryicon.com/png/o/internet--web/internet-simple-icon/api-management.png" height="48" width="48"/>
                <p> <a href="/portal/apis/${this.api.id} " target="_blank" class="view">${this.api.name}</a> <pre>(${this.api.version})</pre></p>  
            </div>
            <div class="collapse-content">
                <h4 class="my-8p">Summary</h4>
                <small style=" font-size: 14px;"> ${this.api.summary} </small>
                
                <div class="details my-8p">
                    <div class="detail">
                           <h4 class="my-8p">Type</h4>
                           <div style="height: 80px; overflow: hidden;">
                            <small style=" font-size: 14px;">${this.api.type}</small>
                           <div>
                    </div>
                    <div class="detail">
                           <h4 class="my-8p">Number of Resources</h4>
                           <small style=" font-size: 14px;">${this.api.resourceIds?.length}</small>     
                    </div>
                    <div class="detail">
                           <h4 class="my-8p">Is Protected?</h4>
                           <small style=" font-size: 14px;">${this.api.securitySchemes?.length ? 'Yes' : 'No'}</small>     
                    </div>
                    
                </div>
            </div>
        </div>
    `;
    }
}
