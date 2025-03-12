exports.PROCEDURES = {
    SALES_VALUES_KPI: 'SalesValueKPI',
    ACTIVE_DEALER_KPI: 'ActiveDealerKPI',
    OSOD_KPI: 'OSODKPI',
    NEW_CCD_KPI: 'NewCCDsKPI',
    NEW_NDO_KPI: 'NewNDOKPI',
    UPCOMINGOD_KPI: 'UpcomingODKPI',
    COLLECTION_KPI: 'CollectionKPI',
    VOLUME_KPI: 'VolumeKPI',
    BELOW_THRESHOLD_KPI: 'BelowThresholdKPI',
    BUDGET_KPI: 'BudgetKPI',
    OVERALL_VISITS_KPI: 'OverallVisitsKPI',
    SITE_INFLUENCER_VISITS_KPI: 'SiteInfluencerVisitsKPI',
    CUSTOMER_PROSPECT_VISITS_KPI: 'CustomerProspectVisitsKPI',
    MEETS_CONDUCTED_KPI: 'MeetsConductedKPI',
    NOT_VISITED_KPI: 'NotVisitedKPI',
    CUSTOMER_HL_KPI: 'CustomerHLKPI',
    LOOKUP: 'Lookup',
    USER_PROFILE: 'UserProfile',
    CUSTOMER_DETAILS: 'CustomerDetails',
    CUSTOMER_FOCUS_PRODUCT: 'CustomerFocusProduct',
    CUSTOMER_CN_EARNED: 'CustomerCNEarnedKPI',
    CUSTOMER_SCHEME_QUALIFICATION: 'CustomerSchemeQualificationKPI',
    YTD_TRENDS_VALUE_KPI: 'YTDTrendsValueKPI',
    YTD_TRENDS_VOLUME_KPI: 'YTDTrendsVolumeKPI',
    YTD_TRENDS_PARTICIPATION_KPI: 'YTDTrendsParticipationKPI',
    ALL_CUSTOMER_LIST_KPI: 'AllCustomersListKPI',
    YTD_TRENDS_OS_KPI: 'YTDTrendsOSKPI',
    YTD_TRENDS_OD_KPI: 'YTDTrendsODKPI',
    INCENTIVE_KPI: 'IncentiveKPI',
    PRODUCT_TOTAL_KPI: 'ProductTotalKPI',
    CUSTOMER_PRODUCT_KPI: 'CustomerProductKPI',
    PRODUCT_CATEGORY_GROUP_LOOKUP: 'ProductCategoryGroupLookup',
    PRODUCT_KPI: 'ProductKPI',
    DGA_DISTRICTS_KPI: 'DGA_GetDistrictsKPI',
    DGA_BUSINESS_GENERATION_SOURSEWISE_LEADS_KPI: 'DGA_BusinessGenerationSourcewiseLeadsKPI',
    DGA_BUSINESS_GENERATION_SUMMARY_KPI: 'DGA_InfluencerBusinessGenerationSummaryKPI',
    DGA_BUSINESS_GENERATION_SITES_CONVERTED_KPI: 'DGA_BusinessGenerationSitesConvertedKPI',
    DGA_INFLUENCER_LEADS_KPI : 'DGA_InfluencerLeadsKPI',
    DGA_INFLUENCER_SITES_KPI: 'DGA_InfluencerSitesKPI',
    DGA_PRODUCTS_PRICE_KPI: 'DGA_ProductsPrice_KPI',
    GET_USER_SALES_GROUP_BY_EMAIL: 'GetUserSalesGroup',

    // Admin Procedures
    ADMIN_TSI_USER_LIST: 'TSIUserList',
    ADMIN_SALES_GROUP_LIST: 'SalesGroupList',
    ADMIN_UPDATE_TSI_USER_STATUS: 'UpdateTSIUserStatus',
    ADMIN_TSI_USERS_COUNT: 'TSIUsersCount',
    ADMIN_MASTER_ROLES_LIST: 'MasterRolesList',

    // Role based
    ASM_USER_LIST: 'ASMUserList',
    SALES_OFFICES_BY_ASM_RSM_LIST: 'SalesOfficesByASMRSMList',
    TSI_USERS_BY_SALES_OFFICE_LIST: 'TSIUsersBySalesOfficeList',
    DEPOT_BY_RSM: 'DepotListByRSM',

    DGA_DEALER_LEAD_COUNTS_KPI: 'DGA_DealerLeadCountsKPI',
    DGA_TOTAL_MR_VALUE_KPI: 'DGA_TotalMRValueKPI',
    DGA_TOTAL_MR_VOLUME_KPI: 'DGA_TotalMRVolumeKPI'
};

exports.API_NAME = {
    SALES_VALUES_KPI: 'getSalesValueKPIs',
    ACTIVE_DEALER_KPI: 'getActiveDealerKPIs',
    OSOD_KPI: 'getOSODKPIs',
    NEW_CCD_KPI: 'getNewCCDKPIs',
    NEW_NDO_KPI: 'getNewNDOKPIs',
    UPCOMINGOD_KPI: 'getUpcomingODKPIs',
    COLLECTION_KPI: 'getCollectionKPIs',
    VOLUME_KPI: 'getVolumeKPIs',
    BELOW_THRESHOLD_KPI: 'getBelowThresholdKPIs',
    BUDGET_KPI: 'getBudgetKPIs',
    OVERALL_VISITS_KPI: 'getOverallVisitsKPIs',
    SITE_INFLUENCER_VISITS_KPI: 'getSiteInfluencerVisitsKPIs',
    CUSTOMER_PROSPECT_VISITS_KPI: 'getCustomerProspectVisitsKPIs',
    MEETS_CONDUCTED_KPI: 'getMeetsConductedKPIs',
    NOT_VISITED_KPI: 'getNotVisitedKPIs',
    YTD_TRENDS_KPI: 'getYTDTrendsKPIs',
    CUSTOMER_HL_OD_KPI: 'getCustomerODHLKPIs',
    CUSTOMER_HL_KPI: 'getCustomerHLKPIs',
    TOWN_LIST: 'getTownList',
    CUSTOMER_LIST: 'getCustomerList',
    CUSTOMER_UPCOMINGOD_KPI: 'getCustomerUpcomingODKPIs',
    CUSTOMER_COLLECTION_KPI: 'getCustomerCollectionKPIs',
    CUSTOMER_VALUE_KPI: 'getCustomerValueKPIs',
    CUSTOMER_VOLUME_KPI: 'getCustomerVolumeKPIs',
    CUSTOMER_OSOD_KPI: 'getCustomerOSODKPIs',
    CUSTOMER_VISITS_KPI: 'getCustomerVisitsKPIs',
    USER_PROFILE: 'getUserProfile',
    CUSTOMER_DETAILS: 'getCustomerDetails',
    CUSTOMER_PARTICIPATION: 'getCustomerParticipationKPIs',
    CUSTOMER_FOCUS_PRODUCT: 'getCustomerFocusProductKPIs',
    CUSTOMER_CN_EARNED: 'getCustomerCNEarnedKPIs',
    CUSTOMER_SCHEME_QUALIFICATION: 'getCustomerSchemeQualificationKPIs',
    ALL_CUSTOMER_LIST_KPI: 'getAllCustomerListKPI',
    INCENTIVE_KPI: 'getIncentiveKPIs',
    INCENTIVE_CIRCULAR_KPI: 'getIncentiveCircularDetails',
    PRODUCT_CATEGORY_GROUP_LIST: 'getProductCategoryGroupList',
    PRODUCT_TOTAL_KPI: 'getProductTotalKPIs',
    CUSTOMER_PRODUCT_VALUE: 'getCustomerProductValueKPIs',
    CUSTOMER_PRODUCT_VOLUME: 'getCustomerProductVolumeKPIs',
    CUSTOMER_PRODUCT_PARTICIPATION: 'getCustomerProductParticipationKPIs',
    PRODUCT_KPI: 'getProductKPIs',
    DGA_DISTRICTS_KPI: 'getDGADistrictsList',
    PRAGATI_INFLUENCER_LOYALTY_PARTICIPANT_KPI: 'getInfluencerLoyaltyParticipantKPI',
    PRAGATI_INFLUENCER_LIST_KPI: 'getInfluencerList',
    PRAGATI_INFLUENCER_HL_KPI: 'getInfluencerHLKPIs',
    DGA_BUSINESS_GENERATION_SOURSEWISE_LEADS_KPI: 'getInfluencerBusinessGenerationKPI',
    DGA_BUSINESS_GENERATION_SUMMARY_KPI: 'getInfluencerBusinessGenerationSummaryKPI',
    PRAGATI_INFLUENCER_SCHEME_KPI: 'getInfluencerSchemeKPIs',
    PRAGATI_INFLUENCER_DETAIL_KPI: 'getInfluencerDetailKPIs',
    PRAGATI_INFLUENCER_POINTS_DETAIL_KPI: 'getInfluencerPointsDetailKPIs',
    PRAGATI_PRODUCT_CATEGORY_LIST: 'getProductCategoryList',
    PRAGATI_INFLUENCER_PURCHASE_VOLUME_KPI: 'getInfluencerPurchaseVolKPIs',
    PRAGATI_INFLUENCER_ELIGIBLE_SCHEME_KPI: 'getInfluencerEligibleSchemeKPI',
    DGA_LEADS_KPI: 'getInfluencerLeadsKPI',
    DGA_SITES_KPI: 'getInfluencerSitesKPI',
    PRAGATI_INFLUENCER_EARNINGS_KPI: 'getInfluencerEarningsKPI',
    PRAGATI_INFLUENCER_SCHEME_DETAIL_KPI: 'getInfluencerSchemeDetailsKPI',
    PRAGATI_SECONDARY_GENERATED_PAINTERS_VALUE_KPI: 'getSecondarygeneratedPaintersValueKPI',
    PRAGATI_SECONDARY_GENERATED_PAINTERS_VOLUME_KPI: 'getSecondarygeneratedPaintersVolumeKPI',
    PRAGATI_INFLUENCER_SCHEME_TARGET_KPI: 'getInfluencerSchemeTargetKPI',

    // Admin API
    ADMIN_TSI_USER_LIST: 'getTSIUserList',
    ADMIN_SALES_GROUP_LIST: 'getSalesGroupList',
    ADMIN_UPDATE_TSI_USER_STATUS: 'updateTSIUserStatus',
    ADMIN_TSI_USERS_COUNT: 'getTSIUsersCount',
    ADMIN_MASTER_ROLES_LIST: 'getMasterRolesList',

    // Role based
    ASM_USER_LIST: 'getASMUserList',
    SALES_OFFICES_BY_ASM_RSM_LIST: 'getSalesOfficesByASMRSMList',
    TSI_USERS_BY_SALES_OFFICE_LIST: 'getTSIUsersBySalesOfficeList',
    DEPOT_BY_RSM: 'getDepotByRSM',

    // Phase 3 - DGA KPIs
    DGA_DEALER_LEAD_COUNTS_KPI: 'getDGADealerLeadCounts',
    DGA_TOTAL_MR_VALUE_KPI: 'getDGATotalMRValue',
    DGA_TOTAL_MR_VOLUME_KPI: 'getDGATotalMRVolume',

      //Sales officers Portal APIs
      USER : 'user'


};

exports.MONTHS = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];

exports.DATE_SELECTION_TYPES = ['MTD', 'YTD', 'CUSTOM'];

exports.QUARTERS_DATA = [
    { NAME: 'Apr', MONTH: 3, QUARTER: 'Q1' },
    { NAME: 'May', MONTH: 4, QUARTER: 'Q1' },
    { NAME: 'Jun', MONTH: 5, QUARTER: 'Q1' },
    { NAME: 'Jul', MONTH: 6, QUARTER: 'Q2' },
    { NAME: 'Aug', MONTH: 7, QUARTER: 'Q2' },
    { NAME: 'Sep', MONTH: 8, QUARTER: 'Q2' },
    { NAME: 'Oct', MONTH: 9, QUARTER: 'Q3' },
    { NAME: 'Nov', MONTH: 10, QUARTER: 'Q3' },
    { NAME: 'Dec', MONTH: 11, QUARTER: 'Q3' },
    { NAME: 'Jan', MONTH: 0, QUARTER: 'Q4' },
    { NAME: 'Feb', MONTH: 1, QUARTER: 'Q4' },
    { NAME: 'Mar', MONTH: 2, QUARTER: 'Q4' },
];

exports.HTTP_CODE = {
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    CONFLICT: 409
};

exports.API_MESSAGES = {
    UNAUTHORIZED: 'Invalid authorization token',
    FORBIDDEN: 'You do not have permission to access this application. Please contact Administrator.',
    APP_VERSION_MISMATCH: 'There is a new version of this application available. Please click on download button to update to the latest version.',
    GENERIC: 'Something went wrong! Please try after some time.',
    TSI_USER_UPDATE_SUCCESS: 'The status of requested user has been updated!',
    TSI_USER_NOT_FOUND: 'The requested user not found!',
    TSI_USER_ALREDY_UPDATED: 'The status of requested user is already updated!'
}