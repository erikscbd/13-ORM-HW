const router = require('express').Router();
const { Tag, Product, ProductTag, Category } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const products = await Product.findAll({
    include: [Category, Tag]
    
    
  });
res.json(products);
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const product = await Product.findOne({
    where: {
      id: req.params.id
    },
    include:[Category, Tag]
  });
  res.json(product);
});

router.post('/', async (req, res) => {
  // create a new tag
  const newTag = await Tag.create(req.body);
  res.json(newTag);
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  const updateTag = await Tag._update(req, body, {
    where: {
      id: req.params.id,  
    }
  })
  res.json(updateTag);
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
await Tag.destroy({
  where: {
    id: req.params.id,
  }
})
res.json({ message: 'Delete' });
});

module.exports = router;
