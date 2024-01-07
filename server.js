require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("./lib/logger");
const { apiResponse } = require("./lib/ResponseController");
const app = express();
const routes = require("./routes/index");
const rTracer = require("cls-rtracer");
const cors = require("cors");
require("./init/mongoose-init");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  const ipAddress =
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;

  if (!ipAddress) return res.send("invalid Ip address");
  console.table(`Your IP address is ${ipAddress}`);
  req.body.ip = ipAddress;
  next();
});

app.use(
  rTracer.expressMiddleware({
    requestIdFactory: (req) => {
      const sessionId = (Math.random() + 1).toString(36).substring(6);
      const subscriber_id = req.query.subscriber_id;
      return { sessionId, subscriber_id };
    },
  })
);
app.use("/milestone/api/v1", routes);

app.use((req, res) => {
  res.status(404).send("Resource not found");
});

app.use((err, req, res, next) => {
  if (err.statusCode && err.statusCode !== 500) {
    logger.error(err);
    return res
      .status(err.statusCode)
      .json(apiResponse({ isSuccess: false, errors: err }));
  }

  res
    .status(500)
    .json(apiResponse({ isSuccess: false, errors: "Internal Server Error" }));
});

app.listen(process.env.PORT, process.env.IP, () => {
  logger.info(`server running on ${process.env.IP}:${process.env.PORT}`);
});
