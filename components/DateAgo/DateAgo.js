const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const MONTH = DAY * 30.4375;
const YEAR = MONTH * 12;
const DATE_FORMATS = ['year', 'month', 'day'];
const formatter = Intl.DateTimeFormat('default', { dateStyle: 'long' });
const prefix = `<link rel="stylesheet" href="components/DateAgo/DateAgo.css"><p class="container">`;
const suffix = `</p>`;

const formatDateAgo = (date) => {
  const yearsAgo = Math.floor(date / YEAR);
  date -= yearsAgo * YEAR;

  const monthsAgo = Math.floor(date / MONTH);
  date -= monthsAgo * MONTH;

  const daysAgo = Math.floor(date / DAY);
  date -= daysAgo * DAY;

  const dateAgo = [yearsAgo, monthsAgo, daysAgo];
  const formattedDateAgo = dateAgo
    .map((formatAgo, index) =>
      formatAgo === 0
        ? ''
        : `<span class="pill ${DATE_FORMATS[index]}">
            ${formatAgo} ${DATE_FORMATS[index]}${
            formatAgo > 1 ? 's' : ''
          }</span>`
    )
    .filter(Boolean)
    .join(', ')
    .replace(/,([^,]*)$/, ' and$1');

  return formattedDateAgo;
};

class DateAgo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const date = this.getAttribute('date');

    if (!date) {
      this.shadowRoot.innerHTML = `${prefix}⌚ No date provided.${suffix}`;
      return;
    }

    if (!Date.parse(date)) {
      this.shadowRoot.innerHTML = `${prefix}⌚ Invalid date provided.${suffix}`;
      return;
    }

    const relativeDate = Date.now() - new Date(date).getTime();
    const dateAgoText = formatDateAgo(relativeDate);
    const formattedDate = formatter.format(new Date(date));

    this.shadowRoot.innerHTML = `${prefix}<time class="date" datetime=${date}>⌚ ${formattedDate}</time> was ${dateAgoText} ago.${suffix}`;
  }
}

customElements.define('date-ago', DateAgo);
