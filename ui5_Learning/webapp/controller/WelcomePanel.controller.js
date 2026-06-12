sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/MessageToast"], function (Controller, MessageToast){
    "use strict";

    const WelcomePanel = Controller.extend("ui5.walkthrough.controller.WelcomePanel", {
        onShowHello() {
            const recipient = this.getView()?.getModel()?.getProperty("/recipient/name");
            const resourceBundle = this.getView()?.getModel("i18n")?.getResourceBundle();
            const msg = resourceBundle.getText("helloMsg", [recipient]);
            MessageToast.show(msg);
        },

        async onOpenDialog(){
            this.dialog ??= await this.loadFragment({
                name: "ui5.walkthrough.view.WelcomeDialog"
            });
            this.dialog.open();
        },
        onCloseDialog(){
            this.byId("welcomeDialog").close();
        }
    });
    return WelcomePanel;

    
});