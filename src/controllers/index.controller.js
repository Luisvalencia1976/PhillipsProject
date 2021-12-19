const indexCrtl = {};

indexCrtl.renderIndex = (req, res) => {
    res.render("index");
}


indexCrtl.renderUsers = (req, res) => {
    res.render("users");
}

module.exports = indexCrtl;