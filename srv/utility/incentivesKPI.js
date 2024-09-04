const { QUARTERS_DATA } = require("../constant/constants");

const getNameUOM = (NAME, UOM) => {
    return { NAME, UOM }
}

const getCellValue = (isEmptyCell, cellVal, emptyCellVal) => {
    const resObj = { VALUE: null, IS_HL: false };
    if (isEmptyCell) { return resObj };

    if (cellVal) {
        resObj.VALUE = cellVal;
    } else {
        resObj.VALUE = emptyCellVal;
    }
    return resObj;
}

const getCellValueWithName = (isEmptyCell, cellVal, emptyCellVal, name) => {
    const resObj = { NAME: name, VALUE: null, IS_HL: false };
    if (isEmptyCell) { return resObj };

    if (cellVal) {
        resObj.VALUE = cellVal;
    } else {
        resObj.VALUE = emptyCellVal;
    }
    return resObj;
}

exports.formatIncentiveData = (procOutput) => {

    const INCENTIVE_DATA = procOutput?.results?.length ? procOutput.results[0] : {};

    // const totalIncentive = parseFloat(Number(INCENTIVE_DATA.ZVAL_INC) + Number(INCENTIVE_DATA.ZPRM_INC) + Number(INCENTIVE_DATA.ZWPRF_INC) + Number(INCENTIVE_DATA.ZPRT_ICN) + Number(INCENTIVE_DATA.ZCCD_QTRI)).toFixed(0); 
    const totalIncentive = INCENTIVE_DATA.TOTAL_INCENTIVE || "0.0";
    
    let date  = new Date();
    let month = date.getMonth();
    const currentQuarter = QUARTERS_DATA.filter(i => i.MONTH === month)[0].QUARTER;

    const outObj = {
        BUDGET_ACHIEVEMENT: [{
            YTD_BUDGET: getCellValueWithName(false, INCENTIVE_DATA.ZBUDGET, "0.0", 'YTD Budget')
        }, {
            ACTUAL_VALUE: getCellValueWithName(false, INCENTIVE_DATA.ZCY_VALUE, "0.0", 'Actual')
        }, {
            BUDGET_ACHIEVED: getCellValueWithName(false, INCENTIVE_DATA.ZQTD_ACHP, "0.0", 'Budget Achieved(%)')
        }, {
            BALANCE_VALUE: getCellValueWithName(false, INCENTIVE_DATA.ZBAL_SLTR, "0.0", 'Balance Value')          
        }],
        MONTHLY_INCENTIVE_CRITERIA: [{
            ...getNameUOM("Sales", "Value in Rs '000s"),
            CY_MTD: getCellValue(false, INCENTIVE_DATA.ZCY_VAL1, "0"),
            LY_MTD: getCellValue(false, INCENTIVE_DATA.ZLYCM_VAL, "0"),
            GROWTH_MTD: getCellValue(false, INCENTIVE_DATA.ZVAL_PCGR, "0"),
            INCENTIVE_MTD: getCellValue(false, INCENTIVE_DATA.ZVAL_INC, "0"),
            REMAINING_VALUE_MTD: getCellValue(false, INCENTIVE_DATA.ZVLB_NXTS, "0"),
            NEXT_SLAB_MTD: getCellValue(false, INCENTIVE_DATA.ZNS_AMNT, "0")
        },{
            ...getNameUOM("Premium Emulsion Volume", "Volume in KL"),
            CY_MTD: getCellValue(false, INCENTIVE_DATA.ZCY_MTVOL, "0"),
            LY_MTD: getCellValue(false, INCENTIVE_DATA.ZLY_CMVOL, "0"),
            GROWTH_MTD: getCellValue(false, INCENTIVE_DATA.ZPE_GRWPC, "0"),
            INCENTIVE_MTD: getCellValue(false, INCENTIVE_DATA.ZPRM_INC, "0"),
            REMAINING_VALUE_MTD: getCellValue(false, INCENTIVE_DATA.ZVALB_NS1, "0"),
            NEXT_SLAB_MTD: getCellValue(false, INCENTIVE_DATA.ZNS_AMNT1, "0")
        }, {
            ...getNameUOM("Waterproofing Value", "Value in Rs '000s"),
            CY_MTD: getCellValue(false, INCENTIVE_DATA.ZCY_CMWPV, "0"),
            LY_MTD: getCellValue(false, INCENTIVE_DATA.ZLY_CMWPV, "0"),
            GROWTH_MTD: getCellValue(false, INCENTIVE_DATA.ZWPRF_GP, "0"),
            INCENTIVE_MTD: getCellValue(false, INCENTIVE_DATA.ZWPRF_INC, "0"),
            REMAINING_VALUE_MTD: getCellValue(false, INCENTIVE_DATA.ZWPRFBNS, "0"),
            NEXT_SLAB_MTD: getCellValue(false, INCENTIVE_DATA.ZNS_AMNT2, "0")
        }],
        CCD_QUARTERLY_INCENTIVE: [{
            ...getNameUOM("Q1", "Value in Rs '000s"),
            MIN_CCD: getCellValue(false, "-", "-"),
            CCD_ADDED: getCellValue(false, "-", "-"),
            QTD_CCD_INCENTIVE: getCellValue(false, "-", "-")
        },{
            ...getNameUOM("Q2", "Value in Rs '000s"),
            MIN_CCD: getCellValue(false, "-", "-"),
            CCD_ADDED: getCellValue(false, "-", "-"),
            QTD_CCD_INCENTIVE: getCellValue(false, "-", "-")
        },{
            ...getNameUOM("Q3", "Value in Rs '000s"),
            MIN_CCD: getCellValue(false, "-", "-"),
            CCD_ADDED: getCellValue(false, "-", "-"),
            QTD_CCD_INCENTIVE: getCellValue(false, "-", "-")
        }, {
            ...getNameUOM("Q4", "Value in Rs '000s"),
            MIN_CCD: getCellValue(false, "-", "-"),
            CCD_ADDED: getCellValue(false, "-", "-"),
            QTD_CCD_INCENTIVE: getCellValue(false, "-", "-")
        }],
        QUARTERLY_PARTICIPATION_INCENTIVE: [{
            ...getNameUOM("Participation", "Value in Rs '000s"),
            CY_QTD: getCellValue(false, INCENTIVE_DATA.ZCY_CQPR, "0"),
            LY_QTD: getCellValue(false, INCENTIVE_DATA.ZLY_CQPRT, "0"),
            GROWTH_QTD: getCellValue(false, INCENTIVE_DATA.ZQR_PRTGR, "0"),
            INCENTIVE_QTD: getCellValue(false, INCENTIVE_DATA.ZPRT_ICN, "0"),
            REMAINING_VALUE_QTD: getCellValue(false, INCENTIVE_DATA.ZPARTB_NS, "0"),
            NEXT_SLAB_QTD: getCellValue(false, INCENTIVE_DATA.ZNS_AMNT3, "0")
        }],
        INCENTIVE_FOR_QUARTER: [{
            ...getNameUOM("Incentive(amount)^ for the Quarter", "Value in Rs '000s"),
            INCENTIVE_QTD: getCellValue(false, totalIncentive, "0"),
        }],
        OD_CEI: [{
            ...getNameUOM("OD and CEI", "%"),
            QTD_START_OD: getCellValue(false, INCENTIVE_DATA.ZMNBG_OD, "0"),
            QTD_END_OD: getCellValue(false, INCENTIVE_DATA.ZQUAR_BG, "0"),
            CEI_QTD: getCellValue(false, INCENTIVE_DATA.ZYTD_CEI, "0"),
        }]
    };

    outObj.CCD_QUARTERLY_INCENTIVE.filter(i => i.NAME == currentQuarter).map(function(obj) {
        obj.MIN_CCD.VALUE = INCENTIVE_DATA.ZCCDB_NS || "0.0";
        obj.CCD_ADDED.VALUE = INCENTIVE_DATA.ZCNT_CCD || "0.0";
        obj.QTD_CCD_INCENTIVE.VALUE = INCENTIVE_DATA.ZCCD_QTRI || "0.0";
    });

    return outObj;
};