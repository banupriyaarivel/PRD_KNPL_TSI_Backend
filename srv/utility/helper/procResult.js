const cds = require('@sap/cds');
const dbClass = require("sap-hdbext-promisfied");
const hdbext = require("@sap/hdbext");

exports.getProcResult = async (procName, inputParams) => {
    const db = await cds.connect.to('db');
    let dbConn = new dbClass(await dbClass.createConnection(db.options.credentials));
    const sp = await dbConn.loadProcedurePromisified(hdbext, null, procName);
    const output = await dbConn.callProcedurePromisified(sp,
        inputParams?.length ? [...inputParams] : []
    );
    return output;
}