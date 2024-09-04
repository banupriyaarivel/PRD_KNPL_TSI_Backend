exports.formatOSODData = (output) => {
    const outArr = [];
    const outputResults = output.results;
    for (let i = 0, arrL = outputResults.length; i < arrL; i++) {
        let outputResData = outputResults[i];
        outArr.push({
            NAME: 'SG CEI',
            MONTH_BEGINNING: {
                VALUE: outputResData["SGCEI-MONTH-BEGINNING"] || "0.0",
                IS_HL: false
            },
            TILL_YESTERDAY: {
                VALUE: null,
                IS_HL: false
            },  
            // OD Enhancement - Remove next 5 days
            // NEXT_5_DAYS: {
            //     VALUE: null,
            //     IS_HL: false
            // }
        });
        outArr.push({
            NAME: 'OS',
            MONTH_BEGINNING: {
                VALUE: outputResData["OS-MONTH-BEGINNING"] || "0.0",
                IS_HL: false
            },
            TILL_YESTERDAY: {
                VALUE: outputResData["OS-TILL-YESTERDAY"] || "0.0",
                IS_HL: true
            },
            NEXT_5_DAYS: {
                VALUE: null,
                IS_HL: false
            }
        });
        outArr.push({
            NAME: 'OS>60',
            MONTH_BEGINNING: {
                VALUE: outputResData["OS>60-MONTH-BEGINNING"] || "0.0",
                IS_HL: false
            },
            TILL_YESTERDAY: {
                VALUE: outputResData["OS>60-TILL-YESTERDAY"] || "0.0",
                IS_HL: true
            },
            NEXT_5_DAYS: {
                VALUE: null,
                IS_HL: false
            }
        });
        outArr.push({
            NAME: 'OD',
            MONTH_BEGINNING: {
                VALUE: outputResData["OD-MONTH-BEGINNING"] || "0.0",
                IS_HL: false
            },
            TILL_YESTERDAY: {
                VALUE: outputResData["OD-TILL-YESTERDAY"] || "0.0",
                IS_HL: true
            },
            NEXT_5_DAYS: {
                VALUE: outputResData["OD-NEXT_5_DAYS"] || "0.0",
                IS_HL: true
            }
        });
    }
    return outArr;
};

exports.formatCustomerOSODData = (output) => {
    const outArr = [];
    const outputResults = output.results;
    for (let i = 0, arrL = outputResults.length; i < arrL; i++) {
        let outputResData = outputResults[i];
        outArr.push({
            NAME: 'SG CEI',
            MONTH_BEGINNING: {
                VALUE: outputResData["SGCEI-MONTH-BEGINNING"] || "0.0",
                IS_HL: false
            },
            TILL_YESTERDAY: {
                VALUE: null,
                IS_HL: false
            },
            NEXT_5_DAYS: {
                VALUE: null,
                IS_HL: false
            }
        });
        outArr.push({
            NAME: 'OS',
            MONTH_BEGINNING: {
                VALUE: outputResData["OS-MONTH-BEGINNING"] || "0.0",
                IS_HL: false
            },
            TILL_YESTERDAY: {
                VALUE: outputResData["OS-TILL-YESTERDAY"] || "0.0",
                IS_HL: false
            },
            NEXT_5_DAYS: {
                VALUE: null,
                IS_HL: false
            }
        });
        outArr.push({
            NAME: 'OS>60',
            MONTH_BEGINNING: {
                VALUE: outputResData["OS>60-MONTH-BEGINNING"] || "0.0",
                IS_HL: false
            },
            TILL_YESTERDAY: {
                VALUE: outputResData["OS>60-TILL-YESTERDAY"] || "0.0",
                IS_HL: false
            },
            NEXT_5_DAYS: {
                VALUE: null,
                IS_HL: false
            }
        });
        outArr.push({
            NAME: 'OD',
            MONTH_BEGINNING: {
                VALUE: outputResData["OD-MONTH-BEGINNING"] || "0.0",
                IS_HL: false
            },
            TILL_YESTERDAY: {
                VALUE: outputResData["OD-TILL-YESTERDAY"] || "0.0",
                IS_HL: false
            },
            NEXT_5_DAYS: {
                VALUE: outputResData["OD-NEXT_5_DAYS"] || "0.0",
                IS_HL: false
            }
        });
    }
    return outArr;
};