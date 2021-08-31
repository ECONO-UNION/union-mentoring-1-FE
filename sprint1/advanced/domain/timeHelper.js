function timeHelper(string, units) {
    checkInputError(string, units);

    let values = {};
    units.forEach(unit => {
        let value = 0;
        if (string.indexOf(unit) !== -1) {
            value = parseInt(string.split(unit)[0]);
            string = string.split(unit)[1];
        }
        values[unit] = value;
    });

    return values;
}

function checkInputError(string, units) {
    const characters = string.split('');
    characters.forEach(c => {
        if (isNaN(c) && !units.includes(c))
            throw new Error("허용하지 않는 단어가 존재합니다.");
    });
}

module.exports = timeHelper;