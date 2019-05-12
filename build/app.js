#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class main {
    constructor() {
        this.PackageJson = require('../package.json');
    }
    run() {
        console.log('\x1B[35m%s\x1B[39m\x1B[32m %s\x1B[39m', 'Hello World by:', this.PackageJson.name);
    }
}
exports.main = main;
//# sourceMappingURL=app.js.map