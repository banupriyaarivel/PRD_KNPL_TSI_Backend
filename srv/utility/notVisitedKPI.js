exports.formatNotVisitedData = (output) => {
    const outArr = [];    
    const outputResults = output.results;
    for (let i = 0, arrL = outputResults.length; i < arrL; i++) {
        let outputResData = outputResults[i];
        outArr.push({
            NAME: 'Today',
            CUSTOMER_NOS: {
                VALUE: null,
                IS_HL: false
            },
            SITE_NOS: {
                VALUE: null,
                IS_HL: false
            }
        });
        outArr.push({
            NAME: 'Yesterday',
            CUSTOMER_NOS: {
                VALUE: null,
                IS_HL: false
            },
            SITE_NOS: {
                VALUE: null,
                IS_HL: false
            }
        });
        // outArr.push({
        //     NAME: 'MTD*',
        //     CUSTOMER_NOS: {
        //         VALUE: parseFloat(outputResData["Customer-MTD*"]).toFixed(0) || "0",
        //         IS_HL: true
        //     },
        //     SITE_NOS: {
        //         VALUE: parseFloat(outputResData["Site-MTD*"]).toFixed(0) || "0",
        //         IS_HL: true
        //     }
        // });
        outArr.push({
            NAME: 'MTD*',
            CUSTOMER_NOS: {
                VALUE: null,
                IS_HL: false
            },
            SITE_NOS: {
                VALUE: null,
                IS_HL: false
            }
        });
        outArr.push({
            NAME: 'MTD',
            CUSTOMER_NOS: {
                VALUE: parseFloat(outputResData["Customer-MTD"]).toFixed(0) || "0",
                IS_HL: false
            },
            SITE_NOS: {
                VALUE: parseFloat(outputResData["Site-MTD"]).toFixed(0) || "0",
                IS_HL: false
            }
        });
        outArr.push({
            NAME: 'YTD',
            CUSTOMER_NOS: {
                VALUE: parseFloat(outputResData["Customer-YTD"]).toFixed(0) || "0",
                IS_HL: false
            },
            SITE_NOS: {
                VALUE: parseFloat(outputResData["Site-YTD"]).toFixed(0) || "0",
                IS_HL: false
            }
        });
    }
    return outArr;
};