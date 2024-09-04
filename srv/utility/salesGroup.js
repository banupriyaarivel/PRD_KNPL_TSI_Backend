exports.formatSalesGroupData = (output) => {
    console.log('formatSalesGroupData output===', output);
    const outObj = output.results?.length ? output.results[0] : {};
    return outObj;
}