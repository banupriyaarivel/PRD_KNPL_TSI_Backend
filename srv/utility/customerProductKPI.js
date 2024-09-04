const { isValueAvailable } = require('./helper/isValueAvailable');

exports.formatCustomerProductValVolData = (output) => {
    const outArr = [];
    const outputResults = output.results;
    for (let i = 0, arrL = outputResults.length; i < arrL; i++) {
        let outputResData = outputResults[i];
        outArr.push({
            NAME: 'Today',
            LY: {
                VALUE: outputResData["LY-Today"] ? String(outputResData["LY-Today"]) : "0.0",
                IS_HL: false
            },
            CY: {
                VALUE: outputResData["CY-Today"] ? String(outputResData["CY-Today"]) : "0.0",
                IS_HL: false
            },
            GROWTH: {
                VALUE: isValueAvailable(outputResData["LY-Today"]) ? parseFloat(((outputResData["CY-Today"] / outputResData["LY-Today"]) - 1) * 100).toFixed(1) : "0.0",
                IS_HL: false
            }
        });
        outArr.push({
            NAME: 'Yesterday',
            LY: {
                VALUE: outputResData["LY-Yesterday"] ? String(outputResData["LY-Yesterday"]) : "0.0",
                IS_HL: false
            },
            CY: {
                VALUE: outputResData["CY-Yesterday"] ? String(outputResData["CY-Yesterday"]) : "0.0",
                IS_HL: false
            },
            GROWTH: {
                VALUE: isValueAvailable(outputResData["LY-Yesterday"]) ? parseFloat(((outputResData["CY-Yesterday"] / outputResData["LY-Yesterday"]) - 1) * 100).toFixed(1) : "0.0",
                IS_HL: false
            }
        });
        outArr.push({
            NAME: "MTD*",
            LY: {
                VALUE: outputResData["LY-MTD*"] ? String(outputResData["LY-MTD*"]) : "0.0",
                IS_HL: false
            },
            CY: {
                VALUE: outputResData["CY-MTD*"] ? String(outputResData["CY-MTD*"]) : "0.0",
                IS_HL: false
            },
            GROWTH: {
                VALUE: isValueAvailable(outputResData["LY-MTD*"]) ? parseFloat(((outputResData["CY-MTD*"] / outputResData["LY-MTD*"]) - 1) * 100).toFixed(1) : "0.0",
                IS_HL: false
            }
        });
        outArr.push({
            NAME: "MTD",
            LY: {
                VALUE: outputResData["LY-MTD"] ? String(outputResData["LY-MTD"]) : "0.0",
                IS_HL: false
            },
            CY: {
                VALUE: outputResData["CY-MTD"] ? String(outputResData["CY-MTD"]) : "0.0",
                IS_HL: false
            },
            GROWTH: {
                VALUE: isValueAvailable(outputResData["LY-MTD"]) ? parseFloat(((outputResData["CY-MTD"] / outputResData["LY-MTD"]) - 1) * 100).toFixed(1) : "0.0",
                IS_HL: false
            }
        });
        outArr.push({
            NAME: "YTD*",
            LY: {
                VALUE: outputResData["LY-YTD*"] ? String(outputResData["LY-YTD*"]) : "0.0",
                IS_HL: false
            },
            CY: {
                VALUE: outputResData["CY-YTD*"] ? String(outputResData["CY-YTD*"]) : "0.0",
                IS_HL: false
            },
            GROWTH: {
                VALUE: isValueAvailable(outputResData["LY-YTD*"]) ? parseFloat(((outputResData["CY-YTD*"] / outputResData["LY-YTD*"]) - 1) * 100).toFixed(1) : "0.0",
                IS_HL: false
            }
        });
    }
    return outArr;
}

exports.formatCustomerProductParticipationData = (output) => {
    const outArr = [];
    const outputResults = output.results;
    for (let i = 0, arrL = outputResults.length; i < arrL; i++) {
        let outputResData = outputResults[i];
        outArr.push({
            NAME: 'Today',
            LY: {
                VALUE: outputResData["LY-Today"] ? String(Number(outputResData["LY-Today"])) : "0",
                IS_HL: false
            },
            CY: {
                VALUE: outputResData["CY-Today"] ? String(Number(outputResData["CY-Today"])) : "0",
                IS_HL: false
            }
        });
        outArr.push({
            NAME: 'Yesterday',
            LY: {
                VALUE: outputResData["LY-Yesterday"] ? String(Number(outputResData["LY-Yesterday"])) : "0",
                IS_HL: false
            },
            CY: {
                VALUE: outputResData["CY-Yesterday"] ? String(Number(outputResData["CY-Yesterday"])) : "0",
                IS_HL: false
            }
        });
        outArr.push({
            NAME: "MTD*",
            LY: {
                VALUE: outputResData["LY-MTD*"] ? String(Number(outputResData["LY-MTD*"])) : "0",
                IS_HL: false
            },
            CY: {
                VALUE: outputResData["CY-MTD*"] ? String(Number(outputResData["CY-MTD*"])) : "0",
                IS_HL: false
            }
        });
        outArr.push({
            NAME: "MTD",
            LY: {
                VALUE: outputResData["LY-MTD"] ? String(Number(outputResData["LY-MTD"])) : "0",
                IS_HL: false
            },
            CY: {
                VALUE: outputResData["CY-MTD"] ? String(Number(outputResData["CY-MTD"])) : "0",
                IS_HL: false
            }
        });
        outArr.push({
            NAME: "YTD*",
            LY: {
                VALUE: outputResData["LY-YTD*"] ? String(Number(outputResData["LY-YTD*"])) : "0",
                IS_HL: false
            },
            CY: {
                VALUE: outputResData["CY-YTD*"] ? String(Number(outputResData["CY-YTD*"])) : "0",
                IS_HL: false
            }
        });
    }
    return outArr;
}