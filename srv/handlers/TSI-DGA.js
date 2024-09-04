const cds = require('@sap/cds');
const { PROCEDURES, API_NAME } = require('../constant/constants');
const dealerService = require('./DealerCodes');
const { getProcResult } = require('../utility/helper/procResult');
const { formatBusinessGenerationData } = require('../utility/DGA/businessGenerationKPI');
const {
    formatBusinessGenerationSummaryData
} = require('../utility/DGA/businessGenerationSummaryKPI');
const { formatDGALeadsData } = require('../utility/DGA/leadsKPI');
const { formatDGASitesData } = require('../utility/DGA/sitesKPI');
const { formatDealerLeadCountsData } = require('../utility/DGA/dealerLeadCounts');
const { formatTotalMRValueData } = require('../utility/DGA/totalMRValue');
const { formatTotalMRVolumeData } = require('../utility/DGA/totalMRVolume');

async function getInfluencerBusinessGenerationKPI ({
    data: {
        salesGroup
    }
}) {
    try {
        const dealerCode = await dealerService.getDealerCodesBySalesGroup(salesGroup);
        const output = await getProcResult(
            PROCEDURES.DGA_BUSINESS_GENERATION_SOURSEWISE_LEADS_KPI, [dealerCode]);
        const out = formatBusinessGenerationData(output);
        return out;
    } catch (error) {
        console.error(error)
        return false;
    }
};

async function getInfluencerBusinessGenerationSummaryKPI ({
    data: {
        salesGroup
    }
}) {
    try {
        const dealerCode = await dealerService.getDealerCodesBySalesGroup(salesGroup);

        const pragatiAPI = await cds.connect.to('pragati-api');
        const outputAll = await Promise.all([
            getProcResult(PROCEDURES.DGA_BUSINESS_GENERATION_SITES_CONVERTED_KPI, [dealerCode]),
            getProcResult(PROCEDURES.DGA_PRODUCTS_PRICE_KPI, []),

            pragatiAPI.post(
                '/tsi/' + API_NAME.PRAGATI_SECONDARY_GENERATED_PAINTERS_VALUE_KPI,
                { dealerCode }
            ),

            pragatiAPI.post(
                '/tsi/' + API_NAME.PRAGATI_SECONDARY_GENERATED_PAINTERS_VOLUME_KPI,
                { dealerCode }
            )
        ]);

        const [output, productData, valueData, volumeData] = outputAll;

        const out = formatBusinessGenerationSummaryData(
            output, productData, valueData, volumeData
        );
        return out;
    } catch (error) {
        console.error(error);
        return false;
    }
};

async function getInfluencerLeadsKPI ({ data: { influencerID } }) {
    try {
        const output = await getProcResult(
            PROCEDURES.DGA_INFLUENCER_LEADS_KPI, [influencerID]
        );
        const out = formatDGALeadsData(output);
        return out;
    } catch (error) {
        console.error(error)
        return false;
    }
};

async function getInfluencerSitesKPI ({ data: { influencerID } }) {
    try {
        const output = await getProcResult(
            PROCEDURES.DGA_INFLUENCER_SITES_KPI, [influencerID]
        );
        const out = formatDGASitesData(output);
        return out;
    } catch (error) {
        console.error(error)
        return false;
    }
};

// Phase 3 - DGA KPIs
async function getDGADealerLeadCounts ({
    data: {
        salesGroup
    }
}) {
    try {
        const dealerCode = await dealerService.getDealerCodesBySalesGroup(salesGroup);
        const output = await getProcResult(
            PROCEDURES.DGA_DEALER_LEAD_COUNTS_KPI, [dealerCode]);
        const out = formatDealerLeadCountsData(output);
        return out;
    } catch (error) {
        console.error(error)
        return false;
    }
};

async function getDGATotalMRValue ({
    data: {
        salesGroup, customerCode
    }
}) {
    try {
        let dealerCode = ''; 
        if (customerCode && customerCode.length) {
            dealerCode = customerCode;
        } else {
            dealerCode = await dealerService.getDealerCodesBySalesGroup(salesGroup);

        }
        const output = await getProcResult(
            PROCEDURES.DGA_TOTAL_MR_VALUE_KPI, [
                dealerCode
            ]);
        console.log('formatTotalMRValueData===', output);
        const out = formatTotalMRValueData(output);
        return out;
    } catch (error) {
        console.error(error)
        return false;
    }
};

async function getDGATotalMRVolume ({
    data: {
        salesGroup, customerCode
    }
}) {
    try {
        let dealerCode = ''; 
        if (customerCode && customerCode.length) {
            dealerCode = customerCode;
        } else {
            dealerCode = await dealerService.getDealerCodesBySalesGroup(salesGroup);

        }
        const output = await getProcResult(
            PROCEDURES.DGA_TOTAL_MR_VOLUME_KPI, [
                dealerCode
            ]);
        const out = formatTotalMRVolumeData(output);
        return out;
    } catch (error) {
        console.error(error)
        return false;
    }
};

module.exports = { 
    getInfluencerBusinessGenerationKPI,
    getInfluencerBusinessGenerationSummaryKPI,
    getInfluencerLeadsKPI,
    getInfluencerSitesKPI,
    getDGADealerLeadCounts,
    getDGATotalMRValue,
    getDGATotalMRVolume
};
