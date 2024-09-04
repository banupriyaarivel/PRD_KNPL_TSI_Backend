exports.formatNewCCDsData = (output) => {
    const outArr = [];
    const outputResults = output.results;
    for (let i = 0, arrL = outputResults.length; i < arrL; i++) {
        let outputResData = outputResults[i];
        outArr.push({
            NAME: 'Today',
            NOT_BILLED: {
                VALUE: ((outputResData["Total-CCD"] - outputResData["Billed-Today"])).toString() || "0",
                IS_HL: false
            },
            BILLED: {
                VALUE: (outputResData["Billed-Today"]).toString() || "0",
                IS_HL: true
            }
        });
        outArr.push({
            NAME: 'Yesterday',
            NOT_BILLED: {
                VALUE: ((outputResData["Total-CCD"] - outputResData["Billed-Yesterday"])).toString() || "0",
                IS_HL: false
            },
            BILLED: {
                VALUE: (outputResData["Billed-Yesterday"]).toString() || "0",
                IS_HL: true
            }
        });
        outArr.push({
            NAME: 'MTD*',
            NOT_BILLED: {
                VALUE: ((outputResData["Total-CCD"] - outputResData["Billed-MTD*"])).toString() || "0",
                IS_HL: true
            },
            BILLED: {
                VALUE: (outputResData["Billed-MTD*"]).toString() || "0",
                IS_HL: false
            }
        });
        outArr.push({
            NAME: 'MTD',
            NOT_BILLED: {
                VALUE: ((outputResData["Total-CCD"] - outputResData["Billed-MTD"])).toString() || "0",
                IS_HL: false
            },
            BILLED: {
                VALUE: (outputResData["Billed-MTD"]).toString() || "0",
                IS_HL: false
            }
        });
        outArr.push({
            NAME: 'YTD',
            NOT_BILLED: {
                VALUE: ((outputResData["Total-CCD"] - outputResData["Billed-YTD"])).toString() || "0",
                IS_HL: false
            },
            BILLED: {
                VALUE: (outputResData["Billed-YTD"]).toString() || "0",
                IS_HL: false
            }
        });
    }
    return outArr;
}