# forge-revit.extract.quantity-bim360.cost

[![Node.js](https://img.shields.io/badge/Node.js-8.0-blue.svg)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-4.0-blue.svg)](https://www.npmjs.com/)
![Platforms](https://img.shields.io/badge/Web-Windows%20%7C%20MacOS%20%7C%20Linux-lightgray.svg)
[![Data-Management](https://img.shields.io/badge/Data%20Management-v1-green.svg)](http://developer.autodesk.com/)
[![Design-Automation](https://img.shields.io/badge/Design%20Automation-v3-green.svg)](http://developer.autodesk.com/)
[![Forge-Viewer](https://img.shields.io/badge/Forge%20Viewer-v7-green.svg)](http://developer.autodesk.com/)
[![Cost Management](https://img.shields.io/badge/Cost%20Management-beta-green.svg)](http://developer.autodesk.com/)


![Windows](https://img.shields.io/badge/Plugins-Windows-lightgrey.svg)
![.NET](https://img.shields.io/badge/.NET%20Framework-4.7-blue.svg)
[![Revit-2020](https://img.shields.io/badge/Revit-2020-lightgrey.svg)](http://autodesk.com/revit)


![Advanced](https://img.shields.io/badge/Level-Advanced-red.svg)
[![MIT](https://img.shields.io/badge/License-MIT-blue.svg)](http://opensource.org/licenses/MIT)

# Description
This sample demonstrates generating quantity and budgets from Revit model directly, and export to BIM360 Cost module as new Budgets. 
 

# Thumbnail
![thumbnail](/thumbnail.png)

# Demonstration
[![https://youtu.be/Q7kyh5A__mg](http://img.youtube.com/vi/Q7kyh5A__mg/0.jpg)](http://www.youtube.com/watch?v=Q7kyh5A__mg "Generate Quantity and Budget from Revit model directly, and export to BIM360 Cost module as new Budgets")

# Live Demo
[https://revit-qto-bim360cost.herokuapp.com/](https://revit-qto-bim360cost.herokuapp.com/)

# Main Parts of The Work
1. Create a Revit Plugin to be used within AppBundle of Design Automation for Revit. Please check [PlugIn](./RevitQtoPlugin/) 
2. Create your App, upload the AppBundle, define your Activity and test the workitem with the Postman collection under [Postman Collection](./PostmanCollection/), or you can refer ([https://youtu.be/1NCeH7acIko](https://youtu.be/1NCeH7acIko)) and simply use the `Configure` button in the Web Application to create the Appbundle & Activity. 
3. Create the Web App to call the workitem.

# Web App Setup

## Prerequisites

1. **Forge Account**: Learn how to create a Forge Account, activate subscription and create an app at [this tutorial](http://learnforge.autodesk.io/#/account/). 
2. **Visual Code**: Visual Code (Windows or MacOS).
3. **ngrok**: Routing tool, [download here](https://ngrok.com/)
4. **Revit 2020**: required to compile changes into the plugin
5. **JavaScript ES6** syntax for server-side.
6. **JavaScript** basic knowledge with **jQuery**
7. **MongoDB**: noSQL database, learn more. Or use a online version via Mongo Altas (this is used on this sample)


For using this sample, you need an Autodesk developer credentials. Visit the [Forge Developer Portal](https://developer.autodesk.com), sign up for an account, then [create an app](https://developer.autodesk.com/myapps/create). For this new app, use **http://localhost:3000/api/forge/callback/oauth** as Callback URL, although is not used on 2-legged flow. Finally take note of the **Client ID** and **Client Secret**.

## Running locally

Install [NodeJS](https://nodejs.org), version 8 or newer.

Clone this project or download it (this `nodejs` branch only). It's recommended to install [GitHub desktop](https://desktop.github.com/). To clone it via command line, use the following (**Terminal** on MacOSX/Linux, **Git Shell** on Windows):

    git clone https://github.com/JohnOnSoftware/forge-revit.extract.quantity-bim360.cost

Install the required packages using `npm install`.

**ngrok**

Run `ngrok http 3000` to create a tunnel to your local machine, then copy the address into the `FORGE_WEBHOOK_URL` environment variable. Please check [WebHooks](https://forge.autodesk.com/en/docs/webhooks/v1/tutorials/configuring-your-server/) for details.

**MongoDB**

[MongoDB](https://www.mongodb.com) is a no-SQL database based on "documents", which stores JSON-like data. For testing purpouses, you can either use local or live. For cloud environment, try [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (offers a free tier). With MongoDB Atlas you can set up an account for free and create clustered instances, intructions:

1. Create an account on MongoDB Atlas.
2. Create a free version of cluster, use the default setting, but name it as `forgesample` for example.
3. Whitelist the IP address to access the database, [see this tutorial](https://docs.atlas.mongodb.com/security-whitelist/). If the sample is running on Heroku, you'll need to open to all (IP `0.0.0.0/0`). 
4. Create a new user to access the database, please keep the **user name** and **password** to be used in the following connection. 

At this point the connection string to the MongoDB server should be in the form of 
`mongodb+srv://<username>:<password>@<clustername>-njl8m.mongodb.net`. please set environment variable `OAUTH_DATABASE` with this url. [Learn more here](https://docs.mongodb.com/manual/reference/connection-string/)

There are several tools to view your database, [Robo 3T](https://robomongo.org/) (formerly Robomongo) is a free lightweight GUI that can be used. When it opens, follow instructions [here](https://www.datduh.com/blog/2017/7/26/how-to-connect-to-mongodb-atlas-using-robo-3t-robomongo) to connect to MongoDB Atlas.


**Environment variables**

Set the enviroment variables with your client ID & secret and finally start it. Via command line, navigate to the folder where this repository was cloned and use the following:

Mac OSX/Linux (Terminal)

    npm install
    export FORGE_CLIENT_ID=<<YOUR CLIENT ID FROM DEVELOPER PORTAL>>
    export FORGE_CLIENT_SECRET=<<YOUR CLIENT SECRET>>
    export FORGE_CALLBACK_URL=<<YOUR CALLBACK URL>>
    export FORGE_WEBHOOK_URL=<<YOUR DESIGN AUTOMATION FOR REVIT CALLBACK URL>>
    export OAUTH_DATABASE="mongodb+srv://<username>:<password>@<clustername>-njl8m.mongodb.net>>"

    npm start

Windows (use **Node.js command line** from Start menu)

    npm install
    set FORGE_CLIENT_ID=<<YOUR CLIENT ID FROM DEVELOPER PORTAL>>
    set FORGE_CLIENT_SECRET=<<YOUR CLIENT SECRET>>
    set FORGE_CALLBACK_URL=<<YOUR CALLBACK URL>>
    set FORGE_WEBHOOK_URL=<<YOUR DESIGN AUTOMATION FOR REVIT CALLBACK URL>>
    set OAUTH_DATABASE="mongodb+srv://<username>:<password>@<clustername>-njl8m.mongodb.net>>"
    npm start

### Using the app

Open the browser: [http://localhost:3000](http://localhost:3000).

**Setup the app before using the App:**
1. Make sure the Forge App is integrated with your BIM 360 account, please click **Enable my BIM 360 Account** button and follow the steps to finish the integration. 
2. Make sure to create **Revi Design Automation** Appbundle & activity, click **Configure** button and create it. Please check the video at [https://youtu.be/1NCeH7acIko](https://youtu.be/1NCeH7acIko) for reference. Currently, Revit 2019|2020 are both supported. 
3. Make sure to initialize the **Price Book** database, open **Price Book** dialog and **Reset**, it will create **Standard_Book**(database), **Price_Book**(collection), with a couple of predefined price items.  

**Operate with App after setup**
1. Select Revit file version in BIM360 Hub to view the Model, Click `Extract quantity from the model` button, it will extract the quantity and display you with the budgets info for different elements.
2. Clike `Update to BIM360`, it will import the budgets into BIM 360 Cost Management module.
3. Open `BIM 360 Cost Management` module, check the budgets, and update the `Unit Cost` for any budget item, then click `Get Unit Price from BIM360` button, it will update the price book and refresh budget table|chart based on the updated **Unit Price** from BIM360.

## Deployment

To deploy this application to Heroku, the **Callback URL** for Forge must use your `.herokuapp.com` address. After clicking on the button below, at the Heroku Create New App page, set your Client ID, Secret, Callback URL and Revit Design Automation variables for Forge.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/JohnOnSoftware/forge-revit.extract.quantity-bim360.cost)

Watch [this video](https://www.youtube.com/watch?v=Oqa9O20Gj0c) on how deploy samples to Heroku.

## Packages used
- The sample is using [autodesk.forge.designautomation](https://www.npmjs.com/package/autodesk.forge.designautomation) SDK.
- The [Autodesk Forge](https://www.npmjs.com/package/forge-apis) packages is included by default. Some other non-Autodesk packaged are used, including [socket.io](https://www.npmjs.com/package/socket.io), [express](https://www.npmjs.com/package/express).
- The [MongoDB Node.js SDK](https://www.npmjs.com/package/mongodb) is used to operate with the database.


## Further Reading

**Documentation:**
- This sample is based on [Learn Forge Tutorial](https://github.com/Autodesk-Forge/learn.forge.viewhubmodels/tree/nodejs), please check details there about the basic framework if you are not familar. 
- [Design Automation API](https://forge.autodesk.com/en/docs/design-automation/v3/developers_guide/overview/)
- [BIM 360 API](https://developer.autodesk.com/en/docs/bim360/v1/overview/) and [App Provisioning](https://forge.autodesk.com/blog/bim-360-docs-provisioning-forge-apps)
- [Data Management API](httqqqps://developer.autodesk.com/en/docs/data/v2/overview/)

**Desktop APIs:**
- [Revit](https://knowledge.autodesk.com/support/revit-products/learn-explore/caas/simplecontent/content/my-first-revit-plug-overview.html)
**Other APIs:**
- [MongoDB for Node.js#](https://docs.mongodb.com/ecosystem/drivers/node/) driver
- [Mongo Altas](https://www.mongodb.com/cloud/atlas) Database-as-a-Service for MongoDB


## Tips & Tricks
- The sample use the local endpoint to accept the outputJson file which is generated by the Revit cloud engine, this help improve the performance.

## Troubleshooting
1. **Cannot see my BIM 360 projects**: Make sure to provision the Forge App Client ID within the BIM 360 Account, [learn more here](https://forge.autodesk.com/blog/bim-360-docs-provisioning-forge-apps). This requires the Account Admin permission.

2. After installing Github desktop for Windows, on the Git Shell, if you see a ***error setting certificate verify locations*** error, use the following:

    git config --global http.sslverify "false"

## Limitation
- BIM 360 Cost Management module needs to be activated to use this App, due to the current limitation of Cost project setting API, user needs to setup project manually. 
- Currently Revit Cloud Worksharing is not supported by the Design Automation.  The scenario that this sample demonstrates is applicable only with a file-based Revit model. 
- Client JavaScript requires modern browser.

## License

This sample is licensed under the terms of the [MIT License](http://opensource.org/licenses/MIT). Please see the [LICENSE](LICENSE) file for full details.

## Written by

Zhong Wu [@johnonsoftware](https://twitter.com/johnonsoftware), [Forge Partner Development](http://forge.autodesk.com)
