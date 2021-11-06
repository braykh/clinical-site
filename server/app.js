const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bloodTestRoutes = require('./routes/bloodTest');

app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/api', bloodTestRoutes);

app.listen(PORT, () => {
    console.log(`app run on port: ${PORT}`);
});