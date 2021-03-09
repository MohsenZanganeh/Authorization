const { NotFound, Forbidden } = require("http-errors");
const {loginUser} = require("../../database/repository/UserRepository");
const {createToken} = require('../../module/auth/service')
class LoginUseCase {
  constructor() {}
  async execute(req, res) {
    const user = await loginUser(req.body);
    if (user) {
      const token = createToken(user, req);
      return token;
    }
  }
}
module.exports = new LoginUseCase();
