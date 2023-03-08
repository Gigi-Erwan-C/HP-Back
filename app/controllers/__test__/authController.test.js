const authController = require('../authController');

describe('Tests du login', () => {
  it('should return a 401 status with an error message if there is no result', async () => {
    const mReq = { body: { email: '', password: '' } };
    const mRes = {};
    mRes.status = jest.fn().mockReturnThis();
    mRes.json = jest.fn().mockReturnValue({ message: 'E-mail ou mot de passe incorrecte' });
    await authController.login(mReq, mRes);
    expect(mRes.status).toBeCalledWith(401);
    expect(mRes.json).toBeCalledWith({ message: 'E-mail ou mot de passe incorrecte' });
  });
});
