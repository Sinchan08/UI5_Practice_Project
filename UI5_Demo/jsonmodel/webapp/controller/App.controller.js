sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel" ,"sap/ui/model/resource/ResourceModel"], (Controller, JSONModel, ResourceModel)=>{
    "use strict";

    return Controller.extend("ui5.jsonmodel.controller.App",{

        onInit(){
            const oModel = new JSONModel({
                employee:{
                    name:"Sinchana",
                    city:"Mangaluru"

                }

        })
        this.getView().setModel(oModel);
        const oResourceModel = new ResourceModel({
            bundleName:"ui5.jsonmodel.i18n.i18n"

        })
        this.getView().setModel(oResourceModel, "i18n");
    }

    })
})