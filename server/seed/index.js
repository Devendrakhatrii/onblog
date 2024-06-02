// xrequire("dotenv").config();
// const data = require("./data");

// const mongoose = require("mongoose");
// const blogController = require("../modules/blogs/blog.controller");

// const user1 = "65d5f21d98c0f2c16dbf89ed";
// const user2 = "65d73707db8472beb91529f2";

// const setup = {
//   initialize: async () => {
//     try {
//       console.log("Starting Blog Seeding");
//       console.log(data.length);
//       await mongoose.connect(process.env.DB_URL);
//       for (let i = 0; i < 10; i++) {
//         const payload = data[i];
//         payload.status = "published";
//         payload.author = user1;
//         payload.pictureUrl = `https://cdn.dummyjson.com/recipe-images/${
//           i + 1
//         }.webp`;
//         await blogController.create(payload);
//       }
//       for (let i = 10; i < 20; i++) {
//         const payload = data[i];
//         payload.author = user2;
//         payload.status = "published";
//         payload.pictureUrl = `https://cdn.dummyjson.com/recipe-images/${
//           i + 1
//         }.webp`;
//         await blogController.create(payload);
//       }

//       console.log("Completed Blog Seeding");
//     } catch (e) {
//       console.log({ e });
//     }
//   },
// };

// setup.initialize();



require("dotenv").config();
const data = require("./data");

const mongoose = require("mongoose");

const userController = require("../modules/users/user.controller");
const blogController = require("../modules/blogs/blog.controller");

const setup = {
  initialize: async () => {
    try {
      console.log(data.length);
      await mongoose.connect(process.env.DB_URL).then((connection) => {
        mongoose.connection.db.dropDatabase();
      });
      console.log("Starting User Seeding");
      const userA = await userController.create({
        name: "Raktim Admin",
        email: "raktim@rumsan.com",
        password: "123",
        roles: ["admin"],
      });

      const userB = await userController.create({
        name: "Raktim User",
        email: "raktim+user@rumsan.com",
        password: "abc",
        roles: ["user"],
      });
      console.log("Finished User Seeding");
      console.log("Starting Blog Seeding");
      for (let i = 0; i < 10; i++) {
        const payload = data[i];
        payload.status = "published";
        payload.author = userA?._id;
        payload.pictureUrl = `https://cdn.dummyjson.com/recipe-images/${
          i + 1
        }.webp`;
        await blogController.create(payload);
      }
      for (let i = 10; i < 20; i++) {
        const payload = data[i];
        payload.author = userB?._id;
        payload.status = "published";
        payload.pictureUrl = `https://cdn.dummyjson.com/recipe-images/${
          i + 1
        }.webp`;
        await blogController.create(payload);
      }

      console.log("Completed Blog Seeding");
    } catch (e) {
      console.log({ e });
    }
  },
};

setup.initialize();
