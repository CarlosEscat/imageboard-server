const { Router } = require("express");
const Image = require("./model");
const router = new Router();

router.get("/image", (req, res, next) =>
  Image.findAll()
    .then(images => {
      return res.json({ images: images });
    })
    .catch(error => next(error))
);

module.exports = router;
