using { TSIService.GeneralValueType } from './TSI';

extend service TSIService with {

    entity LoyaltyParticipantEntity {
        key NAME    : String;
        TOTAL       : String;
        TARGET      : String;
        MTD         : GeneralValueType;
        YTD         : GeneralValueType;
    }

    define type PragatiLoyaltyParticipantKPIResult {
        NAME    : String;
        TOTAL   : String;
        TARGET  : String;
        MTD     : GeneralValueType;
        YTD     : GeneralValueType;
    }

    define type InfluencerListItem {
        ID: Integer;
        NAME        : String;
        MOBILE        : String;
        MEMBERSHIP_CARD: String;
        PRIMARY_DEALER_ID: String;
        DEALER_NAME: String;
        SLAB: String;
        TOTAL_EARNED_POINTS: String;
    }

    define type InfluencerListKPIResult {
        INFLUENCERS   : array of InfluencerListItem;
        TOTAL_COUNT : Integer;
    }
    
    define type InfluencerHLItem {
        ID: Integer;
        MOBILE                 : String;
        NAME                 : String;
        MEMBERSHIP_CARD                           : String;
        PRIMARY_DEALER_ID      : String;
        DEALER_NAME     : String;
        SLAB: String;
        BUSINESS_CATEGORY                        : String;
        TOTAL_EARNED_POINTS                        : String;
        VOL_MTD : String;
        VOL_YTD: String;
    }

    define type InfluencerHLKPIResult {
        INFLUENCERS   : array of InfluencerHLItem;
        TOTAL_COUNT : Integer;
    }

    define type SchemeKPIResult {
        NAME : String;
        CODE   : String;
        KPIS            : array of {
            NAME        : String;
            UOM         : String;
            TARGET      : String;
            MTD         : GeneralValueType;
            YTD         : GeneralValueType;
        };
    }

    define type InfluencerDetailKPIResult {
        ID: Integer;
        MOBILE                 : String;
        NAME                 : String;
        MEMBERSHIP_CARD : String;
        PRIMARY_DEALER_ID      : String;
        DEALER_NAME     : String;
        SLAB                        : String;
        ZONE_ID: String;
        DIVISION_ID: String;
        DEPOT: String;
    }

    define type InfluencerPointsDetailKPIResult {
        NAME : String;
        CY : GeneralValueType;
        LY : GeneralValueType;
    }

    define type ProductCategoryKPIResult {
        CATEGORY_CODE: String;
        CATEGORY_NAME: String;
    }

    define type InfluencerPurchaseVolKPIResult {
        UOM: String;
        TOTAL_MTD: String;
        TOTAL_YTD: String;
        PRODUCTS: array of {
            NAME: String;
            MTD: String;
            YTD: String;
        }
    }

    define type InfluencerEligibleSchemeKPIResult {
        OFFER_CODE: String;
        TITLE: String;
        DESCRIPTION: String;
        END_DATE: String;
        REDEMPTION_CYCLE: Integer;
        CURRENT_REDEMPTION_INDEX: Integer;
    }

    define type OfferSelectedProducts {
        CATEGORY: String;
        PRODUCTS: array of String;
    }

    define type InfluencerSchemeDetailsKPIResult {
        TITLE: String;
        DESCRIPTION: String;
        OFFER_TYPE_ID: Integer;
        END_DATE: String;
        NAME: String;
        APPLICABLE_PRODUCTS: array of OfferSelectedProducts;
        BONUS_PRODUCTS: array of OfferSelectedProducts;
        INFLUENCER_PROGRESS_VALUE: Integer;
        INFLUENCER_PROGRESS_MAX_VALUE: Integer;
        PROGRESS_TYPE: String;
        PROGRESS_UNIT: String;
        PROGRESS_VALUE: Integer;
        PROGRESS_MAX: Integer;
        MAX_SLAB_VALUE: Integer;
    }

    define type InfluencerEarningsKPIResult {
        NAME: String;
        UOM: String;
        ACCRUED: String;
        REDEEMED: String;
    }

    define type InfluencerSchemeTargetKPIResult {
        SCHEME_PARTICIPATION_TARGET: String;
    }

    // Pragati
    function getInfluencerLoyaltyParticipantKPI(
        salesGroup : String
    ) returns array of PragatiLoyaltyParticipantKPIResult;
    function getInfluencerList(
        salesGroup : String, 
        searchText: String, 
        topRec : Integer, 
        skipRec : Integer
    ) returns InfluencerListKPIResult;
    function getInfluencerHLKPIs(
        salesGroup: String, 
        kpiType : String, 
        columnHeader : String, 
        rowHeader : String, 
        searchText : String, 
        schemeCode: String, 
        sortOrder : String, 
        sortColumn : String, 
        topRec : Integer, 
        skipRec : Integer
    ) returns InfluencerHLKPIResult;
    function getInfluencerSchemeKPIs(
        salesGroup : String
    ) returns array of SchemeKPIResult;
    function getInfluencerDetailKPIs(
        influencerID: Integer
    ) returns InfluencerDetailKPIResult;
    function getInfluencerPointsDetailKPIs(
        influencerID: Integer
    ) returns array of InfluencerPointsDetailKPIResult;
    function getProductCategoryList() returns array of ProductCategoryKPIResult;
    function getInfluencerPurchaseVolKPIs(
        influencerID: Integer, 
        categoryCode: String
    ) returns InfluencerPurchaseVolKPIResult;
    function getInfluencerEligibleSchemeKPI(
        influencerID: Integer
    ) returns array of InfluencerEligibleSchemeKPIResult;
    function getInfluencerSchemeDetailsKPI(
        schemeCode: String, 
        influencerID: Integer
    ) returns InfluencerSchemeDetailsKPIResult;
    function getInfluencerEarningsKPI(
        influencerID: Integer
    ) returns array of InfluencerEarningsKPIResult;
    function getInfluencerSchemeTargetKPI(
        salesGroup: String
    ) returns InfluencerSchemeTargetKPIResult;
}