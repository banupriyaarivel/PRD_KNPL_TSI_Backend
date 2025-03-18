const { PROCEDURES, HTTP_CODE, API_MESSAGES } = require('./constant/constants');
const { formatSalesGroupData } = require('./utility/salesGroup');
const { getProcResult } = require('./utility/helper/procResult');
const { getUserInfoByAPIAccess } = require('./utility/getUserInfoByAPIAccess');
const { RoleEnum } = require('./enum/Role');

async function requestValidator(req) {
    const reqObj = req.data;
    const userInfo = req?._.req?.context?.user;
    console.log('reqObj===', reqObj);
    console.log('SSO User===', userInfo);
    if(reqObj && reqObj.salesGroup) {
       const response = await getUserInfoByAPIAccess(userInfo.id);
    // code for debug locally
        //  let response = {
        //     "totalResults" : 1 ,
        //     "resources" : [
        //         {
        //             "emails" :  [ {
        //                 values : "jitender2@nerolac.com"
        //             }  ] 
        //         }
        //     ]
        // } 
        if (response && (response.totalResults || reqObj.SALES_GROUPS[0].SALES_GROUP)) {
            const actualEmail = response.resources[0]?.emails[0]?.value || '';
            console.log('Actual email===', actualEmail);
            const output = await getProcResult(PROCEDURES.GET_USER_SALES_GROUP_BY_EMAIL, [actualEmail]);
            const result = formatSalesGroupData(output);
            // This validation is applicable for TSI role only
            if (result && result.ROLE_ID === RoleEnum.TSI) {
                if (result && result.SALES_GROUP != reqObj.salesGroup) {
                    return req.reject(HTTP_CODE.UNAUTHORIZED, API_MESSAGES.UNAUTHORIZED);
                }
            }
        }          
    }
}

module.exports = requestValidator;

// const { PROCEDURES, HTTP_CODE, API_MESSAGES } = require('./constant/constants');
// const { formatSalesGroupData } = require('./utility/salesGroup');
// const { getProcResult } = require('./utility/helper/procResult');
// const { getUserInfoByAPIAccess } = require('./utility/getUserInfoByAPIAccess');
// const { RoleEnum } = require('./enum/Role');

// async function requestValidator(req) {
//     const reqObj = req.data;
//     const userInfo = req?._.req?.context?.user;
//     console.log('reqObj===', reqObj);
//     console.log('SSO User===', userInfo);

//     // Check if userInfo is available and request body has salesGroup
//     if (!userInfo) {
//         console.error('No user info found in the request');
//         return req.reject(HTTP_CODE.UNAUTHORIZED, API_MESSAGES.UNAUTHORIZED);
//     }

//     if (reqObj && reqObj.SALES_GROUPS[0].SALES_GROUP) {
//         try {
//             const response = await getUserInfoByAPIAccess(userInfo.id);
//             console.log('getUserInfoByAPIAccess.response',response);
//             if (response && response.totalResults > 0 && Array.isArray(response.resources) && response.resources.length > 0) {
//                 const actualEmail = response.resources[0]?.emails[0]?.value || '';
//                 console.log('Actual email===', actualEmail);

//                 const output = await getProcResult(PROCEDURES.GET_USER_SALES_GROUP_BY_EMAIL, [actualEmail]);
//                 const result = formatSalesGroupData(output);

//                 // Validate sales group for TSI role
//                 if (result && result.ROLE_ID === RoleEnum.TSI) {
//                     if (!result.SALES_GROUP || result.SALES_GROUP !== reqObj.salesGroup) {
//                         console.error('Unauthorized: Sales Group mismatch');
//                         return req.reject(HTTP_CODE.UNAUTHORIZED, API_MESSAGES.UNAUTHORIZED);
//                     }
//                 }
//             } else {
//                 console.error('No user information found in external service');
//                 return req.reject(HTTP_CODE.UNAUTHORIZED, API_MESSAGES.UNAUTHORIZED);
//             }
//         } catch (error) {
//             console.error('Error while processing user info:', error);
//             return req.reject(HTTP_CODE.INTERNAL_SERVER_ERROR, 'Internal server error');
//         }
//     } else {
//         console.error('Sales group is missing in the request');
//         return req.reject(HTTP_CODE.BAD_REQUEST, 'Sales group is required');
//     }
// }

// module.exports = requestValidator;
