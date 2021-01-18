UPDATE rounds SET full18score = $3 WHERE user_id = $1 AND round_id = $2
returning *;