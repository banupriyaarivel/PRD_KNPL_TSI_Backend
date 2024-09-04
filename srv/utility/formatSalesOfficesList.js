exports.formatSalesOfficesListData = (output) => {
    const salesOfficeList = output.results?.length ? output.results : [];
    const outObj = {
        SALES_OFFICES: salesOfficeList,
        TOTAL_COUNT: salesOfficeList.length || 0
    };
    return outObj;
}