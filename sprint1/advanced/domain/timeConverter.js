const Time = require("./Time");

class TimeConverter {
    // 1. 1600m s 이면 공백 기준 split한다.
    // 2. 1600m을 1600과 m으로 split한다.
    // 3. 숫자를 초로 표현한다.
    // 4. 두 번째 나온 단위로 표현한 값을 구한다.
    // - 단위가 s, m, h, d가 있는데, s면 그대로, m이면 60으로 나누고, h면 3600으로 나누고, d면 3600 * 24로 나눈다.
    // 5. 위에서 구한 값에서 나머지는 아래 단위로 나눠서 표현한다.

    // 시간변환기가 필요한 기능. 변환할 시간(초), 단위
    // 시간이 필요한 기능 -> 입력값, 단위 => 초로 변환한다.
    // 시간 객체가 변환한 초를 시간변환기의 입력으로 넣는다.
    constructor(time, unit) {
        this.time = time;
        this.unit = unit;
        this.checkParamsError(this.time, this.unit);
        this.convertedTime = new Time();
    }

    convertTime() {
        if (this.unit === 's') this.convertedTime.setTime('s', this.time);
        if (this.unit === 'm') this.convertToMinute(this.time);
        if (this.unit === 'h') this.convertToHour(this.time);
        if (this.unit === 'd') this.convertToDay(this.time);

        return this.convertedTime;
    }

    convertToMinute(time) {
        const minute = parseInt(time / 60, 10);
        this.convertedTime.setTime('m', minute);
        this.convertedTime.setTime('s', time % 60);
    }

    convertToHour(time) {
        const hour = parseInt(time / 3600, 10);
        this.convertedTime.setTime('h', hour);
        this.convertToMinute(time % 3600);
    }

    convertToDay(time) {
        const day = parseInt(time / 86400, 10);
        this.convertedTime.setTime('d', day);
        this.convertToHour(time % 86400);
    }

    checkParamsError() {
        if (this.unit === undefined) {
            throw new Error("입력이 올바르지 않습니다.");
        }
    }
}

module.exports = TimeConverter;