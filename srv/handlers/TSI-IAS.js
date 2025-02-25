// url : - az8wsv0bp.accounts.ondemand.com\
// endPoint - /scim/Users
// 'Authorization': 'Basic QWxlcnRiYXNpc0BuZXJvbGFjLmNvbTpEaWdpdGFsQDEyMw=='

// IAS Functions for create, find, update, and resetPassword

const https = require('https');
const querystring = require('querystring');

const options = {
  hostname: 'ay5hdx9dw.trial-accounts.ondemand.com',
  path: `/scim/`,
  method: 'GET',
  headers: {
    'Authorization': 'Basic MGQ3ZTM0YTQtZTk5ZS00ZDY1LThmNzQtYjBhZDZmNzZmMjJhOl1uY2VuV1JXa1J4UklXZ0FKNjZ3MWpdSkJ2aUQtS2pbQmM='
  }
};



function findUser(email) {
  return new Promise((resolve, reject) => {
    const filter = `emails.value eq "${email}"`;
    const queryParams = querystring.stringify({ filter });
    options.path = `/scim/Users?${queryParams}`
    // console.log(options)
    const request = https.request(options, (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk.toString();
      });
      response.on('end', () => {
        try {
          const allData = JSON.parse(data);
          console.log(allData)
          resolve(allData);
        } catch (error) {
          reject(`Error parsing data: ${error.message}`);
        }
      });
    });

    request.on('error', (error) => {
      reject(`Request failed: ${error.message}`);
    });

    request.end();
  });
}

// findIASUser('satishsurve@nerolac.com')
function createUser(newUser) {
  return new Promise((resolve, reject) => {
      options.method = 'POST'
      options.headers[`Content-Type`] = 'application/scim+json'
    const requestData = JSON.stringify(newUser);

    const request = https.request(options, (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk.toString();
      });

      response.on('end', () => {
        try {
          const responseData = JSON.parse(data);
          resolve(responseData);
        } catch (error) {
          reject(`Error parsing response data: ${error.message}`);
        }
      });
    });

    request.on('error', (error) => {
      reject(`Request failed: ${error.message}`);
    });

    request.write(requestData);
    request.end();
  });
}

function updateUser(id ,newData){
  return new Promise((resolve, reject) => {
  options.path = `/scim/Users/${id}`
  options.method = 'PATCH'
  options.headers[`Content-Type`] = 'application/scim+json'
  const requestData = JSON.stringify(newData);

  const request = https.request(options, (response) => {
    let data = '';

    response.on('data', (chunk) => {
      data += chunk.toString();
    });

    response.on('end', () => {
      try {
        // const responseData = JSON.parse(data);
        console.log(data)
        resolve({message : 'User information has been updated.', Scim_Id : id});
      } catch (error) {
        reject(`Error parsing response data: ${error.message}`);
      }
    });
  });

  request.on('error', (error) => {
    reject(`Request failed: ${error.message}`);
  });

  request.write(requestData);
  request.end();
});

  
}







module.exports = { findUser, createUser, updateUser }







