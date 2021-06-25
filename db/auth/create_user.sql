INSERT INTO boot_users (email, username, hash)
VALUES ($1, $2, $3)
returning *; 