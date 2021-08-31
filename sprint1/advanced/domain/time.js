const TimeHelper = require("./timeHelper.js");

const units = ['d', 'h', 'm', 's'];
class Time {
    constructor(str) { // '1600m'
        this.day = 0;
        this.hour = 0;
        this.min = 0;
        this.sec = 0;
        this.totalSec = 0;
        this.makeTotalSecond(str);
    }

    makeTotalSecond(str) {
        if (str) { // 입력값, 단위 분리. '1600m' -> 1600 'm'
            const values = TimeHelper(str, units);
            this.day = values.d;
            this.hour = values.h;
            this.min = values.m;
            this.sec = values.s;
            this.totalSec = this.day * 86400 + this.hour * 3600 + this.min * 60 + this.sec;
        }
    }

    setTime(unit, value) {
        if (unit === 'd') this.day = value;
        if (unit === 'h') this.hour = value;
        if (unit === 'm') this.min = value;
        if (unit === 's') this.sec = value;
    }

    printFinalResult() {
        const dayStr = this.day ? this.day + 'd' : '';
        const hourStr = this.hour ? this.hour + 'h' : '';
        const minStr = this.min ? this.min + 'm' : '';
        const secStr = this.sec ? this.sec + 's' : '';

        return dayStr + hourStr + minStr + secStr;
    }


}

module.exports = Time;