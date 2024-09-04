exports.formatBusinessGenerationSummaryData = (output, productData, valueData, volumeData) => {
    console.log("formatBusinessGenerationSummaryData", output.results[0]);
    const outArr = [];
    let totalMtdVal = 0;
    let totalYtdVal = 0;
    const resultData = output.results?.length ? output.results[0] : [];
    outArr.push({
        NAME: 'Number of Sites Converted',
        TARGET: "0",
        TODAY: null,
        YESTERDAY: null,
        MTD_TILL_YESTERDAY: null,
        MTD: (resultData['MTD']).toString() || "0",
        YTD: (resultData['YTD']).toString() || "0"
    });

    const productList = productData.results?.length ? productData.results : [];
    if(valueData && productList && productList.length) {
        let tempMtdData = valueData.mtdData;
        let tempYtdData = valueData.ytdData;
        productList.map((product) => {
            let obj = tempMtdData.find(item => item.PRODUCT_CODE === product.UNIQUE_CODE);
            if (obj) {
                totalMtdVal = totalMtdVal + parseInt(obj.VALUE) * parseFloat(product.ASP);
            }
        })

        productList.map((product) => {
            let obj = tempYtdData.find(item => item.PRODUCT_CODE === product.UNIQUE_CODE);
            if (obj) {
                totalYtdVal = totalYtdVal + parseInt(obj.VALUE) * parseFloat(product.ASP);
            }
        })
    }

    console.log('totalMtdVal===', totalMtdVal);
    console.log('totalYtdVal===', totalYtdVal);

    outArr.push({
        NAME: 'Secondary Generated Painters (Value - lakhs)',
        TARGET: "0",
        TODAY: null,
        YESTERDAY: null,
        MTD_TILL_YESTERDAY: null,
        MTD: (totalMtdVal / 100000).toFixed(1),
        YTD: (totalYtdVal / 100000).toFixed(1)
    });
    
    if (volumeData && volumeData.length) {
        outArr.push(volumeData[0]);
    }

    return outArr;
};