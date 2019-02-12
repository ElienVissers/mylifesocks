DROP TABLE IF EXISTS chatmessages;

CREATE TABLE chatmessages(
    id SERIAL PRIMARY KEY,
    message VARCHAR(500) NOT NULL,
    user_id INTEGER NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
