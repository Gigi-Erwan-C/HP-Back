const jwt = require('jsonwebtoken');

const isAdmin = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: 'Tu n\'es pas authentifié!' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    if (req.user.role_id !== 1) {
      return res.status(403).json({ error: 'Tu n\'es pas admin !' });
    }
  } catch (err) {
    return res.status(401).json({ error: err });
  }
  return next();
};

module.exports = isAdmin;
