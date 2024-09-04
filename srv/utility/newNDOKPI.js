exports.formatNewNDOData = (output) => {
    const outArr = [];
    const outputResults = output.results;
    for (let i = 0, arrL = outputResults.length; i < arrL; i++) {
        let outputResData = outputResults[i];
        outArr.push({
            NAME: 'Today',
            BILLED: {
                VALUE: outputResData["Billed-Today"] ? String(outputResData["Billed-Today"]) : "0",
                IS_HL: true
            },
            NOT_BILLED: {
                VALUE: ((outputResData["Total-NDO"] - outputResData["Billed-Today"])).toString() || "0",
                IS_HL: false
            }
        });
        outArr.push({
            NAME: 'Yesterday',
            BILLED: {
                VALUE: outputResData["Billed-Yesterday"] ? String(outputResData["Billed-Yesterday"]) : "0",
                IS_HL: true
            },
            NOT_BILLED: {
                VALUE: ((outputResData["Total-NDO"] - outputResData["Billed-Yesterday"])).toString() || "0",
                IS_HL: false
            }
        });
        outArr.push({
            NAME: "MTD*",
            BILLED: {
                VALUE: outputResData["Billed-MTD*"] ? String(outputResData["Billed-MTD*"]) : "0",
                IS_HL: false
            },
            NOT_BILLED: {
                VALUE: ((outputResData["Total-NDO"] - outputResData["Billed-MTD*"])).toString() || "0",
                IS_HL: true
            }
        });
        outArr.push({
            NAME: "MTD",
            BILLED: {
                VALUE: outputResData["Billed-MTD"] ? String(outputResData["Billed-MTD"]) : "0",
                IS_HL: false
            },
            NOT_BILLED: {
                VALUE: ((outputResData["Total-NDO"] - outputResData["Billed-MTD"])).toString() || "0",
                IS_HL: false
            }
        });
        outArr.push({
            NAME: "YTD",
            BILLED: {
                VALUE: outputResData["Billed-YTD"] ? String(outputResData["Billed-YTD"]) : "0",
                IS_HL: false
            },
            NOT_BILLED: {
                VALUE: ((outputResData["Total-NDO"] - outputResData["Billed-YTD"])).toString() || "0",
                IS_HL: false
            }
        });
    }
    return outArr;
}