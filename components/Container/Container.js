class Container extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          padding: 1rem;
        }
      </style>
      <slot></slot>`;
  }
}

customElements.define('content-container', Container);
