function controllerHandler(controller) {
  return async (req, res, next) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      res.status(500).json({ error: 'Unexpected server error. Please try again later.' });
    }
  };
}
module.exports = controllerHandler;
