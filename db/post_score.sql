INSERT INTO rounds
(user_id, date, course_id, teebox, front9score, back9score,full18score)
VALUES
($1, $2, $3, $4, $5, $6, $7)
returning *;