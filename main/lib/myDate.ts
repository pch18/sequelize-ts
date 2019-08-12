export default class myDate extends Date {

    constructor(date: any) {
        super(myDate.toMyDateString(new Date(date)))
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

