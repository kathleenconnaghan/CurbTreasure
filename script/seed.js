"use strict";

const {
  db,
  models: { User, Item, Listing },
} = require("../server/db");


async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  //---------------- Creating Users
  
  const users = await Promise.all([
    User.create({ 
        email: "johnjoe@mail.com", 
        password: "123", 
        admin: false,
    }),
    User.create({
      email: "kathleen@mail.com",
      password: "123",
      admin: true,
    }),
    User.create({
      email: "meeseeks@mail.com",
      password: "123",
      admin: false,
    }),
    User.create({
      email: "bubba@mail.com",
      password: "123",
      admin: false,
    }),
  ]);


//---------- Creating Items

  const items = await Promise.all([
    Item.create({
        title: 'Patio Set',
        description: 'Wicker black-ish brown 5 piece patio set: love seat, 2 chairs and a glass coffee table. Barely used. Very comfy.',
        category: 'Furniture',
        location: '2588 Wicker Lane, Nashville, TN 37212',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0558/9085/products/234beige_large.jpg?v=1595285502',
        userId: 1
      }),
      Item.create({
        title: 'Magic Beans',
        description: 'Do not ask too many questions, just take them away before my goat eats any more of them',
        category: 'Misc',
        location: '12 Beanstalk, Storytown, AZ 66432',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMkjRunw82YjAf2a6lirtGcklQJfTLXnt9Oxf0JlbyAYkfOVGOuyC86PCdIkE5YAnXjes&usqp=CAU',
        userId: 2
      }),
      Item.create({
        title: 'Ride-On Lawn Mower',
        description: 'A bit tempermental at times, but gets the job done.',
        category: 'Household',
        location: '1978 Greenfield, Topeka, Kansas 37662',
        imageUrl: 'https://cdn.agriland.ie/uploads/2015/05/Ride-on-lawnmower-sheep.jpg',
        userId: 3
      }),
      Item.create({
        title: 'Collection of old VHS tapes',
        description: 'Mostly Disney films',
        category: 'Household',
        location: '8712 Briarhill Lane, Nashville, TN 37212',
        imageURL: 'https://greencitizen.com/wp-content/uploads/2020/06/how-to-recycle-vhs-tapes-in-san-francisco.jpg',
        userId: 1
      }),
      Item.create({
        title: 'Fairy Dust',
        description: 'Pretty much just glitter',
        category: 'Misc',
        location: '7352 N Magic Drive, Chicago, IL 60455',
        imageUrl: 'https://img.icons8.com/bubbles/2x/treasure-chest.png',
        userId: 4
      }),
    
  ]);


}

console.log(`Seeds Planted!`);

async function runSeed() {
  console.log("Planting little wee seeds....");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    console.error('Nothing Seeded - Oh No!!!');
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}


if (module === require.main) {
  runSeed();
}

module.exports = seed;



