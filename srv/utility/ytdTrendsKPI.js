const { formatYTDTrendsMonthData } = require('./helper/ytdTrendsFormatMonth');

exports.formatYTDTrendsData = (output) => {
    const outArr = [];
    const valueResult = formatYTDTrendsMonthData(output[0]?.results);
    const volumeResult = formatYTDTrendsMonthData(output[1]?.results);
    const participationResult = formatYTDTrendsMonthData(output[2]?.results);
    const osGreaterSixtyResult = formatYTDTrendsMonthData(output[3]?.results);
    const osGreaterNinetyResult = formatYTDTrendsMonthData(output[4]?.results);
    const odResult = formatYTDTrendsMonthData(output[5]?.results);
    outArr.push({
        NAME: 'Value',
        DATA: valueResult
    });
    outArr.push({
        NAME: 'Volume',
        DATA: volumeResult
    });
    outArr.push({
        NAME: 'Participation',
        DATA: participationResult
    });
    outArr.push({
        NAME: 'OD Change',
        DATA: odResult
    });
    outArr.push({
        NAME: 'OS>60 Change',
        DATA: osGreaterSixtyResult
    });
    outArr.push({
        NAME: 'OS>90 Change',
        DATA: osGreaterNinetyResult
    });
    // outArr.push({
    //     NAME: 'Meets Conducted',
    //     DATA: [
    //         { NAME: 'Apr', VALUE: 41 },
    //         { NAME: 'May', VALUE: 23 },
    //         { NAME: 'Jun', VALUE: 33 },
    //         { NAME: 'Jul', VALUE: 56 },
    //         { NAME: 'Aug', VALUE: 18 },
    //         { NAME: 'Sep', VALUE: 30 },
    //         { NAME: 'Oct', VALUE: 47 },
    //         { NAME: 'Nov', VALUE: 60 },
    //         { NAME: 'Dec', VALUE: 32 },
    //         { NAME: 'Jan', VALUE: 29 },
    //         { NAME: 'Feb', VALUE: 52 },
    //         { NAME: 'Mar', VALUE: 45 },
    //     ]
    // });

    return outArr;
}