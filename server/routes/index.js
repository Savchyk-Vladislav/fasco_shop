const Router = require("express");
const router = new Router();
const brandRouter = require("./brandRouter");
const clothRouter = require("./clothRouter");
const typeRouter = require("./typeRouter");
const userRouter = require("./userRouter");
const ratingRouter = require("./ratingRouter");
const basketRouter = require("./basketRouter");

router.use("/user", userRouter);
router.use("/brand", brandRouter);
router.use("/type", typeRouter);
router.use("/cloth", clothRouter);
router.use("/rating", ratingRouter);
router.use("/basket", basketRouter);

module.exports = router;
