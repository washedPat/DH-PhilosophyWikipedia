const express = require('express');
const api = require('./routes/api');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static('public'));

app.get('/', (req,res) => {
    res.json({message: "Hello Express"});
});

app.use('/api', api);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});