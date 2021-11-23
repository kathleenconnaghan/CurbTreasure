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
        description: 'Description: Wicker black-ish brown 5 piece patio set: love seat, 2 chairs and a glass coffee table. Barely used. Very comfy.',
        category: 'Furniture',
        location: '2588 Wicker Lane, Nashville, TN 37212',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0558/9085/products/234beige_large.jpg?v=1595285502',
        userId: 1
      }),
      Item.create({
        title: 'Barely Used Spices',
        description: 'Spices include: Garlic, Oregano, Thyme, Chilli Powder, AllSpice, Turmeric, Chilli Flakes',
        category: 'Food/Pantry',
        location: '12 MeadowGrove, Phoneix, AZ 66432',
        imageUrl: 'https://cdn11.bigcommerce.com/s-80qxgw/images/stencil/1280x1280/products/78/2792/Spice-Rack-Open-Top-Three-Tiers-Wooden-Bar-Dark-Baltic-1-White-Background__78259.1540785890.jpg?c=3',
        userId: 2
      }),
      Item.create({
        title: 'VHS Tapes',
        description: 'Superbowl games taped from 1985 onwards',
        category: 'Household',
        location: '1978 Greenfield, Topeka, Kansas 37662',
        imageUrl: 'https://greencitizen.com/wp-content/uploads/2020/06/how-to-recycle-vhs-tapes-in-san-francisco.jpg',
        userId: 3
      }),
      Item.create({
        title: 'Canned Food',
        description: 'Expires 2023. Includes: corn, chickpeas, carrots',
        category: 'Food',
        location: '7352 N Hillcrest Street, Chicago, IL 60455',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/5b/Numerous_stacked_cans%2C_several_types_and_brands.jpg',
        userId: 4
      }),
      Item.create({
        title: 'Lawnmower',
        description: 'Expires 2023. Includes: corn, chickpeas, carrots',
        category: 'Gardening/Tools',
        location: '321 Grasshill Drive, Stamford CT',
        imageUrl: 'https://www.hirehere.ie/image/cache/data/Gardening-and-Landscaping/Lawn-Care/victor-lawnmower2-551x551w.jpg',
        userId: 1
      }),
      Item.create({
        title: 'Exercise Equipment',
        description: 'Yoga mat & ball, 10lbs weights, resistance band',
        category: 'Fitness',
        location: '9677 Headford Road, San Juan, TX 88432',
        imageUrl: 'https://cdn.mos.cms.futurecdn.net/tfZa6SwaXKz6A9dh5zeGrU-768-80.jpg',
        userId: 3
      }),
      Item.create({
        title: 'Camera and cord',
        description: 'Samsung Nv8 camera and upload usb cord',
        category: 'Camera',
        location: '229 Market Street, Boston, MA 12245',
        imageUrl: 'https://a0.amlimg.com/ZTViMjI4OTVhNTU4NjBmMmZmNWFhMGY1NmM1MTM3NzL23teoSRQRV181I8fcKGrmaHR0cDovL21lZGlhLmFkc2ltZy5jb20vOGM4NjI0OTkyYWE2YTViOWIwNzE5OTY3ODhjNjE5NWE3MWE0NTk2MjViYmJkODFiZDhjZmI0Yzk3NGQ3NTlkZS5qcGd8fHx8fHwzOTZ4MjIzfGh0dHA6Ly93d3cuYWR2ZXJ0cy5pZS9zdGF0aWMvaS93YXRlcm1hcmsucG5nfHx8.jpg',
        userId: 2
      }),

  ]);


}


async function runSeed() {
  console.log("Planting little wee seeds....");
  try {
    await seed();
    console.log(`Seeds Planted!`);
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



