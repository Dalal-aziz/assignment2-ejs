const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const ownerName = "Dalal";
const shopName = "Game World";

const games = [
    { title: "Minecraft", price: 120 },
    { title: "Roblox", price: 80 },
    { title: "The Sims 4", price: 150 },
    { title: "Mario Kart", price: 100 }
];

// Home Page
app.get('/', (req, res) => {
    res.render('index', {
        ownerName,
        shopName,
        games
    });
});

// Empty Games Test
app.get('/empty', (req, res) => {
    res.render('index', {
        ownerName,
        shopName,
        games: []
    });
});

// About Page
app.get('/about', (req, res) => {
    res.render('about', { shopName });
});

// Contact Page
app.get('/contact', (req, res) => {
    res.render('contact', { shopName });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
