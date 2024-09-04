const cds = require('@sap/cds');
const { PROCEDURES, API_NAME, API_MESSAGES } = require('../constant/constants');
const { getProcResult } = require('../utility/helper/procResult');
const { formatLookupListData } = require('../utility/lookup');
const { formatTSIUserListData } = require('../utility/Admin/formatTSIUserList');
const { formatUpdateTSIUserStatusData } = require('../utility/Admin/formatUpdateTSIUserStatusKPI');
const { formatTSIUsersCountData } = require('../utility/Admin/formatTSIUsersCountKPI');

module.exports = cds.service.impl(function () {
    this.on(API_NAME.ADMIN_SALES_GROUP_LIST, async ({ data: {
        searchText
    } }) => {
        try {
            const output = await getProcResult(PROCEDURES.ADMIN_SALES_GROUP_LIST, [
                searchText && searchText.length ? searchText : null
            ]);
            const out = formatLookupListData(output);
            return out;
        } catch (error) {
            console.error(error)
            return false;
        }
    });

    this.on(API_NAME.ADMIN_TSI_USER_LIST, async ({ data: {
        searchText, salesGroup, appStatus, sortOrder, sortColumn, topRec, skipRec, roleId
    } }) => {
        try {
            const output = await getProcResult(PROCEDURES.ADMIN_TSI_USER_LIST, [
                searchText && searchText.length ? searchText : null,
                salesGroup && salesGroup.length ? salesGroup.join() : null,
                appStatus && appStatus.length ? appStatus : null,
                sortOrder && sortOrder.length ? sortOrder : null,
                sortColumn && sortColumn.length ? sortColumn : null,
                topRec, skipRec,
                roleId ? roleId : null
            ]);
            const out = formatTSIUserListData(output);
            return out;
        } catch (error) {
            console.error(error)
            return false;
        }
    });

    this.on(API_NAME.ADMIN_UPDATE_TSI_USER_STATUS, async ({ data: {
        email, isActivated
    } }) => {
        try {
            const output = await getProcResult(PROCEDURES.ADMIN_UPDATE_TSI_USER_STATUS, [
                email && email.length ? email : null,
                isActivated
            ]);
            const out = formatUpdateTSIUserStatusData(output);
            let res = '';
            switch (out.OPERATION_STATUS) {
                case 'USER_NOT_FOUND':
                    res = API_MESSAGES.TSI_USER_NOT_FOUND;
                    break;
                case 'USER_STATUS_ALREADY_UPDATED':
                    res = API_MESSAGES.TSI_USER_ALREDY_UPDATED;
                    break;
                case 'USER_STATUS_UPDATED':
                    res = API_MESSAGES.TSI_USER_UPDATE_SUCCESS;
                    break;
                default: res = API_MESSAGES.GENERIC;
            }
            return res;
        } catch (error) {
            console.error(error)
            return false;
        }
    });

    this.on(API_NAME.ADMIN_TSI_USERS_COUNT, async () => {
        try {
            const output = await getProcResult(PROCEDURES.ADMIN_TSI_USERS_COUNT, []);
            const out = formatTSIUsersCountData(output);
            return out;
        } catch (error) {
            console.error(error)
            return false;
        }
    });
    
    this.on(API_NAME.ADMIN_MASTER_ROLES_LIST, async () => {
        try {
            const output = await getProcResult(PROCEDURES.ADMIN_MASTER_ROLES_LIST, []);
            const out = formatLookupListData(output);
            return out;
        } catch (error) {
            console.error(error)
            return false;
        }
    });
})