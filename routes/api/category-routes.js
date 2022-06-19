const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const categories = await Category.findAll({
    include: [Product],
  });
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id,
    },
  });
});

router.post("/", (req, res) => {
  // create a new category
  Category.create(req.body)
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  Category.update()
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: req.params.id,
  })
});

module.exports = router;


//Mini project Student Project activity 28 for reference 
