const cds = require('@sap/cds');
const { API_NAME } = require('../constant/constants');
const dealerService = require('./DealerCodes');

async function getInfluencerLoyaltyParticipantKPI({
    data: {
        salesGroup
    }
}) {
    try {
        const dealerCode = await dealerService.getDealerCodesBySalesGroup(salesGroup);
        const pragatiAPI = await cds.connect.to('pragati-api');
        const output = await pragatiAPI.post('/tsi/' + API_NAME.PRAGATI_INFLUENCER_LOYALTY_PARTICIPANT_KPI,
            { dealerCode });
        const out = output?.length ? output : [];
        return out;
    } catch (error) {
        console.error(error)
        return false;
    }
};

async function getInfluencerList({
    data: {
        salesGroup, searchText, topRec, skipRec
    }
}) {
    try {
        const dealerCode = await dealerService.getDealerCodesBySalesGroup(salesGroup);
        const pragatiAPI = await cds.connect.to('pragati-api');
        const output = await pragatiAPI.post('/tsi/' + API_NAME.PRAGATI_INFLUENCER_LIST_KPI,
            { dealerCode, searchText, topRec, skipRec }
        );
        let out = {
            TOTAL_COUNT: 0,
            INFLUENCERS: []
        };
        if (output) {
            out = output;
        }
        return out;
    } catch (error) {
        console.error(error)
        return false;
    }
};

async function getInfluencerHLKPIs({
    data: {
        salesGroup, kpiType, columnHeader, rowHeader, searchText, schemeCode, sortOrder,
        sortColumn, topRec, skipRec
    }
}) {
    try {
        const dealerCode = await dealerService.getDealerCodesBySalesGroup(salesGroup);
        const pragatiAPI = await cds.connect.to('pragati-api');
        const output = await pragatiAPI.post('/tsi/' + API_NAME.PRAGATI_INFLUENCER_HL_KPI,
            {
                dealerCode, kpiType, columnHeader, rowHeader, searchText, schemeCode, sortOrder,
                sortColumn, topRec, skipRec
            }
        );
        let out = {
            TOTAL_COUNT: 0,
            INFLUENCERS: []
        };
        if (output) {
            out = output;
        }
        return out;
    } catch (error) {
        console.error(error)
        return false;
    }
};

async function getInfluencerSchemeKPIs({
    data: {
        salesGroup
    }
}) {
    try {
        const dealerCode = await dealerService.getDealerCodesBySalesGroup(salesGroup);
        const pragatiAPI = await cds.connect.to('pragati-api');
        const output = await pragatiAPI.post('/tsi/' + API_NAME.PRAGATI_INFLUENCER_SCHEME_KPI,
            { dealerCode }
        );
        let out = [];
        if (output) {
            out = output;
        }
        return out;
    } catch (error) {
        console.error(error)
        return false;
    }
};

async function getInfluencerDetailKPIs({
    data: {
        influencerID
    }
}) {
    try {
        const pragatiAPI = await cds.connect.to('pragati-api');
        const output = await pragatiAPI.post('/tsi/' + API_NAME.PRAGATI_INFLUENCER_DETAIL_KPI,
            { influencerID });
        let out = {};
        if (output) {
            out = output;
        }
        return out;
    } catch (error) {
        console.error(error)
        return false;
    }
};

async function getInfluencerPointsDetailKPIs({
    data: {
        influencerID
    }
}) {
    try {
        const pragatiAPI = await cds.connect.to('pragati-api');
        const output = await pragatiAPI.post('/tsi/' + API_NAME.PRAGATI_INFLUENCER_POINTS_DETAIL_KPI,
            { influencerID });
        let out = [];
        if (output) {
            out = output;
        }
        return out;
    } catch (error) {
        console.error(error)
        return false;
    }
};

async function getProductCategoryList() {
    try {
        const pragatiAPI = await cds.connect.to('pragati-api');
        const output = await pragatiAPI.get('/tsi/' + API_NAME.PRAGATI_PRODUCT_CATEGORY_LIST);
        let out = [];
        if (output) {
            out = output;
        }
        return out;
    } catch (error) {
        console.error(error)
        return false;
    }
};

async function getInfluencerPurchaseVolKPIs({
    data: {
        influencerID, categoryCode
    }
}) {
    try {
        const pragatiAPI = await cds.connect.to('pragati-api');
        const output = await pragatiAPI.post('/tsi/' + API_NAME.PRAGATI_INFLUENCER_PURCHASE_VOLUME_KPI,
            { influencerID, categoryCode });
        let out = {};
        if (output) {
            out = output;
        }
        return out;
    } catch (error) {
        console.error(error)
        return false;
    }
};

async function getInfluencerEligibleSchemeKPI ({ data: { influencerID } }) {
    try {
        const pragatiAPI = await cds.connect.to('pragati-api');
        const output = await pragatiAPI.post('/tsi/' + API_NAME.PRAGATI_INFLUENCER_ELIGIBLE_SCHEME_KPI,
            { influencerID });
        let out = [];
        if (output) {
            out = output;
        }
        return out;
    } catch (error) {
        console.error(error)
        return false;
    }
};

async function getInfluencerSchemeDetailsKPI ({ data: { schemeCode, influencerID } }) {
    try {
        const pragatiAPI = await cds.connect.to('pragati-api');
        const output = await pragatiAPI.post('/tsi/' + API_NAME.PRAGATI_INFLUENCER_SCHEME_DETAIL_KPI,
            { schemeCode, influencerID });
        let out = {};
        if (output) {
            out = output;
        }
        return out;
    } catch (error) {
        console.error(error)
        return false;
    }
};

async function getInfluencerEarningsKPI ({ data: { influencerID } }) {
    try {
        const pragatiAPI = await cds.connect.to('pragati-api');
        const output = await pragatiAPI.post('/tsi/' + API_NAME.PRAGATI_INFLUENCER_EARNINGS_KPI,
            { influencerID });
        let out = [];
        if (output) {
            out = output;
        }
        return out;
    } catch (error) {
        console.error(error)
        return false;
    }
};

async function getInfluencerSchemeTargetKPI ({
    data: {
        salesGroup
    }
}) {
    try {
        const dealerCode = await dealerService.getDealerCodesBySalesGroup(salesGroup);
        const pragatiAPI = await cds.connect.to('pragati-api');
        const output = await pragatiAPI.post('/tsi/' + API_NAME.PRAGATI_INFLUENCER_SCHEME_TARGET_KPI,
            { dealerCode }
        );
        let out = {};
        if (output) {
            out = output;
        }
        return out;
    } catch (error) {
        console.error(error)
        return false;
    }
};

module.exports = { 
    getInfluencerLoyaltyParticipantKPI,
    getInfluencerList,
    getInfluencerHLKPIs,
    getInfluencerSchemeKPIs,
    getInfluencerDetailKPIs,
    getInfluencerPointsDetailKPIs,
    getProductCategoryList,
    getInfluencerPurchaseVolKPIs,
    getInfluencerEligibleSchemeKPI,
    getInfluencerSchemeDetailsKPI,
    getInfluencerEarningsKPI,
    getInfluencerSchemeTargetKPI
};