class BillsGui
  constructor: ->
    $("#new-bill").keypress((event) => @keyPressed(event))
    @billElements = []

  keyPressed: (event) =>
    ENTER_KEY_CODE = 13
    if event.keyCode == ENTER_KEY_CODE
      content = "test"
      @enterKeyPressed(content)

  enterKeyPressed: (content) =>
    console.log(content)
