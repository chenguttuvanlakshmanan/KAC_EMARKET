var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "db.sqlite"

// database connection
let db = new sqlite3.Database(DBSOURCE, (err) => { console.log(err)})

module.exports = db

