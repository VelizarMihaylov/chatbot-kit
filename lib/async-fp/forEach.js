"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forEach = void 0;

const forEach = async (arr = [], callback = (any, i = 0) => {}) => {
  let iterator = 0;

  for (const item of arr) {
    await callback(item, iterator += 1);
  }
};

exports.forEach = forEach;