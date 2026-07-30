sap.ui.define(["sap/m/Text"],
    (Text) => {

        var oText = new Text("id1", {
            text:"Sample Text Control"
        });

        oText.placeAt("content");
})