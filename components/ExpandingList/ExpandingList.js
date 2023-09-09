class ExpandingList extends HTMLUListElement {
  constructor() {
    super();

    const lis = this.querySelectorAll('li');

    lis.forEach((li) => {
      if (li.querySelector('ul')) {
        li.classList.add('expandable', 'closed');
      }
    });

    this.addEventListener('click', (e) => {
      if (e.target.classList.contains('expandable')) {
        e.target.classList.toggle('closed');
      }
    });

    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', 'components/ExpandingList/ExpandingList.css');

    this.appendChild(linkElem);
    this.classList.add('expanding-list');
  }
}

customElements.define('expanding-list', ExpandingList, { extends: 'ul' });
