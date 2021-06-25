DROP TABLE boot_users;
DROP TABLE boots;
DROP TABLE users_joins_boots

CREATE TABLE boot_users(
  user_id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  username VARCHAR(255) NOT NULL UNIQUE, 
  hash VARCHAR(1000) NOT NULL
  );

CREATE TABLE boots(
    boot_id SERIAL PRIMARY KEY,
    boot_name VARCHAR(50) NOT NULL,
    boot_image VARCHAR(255), 
    notes VARCHAR(500), 
    wears INTEGER, 
    cc INTEGER
);

CREATE TABLE users_joins_boots(
    user_id INTEGER REFERENCES boot_users(user_id),
    boot_id INTEGER REFERENCES boots(boot_id)
)