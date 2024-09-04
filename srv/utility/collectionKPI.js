exports.formatCollectionData = (output) => {
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
                VALUE: outputResData["CY-Yesterday"] ? String(outputResData["CY-Yesterday"]) : "0.0",
                IS_HL: true
            }
        });
        outArr.push({
            NAME: "MTD*",
            CY: {
                VALUE: null,
                IS_HL: false
            }
        });
        outArr.push({
            NAME: "MTD",
            CY: {
                VALUE: outputResData["CY-MTD"] ? String(outputResData["CY-MTD"]) : "0.0",
                IS_HL: true
            }
        });
        outArr.push({
            NAME: "YTD",
            CY: {
                VALUE: outputResData["CY-YTD"] ? String(outputResData["CY-YTD"]) : "0.0",
                IS_HL: false
            }
        });
    }
    return outArr;
}

exports.formatCustomerCollectionData = (output) => {
    const outArr = [];
    const outputResults = output.results;
    for (let i = 0, arrL = outputResults.length; i < arrL; i++) {
        let outputResData = outputResults[i];
        outArr.push({
            NAME: 'Today',
            CY: {
                VALUE: outputResData["CY-Today"] ? String(outputResData["CY-Today"]) : "0.0",
                IS_HL: false
            }
        });
        outArr.push({
            NAME: 'Yesterday',
            CY: {
                VALUE: outputResData["CY-Yesterday"] ? String(outputResData["CY-Yesterday"]) : "0.0",
                IS_HL: false
            }
        });
        outArr.push({
            NAME: "MTD*",
            CY: {
                VALUE: outputResData["CY-MTD*"] ? String(outputResData["CY-MTD*"]) : "0.0",
                IS_HL: false
            }
        });
        outArr.push({
            NAME: "MTD",
            CY: {
                VALUE: outputResData["CY-MTD"] ? String(outputResData["CY-MTD"]) : "0.0",
                IS_HL: false
            }
        });
        outArr.push({
            NAME: "YTD",
            CY: {
                VALUE: outputResData["CY-YTD"] ? String(outputResData["CY-YTD"]) : "0.0",
                IS_HL: false
            }
        });
    }
    return outArr;
}