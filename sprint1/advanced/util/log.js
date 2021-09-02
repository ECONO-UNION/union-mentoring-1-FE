class Log {
    static log(Time) {
        console.log(`결과: "${Time.printFinalResult()}"`)
    }

    static err(message) {
        console.log(`에러: ${message}`)
    }
}

module.exports = Log;