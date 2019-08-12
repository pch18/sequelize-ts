const FOREVER = new Date('3000-01-01')

export default class myTime extends Date {
    addYear(x: number) {
        this.setFullYear(this.getFullYear() + parseInt(<any>x))
        return this
    }
    addMonth(x: number) {
        this.setMonth(this.getMonth() + parseInt(<any>x))
        return this
    }
    addDate(x: number) {
        this.setDate(this.getDate() + parseInt(<any>x))
        return this
    }
    addHours(x: number) {
        this.setHours(this.getHours() + parseInt(<any>x))
        return this
    }
    addMinutes(x: number) {
        this.setMinutes(this.getMinutes() + parseInt(<any>x))
        return this
    }
    addSeconds(x: number) {
        this.setSeconds(this.getSeconds() + parseInt(<any>x))
        return this
    }
    addMilliseconds(x: number) {
        this.setMilliseconds(this.getMilliseconds() + parseInt(<any>x))
        return this
    }
    format(style: string, def = "无效时间") {
        if (!this.getTime()) {
            return def
        } else if (this >= FOREVER) {
            return '永久'
        }

        const getInfo = {
            "Y": this.getFullYear,
            "M": () => this.getMonth() + 1,
            "D": this.getDate,
            "h": this.getHours,
            "m": this.getMinutes,
            "s": this.getSeconds,
            "S": this.getMilliseconds
        };
        return style.replace(/([YMDhmsS])\1*/g, (k) => {
            let type = k.substr(0, 1) as ('Y' | 'M' | 'D' | 'h' | 'm' | 's' | 'S');
            let r = getInfo[type].call(this).toString();
            return ('0000' + r).substr(-k.length, k.length);
        });
    }
    format_YMDhms(def = "无效时间") {
        return this.format('YYYY-MM-DD hh:mm:ss', def)
    }
    format_YMD(def = "无效时间") {
        return this.format('YYYY-MM-DD', def)
    }

    format_offset(t: Date = new Date(), length = 10, minus?: boolean) {
        let offset = Math.round((this.getTime() - t.getTime()) / 1000)
        if (minus) {
            offset = -offset
        }
        let isMinus = false
        if (offset < 0) {
            isMinus = true
            offset = -offset
        }
        const day = Math.floor(offset / 86400)
        offset -= day * 86400
        const hour = Math.floor(offset / 3600)
        offset -= hour * 3600
        const min = Math.floor(offset / 60)
        const sec = offset - min * 60

        let show = ''
        let len1 = 0
        if (day && length > len1) {
            len1++
            show += `${day}天`
        }
        if ((day || hour) && length > len1) {
            len1++
            show += `${hour}${length <= 2 ? '小' : ''}时`
        }
        if ((day || hour || min) && length > len1) {
            len1++
            show += `${min}分${length <= 2 ? '钟' : ''}`
        }
        if (length > len1) {
            show += `${sec}秒`
        }

        return (isMinus ? '-' : '') + show
    }
}