sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/MessageToast"], function (Controller, MessageToast){
    "use strict";

    const WelcomePanel = Controller.extend("ui5.walkthrough.controller.WelcomePanel", {
        onShowHello() {
            const recipient = this.getView()?.getModel()?.getPeoperty("/recipient/name");
            const resourceBundle = this.getView()?.getModel("i18n")?.getResourceBundle();
            const msg = resourceBundle.getText("welcome", [recipient]);

            MessageToast.show(msg);
        }
    });
    return WelcomePanel;

    
});