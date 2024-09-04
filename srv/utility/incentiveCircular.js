
exports.formatIncentiveCircularData = () => {
    const outObj = {
        CIRCULAR_HEADER_LINE1: "Retail Sales Officer Incentive Circular 23-24",
        CIRCULAR_HEADER_LINE2: "(Applicable to all zones in Decorative)",
        CIRCULAR_DESCRIPTION_LINE1: "Team,",
        CIRCULAR_DESCRIPTION_LINE2:"Sharing with you the Incentive Circular for 23-24, the reward programme has been designed to perform and earn every month on all basic parameters of our industry i.e. Sale Growth, Emulsion sale, Participation, CCD installation & Painters.",
        CIRCULAR_DESCRIPTION_LINE3: "Please note that terms of this incentive letter including the parameters and amounts are subject to change as per the decision of the management.",
        CIRCULAR_DESCRIPTION_LINE4: "Wishing you all a rewarding year ahead.",
        CIRCULAR_FOOTER_LINE1: "Ram Mehrotra",
        CIRCULAR_FOOTER_LINE2: "Vice President (Decorative Sales & Marketing)",
        ELIGIBILITY_LINE: "Achieve 85% of your Quarter budget for earning incentive in each Quarter..(entire incentive)",
        PARAMTERS_TABLE: {
            VALUE_SALE: {
                NAME: "Value Sale",
                UOM: "Monthly",
                LABEL_ROW1: "Growth(%)",
                LABEL_ROW2: "Reward(₹)",
                ROWS: [{
                    ROW1: "15",
                    ROW2: "1,500"
                }, {
                    ROW1: "20",
                    ROW2: "3,000"
                }, {
                    ROW1: "25",
                    ROW2: "6,000"
                }]
            },
            PREMIUM_EMULSION: {
                NAME: "Premium Emulsion Vol",
                UOM: "Monthly",
                LABEL_ROW1: "Growth(%)",
                LABEL_ROW2: "Reward(₹)",
                ROWS: [{
                    ROW1: "15",
                    ROW2: "1,500"
                }, {
                    ROW1: "20",
                    ROW2: "3,000"
                }, {
                    ROW1: "30",
                    ROW2: "6,000"
                }]
            },
            PARTICIPATION: {
                NAME: "Participation",
                UOM: "Quarterly",
                LABEL_ROW1: "Growth(%)",
                LABEL_ROW2: "Reward(₹)",
                ROWS: [{
                    ROW1: "15",
                    ROW2: "5,000"
                }, {
                    ROW1: "22",
                    ROW2: "7,000"
                }, {
                    ROW1: "-",
                    ROW2: "-"
                }]
            }
        },
        MONTHLY_TOPPINGS_TABLE: {
            NPP: {
                NAME: "NPP - Out of 25 Tso Tagged Painters",
                UOM: "Monthly",
                ROWS: [{
                    LABEL: ">=20 active in a month",
                    VALUE: "1,000"
                }, {
                    LABEL: "All 25 active in a month",
                    VALUE: "3,000"
                }]
            },
            WATER_PROOFING: {
                NAME: "Water Proofing Range: Product Category CC",
                UOM: "Monthly",
                ROWS: [{
                    LABEL: "50% Growth or Min 5lc",
                    VALUE: "1,000"
                }, {
                    LABEL: "100% Growth or Min 10lc",
                    VALUE: "3,000"
                }]
            }
        },
        CCD_TABLE: {
            NAME: "Direct CCD Installation",
            UOM: "Quarterly",
            NOTE: "Minimum 2 CCDs per quarter to be eligible for CCD Incentive; CCD Installation NO CAP ON EARNING AMOUNT",
            ROWS: [{
                LABEL: "Q1",
                VALUE: "800"
            }, {
                LABEL: "Q2",
                VALUE: "700"
            },{
                LABEL: "Q3",
                VALUE: "600"
            },{
                LABEL: "Q4",
                VALUE: "500"
            }]
        },
        PAY_OUT_PROCESS: {
            POINTER1: "50% payment quarterly and 50% in the same quarter of the following fiscal year for on-roll employees at the time of disbursement",
            INCENTIVE_EARNED_TABLE: {
                LABEL_COLUMN1: "For incentive earned in",
                LABEL_COLUMN2: "50% Pay-out in",
                LABEL_COLUMN3: "50% Pay-out in",
                VALUE_COLUMN3: "To be paid on 1st August’24 along with July’24 Salary",
                ROWS: [{
                    VALUE_COLUMN1: "Q1",
                    VALUE_COLUMN2: "August 2023",
                    VALUE_COLUMN3: ""
                }, {
                    VALUE_COLUMN1: "Q2",
                    VALUE_COLUMN2: "November 2023",
                    VALUE_COLUMN3: ""
                }, {
                    VALUE_COLUMN1: "Q3",
                    VALUE_COLUMN2: "February 2024",
                    VALUE_COLUMN3: ""
                }, {
                    VALUE_COLUMN1: "Q4",
                    VALUE_COLUMN2: "May 2024",
                    VALUE_COLUMN3: ""
                }]
            }
        },
        OD_AND_CEI_CORRECTION: {
            POINTER1: "Overdue (Quarter end Versus respective quarter beginning OD)",
            OD_MATRIX: {
                POINTER1: "The OD matrix to apply to all SGs that have a Quarter begin OD > 5L",
                POINTER2: "The OD matrix to apply to all SGs that have a Quarter begin OD of between 1L to 5L",
                POINTER3: "For Quarter begin OD <= 1L the condition should be:",
                NOTE1: "For all cases any >180 days OD getting written off during the Quarter will be opening OD as well",
                NOTE2: "Also, any OD given to 3rd party agencies to collect will be reduced from the OD figures (opening and closing) for calculations.",
                OD_TABLE1: {
                    LABEL_COLUMN1: "Quarter End OD (NEW NORMS)",
                    LABEL_COLUMN2: "Pay-out",
                    ROWS: [{
                        VALUE_COLUMN1: "Quarter End OD <= 1L",
                        VALUE_COLUMN2: "110% (New Norm)"
                    }, {
                        VALUE_COLUMN1: "Quarter End OD <= Quarter beginning OD",
                        VALUE_COLUMN2: "100%"
                    }, {
                        VALUE_COLUMN1: "Quarter End OD increase up to 10%",
                        VALUE_COLUMN2: "50%"
                    }, {
                        VALUE_COLUMN1: "Quarter End OD increase more than 10%",
                        VALUE_COLUMN2: "No Pay-out"
                    }]
                },
                OD_TABLE2: {
                    LABEL_COLUMN1: "Quarter End OD (NEW NORMS)",
                    LABEL_COLUMN2: "Pay-out",
                    ROWS: [{
                        VALUE_COLUMN1: "Quarter End OD <= 1L",
                        VALUE_COLUMN2: "110%"
                    }, {
                        VALUE_COLUMN1: "Quarter End OD <= Quarter Begin OD",
                        VALUE_COLUMN2: "100%"
                    }, {
                        VALUE_COLUMN1: "Quarter End OD (Upto 2 Lac) > Quarter Begin OD",
                        VALUE_COLUMN2: "50%"
                    }, {
                        VALUE_COLUMN1: "Quarter End OD (above 2 Lac) <= Quarter Begin OD + 50000",
                        VALUE_COLUMN2: "50%"
                    }, {
                        VALUE_COLUMN1: "Quarter End OD (above 2 Lacs) > Quarter Begin OD + 50000",
                        VALUE_COLUMN2: "No Pay-out"
                    }]
                },
                OD_TABLE3: {
                    LABEL_COLUMN1: "",
                    LABEL_COLUMN2: "Pay-out",
                    ROWS: [{
                        VALUE_COLUMN1: "Quarter End OD <= 1L (regardless of increase or decrease)",
                        VALUE_COLUMN2: "110%"
                    }, {
                        VALUE_COLUMN1: "Quarter End OD <= 2L",
                        VALUE_COLUMN2: "100%"
                    }, {
                        VALUE_COLUMN1: "Quarter End OD > 2L",
                        VALUE_COLUMN2: "50%"
                    }]
                }
            },
            POINTER2: "CEI correction -",
            SUB_POINTER3_A: "Sales officers where YTD CEI is less than 60%, they shall be eligible for incentive amount corrected as per YTD CEI % less 5%. So if CEI is 35%, then the incentive amount will get multiplied with (35%-5%=) 30%.",
            SUB_POINTER3_B: "Sales officers with YTD CEI between 60% to 80%, they shall be eligible for incentive amount corrected as per their actual CEI.SO if CEI is 65%, their incentive amount shall get multiplied with 65%.",
            SUB_POINTER3_C: "Sales officers with YTD CEI greater than 80%, they shall be eligible for incentive amount as per their actual CEI + 5%. So if the CEI is 85%, their incentive amount shall be multiplied not with 85% but with (85%+5%=) 90%."
        },
        PREMIUM_EMULSION_TABLE: {
            NAME: "Premium Emulsion List",
            LABEL_COLUMN1: "EXTERIOR EMULSION",
            LABEL_COLUMN2: "INTERIOR EMULSION",
            ROWS: [{
                VALUE_COLUMN1: "EXC.MM STR.&SHEEN",
                VALUE_COLUMN2: "BEAUTYGOLDWASHABLE",
            }, {
                VALUE_COLUMN1: "EXCEL",
                VALUE_COLUMN2: "ECO CLEAN",
            }, {
                VALUE_COLUMN1: "EXCEL AP NXT",
                VALUE_COLUMN2: "EXCEL VIRUS GUARD",
            }, {
                VALUE_COLUMN1: "EXCEL EVERLAST 12",
                VALUE_COLUMN2: "IDEAZ",
            }, {
                VALUE_COLUMN1: "EXCEL MICA MARBLE",
                VALUE_COLUMN2: "IMP ULTRA",
            }, {
                VALUE_COLUMN1: "EXCEL RAINGUARD",
                VALUE_COLUMN2: "IMP.KASH.HS CCD B.",
            }, {
                VALUE_COLUMN1: "EXCEL SUPER",
                VALUE_COLUMN2: "IMP.KASHMIR HS WH.",
            }, {
                VALUE_COLUMN1: "EXCEL TILEGUARD",
                VALUE_COLUMN2: "IMP.KASHMIR MATT",
            }, {
                VALUE_COLUMN1: "EXCEL TOP GUARD",
                VALUE_COLUMN2: "IMPRESSION HI-GLOS",
            }, {
                VALUE_COLUMN1: "EXCEL TOTAL",
                VALUE_COLUMN2: "IMPRESSION KASHMIR",
            }, {
                VALUE_COLUMN1: "EXCEL TOTAL SUPER",
                VALUE_COLUMN2: "IMPRESSIONS",
            }, {
                VALUE_COLUMN1: "",
                VALUE_COLUMN2: "IMPRESSIONS GLITTE",
            }, {
                VALUE_COLUMN1: "",
                VALUE_COLUMN2: "NAE"
            }]
        },
        OTHER_IMPORTANT_TERMS: {
            NAME: "Other important Terms",
            POINTER1: "System uploaded quarterly budget to considered for quarterly incentive eligibility.",
            POINTER2: "Minimum territory size for considering growth will be as per the following table:",
            POINTER3: "Minimum Premium Emulsion base volume to be considered for calculating growth will be 0.5 KL per month for all SGs.",
            TERMS_TABLE: {
                LABEL_COLUMN1: "ZONE",
                LABEL_COLUMN2: "Monthly Value (In Lacs)",
                ROWS: [{
                    VALUE_COLUMN1: "NORTH",
                    VALUE_COLUMN2: "50",
                }, {
                    VALUE_COLUMN1: "WEST",
                    VALUE_COLUMN2: "20",
                }, {
                    VALUE_COLUMN1: "EAST",
                    VALUE_COLUMN2: "40",
                }, {
                    VALUE_COLUMN1: "SOUTH",
                    VALUE_COLUMN2: "15",
                }]
            }
        }
    };
    return outObj;
};