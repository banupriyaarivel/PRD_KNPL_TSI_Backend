exports.formatActiveDealerData = (output) => {
    const outArr = [];
    const outputResults = output.results;
    for (let i = 0, arrL = outputResults.length; i < arrL; i++) {
        let outputResData = outputResults[i];
        outArr.push({
            NAME: 'LY Full',
            PARTICIPATED: {
                VALUE: outputResData["Participated-LY-FULL"] ? String(outputResData["Participated-LY-FULL"]) : "0",
                IS_HL: true
            },
            NOT_PARTICIPATED: {
                VALUE: null,
                IS_HL: false
            }
        });
        outArr.push({
            NAME: 'Today',
            PARTICIPATED: {
                VALUE: outputResData["Participated-Today"] ? String(outputResData["Participated-Today"]) : "0",
                IS_HL: true
            },
            NOT_PARTICIPATED: {
                VALUE: null,
                IS_HL: false
            }
        });
        outArr.push({
            NAME: 'Yesterday',
            PARTICIPATED: {
                VALUE: outputResData["Participated-Yesterday"] ? String(outputResData["Participated-Yesterday"]) : "0",
                IS_HL: true
            },
            NOT_PARTICIPATED: {
                VALUE: null,
                IS_HL: false
            }
        });
        outArr.push({
            NAME: "MTD*",
            PARTICIPATED: {
                VALUE: outputResData["Participated-MTD*"] ? String(outputResData["Participated-MTD*"]) : "0",
                IS_HL: false
            },
            NOT_PARTICIPATED: {
                VALUE: ((outputResData["Participated-LY-FULL"] - outputResData["Participated-MTD*"])).toString() || "0",
                IS_HL: false
            }
        });
        outArr.push({
            NAME: "MTD",
            PARTICIPATED: {
                VALUE: outputResData["Participated-MTD"] ? String(outputResData["Participated-MTD"]) : "0",
                IS_HL: false
            },
            NOT_PARTICIPATED: {
                VALUE: ((outputResData["Participated-LY-FULL"] - outputResData["Participated-MTD"])).toString() || "0",
                IS_HL: true
            }
        });
        outArr.push({
            NAME: "YTD",
            PARTICIPATED: {
                VALUE: outputResData["Participated-YTD"] ? String(outputResData["Participated-YTD"]) : "0",
                IS_HL: false
            },
            NOT_PARTICIPATED: {
                VALUE: ((outputResData["Participated-LY-FULL"] - outputResData["Participated-YTD"])).toString() || "0",
                IS_HL: true
            }
        });
    }
    return outArr;
}