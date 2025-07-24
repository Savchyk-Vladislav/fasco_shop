const uuid = require("uuid");
const path = require("path");
const { Cloth } = require("../models/models");
const ApiError = require("../error/ApiError");

class ClothControler {
  async create(req, res, next) {
    try {
      const { name, price, brandId, typeId } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));

      const cloth = await Cloth.create({
        name,
        price,
        brandId,
        typeId,
        img: fileName,
      });

      return res.json(cloth);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res, next) {
    try {
      let { brandId, typeId, limit, page } = req.query;
      page = page || 1;
      limit = limit || 9;
      let offset = page * limit - limit;
      let clothes;
      if (!brandId && !typeId) {
        clothes = await Cloth.findAndCountAll({ limit, offset });
      }
      if (brandId && !typeId) {
        clothes = await Cloth.findAndCountAll({
          where: { brandId },
          limit,
          offset,
        });
      }
      if (!brandId && typeId) {
        clothes = await Cloth.findAndCountAll({
          where: { typeId },
          limit,
          offset,
        });
      }
      if (brandId && typeId) {
        clothes = await Cloth.findAndCountAll({
          where: { brandId, typeId },
          limit,
          offset,
        });
      }
      return res.json(clothes);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const cloth = await Cloth.findOne({ where: { id } });
      return res.json(cloth);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new ClothControler();
