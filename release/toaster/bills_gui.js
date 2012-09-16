(function() {
  var BillsGui,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  BillsGui = (function() {

    function BillsGui() {
      this.enterKeyPressed = __bind(this.enterKeyPressed, this);

      this.keyPressed = __bind(this.keyPressed, this);

      var _this = this;
      $("#new-bill").keypress(function(event) {
        return _this.keyPressed(event);
      });
      this.billElements = [];
    }

    BillsGui.prototype.keyPressed = function(event) {
      var ENTER_KEY_CODE, content;
      ENTER_KEY_CODE = 13;
      if (event.keyCode === ENTER_KEY_CODE) {
        content = "test";
        return this.enterKeyPressed(content);
      }
    };

    BillsGui.prototype.enterKeyPressed = function(content) {
      return console.log(content);
    };

    return BillsGui;

  })();

}).call(this);
