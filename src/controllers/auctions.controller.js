const auctionsCtrl = {};

const Auction = require("../models/Auctions");

auctionsCtrl.renderAuctionForm = (req, res) => {
  res.render("auctions/new-auction");
};

auctionsCtrl.createNewAuction = async (req, res) => {
  const {
    image,
    name,
    description,
    deadlinetime,
    auctionstart,
    endauction,
    startingprice,
  } = req.body;
  const newAuction = new Auction({
    image,
    name,
    description,
    deadlinetime,
    auctionstart,
    endauction,
    startingprice,
  });
  console.log(newAuction);

  await newAuction.save();
  // req.flash(
  //   "success_msg",
  //   "La subasta se ha registrado exitosamente exitosamente"
  // );
  res.redirect("/auctions");
};

auctionsCtrl.renderAuctions = async (req, res) => {
  const auctions = await Auction.find().lean();
  res.render("auctions/all-auctions", { auctions });
};
auctionsCtrl.renderBid = async (req, res) => {
  const auctions = await Auction.find().lean();
  res.render("auctions/bid", { auctions });
};

auctionsCtrl.renderEditForm = async (req, res) => {
  const auctions = await Auction.findById(req.params.id).lean();
  if (auction.user != req.note.id) {
    req.flash("errors_msg", "No autorizado");
    return res.redirect("/auctions");
  }
  res.render("auctions/edit-auction", { auctions });
};

auctionsCtrl.updateAuction = async (req, res) => {
  const { title, description } = req.body;
  await Auction.findByIdAndUpdate(req.params.id, { title, description });
  req.flash("success_msg", "Subasta actulizada exitosamente");
  res.redirect("/auctions");
};

auctionsCtrl.deleteProduct = async (req, res) => {
  await Auction.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Nota eliminada exitosamente");
  res.redirect("/auctions");
};

module.exports = auctionsCtrl;
