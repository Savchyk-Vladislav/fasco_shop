const Router = require("express");
const router = new Router();
const basketController = require("../controllers/basketController");

router.post("/", basketController.create);
router.get("/", basketController.getAll);
router.post("/remove", basketController.delete);
router.post("/update", basketController.updateCount);

module.exports = router;
