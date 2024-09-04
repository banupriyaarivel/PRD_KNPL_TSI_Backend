exports.formatDGALeadsData = (output) => {
    console.log("formatDGALeadsData===", output);
    const outputData = output.results.length ? output.results[0] : {};
    const outArr = [];
    outArr.push({
        NAME: 'KNPL to Contractors',
        UOM: "Count",
        MTD: {
            GIVEN: String(outputData['KNPL_MTD_GIVEN'] || 0),
            CONVERTED: String(outputData['KNPL_MTD_CONVERTED'] || 0)
        },
        YTD: {
            GIVEN: String(outputData['KNPL_YTD_GIVEN'] || 0),
            CONVERTED: String(outputData['KNPL_YTD_CONVERTED'] || 0)
        }
    });
    outArr.push({
        NAME: 'Contractors to KNPL',
        UOM: "Count",
        MTD: {
            GIVEN: String(outputData['CONTRACTOR_MTD_GIVEN'] || 0),
            CONVERTED: String(outputData['CONTRACTOR_MTD_CONVERTED'] || 0)
        },
        YTD: {
            GIVEN: String(outputData['CONTRACTOR_YTD_GIVEN'] || 0),
            CONVERTED: String(outputData['CONTRACTOR_YTD_CONVERTED'] || 0)
        }
    });
    return outArr;
}