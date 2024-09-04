exports.getElementByName = (name, arrData) => {
    const obj = arrData.find(item => item.Name === name);
    if (obj !== undefined) {
        return (obj.Value).toString();
    } else {
        return "0";
    }
}