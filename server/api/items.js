const router = require("express").Router();
const {
  models: { Item },
} = require("../db");
const {requireToken} = require('./gatekeepingMiddleware');

module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.json(items);
  } catch (err) {
    next(err);
  }
});


router.get("/:itemId", async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.itemId);
    res.json(item);
  } catch (err) {
    next(err);
  }
});


router.post('/', requireToken, async (req, res, next) => {
  try {
    req.body.userId = req.user.id;
    const newItem = await Item.create(req.body);
    res.send(newItem);
  } catch (err) {
    next(err);
  }
});
