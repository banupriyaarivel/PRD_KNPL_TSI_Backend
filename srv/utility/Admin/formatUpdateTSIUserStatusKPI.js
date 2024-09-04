exports.formatUpdateTSIUserStatusData = (output) => {
    const outRes = output.results?.length ? output.results[0] : {
        OPERATION_STATUS: 'USER_NOT_FOUND'
    };
    return outRes;
}