const express = require('express')
const app = express()
const port = 3000

const config = { host: 'db', user: 'root', password: 'root', database: 'nodedb' }
const mysql = require('mysql')
const connection = mysql.createConnection(config)

app.get('/', async (req, res) => {
    connection.query(`INSERT INTO people(name) values("hugo")`)

    connection.query("SELECT * FROM people", function(err, result) {
        if (err) throw err;
        res.send('<h1>Full Cycle</h1><ul>' + result.map(r=>'<li>' + r.name + '</li>').join('') + '</ul>')
    });
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})
