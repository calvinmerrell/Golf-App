-- CREATE TABLE users (
--     id SERIAL PRIMARY KEY, 
--     username VARCHAR(50) not null, 
--     hash VARCHAR(500) not null, 
--     first_name text not null, 
--     last_name text not null,
--     is_admin boolean
--     )

CREATE TABLE rounds (
  id SERIAL PRIMARY KEY, 
  user_id int, 
  date date, 
  course_id int, 
  teebox VARCHAR(10), 
  front9score int, 
  back9score int, 
  full18score int,
  FOREIGN KEY (user_id) references users(id)
  )
  
  CREATE TABLE courses (
  course_id SERIAL PRIMARY KEY,
  course_name VARCHAR(75),
  front9par int,
  back9par int,
  course_par int,
  -- par1 int, 
  -- par2 int, 
  -- par3 int, 
  -- par4 int, 
  -- par5 int, 
  -- par6 int, 
  -- par7 int, 
  -- par8 int, 
  -- par9 int, 
  -- par10 int, 
  -- par11 int, 
  -- par12 int, 
  -- par13 int, 
  -- par14 int, 
  -- par15 int, 
  -- par16 int, 
  -- par17 int, 
  -- par18 int
  -- )

--   INSERT INTO courses
-- (course_name, front9par, back9par, course_par, par1, par2, par3, par4, par5, par6, par7, par8, par9, par10, par11, par12, par13, par14, par15, par16, par17, par18 )
-- VALUES
-- ('Hobble Creek GC', 36, 37, 73, 4, 4,	5, 3,	4, 3,	4, 4,	5, 3,	4, 4,	5, 3,	5, 3,	5, 5);

-- INSERT INTO courses
-- (course_name, front9par, back9par, course_par, par1, par2, par3, par4, par5, par6, par7, par8, par9, par10, par11, par12, par13, par14, par15, par16, par17, par18 )
-- VALUES
-- ('Sleepy Ridge GC', 36, 36, 72, 4,	5,	4,	3,	5,	4,	3,	4,	4,  4,	4,	3,	5,	3,	4,	4,	5,	4);

-- INSERT INTO courses
-- (course_name, front9par, back9par, course_par, par1, par2, par3, par4, par5, par6, par7, par8, par9, par10, par11, par12, par13, par14, par15, par16, par17, par18 )
-- VALUES
-- ('Fox Hollow GC', 36, 36, 72, 4,	5,	3,	4,	4,	4,	4,	3,	5,  5,	4,	3,	4,	3,	4,	5,	4,	4);

-- INSERT INTO courses
-- (course_name, front9par, back9par, course_par, par1, par2, par3, par4, par5, par6, par7, par8, par9, par10, par11, par12, par13, par14, par15, par16, par17, par18 )
-- VALUES
-- ('TalonsCove GC', 36, 36, 72, 5,	4,	4,	3,	4,	3,	5,	3,	5, 4,	4,	4,	5,	3,	5,	4,	3,	4);

-- INSERT INTO courses
-- (course_name, front9par, back9par, course_par, par1, par2, par3, par4, par5, par6, par7, par8, par9, par10, par11, par12, par13, par14, par15, par16, par17, par18 )
-- VALUES
-- ('The Ranches GC', 36, 36, 72, 5,	4,	4,	4,	3,	4,	5,	3,	4, 4,	5,	3,	5,	4,	4,	3,	4,	4);

-- INSERT INTO courses
-- (course_name, front9par, back9par, course_par, par1, par2, par3, par4, par5, par6, par7, par8, par9, par10, par11, par12, par13, par14, par15, par16, par17, par18 )
-- VALUES
-- ('Timpanogos GC', 36, 36, 72, 5,	3,	4,	3,	5,	4,	3,	5,	4, 5,	4,	3,	4,	4,	3,	4,	4,	5);

-- INSERT INTO courses
-- (course_name, front9par, back9par, course_par, par1, par2, par3, par4, par5, par6, par7, par8, par9, par10, par11, par12, par13, par14, par15, par16, par17, par18 )
-- VALUES
-- ('The Oaks at Spanish Fork', 36, 36, 72, 4,	5,	5,	3,	4,	4,	4,	3,	4, 5,	4,	3,	4,	4,	4,	4,	3,	5);

-- INSERT INTO courses
-- (course_name, front9par, back9par, course_par, par1, par2, par3, par4, par5, par6, par7, par8, par9, par10, par11, par12, par13, par14, par15, par16, par17, par18 )
-- VALUES
-- ('Cedar Hills GC', 36, 36, 72, 4, 4,	3,	5,	3,	5,	4,	3,	5, 5,	3,	4,	4,	4,	3,	4,	4,	5);

-- insert into rounds (user_id, date, course_id, teebox, full18score)
-- VALUES (2, '2020-9-20', 5, 'blue', 79)