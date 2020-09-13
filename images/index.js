"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sensitive = exports.oily = exports.normal = exports.mature = exports.dry = exports.combination = void 0;
/* eslint-disable global-require */
var fs = require('fs');
exports.combination = fs.readFileSync('images/combination.jpg');
exports.dry = fs.readFileSync('images/dry.jpg');
exports.mature = fs.readFileSync('images/mature.jpg');
exports.normal = fs.readFileSync('images/normal.jpg');
exports.oily = fs.readFileSync('images/oily.jpg');
exports.sensitive = fs.readFileSync('images/sensitive.jpg');
