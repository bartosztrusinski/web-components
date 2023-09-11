class ExpandingList extends HTMLUListElement {
  constructor() {
    super();

    const linkElement = document.createElement('link');
    linkElement.setAttribute('rel', 'stylesheet');
    linkElement.setAttribute(
      'href',
      'components/ExpandingList/ExpandingList.css'
    );

    this.appendChild(linkElement);
    this.classList.add('expanding-list');
  }

  connectedCallback() {
    const liElements = this.querySelectorAll('li');

    liElements.forEach((li) => {
      li.classList.remove('expandable', 'closed');
      if (li.querySelector('ul')) {
        li.classList.add('expandable', 'closed');
      }
    });

    this.addEventListener('click', this.handleClick);
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.handleClick);
  }

  handleClick(event) {
    if (event.target.classList.contains('expandable')) {
      event.target.classList.toggle('closed');
    }
  }
}

customElements.define('expanding-list', ExpandingList, { extends: 'ul' });
