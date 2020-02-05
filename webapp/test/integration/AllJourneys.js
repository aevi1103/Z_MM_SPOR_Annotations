/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/federalmogul/Z_MM_SPOR_ANTN/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/federalmogul/Z_MM_SPOR_ANTN/test/integration/pages/App",
	"com/federalmogul/Z_MM_SPOR_ANTN/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.federalmogul.Z_MM_SPOR_ANTN.view.",
		autoWait: true
	});
});