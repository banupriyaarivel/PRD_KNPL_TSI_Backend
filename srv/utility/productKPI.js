const { isValueAvailable } = require('./helper/isValueAvailable');

exports.formatProductData = (output) => {
    const outputResData = output || {};
    const returnObj = {
        CATEGORY_CODE: outputResData.CATEGORY_CODE,
        CATEGORY: outputResData.CATEGORY,
        GROUP: outputResData.GROUP,
        IS_VISIBLE: true,
        KPIS: [
            {
                NAME: "Today",
                BUDGET: {
                    VALUE: null,
                    IS_HL: false
                },
                ACHIEVEMENT: {
                    VALUE: null,
                    IS_HL: false
                },
                LY: {
                    VALUE: null,
                    IS_HL: false
                },
                CY: {
                    VALUE: outputResData["CY-Today"] ? String(outputResData["CY-Today"]) : "0.0",
                    IS_HL: true
                },
                GROWTH: {
                    VALUE: null,
                    IS_HL: false
                }
            },
            {
                NAME: "Yesterday",
                BUDGET: {
                    VALUE: null,
                    IS_HL: false
                },
                ACHIEVEMENT: {
                    VALUE: null,
                    IS_HL: false
                },
                LY: {
                    VALUE: null,
                    IS_HL: false
                },
                CY: {
                    VALUE: outputResData["CY-Yesterday"] ? String(outputResData["CY-Yesterday"]) : "0.0",
                    IS_HL: true
                },
                GROWTH: {
                    VALUE: null,
                    IS_HL: false
                }
            },
            {
                NAME: "MTD*",
                BUDGET: {
                    VALUE: outputResData["BUDGET-MTD"] ? String(outputResData["BUDGET-MTD"]) : "0.0",
                    IS_HL: false
                },
                ACHIEVEMENT: {
                    VALUE: outputResData["ACHIEVE-MTD*"] ? String(outputResData["ACHIEVE-MTD*"]) : "0.0",
                    IS_HL: false
                },
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
            },
            {
                NAME: "MTD",
                BUDGET: {
                    VALUE: outputResData["BUDGET-MTD"] ? String(outputResData["BUDGET-MTD"]) : "0.0",
                    IS_HL: false
                },
                ACHIEVEMENT: {
                    VALUE: outputResData["ACHIEVE-MTD"] ? String(outputResData["ACHIEVE-MTD"]) : "0.0",
                    IS_HL: false
                },
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
            },
            {
                NAME: "YTD",
                BUDGET: {
                    VALUE: outputResData["BUDGET-YTD"] ? String(outputResData["BUDGET-YTD"]) : "0.0",
                    IS_HL: false
                },
                ACHIEVEMENT: {
                    VALUE: outputResData["ACHIEVE-YTD"] ? String(outputResData["ACHIEVE-YTD"]) : "0.0",
                    IS_HL: false
                },
                LY: {
                    VALUE: outputResData["LY-YTD"] ? String(outputResData["LY-YTD"]) : "0.0",
                    IS_HL: false
                },
                CY: {
                    VALUE: outputResData["CY-YTD"] ? String(outputResData["CY-YTD"]) : "0.0",
                    IS_HL: false
                },
                GROWTH: {
                    VALUE: isValueAvailable(outputResData["LY-YTD"]) ? parseFloat(((outputResData["CY-YTD"] / outputResData["LY-YTD"]) - 1) * 100).toFixed(1) : "0.0",
                    IS_HL: false
                }
            }
        ]
    };
    return returnObj;
}