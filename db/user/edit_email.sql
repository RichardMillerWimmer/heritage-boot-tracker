UPDATE boot_users
SET email = $2
WHERE id = $1;