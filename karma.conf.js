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

      preprocessors: {
        "{webapp/**/*.js,webapp/!(test|view)}/**/!(mock*).js": ["coverage"]
      },
      coverageReporter: {
              includeAllSources: true,            
        reporters: [
          {
            type: "html",
            dir: "coverage"
          },
          {
            type: "text"
          }
        ],
        check: {
          each: {
            statements: 50,
            branches: 50,
            functions: 50,
            lines: 50
          }
        }
      },

      reporters: ["progress", "coverage"],

      browsers: ["ChromiumHeadless"],
      
      browserConsoleLogOptions: {
        level: "error"
      },

      singleRun: false,
      autoWatch: true      
    });

  };