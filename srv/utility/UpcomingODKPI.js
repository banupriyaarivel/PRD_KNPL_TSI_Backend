exports.formatUpcomingODData = (output) => {
    const outArr = [];
    const outputResults = output.results;
    for (let i = 0, arrL = outputResults.length; i < arrL; i++) {
        let outputResData = outputResults[i];
        outArr.push({
            NAME: 'Today',
            CY: {
                VALUE: outputResData["Today"] ? String(outputResData["Today"]) : "0.0",
                IS_HL: true
            }
        });
        outArr.push({
            NAME: 'Tomorrow',
            CY: {
                VALUE: outputResData["Tomorrow"] ? String(outputResData["Tomorrow"]) : "0.0",
                IS_HL: true
            }
        });
        outArr.push({
            NAME: "Next 3 Days",
            CY: {
                VALUE: outputResData["Next3Days"] ? String(outputResData["Next3Days"]) : "0.0",
                IS_HL: true
            }
        });
        outArr.push({
            NAME: "Next 5 Days",
            CY: {
                VALUE: outputResData["Next5Days"] ? String(outputResData["Next5Days"]) : "0.0",
                IS_HL: true
            }
        });
        outArr.push({
            NAME: "Next 10 Days",
            CY: {
                VALUE: outputResData["Next10Days"] ? String(outputResData["Next10Days"]) : "0.0",
                IS_HL: true
            }
        });
    }
    return outArr;
}

exports.formatCustomerUpcomingODData = (output) => {
    const outArr = [];
    const outputResults = output.results;
    for (let i = 0, arrL = outputResults.length; i < arrL; i++) {
        let outputResData = outputResults[i];
        outArr.push({
            NAME: 'Today',
            CY: {
                VALUE: outputResData["Today"] ? String(outputResData["Today"]) : "0.0",
                IS_HL: false
            }
        });
        outArr.push({
            NAME: 'Tomorrow',
            CY: {
                VALUE: outputResData["Tomorrow"] ? String(outputResData["Tomorrow"]) : "0.0",
                IS_HL: false
            }
        });
        outArr.push({
            NAME: "Next 3 Days",
            CY: {
                VALUE: outputResData["Next3Days"] ? String(outputResData["Next3Days"]) : "0.0",
                IS_HL: false
            }
        });
        outArr.push({
            NAME: "Next 5 Days",
            CY: {
                VALUE: outputResData["Next5Days"] ? String(outputResData["Next5Days"]) : "0.0",
                IS_HL: false
            }
        });
        outArr.push({
            NAME: "Next 10 Days",
            CY: {
                VALUE: outputResData["Next10Days"] ? String(outputResData["Next10Days"]) : "0.0",
                IS_HL: false
            }
        });
    }
    return outArr;
}