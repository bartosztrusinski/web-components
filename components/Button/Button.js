class StyledButton extends HTMLButtonElement {
  constructor() {
    super();

    const linkElement = document.createElement('link');
    linkElement.setAttribute('rel', 'stylesheet');
    linkElement.setAttribute('href', 'components/Button/Button.css');

    this.appendChild(linkElement);
    this.setAttribute('type', this.getAttribute('type') || 'button');
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
