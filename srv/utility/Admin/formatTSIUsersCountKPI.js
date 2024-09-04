exports.formatTSIUsersCountData = (output) => {
    const outputObj = {
        "d": {
            "icon": "sap-icon://user-settings",
            "info": "",
            "infoState": "Neutral",
            "number": 0,
            "numberDigits": 0,
            "numberFactor": "",
            "numberState": "Neutral",
            "numberUnit": "",
            "stateArrow": "None",
            "subtitle": "",
            "title": "User Management"
        }
    };

    const usersTotalCount = output.results?.length ? output.results[0].COUNT : 0;
    outputObj.d.number = usersTotalCount;
    return outputObj;
}