var Bill, TrackSpendingsUseCase,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

TrackSpendingsUseCase = (function() {

  function TrackSpendingsUseCase() {
    this.totalFromBills = __bind(this.totalFromBills, this);

    this.addNewBill = __bind(this.addNewBill, this);

    this.start = __bind(this.start, this);
    this.bills = [];
  }

  TrackSpendingsUseCase.prototype.start = function() {};

  TrackSpendingsUseCase.prototype.addNewBill = function(bill) {
    return this.bills.push(bill);
  };

  TrackSpendingsUseCase.prototype.totalFromBills = function() {
    return this.bills.sum('value');
  };

  return TrackSpendingsUseCase;

})();

Bill = (function() {

  function Bill(value) {
    this.value = Number(value);
  }

  return Bill;

})();
