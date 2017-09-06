'use babel';


export default class {

  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add('atom-ember', 'status-bar-tile', 'inline-block');

    let title = document.createElement('div');
    title.textContent = 'Ember';

    this.element.appendChild(title);
  }

  destroy() {
    this.element.remove();
  }

}
