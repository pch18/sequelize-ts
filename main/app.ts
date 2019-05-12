#!/usr/bin/env node

export class main {
    PackageJson: any
    constructor() {
        this.PackageJson = require('../package.json')
    }
    run() {
        console.log('\x1B[35m%s\x1B[39m\x1B[32m %s\x1B[39m', 'Hello World by:', this.PackageJson.name)
    }
}