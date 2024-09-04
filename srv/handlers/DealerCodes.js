const { PROCEDURES } = require('../constant/constants');
const { getProcResult } = require('../utility/helper/procResult');
const { formatLookupListData } = require('../utility/lookup');


async function getDealerCodesBySalesGroup(salesGroup) {
    const data = await getProcResult(PROCEDURES.LOOKUP, ['CUSTOMER', salesGroup]);
    const customersData = formatLookupListData(data);
    const dealerCode = customersData.map(u => u.CODE).join(',');
    return dealerCode;
}

module.exports = { 
    getDealerCodesBySalesGroup
};
