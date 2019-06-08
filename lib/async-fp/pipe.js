"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multiArgumentPipe = exports.singleArgumentPipe = void 0;

const singleArgumentPipe = (...fns) => argument => fns.reduce(async (accumulator, current) => current((await accumulator)), argument);

exports.singleArgumentPipe = singleArgumentPipe;

const multiArgumentPipe = (firstFn, ...restFns) => restFns.reduce((accumulator, current) => async (...args) => current((await accumulator(...args))), firstFn);

exports.multiArgumentPipe = multiArgumentPipe;