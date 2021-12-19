const { Router } = require("express");
const router = Router();
const {
  renderAuctionForm,
  createNewAuction,
  renderAuctions,
  renderEditForm,
  updateAuction,
  renderBid,
  deleteAuction,
} = require("../controllers/auctions.controller");
const { isAuthenticated } = require('../helpers/auth');

//Nuevos productos subastables
router.get("/auctions/add",isAuthenticated, renderAuctionForm);

router.post("/auctions/new-auction",isAuthenticated, createNewAuction);

//obtener todas las rutas
router.get("/auctions", isAuthenticated,renderAuctions);
router.get("/bid", isAuthenticated,renderBid);

//Editar notas
router.get("/auctions/edit/:id",isAuthenticated, renderEditForm);

router.put("/auctions/edit/:id",isAuthenticated, updateAuction);

//Borrar notas
//router.delete("/auctions/delete/:id", isAuthenticated,deleteAuction);

module.exports = router;
