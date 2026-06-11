sap.ui.define(["sap/ui/core/mvc/XMLView"], (XMLView) => {

    XMLView.create({
        viewName:"ui5.walkthrough.view.App"
    }).then((oView) =>{       //promise is provided if it is sucess we are intiating the view on html body
        oView.placeAt("content");
    })

    });