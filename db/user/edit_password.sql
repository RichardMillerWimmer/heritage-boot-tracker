UPDATE boot_users
SET hash = $2
WHERE id = $1;