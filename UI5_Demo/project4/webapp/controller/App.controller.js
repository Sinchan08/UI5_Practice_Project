sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageToast"], (Controller, MessageToast)=>{

    "use strict";

    return Controller.extend("ui5.project4.controller.App", {

        //our own custom function
        onClickControl(){
            MessageToast.show("Button Clicked from App View");
        }
    })


})