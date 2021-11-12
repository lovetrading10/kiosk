const router = require("express").Router();
let Order = require("../models/orderRecord.model");

router.route("/").get((req, res) => {
  Order.find()
    .then((records) => res.json(records))
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/add/multiple").post((req, res) => {
  const recordUploads = req.body.records;

  Order.insertMany(recordUploads)
    .then((value) => res.json(value))
    .catch((err) => {
      console.log(err);
      res.status(400).json("Error" + err);
    });
});

//admin functions //////////////////////////////////////////

router.route("/admin/removeall").post((req, res) => {
  Order.remove({})
    .then((value) => res.json(value))
    .catch((err) => res.status(400).json(err));
});

router.route("/admin/repopulate").post(async (req, res) => {
  const recordUploads = req.body.records;

  await Order.remove({});
  Order.insertMany(recordUploads)
    .then((value) => res.json(value))
    .catch((err) => {
      console.log(err);
      res.status(400).json("Error" + err);
    });
});

module.exports = router;
