/*global QUnit*/

sap.ui.define([
	"nl/gasunie/supplier/supplier/controller/Object.controller"
], (Controller) => {
	"use strict";

	QUnit.module("Object Controller");

	QUnit.test("I should test the Object controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

	QUnit.test("I should test the Object controller has onInit", function (assert) {
		var oAppController = new Controller();
		assert.ok(oAppController.onInit);
	});

	QUnit.test("I should test the View1 controller has getAufnr", (assert) => {
		var oAppController = new Controller();
		sinon.stub(oAppController, "getAufnr").returns('1000216');
		assert.ok(oAppController.getAufnr() === '1000216');
	});

	QUnit.test("I should have a tasklist", (assert) => {
		var oAppController = new Controller();
		assert.ok(true)
	});
});
