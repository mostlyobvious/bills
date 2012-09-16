(function() {
  var Bill, TrackSpendingsUseCase,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  TrackSpendingsUseCase = (function() {

    function TrackSpendingsUseCase() {
      this.start = __bind(this.start, this);
      this.bills = [];
    }

    TrackSpendingsUseCase.prototype.start = function() {};

    return TrackSpendingsUseCase;

  })();

  Bill = (function() {

    function Bill(value) {
      this.value = value;
    }

    return Bill;

  })();

}).call(this);
