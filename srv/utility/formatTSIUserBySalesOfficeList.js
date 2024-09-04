exports.formatTSIUserBySalesOfficeListData = (output) => {
    const usersList = output?.results0?.length ? output.results0 : [];
    const totalCount =
        output?.results1?.length ? output.results1[0].TOTAL_COUNT : 0;
    const outObj = {
        USERS: usersList,
        TOTAL_COUNT: totalCount
    };
    return outObj;
};