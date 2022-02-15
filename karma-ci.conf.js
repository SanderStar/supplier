module.exports = function(config) {
    "use strict";

    require("./karma.conf")(config);

    config.set({
        coverageReporter: {
			includeAllSources: true,
			reporters: [
				{
					type: "html",
					dir: "coverage"
				},
				{
					type: "text"
                },
                {
                    type: "cobertura"
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
        reporters: ["progress", "coverage", "junit"],

        junitReporter: {
            outputDir: "./junit",
            outputFile: "TEST-unit-test-result.xml",
            useBrowserName: false
        },

        singleRun: true,
        autoWatch: false
    });
};