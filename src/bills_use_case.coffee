class TrackSpendingsUseCase
  constructor: ->
    @bills = []

  start: =>

  addNewBill: (bill) =>
    @bills.push(bill)

  totalFromBills: =>
    @bills.sum('value')

class Bill
  constructor: (value) ->
    @value = Number(value)
