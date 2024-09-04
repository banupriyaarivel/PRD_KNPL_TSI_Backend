exports.formatDepotByRSMData = (output) => {
    const depotList = output.results?.length ? output.results : [];
    const outObj = {
        DEPOT: depotList,
        TOTAL_COUNT: depotList.length || 0
    };
    return outObj;
}