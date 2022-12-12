const db = require('../db/db.json');
const fs = require('fs');
const { get } = require('http');

let id = db.length + 1;

module.exports = function (app) {
    app.post('/api/notes', function (req, res) {
        console / log(req.body);

        req.body.id = id++;
        console / log(req.body);

        db.push(req.body);

        fs.writeFile('.db/db.json', JSON.stringify(db), function (err) {
            if (err) throw error;
            res.join(db);
        });
    });
};

app.get('/api/notes', function (req, res) {
    res.json(db);
});

app.delete('/api/notes/:id', function (req, res) {
    let id = parseInt(req.params.id);

    for (let i = 0; i < db.length; i++) {
        if (db[i].id === id) {
            db.splice(i, 1);
        }
    }

    console.log(db);

    fs.writeFile('./db/db.json', JSON.stringify(db), function(err){
        if(err) throw error;
        res.join(db);
    });
});
