sap.ui.define(["sap/m/Shell","sap/ui/core/ComponentContainer","ui5/jsonmodel/Component"],(Shell, ComponentContainer,Component)=>{

    "use strict";

    new Shell({
        app: new ComponentContainer({
            name:"ui5.jsonmodel",
            async: true,
            height: "100%",
            
           
        })
    }).placeAt("content");

  
})