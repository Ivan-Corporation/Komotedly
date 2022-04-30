const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
app.get('/', (req, res) => res.send('test before breakfast'));
app.listen(port, () =>
 console.log(`Server running at http://localhost:${port}`)
);
