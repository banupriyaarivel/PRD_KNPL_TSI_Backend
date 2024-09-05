exports.formatCustomerHLODData = (output) => {
    const tempCustomersList = output?.results0?.length ? output.results0 : [];
    const totalCount =
        output?.results1?.length ? output.results1[0].TOTAL_COUNT : 0;
    const customersList = tempCustomersList.map((customer) => {
        return {
            CUSTOMER_CODE: customer.CUSTOMER_CODE,
            CUSTOMER_NAME: customer.CUSTOMER_NAME,
            OS:
                customer.OS ? String(customer.OS) : '0.0',
            OS60:
                customer.OS60 ? String(customer.OS60) : '0.0',
            MONTH_BEGINNING:
                customer.MONTH_BEGINNING ? String(customer.MONTH_BEGINNING) : '0',
            CURRENT_OD:
                customer.CURRENT_OD ? String(customer.CURRENT_OD) : '0.0',
            TODAY:
                customer.TODAY ? String(customer.TODAY) : '0.0',
            TOMORROW:
                customer.TOMORROW ? String(customer.TOMORROW) : '0.0',
            NEXT_3_DAYS:
                customer.NEXT_3_DAYS ? String(customer.NEXT_3_DAYS) : '0.0',
            NEXT_5_DAYS:
                customer.NEXT_5_DAYS ? String(customer.NEXT_5_DAYS) : '0.0',
            NEXT_10_DAYS:
                customer.NEXT_10_DAYS ? String(customer.NEXT_10_DAYS) : '0.0'
        };
    });
    const outObj = {
        CUSTOMERS: customersList,
        TOTAL_COUNT: totalCount
    };
     return outObj;
}