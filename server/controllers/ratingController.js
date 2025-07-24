const { Rating, Cloth } = require("../models/models");
const ApiError = require("../error/ApiError");
const sequelize = require("../db");

class RatingController {
  async create(req, res, next) {
    try {
      const { rate, userId, clothId } = req.body;
      const rating = await Rating.create({ rate, userId, clothId });
      const { avg } = await Rating.findOne({
        where: { clothId },
        attributes: [[sequelize.fn("AVG", sequelize.col("rate")), "avg"]],
        raw: true,
      });
      await Cloth.update(
        { rating: parseFloat(avg).toFixed(2) },
        { where: { id: clothId } }
      );
      return res.json(rating);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getClothRating(req, res, next) {
    try {
      const { clothId } = req.params;
      if (!clothId) {
        return next(ApiError.badRequest("Missing clothId"));
      }

      const result = await Rating.findOne({
        where: { clothId },
        attributes: [
          [sequelize.fn("AVG", sequelize.col("rate")), "avg"],
          [sequelize.fn("COUNT", sequelize.col("id")), "count"],
        ],
        raw: true,
      });

      const averageRating = result.avg ? parseFloat(result.avg).toFixed(2) : 0;
      const totalRatings = parseInt(result.count) || 0;

      return res.json({ averageRating, totalRatings });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new RatingController();
