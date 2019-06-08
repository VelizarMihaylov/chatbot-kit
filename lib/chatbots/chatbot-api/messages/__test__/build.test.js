"use strict";

var _build = _interopRequireDefault(require("../build"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('buildMessages', () => {
  it('should build message array with id', () => {
    const messages = [id => ({
      id,
      text: 'First message'
    }), id => ({
      id,
      text: 'Second message'
    })];
    expect((0, _build.default)(messages)('23461')).toMatchSnapshot();
  });
});