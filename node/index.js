const express = require('express')
const mysql = require('mysql')

const app = express()
const port = 9000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values("Gabriel")`
connection.query(sql)

app.get('/', (_, res) => {
    connection.query("SELECT * FROM people", (_, result, __) => {
        res.send(`
            <div>
                <h1>Full Cycle Rocks!</h1>
                <ul>
                    ${result.map(item => 
                        `<li>${item.name}</li>`
                    ).join("")}
                </ul>
            </div>
        `)
    })

})

app.listen(port, () => {
    console.log('Rodando na porta: ', port)
})