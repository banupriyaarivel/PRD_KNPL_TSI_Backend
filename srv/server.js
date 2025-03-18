//===============Original Code=================xsenv.getServices

const cds = require('@sap/cds');
const proxy= require('@sap/cds-odata-v2-adapter-proxy');
const xsenv = require('@sap/xsenv');
const passport = require('passport');
const JWTStrategy = require('@sap/xssec').JWTStrategy;
const services = xsenv.getServices({ uaa: 'knpl-tsi-xsuaa-service' });
console.log('sev',services);
cds.on('bootstrap', app =>{
    app.use(proxy());
    passport.use(new JWTStrategy(services.uaa));
    app.use(passport.initialize());
    app.use(passport.authenticate('JWT', { session: false }));

    app.use((req, res, next) => {
      console.log("Logged-In User Email===", req.user.id);
      req.context = {
        user: req.user,
      };
      next();
    });
});  

module.exports = cds.server;


// const cds = require('@sap/cds');
// const { xsuaa } = require('@sap/cds-dk/lib/init/registries/mta');
// const proxy = require('@sap/cds-odata-v2-adapter-proxy');
// const xsenv = require('@sap/xsenv');
// const passport = require('passport');
// const JWTStrategy = require('@sap/xssec').JWTStrategy;

// // Load environment variables from .env1 for local development
// require('dotenv').config({ path: '.env1' });

// console.log(process.env.VCAP_SERVICES); // Debugging VCAP_SERVICES


// // Fetch UAA service from VCAP_SERVICES
// const services = ({ xsuaa: { name: 'knpl-tsi-xsuaa-service' } });

// if (!services.xsuaa) {
//     throw new Error('UAA service not found!');
// }

// cds.on('bootstrap', app => {
//     app.use(proxy());
//     passport.use(new JWTStrategy(services.xsuaa));

//     app.use(passport.initialize());
//     app.use(passport.authenticate('JWT', { session: false }));

//     // Adding a custom middleware to log user information
//     app.use((req, res, next) => {
//         console.log("Logged-In User:", req.user);
//         req.context = { user: req.user }; // Adding user context
//         next();
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

// const cds = require('@sap/cds');
// const proxy= require('@sap/cds-odata-v2-adapter-proxy');

// cds.on('bootstrap', app =>{
//     app.use(proxy());
//     app.use((req, res, next) => {
//         req.user = {
//             id: 'jitender2@nerolac.com',           
//             name: 'jitender2@nerolac.com',            
//             roles: ['admin', 'user']                          
//         };

//         console.log("Logged-In User Email===", req.user.id);

//         req.context = {
//           user: req.user,
//         };
//         console.log("req.context",req.context);
//         next();
//     });
// });

// module.exports = cds.server;

//================================================================ 