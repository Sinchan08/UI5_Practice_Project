sap.ui.define(["sap/ui/core/mvc/XMLView"],(XMLView)=>{
    XMLView.create({
        viewName : "ui5.walkthrough.view.App" //through index.js file we are intantiating the view and for that we have to crete a view inside webapp folder
    }).then((oView) =>{
        oView.placeAt("content");
    });
});