const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Basket } = require("../models/models");

const generateJwt = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
};

class UserController {
  async registration(req, res, next) {
    const { email, password, role } = req.body;
    if (!email || !password) {
      return next(ApiError.badRequest("Incorrect email or password!"));
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(
        ApiError.badRequest("A user with this email already exists!")
      );
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ email, role, password: hashPassword });
    const basket = await Basket.create({ userId: user.id });
    const token = generateJwt(user.id, user.email, user.role);
    return res.json({ token });
  }

  async admin(req, res, next) {
    try {
      const { email } = req.body;
      if (!email) {
        return next(ApiError.badRequest("Incorrect email"));
      }
      const candidate = await User.findOne({ where: { email } });
      if (!candidate) {
        return next(ApiError.badRequest("A user with this email not found!"));
      }
      candidate.role = "ADMIN";
      await candidate.save();
      return res.json({ message: `Role for ${email} updated to ADMIN` });
    } catch (e) {
      return next(ApiError.internal("Failed to set admin role: " + e.message));
    }
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(ApiError.internal("User not found!"));
    }
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.internal("Incorrect password entered!"));
    }
    const token = generateJwt(user.id, user.email, user.role);
    return res.json({ token });
  }

  async check(req, res, next) {
    const token = generateJwt(req.user.id, req.user.email, req.user.role);
    const user = await User.findByPk(req.user.id);
    return res.json({ token, role: user.role, id: user.id });
  }
}

module.exports = new UserController();
