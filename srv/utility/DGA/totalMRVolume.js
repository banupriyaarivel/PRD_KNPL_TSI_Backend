exports.formatTotalMRVolumeData = (output) => {
    console.log("formatTotalMRVolumeData", output.results[0]);
    const outArr = [];
    const resultData = output.results?.length ? output.results[0] : [];
    outArr.push({
        NAME: 'Today',
        CY: {
            VALUE: resultData['CY-Today'] ? (resultData['CY-Today']).toString() : "0",
            IS_HL: false
        }
    });
    outArr.push({
        NAME: 'Yesterday',
        CY: {
            VALUE: resultData['CY-Yesterday'] ? (resultData['CY-Yesterday']).toString() : "0",
            IS_HL: false
        }
    });
    outArr.push({
        NAME: 'MTD',
        CY: {
            VALUE: resultData['CY-MTD'] ? (resultData['CY-MTD']).toString() : "0",
            IS_HL: false
        }
    });
    outArr.push({
        NAME: 'YTD',
        CY: {
            VALUE: resultData['CY-YTD'] ? (resultData['CY-YTD']).toString() : "0",
            IS_HL: false
        }
    });

    return outArr;
};