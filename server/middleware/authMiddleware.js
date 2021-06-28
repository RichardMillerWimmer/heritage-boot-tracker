module.exports = {
    authCheck: (req, res, next) => {
      if (req.session.user) {
        return next();
      } else {
        return res.sendStatus(403);
      };
    }
  };