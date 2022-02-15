## Application Details
|               |
| ------------- |
|**Generation Date and Time**<br>Fri Feb 11 2022 10:37:49 GMT+0000 (Coordinated Universal Time)|
|**App Generator**<br>@sap/generator-fiori|
|**App Generator Version**<br>1.4.7|
|**Generation Platform**<br>SAP Business Application Studio|
|**Floorplan Used**<br>1worklist|
|**Service Type**<br>SAP System (ABAP On Premise)|
|**Service URL**<br>https://services.odata.org/V2/OData/OData.svc/
|**Module Name**<br>supplier|
|**Application Title**<br>Suppliers|
|**Namespace**<br>nl.gasunie.supplier|
|**UI5 Theme**<br>sap_fiori_3|
|**UI5 Version**<br>Latest|
|**Enable Code Assist Libraries**<br>True|
|**Add Eslint configuration**<br>True, see https://www.npmjs.com/package/eslint-plugin-fiori-custom for the eslint rules.|
|**Enable Telemetry**<br>True|

## supplier

A Fiori application.

### Starting the generated app

-   This app has been generated using the SAP Fiori tools - App Generator, as part of the SAP Fiori tools suite.  In order to launch the generated app, simply run the following from the generated app root folder:

```
    npm start
```

#### Pre-requisites:

1. Active NodeJS LTS (Long Term Support) version and associated supported NPM version.  (See https://nodejs.org)

#### Reference unit-tests project

The project is a default template from the UI5 template wizard.

Default qunit tests are generated in the tests folder. Those can be started from the package.json with the unit-test task.

The karma runner is added with the below webpage. It will also add sinon. With sinon stubs can be generated to support the unit test.

See https://www.npmjs.com/package/karma-ui5?activeTab=readme for more details


```
    npm run-script test
```

See coverage folder for index.html with results.
