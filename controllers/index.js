'use strict';

import {Orchestra, $} from 'jspm-test';

export default Orchestra.Controller.extend({

  initialize() {
    console.log('controller initialized');
    this.checkJquery();
  },

  doSomething() {
    console.log('SOMETHING');
  },

  checkJquery() {
    console.log($);
  }

});
