const express = require('express');
const path = require('path');
const axios = require('axios');
const router = express.Router();
const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/spells', async (req, res) => {
    try {
        const response = await axios.get('https://www.dnd5eapi.co/api/spells');
        res.json({ spells: response.data.results });
    } catch (error) {
        res.status(500).send('Error fetching spells');
    }
});

router.get('/feats', async (req, res) => {
    try {
        const response = await axios.get('https://www.dnd5eapi.co/api/features');
        res.json({ feats: response.data.results });
    } catch (error) {
        res.status(500).send('Error fetching feats');
    }
});

router.get('/items', async (req, res) => {
    try {
        const response = await axios.get('https://www.dnd5eapi.co/api/equipment');
        res.json({ items: response.data.results });
    } catch (error) {
        res.status(500).send('Error fetching items');
    }
});

router.get('/spell/:index', async (req, res) => {
    const spellIndex = req.params.index;
    try {
        const response = await axios.get(`https://www.dnd5eapi.co/api/spells/${spellIndex}`);
        res.render('spell', { spell: response.data });
    } catch (error) {
        res.status(500).send('Error fetching spell');
    }
});

router.get('/feat/:index', async (req, res) => {
    const featIndex = req.params.index;
    try {
        const response = await axios.get(`https://www.dnd5eapi.co/api/features/${featIndex}`);
        res.render('feat', { feat: response.data });
    } catch (error) {
        res.status(500).send('Error fetching feat');
    }
});

router.get('/item/:index', async (req, res) => {
    const itemIndex = req.params.index;
    try {
        const response = await axios.get(`https://www.dnd5eapi.co/api/equipment/${itemIndex}`);
        res.render('item', { item: response.data });
    } catch (error) {
        res.status(500).send('Error fetching item');
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = router;

