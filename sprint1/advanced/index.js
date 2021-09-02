const TimeConverter = require("./domain/timeConverter.js");
const Time = require("./domain/time.js");
const Log = require("./util/log.js");
const Logger = new Log();

const Process = function () {
    const testcases = ["1600s m", "1h35m s", "3d h", "3837s h", "1400s", "1700H m"];
    testcases.forEach(tc => {
        try {
            const time = new Time(tc.split(' ')[0]).totalSec;
            const unit = tc.split(' ')[1];
            const timeConverter = new TimeConverter(time, unit);
            const convertedTime = timeConverter.convertTime();
            Log.log(convertedTime);
        }
        catch (err) {
            Log.err(err.message);
        }

    })
}

Process();