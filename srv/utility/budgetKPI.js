exports.formatBudgetData = (output) => {
    const outArr = [];
    const outputResults = output.results;
    for (let i = 0, arrL = outputResults.length; i < arrL; i++) {
        let outputResData = outputResults[i];
        outArr.push({
            NAME: 'Today',
            LACS: {
                VALUE: null,
                IS_HL: false
            },
            LACS_ACHIEVEMENT: {
                VALUE: null,
                IS_HL: false
            },
            KL: {
                VALUE: null,
                IS_HL: false
            },
            KL_ACHIEVEMENT: {
                VALUE: null,
                IS_HL: false
            },
        });
        outArr.push({
            NAME: 'Yesterday',
            LACS: {
                VALUE: null,
                IS_HL: false
            },
            LACS_ACHIEVEMENT: {
                VALUE: null,
                IS_HL: false
            },
            KL: {
                VALUE: null,
                IS_HL: false
            },
            KL_ACHIEVEMENT: {
                VALUE: null,
                IS_HL: false
            },
        });
        outArr.push({
            NAME: "MTD*",
            LACS: {
                VALUE: outputResData["VAL-CY-MTD*"] ? String(outputResData["VAL-CY-MTD*"]) : "0.0",
                IS_HL: false
            },
            LACS_ACHIEVEMENT: {
                VALUE: outputResData["VAL-CY-MTD*-ACHIEVEMENT"] ? String(outputResData["VAL-CY-MTD*-ACHIEVEMENT"]) : "0.0",
                IS_HL: false
            },
            KL: {
                VALUE: outputResData["VOL-CY-MTD*"] ? String(outputResData["VOL-CY-MTD*"]) : "0.0",
                IS_HL: false
            },
            KL_ACHIEVEMENT: {
                VALUE: outputResData["VOL-CY-MTD*-ACHIEVEMENT"] ? String(outputResData["VOL-CY-MTD*-ACHIEVEMENT"]) : "0.0",
                IS_HL: false
            }
        });
        outArr.push({
            NAME: "MTD",
            LACS: {
                VALUE: outputResData["VAL-CY-MTD"] ? String(outputResData["VAL-CY-MTD"]) : "0.0",
                IS_HL: false
            },
            LACS_ACHIEVEMENT: {
                VALUE: outputResData["VAL-CY-MTD-ACHIEVEMENT"] ? String(outputResData["VAL-CY-MTD-ACHIEVEMENT"]) : "0.0",
                IS_HL: false
            },
            KL: {
                VALUE: outputResData["VOL-CY-MTD"] ? String(outputResData["VOL-CY-MTD"]) : "0.0",
                IS_HL: false
            },
            KL_ACHIEVEMENT: {
                VALUE: outputResData["VOL-CY-MTD-ACHIEVEMENT"] ? String(outputResData["VOL-CY-MTD-ACHIEVEMENT"]) : "0.0",
                IS_HL: false
            }
        });
        outArr.push({
            NAME: "YTD",
            LACS: {
                VALUE: outputResData["VAL-CY-YTD"] ? String(outputResData["VAL-CY-YTD"]) : "0.0",
                IS_HL: false
            },
            LACS_ACHIEVEMENT: {
                VALUE: null,
                IS_HL: false
            },
            KL: {
                VALUE: outputResData["VOL-CY-YTD"] ? String(outputResData["VOL-CY-YTD"]) : "0.0",
                IS_HL: false
            },
            KL_ACHIEVEMENT: {
                VALUE: null,
                IS_HL: false
            }
        });
        outArr.push({
            NAME: "YTD*",
            LACS: {
                VALUE: null,
                IS_HL: false
            },
            LACS_ACHIEVEMENT: {
                VALUE: outputResData["VAL-CY-YTD*-ACHIEVEMENT"] ? String(outputResData["VAL-CY-YTD*-ACHIEVEMENT"]) : "0.0",
                IS_HL: false
            },
            KL: {
                VALUE: null,
                IS_HL: false
            },
            KL_ACHIEVEMENT: {
                VALUE: outputResData["VOL-CY-YTD*-ACHIEVEMENT"] ? String(outputResData["VOL-CY-YTD*-ACHIEVEMENT"]) : "0.0",
                IS_HL: false
            }
        });
    }

    return outArr;
}