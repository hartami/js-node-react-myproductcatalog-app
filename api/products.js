var express = require("express");
var router = express.Router();

/* GET products listing. */
router.get("/", function(req, res, next) {
  res.json([
    {
      id: 1,
      productname: "Wanderlust",
      sourcepic: "http://ahartami.files.wordpress.com/2019/02/wanderlust.png",
      description:
        "This is a watercolor painting on paper which tells about a strong desire to explore the world.",
      color: "green, yellow",
      price: "€ 120",
      contact: +491792811999
    },
    {
      id: 2,
      productname: "Phinisi Boat",
      sourcepic: "https://ahartami.files.wordpress.com/2019/02/cam02999.jpg",
      description:
        "This is an acrylic painting on paper. It is about a traditional boat which is used by people for centuries to sail Pacific and Hindian Ocean.",
      color: "red, blue",
      price: "€ 140",
      contact: +49281373829
    },
    {
      id: 3,
      productname: "Stay Weird",
      sourcepic: "https://ahartami.files.wordpress.com/2019/02/stay-weird.png",
      description:
        "This is a watercolor painting on paper. It is a motivation to be brave in differences.",
      color: "brown",
      price: "€ 90",
      contact: +35827672818
    },
    {
      id: 4,
      productname: "Anything is possible!",
      sourcepic:
        "https://ahartami.files.wordpress.com/2019/02/17855553_10212807683894784_2848170274801137961_o.jpg",
      description:
        "This is a watercolor painting on paper. It is a motivation to try something although it is a difficult things.",
      color: "blue",
      price: "€ 90",
      contact: +62813749402
    },
    {
      id: 5,
      productname: "Under my Umbrella",
      sourcepic: "https://ahartami.files.wordpress.com/2019/02/cam03044.jpg",
      description: "This is an acrylic painting on paper.",
      color: "red, blue",
      price: "€ 100",
      contact: +35827672818
    },
    {
      id: 6,
      productname: "Carpe Diem",
      sourcepic: "https://ahartami.files.wordpress.com/2019/02/cam03039.jpg",
      description: "This is a watercolor painting on paper.",
      color: "grey",
      price: "€ 90",
      contact: +62813749402
    }
  ]);
});

module.exports = router;
