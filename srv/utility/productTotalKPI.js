const { isValueAvailable } = require('./helper/isValueAvailable');

exports.formatProductTotalData = (output) => {
    const outObj = {
        VALUE: null,
        VOLUME: null
    };
    const outputResults = output.results;
    for (let i = 0, arrL = outputResults.length; i < arrL; i++) {
        let outputResDataValue = outputResults[i];
        outObj.VALUE = {
            VALUE: isValueAvailable(outputResDataValue["VALUE"]) ? String(outputResDataValue["VALUE"]) : "0.0",
            IS_HL: false
        };
        outObj.VOLUME = {
            VALUE: isValueAvailable(outputResDataValue["VOLUME"]) ? String(outputResDataValue["VOLUME"]) : "0.0",
            IS_HL: false
        }
    }
    return outObj;
}