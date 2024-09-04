exports.formatCustomerDetailsData = (output) => {
    const outObj = output.results?.length ? output.results[0] : {};
    return outObj;
}