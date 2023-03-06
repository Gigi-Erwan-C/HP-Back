const isLogged = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: 'Tu n\'es pas authentifié!' });
  }
  return next();
};

module.exports = isLogged;
