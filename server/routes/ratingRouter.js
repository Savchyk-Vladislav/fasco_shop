const Router = require("express");
const router = new Router();
const ratingController = require("../controllers/ratingController");
const postRatingMiddleware = require("../middleware/postRatingMiddleware");

router.post("/", postRatingMiddleware, ratingController.create);
router.get("/:clothId", ratingController.getClothRating);

module.exports = router;