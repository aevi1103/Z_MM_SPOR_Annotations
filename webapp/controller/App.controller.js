sap.ui.define([
	"./BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("com.federalmogul.Z_MM_SPOR_ANTN.controller.App", {
		
		onInit: function () {

		},
	
		formatStatusText: function (statusText) {
			
			// switch(statusText.toLowerCase()) {
			// 	case "d":
			// 		return this.getResourceBundle().getText("draft");
			// 	case "a":
			// 		return this.getResourceBundle().getText("awaitingApproval");
			// 	case "c":
			// 		return this.getResourceBundle().getText("completed");
			// 	case "p":
			// 		return this.getResourceBundle().getText("approved");
			// 	case "r":
			// 		return this.getResourceBundle().getText("rejected");
			// 	default:
			// 		return "";
			// }
			
			switch(statusText.toLowerCase()) {
				case "d":
					return "Draft";
				case "a":
					return "Awaiting Approval";
				case "c":
					return "Completed";
				case "p":
					return "Approved";
				case "r":
					return "Rejected";
				default:
					return "";
			}
		},

		formatStatusState: function (statusText) {
			
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
		},
		
		formatStatusIcon: function (statusText) {
			
			switch(statusText.toLowerCase()) {
				case "d":
					return "sap-icon://hint";
				case "a":
					return "sap-icon://message-warning";
				case "c":
					return "sap-icon://message-success";
				case "p":
					return "sap-icon://message-success";
				case "r":
					return "sap-icon://alert";
				default:
					return "";
			}
		},
		
		onItemPress: function(oEvt) {
			const src = oEvt.getSource();
			this._showObject(src);
		},
		
		_showObject: function (oItem) {

			const sBanfn = oItem.getBindingContext().getProperty("Banfn");
			if (!sap.hasOwnProperty('ushell')) {
				// Not in Launchpad
				window.open("/sap/bc/bsp/sap/z_mm_dpor/index.html");
			} else {
				// In Launchpad
				const oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation");
				const hash = (oCrossAppNavigator && oCrossAppNavigator.hrefForExternal({
					target: {
						semanticObject: "PurchaseRequisition",
						action: "display"
					},
					params: {
						"Banfn": sBanfn,
						"close": "x"
					}
				})) || "";

				const url = window.location.href.split('#')[0] + hash;
				sap.m.URLHelper.redirect(url, true);
			}
		}

	});
});