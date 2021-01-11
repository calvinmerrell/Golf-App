INSERT INTO users (username, hash, first_name, last_name, is_admin)
VALUES ($1,$2,$3,$4,$5)
RETURNING *;