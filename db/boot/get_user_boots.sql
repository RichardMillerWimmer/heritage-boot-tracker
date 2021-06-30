SELECT * FROM boots
JOIN users_joins_boots ON boots.boot_id = users_joins_boots.boot_id
WHERE users_joins_boots.user_id = $1;