sap.ui.define([], function () {
	"use strict";

	return {

		numberUnit : function (sValue) {
			if (!sValue) {
				return "";
			}
			return parseFloat(sValue).toFixed(2);
		},
		
		numberUnitNoDecimal : function (sValue) {
			if (!sValue) {
				return "";
			}
			return parseFloat(sValue).toFixed(0);
		},
		
		formatCurrency : function (nValue) {
			var f = sap.ui.core.format.NumberFormat.getCurrencyInstance();
			return f.format(nValue)
		},
		
		formatToUpperCase: function(sVal) {
			return sVal.toUpperCase();
		},
		
		formatDate : function (oDate) {
			if (!oDate) return null;
			const t = sap.ui.getCore().getConfiguration().getLanguage();
			const r = new sap.ui.core.Locale(t);
			const n = sap.ui.core.format.DateFormat.getDateInstance({
				style: "short"
			}, r).format(new Date(oDate));
			return n;
		},
		
		formatShortDate : function (oDate) {
			if (!oDate) return null;
			const lang = sap.ui.getCore().getConfiguration().getLanguage();
			const locale = new sap.ui.core.Locale(lang);
						const formattedDate = sap.ui.core.format.DateFormat.getDateInstance({
				style: "short"
			}, locale).format(new Date(oDate));
			return formattedDate;
		},
		
		formatTime	: function(time) {                                                            
			var timeFormat = sap.ui.core.format.DateFormat.getTimeInstance({pattern: "HH:mm:ss"});
			var TZOffsetMs = new Date(0).getTimezoneOffset()*60*1000;                             
			var timeStr = timeFormat.format(new Date(time.ms + TZOffsetMs));                      
			return timeStr;                                                                       
		}
		

	};

});