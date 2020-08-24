const passport = require("passport");

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/explore");
    }
  );

  app.get(
    "/auth/facebook",
    passport.authenticate("facebook", { scope: "email" })
  );

  app.get(
    "/auth/facebook/callback",
    passport.authenticate("facebook", {
      successRedirect: "/explore",
      failureRedirect: "/login",
    })
  );

  app.use("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/explore");
  });

  app.use("/api/current_user", (req, res) => {
    try {
      const {
        _id,
        userId,
        role,
        userName,
        userImage,
        email,
        createdAt,
      } = req.user;

      res.send({
        _id,
        userId,
        role,
        email,
        userName,
        userImage,
        createdAt,
      });
    } catch (error) {
      res.status(404).send({});
    }
  });
};
