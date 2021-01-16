SELECT * FROM rounds JOIN courses ON 
rounds.course_id = courses.course_id WHERE user_id = $1;