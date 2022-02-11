module.exports = function(config) {
    config.set({
  
      frameworks: ["ui5", "qunit", "sinon"],
  
      ui5: {
        url: "https://sapui5.hana.ondemand.com",
        mode: "script",
        config: {
          async: true,
          resourceRoots: {
            "nl.gasunie.supplier.supplier": "./base/webapp"
          }
        },
        tests: [
          "nl/gasunie/supplier/supplier/test/unit/AllTests"
        ]
      },
  
      browsers: ["ChromiumHeadless"],
  
      singleRun: false,
      autoWatch: true      
    });

  };