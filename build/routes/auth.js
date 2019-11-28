"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _user = _interopRequireDefault(require("../models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post("/login", function (req, res) {
  console.log(req.body.username);

  _user["default"].findAll().then(function (results) {
    console.log("result: ", results[0].dataValues);
  });
});
var _default = router;
exports["default"] = _default;