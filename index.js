const express = require("express");
const app = express();
const cors = require("cors");
const corsMiddleware = cors();
app.use(corsMiddleware);
const bodyParser = require("body-parser");
const parserMiddleware = bodyParser.json();
app.use(parserMiddleware);
const port = process.env.PORT || 4000;
const db = require("./db");
const Image = require("./image/model");
const imageRouter = require("./image/router");
const jwt = require("./auth/router");
const userRouter = require("./user/router");

app.use(imageRouter);
app.use(jwt);
app.use(userRouter);
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
