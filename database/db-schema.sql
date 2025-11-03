-- Sqlite3
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY,
  uuid TEXT UNIQUE NOT NULL, -- UUID menggunakan TEXT
  username TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  email TEXT,
  password TEXT NOT NULL,
  created_at TEXT NOT NULL, -- menggunakan ISO8601 strings ("YYYY-MM-DD HH:MM:SS.SSS")
  updated_at TEXT NOT NULL, -- menggunakan ISO8601 strings ("YYYY-MM-DD HH:MM:SS.SSS")
  deleted_at TEXT           -- menggunakan ISO8601 strings ("YYYY-MM-DD HH:MM:SS.SSS")
);

CREATE INDEX idx_user_uuid ON users(uuid);

CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY,
  user_id INTEGER,
  content TEXT,
  created_at TEXT NOT NULL,  -- menggunakan ISO8601 strings ("YYYY-MM-DD HH:MM:SS.SSS")
  FOREIGN KEY (user_id) REFERENCES users(id)
);
