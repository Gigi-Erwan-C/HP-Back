function validate(schema, dataSource) {
  return async (req, res, next) => {
    try {
      await schema.validateAsync(req[dataSource]);
      next();
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: 'Bad input error. Please try again later.' });
    }
  };
}

module.exports = validate;
