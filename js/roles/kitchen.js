import { acceptOrder, completeOrder } from "../services/orderService.js";

window.acceptOrder = (id) => acceptOrder(id);
window.completeOrder = (id) => completeOrder(id);