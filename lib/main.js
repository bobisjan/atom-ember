'use babel';

import { CompositeDisposable } from 'atom';

export default {

  subscriptions: null,

  activate(state) {
    this.subscriptions = new CompositeDisposable();
  },

  deactivate() {
    this.subscriptions.dispose();
  }

};
