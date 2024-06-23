const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

app.post('/api/predict', async (req, res) => {
    try {
        const response = await axios.post('http://localhost:5000/api', {
            features: req.body.features
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

app.post('/api/predict', async (req, res) => {
    try {
        const response = await axios.post('http://localhost:5000/predict', {
            features: req.body.features
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
