using { TSIService.GeneralValueType } from './TSI';

extend service TSIService with {

    define type DGABusinessGenerationKPIResult {
        NAME    : String;
        MTD     : String;
        YTD     : String;
    }

    define type DGABusinessGenerationSummaryKPIResult {
        NAME                        : String;
        TODAY                       : String;
        YESTERDAY                  : String;
        MTD_TILL_YESTERDAY          : String;
        MTD                         : String;
        YTD                         : String;
    }

    define type DGALeadsKPIResult {
        NAME: String;
        UOM: String;
        MTD: {
            GIVEN: String;
            CONVERTED: String;
        };
        YTD: {
            GIVEN: String;
            CONVERTED: String;
        };
    }

    define type DGASitesKPIResult {
        NAME: String;
        UOM: String;
        MTD: String;
        YTD: String;
    }

    define type DGADumpKPIResult {
        NAME : String;
        CY   : GeneralValueType;
    }

    function getInfluencerBusinessGenerationKPI(
        salesGroup : String
    ) returns array of DGABusinessGenerationKPIResult;

    function getInfluencerBusinessGenerationSummaryKPI(
        salesGroup : String
    ) returns array of DGABusinessGenerationSummaryKPIResult;

    function getInfluencerLeadsKPI(
        influencerID: Integer
    ) returns array of DGALeadsKPIResult;
    
    function getInfluencerSitesKPI(
        influencerID: Integer
    ) returns array of DGASitesKPIResult;    

    // Phase 3 - DGA KPIs
    function getDGADealerLeadCounts(
        salesGroup : String
    ) returns array of DGADumpKPIResult;

    function getDGATotalMRValue(
        salesGroup : String,
        customerCode : String
    ) returns array of DGADumpKPIResult;

    function getDGATotalMRVolume(
        salesGroup : String,
        customerCode : String
    ) returns array of DGADumpKPIResult;
}