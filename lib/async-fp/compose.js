"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const compose = (...fns) => x => fns.reduceRight(async (y, f) => f((await y)), x);

var _default = compose;
exports.default = _default;