const low = require('lowdb');
const db = low('banco.json');

db.defaults({
    user: []
}).write();
