exports.formatCustomerFocusProductData = (output) => {
    const outArr = [];
    const outputResults = output.results;
    for (let i = 0, arrL = outputResults.length; i < arrL; i++) {
        let outputResData = outputResults[i];
        outArr.push({
            NAME: 'Today',
            CY_RS: {
                VALUE: outputResData["VAL-CY-Today"] ? outputResData["VAL-CY-Today"] : "0.0",
                IS_HL: false
            },
            CY_KL: {
                VALUE: outputResData["VOL-CY-Today"] ? outputResData["VOL-CY-Today"] : "0.0",
                IS_HL: false
            }
        });
        outArr.push({
            NAME: 'Yesterday',
            CY_RS: {
                VALUE: outputResData["VAL-CY-Yesterday"] ? outputResData["VAL-CY-Yesterday"] : "0.0",
                IS_HL: false
            },
            CY_KL: {
                VALUE: outputResData["VOL-CY-Yesterday"] ? outputResData["VOL-CY-Yesterday"] : "0.0",
                IS_HL: false
            }
        });
        outArr.push({
            NAME: "MTD*",
            CY_RS: {
                VALUE: outputResData["VAL-CY-MTD*"] ? outputResData["VAL-CY-MTD*"] : "0.0",
                IS_HL: false
            },
            CY_KL: {
                VALUE: outputResData["VOL-CY-MTD*"] ? outputResData["VOL-CY-MTD*"] : "0.0",
                IS_HL: false
            }
        });
        outArr.push({
            NAME: "MTD",
            CY_RS: {
                VALUE: outputResData["VAL-CY-MTD"] ? outputResData["VAL-CY-MTD"] : "0.0",
                IS_HL: false
            },
            CY_KL: {
                VALUE: outputResData["VOL-CY-MTD"] ? outputResData["VOL-CY-MTD"] : "0.0",
                IS_HL: false
            }
        });
        outArr.push({
            NAME: "YTD",
            CY_RS: {
                VALUE: outputResData["VAL-CY-YTD"] ? outputResData["VAL-CY-YTD"] : "0.0",
                IS_HL: false
            },
            CY_KL: {
                VALUE: outputResData["VOL-CY-YTD"] ? outputResData["VOL-CY-YTD"] : "0.0",
                IS_HL: false
            }
        });
    }
    return outArr;
}