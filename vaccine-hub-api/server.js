const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const { BadRequestError, NotFoundError } = require("./utils/errors");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Not found error handler
app.use((req, res, next) => {
  return next(new NotFoundError());
});

// generic error handler
app.use((error, req, res, next) => {
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({ error: { message, status } });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`server running http://localhost${PORT}`);
});
