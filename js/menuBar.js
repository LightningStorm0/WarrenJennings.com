class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <div id="MenuBar">
            <div class="accent-card">
                <h1>Warren Jennings</h1>
            </div>
            <div class="secondary-accent-card">
                <text><b>Options bar<b></text>
            </div>
        </div>
      `;
    }
  }
  
  customElements.define('header-component', Header);