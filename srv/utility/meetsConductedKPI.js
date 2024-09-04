exports.formatMeetsConductedData = (output) => {
    const outArr = [];
    outArr.push({
        NAME: 'Today',
        NOS: {
            VALUE: null,
            IS_HL: false
        }
    });
    outArr.push({
        NAME: 'Yesterday',
        NOS: {
            VALUE: "0",
            IS_HL: false
        }
    });
    outArr.push({
        NAME: 'MTD*',
        NOS: {
            VALUE: "0",
            IS_HL: false
        }
    });
    outArr.push({
        NAME: 'MTD',
        NOS: {
            VALUE: "0",
            IS_HL: false
        }
    });
    outArr.push({
        NAME: 'YTD',
        NOS: {
            VALUE: "0",
            IS_HL: false
        }
    });

    return outArr;
};