INSERT INTO rounds
(user_id, course_id, date, teebox, front9score, back9score,full18score)
VALUES
($1, $2, $3, $4, $5, $6, $7)
returning *;