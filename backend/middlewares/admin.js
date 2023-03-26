exports.adminCheck = (req, res, next) => {
  if (!req.session.isAdmin) {
    return res.status(401).json({ message: "Not authorized" });
  }

  next();
};
