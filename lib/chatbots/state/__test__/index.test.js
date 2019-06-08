"use strict";

var _index = require("../index");

var _actions = require("../actions");

describe('store', () => {
  it('should do stuff', () => {
    console.log(_index.store.getState());

    _index.store.dispatch((0, _actions.welcomeMessageReceivedAction)(true));
  });
});