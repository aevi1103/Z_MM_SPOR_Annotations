sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.federalmogul.Z_MM_SPOR.controller.App", {
		
		getResourceBundle : function () {
			return this.getOwnerComponent().getModel("i18n");
		},
		
		onInit: function () {

		},
		
		formatStatusText: function (statusText) {
			switch(statusText.toLowerCase()) {
				case "d":
					return this.getResourceBundle().getText("draft");
				case "a":
					return this.getResourceBundle().getText("awaitingApproval");
				case "c":
					return this.getResourceBundle().getText("completed");
				case "p":
					return this.getResourceBundle().getText("approved");
				case "r":
					return this.getResourceBundle().getText("rejected");
				default:
					return "";
			}
		},
		
		formatStatusRowHighlight: function (statusText) {
			
			switch(statusText.toLowerCase()) {
				case "d":
					return "Information";
				case "a":
					return "Warning";
				case "c":
					return "Success";
				case "p":
					return "Success";
				case "r":
					return "Error";
				default:
					return "";
			}
		}
		
	});
});