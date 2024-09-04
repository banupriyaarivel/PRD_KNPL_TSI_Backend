exports.isValueAvailable = (val) => {
    if (val && Number(val)) {
        return true;
    }
    return false;
}