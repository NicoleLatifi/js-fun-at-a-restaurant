function takeOrder(orderNumber, deliveryOrders) {
  if(deliveryOrders.length < 3) {
    return deliveryOrders.push(orderNumber)
  }
}

function refundOrder(orderNumber, deliveryOrders) {
  return deliveryOrders.splice((orderNumber - 1), 1)
}

function listItems(orders) {
  var results = ""
  for(let i = 0; i < orders.length; i++) {
    results = results + orders[i].item + ", "
  }
  return results.substring(0, results.length - 2)
}

function searchOrder(orders, name) {
  return listItems(orders).includes(name)
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}