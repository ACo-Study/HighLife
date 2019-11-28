"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _db_config = _interopRequireDefault(require("./db_config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TB_USER = _db_config["default"].define("tb_user", {
  idx: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fk_group_idx: {
    type: _sequelize["default"].INTEGER,
    allowNull: true
  },
  user_id: {
    type: _sequelize["default"].STRING
  },
  user_password: {
    type: _sequelize["default"].STRING
  },
  user_name: {
    type: _sequelize["default"].STRING
  }
});

TB_USER.sync().then(function () {
  return console.log("Oh yeah! User table created successfully");
})["catch"](function (err) {
  return console.log("BTW, did you enter wrong database credentials?");
});
var _default = TB_USER;
exports["default"] = _default;