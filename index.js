'use strict';

import {Orchestra, Radio} from 'jspm-test';
import Controller from './controllers'

const channel = Radio.channel('module');

const Module = Orchestra.Module.extend({
  onStart() {
    this._controller = new Controller();
    channel.reply({
      doSomething: this._controller.doSomething
    }, this._controller)
  },

  onStop() {
    console.log('stopped');
    channel.reset();
  }
});

export {
  Module
};
