const authController = require('../authController');

describe('Tests du login', () => {
  it('should return a 401 status with an error if there is no result', async () => {
    const mReq = { body: { email: '', password: '' } };
    const mRes = { status: jest.fn(), json: jest.fn().mockReturnValue({ message: 'E-mail ou mot de passe incorrecte' }) };
    console.log(mRes.json.mockReturnValue());
    await authController.login(mReq, mRes);
    expect(mRes.status).toBeCalledWith(401);
    expect(mRes.json).toBeCalledWith({ message: 'E-mail ou mot de passe incorrecte' });
  });
});
