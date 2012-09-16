var BillsGui,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

BillsGui = (function() {

  function BillsGui() {
    this.createElementFor = __bind(this.createElementFor, this);

    this.setTotal = __bind(this.setTotal, this);

    this.addNewBill = __bind(this.addNewBill, this);

    this.enterKeyPressed = __bind(this.enterKeyPressed, this);

    this.clearNewBillInput = __bind(this.clearNewBillInput, this);

    this.newBillContent = __bind(this.newBillContent, this);

    this.keyPressed = __bind(this.keyPressed, this);

    var _this = this;
    $("#new-bill").keypress(function(event) {
      return _this.keyPressed(event);
    });
    this.billElements = [];
  }

  BillsGui.prototype.keyPressed = function(event) {
    var ENTER_KEY_CODE;
    ENTER_KEY_CODE = 13;
    if (event.keyCode === ENTER_KEY_CODE) {
      this.enterKeyPressed(this.newBillContent());
      return this.clearNewBillInput();
    }
  };

  BillsGui.prototype.newBillContent = function() {
    return $("#new-bill").val();
  };

  BillsGui.prototype.clearNewBillInput = function() {
    return $("#new-bill").val("");
  };

  BillsGui.prototype.enterKeyPressed = function(content) {};

  BillsGui.prototype.addNewBill = function(bill) {
    var element;
    element = this.createElementFor(bill, '#bill-template');
    this.billElements.push(element);
    return $("#bill-list").append(element);
  };

  BillsGui.prototype.setTotal = function(total) {
    console.log(total);
    return $("#bill-total").html(total);
  };

  BillsGui.prototype.createElementFor = function(bill, templateId) {
    var data, element, html, source, template;
    source = $(templateId).html();
    template = Handlebars.compile(source);
    data = {
      content: bill.value
    };
    html = template(data);
    return element = $(html);
  };

  return BillsGui;

})();
