const express = require('express');
const router = express.Router();

// GET route
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

// POST route example
router.post('/data', (req, res) => {
  const { name } = req.body;
  res.json({ message: `Hello, ${name}!` });
});

// PUT route example
router.put('/update/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Updated item ${id}` });
});

// DELETE route example
router.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Deleted item ${id}` });
});

module.exports = router;