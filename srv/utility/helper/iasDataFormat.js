function newIasUser(data){
    const newUser = {
        "schemas": [
            "urn:ietf:params:scim:schemas:core:2.0:User",
            "urn:ietf:params:scim:schemas:extension:sap:2.0:User",
            "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User"
        ],
        "userName": "",
        "displayName": `${data.FIRST_NAME} ${data.LAST_NAME}`,
        "userType": "Employee",
        "password": `${data.FIRST_NAME}@${new Date().getFullYear()}`,
        "name": {
            "familyName": data.LAST_NAME,
            "givenName": data.FIRST_NAME
        },
        "active": data.IS_ACTIVATED ? true : false,
        "emails": [
            {
                "type": "work",
                "value": data.EMAIL,
                "primary": true
            }
        ],
        "phoneNumbers": [
            {
                "type": "work",
                "value": data.MOBILE,
                "primary": true
            }
        ],
        "urn:ietf:params:scim:schemas:extension:sap:2.0:User": {
            "mailVerified": true,
            "sendMail": true
        }
    };


    return newUser;
}

function updateIasUser(data, IasData){
    // const updateData = {
    //     "schemas": [
    //         "urn:ietf:params:scim:api:messages:2.0:PatchOp"
    //     ],
    //     "Operations": [
    //         {
    //             "op": "replace",
    //             "value": {
    //                 "displayName": `${IasData.Resources[0].displayName}`,
    //                 "active": data.IS_ACTIVATED ? true : false,
    //                 "name": {
    //                     "familyName": IasData.Resources[0].name.familyName,
    //                     "givenName": IasData.Resources[0].name.givenName
    //                 },
    //                 "emails": [
    //                     {
    //                         "value": IasData.Resources[0].emails[0].value,
    //                         "type": "work",
    //                         "primary": true
    //                     }
    //                 ],
    //                 "phoneNumbers": [
    //                     {
    //                         "type": "work",
    //                         "value": data.MOBILE,
    //                         "primary": true
    //                     }
    //                 ]
    //             }
    //         }
    //     ]
    // };

    const updateData = {
        "schemas": [
            "urn:ietf:params:scim:api:messages:2.0:PatchOp"
        ],
        "Operations": [
            {
                "op": "replace",
                "value": {
                    "active": data.IS_ACTIVATED ? true : false ,
                }
            }
        ]
    };
    return updateData
}




module.exports = {newIasUser , updateIasUser}