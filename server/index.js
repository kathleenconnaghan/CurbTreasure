const { db } = require("./db");
const PORT = process.env.PORT || 8080;
const app = require("./app");
const seed = require("../script/seed");

const init = async () => {
  try {
    if (process.env.SEED === "true") {
      await seed();
    } else {
      await db.sync();
    }

    app.listen(PORT, () => console.log(`C'mere to me - do you want it or not?.. at ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

init();
