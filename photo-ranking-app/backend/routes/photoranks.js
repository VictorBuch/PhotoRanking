const router = require("express").Router();
let PhotoRank = require("../models/photorank.model");

router.route("/").get((req, res) => {
  PhotoRank.find()
    .then((photoranks) => res.json(photoranks))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const rank = req.body.rank;
  const date = Date.parse(req.body.date);

  const newPhotorank = new PhotoRank({
    username,
    rank,
    date,
  });

  newPhotorank
    .save()
    .then(() => res.json("Photo rank added"))
    .cath((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
