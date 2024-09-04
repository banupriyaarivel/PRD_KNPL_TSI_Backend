const { getElementByName } = require('../getElementByNameProperty');
exports.formatBusinessGenerationData = (output) => {
    console.log('formatBusinessGenerationData===', output);
    const outArr = []; // output.results?.length ? output.results : [];
    const mtdData = output?.results0?.length ? output.results0 : [];
    const ytdData = output?.results1?.length ? output.results1 : [];

    outArr.push({
        NAME: 'HO Lead',
        TARGET: "0",
        MTD: getElementByName('HO Lead', mtdData),
        YTD: getElementByName('HO Lead', ytdData),
    });
    outArr.push({
        NAME: 'Dealer',
        TARGET: "0",
        MTD: getElementByName('Dealer', mtdData),
        YTD: getElementByName('Dealer', ytdData)
    });
    outArr.push({
        NAME: 'Contractor',
        TARGET: "0",
        MTD: getElementByName('Contractor', mtdData),
        YTD: getElementByName('Contractor', ytdData)
    });
    outArr.push({
        NAME: 'Referrals',
        TARGET: "0",
        MTD: getElementByName('Consumer Referral', mtdData),
        YTD: getElementByName('Consumer Referral', ytdData)
    });
    outArr.push({
        NAME: 'DGA',
        TARGET: "0",
        MTD: getElementByName('DGA', mtdData),
        YTD: getElementByName('DGA', ytdData)
    });

    return outArr;
};
