function validate(schema, dataSource) {
    return async (request, response, next) => {
      try {
        await schema.validateAsync(request[dataSource]);
        next();
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: "Bad input error. Please try again later." });
      }
    };
  }
  
  module.exports = validate;