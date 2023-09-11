class Card extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'closed' });
    const templateElement = document.getElementById('card-template');
    const instance = templateElement.content.cloneNode(true);

    shadowRoot.appendChild(instance);
  }
}

customElements.define('custom-card', Card);
