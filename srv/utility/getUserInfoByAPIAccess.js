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

// const cds = require('@sap/cds');

// exports.getUserInfoByAPIAccess = async (id) => {
//     try {
//         // Establish connection to the 'user-api-access' service
//         const userAPI = await cds.connect.to('user-api-access');
//         console.log('Calling getUserInfo API with user ID:', id);

//         // Send the query to the user API
//         const response = await userAPI.send({
//             query: `GET /Users?filter=origin eq 'sap.custom' and userName eq '${id}'`,
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });

//         console.log('user-api-access Result===', response);

//         // Ensure the response has the expected structure
//         if (!response || !response.totalResults || !Array.isArray(response.resources)) {
//             console.error('Unexpected response format:', response);
//             return null; // Or handle the error appropriately
//         }

//         return response;
//     } catch (error) {
//         // Log any errors that occur during the API call
//         console.error('Error while calling getUserInfo API:', error);
//         throw new Error('Failed to fetch user info by API access'); // You can customize this error message
//     }
// };
