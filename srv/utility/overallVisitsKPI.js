exports.formatOverallVisitsData = (output) => {
    const outArr = [];    
    const outputResults = output.results;
    console.log('outputResults===', outputResults);
    for (let i = 0, arrL = outputResults.length; i < arrL; i++) {
        let outputResData = outputResults[i];
        outArr.push({
            NAME: 'Today',
            TOTAL_NOS: {
                VALUE: null,
                IS_HL: false
            },
            AVG_NOS: {
                VALUE: null,
                IS_HL: false
            }
        });
        outArr.push({
            NAME: 'Yesterday',
            TOTAL_NOS: {
                VALUE: parseFloat(outputResData["Total-Yesterday"]).toFixed(0) || "0",
                IS_HL: true
            },
            AVG_NOS: {
                VALUE: null,
                IS_HL: false
            }
        });
        outArr.push({
            NAME: 'MTD*',
            TOTAL_NOS: {
                VALUE: parseFloat(outputResData["Total-MTD*"]).toFixed(0) || "0",
                IS_HL: false
            },
            AVG_NOS: {
                VALUE: parseFloat(outputResData["Avg-MTD*"]).toFixed(1) || "0.0",
                IS_HL: false
            }
        });
        outArr.push({
            NAME: 'MTD',
            TOTAL_NOS: {
                VALUE: parseFloat(outputResData["Total-MTD"]).toFixed(0) || "0",
                IS_HL: false
            },
            AVG_NOS: {
                VALUE: parseFloat(outputResData["Avg-MTD"]).toFixed(1) || "0.0",
                IS_HL: false
            }
        });
        outArr.push({
            NAME: 'YTD',
            TOTAL_NOS: {
                VALUE: parseFloat(outputResData["Total-YTD"]).toFixed(0) || "0",
                IS_HL: false
            },
            AVG_NOS: {
                VALUE: parseFloat(outputResData["Avg-YTD"]).toFixed(1) || "0.0",
                IS_HL: false
            }
        });
    }
    return outArr;
};

exports.formatCustomerVisitsData = (output) => {
    const outArr = [];    
    const outputResults = output.results;
    console.log('outputResults===', outputResults);
    for (let i = 0, arrL = outputResults.length; i < arrL; i++) {
        let outputResData = outputResults[i];
        outArr.push({
            NAME: 'Today',
            TOTAL_NOS: {
                VALUE: null,
                IS_HL: false
            },
            AVG_NOS: {
                VALUE: null,
                IS_HL: false
            }
        });
        outArr.push({
            NAME: 'Yesterday',
            TOTAL_NOS: {
                VALUE: parseFloat(outputResData["Total-Yesterday"]).toFixed(0) || "0",
                IS_HL: false
            },
            AVG_NOS: {
                VALUE: null,
                IS_HL: false
            }
        });
        outArr.push({
            NAME: 'MTD*',
            TOTAL_NOS: {
                VALUE: parseFloat(outputResData["Total-MTD*"]).toFixed(0) || "0",
                IS_HL: false
            },
            AVG_NOS: {
                VALUE: parseFloat(outputResData["Avg-MTD*"]).toFixed(1) || "0.0",
                IS_HL: false
            }
        });
        outArr.push({
            NAME: 'MTD',
            TOTAL_NOS: {
                VALUE: parseFloat(outputResData["Total-MTD"]).toFixed(0) || "0",
                IS_HL: false
            },
            AVG_NOS: {
                VALUE: parseFloat(outputResData["Avg-MTD"]).toFixed(1) || "0.0",
                IS_HL: false
            }
        });
        outArr.push({
            NAME: 'YTD',
            TOTAL_NOS: {
                VALUE: parseFloat(outputResData["Total-YTD"]).toFixed(0) || "0",
                IS_HL: false
            },
            AVG_NOS: {
                VALUE: parseFloat(outputResData["Avg-YTD"]).toFixed(1) || "0.0",
                IS_HL: false
            }
        });
    }
    return outArr;
};