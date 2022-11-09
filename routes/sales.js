const express=require("express");
const router=express.Router();

const {getSales, newSales, getSalesById, updateSales, deleteSales} = require("../controllers/salesController")

router.route("/ventas").get(getSales);
router.route("/ventas/nuevo").post(newSales);
router.route("/ventas/:id").get(getSalesById);
router.route("/ventas/:id").put(updateSales);
router.route("/ventas/:id").delete(deleteSales);

module.exports=router;
