class BillsGui
  constructor: ->
    $("#new-bill").keypress((event) => @keyPressed(event))
    @billElements = []

  keyPressed: (event) =>
    ENTER_KEY_CODE = 13
    if event.keyCode == ENTER_KEY_CODE
      @enterKeyPressed(@newBillContent())
      @clearNewBillInput()

  newBillContent: =>
    $("#new-bill").val()

  clearNewBillInput: =>
    $("#new-bill").val("")

  enterKeyPressed: (content) =>

  addNewBill: (bill) =>
    element = @createElementFor(bill, '#bill-template')
    @billElements.push(element)
    $("#bill-list").append(element)

  setTotal: (total) =>
    console.log(total)
    $("#bill-total").html(total)

  createElementFor: (bill, templateId) =>
    source = $(templateId).html()
    template = Handlebars.compile(source)
    data = {content: bill.value}
    html = template(data)
    element = $(html)


