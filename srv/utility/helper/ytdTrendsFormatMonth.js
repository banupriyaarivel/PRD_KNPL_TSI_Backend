const { MONTHS } = require('../../constant/constants');

exports.formatYTDTrendsMonthData = (result) => {
    let outArr = [];
    result = result?.length ? result : [];
    outArr = MONTHS.map((month) => {
        if (result.some(item => item.NAME === month)) {
            return result.find(item => item.NAME === month);
        } else {
            return {
                "NAME": month,
                "VALUE": 0
            };
        }
    })
    return outArr;
}