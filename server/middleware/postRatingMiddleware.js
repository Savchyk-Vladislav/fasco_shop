const { Rating } = require("../models/models");
const ApiError = require("../error/ApiError");

module.exports = async function (req, res, next) {
  try {
    const { userId, clothId } = req.body;
    if (!userId || !clothId) {
      return next(ApiError.badRequest("Missing userId or clothId"));
    }
    const existingRating = await Rating.findOne({ where: { userId, clothId } });
    if (existingRating) {
      return next(
        ApiError.badRequest("This user has already rated this product.")
      );
    }
    next();
  } catch (e) {
    res.status(500).json({ message: "Unexpected error" });
  }
};
