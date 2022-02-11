/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"nl/gasunie/supplier/supplier/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});