
const { PROCEDURES } = require('../constant/constants');
const { getProcResult } = require('../utility/helper/procResult');
const { formatASMUserListData } = require('../utility/formatASMUserList');
const { formatSalesOfficesListData } = require('../utility/formatSalesOfficesList');
const { formatTSIUserBySalesOfficeListData } = require('../utility/formatTSIUserBySalesOfficeList');
const { formatDepotByRSMData } = require('../utility/formatDepotByRSMData');

async function getASMUserList (req) {
    try {
        const userInfo = req?._.req?.context?.user;
        const output = await getProcResult(PROCEDURES.ASM_USER_LIST, [
            userInfo.id, req.data.searchText || ''
        ]);
        console.log('ASM_USER_LIST===', output);
        const out = formatASMUserListData(output);
        return out;
    } catch (error) {
        console.error(error)
        return false;
    }
};

async function getSalesOfficesByASMRSMList (req) {
    try {
        const userInfo = req?._.req?.context?.user;
        const output = await getProcResult(PROCEDURES.SALES_OFFICES_BY_ASM_RSM_LIST, [
            userInfo.id, req.data.searchText || ''
        ]);
        const out = formatSalesOfficesListData(output);
        return out;
    } catch (error) {
        console.error(error)
        return false;
    }
};

async function getTSIUsersBySalesOfficeList ({
    data: {
        salesGroup, searchText, sortOrder, sortColumn, topRec, skipRec
    }
}) {
    try {
        const output = await getProcResult(PROCEDURES.TSI_USERS_BY_SALES_OFFICE_LIST, [
            salesGroup, 
            searchText, 
            sortOrder, sortColumn, 
            topRec || 10,
            skipRec || 0
        ]);
        let out = formatTSIUserBySalesOfficeListData(output);
        return out;
    } catch (error) {
        console.error(error)
        return false;
    }
};

async function getDepotByRSM (req) {
    try {
        const userInfo = req?._.req?.context?.user;
        const output = await getProcResult(PROCEDURES.DEPOT_BY_RSM, [
            userInfo.id, req.data.searchText || ''
        ]);
        const out = formatDepotByRSMData(output);
        return out;
    } catch (error) {
        console.error(error)
        return false;
    }
};

module.exports = { 
    getASMUserList,
    getSalesOfficesByASMRSMList,
    getTSIUsersBySalesOfficeList,
    getDepotByRSM
};