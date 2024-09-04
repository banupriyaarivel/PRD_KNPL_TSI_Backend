exports.formatCustomerSchemeQualificationData = (output) => {
    const outArr = [];
    const outputResults = output.results;
    for (let i = 0, arrL = outputResults.length; i < arrL; i++) {
        let outputResData = outputResults[i];
        outArr.push({
            NAME: "MTD*",
            NOS: {
                VALUE: outputResData["MTD*"] ? String(outputResData["MTD*"]) : "0.0",
                IS_HL: false
            }
        });
        outArr.push({
            NAME: "YTD",
            NOS: {
                VALUE: outputResData["YTD"] ? String(outputResData["YTD"]) : "0.0",
                IS_HL: false
            }
        });
    }
    return outArr;
}