'use babel';

import Tile from './tile';


export default class {

  constructor({ statusBar, tooltips, directory }) {
    let tile = new Tile();
    let title = 'Ember project not detected!';

    if (directory) {
      title = 'Ember project detected!';
    }

    this.tile = statusBar.addRightTile({ item: tile.element });
    this.tooltip = tooltips.add(tile.element, { title })
  }

  destroy() {
    this.tooltip.dispose();
    this.tile.destroy();
  }

}
