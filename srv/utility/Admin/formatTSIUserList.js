exports.formatTSIUserListData = (output) => {
    const userList = output?.results0?.length ? output.results0 : [];
    const totalCount =
        output?.results1?.length ? output.results1[0].TOTAL_COUNT : 0;

    userList.forEach((tempUser) => {
        tempUser.SALES_GROUP = tempUser.SALES_GROUP ? tempUser.SALES_GROUP.split(',') : null;
    });

    const outObj = {
        USERS: userList,
        TOTAL_COUNT: totalCount
    };
    return outObj;
}