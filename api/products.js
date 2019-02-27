var express = require("express");
var router = express.Router();

/* GET products listing. */
router.get("/", function(req, res, next) {
  res.json([
    {
      id: 1,
      productname: "Wanderlust",
      sourcepic: "http://ahartami.files.wordpress.com/2019/02/wanderlust.png",
      color: "green, yellow, brown",
      price: "€ 120"
    },
    {
      id: 2,
      productname: "Phinisi Boat",
      sourcepic: "https://ahartami.files.wordpress.com/2019/02/cam02999.jpg",
      color: "red, blue",
      price: "€ 140"
    },
    {
      id: 3,
      productname: "Stay Weird",
      sourcepic: "https://ahartami.files.wordpress.com/2019/02/stay-weird.png",
      color: "brown",
      price: "€ 90"
    },
    {
      id: 4,
      productname: "Anything is possible!",
      sourcepic:
        "https://ahartami.files.wordpress.com/2019/02/17855553_10212807683894784_2848170274801137961_o.jpg",
      color: "blue",
      price: "€ 90"
    }
  ]);
});

module.exports = router;
