class ExpandingList extends HTMLUListElement {
  constructor() {
    super();

    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', 'components/ExpandingList/ExpandingList.css');

    this.appendChild(linkElem);
    this.classList.add('expanding-list');
  }

  connectedCallback() {
    const lis = this.querySelectorAll('li');

    lis.forEach((li) => {
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
