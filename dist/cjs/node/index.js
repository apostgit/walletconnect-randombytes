import * as Random from 'expo-random'

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomBytes = void 0;
const encoding_1 = require("@walletconnect/encoding");
function randomBytes(length) {
    const buf = Random.getRandomBytes(length);
    return encoding_1.bufferToArray(buf);
}
exports.randomBytes = randomBytes;
//# sourceMappingURL=index.js.map