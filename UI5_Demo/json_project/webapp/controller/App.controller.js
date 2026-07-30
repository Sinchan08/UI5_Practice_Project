sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel" ,"sap/ui/model/resource/ResourceModel"], (Controller, JSONModel, ResourceModel)=>{
    "use strict";

    return Controller.extend("ui5.image.controller.App",{

        onInit(){
            const oModel = new JSONModel();
            oModel.loadData(sap.ui.require.toUrl("ui5/image/model/emp.json"))
        //this.getView().setModel(oModel);
        //sap.ui.getCore().setModel(oModel)
        this.getView().byId("my_name").setModel(oModel)

        
        this.getView().setModel(oJsonModel);
    
        const oResourceModel = new ResourceModel({
            bundleName:"ui5.image.i18n.i18n"

        })
        this.getView().setModel(oResourceModel, "i18n");
    },
     
    onImagePress(oEvent){
        oEvent.getSource().getId().endsWith("image1") ? alert("Image1 Pressed") : alert("Image2 Pressed");
        alert("Image Pressed");

    }

    })
})