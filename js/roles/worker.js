import { createOrder } from "../services/orderService.js";

window.addOrder = async () => {

  const order = {
    type: document.getElementById("type").value,
    item: document.getElementById("item").value,
    price: Number(document.getElementById("price").value),
    createdBy: currentUser.email
  };

  await createOrder(order);

};