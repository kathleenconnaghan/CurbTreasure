const router = require("express").Router();
const {
  models: { User, Item,},
} = require("../db");
module.exports = router;

//--------------ALL USERS
router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "email"],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

//----------------CREATE NEW
router.post("/", async (req, res, next) => {
  try {
    res.status(201).send(await User.create(req.body));
  } catch (err) {
    next(err);
  }
});

//------------------GET SINGLE USER
router.get("/:userId", async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.userId,
      },
      include: Order,
    });
    res.json(user);
  } catch (error) {
    next(error);
  }
});

