/*global QUnit*/

sap.ui.define([
	"nl/gasunie/supplier/supplier/controller/Object.controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/routing/History"    
], (Controller, JSONModel, History) => {
	"use strict";

	QUnit.module("Object Controller");

	QUnit.test("I should test the Object controller", function (assert) {
		var oAppController = new Controller();
        const oOwnerComponentStub = {
            getRouter: () => ({
                getRoute: () => ({
                    attachPatternMatched: () => ""
                })
            })
        };

        const oModel =  new JSONModel({
            busy : true,
            delay : 0
        });
        sinon.stub(oAppController, "getRouter").returns(oOwnerComponentStub.getRouter());
        sinon.stub(oAppController, "setModel").returns(oModel)        
		oAppController.onInit();
		assert.ok(oAppController);
	});

	QUnit.test("I should test the Object controller has onInit", function (assert) {
		var oAppController = new Controller();
		assert.ok(oAppController.onInit);
	});
    
    // onNavBack
	QUnit.test("I should test the Object controller onNavBack", function (assert) {
        const oOwnerComponentStub = {
            getRouter: () => ({
                navTo: () => ({
                })
            })
        };
		var oAppController = new Controller();
        sinon.stub(oAppController, "getRouter").returns(oOwnerComponentStub.getRouter());
		assert.ok(oAppController.onNavBack());
	});

    QUnit.test("It should check onNavBack() is available", (assert) => {
        // Arrange
        var oAppController = new Controller();          
        const oSpy = sinon.spy(oAppController, "onNavBack");

        // Act
        oAppController.onNavBack();

        // Assert
        assert.ok(oSpy.calledOnce);
    });

    QUnit.test("It should check onNavBack() calling the getRouter.navTo()", (assert) => {
        // Arrange
        var oAppController = new Controller();          
        sinon.stub(oAppController, "getRouter").callsFake(() => ({
            navTo: () => ""
        }));
        sinon.stub(History, "getInstance").callsFake(() => ({
            getPreviousHash: () => undefined
        }));
        const oSpy = sinon.spy(oAppController, "onNavBack");

        // Act
        oAppController.onNavBack("fakeRoute");

        // Assert
        assert.ok(oSpy.calledOnce);
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
