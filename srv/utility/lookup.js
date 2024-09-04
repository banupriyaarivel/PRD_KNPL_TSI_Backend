exports.formatLookupListData = (output) => {
    const outArr = output.results?.length ? output.results : [];
    return outArr;
};