const express = require('express');
const api = require('./routes/api');
const app = express();


const PORT = 8081 || process.env.PORT;

app.get('/', (req,res) => {
    res.json({message: "Hello Express"});
});

app.use('/api', api);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});