const authController = require('../authController');

describe('Tests du login', () => {
  it('should return a 401 status with an error message if there is no result', async () => {
    const mReq = { body: { email: '', password: '' } };
    const mRes = { status: jest.fn(), json: jest.fn().mockReturnValue({ message: 'E-mail ou mot de passe incorrecte' }) };
    await authController.login(mReq, mRes);
    (mRes.status).toBeCalledWith(401);
    (mRes.json).toBeCalledWith({ message: 'E-mail ou mot de passe incorrecte' });
  });
});
