class WebGlue
  constructor: (@useCase, @gui, @storage) ->
    After(@gui, 'enterKeyPressed', (content) => @useCase.addNewBill(new Bill(content)))
    After(@useCase, 'addNewBill', @gui.addNewBill)
    After(@useCase, 'addNewBill', (bill) => @gui.setTotal(@useCase.totalFromBills()))
