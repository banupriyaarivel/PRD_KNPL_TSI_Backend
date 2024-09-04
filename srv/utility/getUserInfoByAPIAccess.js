const cds = require('@sap/cds');

exports.getUserInfoByAPIAccess = async (id) => {
    const userAPI = await cds.connect.to('user-api-access');
    console.log('Calling getUserInfo API===');
    const response = await userAPI.send({
        query:`GET /Users?filter=origin eq 'sap.custom' and userName eq '${id}'`,
        headers: {
            'Content-Type':'application/json'
        }
    });
    console.log('user-api-access Result===', response);
    return response;
}