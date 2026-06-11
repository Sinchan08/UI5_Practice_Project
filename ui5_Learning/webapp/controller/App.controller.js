// sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller){
//     "use strict";

//     const AppController = Controller.extend("ui5.walkthrough.controller.App", {
//         onShowHello() {
//             alert("Hello World!");
//             //console.log("Hello World!");
//         }
//     });
//     return AppController;
// });
// sap.ui.define(["sap/m/MessageToast", "sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel", "sap/ui/model/resource/ResourceModel"], function (MessageToast, Controller, JSONModel, ResourceModel){
//     "use strict";

    // const AppController = Controller.extend("ui5.walkthrough.controller.App",{
        // onInit(){
        //     const data={
        //         recipient:{
        //             name: ""
        //         }
        //     };
        //     const dataModel = new JSONModel(data);
        //     this.getView().setModel(dataModel);

        //     const i18nModel = new ResourceModel({
        //         bundleName: "ui5.walkthrough.i18n.i18n"

        //     });
        //     this.getView().setModel(i18nModel, "i18n")
        // },
//         onShowHello(){

//             const recipient = this.getView()?.getModel()?.getProperty("/recipient/name");
//             const resourceBundle = this.getView()?.getModel("i18n")?.getResourceBundle();
//             const msg = resourceBundle.getText("helloMsg", [recipient])
//             MessageToast.show(msg);
//         }
//     });
//     return AppController
// })

sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  const App = Controller.extend("ui5.walkthrough.controller.App", {});
  ;
  return App;
});
