 #<< utils
#<< local_storage
#<< bills_use_case
#<< bills_gui
#<< web_glue

class BillsApp
  constructor: ->
    useCase = new TrackSpendingsUseCase()
    window.useCase = useCase
    gui = new BillsGui()
    localStorage = new LocalStorage("bills_app")
    glue = new WebGlue(useCase, gui, localStorage)
    useCase.start()

new BillsApp()
