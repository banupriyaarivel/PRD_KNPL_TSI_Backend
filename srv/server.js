//===============Original Code=================

// const cds = require('@sap/cds');
// const proxy= require('@sap/cds-odata-v2-adapter-proxy');
// const xsenv = require('@sap/xsenv');
// const passport = require('passport');
// const JWTStrategy = require('@sap/xssec').JWTStrategy;
// const services = xsenv.getServices({ uaa: 'knpl-tsi-xsuaa-service' });

// cds.on('bootstrap', app =>{
//     app.use(proxy());
//     passport.use(new JWTStrategy(services.uaa));
//     app.use(passport.initialize());
//     app.use(passport.authenticate('JWT', { session: false }));

//     app.use((req, res, next) => {
//       console.log("Logged-In User Email===", req.user.id);
//       req.context = {
//         user: req.user,
//       };
//       next();
//     });
// });  

// module.exports = cds.server;




//================================================

// const cds = require('@sap/cds');
// const proxy= require('@sap/cds-odata-v2-adapter-proxy');

// cds.on('bootstrap', app =>{
//     app.use(proxy());
// });



//====================Code to Debug locally=========================

const cds = require('@sap/cds');
const proxy= require('@sap/cds-odata-v2-adapter-proxy');

cds.on('bootstrap', app =>{
    app.use(proxy());
    app.use((req, res, next) => {
        req.user = {
            id: 'suraj.galande@extentia.com',           
            name: 'suraj.galande@extentia.com',            
            roles: ['admin', 'user']                          
        };

        console.log("Logged-In User Email===", req.user.id);

        req.context = {
          user: req.user,
        };
        console.log("req.context",req.context);
        next();
    });
});

module.exports = cds.server;

//================================================================ 