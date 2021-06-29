INSERT INTO boots(boot_name, boot_image, notes, wears, cc)
VALUES ($1, $2, $3, $4, $5)
returning *;