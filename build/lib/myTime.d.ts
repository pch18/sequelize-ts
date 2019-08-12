export default class myTime extends Date {
    addYear(x: number): this;
    addMonth(x: number): this;
    addDate(x: number): this;
    addHours(x: number): this;
    addMinutes(x: number): this;
    addSeconds(x: number): this;
    addMilliseconds(x: number): this;
    format(style: string, def?: string): string;
    format_YMDhms(def?: string): string;
    format_YMD(def?: string): string;
    format_offset(t?: Date, length?: number, minus?: boolean): string;
}
//# sourceMappingURL=myTime.d.ts.map