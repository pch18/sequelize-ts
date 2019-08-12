"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomStr = (length = 32, chars_type = 'small') => {
    var randStrChars = {
        num: '0123456789',
        yzm: 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789',
        small: `0123456789abcdefghijklmnopqrstuvwxyz`,
        all: `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`
    };
    const chars = randStrChars[chars_type];
    let maxPos = chars.length;
    let str = '';
    for (let i = 0; i < length; i++) {
        str += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return str;
};
//# sourceMappingURL=tools.js.map