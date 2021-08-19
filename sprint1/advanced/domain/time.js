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
        const units = ['d', 'h', 'm', 's'];
        let values = {};
        if (str) { // 입력값, 단위 분리. '1600m' -> 1600 'm'
            this.checkInputError(str, units);
            units.forEach(unit => {
                let value = 0;
                if (str.indexOf(unit) !== -1) {
                    value = parseInt(str.split(unit)[0]);
                    str = str.split(unit)[1];
                }
                values[unit] = value;
            });
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

    checkInputError(string, unitArray) {
        console.log(string);
        const characters = string.split('');
        characters.forEach(c => {
            if (isNaN(c) && !unitArray.includes(c))
                throw new Error("허용하지 않는 단어가 존재합니다.");
        });
    }
}

module.exports = Time;