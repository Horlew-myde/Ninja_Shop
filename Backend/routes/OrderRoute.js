const express = require("express");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const {
  createOrder,
  getSingleOrder,
  getAllOrders,
  getAllOrdersAdmin,
  updateAdminOrder,
  deleteOrder,
} = require("../controller/OrderController");
const router = express.Router();

router.route("/order/new").post(isAuthenticatedUser, createOrder);
router.route("/order/:id").get(isAuthenticatedUser, getSingleOrder);
router.route("/orders/me").get(isAuthenticatedUser, getAllOrders);
router
  .route("/admin/orders")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllOrdersAdmin);
router
  .route("/admin/order/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateAdminOrder)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder);

module.exports = router;
