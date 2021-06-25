INSERT INTO boot_users (email, user_name, hash)
VALUES ($1, $2, $3)
returning *; 