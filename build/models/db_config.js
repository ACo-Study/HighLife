"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _db_config = _interopRequireDefault(require("../config/db_config.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sequelize = new _sequelize["default"]({
  host: _db_config["default"].host,
  port: _db_config["default"].port,
  database: _db_config["default"].database,
  username: _db_config["default"].username,
  password: _db_config["default"].password,
  dialect: _db_config["default"].dialect,
  define: {
    freezeTableName: true,
    timestamps: false
  }
});
sequelize.authenticate().then(function () {
  return console.log("Connection has been established successfully.");
})["catch"](function (err) {
  return console.error("Unable to connect to the database:", err);
});
var _default = sequelize;
exports["default"] = _default;