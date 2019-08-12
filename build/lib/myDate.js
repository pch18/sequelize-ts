"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class myDate extends Date {
    constructor(date) {
        super(myDate.toMyDateString(new Date(date)));
    }
    toString() {
        return myDate.toMyDateString(this);
    }
    toJSON() {
        return myDate.toMyDateString(this);
    }
    static toMyDateString(d) {
        const p = {
            year: d.getFullYear(),
            month: d.getMonth() + 1,
            date: d.getDate(),
        };
        return `${p.year}-${p.month}-${p.date}`;
    }
}
exports.default = myDate;
//# sourceMappingURL=myDate.js.map