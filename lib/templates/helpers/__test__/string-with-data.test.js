"use strict";

var _stringWithData = require("../string-with-data");

describe('buildStringFromTokens', () => {
  it('should build string from tokens', () => {
    console.log('STRING FROM TOKENS', (0, _stringWithData.buildStringFromTokens)({
      first_name: 'John'
    })('Hello I am :first_name.'));
  });
});