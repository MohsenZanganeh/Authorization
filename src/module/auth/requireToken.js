const cache = require("../../utils/cache");

module.exports = async (req, res, next) => {
  const authorize = await cache.hget(
    `${req.route.path}-${req.method.toLowerCase()}`,
    req.user.id,
    1
  );

  if (authorize) {
    next();
  } else {
    res.send({ status: "FORBIDDEN" });
  }
};
