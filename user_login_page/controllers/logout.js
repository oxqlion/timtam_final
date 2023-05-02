const logout = (req, res) =>{
    console.log("logouted")
    res.clearCookie("userRegistered");
    res.redirect("/");
}

module.exports = logout;