/////////////////////////////////////////////////////////////////////
// Copyright (c) Autodesk, Inc. All rights reserved
// Written by Autodesk Partner Development
//
// Permission to use, copy, modify, and distribute this software in
// object code form for any purpose and without fee is hereby granted,
// provided that the above copyright notice appears in all copies and
// that both that copyright notice and the limited warranty and
// restricted rights notice below appear in all supporting
// documentation.
//
// AUTODESK PROVIDES THIS PROGRAM "AS IS" AND WITH ALL FAULTS.
// AUTODESK SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTY OF
// MERCHANTABILITY OR FITNESS FOR A PARTICULAR USE.  AUTODESK, INC.
// DOES NOT WARRANT THAT THE OPERATION OF THE PROGRAM WILL BE
// UNINTERRUPTED OR ERROR FREE.
/////////////////////////////////////////////////////////////////////

module.exports = {
    // Set environment variables or hard-code here
    credentials: {
        client_id: process.env.APS_CLIENT_ID,
        client_secret: process.env.APS_CLIENT_SECRET,
        callback_url: process.env.APS_CALLBACK_URL
    },
    database:{
        url : process.env.OAUTH_DATABASE?process.env.OAUTH_DATABASE:'mongodb+srv://forge:forge@forgesample-1gz3z.mongodb.net'
    },
    scopes: {
        // Required scopes for the server-side application
        internal: ['code:all', 'bucket:create', 'bucket:read', 'data:read', 'data:create', 'data:write'],

        // Required scopes for the server-side design automation api
        internal_2legged: ['code:all', 'bucket:create', 'bucket:read', 'data:read', 'data:create', 'data:write'],

        // Required scope for the client-side viewer
        public: ['viewables:read']
    },
    client: {
        circuitBreaker: {
			threshold: 11,
			interval: 1200
		},
		retry: {
			maxNumberOfRetries: 7,
			backoffDelay: 4000,
			backoffPolicy: 'exponentialBackoffWithJitter'
		},
		requestTimeout: 25000
    },
    bim360Cost:{
        URL:{
            IMPORT_BUDGETS_URL: "https://developer.api.autodesk.com/cost/v1/containers/{0}/budgets:import",
            BUDGETS_RUL: "https://developer.api.autodesk.com/cost/v1/containers/{0}/budgets" 
        }
    },
    designAutomation:{
        app_base_domain: process.env.APS_SERVER_DOMAIN,
        // the following environment variables are only required to define if you want to use your own predefined activity
        nickname:      process.env.DESIGN_AUTOMATION_NICKNAME?process.env.DESIGN_AUTOMATION_NICKNAME:process.env.APS_CLIENT_ID,
        activity_name: process.env.DESIGN_AUTOMATION_ACTIVITY_NAME?process.env.DESIGN_AUTOMATION_ACTIVITY_NAME:"RevitQtoActivity",
        alias:         process.env.DESIGN_AUTOMATION_ACTIVITY_ALIAS?process.env.DESIGN_AUTOMATION_ACTIVITY_ALIAS:'dev'
    }
};
