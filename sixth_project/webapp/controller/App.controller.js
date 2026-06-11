sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"], (controller, JSONModel)=>{

    return controller.extend("ui5.walkthrough.controller.App",{

        onInit(){
            const oModel = new JSONModel({
                employee:{
                    name: "Sinchana"

                }
            });
            this.getView().setModel(oModel);
        }

    });

});