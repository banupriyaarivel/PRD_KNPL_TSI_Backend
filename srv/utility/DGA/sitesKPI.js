exports.formatDGASitesData = (output) => {
    console.log("formatDGASitesData===", output);
    const outputData = output.results.length ? output.results[0] : {};
    const out = [];
    out.push({
        NAME: 'KNPL to Contractors',
        UOM: "Value (In Lakhs)",
        MTD: outputData['KNPL_MTD_GIVEN'] !== null 
            ? String(outputData['KNPL_MTD_GIVEN']) 
            : "0.0",
        YTD: outputData['KNPL_YTD_GIVEN'] !== null 
            ? String(outputData['KNPL_YTD_GIVEN']) 
            : "0.0"
    });
    out.push({
        NAME: 'Contractors to KNPL',
        UOM: "Value (In Lakhs)",
        MTD: outputData['CONTRACTOR_MTD_GIVEN'] !== null 
            ? String(outputData['CONTRACTOR_MTD_GIVEN']) 
            : "0.0",
        YTD: outputData['CONTRACTOR_YTD_GIVEN'] !== null 
            ? String(outputData['CONTRACTOR_YTD_GIVEN']) 
            : "0.0"
    });
    return out;
}