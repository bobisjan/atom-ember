'use babel';

import { CompositeDisposable } from 'atom';

import StatusBar from './status-bar';

const EMBER_CLI_BUILD = 'ember-cli-build.js';


export default {

  subscriptions: null,

  statusBar: null,

  activate(state) {
    this.subscriptions = new CompositeDisposable();
    this.directory = this.findDirectoryWithEmberProject();
  },

  deactivate() {
    this.subscriptions.dispose();
    this.statusBar.destroy();
  },

  consumeStatusBar(statusBar) {
    let { tooltips } = atom;
    let { directory } = this;

    this.statusBar = new StatusBar({ statusBar, tooltips, directory });
  },

  findDirectoryWithEmberProject() {
    let { project } = atom;

    for (let directory of project.getDirectories()) {
      let file = directory.getFile(EMBER_CLI_BUILD);

      if (file.existsSync()) {
        return directory;
      }
    }
  }

};
