var BillsApp;

BillsApp = (function() {

  function BillsApp() {
    var glue, gui, localStorage, useCase;
    useCase = new TrackSpendingsUseCase();
    window.useCase = useCase;
    gui = new BillsGui();
    localStorage = new LocalStorage("bills_app");
    glue = new WebGlue(useCase, gui, localStorage);
    useCase.start();
  }

  return BillsApp;

})();

new BillsApp();
