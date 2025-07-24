const { BasketCloth, Cloth } = require("../models/models");
const ApiError = require("../error/ApiError");

class BasketController {
  async create(req, res, next) {
    try {
      const { basketId, clothId, size, count } = req.body;
      const basketCloth = await BasketCloth.create({
        basketId,
        clothId,
        size,
        count,
      });
      return res.json(basketCloth);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res, next) {
    try {
      const { basketId } = req.query;

      const basketCloth = await BasketCloth.findAll({
        where: { basketId },
        include: [{ model: Cloth }],
      });

      return res.json(basketCloth);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async delete(req, res, next) {
    try {
      const { basketId, clothId } = req.body;

      const item = await BasketCloth.findOne({
        where: {
          basketId,
          clothId,
        },
      });

      if (!item) {
        return next(ApiError.notFound("Item not found in basket"));
      }

      await item.destroy();
      return res.json({ message: "Item removed successfully" });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async updateCount(req, res, next) {
    try {
      const { basketId, clothId, count } = req.body;

      const item = await BasketCloth.findOne({
        where: { basketId, clothId },
      });

      if (!item) {
        return next(ApiError.notFound("Item not found in basket"));
      }

      item.count = count;
      await item.save();

      return res.json(item);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new BasketController();
