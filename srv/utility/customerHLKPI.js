exports.formatCustomerHLData = (output) => {
    const tempCustomersList = output?.results0?.length ? output.results0 : [];
    const totalCount =
        output?.results1?.length ? output.results1[0].TOTAL_COUNT : 0;
    const customersList = tempCustomersList.map((customer) => {
        return {
            CUSTOMER_CODE: customer.CUSTOMER_CODE,
            CUSTOMER_NAME: customer.CUSTOMER_NAME,
            CEI:
                customer.CEI ? String(customer.CEI) : '0.0',
            VALUE_MTD_TILL_YESTERDAY:
                customer.VALUE_MTD_TILL_YESTERDAY ? String(customer.VALUE_MTD_TILL_YESTERDAY) : '0.0',
            VISITS_MTD_TILL_YESTERDAY:
                customer.VISITS_MTD_TILL_YESTERDAY ? String(customer.VISITS_MTD_TILL_YESTERDAY) : '0',
            OD_YTD:
                customer.OD_YTD ? String(customer.OD_YTD) : '0.0',
            OS_YTD:
                customer.OS_YTD ? String(customer.OS_YTD) : '0.0',
            COLLECTION_MTD_TILL_YESTERDAY:
                customer.COLLECTION_MTD_TILL_YESTERDAY ? String(customer.COLLECTION_MTD_TILL_YESTERDAY) : '0.0'
        };
    });
    const outObj = {
        CUSTOMERS: customersList,
        TOTAL_COUNT: totalCount
    };
    return outObj;
}