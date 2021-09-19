//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Item = require("./models/Item");



// A.hasOne(B); // A HasOne B !!!!!! ===> One to One not used yet
// A.belongsTo(B); // A BelongsTo B
// A.hasMany(B); // A HasMany B 

User.hasMany(Item)
Item.belongsTo(User)


module.exports = {
  db,
  models: {
    User,
    Item,
  },
};

