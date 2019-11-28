import Sequelize from "sequelize";
import db_config from "../config/db_config.json";

const sequelize = new Sequelize({
  host: db_config.host,
  port: db_config.port,
  database: db_config.database,
  username: db_config.username,
  password: db_config.password,
  dialect: db_config.dialect,
  define: {
    freezeTableName: true,
    timestamps: false
  }
});

sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch(err => console.error("Unable to connect to the database:", err));

export default sequelize;
