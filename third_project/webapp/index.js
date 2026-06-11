sap.ui.define(["sap/m/Button"],(Button) => {
    var oButton = new Button("id1", {
        text:"sample button"
    });
    oButton.placeAt("content");

    // new Button("id1",{
    //     text:"sample button"
    // }).placeAt("content");
    
});