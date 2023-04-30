export class Order {
  constructor(id, orderDate, sandwitches, orderPrice) {
    this.id = id;
    this.date = orderDate;
    this.sandwitches = sandwitches;
    this.totalPrice = orderPrice;
  }
}
