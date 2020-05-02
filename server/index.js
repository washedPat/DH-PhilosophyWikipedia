const express = require('express');

const app = express();

const PORT = 8081 || process.env.PORT;

app.get('/', (req,res) => {
    res.json({message: "Hello Express"});
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});