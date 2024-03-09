const express = require('express');
const app = express();
const port = 8080;

git add app.js
git commit -m "Full pipeline test"
git push
app.get('/', (req, res) => res.send('John Dilworth World!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
