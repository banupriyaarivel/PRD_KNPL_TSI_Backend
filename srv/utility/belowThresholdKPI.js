exports.formatBelowThresholdData = (output) => {
    const outArr = [];
    const outputResults = output.results;
    for (let i = 0, arrL = outputResults.length; i < arrL; i++) {
        let outputResData = outputResults[i];
        outArr.push({
            NAME: 'Today',
            CY: {
                VALUE: null,
                IS_HL: false
            }
        });
        outArr.push({
            NAME: 'Yesterday',
            CY: {
                VALUE: null,
                IS_HL: false
            }
        });
        outArr.push({
            NAME: "MTD*",
            CY: {
                VALUE: outputResData["BELOW-THRESHOLD-MTD-TILL"] ? String(outputResData["BELOW-THRESHOLD-MTD-TILL"]) : "0",
                IS_HL: false
            }
        });
        outArr.push({
            NAME: "MTD",
            CY: {
                VALUE: outputResData["BELOW-THRESHOLD-MTD"] ? String(outputResData["BELOW-THRESHOLD-MTD"]) : "0",
                IS_HL: true
            }
        });
        outArr.push({
            NAME: "YTD",
            CY: {
                VALUE: outputResData["BELOW-THRESHOLD-YTD"] ? String(outputResData["BELOW-THRESHOLD-YTD"]) : "0",
                IS_HL: true
            }
        });
    }

    return outArr;
}