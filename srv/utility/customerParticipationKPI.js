exports.formatCustomerParticipationData = (output) => {
    const outArr = [];
    const outputResults = output.results;
    for (let i = 0, arrL = outputResults.length; i < arrL; i++) {
        let outputResData = outputResults[i];
        outArr.push({
            NAME: 'Today',
            CY: {
                VALUE: outputResData["Participated-Today"] ? String(outputResData["Participated-Today"]) : "0",
                IS_HL: false
            }
        });
        outArr.push({
            NAME: 'Yesterday',
            CY: {
                VALUE: outputResData["Participated-Yesterday"] ? String(outputResData["Participated-Yesterday"]) : "0",
                IS_HL: false
            }
        });
        outArr.push({
            NAME: "MTD*",
            CY: {
                VALUE: outputResData["Participated-MTD*"] ? String(outputResData["Participated-MTD*"]) : "0",
                IS_HL: false
            }
        });
        outArr.push({
            NAME: "MTD",
            CY: {
                VALUE: outputResData["Participated-MTD"] ? String(outputResData["Participated-MTD"]) : "0",
                IS_HL: false
            }
        });
        outArr.push({
            NAME: "YTD",
            CY: {
                VALUE: outputResData["Participated-YTD"] ? String(outputResData["Participated-YTD"]) : "0",
                IS_HL: false
            }
        });
    }

    return outArr;
}