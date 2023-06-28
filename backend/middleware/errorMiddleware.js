export const notFound = (req, res, next) => {
  const error = new Error(`Not found ${req.orginalUrl}`);
  res.status(400);
  next(error);
};

export const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  if (err.name === "" && err.kind === "") {
    statusCode = 404;
    message = "Resource Not Found";
  }

  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};
