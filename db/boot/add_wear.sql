UPDATE boots 
SET wears = wears + 1 
WHERE boot_id = $1;