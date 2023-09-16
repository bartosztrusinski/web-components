class Item extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  get title() {
    return this.getAttribute('title');
  }

  set title(value) {
    this.h2.textContent = value;
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
    <style>
      :host {
        border: 0.125rem dashed var(--item-border-color, hsl(210, 17%, 98%));
        padding: 0.5rem 1rem 1rem;
      }
      
      h2 {
        margin: 0 0 0.5rem;
      }

      h2:first-letter {
        text-transform: uppercase;
      }
    </style>
    <h2>${this.title || 'No title provided'}</h2>
    <slot></slot>`;

    this.h2 = this.shadowRoot.querySelector('h2');
  }

  static get observedAttributes() {
    return ['title'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      if (this.h2) {
        this.title = newValue;
      }
    }
  }
}

customElements.define('item-container', Item);
