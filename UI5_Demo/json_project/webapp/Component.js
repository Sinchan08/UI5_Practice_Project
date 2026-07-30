sap.ui.define(["sap/ui/core/UIComponent","sap/ui/core/mvc/XMLView"], (UIComponent, XMLView, JSONModel)=>{
    "use strict"

    return UIComponent.extend("ui5.image.Component", {
        //metadata section..
        metadata: {
            interface : [
                "sap.ui.core.IAsyncContentCreation"
            ],
            rootView:"ui5.jsonmodel.view.App",
            config:{
                serviceUrl: "model/first.json"

            }
                 
            
        },

        createContent: function(){

            UIComponent.prototype.createContent.apply(this, arguments);
            var oView = XMLView.create({
                viewName: "ui5.image.view.App"
            })

            return oView;
            
        }
    })

    

})