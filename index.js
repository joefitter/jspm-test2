'use strict';

import {Orchestra} from 'jspm-test';

const app = new Orchestra.Application({
  onStart() {
    console.log('APP STARTED');
  }
});

export {app};
