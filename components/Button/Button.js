class StyledButton extends HTMLButtonElement {
  constructor() {
    super();

    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', 'components/Button/Button.css');

    this.appendChild(linkElem);
    this.classList.add('btn');
  }
}

customElements.define('styled-btn', StyledButton, { extends: 'button' });
