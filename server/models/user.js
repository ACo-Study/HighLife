import Sequelize from "sequelize";
import sequelize from "./db_config";

const TB_USER = sequelize.define("tb_user", {
  idx: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fk_group_idx: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  user_id: {
    type: Sequelize.STRING
  },
  user_pw: {
    type: Sequelize.STRING
  },
  user_name: {
    type: Sequelize.STRING
  }
});

TB_USER.sync()
  .then(() => console.log("Oh yeah! User table created successfully"))
  .catch(err => console.log("BTW, did you enter wrong database credentials?"));

export default TB_USER;
