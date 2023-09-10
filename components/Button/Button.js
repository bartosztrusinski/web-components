class StyledButton extends HTMLButtonElement {
  constructor() {
    super();

    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', 'components/Button/Button.css');

    this.setAttribute('type', this.getAttribute('type') || 'button');
    this.appendChild(linkElem);
    this.classList.add('btn');
  }

  connectedCallback() {
    this.addEventListener('click', this.handleClick);
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.handleClick);
  }

  handleClick() {
    this.classList.toggle('btn--clicked');
  }
}

customElements.define('styled-btn', StyledButton, { extends: 'button' });
