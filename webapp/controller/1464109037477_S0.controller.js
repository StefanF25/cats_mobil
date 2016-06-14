sap.ui.define(["sap/ui/core/mvc/Controller"], function(BaseController) {
	"use strict";

	return BaseController.extend("generated.app.controller.1464109037477_S0", {

		onInit: function() {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getTarget("1464109037477_S0").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));
			
			
				var oModel = new sap.ui.model.json.JSONModel();
				oModel.loadData(
						"/sap/opu/odata/sap/Z_CATS_API_SRV/CATS_DATASet('000000000001')?$format=json", "",
						false);

				this.getView().setModel(oModel);


		},
		
		handleCalendarSelect: function(oEvent) {
			var oCalendar = oEvent.oSource;
			console.log(oCalendar);
			alert(oCalendar._oFocusedDate);

		},
		
		handleRouteMatched: function(oEvent) {
			var params = {};
			if (oEvent.mParameters.data.context || oEvent.mParameters.data.masterContext) {
				this.sContext = oEvent.mParameters.data.context;
				this.sMasterContext = oEvent.mParameters.data.masterContext;

				if (!this.sContext) {
					this.getView().bindElement("/" + this.sMasterContext, params);
				} else {
					this.getView().bindElement("/" + this.sContext, params);
				}

			}

		},
		_onPressSapResponsivePage0footersapmBar1contentRightsapmButton1: function() {
			var oEntry = {};
			
			oEntry.Stunden = parseInt(this.getView().byId("ipt_dauer").getProperty('value'));
			oEntry.Kostenstelle = this.getView().byId("ipt_senderkostenstelle").getProperty('value');
			oEntry.Eauftrnr = this.getView().byId("ipt_auftragsnummer").getProperty('value');
			oEntry.Lsart = this.getView().byId("ipt_leistungsart").getProperty('value');
			
			var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/Z_CATS_API_SRV", true);
			sap.ui.getCore().setModel(oModel);
			
			oModel.create('/CATS_DATASet', oEntry, null, function(oData, oResponse){
			    	alert("Eintrag erfolgreich angelegt!");
			    },function(oData, oResponse){
			    	alert("Eintrag konnte nicht angelegt werden!");
			})
		}
	});
}, /* bExport= */ true);