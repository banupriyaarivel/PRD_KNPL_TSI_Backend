exports.formatASMUserListData = (output) => {
    const usersList = output.results?.length ? output.results : [];
    const outObj = {
        USERS: usersList,
        TOTAL_COUNT: usersList.length || 0
    };
    return outObj;
}