var WebGlue;

WebGlue = (function() {

  function WebGlue(useCase, gui, storage) {
    var _this = this;
    this.useCase = useCase;
    this.gui = gui;
    this.storage = storage;
    After(this.gui, 'enterKeyPressed', function(content) {
      return _this.useCase.addNewBill(new Bill(content));
    });
    After(this.useCase, 'addNewBill', this.gui.addNewBill);
    After(this.useCase, 'addNewBill', function(bill) {
      return _this.gui.setTotal(_this.useCase.totalFromBills());
    });
  }

  return WebGlue;

})();
