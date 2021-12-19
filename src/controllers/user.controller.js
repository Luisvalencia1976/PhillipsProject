const usersCtrl = {};

const passport = require("passport");
const User = require("../models/Users");

usersCtrl.renderSignUpForm = (req, res) => {
  res.render("users/signup");
};

usersCtrl.signUp = async (req, res) => {
  const errors = [];
  const {
    documentid,
    expeditiondateid,
    name,
    dateofbirth,
    email,
    password,
    confirm_password,
  } = req.body;
  if (password != confirm_password) {
    errors.push({ text: "Las contraseñas no coinciden" });
  }
  if (password.length < 4) {
    errors.push({ text: "El password debe contener al menos 4 caracteres" });
  }
  if (errors.length > 0) {
    res.render("users/signup", {
      errors,
      documentid,
      expeditiondateid,
      name,
      dateofbirth,
      email,
      password,
      confirm_password,
    });
  } else {
    const emailUser = await User.findOne({ email: email });
    if (emailUser) {
      req.flash("error_msg", "El correo ya está en uso");
      res.redirect("/users/signup");
    } else {
      const newUser = new User({
        documentid,
        expeditiondateid,
        name,
        dateofbirth,
        email,
        password,
      });
      newUser.password = await newUser.encryptPassword(password);
      await newUser.save();
      res.redirect("/users/signin");
    }
  }
};

usersCtrl.renderSigninForm = (req, res) => {
  res.render("users/signin");
};

usersCtrl.signin = passport.authenticate("local", {
  failureRedirect: "/users/signin",
  successRedirect: "/auctions",
  failureFlash: true,
});

usersCtrl.logout = (req, res) => {
  req.logout();
  req.flash("success_msg", "Sesión finalizada");
  res.redirect("/users/signin");
};

module.exports = usersCtrl;
