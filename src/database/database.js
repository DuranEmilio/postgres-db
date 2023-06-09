import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "Perra", // db name,
  "postgres", // username
  "1206lilo", // password
  {
    host: "localhost",
    dialect: "postgres",
    // pool: {
    //   max: 5,
    //   min: 0,
    //   require: 30000,
    //   idle: 10000,
    // },
    // logging: false,
  }
);
