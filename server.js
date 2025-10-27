const express = require('express');
const app = express();
const PORT = process.env.PORT || 4500;

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});