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
            <div class="secondary-accent-card" id="MenuBarItems">
                <text><a href="..">Home</a></text>
                <text class="menuBarSpacer"><a href=".."> - </a></text>
                <text><a href="../golf/game.html">Golf Game</a></text>
            </div>
        </div>
      `;
    }
  }
  
  customElements.define('header-component', Header);