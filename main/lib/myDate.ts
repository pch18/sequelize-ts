export default class myDate extends Date {

    constructor(date: any) {
        if (date) {
            super(myDate.toMyDateString(new Date(date)))
        } else {
            super(myDate.toMyDateString(new Date()))
        }
    }

    toString(): string {
        return myDate.toMyDateString(this)
    }

    toJSON(): string {
        return myDate.toMyDateString(this)
    }

    static toMyDateString(d: Date) {
        const p = {
            year: d.getFullYear(),
            month: d.getMonth() + 1,
            date: d.getDate(),
        }
        return `${p.year}-${p.month}-${p.date}`
    }

}

