import express from "express";
import WebpackDevServer from "webpack-dev-server";
import webpack from "webpack";
import path from "path";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const devPort = 4000;

// app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/", express.static(path.join(__dirname, "./../public")));

if (process.env.NODE_ENV == "development") {
  console.log("Server is running on development mode");

  const config = require("../webpack.dev.config");
  let compiler = webpack(config);
  let devServer = new WebpackDevServer(compiler, config.devServer);
  devServer.listen(devPort, () => {
    console.log("webpack-dev-server is listening on port", devPort);
  });
}

const server = app.listen(port, () => {
  console.log("Express listening on port", port);
});
