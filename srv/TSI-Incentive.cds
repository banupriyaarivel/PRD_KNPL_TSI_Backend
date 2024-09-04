using { TSIService.GeneralValueType, TSIService.GeneralNameValueType } from './TSI';

extend service TSIService with {
    
    define type IncentiveColumns {
        NAME  : String;
        UOM : String;
        CY     : GeneralValueType;
        LY     : GeneralValueType;
        PERCENT_CHANGE : GeneralValueType;
        INCENTIVE_ERANED: GeneralValueType;
    }

    define type IncentiveBudgetColumns {
        YTD_BUDGET          : GeneralNameValueType;
        ACTUAL_VALUE        : GeneralNameValueType;
        BUDGET_ACHIEVED     : GeneralNameValueType;
        BALANCE_VALUE       : GeneralNameValueType;
    }

    define type IncentiveMonthlyCriteriaColumns {
        NAME  : String;
        UOM : String;
        CY_MTD     : GeneralValueType;
        LY_MTD     : GeneralValueType;
        GROWTH_MTD : GeneralValueType;
        INCENTIVE_MTD: GeneralValueType;
        REMAINING_VALUE_MTD: GeneralValueType;
        NEXT_SLAB_MTD: GeneralValueType;
    }

    define type IncentiveCCDQuarterlyColumns {
        NAME  : String;
        UOM : String;
        MIN_CCD     : GeneralValueType;
        CCD_ADDED     : GeneralValueType;
        QTD_CCD_INCENTIVE : GeneralValueType;
    }

    define type IncentiveQuarterlyParticipationColumns {
        NAME  : String;
        UOM : String;
        CY_QTD     : GeneralValueType;
        LY_QTD     : GeneralValueType;
        GROWTH_QTD : GeneralValueType;
        INCENTIVE_QTD: GeneralValueType;
        REMAINING_VALUE_QTD: GeneralValueType;
        NEXT_SLAB_QTD: GeneralValueType;
    }
    
    define type IncentiveForQuarterColumns {
        NAME  : String;
        UOM : String;
        INCENTIVE_QTD: GeneralValueType;
    }

    define type IncentiveODAndCEIColumns {
        NAME            : String;
        UOM             : String;
        QTD_START_OD    : GeneralValueType;
        QTD_END_OD      : GeneralValueType;
        CEI_QTD         : GeneralValueType;
    }

    define type IncentiveResult {
        BUDGET_ACHIEVEMENT: array of IncentiveBudgetColumns;
        MONTHLY_INCENTIVE_CRITERIA: array of IncentiveMonthlyCriteriaColumns;
        CCD_QUARTERLY_INCENTIVE: array of IncentiveCCDQuarterlyColumns;
        QUARTERLY_PARTICIPATION_INCENTIVE: array of IncentiveQuarterlyParticipationColumns;
        INCENTIVE_FOR_QUARTER: array of IncentiveForQuarterColumns;
        OD_CEI: array of IncentiveODAndCEIColumns;
    }

    define type RowResult {
        ROW1: String;
        ROW2: String;
    }


    define type TwoColumnResult {
        VALUE_COLUMN1: String;
        VALUE_COLUMN2: String;
    }

    define type ThreeColumnResult {
        VALUE_COLUMN1: String;
        VALUE_COLUMN2: String;
        VALUE_COLUMN3: String;
    }

    define type LabelValueResult {
        LABEL: String;
        VALUE: String;
    }

    define type IncentiveCircularResult {
        CIRCULAR_HEADER_LINE1: String;
        CIRCULAR_HEADER_LINE2: String;
        CIRCULAR_DESCRIPTION_LINE1: String;
        CIRCULAR_DESCRIPTION_LINE2: String;
        CIRCULAR_DESCRIPTION_LINE3: String;
        CIRCULAR_DESCRIPTION_LINE4: String;
        CIRCULAR_FOOTER_LINE1: String;
        CIRCULAR_FOOTER_LINE2: String;
        ELIGIBILITY_LINE: String;
        PARAMTERS_TABLE: {
            VALUE_SALE: {
                NAME: String;
                UOM: String;
                LABEL_ROW1: String;
                LABEL_ROW2: String;
                ROWS: array of RowResult;
            };
            PREMIUM_EMULSION: {
                NAME: String;
                UOM: String;
                LABEL_ROW1: String;
                LABEL_ROW2: String;
                ROWS: array of RowResult;
            };
            PARTICIPATION: {
                NAME: String;
                UOM: String;
                LABEL_ROW1: String;
                LABEL_ROW2: String;
                ROWS: array of RowResult;
            }
        };
        MONTHLY_TOPPINGS_TABLE: {
            NPP: {
                NAME: String;
                UOM: String;
                ROWS: array of LabelValueResult;
            };
            WATER_PROOFING: {
                NAME: String;
                UOM: String;
                ROWS: array of LabelValueResult;
            };
        };
        CCD_TABLE: {
            NAME: String;
            UOM: String;
            NOTE: String;
            ROWS: array of LabelValueResult;
        };
        PAY_OUT_PROCESS: {
            POINTER1: String;
            INCENTIVE_EARNED_TABLE: {
                LABEL_COLUMN1: String;
                LABEL_COLUMN2: String;
                LABEL_COLUMN3: String;
                VALUE_COLUMN3: String;
                ROWS: array of ThreeColumnResult;
            };
        };
        OD_AND_CEI_CORRECTION: {
            POINTER1: String;
            OD_MATRIX: {
                POINTER1: String;
                POINTER2: String;
                POINTER3: String;
                SUB_POINTER2_A: String;
                SUB_POINTER2_B: String;
                SUB_POINTER2_C: String;
                NOTE1: String;
                NOTE2: String;
                OD_TABLE1: {
                    LABEL_COLUMN1: String;
                    LABEL_COLUMN2: String;
                    ROWS: array of TwoColumnResult;
                };
                OD_TABLE2: {
                    LABEL_COLUMN1: String;
                    LABEL_COLUMN2: String;
                    ROWS: array of TwoColumnResult;
                };
                OD_TABLE3: {
                    LABEL_COLUMN1: String;
                    LABEL_COLUMN2: String;
                    ROWS: array of TwoColumnResult;
                }
            };
            SUB_POINTER3_A: String;
            SUB_POINTER3_B: String;
            SUB_POINTER3_C: String;
        };
        PREMIUM_EMULSION_TABLE: {
            NAME: String;
            LABEL_COLUMN1: String;
            LABEL_COLUMN2: String;
            ROWS: array of TwoColumnResult;
        };
        OTHER_IMPORTANT_TERMS: {
            NAME: String;
            POINTER1: String;
            POINTER2: String;
            POINTER3: String;
            TERMS_TABLE: {
                NAME: String;
                LABEL_COLUMN1: String;
                LABEL_COLUMN2: String;
                ROWS: array of TwoColumnResult;
            }
        }
    }

    // Incentive KPIs
    function getIncentiveKPIs(salesGroup : String) returns IncentiveResult;

    function getIncentiveCircularDetails() returns IncentiveCircularResult;
}