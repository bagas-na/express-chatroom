const fs = require("node:fs")

console.log("creating file...")
// Connect ke database SQLite atau membuat database baru jika belum ada
const Database = require("better-sqlite3")
const db = new Database("./database/chatroom.db") // Path dimulai dari root

console.log("done creating file")

// Menyalakan Write-Ahead-Logging (untuk mempercepat performa)
db.pragma('journal_mode = WAL');

// Membuat tabel sesuai schema yang telah dibuat (db-schema.sql)
const tableCreation = fs.readFileSync("./database/db-schema.sql", "utf-8");
db.exec(tableCreation);
