sap.ui.define(["sap/ui/core/mvc/XMLView"], (XMLView)=>{
    "use strict";

    XMLView.create({
        viewName: "ui5.project3.view.App"
    }).then((oView) => {
        oView.placeAt("content");

    })

})