const { PROCEDURES } = require('../constant/constants');
const { getProcResult } = require('../utility/helper/procResult');
const { formatIncentiveData } = require('../utility/incentivesKPI');
const { formatIncentiveCircularData } = require('../utility/incentiveCircular');

async function getIncentiveKPIs({
    data: {
        salesGroup
    }
}) {
    try {
        const output = await getProcResult(PROCEDURES.INCENTIVE_KPI, [salesGroup]);
        const out = formatIncentiveData(output);
        return out;
    } catch (error) {
        console.error(error)
        return false;
    }
};

async function getIncentiveCircularDetails({}) {
    try {
        const out = formatIncentiveCircularData();
        return out;
    } catch (error) {
        console.error(error)
        return false;
    }
};

module.exports = { 
    getIncentiveKPIs,
    getIncentiveCircularDetails
};